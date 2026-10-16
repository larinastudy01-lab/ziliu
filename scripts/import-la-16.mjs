import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { readCatalog, upsertSection, writeCatalog } from './catalog.mjs';

const inputPath = process.argv[2];
if (!inputPath) throw Error('Usage: node scripts/import-la-16.mjs <1-6.md>');
const source = readFileSync(inputPath, 'utf8').replace(/\r\n/g, '\n');
if (!source.startsWith('# 1-6 LU 分解')) throw Error('Expected the 1-6 LU review draft');
function chunks(text, regex) {
  const matches = [...text.matchAll(regex)];
  return matches.map((match, index) => ({ key: match[1], header: (match[2] || '').trim(), body: text.slice(match.index + match[0].length, matches[index + 1]?.index).trim() }));
}
const parts = chunks(source, /^## ([^\n]+)\n/gm);
function part(name) { const item = parts.find(item => item.key.startsWith(name)); if (!item) throw Error('Missing source part: ' + name); return item.body; }
function rows(text) {
  return text.split('\n').filter(line => line.trim().startsWith('|')).map(line => {
    const math = [], protectedLine = line.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, value => { math.push(value); return '\uE000' + (math.length - 1) + '\uE001'; });
    return protectedLine.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim().replace(/\uE000(\d+)\uE001/g, (_, index) => math[index]));
  });
}
function choices(text) {
  const markers = [...text.matchAll(/(?:^|[\n \u3000])([A-D])\.\s*/g)];
  if (!markers.length) return { text: text.trim() };
  if (markers.length !== 4 || markers.map(item => item[1]).join('') !== 'ABCD') throw Error('Expected four ordered choices');
  return { text: text.slice(0, markers[0].index).trim(), options: markers.map((item, index) => text.slice(item.index + item[0].length, markers[index + 1]?.index).trim()) };
}
function optionExplanations(text) {
  const markers = [...text.matchAll(/(?:^|[；。\n])\s*([A-D])[：: ]+/g)];
  if (markers.length !== 4 || markers.map(item => item[1]).join('') !== 'ABCD') throw Error('Incomplete option explanations');
  return markers.map((item, index) => text.slice(item.index + item[0].length, markers[index + 1]?.index).trim());
}
const sectionId = 'LA-CH01-S06', full = id => sectionId + '-' + id;
const mapping = rows(part('2.')).filter(row => /^K\d{2}$/.test(row[0]));
const concepts = chunks(part('3.'), /^### (K\d{2})｜([^\n]*)\n/gm);
concepts.push({ key: 'K08', header: mapping.find(row => row[0] === 'K08')[1], body: part('4.') });
const knowledgePoints = concepts.map(item => ({
  id: full(item.key), title: item.header.replace(/\s*★+$/, '').trim(),
  difficulty: mapping.find(row => row[0] === item.key)[2].length,
  provenance: item.key === 'K08' ? '補充延伸' : '教材整理',
  markdown: item.body.split(/\n(?:手寫 B\d+：|split B\d+：|B\d+ 提示：)/)[0].trim()
}));
const examples = [], questions = [], answers = {}, solutions = {};
const exampleSolutions = chunks(part('6.'), /^### (E\d{2})([^\n]*)\n/gm);
for (const row of rows(part('5.')).filter(row => /^E\d{2}$/.test(row[0]))) {
  const pending = row[1].includes('待原圖確認');
  const example = {
    id: full(row[0]), title: '例題 ' + row[0].slice(1), type: row[0] === 'E03' ? '證明題' : '手寫計算題',
    knowledgePointIds: [...row[2].matchAll(/K\d{2}/g)].map(match => full(match[0])), text: row[3],
    source: { kind: pending ? 'material' : 'simulation', title: row[1], ...(pending ? { verificationStatus: 'pending_original' } : {}) }
  };
  examples.push(example);
  const solution = exampleSolutions.find(item => item.key === row[0]);
  if (!solution) throw Error('Missing example solution: ' + row[0]);
  solutions[example.id] = { markdown: solution.body };
}
const quizSolutions = chunks(part('8.'), /^### (Q\d{2})([^\n]*)\n/gm);
for (const item of chunks(part('7.'), /^### (Q\d{2})｜([^\n]*)\n/gm)) {
  const parsed = choices(item.body), isChoice = !!parsed.options;
  const knowledgePointIds = [...item.header.matchAll(/K\d{2}/g)].map(match => full(match[0]));
  const question = {
    id: full(item.key), subjectId: 'linear-algebra', chapterId: 'LA-CH01', sectionId,
    title: '1-6 小節測驗 · 第 ' + Number(item.key.slice(1)) + ' 題',
    type: isChoice ? '選擇題' : item.header.includes('證明') ? '證明題' : '手寫計算題',
    text: parsed.text, ...(isChoice ? { options: parsed.options } : {}),
    points: isChoice ? null : 10, scoringStatus: isChoice ? 'unspecified' : 'specified',
    knowledgePointIds, tags: knowledgePointIds.map(id => knowledgePoints.find(point => point.id === id).title),
    source: { kind: 'simulation', title: '使用者提供審閱稿 · 自編模擬題' }
  };
  questions.push(question);
  const solution = quizSolutions.find(value => value.key === item.key);
  if (!solution) throw Error('Missing quiz solution: ' + item.key);
  solutions[question.id] = { markdown: solution.body };
  if (isChoice) {
    const correct = solution.body.match(/答案 ([A-D])。/)?.[1];
    if (!correct) throw Error('Missing choice answer: ' + item.key);
    answers[question.id] = { correctOption: correct.charCodeAt(0) - 65 };
    solutions[question.id].optionExplanations = optionExplanations(solution.body);
  }
}
const prompts = {
  3: '寫出 E01 的消去矩陣及其反矩陣，驗算乘積。',
  6: '逐步記錄 E02 的三個消去倍數，追蹤目前矩陣，並驗算第三列。',
  12: '從 E02 的 U 抽出 D，逐列寫出單位上三角矩陣。',
  15: '用 E05 同時驗算 PA=LU 和 A=PᵀLU。',
  18: '寫出 E06 第一輪的倍數，說明交換前後的差異。',
  21: '先遮住詳解，用 E07 計算 y 再算 x，最後代回 Ax=b。'
};
const summaries = {
  9: '|情形|判斷重點|\n|---|---|\n|可逆方陣的不換列 LU|順序主子式全非零是此形式 LU 存在的充要條件。|\n|零主元且下方尚有非零元素|直接消去失敗，須檢查換列。|\n|奇異上三角矩陣|可直接取 $L=I,U=A$；奇異不代表沒有 LU。|',
  24: '1. 唯一性結論須有 $A$ 可逆且 $L$ 單位下三角。\n2. $A=LU$ 時 $\\det(A)=\\prod_i u_{ii}$；$PA=LU$ 時 $\\det(A)=\\det(P)\\prod_i u_{ii}$。\n3. 塊狀公式 $S=E-DB^{-1}C$ 要求 $B$ 可逆，且須保留矩陣乘法順序。'
};
const blocks = [{ id: full('B-INTRO'), type: 'concept', title: '符號與用語', provenance: '前置補充', knowledgePointIds: [], markdown: part('1.') }];
for (let index = 0; index < knowledgePoints.length; index++) {
  const point = knowledgePoints[index], base = index * 3 + 1;
  blocks.push({ id: full('B' + String(base).padStart(2, '0')), type: 'concept', title: point.title, provenance: point.provenance, knowledgePointIds: [point.id], markdown: point.markdown, ...([4, 19].includes(base) ? { layout: 'split' } : {}) });
  const example = examples.find(item => item.knowledgePointIds.includes(point.id));
  if (!example) throw Error('Missing example for ' + point.id);
  blocks.push({ id: full('B' + String(base + 1).padStart(2, '0')), type: 'example', exampleId: example.id, knowledgePointIds: [point.id] });
  const last = base + 2, id = full('B' + String(last).padStart(2, '0'));
  blocks.push(summaries[last]
    ? { id, type: 'summary', title: last === 9 ? '存在條件對照' : '延伸條件檢查', provenance: point.provenance, markdown: summaries[last], knowledgePointIds: [point.id] }
    : { id, type: 'note', title: '停一下，親手推導', prompt: prompts[last], layout: [6, 21].includes(last) ? 'split' : 'inline', height: 230, knowledgePointIds: [point.id] });
}
const assessmentId = full('A01');
blocks.push({ id: full('B25'), type: 'summary', title: '考前摘要與錯誤檢查', markdown: part('10.').split('\n錯題紀錄區')[0].trim() });
blocks.push({ id: full('B26'), type: 'assessment', assessmentId });
blocks.push({ id: full('B27'), type: 'note', title: '測驗後訂正與回想', prompt: part('10.').split('手寫 B27：')[1].trim(), height: 260, layout: 'inline', knowledgePointIds: knowledgePoints.map(point => point.id) });
if (knowledgePoints.length !== 8 || examples.length !== 8 || blocks.length !== 28 || questions.length !== 7) throw Error('Incomplete 1-6 import');
const section = {
  id: sectionId, title: '1-6 LU 分解', reviewStatus: 'draft', contentVersion: '0.1-review', sourceSectionId: 'la-ch01-s06',
  notice: '第一階段審閱稿：本稿依先前文字轉錄整理，未重新核對七張原圖。教材例 38、39 待原圖確認；例 40、42–45 及右頁範例題幹／數值尚缺，未補造題目。補充延伸另行標示。',
  knowledgePointIds: knowledgePoints.map(point => point.id), blocks,
  assessment: { id: assessmentId, scope: 'section', title: '1-6 小節測驗', questionIds: questions.map(question => question.id), totalPoints: null, scoringNote: '原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。' }
};
const sourceReview = {
  filename: path.basename(inputPath), sha256: createHash('sha256').update(source).digest('hex'), status: 'draft', contentVersion: section.contentVersion, scope: sectionId,
  pendingExamCount: 15, pendingExamImported: false,
  note: '原圖未重讀；教材例 38、39 依先前轉錄，仍待原圖確認，其他缺漏例題未補造。15 筆未核實考古候選不進正式題庫，未製作大章綜合測驗。'
};
const catalog = readCatalog();
upsertSection(catalog, { section, questions, examples, knowledgePoints, answers, solutions, sourceReview });
writeCatalog(catalog);
console.log('1-6 LU 分解: 8 knowledge points, 8 examples (2 pending original verification), 28 blocks, 7 assessment questions; choice points unspecified.');
