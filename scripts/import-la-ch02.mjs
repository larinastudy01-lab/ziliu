import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { readCatalog, upsertSection, writeCatalog } from './catalog.mjs';

const files = process.argv.slice(2);
if (files.length !== 3) throw Error('Usage: node scripts/import-la-ch02.mjs <2-1_2-2.md> <2-3.md> <2-4.md>');
function chunks(text, regex) { const matches = [...text.matchAll(regex)]; return matches.map((match, index) => ({ key: match[1], header: (match[2] || '').trim(), body: text.slice(match.index + match[0].length, matches[index + 1]?.index).trim() })); }
function rows(text) {
  return text.split('\n').filter(line => line.trim().startsWith('|')).map(line => {
    const math = [], protectedLine = line.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|`[^`\n]+`/g, value => { math.push(value); return '\uE000' + (math.length - 1) + '\uE001'; });
    return protectedLine.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim().replace(/\uE000(\d+)\uE001/g, (_, index) => math[index]));
  });
}
const sources = files.map(file => { const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n'); return { file, text, parts: chunks(text, /^## ([^\n]+)\n/gm), sha256: createHash('sha256').update(text).digest('hex') }; });
function part(source, number) { const value = source.parts.find(item => item.key.startsWith(number + '.')); if (!value) throw Error('Missing source part ' + number); return value.body; }
function choices(text) {
  const markers = [...text.matchAll(/(?:^|[\n \u3000；。])([A-D])\.\s*/g)];
  if (markers.length !== 4 || markers.map(item=>item[1]).join('') !== 'ABCD') throw Error('Expected four ordered choices: ' + text.slice(0,70));
  return { text: text.slice(0, markers[0].index).trim(), options: markers.map((item,index)=>text.slice(item.index+item[0].length,markers[index+1]?.index).trim()) };
}
function optionExplanations(text) {
  const markers = [...text.matchAll(/(?:^|；)\s*([A-D])(?:[：:]|(?=[\u4e00-\u9fff= ])|(?=\$))/g)];
  if (markers.length !== 4 || markers.map(item=>item[1]).join('') !== 'ABCD') throw Error('Expected four option explanations: ' + text.slice(0,70));
  return markers.map((item,index)=>text.slice(item.index+item[0].length,markers[index+1]?.index).trim().replace(/^=/,''));
}
function hintMap(text) { return Object.fromEntries([...text.matchAll(/([EQ]\d{2})：([\s\S]*?)(?=[EQ]\d{2}：|$)/g)].map(match=>[match[1],match[2].trim()])); }
const payloads = [], chapter = { id: 'LA-CH02', title: '第 2 章 行列式', titleStatus: '章名與教材完整性待原目錄核對' };
function create(number, source, intro, notice, scoring, sourceId) {
  const id = 'LA-CH02-S0' + number, title = ['', '二階行列式', '高階行列式', '行列式的性質', '古典伴隨矩陣與克拉瑪法則'][number];
  const section = { id, title: `2-${number} ${title}`, sourceSectionId: sourceId, contentVersion: '0.1-review', reviewStatus: 'draft', notice: '第一階段審閱稿：' + notice + '教材轉錄、編輯補充與自編例題分開標示；考古題候選尚未核實，不列入正式題庫。', knowledgePointIds: [], blocks: [{ id: id + '-B-INTRO', type: 'concept', title: '符號與閱讀約定', provenance: '前置說明', knowledgePointIds: [], markdown: intro }], assessment: { id: id + '-AS01', scope: 'section', title: `2-${number} 小節測驗`, questionIds: [], totalPoints: scoring.total, scoringNote: scoring.total === null ? '原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。' : `選擇題各 ${scoring.choice} 分，手寫題各 ${scoring.written} 分，共 ${scoring.total} 分；手寫對照詳解自評。` } };
  const payload = { number, subjectId: 'linear-algebra', chapter, section, knowledgePoints: [], examples: [], questions: [], answers: {}, solutions: {}, scoring, prompts: {}, sourceReview: { filename: path.basename(source.file), sha256: source.sha256, contentVersion: section.contentVersion, status: 'draft', scope: id, sourceGroup: path.basename(source.file), pendingExamCount: 15, pendingExamImported: false, note: notice + '同份跨節稿件共用候選索引，不逐節加總為獨立考古題數；未製作大章綜合測驗。' } };
  payload.full = short => id + '-' + short.toUpperCase(); payloads.push(payload); return payload;
}
function point(payload, short, title, difficulty, markdown, provenance) {
  const item = { id: payload.full(short), title, difficulty, markdown, provenance };
  payload.knowledgePoints.push(item); payload.section.knowledgePointIds.push(item.id); return item;
}
function example(payload, short, text, ids, solution, sourceTitle = '自編模擬例題', material = false) {
  const item = { id: payload.full(short), title: '例題 ' + short.match(/\d+/)[0], type: /證明/.test(text) ? '證明題' : '手寫計算題', knowledgePointIds: ids, text, source: { kind: material ? 'material' : 'simulation', title: sourceTitle, ...(material ? { verificationStatus: 'pending_original' } : {}) } };
  if (!solution) throw Error('Missing example solution ' + short);
  payload.examples.push(item); payload.solutions[item.id] = { markdown: solution };
}
function question(payload, short, text, options, ids, type, solution, correct, explanations, hint = '') {
  const isChoice = !!options, points = isChoice ? payload.scoring.choice : payload.scoring.written;
  const item = { id: payload.full(short), subjectId: payload.subjectId, chapterId: chapter.id, sectionId: payload.section.id, title: `線性代數 2-${payload.number} 小節測驗 · 第 ${payload.questions.length+1} 題`, type: isChoice ? '選擇題' : type, text, ...(isChoice ? { options } : {}), points, scoringStatus: points === null ? 'unspecified' : 'specified', knowledgePointIds: ids, tags: ids.map(id=>payload.knowledgePoints.find(point=>point.id===id)?.title || ''), source: { kind: 'simulation', title: '使用者提供審閱稿 · 自編模擬題' } };
  if (!solution || item.tags.some(tag=>!tag)) throw Error('Incomplete question ' + short);
  payload.questions.push(item); payload.section.assessment.questionIds.push(item.id);
  payload.solutions[item.id] = { markdown: (hint ? '**提示：** ' + hint + '\n\n' : '') + solution };
  if (isChoice) { if (!/^[A-D]$/.test(correct) || explanations?.length!==4) throw Error('Incomplete choice solution ' + short); payload.answers[item.id] = { correctOption: correct.charCodeAt(0)-65 }; payload.solutions[item.id].optionExplanations = explanations; }
}
function blocks(payload, summary, extension = '') {
  let serial = 1; const next = () => payload.full('B'+String(serial++).padStart(3,'0')), shown = new Set();
  for (const point of payload.knowledgePoints) {
    payload.section.blocks.push({ id: next(), type: 'concept', title: point.title, provenance: point.provenance, markdown: point.markdown, knowledgePointIds: [point.id] });
    for (const example of payload.examples.filter(example=>example.knowledgePointIds.includes(point.id)&&!shown.has(example.id))) { shown.add(example.id); payload.section.blocks.push({ id: next(), type: 'example', exampleId: example.id, knowledgePointIds: example.knowledgePointIds }); }
    payload.section.blocks.push({ id: next(), type: 'note', title: '停一下，親手推導', height: 230, layout: 'split', knowledgePointIds: [point.id], prompt: payload.prompts[point.id] || '對照上方觀念，先遮住詳解，自行寫出推導、適用條件與驗算。' });
  }
  if (shown.size!==payload.examples.length) throw Error('Unplaced example in ' + payload.section.id);
  if (extension) payload.section.blocks.push({ id: payload.full('B-EXT'), type: 'concept', title: '補充延伸與適用限制', provenance: '補充延伸', knowledgePointIds: [], markdown: extension });
  payload.section.blocks.push({ id: next(), type: 'summary', title: '考前摘要與錯誤檢查', markdown: summary });
  payload.section.blocks.push({ id: next(), type: 'assessment', assessmentId: payload.section.assessment.id });
  payload.section.blocks.push({ id: next(), type: 'note', title: '測驗後訂正與重點回想', layout: 'inline', height: 250, knowledgePointIds: payload.section.knowledgePointIds, prompt: '記錄錯題、出錯步驟、適用條件與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。' });
}

const first = sources[0], firstRows = rows(part(first,4)).filter(row=>/^la-ex-\d{3}$/.test(row[0]));
const firstSolutions = chunks(part(first,5), /^### (la-ex-[^\n]+)\n/gm);
const individualSolutions = {
  '001': String.raw`辨識：二階直接用 $ad-bc$。$1\cdot4-2\cdot3=-2$。提示：先把兩個乘積算完。常錯：交換兩項順序。`,
  '002': String.raw`辨識：二階直接用 $ad-bc$。$(-7)6-4(-3)=-42+12=-30$。提示：先把兩個乘積算完，注意減去負數。常錯：漏寫括號或負號。`,
  '004': String.raw`單列倍數得 $\det(B)=3(-2)=-6$；兩列都乘3得 $\det(3A)=3^2(-2)=-18$。提示：數一共有幾列被乘3。常錯：整體縮放只提出一次。`,
  '005': String.raw`第一列為第二列兩倍，所以行列式為0；直接算為 $6\cdot4-8\cdot3=0$。辨識比例列後可直接判斷。`,
  '009': String.raw`轉置不改值，為2；三階每列乘 $-1$，故 $\det(-A)=(-1)^3(2)=-2$。取 $A=B=I_2$，$\det(A+B)=4\ne2=\det A+\det B$。提示：先辨認階數與運算。`,
  '010': String.raw`下三角，雖左下有5仍可乘主對角，$2(-1)4=-8$。提示：先檢查完整零區域，不能以一個左下非零數否定所有三角結構。`,
  '012': String.raw`逐列微分得 $\begin{vmatrix}1&2x\\1&3x\end{vmatrix}+\begin{vmatrix}x&x^2\\0&3\end{vmatrix}=x+3x=4x$。驗算 $W=3x^2-x^2=2x^2$，故 $W'=4x$。提示：每次只動一列。常錯：只算 $\det(A')=3$。`,
  '013': String.raw`第一列微分等於第二列，第二列微分等於第三列，因此前兩項為0；最後一列微分為零列，第三項也為0，故 $W'=0$。也可由三角矩陣 $W=2$ 驗證。常錯：把此結論誤記成所有函數行列式只微分最後一列。`
};
const firstAnswers = rows(part(first,8)).filter(row=>/^la-q-\d{3}$/.test(row[0]));
const firstWritten = chunks(part(first,8), /^\*\*(la-q-\d{3})\*\*：/gm);
for (const number of [1,2]) {
  const payload = create(number,first,part(first,1),'未取得九張原圖，原教材完整性待核。缺少完整矩陣或題幹的課本例7、實例1、2、6未補造。',{total:null,choice:null,written:10},`la-ch02-s0${number}`);
  payload.section.assessment.sourceId = `la-ch02-s0${number}-test01`;
  for (const item of chunks(part(first,number+1), /^### (K\d{2})｜([^\n]+)\n/gm)) {
    const clean = item.body.replace(/例題引用：[^。\n]*。/g,''), prompt = clean.match(/手寫提示：([^\n]+)/)?.[1];
    const title = item.header.replace(/（la-ch02[^）]+）/, '').replace(/★+/g,'').trim();
    const pointItem = point(payload,item.key,title,item.header.match(/★+/)[0].length,clean.replace(/手寫提示：[^\n]+/g,'').trim(),'教材整理 · 原圖待核對');
    if (prompt) payload.prompts[pointItem.id] = prompt;
  }
  for (const row of firstRows.filter(row=>row[1].startsWith('s0'+number+'-'))) {
    const short = row[0].slice(-3), ids = [payload.full(row[1].match(/k\d{2}/)[0])];
    const solution = individualSolutions[short] || firstSolutions.find(item=>item.key==='la-ex-'+short)?.body;
    let stem = row[4];
    if (short==='011') { const matrix = firstRows.find(row=>row[0]==='la-ex-006')[4].match(/\$A=[^$]+\$/)[0]; stem = stem.replace('以例006矩陣', '對 '+matrix); }
    example(payload,'EX'+short,stem,ids,solution,row[3]==='教材轉錄待核'?'教材轉錄待核 · 原圖尚未確認':'使用者提供審閱稿 · 自編模擬例題',row[3]==='教材轉錄待核');
  }
  const quiz = chunks(part(first,7), /^### (la-ch02-s0[12]-test01)\n/gm).find(item=>item.key===payload.section.assessment.sourceId);
  for (const row of rows(quiz.body).filter(row=>/^la-q-\d{3}$/.test(row[0]))) {
    const isChoice = row[3]==='單選', parsed = isChoice ? choices(row[4]) : {text:row[4]}, answer = firstAnswers.find(answer=>answer[0]===row[0]);
    const ids = [...row[1].matchAll(/k\d{2}/g)].map(match=>payload.full(match[0]));
    const solution = isChoice ? answer[3] : firstWritten.find(item=>item.key===row[0])?.body;
    question(payload,'Q'+row[0].slice(-3),parsed.text,parsed.options,ids,/[17]07$/.test(row[0])||row[0].endsWith('207')?'證明題':'手寫計算題',solution,answer?.[1],isChoice?optionExplanations(answer[3]):null,answer?.[2]);
  }
  const summary = chunks(part(first,9), /^### (2-[12])摘要\n/gm).find(item=>item.key==='2-'+number).body.split('錯題紀錄（')[0].trim();
  blocks(payload,summary+(number===2?'\n\n### 自我檢查\n\n'+part(first,9).split('自我檢查：')[1].trim():''),number===2?part(first,10):'');
}

const second = sources[1], secondMap = rows(part(second,2)).filter(row=>/^K\d{2}$/.test(row[0]));
const bridge3 = String.raw`**與前節的記號對照：**2-2 的 $A_{ij}$ 表示子矩陣、$M_{ij}$ 表示子式、$C_{ij}$ 表示餘因子。本節改以 $M_{ij}$ 表示子矩陣、$K_{ij}$ 表示餘因子，請以本節符號表為準。`;
const p3 = create(3,second,bridge3+'\n\n'+part(second,1),'未取得前次記載的14張原圖；完整原題、頁數及原矩陣仍待核對。本節餘因子記為 Kᵢⱼ，與前節記號不同，請先讀符號表。',{total:40,choice:4,written:10},'LA-C02-S03');
p3.section.assessment.sourceId='LA-C02-S03-A01';
for (const item of chunks(part(second,3)+'\n\n'+part(second,4), /^### (K\d{2})｜([^\n]+)\n/gm)) {
  const row=secondMap.find(row=>row[0]===item.key);
  point(p3,item.key,item.header.replace(/（教材整理[^）]*）/,''),row[2].length,item.body,/補充/.test(item.header+item.body)?'教材整理 · 含編輯補充':'教材整理轉述');
}
const secondSolutionParts=chunks(part(second,7),/^### (7\.[123]) ([^\n]+)\n/gm);
const secondExamples=chunks(secondSolutionParts.find(item=>item.key==='7.1').body,/^\*\*(E\d{2})\*\*\n/gm);
for(const row of rows(part(second,5)).filter(row=>/^E\d{2}$/.test(row[0]))) example(p3,row[0],row[3],[...row[1].matchAll(/K\d{2}/g)].map(match=>p3.full(match[0])),secondExamples.find(item=>item.key===row[0])?.body);
const secondChoices=secondSolutionParts.find(item=>item.key==='7.2').body, secondChoiceMap=rows(secondChoices).filter(row=>/^Q\d{2}$/.test(row[0]));
const secondChoiceSolutions=chunks(secondChoices,/^\*\*(Q\d{2})：\*\*/gm), secondWritten=chunks(secondSolutionParts.find(item=>item.key==='7.3').body,/^\*\*(H\d{2})\*\*\n/gm);
for(const item of chunks(part(second,6),/^### ([QH]\d{2})｜([^\n]+)\n/gm)) {
  const isChoice=item.key.startsWith('Q'),parsed=isChoice?choices(item.body):{text:item.body},answer=secondChoiceMap.find(row=>row[0]===item.key);
  const solution=isChoice?secondChoiceSolutions.find(solution=>solution.key===item.key).body:secondWritten.find(solution=>solution.key===item.key).body;
  const explanations=isChoice?(item.key==='Q03'?[String.raw`同列正常展開，等於 $\det A$；取 $A=I_3$ 時為1。`,String.raw`同列正常展開，等於 $\det A$；取 $A=I_3$ 時為1。`,String.raw`同一行的正常展開，也等於 $\det A$，不必為0。`,String.raw`第1列元素搭配第2列餘因子，錯位展開必為0。`]:optionExplanations(solution)):null;
  question(p3,item.key,parsed.text,parsed.options,[...item.header.matchAll(/K\d{2}/g)].map(match=>p3.full(match[0])),item.key==='H02'?'證明題':'手寫計算題',solution,answer?.[1],explanations,answer?.[2]);
}
blocks(p3,part(second,8).split('### 8.4')[0].trim());

const third=sources[2], thirdMap=rows(part(third,2)).filter(row=>/^K\d{2}$/.test(row[0]));
const bridge4=String.raw`本節以 $M_{ij}$ 表示子行列式（純量）、$C_{ij}$ 表示餘因子；前節的餘因子 $K_{ij}$ 在此對應為 $C_{ij}$。`;
const p4=create(4,third,part(third,2).split('| ID |')[0].trim()+'\n\n'+bridge4,'未取得七張原圖；例23、例7的矩陣依文字轉述，原例號待核。原例28缺少矩陣未重建，另以自編例題練習。前文標成不可逆的矩陣已更正，其行列式為 −94，實際可逆。',{total:100,choice:8,written:30},'la-ch02-s04');
p4.section.assessment.sourceId='la-ch02-s04-A01';
for(const item of chunks(part(third,3),/^### (K\d{2})｜([^\n]+)\n/gm)) {
  const row=thirdMap.find(row=>row[0]===item.key);
  point(p4,item.key,item.header,row[2].length,item.body,/補充/.test(item.body)?'教材整理 · 含補充延伸':'教材整理 · 原圖待核對');
}
const thirdStems=chunks(part(third,4),/^### (E\d{2})\n/gm),thirdSolutions=chunks(part(third,6),/^### (E\d{2}) 解答\n/gm),thirdHints=hintMap(part(third,5));
const sourceMeta=rows(part(third,4)).filter(row=>/^E\d{2}$/.test(row[0]));
for(const item of thirdStems) {
  const row=sourceMeta.find(row=>row[0]===item.key),material=row[3].startsWith('原教材');let stem=item.body;
  if(item.key==='E02')stem=stem.replace('沿用E01，', '對 '+thirdStems[0].body.match(/\$A=[^$]+\$/)[0]+'，');
  example(p4,item.key,stem,[p4.full(row[1])],(thirdHints[item.key]?'**提示：** '+thirdHints[item.key]+'\n\n':'')+thirdSolutions.find(solution=>solution.key===item.key).body,row[3],material);
}
const thirdAnswers=rows(part(third,9)).filter(row=>/^Q\d{2}$/.test(row[0])),thirdChoiceSolutions=chunks(part(third,9).split('### Q06')[0],/^(Q\d{2})：/gm),thirdWritten=chunks(part(third,9),/^### (Q0[67]) ([^\n]+)\n/gm),quizHints=hintMap(part(third,8));
for(const item of chunks(part(third,7),/^### (Q\d{2})｜([^\n]+)\n/gm)) {
  const isChoice=item.header.includes('單選'),parsed=isChoice?choices(item.body):{text:item.body},answer=thirdAnswers.find(row=>row[0]===item.key),solution=(isChoice?thirdChoiceSolutions:thirdWritten).find(solution=>solution.key===item.key).body;
  question(p4,item.key,parsed.text,parsed.options,[...item.header.matchAll(/K\d{2}/g)].map(match=>p4.full(match[0])),item.key==='Q07'?'證明題':'手寫計算題',solution,answer?.[1],isChoice?optionExplanations(solution):null,quizHints[item.key]);
}
blocks(p4,part(third,11).split('錯題紀錄空白模板')[0].trim()+'\n\n### 自我檢核\n\n'+part(third,11).split('自我檢核：')[1].trim());
const expected=[{k:4,e:5},{k:6,e:8},{k:11,e:14},{k:8,e:8}],catalog=readCatalog();
for(const payload of payloads) {
  const expectation=expected[payload.number-1];
  if(payload.knowledgePoints.length!==expectation.k||payload.examples.length!==expectation.e||payload.questions.length!==7||Object.keys(payload.answers).length!==5)throw Error('Incomplete section '+payload.section.title);
  upsertSection(catalog,payload);
  console.log(`${payload.section.title}: ${payload.knowledgePoints.length} knowledge points, ${payload.examples.length} examples, ${payload.section.blocks.length} blocks, 7 questions; total ${payload.scoring.total??'unspecified'}.`);
}
writeCatalog(catalog);
