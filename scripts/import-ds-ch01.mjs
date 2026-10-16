import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { readCatalog, upsertSection, writeCatalog } from './catalog.mjs';

const files = process.argv.slice(2);
if (files.length !== 3) throw Error('Usage: node scripts/import-ds-ch01.mjs <1-1_to_1-2.md> <1-3_to_1-4.md> <1-5_to_1-9.md>');
function chunks(text, regex) { const matches = [...text.matchAll(regex)]; return matches.map((match, index) => ({ key: match[1], header: (match[2] || '').trim(), body: text.slice(match.index + match[0].length, matches[index + 1]?.index).trim() })); }
function rows(text) {
  return text.split('\n').filter(line => line.trim().startsWith('|')).map(line => {
    const math = [], protectedLine = line.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|`[^`\n]+`/g, value => { math.push(value); return '\uE000' + (math.length - 1) + '\uE001'; });
    return protectedLine.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim().replace(/\uE000(\d+)\uE001/g, (_, index) => math[index]));
  });
}
const sources = files.map(file => {
  const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  return { file, text, parts: chunks(text, /^## ([^\n]+)\n/gm), sha256: createHash('sha256').update(text).digest('hex') };
});
function part(source, number) { const result = source.parts.find(item => item.key.startsWith(number + '.')); if (!result) throw Error('Missing source part ' + number); return result.body; }
function tex(text) { return text.replace(/Θ/g, '\\Theta').replace(/Ω/g, '\\Omega').replace(/φ/g, '\\varphi').replace(/²/g, '^2').replace(/³/g, '^3').replace(/⁴/g, '^4').replace(/ⁿ/g, '^n').replace(/·/g, '\\cdot ').replace(/≥/g, '\\ge ').replace(/≤/g, '\\le ').replace(/−/g, '-').replace(/\b(log)\b/g, '\\log'); }
function format(text) {
  const protectedParts = [], hold = value => { protectedParts.push(value); return '\uE000' + (protectedParts.length - 1) + '\uE001'; };
  let result = text.replace(/^```[^\n]*\n[\s\S]*?^```[ \t]*$|`[^`\n]+`|\$\$[\s\S]*?\$\$|\$[^$\n]+\$/gm, hold);
  result = result.replace(/(?:Θ|Ω|O)\([^()\n]+\)|\b(?:2rc\+2r\+1|2n\+3|n\+1|n≥[012]|n≤[012]|r,c≥1|r=c=n≥1)\b/g, value => hold('$' + tex(value) + '$'));
  return result.replace(/\uE000(\d+)\uE001/g, (_, index) => protectedParts[index]);
}
function choices(text, compact = false) {
  const markers = [...text.matchAll(compact ? /(?:^|[\n \u3000])([A-D])(?=[^\s])/g : /(?:^|[\n \u3000])(?:- )?([A-D])\.\s*/g)];
  if (markers.length !== 4 || markers.map(item => item[1]).join('') !== 'ABCD') throw Error('Expected four choices: ' + text.slice(0,80));
  return { text: text.slice(0, markers[0].index).trim(), options: markers.map((item, index) => text.slice(item.index + item[0].length, markers[index + 1]?.index).trim()) };
}
const catalog = readCatalog(), payloads = [];
function sectionPayload(number, source, sourceSectionId) {
  const id = 'DS-CH01-S' + String(number).padStart(2, '0');
  const title = ['','系統生命週期','演算法規格與遞迴','資料抽象','效能分析','漸近符號','程式與遞迴時間複雜度','主定理','對數公式與函數排序','猜測法與漸近關係'][number];
  const first = number <= 2, notice = first ? '依前次六張講義整理文字重編，原圖、原例題與章節切分仍待確認。' : number <= 4 ? '依先前教材整理重編，原始五張圖片、英文定義、完整程式及計費表格仍待核對。' : '依先前整理文字與填空答案重編，原始圖片、完整填空講義及目錄仍待核對。';
  const section = { id, title: `1-${number} ${title}`, sourceSectionId, contentVersion: '0.1-review', reviewStatus: 'draft', notice: '第一階段審閱稿：' + notice + '自編例題、補充與勘誤另行標示；未核實考古題不列入正式題庫。' + (number === 2 ? '自訂 A(n,m) 僅供暫定定義下的條件式練習，不當作原教材定義。' : ''), knowledgePointIds: [], blocks: [], assessment: { id: id + '-AS01', scope: 'section', title: `1-${number} 小節測驗`, questionIds: [], totalPoints: first ? 40 : null, scoringNote: first ? '選擇題各 4 分，手寫題各 10 分，共 40 分。' : '原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。' } };
  const payload = { number, subjectId: 'data-structures', chapter: { id: 'DS-CH01', title: '第 1 章', titleStatus: '正式章名與教材完整性待核對' }, section, knowledgePoints: [], examples: [], questions: [], answers: {}, solutions: {}, sourceReview: { filename: path.basename(source.file), sha256: source.sha256, status: 'draft', contentVersion: section.contentVersion, scope: id, sourceGroup: path.basename(source.file), pendingExamCount: 15, pendingExamImported: false, note: notice + '同份稿件的 15 筆考古候選由多節共用，不視為獨立題數，皆未入正式題庫。未製作大章綜合測驗。' } };
  payload.full = sourceId => id + '-' + sourceId.replace(/^ds-/i, '').toUpperCase();
  payloads.push(payload); return payload;
}
function point(payload, sourceId, title, difficulty, markdown, provenance = '教材整理') {
  const item = { id: payload.full(sourceId), sourceId, title, difficulty, provenance, markdown: format(markdown) };
  payload.knowledgePoints.push(item); payload.section.knowledgePointIds.push(item.id); return item;
}
function example(payload, sourceId, text, knowledgeIds, solution, supplemental = false) {
  const item = { id: payload.full(sourceId), sourceId, title: '例題 ' + (sourceId.match(/\d+[a-z]?\d*$/i)?.[0] || sourceId), type: /證明/.test(text) ? '證明題' : '手寫計算題', knowledgePointIds: knowledgeIds, text: format((supplemental ? '**補充延伸例題**\n\n' : '') + text), source: { kind: 'simulation', title: '使用者提供審閱稿 · 自編模擬例題' } };
  if (/DS-E10/i.test(sourceId)) item.text = '**條件式自編練習 · 定義待原圖確認**\n\n' + item.text;
  payload.examples.push(item); payload.solutions[item.id] = { markdown: format(solution) }; return item;
}
function question(payload, sourceId, text, options, ids, type, solution, correct, explanations, hint = '') {
  const isChoice = !!options;
  const item = { id: payload.full(sourceId), sourceId, subjectId: payload.subjectId, chapterId: 'DS-CH01', sectionId: payload.section.id, title: `資料結構 1-${payload.number} 小節測驗 · 第 ${payload.questions.length + 1} 題`, type: isChoice ? '選擇題' : type, text: format(text), ...(options ? { options: options.map(format) } : {}), points: isChoice ? (payload.number <= 2 ? 4 : null) : 10, scoringStatus: isChoice && payload.number > 2 ? 'unspecified' : 'specified', knowledgePointIds: ids, tags: ids.map(id => payload.knowledgePoints.find(point => point.id === id)?.title || ''), source: { kind: 'simulation', title: '使用者提供審閱稿 · 自編模擬題' } };
  if (item.tags.some(tag => !tag)) throw Error('Unresolved question point: ' + sourceId);
  payload.questions.push(item); payload.section.assessment.questionIds.push(item.id);
  payload.solutions[item.id] = { markdown: format((hint ? '**提示：** ' + hint + '\n\n' : '') + solution) };
  if (isChoice) {
    if (!/^[A-D]$/.test(correct) || explanations?.length !== 4) throw Error('Incomplete choice solution: ' + sourceId);
    payload.answers[item.id] = { correctOption: correct.charCodeAt(0) - 65 };
    payload.solutions[item.id].optionExplanations = explanations.map(format);
  }
}
function addBlocks(payload, summary, prompts = {}) {
  let serial = 1;
  const next = () => payload.section.id + '-B' + String(serial++).padStart(3, '0');
  for (const point of payload.knowledgePoints) {
    payload.section.blocks.push({ id: next(), type: 'concept', title: point.title, provenance: point.provenance, markdown: point.markdown, knowledgePointIds: [point.id] });
    for (const item of payload.examples.filter(example => example.knowledgePointIds.includes(point.id))) payload.section.blocks.push({ id: next(), type: 'example', exampleId: item.id, knowledgePointIds: [point.id] });
    payload.section.blocks.push({ id: next(), type: 'note', title: '停一下，寫成自己的理解', layout: 'split', height: 230, knowledgePointIds: [point.id], prompt: format(prompts[point.sourceId] || '對照上方觀念與例題，先遮住詳解，自行推導並寫下適用條件、方法與驗算。') });
  }
  payload.section.blocks.push({ id: next(), type: 'summary', title: '考前摘要與條件檢查', markdown: format(summary) });
  payload.section.blocks.push({ id: next(), type: 'assessment', assessmentId: payload.section.assessment.id });
  payload.section.blocks.push({ id: next(), type: 'note', title: '測驗後訂正與重點回想', layout: 'inline', height: 250, prompt: '記錄錯題、卡點與正確辨識線索，再遮住解答重做。原作答與訂正分開保留。', knowledgePointIds: payload.section.knowledgePointIds });
}

// First manuscript: 1-1 and 1-2. Its incomplete 1-3 fragment is merged below.
const first = sources[0], firstMap = rows(part(first, 1)), firstExamples = rows(part(first, 5)).filter(row => /^DS-E\d+$/.test(row[0]));
const firstSolutions = chunks(part(first, 6), /^### (DS-E\d{2})\n/gm);
const firstAnswerRows = rows(part(first, 9)).filter(row => /^Q\d{2}$/.test(row[0]));
const firstWritten = chunks(part(first, 9), /^### (DS-W\d{2}) ([^\n]*)\n/gm);
const hints = Object.fromEntries([...part(first, 8).matchAll(/([QW]\d{2})：([\s\S]*?)(?=[QW]\d{2}：|$)/g)].map(match => [match[1], match[2].trim()]));
for (const number of [1,2]) {
  const payload = sectionPayload(number, first, 'DS-C01-S0' + number), prompts = {};
  payload.section.assessment.sourceId = 'DS-AS0' + number;
  const concepts = chunks(part(first, number + 1), /^### (DS-K\d{2})｜([^\n]+)\n/gm);
  for (const concept of concepts) {
    const [markdown, prompt] = concept.body.split(/\n`DS-B\d{2}-H`(?: 手寫提示)?[：:]\s*/);
    const row = firstMap.find(row => row[0] === concept.key);
    point(payload, concept.key, concept.header, row[2].length, markdown.trim(), concept.key === 'DS-K10' ? '條件式自編 · 定義待原圖確認' : /自編(?:補充|延伸)/.test(markdown) ? '教材整理 · 含自編補充' : '教材整理');
    if (prompt) prompts[concept.key] = prompt.replace(/此處保持空白[\s\S]*$/, '').trim();
    const sourceId = row[3], stem = firstExamples.find(row => row[0] === sourceId)?.[1], solution = firstSolutions.find(item => item.key === sourceId)?.body;
    if (!stem || !solution) throw Error('Missing first-source example ' + sourceId);
    example(payload, sourceId, stem, [payload.full(concept.key)], solution);
  }
  for (const row of rows(part(first, 7)).filter(row => /^DS-[QW]\d{2}／/.test(row[0]))) {
    const [sourceId, refs] = row[0].split('／'), isChoice = sourceId.startsWith('DS-Q'), ordinal = Number(sourceId.slice(-2));
    if ((isChoice ? ordinal <= 5 : ordinal <= 2) !== (number === 1)) continue;
    const ids = [...refs.matchAll(/K\d{2}/g)].map(match => payload.full('DS-' + match[0]));
    const stem = row[1].replace(/^(單選|手寫)：/, ''), parsed = isChoice ? choices(stem, true) : { text: stem };
    if (sourceId === 'DS-W04') {
      const definition = payload.knowledgePoints.find(point=>point.sourceId==='DS-K10').markdown.match(/\$\$[\s\S]*?\$\$/)?.[0];
      if (!definition) throw Error('Missing conditional definition for standalone question');
      parsed.text += '\n\n**條件式自編練習：以下暫定定義待原圖確認，僅在此定義成立下作答。**\n\n' + definition + '\n\n$n,m$ 為非負整數。';
    }
    const answer = isChoice ? firstAnswerRows.find(row => row[0] === sourceId.slice(3)) : null;
    const solution = isChoice ? answer.slice(2).map((value,index)=>'**' + 'ABCD'[index] + '：** ' + value).join('\n\n') : firstWritten.find(item=>item.key === sourceId)?.body;
    if (!solution) throw Error('Missing first-source assessment solution ' + sourceId);
    question(payload, sourceId, parsed.text, parsed.options, ids, sourceId === 'DS-W04' ? '手寫計算題' : '手寫問答題', solution, answer?.[1], answer?.slice(2), hints[sourceId.slice(3)]);
  }
  addBlocks(payload, number === 1 ? '需求 → 分析 → 設計 → 實作與修正 → 驗證。\n\n資料表示與操作須一起設計；由上而下與由下而上可交互使用。正確性證明、測試與除錯各有不同目的，有限測試不能取代對所有合法輸入的論證。' : part(first, 11), prompts);
}

// Second manuscript: complete 1-3 and 1-4; keep the earlier extra ADT example.
const second = sources[1], secondMap = rows(part(second, 1));
const secondAnswers = rows(part(second, 5)).filter(row => /^ds-q\d{4}$/.test(row[0]));
const secondWritten = chunks(part(second, 5).split('### 5.2 手寫題參考答案')[1], /^\*\*(ds-q\d{4})\*\*\n/gm);
for (const number of [3,4]) {
  const payload = sectionPayload(number, second, 'ds-01-0' + number), lecture = part(second, number - 1);
  payload.section.assessment.sourceId = 'ds-a1' + number + '01';
  for (const item of chunks(lecture.split('\n### 1-' + number + ' 例題題目區')[0], /^### (ds-k\d{4})｜([^\n]+)\n/gm)) {
    const row = secondMap.find(row => row[0] === item.key);
    point(payload, item.key, item.header, row[2].length, item.body, item.key === 'ds-k1406' ? '補充延伸' : '教材整理 · 原圖待核對');
  }
  const stems = lecture.split('例題題目區（均為編者自編）')[1].split('### 1-' + number + ' 例題詳解區')[0].split('\n手寫提示：')[0];
  const explanations = chunks(lecture.split('例題詳解區（系統應預設收合）')[1], /^\*\*(ds-e\d{4})\*\*：/gm);
  const entries = number === 3 ? chunks(stems, /^\*\*(ds-e\d{4})｜([^\n]+?)\*\*：/gm).map(item=>({id:item.key,text:item.body,point:item.header.match(/ds-k\d{4}/)[0]})) : rows(stems).filter(row=>/^ds-e\d{4}$/.test(row[0])).map(row=>({id:row[0],text:row[2],point:row[1].match(/ds-k\d{4}/)[0]}));
  for (const item of entries) example(payload, item.id, item.text, [payload.full(item.point)], explanations.find(solution=>solution.key === item.id).body);
  if (number === 3) {
    example(payload, 'DS-E14', firstExamples.find(row=>row[0]==='DS-E14')[1], [payload.full('ds-k1302')], firstSolutions.find(item=>item.key==='DS-E14').body, true);
    payload.sourceReview.additionalSources = [{ filename: path.basename(first.file), sha256: first.sha256, note: '原 1-3 開頭併入完整 1-3；保留 DS-E14 自編例題，不重複建立 DS-K14。' }];
  }
  const quiz = chunks(part(second, 4), /^### (ds-a\d{4})｜([^\n]+)\n/gm).find(item=>item.key === payload.section.assessment.sourceId);
  for (const item of chunks(quiz.body, /^\*\*(ds-q\d{4})｜([^\n]+?)\*\*：/gm)) {
    const isChoice = item.header.includes('單選'), parsed = isChoice ? choices(item.body) : { text: item.body };
    if (item.key === 'ds-q1402') { parsed.options[3] = parsed.options[3].replace('採固定字長模型。','').trim(); parsed.text += '採固定字長模型。'; }
    if (item.key === 'ds-q1406') {
      const code = payload.knowledgePoints.find(point=>point.sourceId==='ds-k1403').markdown.match(/先前轉述的教材遞迴版本為：\s*(```c[\s\S]*?```)/)?.[1];
      if (!code) throw Error('Missing transcribed recursive-sum program');
      parsed.text += '\n\n以下是待原圖核對的轉述版本；此處 $n$ 表示元素個數：\n\n' + code;
    }
    if (item.key === 'ds-q1407') {
      const code = payload.knowledgePoints.find(point=>point.sourceId==='ds-k1405').markdown.match(/```c[\s\S]*?```/)?.[0];
      if (!code) throw Error('Missing matrix-addition program');
      parsed.text = '以下程式採三列計費：外層控制、內層控制、元素相加及指定，每列每次執行均算一步。\n\n' + code + '\n\n' + parsed.text;
    }
    const ids = [...item.header.matchAll(/ds-k\d{4}/g)].map(match=>payload.full(match[0])), answer = secondAnswers.find(row=>row[0]===item.key);
    const solution = isChoice ? answer.slice(3).map((value,index)=>'**'+'ABCD'[index]+'：** '+value).join('\n\n') : secondWritten.find(solution=>solution.key === item.key)?.body;
    question(payload, item.key, parsed.text, parsed.options, ids, item.key === 'ds-q1306' ? '手寫問答題' : '手寫計算題', solution, answer?.[2], answer?.slice(3), answer?.[1]);
  }
  const summaryRows = rows(part(second, 7)).filter(row=>number === 3 ? ['ADT','運算規格'].includes(row[0]) : ['時間分析','空間分析','精確步數','迴圈檢查','遞迴空間','矩陣加法'].includes(row[0]));
  const summary = '| 必記項目 | 一句話 |\n|---|---|\n' + summaryRows.map(row=>'| '+row.join(' | ')+' |').join('\n');
  const prompt = lecture.split('手寫提示：')[1]?.split('此處留白')[0].split('右側／下方')[0].split('\n### ')[0].trim();
  addBlocks(payload, summary, Object.fromEntries(payload.knowledgePoints.map(point=>[point.sourceId,prompt])));
}

// Third manuscript: separate embedded example solutions from five lectures.
const third = sources[2], lectures = chunks(part(third, 2), /^### 1-([5-9]) ([^\n]+)\n/gm);
const allQuiz = chunks(part(third, 3), /^### 1-([5-9]) ([^\n]+)\n/gm);
const details = [...part(third, 4).matchAll(/<details><summary>(ds-q\d{2}[mw]\d)：[^<]*<\/summary>([\s\S]*?)<\/details>/g)].map(match=>({id:match[1],body:match[2].trim()}));
for (const lecture of lectures) {
  const number = Number(lecture.key), payload = sectionPayload(number, third, 'ds-s1' + number);
  payload.section.assessment.sourceId = 'ds-a1' + number;
  const normalized = lecture.body.replace(/^\*\*補充｜([^\n]+)\*\*$/gm, '#### 補充｜$1');
  const prompt = lecture.body.match(/手寫提示：([\s\S]*?)(?=摘要：|$)/)?.[1].replace('右側保留空白。','').trim();
  const summary = lecture.body.split('摘要：').at(-1).trim();
  for (const item of chunks(normalized, /^#### (?:教材整理|補充)｜(ds-k\d{2}[a-z])：([^\n]+)\n/gm)) {
    const examples = [...item.body.matchAll(/\*\*((?:補充)?例題) (ds-q\d{2}e\d)｜[^\n]*?\*\*：([\s\S]*?)<details><summary>[^<]*<\/summary>([\s\S]*?)<\/details>/g)];
    const body = item.body.replace(/\*\*(?:補充)?例題 ds-q\d{2}e\d｜[^\n]*?\*\*：[\s\S]*?<\/details>/g, '').split('手寫提示：')[0].trim();
    const supplemental = item.key === 'ds-k15c';
    point(payload, item.key, item.header.replace(/\s+★+$/, ''), item.header.match(/★+/)?.[0].length || 3, body, supplemental ? '補充延伸' : '教材整理');
    for (const match of examples) {
      let stem = match[3].trim();
      if (match[2] === 'ds-q16e3') stem = '$T(n)=2T(n-1)+1$，若 $T(1)=1$，求精確解。';
      example(payload, match[2], stem, [payload.full(item.key)], match[4].trim(), match[1].startsWith('補充'));
    }
  }
  const quiz = allQuiz.find(item=>Number(item.key) === number);
  for (const item of chunks(quiz.body, /^\*\*(ds-q\d{2}[mw]\d)｜([^\n]+)\*\*\n/gm)) {
    const isChoice = item.header.includes('單選'), parsed = isChoice ? choices(item.body) : { text: item.body.replace(/〔手寫作答區：空白〕/g,'').trim() };
    if (item.key === 'ds-q16m2') parsed.text = '本題採 $n$ 為正整數。\n\n' + parsed.text;
    const ids = [...item.header.matchAll(/ds-k\d{2}[a-z]/g)].map(match=>payload.full(match[0]));
    const solution = details.find(solution=>solution.id === item.key); if (!solution) throw Error('Missing third-source solution: ' + item.key);
    const explanations = isChoice ? chunks(solution.body, /^- ([A-D])：/gm).map(item=>item.body) : null;
    const correct = solution.body.match(/正解：([A-D])。/)?.[1];
    const writtenType = /ds-q(?:15w[12]|16w2|18w[12]|19w[12])/.test(item.key) ? '證明題' : '手寫計算題';
    question(payload, item.key, parsed.text, parsed.options, ids, writtenType, solution.body, correct, explanations);
  }
  addBlocks(payload, summary, Object.fromEntries(payload.knowledgePoints.map(point=>[point.sourceId,prompt])));
  payload.section.blocks.unshift({ id: payload.section.id + '-B-INTRO', type: 'concept', title: '分析前，先讀符號與成本模型', provenance: '前置說明', knowledgePointIds: [], markdown: format(part(third, 1).split('符號先讀：')[1].split('難度：')[0].trim()) });
}
for (const payload of payloads) {
  if (payload.questions.length !== 7 || Object.keys(payload.answers).length !== 5 || payload.knowledgePoints.some(point=>!point.markdown)) throw Error('Incomplete section: ' + payload.section.title);
  if (payload.section.blocks.some(block=>block.type==='example'&&!payload.examples.some(example=>example.id === block.exampleId))) throw Error('Broken example reference');
  upsertSection(catalog, payload);
  console.log(`${payload.section.title}: ${payload.knowledgePoints.length} knowledge points, ${payload.examples.length} examples, ${payload.section.blocks.length} blocks, 7 questions.`);
}
if (payloads.length !== 9 || payloads.reduce((n,p)=>n+p.examples.length,0)!==39 || payloads.reduce((n,p)=>n+p.knowledgePoints.length,0)!==35) throw Error('Incomplete data structures coverage');
writeCatalog(catalog);
