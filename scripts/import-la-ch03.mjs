import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { readCatalog, upsertSection, writeCatalog } from './catalog.mjs';

const files = process.argv.slice(2);
if (files.length !== 4) throw Error('Usage: node scripts/import-la-ch03.mjs <3-1.md> <3-2.md> <3-3.md> <3-5_3-6.md>');
function chunks(text, regex) { const matches = [...text.matchAll(regex)]; return matches.map((m, i) => ({ key: m[1], header: (m[2] || '').trim(), body: text.slice(m.index + m[0].length, matches[i + 1]?.index).trim() })); }
function rows(text) {
  return text.split('\n').filter(line => line.trim().startsWith('|')).map(line => {
    const tokens = [], safe = line.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|`[^`\n]+`/g, value => { tokens.push(value); return '\uE000' + (tokens.length - 1) + '\uE001'; });
    return safe.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim().replace(/\uE000(\d+)\uE001/g, (_, i) => tokens[i]));
  });
}
const sources = files.map(file => { const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n'); return { file, text, sha256: createHash('sha256').update(text).digest('hex') }; });
function part(source, number, level = '##') { const parts = chunks(source.text, new RegExp('^' + (level === '##' ? '#{1,2}' : level) + ' (\\d+)\\. ([^\\n]+)\\n', 'gm')); const found = parts.find(item => Number(item.key) === number); if (!found) throw Error('Missing part ' + number); return found.body; }
function choices(text) {
  const matches = [...text.matchAll(/(?:^|[\n \u3000；。？])([A-D])\.\s*/g)];
  if (matches.length !== 4 || matches.map(m => m[1]).join('') !== 'ABCD') throw Error('Expected four ordered choices: ' + text.slice(0, 80));
  return { text: text.slice(0, matches[0].index).trim(), options: matches.map((m, i) => text.slice(m.index + m[0].length, matches[i + 1]?.index).trim()) };
}
function explanations(text) {
  const matches = [];
  for (const match of text.matchAll(/(?:^|[\n；。 ])(?:- )?([A-D])(?:[：:]|(?= [\u4e00-\u9fff]))/g)) if (match[1] === 'ABCD'[matches.length]) matches.push(match);
  if (matches.length !== 4 || matches.map(m => m[1]).join('') !== 'ABCD') throw Error('Expected four option explanations: ' + text.slice(0, 110));
  return matches.map((m, i) => text.slice(m.index + m[0].length, matches[i + 1]?.index).trim());
}
const chapter = { id: 'LA-CH03', title: '第 3 章 向量空間', titleStatus: '章名與教材完整性待原目錄核對', pendingSections: [{ number: '3-4', title: '基底與維度', status: 'awaiting_material' }], coverageNote: '3-4「基底與維度」教材待提供，未計入閱讀進度。大章完整性與綜合測驗仍待確認。' };
const payloads = [];
function create(number, source, sourceId, notice, intro, choicePoints = null) {
  const id = 'LA-CH03-S0' + number, title = ({ 1: '向量空間', 2: '子空間', 3: '生成與線性獨立', 5: '直和', 6: 'Lagrange 內插法' })[number];
  const section = { id, title: `3-${number} ${title}`, sourceSectionId: sourceId, contentVersion: number === 2 ? '1.0-draft' : '0.1.0', reviewStatus: 'draft', notice: '第一階段審閱稿：' + notice + '原圖與教材完整性待核對；自編例題、模擬測驗及補充另行標示。僅為小節評量，不代表全章完成。', knowledgePointIds: [], blocks: [{ id: id + '-B-INTRO', type: 'concept', title: '學習目標與符號約定', provenance: '前置說明', knowledgePointIds: [], markdown: intro }], assessment: { id: id + '-AS01', scope: 'section', title: `3-${number} 小節測驗`, questionIds: [], totalPoints: choicePoints === null ? null : 5 * choicePoints + 20, scoringNote: choicePoints === null ? '原稿未指定選擇題配分，僅計答對題數；手寫各 10 分，對照詳解自評。' : '選擇各 4 分、手寫各 10 分，共 40 分；手寫對照詳解自評。' } };
  const payload = { number, source, subjectId: 'linear-algebra', chapter, section, choicePoints, knowledgePoints: [], examples: [], questions: [], answers: {}, solutions: {}, sourceReview: { filename: path.basename(source.file), sha256: source.sha256, scope: id, contentVersion: section.contentVersion, status: 'draft', pendingExamCount: 15, pendingExamImported: false, sourceGroup: path.basename(source.file), note: notice + '候選索引不列正式題庫；跨節共用索引不重複加總。' } };
  payload.full = short => id + '-' + short.toUpperCase(); payloads.push(payload); return payload;
}
function point(p, short, title, difficulty, markdown, sourceId, provenance = '教材整理 · 原圖待核對') {
  const item = { id: p.full(short), sourceId, title, difficulty, markdown, provenance }; p.knowledgePoints.push(item); p.section.knowledgePointIds.push(item.id); return item;
}
function example(p, short, text, ids, solution, sourceId, sourceTitle = '自編教學例題', material = false) {
  if (!solution) throw Error('Missing example solution ' + sourceId);
  const item = { id: p.full(short), sourceId, title: '例題 ' + Number(short.match(/\d+/)[0]), type: /證明/.test(text) ? '證明題' : '手寫計算題', text, knowledgePointIds: ids, source: { kind: material ? 'material' : 'simulation', title: sourceTitle, ...(material ? { verificationStatus: 'pending_original' } : {}) } };
  p.examples.push(item); p.solutions[item.id] = { markdown: solution };
}
function question(p, short, stem, ids, solution, answer, sourceId, type = '手寫計算題', hint = '', optionNotes) {
  const parsed = answer ? choices(stem) : { text: stem }, isMulti = Array.isArray(answer), points = answer ? p.choicePoints : 10;
  const item = { id: p.full(short), sourceId, subjectId: p.subjectId, chapterId: chapter.id, sectionId: p.section.id, title: `線性代數 3-${p.number} 小節測驗 · 第 ${p.questions.length + 1} 題`, type: answer ? isMulti ? '多選題' : '選擇題' : type, text: parsed.text, ...(answer ? { options: parsed.options, ...(isMulti ? { selectionMode: 'multiple' } : {}) } : {}), points, scoringStatus: points === null ? 'unspecified' : 'specified', knowledgePointIds: ids, tags: ids.map(id => p.knowledgePoints.find(k => k.id === id)?.title), source: { kind: 'simulation', title: '使用者提供審閱稿 · 自編模擬題' } };
  if (!solution || item.tags.some(tag => !tag)) throw Error('Incomplete question ' + sourceId);
  p.questions.push(item); p.section.assessment.questionIds.push(item.id); p.solutions[item.id] = { markdown: (hint ? '**提示：** ' + hint + '\n\n' : '') + solution };
  if (answer) { p.answers[item.id] = isMulti ? { correctOptions: answer.map(value => value.charCodeAt(0) - 65) } : { correctOption: answer.charCodeAt(0) - 65 }; p.solutions[item.id].optionExplanations = optionNotes || explanations(solution); }
}
function blocks(p, summary) {
  let index = 1; const next = () => p.full('B' + String(index++).padStart(3, '0')), shown = new Set();
  for (const k of p.knowledgePoints) {
    p.section.blocks.push({ id: next(), type: 'concept', title: k.title, markdown: k.markdown, provenance: k.provenance, knowledgePointIds: [k.id] });
    for (const e of p.examples.filter(e => e.knowledgePointIds.includes(k.id) && !shown.has(e.id))) { shown.add(e.id); p.section.blocks.push({ id: next(), type: 'example', exampleId: e.id, knowledgePointIds: e.knowledgePointIds }); }
    p.section.blocks.push({ id: next(), type: 'note', title: '停一下，親手推導', prompt: p.prompts?.[k.id] || '不看詳解，重寫本知識點的定義、關鍵理由或反例。', height: 230, layout: 'split', knowledgePointIds: [k.id] });
  }
  p.section.blocks.push({ id: next(), type: 'summary', title: '考前摘要與自我檢核', markdown: summary, knowledgePointIds: [] }, { id: next(), type: 'assessment', assessmentId: p.section.assessment.id, knowledgePointIds: [] });
}

// 3-1: one source concept spans several prose headings; retain all proofs and tables.
const first = sources[0], p1 = create(1, first, 'la-s03-01', '未取得原始五張教材圖片，考古題僅有候選摘要。', part(first, 1).split('| 知識點 ID |')[0].trim(), 4);
const firstIndex = rows(part(first, 1)).filter(row => /^la-31-k\d{2}$/.test(row[0]));
const roles = chunks(part(first, 2), /^### (2\.\d) ([^\n]+)\n/gm), spaces = chunks(part(first, 4), /^### (4\.\d) ([^\n]+)\n/gm);
const firstBodies = [roles[0].body, roles[1].body, part(first, 3), spaces.slice(0, 2).map(i => '### ' + i.header + '\n\n' + i.body).join('\n\n'), spaces.slice(2).map(i => '### ' + i.header + '\n\n' + i.body).join('\n\n'), part(first, 5), part(first, 6), part(first, 7), part(first, 8)];
firstIndex.forEach((row, i) => point(p1, 'K' + String(i + 1).padStart(2, '0'), row[1], row[2].length, firstBodies[i], row[0], i === 8 ? '補充延伸' : '教材整理 · 原圖待核對'));
const firstExampleSolutions = chunks(part(first, 12), /^### (la-31-e\d{2})\n/gm);
for (const item of chunks(part(first, 10), /^### (la-31-e\d{2})｜([^\n]+)\n/gm)) example(p1, item.key.slice(-3), item.body, [...item.header.matchAll(/k\d{2}/g)].map(m => p1.full(m[0])), firstExampleSolutions.find(s => s.key === item.key)?.body, item.key);
const firstQuizSolutions = chunks(part(first, 13), /^### (la-31-t\d{2})\n/gm), firstCorrect = ['C', 'A', 'D', 'B', 'C'];
for (const [i, item] of chunks(part(first, 11), /^### (la-31-t\d{2})｜([^\n]+)\n/gm).entries()) question(p1, 'Q' + item.key.slice(-2), item.body, [...item.header.matchAll(/k\d{2}/g)].map(m => p1.full(m[0])), firstQuizSolutions.find(s => s.key === item.key)?.body, firstCorrect[i], item.key, '證明題');
blocks(p1, part(first, 14));

// 3-2: extract embedded example stems from lecture prose; keep answers in solutions.
const second = sources[1], p2 = create(2, second, 'la-ch03-s02', '未取得原始十張教材圖片，八道教學例題皆為自編，十五筆考古題只有摘要。', part(second, 1));
for (const item of chunks(part(second, 3), /^### (kp\d{2})｜([^\n]+)\n/gm)) {
  const serial = item.key.slice(-2), pieces = item.body.split(/\*\*自編例題 ex\d{2} 題目：\*\*\s*/), body = pieces[1];
  if (!body) throw Error('Missing embedded example ' + item.key);
  const k = point(p2, 'K' + serial, item.header.replace(/ ★+$/, ''), item.header.match(/★/g).length, pieces[0].trim(), 'la-ch03-s02-' + item.key, serial === '08' ? '補充延伸' : '教材整理 · 原圖待核對');
  const stem = body.split('**辨識與方法：**')[0].trim(), solution = '**辨識與方法：**' + body.split('**辨識與方法：**')[1].split('**手寫提示：**')[0].trim();
  example(p2, 'E' + serial, stem, [k.id], solution, 'la-ch03-s02-ex' + serial);
  (p2.prompts ||= {})[k.id] = body.split('**手寫提示：**')[1]?.trim();
}
const secondSolutions = chunks(part(second, 7), /^### ((?:mc|wr)\d{2})([^\n]*)\n/gm), secondHints = Object.fromEntries(rows(part(second, 6)).filter(r => /^(mc|wr)\d{2}$/.test(r[0])).map(r => [r[0], r[1]]));
for (const [i, item] of chunks(part(second, 5), /^### ((?:mc|wr)\d{2})｜([^\n]+)\n/gm).entries()) { const sol = secondSolutions.find(s => s.key === item.key); question(p2, 'Q' + String(i + 1).padStart(2, '0'), item.body, [...item.header.matchAll(/kp(\d{2})/g)].map(m => p2.full('K' + m[1])), sol?.body, item.key.startsWith('mc') ? sol.header.match(/[A-D]/)[0] : undefined, 'la-ch03-s02-' + item.key, item.key === 'wr01' ? '證明題' : '手寫計算題', secondHints[item.key]); }
blocks(p2, part(second, 4));

// 3-3 includes one genuine multiple-select assessment and eight unverified transcripts.
const third = sources[2], p3 = create(3, third, 'LA-CH03-S03', '未取得原始十四張教材照片。八道彙編轉錄另置待原卷核對閱讀區，不列正式題庫與作答統計；其餘候選只有摘要。', part(third, 1));
const thirdIndex = rows(part(third, 2)).filter(row => /^K\d{2}$/.test(row[0]));
for (const item of chunks(part(third, 3), /^### (K\d{2}) ([^\n]+)\n/gm)) { const row = thirdIndex.find(r => r[0] === item.key); point(p3, item.key, row[1], row[2].length, item.body, item.key, ['K12', 'K13'].includes(item.key) ? '教材整理 · 含補充延伸' : '教材整理 · 原圖待核對'); }
const thirdExamples = rows(part(third, 4)).filter(row => /^E\d{2}$/.test(row[0])), thirdExampleSolutions = chunks(part(third, 5), /^### (E\d{2})\n/gm);
for (const row of thirdExamples) example(p3, row[0], row[3], [p3.full(row[1])], thirdExampleSolutions.find(s => s.key === row[0])?.body, row[0]);
const thirdSolutions = chunks(part(third, 9), /^### (Q\d{2}) ([^\n]+)\n/gm), thirdCorrect = ['C', 'A', 'D', ['B', 'C', 'D'], 'B'], thirdHints = Object.fromEntries(rows(part(third, 7)).filter(r => /^Q\d{2}$/.test(r[0])).map(r => [r[0], r[1]]));
for (const [i, item] of chunks(part(third, 6), /^### (Q\d{2})｜([^\n]+)\n/gm).entries()) question(p3, item.key, item.body, [...item.header.matchAll(/K\d{2}/g)].map(m => p3.full(m[0])), thirdSolutions.find(s => s.key === item.key)?.body, thirdCorrect[i], item.key, '手寫計算題', thirdHints[item.key]);
blocks(p3, p3.knowledgePoints.at(-1).markdown);
const transcripts = [], transcriptMeta = rows(part(third, 10)).filter(row => /^PY-NCTU-/.test(row[0])), transcriptSolutions = chunks(part(third, 12), /^\*\*(\d{3}-\d{2})：\*\*/gm);
for (const item of chunks(part(third, 11), /^### (PY-NCTU-\d{3}-\d{2})\n/gm)) {
  const row = transcriptMeta.find(r => r[0] === item.key), key = item.key.slice(-6), solution = transcriptSolutions.find(s => s.key === key)?.body.split('**成大 104-04')[0].trim();
  if (!row || !solution) throw Error('Incomplete transcript ' + item.key);
  const record = { id: item.key, groupId: item.key, subjectId: p3.subjectId, sectionId: p3.section.id, title: row[1], examSubject: row[2], knowledgePointIds: [...row[3].matchAll(/K\d{2}/g)].map(m => p3.full(m[0])), text: item.body, editorialSolution: solution, status: 'pending_original', source: { kind: 'unverified_compilation', title: '102～106年各校線代解答.zip／102-106線代題庫解答.pdf', pages: row[4], pageConvention: 'PDF 頁序，非頁尾頁碼', note: '使用者稿件提供的補教彙編轉錄，尚未取得官方原卷，未於本次重新核對來源。', filename: path.basename(third.file) } };
  transcripts.push(record);
}
p3.section.blocks.splice(-2, 0, { id: p3.full('B-SOURCE-NOTICE'), type: 'summary', title: '考古題轉錄 · 待原卷核對', knowledgePointIds: [], markdown: '以下 8 道大題依稿件保留共用題幹、所有小題及編輯勘誤，來源為補教彙編，**尚未與官方原卷核對**。供閱讀參考，不提供交卷、不列入題庫或弱點統計；投影與最小平方等內容屬後續延伸。' }, ...transcripts.map(t => ({ id: p3.full('B-' + t.id), type: 'source-review', transcriptId: t.id, knowledgePointIds: t.knowledgePointIds })));
p3.sourceReview.readableTranscriptCount = 8;

// 3-5 / 3-6 share one source and its fifteen candidate summaries.
const fourth = sources[3], fourthExamples = rows(part(fourth, 4, '#')).filter(r => /^LA-E\d{4}$/.test(r[0])), fourthSolutions = chunks(part(fourth, 5, '#'), /^## (LA-E\d{4})\n/gm), fourthHints = Object.fromEntries(rows(part(fourth, 7, '#')).filter(r => /^LA-Q\d{4}$/.test(r[0])).map(r => [r[0], r[1]]));
for (const number of [5, 6]) {
  const p = create(number, fourth, 'LA-S030' + number, '未取得原始八張教材圖片；教材轉錄例題及四點內插數據待原圖核對。', part(fourth, 1));
  p.section.assessment.sourceId = 'LA-A3' + number + '01';
  for (const item of chunks(part(fourth, number - 3, '#'), /^## (LA-K030[56]-\d{2})｜([^\n]+)\n/gm)) point(p, 'K' + item.key.slice(-2), item.header.split('｜')[0], item.header.match(/★/g).length, item.body, item.key, /額外補充/.test(item.body) ? '教材整理 · 含補充延伸' : '教材整理 · 原圖待核對');
  for (const row of fourthExamples.filter(r => r[0].startsWith('LA-E3' + number))) { const ids = [...row[3].matchAll(/(?:LA-K030[56]-)?(\d{2})/g)].map(m => p.full('K' + m[1])); example(p, 'E' + row[0].slice(-2), row[4], ids, fourthSolutions.find(s => s.key === row[0])?.body, row[0], row[1], row[1] !== '自編'); }
  const quiz = chunks(part(fourth, 6, '#'), /^## (LA-A3[56]01)｜([^\n]+)\n/gm).find(s => s.key === 'LA-A3' + number + '01');
  for (const match of quiz.body.matchAll(/^\d+\. \*\*(LA-Q3[56]\d{2})｜([^\n]+?)\*\*：([^\n]+)$/gm)) {
    const sourceId = match[1], isChoice = match[2].includes('單選'), allSolutions = part(fourth, 8, '#');
    let solution, answer, notes;
    if (isChoice) {
      const result = allSolutions.match(new RegExp('^- \\*\\*' + sourceId + '：([A-D])\\*\\*。([^\\n]+)', 'm')); if (!result) throw Error('Missing solution ' + sourceId); answer = result[1]; solution = result[2];
      // The source combines A and B for Q3502; expand that explanation for both.
      notes = sourceId === 'LA-Q3502' ? ['被三條共面直線反例否定，兩兩交集為零不足以保證整體獨立。', '被三條共面直線反例否定，兩兩交集為零不足以保證整體獨立。', '沒有保證覆蓋環境空間。', '對任兩子空間，交集為零就能使其和為直和。'] : explanations(solution);
    } else { const marker = '**' + sourceId + '**：', start = allSolutions.indexOf(marker); solution = allSolutions.slice(start + marker.length).split(/\n\n(?:\*\*LA-Q|## )/)[0].trim(); if (start < 0) throw Error('Missing written solution ' + sourceId); }
    const ids = [...match[2].matchAll(/LA-K030[56]-(\d{2})/g)].map(m => p.full('K' + m[1]));
    question(p, 'Q' + sourceId.slice(-2), match[3], ids, solution, answer, sourceId, sourceId.endsWith('07') ? '證明題' : '手寫計算題', fourthHints[sourceId], notes);
  }
  blocks(p, number === 5 ? '1. 直和需同時證明存在與唯一。\n2. 三個以上子空間兩兩交集為零，不足以保證整體獨立。\n3. 補空間一般不唯一，也不一定正交。\n4. 對稱／反對稱與偶／奇分解，利用交集為零證明唯一。' : '1. 節點必須相異；多項式次數是「至多」，不是「恰好」。\n2. Lagrange 基底在自身節點為 1，其餘節點為 0；座標是節點值。\n3. 先保留乘積形式，留意分母負號，再代入節點核對。\n4. 唯一性使用根數上限；取值矩陣可逆還需要多項式基底條件。');
}
const expectations = { 1: [9, 10], 2: [8, 8], 3: [13, 12], 5: [6, 5], 6: [4, 5] }, catalog = readCatalog();
for (const p of payloads) {
  const [k, e] = expectations[p.number]; if (p.knowledgePoints.length !== k || p.examples.length !== e || p.questions.length !== 7 || Object.keys(p.answers).length !== 5) throw Error('Incomplete section ' + p.section.title);
  for (const e of p.examples) if (e.knowledgePointIds.some(id => !p.section.knowledgePointIds.includes(id))) throw Error('Unknown example knowledge point ' + e.id);
  upsertSection(catalog, p); console.log(`${p.section.title}: ${k} knowledge points, ${e} examples, ${p.section.blocks.length} blocks, 7 questions.`);
}
const savedChapter = catalog.subjects.find(s => s.id === 'linear-algebra').chapters.find(c => c.id === chapter.id);
Object.assign(savedChapter, chapter, { curriculumComplete: false });
catalog.pendingExamTranscripts = [...(catalog.pendingExamTranscripts || []).filter(t => t.sectionId !== p3.section.id), ...transcripts];
if (transcripts.length !== 8) throw Error('Expected eight complete unverified transcripts');
writeCatalog(catalog);
