import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { readCatalog, upsertSection, writeCatalog } from './catalog.mjs';

const paths = process.argv.slice(2);
if (!paths.length) throw Error('Usage: node scripts/import-la-sections.mjs <1-3.md> <1-4.md> <1-5.md>');
const catalog = readCatalog();
const stripTitle = title => title.replace(/\$/g, '').replace(/^[｜\s]+/, '').trim();
function chunks(text, regex) { const matches = [...text.matchAll(regex)]; return matches.map((match, index) => ({ key: match[1], header: (match[2] || '').trim(), body: text.slice(match.index + match[0].length, matches[index + 1]?.index).trim() })); }
function parts(text) { return chunks(text, /^## ([^\n]+)\n/gm); }
function piece(all, name) { const result = all.find(item => item.key.includes(name)); if (!result) throw Error('Missing source part: ' + name); return result.body; }
function rows(text) {
  return text.split('\n').filter(line => line.trim().startsWith('|')).map(line => {
    const math = [], protectedLine = line.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, value => { math.push(value); return '\uE000' + (math.length - 1) + '\uE001'; });
    return protectedLine.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim().replace(/\uE000(\d+)\uE001/g, (_, index) => math[index]));
  });
}
function fields(text) { return Object.fromEntries(chunks(text, /^\*\*([^*]+)：\*\*\s*/gm).map(item => [item.key, item.body])); }
function choices(text) {
  const markers = [...text.matchAll(/(?:^|[\n \u3000])([A-D])\.\s*/g)];
  if (!markers.length) return { text: text.trim() };
  if (markers.length !== 4 || markers.map(item => item[1]).join('') !== 'ABCD') throw Error('Expected four ordered choices');
  return { text: text.slice(0, markers[0].index).trim(), options: markers.map((item, index) => text.slice(item.index + item[0].length, markers[index + 1]?.index).trim()) };
}
function optionExplanations(text) {
  const markers = [...text.matchAll(/(?:^|[；。\n])\s*([A-D])[：: ]+/g)];
  const result = markers.map((item, index) => text.slice(item.index + item[0].length, markers[index + 1]?.index).trim());
  if (markers.length !== 4 || markers.map(item => item[1]).join('') !== 'ABCD') throw Error('Incomplete option explanations: ' + text.slice(0, 60));
  return result;
}

for (const inputPath of paths) {
  const source = readFileSync(inputPath, 'utf8').replace(/\r\n/g, '\n'), all = parts(source);
  const number = Number(source.match(/^# .*?1-([345]) /m)?.[1]);
  if (![3, 4, 5].includes(number)) throw Error('Unsupported section: ' + path.basename(inputPath));
  const sectionId = 'LA-CH01-S0' + number, full = id => sectionId + '-' + id, chapterId = 'LA-CH01';
  const title = { 3: '1-3 基本列運算', 4: '1-4 線性方程組', 5: '1-5 可逆矩陣的充要條件' }[number];
  const conceptBodies = number === 3 ? piece(all, '4. 講義正文') : number === 4 ? piece(all, '教材整理') + '\n\n' + piece(all, '補充延伸') : piece(all, '3. 教材主題整理') + '\n\n' + piece(all, '4. 研究所延伸');
  const concepts = chunks(conceptBodies, /^### (K\d{2})[｜ ]([^\n]*)\n/gm);
  const mapPart = piece(all, number === 3 ? '3. 知識點與' : number === 4 ? '板塊與知識點' : '2. 知識點與');
  const mapping = rows(mapPart).filter(row => /^K\d{2}$/.test(row[0]));
  const knowledgePoints = concepts.map((item, index) => {
    const row = mapping.find(value => value[0] === item.key);
    const extension = number === 3 ? index === 6 : number === 4 ? index === 12 : index >= 6;
    const provenance = extension ? '補充延伸' : number === 5 && index === 3 ? '教材整理與延伸' : '教材整理';
    const prompt = number === 5 ? item.body.match(/\n手寫提示：([\s\S]*)$/)?.[1].trim() : null;
    return { id: full(item.key), title: stripTitle(item.header), difficulty: (row?.find(value => /^★+$/.test(value)) || '★★★').length, provenance, markdown: prompt ? item.body.slice(0, item.body.lastIndexOf('\n手寫提示：')).trim() : item.body, ...(prompt ? { writingPrompt: prompt } : {}) };
  });
  const expected = { 3: 7, 4: 13, 5: 11 }[number];
  if (knowledgePoints.length !== expected) throw Error('Unexpected knowledge count for ' + title);
  const examples = [], questions = [], answers = {}, solutions = {}, blocks = [];
  const metaExample = (id, text, knowledgeIds, hint = '') => ({ id: full(id), title: /^PRE/.test(id) ? '先備複習例題' : '例題 ' + id.match(/\d+/)[0], knowledgePointIds: knowledgeIds, type: '手寫計算題', text, ...(hint ? { hint } : {}), source: { kind: 'simulation', title: '使用者提供審閱稿 · 自編模擬例題' } });
  const introBody = piece(all, number === 3 ? '2. 符號' : number === 4 ? '學習目標與符號' : '1. 記號');
  blocks.push({ id: full('B-INTRO'), type: 'concept', title: '符號與先備複習', provenance: '前置補充', knowledgePointIds: [], markdown: introBody.split('\n### ')[0].trim() });
  if (number === 3) {
    const pre = fields(introBody.slice(introBody.indexOf('### 先備例題')));
    const example = metaExample('PRE-EX01', pre['題目'], []); example.source.title += ' · 先備複習'; examples.push(example);
    solutions[example.id] = { markdown: Object.entries(pre).filter(([key]) => key !== '題目').map(([key, value]) => `**${key}：** ${value}`).join('\n\n') };
    blocks.push({ id: full('B-INTRO-EX'), type: 'example', exampleId: example.id, knowledgePointIds: [] });
    for (const item of chunks(piece(all, '5. 獨立例題庫'), /^### (EX\d{2})[｜ ]([^\n]*)\n/gm)) {
      const data = fields(item.body), ids = [...item.header.matchAll(/K\d{2}/g)].map(match => full(match[0]));
      const example = metaExample(item.key, data['題幹'], ids); examples.push(example);
      solutions[example.id] = { markdown: Object.entries(data).filter(([key]) => key !== '題幹').map(([key, value]) => `**${key}：** ${value}`).join('\n\n') };
    }
  } else {
    const stems = piece(all, number === 4 ? '獨立例題題庫：題目' : '5. 編寫例題');
    const explanations = chunks(piece(all, number === 4 ? '獨立例題詳解' : '6. 編寫例題'), /^### (E\d{2})([^\n]*)\n/gm);
    for (const row of rows(stems).filter(row => /^E\d{2}$/.test(row[0]))) {
      const knowledgeIds = [...row[1].matchAll(/K\d{2}/g)].map(match => full(match[0]));
      const stem = row[number === 4 ? 2 : 3], hint = number === 5 ? row[4] : '';
      const example = metaExample(row[0], stem, knowledgeIds); examples.push(example);
      const explanation = explanations.find(item => item.key === row[0]); if (!explanation) throw Error('Missing example solution ' + row[0]);
      solutions[example.id] = { markdown: (hint ? '**辨識與提示：** ' + hint + '\n\n' : '') + explanation.body };
    }
  }
  if (examples.length !== { 3: 8, 4: 14, 5: 11 }[number]) throw Error('Unexpected example count for ' + title);
  const prompts3 = ['各寫一個合法運算及其逆運算。', '先對單位矩陣操作，再驗算。', '分別寫操作順序和乘積順序。', '', '將增廣矩陣每一步算式寫出來。', '把操作同步施於單位矩陣。', '比較滿列秩與秩不足的情形。'];
  for (let index = 0; index < concepts.length; index++) {
    const point = knowledgePoints[index], row = mapping[index], short = concepts[index].key;
    blocks.push({ id: full(`B-${short}-C`), type: 'concept', title: point.title, provenance: point.provenance, knowledgePointIds: [point.id], markdown: point.markdown });
    for (const example of examples.filter(item => item.knowledgePointIds.includes(point.id))) blocks.push({ id: full(`B-${short}-E-${example.id.split('-').at(-1)}`), type: 'example', exampleId: example.id, knowledgePointIds: [point.id] });
    const prompt = number === 3 ? prompts3[index] : number === 4 ? row[4].replace(/^B\d+：/, '') : point.writingPrompt;
    if (number === 3 && index === 3) {
      const start = point.markdown.indexOf('| 列等價保留'), end = point.markdown.indexOf('\n\n零空間的證明');
      blocks.push({ id: full(`B-${short}-SUMMARY`), type: 'summary', title: '列等價保留與不保留的性質', markdown: point.markdown.slice(start, end), knowledgePointIds: [point.id] });
    } else blocks.push({ id: full(`B-${short}-H`), type: 'note', title: '停一下，親手推導', layout: number === 3 && [1, 5].includes(index) ? 'split' : 'inline', prompt, knowledgePointIds: [point.id], height: 230 });
    if (number === 5 && index === 3) blocks.push({ id: full('B-SPLIT'), type: 'note', layout: 'split', title: '對照量詞，分清楚存在與唯一', prompt: '對照上方量詞比較表，自行寫下每種條件的例子或反例。', knowledgePointIds: [point.id], height: 230 });
  }
  let summary = piece(all, number === 3 ? '8. 考前摘要' : number === 4 ? '考前摘要 B14' : '8. 考前摘要');
  if (number === 3) summary = summary.split('\n### 錯題紀錄')[0] + '\n\n### 口頭自我檢核\n\n' + summary.split('### 口頭自我檢核')[1];
  if (number === 4) summary += '\n\n### 自我檢核\n\n' + piece(all, '錯題紀錄與自我檢核').split('\n').filter(line => line.startsWith('- ')).join('\n');
  if (number === 5) summary = summary.split('\n錯題紀錄空白格式')[0] + '\n\n' + summary.split('\n口頭自測：')[1];
  blocks.push({ id: full('B-SUM'), type: 'summary', title: '考前摘要與常見錯誤', markdown: summary.trim() });

  let quizEntries, quizSolutions, quizHints = {}, correct = {}, explanations = {};
  if (number === 3) {
    quizEntries = chunks(piece(all, '6. 小節測驗'), /^### ((?:MC|HW)\d{2})[｜ ]([^\n]*)\n/gm);
    const text = piece(all, '7. 測驗提示');
    for (const row of rows(text).filter(row => /^MC\d{2}$/.test(row[0]))) { quizHints[row[0]] = row[1]; correct[row[0]] = row[2]; }
    for (const item of chunks(text, /^\*\*(MC\d{2}) 逐選項解析：\*\*\s*/gm)) explanations[item.key] = item.body.split('\n\n')[0];
    quizSolutions = chunks(text, /^### (HW\d{2})([^\n]*)\n/gm);
  } else if (number === 4) {
    quizEntries = chunks(piece(all, '小節測驗 AS01'), /^### ((?:T|W)\d{2})（([^\n]*)\n/gm);
    for (const row of rows(piece(all, '測驗答案區')).filter(row => /^[TW]\d{2}$/.test(row[0]))) correct[row[0]] = row[1];
    for (const row of rows(piece(all, '測驗提示區')).filter(row => /^[TW]\d{2}$/.test(row[0]))) quizHints[row[0]] = row[1];
    quizSolutions = chunks(piece(all, '測驗詳解與評分'), /^### ((?:T|W)\d{2})([^\n]*)\n/gm);
    for (const item of quizSolutions.filter(item => item.key.startsWith('T'))) explanations[item.key] = item.body;
  } else {
    const quiz = piece(all, '7. 小節測驗'), subparts = chunks(quiz, /^### (7\.[1-5])([^\n]*)\n/gm);
    quizEntries = chunks(subparts.find(item => item.key === '7.1').body, /^\*\*(Q\d{2})｜([^\n]*)\*\*\n/gm);
    const indexText = subparts.find(item => item.key === '7.3').body;
    for (const match of indexText.matchAll(/(Q\d{2}) ([A-D])(?=[；。])/g)) correct[match[1]] = match[2];
    for (const item of chunks(subparts.find(item => item.key === '7.4').body, /^(Q\d{2})：/gm)) explanations[item.key] = item.body;
    const hw = subparts.find(item => item.key === '7.5').body;
    quizSolutions = [{ key: 'Q06', body: hw.slice(hw.indexOf('Q06：') + 4, hw.indexOf('\nQ07(a)')).trim() }, { key: 'Q07', body: hw.slice(hw.indexOf('Q07(a)')).trim() }];
    const hints = subparts.find(item => item.key === '7.2').body;
    for (const match of hints.matchAll(/(Q\d{2})：([\s\S]*?)(?=Q\d{2}：|$)/g)) quizHints[match[1]] = match[2].trim();
  }
  if (quizEntries.length !== 7) throw Error('Unexpected quiz count for ' + title);
  for (let index = 0; index < quizEntries.length; index++) {
    const item = quizEntries[index], parsed = choices(item.body.replace(/\n書寫區：[\s\S]*$/, ''));
    const isChoice = !!parsed.options, ids = [...item.header.matchAll(/K\d{2}/g)].map(match => full(match[0]));
    const points = number === 3 ? (isChoice ? 2 : 5) : isChoice ? null : 10;
    const question = { id: full(item.key), subjectId: 'linear-algebra', chapterId, sectionId, title: `1-${number} 小節測驗 · 第 ${index + 1} 題`, type: isChoice ? '選擇題' : (number === 5 ? index === 5 : index === 6) ? '證明題' : '手寫計算題', text: parsed.text, ...(isChoice ? { options: parsed.options } : {}), points, scoringStatus: points === null ? 'unspecified' : 'specified', knowledgePointIds: ids, tags: ids.map(id => knowledgePoints.find(point => point.id === id).title), source: { kind: 'simulation', title: '使用者提供審閱稿 · 自編模擬題' } };
    questions.push(question);
    if (isChoice) { if (!/^[ABCD]$/.test(correct[item.key] || '')) throw Error('Missing correct option ' + item.key); answers[question.id] = { correctOption: correct[item.key].charCodeAt(0) - 65 }; solutions[question.id] = { markdown: (quizHints[item.key] ? '**提示：** ' + quizHints[item.key] + '\n\n' : '') + explanations[item.key], optionExplanations: optionExplanations(explanations[item.key]) }; }
    else { const solution = quizSolutions.find(value => value.key === item.key); if (!solution) throw Error('Missing written solution ' + item.key); solutions[question.id] = { markdown: (quizHints[item.key] ? '**提示：** ' + quizHints[item.key] + '\n\n' : '') + solution.body }; }
  }
  const assessmentId = full(number === 5 ? 'A01' : 'AS01');
  blocks.push({ id: full('B-ASSESS'), type: 'assessment', assessmentId });
  const notice = { 3: '第一階段審閱稿：依可見整理文字編寫，未取得原始講義圖片與原例題完整題幹，完整性尚待核對。', 4: '第一階段審閱稿：未取得原先 12 張講義圖片，不能宣稱逐圖確認完整性；例題均為自編模擬，補充延伸另行標示。', 5: '第一階段審閱稿：原教材圖片未提供且前文有截斷；完整例題、定理編號及正式章名仍待核對。研究所延伸另行標示。' }[number];
  const section = { id: sectionId, title, reviewStatus: 'draft', contentVersion: number === 3 ? '0.1.0' : number === 4 ? '0.1' : '1.0', sourceSectionId: number === 3 ? 'la-ch01-s03' : `LA-C01-S0${number}`, notice, knowledgePointIds: knowledgePoints.map(point => point.id), blocks, assessment: { id: assessmentId, scope: 'section', title: `1-${number} 小節測驗`, questionIds: questions.map(question => question.id), totalPoints: number === 3 ? 20 : null, scoringNote: number === 3 ? '選擇題各 2 分，手寫題各 5 分，共 20 分。' : '原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。' } };
  const sourceReview = { filename: path.basename(inputPath), sha256: createHash('sha256').update(source).digest('hex'), contentVersion: section.contentVersion, status: 'draft', scope: sectionId, pendingExamCount: 15, pendingExamImported: false, note: '未核實的考古候選索引不進正式題庫；未製作大章綜合測驗。' };
  upsertSection(catalog, { section, questions, examples, knowledgePoints, answers, solutions, sourceReview });
  console.log(`${title}: ${knowledgePoints.length} knowledge points, ${examples.length} examples, ${blocks.length} blocks, ${questions.length} assessment questions; total points ${section.assessment.totalPoints ?? 'unspecified'}.`);
}
writeCatalog(catalog);
