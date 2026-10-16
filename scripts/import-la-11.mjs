import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { readCatalog, upsertSection, writeCatalog } from './catalog.mjs';

const inputPath = process.argv[2];
if (!inputPath) throw Error('Usage: node scripts/import-la-11.mjs <review.md>');
const manuscript = readFileSync(inputPath, 'utf8').replace(/\r\n/g, '\n');
const sectionId = 'LA-CH01-S01', chapterId = 'LA-CH01';
const full = id => `${sectionId}-${id}`;
function part(number) {
  const start = manuscript.indexOf(`## ${number}. `);
  if (start < 0) throw Error('Missing document part ' + number);
  const end = manuscript.indexOf('\n## ', start + 1);
  return manuscript.slice(start, end < 0 ? undefined : end);
}
function entries(number, prefix) {
  const text = part(number), headings = [...text.matchAll(new RegExp(`^### (${prefix}\\d{2})([^\\n]*)\\n`, 'gm'))];
  return headings.map((match, index) => ({ shortId: match[1], header: match[2].trim(), body: text.slice(match.index + match[0].length, headings[index + 1]?.index).trim() }));
}
const concepts = entries(3, 'K');
const stems = entries(4, 'E'), solutions = entries(6, 'E');
const quizStems = entries(5, 'Q'), quizSolutions = entries(7, 'Q');
if (concepts.length !== 12 || stems.length !== 12 || solutions.length !== 12 || quizStems.length !== 7 || quizSolutions.length !== 7) throw Error('Unexpected source structure; review before importing.');
const titles = ['尺寸、元素、矩陣類型', '加法、純量倍、矩陣乘法', '不交換、零因子與消去陷阱', '矩陣冪與二項式展開', '分割矩陣與 column 解釋', '轉置與元素證明', '共軛與共軛轉置', '對稱、斜對稱與 Hermitian', '對稱矩陣運算與分解', 'trace 與循環性', 'trace 證明與平方和', '方塊矩陣高次冪'];
const exampleKinds = ['simulation', 'simulation', 'material', 'material', 'simulation', 'material', 'material', 'simulation', 'simulation', 'simulation', 'simulation', 'material'];
const knowledgePoints = concepts.map((item, index) => ({ id: full(item.shortId), title: titles[index], difficulty: index < 2 ? 1 : index === 10 ? 5 : 3, provenance: index === 0 ? '前置補充' : index === 1 ? '前置補充與教材整理' : '教材整理', markdown: item.body }));
const examples = stems.map((item, index) => ({ id: full(item.shortId), title: `例題 ${String(index + 1).padStart(2, '0')}`, knowledgePointIds: [knowledgePoints[index].id], type: [5, 11].includes(index) ? '證明題' : '手寫計算題', text: item.body, source: { kind: exampleKinds[index], title: exampleKinds[index] === 'simulation' ? '原創模擬例題' : '使用者提供的教材整理稿' } }));
const solutionMap = {};
for (const solution of [...solutions, ...quizSolutions]) solutionMap[full(solution.shortId)] = { markdown: solution.body };
const answers = {};
const questions = quizStems.map((item, index) => {
  const options = [...item.body.matchAll(/^([A-D])\. (.+)$/gm)].map(match => match[2].trim());
  const text = item.body.replace(/^[A-D]\. .+\n?/gm, '').trim();
  const knowledgePointIds = [...item.header.matchAll(/K\d{2}/g)].map(match => full(match[0]));
  const solution = quizSolutions[index].body;
  const correct = solution.match(/正解 ([A-D])/);
  if (options.length) {
    if (options.length !== 4 || !correct) throw Error('Invalid choice question ' + item.shortId);
    answers[full(item.shortId)] = { correctOption: correct[1].charCodeAt(0) - 65 };
    solutionMap[full(item.shortId)].optionExplanations = [...solution.matchAll(/([A-D])：([\s\S]*?)(?=[A-D]：|$)/g)].map(match => match[2].trim());
    if (solutionMap[full(item.shortId)].optionExplanations.length !== 4) throw Error('Incomplete option explanations ' + item.shortId);
  }
  return { id: full(item.shortId), subjectId: 'linear-algebra', chapterId, sectionId, title: `1-1 小節測驗 · 第 ${index + 1} 題`, type: options.length ? '選擇題' : index === 6 ? '證明題' : '手寫計算題', text, ...(options.length ? { options } : {}), points: options.length ? 2 : 10, knowledgePointIds, tags: knowledgePointIds.map(id => knowledgePoints.find(point => point.id === id).title), source: { kind: 'simulation', title: '使用者提供審閱稿 · 原創模擬題' } };
});
const promptRows = [...part(2).matchAll(/^\| (B\d{2})(?: split)? \| (.+) \|$/gm)];
const prompts = Object.fromEntries(promptRows.map(match => [match[1], match[2]]));
const specs = [[1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14], [15, 16, 17], [18, 19], [20, 21, 22], [23, 24, 25], [26, 27], [28, 29, 30], [31, 32, 33]];
const blocks = [];
for (let index = 0; index < specs.length; index++) {
  const [conceptNumber, exampleNumber, noteNumber] = specs[index], point = knowledgePoints[index];
  const blockId = number => full('B' + String(number).padStart(2, '0'));
  blocks.push({ id: blockId(conceptNumber), type: 'concept', title: point.title, knowledgePointIds: [point.id], provenance: point.provenance, markdown: point.markdown });
  blocks.push({ id: blockId(exampleNumber), type: 'example', exampleId: examples[index].id, knowledgePointIds: [point.id] });
  if (noteNumber) blocks.push({ id: blockId(noteNumber), type: 'note', layout: [8, 14, 22].includes(noteNumber) ? 'split' : 'inline', title: [8, 14, 22].includes(noteNumber) ? '對照講義，寫下自己的理解' : '停一下，親手推導', prompt: prompts['B' + String(noteNumber).padStart(2, '0')], knowledgePointIds: [point.id], height: 230 });
}
const summary = part(8).replace(/^##[^\n]*\n/, '').split('\n本稿不保存')[0].trim();
blocks.push({ id: full('B34'), type: 'summary', title: '考前摘要與常見錯誤', markdown: summary });
blocks.push({ id: full('B35'), type: 'assessment', assessmentId: full('AS01') });
const section = { id: sectionId, title: '1-1 矩陣及矩陣運算', reviewStatus: 'draft', contentVersion: '0.1', notice: '第一階段審閱稿：前置基礎已標為補充；原教材前段尚待補齊，不能視為完整覆蓋原教材。', knowledgePointIds: knowledgePoints.map(point => point.id), blocks, assessment: { id: full('AS01'), scope: 'section', title: '1-1 小節測驗', questionIds: questions.map(question => question.id), totalPoints: 30 } };
const catalog = readCatalog();
catalog.subjects[0].sourceSubjectId = 'LA';
const sourceReview = { filename: path.basename(inputPath), sha256: createHash('sha256').update(manuscript).digest('hex'), contentVersion: '0.1', status: 'draft', scope: sectionId, pendingExamCount: 15, pendingExamImported: false, note: '考古題摘要缺完整題幹與來源核對，未納入正式題庫。未建立 1-2 或大章綜合測驗。' };
upsertSection(catalog, { section, questions, examples, knowledgePoints, answers, solutions: solutionMap, sourceReview });
writeCatalog(catalog);
console.log(`Imported ${knowledgePoints.length} knowledge points, ${examples.length} examples, ${blocks.length} blocks and ${questions.length} section-assessment questions. Unverified exam summaries excluded.`);
