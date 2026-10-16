import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { readCatalog, upsertSection, writeCatalog } from './catalog.mjs';

const inputPath = process.argv[2];
if (!inputPath) throw Error('Usage: node scripts/import-la-17.mjs <1-7.md>');
const source = readFileSync(inputPath, 'utf8').replace(/\r\n/g, '\n');
if (!source.startsWith('# 1-7 基本行運算')) throw Error('Expected the 1-7 review draft');
function chunks(text, regex) {
  const matches = [...text.matchAll(regex)];
  return matches.map((match, index) => ({ key: match[1], header: (match[2] || '').trim(), body: text.slice(match.index + match[0].length, matches[index + 1]?.index).trim() }));
}
const parts = chunks(source, /^## ([^\n]+)\n/gm);
function part(name) { const item = parts.find(item => item.key.startsWith(name)); if (!item) throw Error('Missing source part: ' + name); return item.body; }
function rows(text) { return text.split('\n').filter(line => line.trim().startsWith('|')).map(line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim())); }
const sectionId = 'LA-CH01-S07', full = id => sectionId + '-' + id.toUpperCase();

// The draft mixes TeX with plain mathematical notation. Convert only known
// mathematical phrases; keep prose and all existing TeX unchanged.
const literals = [
  'A∈F^(n×n)', 'A∈F^(m×n)', 'b∈F^n', 'col(A)≠F^n',
  'ker(A)={0}', 'rank(A)=n', 'rank(A)<n', 'nullity(A)=n−rank(A)', 'nullity(A)>0', 'nullity=0', 'rank=n', 'rank<n',
  'RREF(A)=I_n', 'det(A)≠0', 'det(PA)=det(A)', 'col(PA)=col(A)', 'ker(PA)=ker(A)',
  'PAx=0 ⇔ Ax=P⁻¹0=0', 'AQx=0 ⇔ Qx∈ker(A)', 'Ax=b ⇔ EAx=Eb', 'PAx=0', 'b∉col(A)', 'x∈Q⁻¹ker(A)', 'Q⁻¹ ker(A)', 'P col(A)',
  'R_i ↔ R_j', 'C_i ↔ C_j', 'R_i ← kR_i', 'C_i ← kC_i', 'R_j ← R_j+kR_i', 'C_j ← C_j+kC_i',
  'R_2←R_2+5R_1', 'R_3←R_3+2R_1', 'R_2←R_2−3R_1', 'R_2←R_2+3R_1',
  'C_1←C_1+5C_2', 'C_2←C_2−C_1', 'C_3←C_3−C_1', 'R_2←R_2−R_1', 'R_2←R_2+R_1',
  'R_2←R_2−2R_1', 'R_3←R_3−R_1', 'R_1←(1/2)R_1', 'R_1←2R_1', 'R_2←R_2+2R_1',
  'A=E_1⁻¹E_2⁻¹B', 'A=E_2⁻¹E_1⁻¹B', 'A=E_2E_1B', 'A=E_1E_2B', 'B=E_2E_1A',
  'A=E_1^{-1}⋯E_r^{-1}B', 'B=E_r⋯E_1A', 'E_r⋯E_1A=I', 'E_r⋯E_1=A⁻¹',
  'B=AF_1F_2', 'B=PA', 'B=AQ', 'x=Qy', 'Ax=b', 'Ax=0', 'AQy=b', 'x=A⁻¹b',
  'N=e_je_i^T', 'e_i^Te_j=0', 'e_j e_i^T', 'N²=0', '(I+kN)(I−kN)=I−k²N²=I',
  '[A|I]', '[I|A⁻¹]', 'T_21(5)', 'T_{ji}(k)', 'D_i(k)', 'P_ij', 'I_n', 'I_3', 'I_2',
  'diag(1,0,0)', 'diag(1,0)', 'diag(I_r,0)', 'span{(1,1)}', 'span{(1,0)}',
  '(x_1,x_2)=(1−2s,s)', '(3,4)−3(1,2)=(0,−2)', '(2,0,1)', '(1,1,1)', '(1,0,0)',
  'x=A⁻¹(1,2)^T=(−1,1)^T', 'A=(1,0)^T', 'b=(1,2)^T', 'b=(1,3)^T', 'b=(0,1)^T',
  '(1,2)^T', '(1,3)^T', '(−1,1)^T', '(1,0)^T', '(0,1)^T', '(0,−2)', 'A=I', 'P=2I', 'b=0', 'x=0',
  '2R_1+R_3', 'k≠0', 'i≠j', 'k=0', 'k=1', '1/k', '−k', 's∈F', 't≠4', 't=4', 't−4', '0=1',
  'm×n', 'm×m', 'n×n', '2×3', '2×2', '3×3', '2×1', 'F^n', '(j,i)', '(1,3)',
  'E_2E_1', 'E_2⁻¹', 'E_1⁻¹', 'E+A', 'A E^T', 'PA', 'AQ', 'EA', 'AE', 'AF'
];
function tex(value) {
  return value.replace(/−/g, '-').replace(/⁻¹/g, '^{-1}').replace(/²/g, '^{2}')
    .replace(/\^\(([^)]*)\)/g, '^{$1}').replace(/×/g, '\\times ').replace(/∈/g, '\\in ').replace(/∉/g, '\\notin ')
    .replace(/≠/g, '\\ne ').replace(/⇔/g, '\\iff ').replace(/⇒/g, '\\implies ').replace(/←/g, '\\leftarrow ').replace(/↔/g, '\\leftrightarrow ').replace(/⋯/g, '\\cdots ')
    .replace(/span\{([^}]+)\}/g, '\\operatorname{span}\\{$1\\}').replace(/(?<![A-Za-z\\{])\b(rank|nullity|ker|col|det|diag|RREF)\b/g, '\\operatorname{$1}')
    .replace(/\{0\}/g, '\\{0\\}').replace(/a_ij/g, 'a_{ij}').replace(/P_ij/g, 'P_{ij}').replace(/([A-Za-z])_(\d{2,})/g, '$1_{$2}').replace(/\|/g, '\\mid ');
}
function format(text) {
  const protectedMath = [], hold = value => { protectedMath.push(value); return '\uE000' + (protectedMath.length - 1) + '\uE001'; };
  let result = text.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, hold);
  result = result.replace('[I|[[-5,2],[3,−1]]]', hold('$\\left[I\\mid\\begin{matrix}-5&2\\\\3&-1\\end{matrix}\\right]$'));
  result = result.replace(/(?:((?:[A-Z](?:_[a-z0-9]+|⁻¹)?)+)=)?\[\[([^\n]*?)\]\]/g, (_, prefix, body) => {
    const matrixRows = body.split(/\],\s*\[/).map(row => row.split(/[|,]/).map(tex));
    const width = matrixRows[0].length;
    if (!matrixRows.every(row => row.length === width)) throw Error('Malformed matrix');
    const cells = matrixRows.map(row => row.join('&')).join('\\\\');
    const augmented = body.includes('|');
    const columns = augmented ? 'c'.repeat(body.split('],')[0].split('|')[0].split(',').length) + '|' + 'c'.repeat(width - body.split('],')[0].split('|')[0].split(',').length) : '';
    const matrix = augmented ? '\\left[\\begin{array}{' + columns + '}' + cells + '\\end{array}\\right]' : '\\begin{bmatrix}' + cells + '\\end{bmatrix}';
    return hold('$' + (prefix ? tex(prefix) + '=' : '') + matrix + '$');
  });
  for (const literal of [...literals].sort((a,b) => b.length - a.length)) {
    const escaped = literal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp('(?<![A-Za-z0-9_])' + escaped + '(?![A-Za-z0-9_])', 'g'), () => hold('$' + tex(literal) + '$'));
  }
  result = result.replace(/(?<![A-Za-z0-9_])(?:[A-Z](?:_[a-z0-9]|⁻¹)?|a_ij|e_i|e_j|R_i|R_j|C_i|C_j|R_[123]|C_[123]|e_je_i\^T|[bijkmnrstxy])(?![A-Za-z0-9_])/g, value => hold('$' + tex(value) + '$'));
  return result.replace(/\uE000(\d+)\uE001/g, (_, index) => protectedMath[index]);
}
function choices(text) {
  const markers = [...text.matchAll(/(?:^|[\n \u3000])([A-D])\.\s*/g)];
  if (!markers.length) return { text: text.trim() };
  if (markers.length !== 4 || markers.map(item => item[1]).join('') !== 'ABCD') throw Error('Expected four ordered choices');
  return { text: text.slice(0, markers[0].index).trim(), options: markers.map((item, index) => text.slice(item.index + item[0].length, markers[index + 1]?.index).trim()) };
}
const mapping = rows(part('1.')).filter(row => /^k\d{2}$/.test(row[0]));
const concepts = chunks(part('2.'), /^### (k\d{2}) ([^\n]+)\n/gm);
const knowledgePoints = concepts.map(item => ({ id: full(item.key), title: item.header, difficulty: mapping.find(row => row[0] === item.key)[2].length, provenance: item.key === 'k08' ? '補充延伸' : '數學整理 · 原教材歸屬待核對', markdown: format(item.body.split('\n手寫提示：')[0].trim()) }));
const solutionsParts = chunks(part('5.'), /^### ([^\n]+)\n/gm);
function solutionPart(name) { const item = solutionsParts.find(item => item.key === name); if (!item) throw Error('Missing solutions: ' + name); return item.body; }
const exampleSolutions = chunks(solutionPart('例題解答'), /^\*\*(ex\d{2})\*\*：/gm);
const examples = [], questions = [], answers = {}, solutions = {};
for (const row of rows(part('3.')).filter(row => /^ex\d{2}$/.test(row[0]))) {
  const example = { id: full(row[0]), title: '例題 ' + row[0].slice(2), knowledgePointIds: [full(row[1])], type: ['ex05','ex07','ex08'].includes(row[0]) ? '證明題' : '手寫計算題', text: format(row[3]), source: { kind: 'simulation', title: '使用者提供審閱稿 · 編寫例題，非原教材題' } };
  examples.push(example);
  const solution = exampleSolutions.find(item => item.key === row[0]); if (!solution) throw Error('Missing example: ' + row[0]);
  solutions[example.id] = { markdown: '**辨識與方法：** ' + format(row[4]) + '\n\n' + format(solution.body) };
}
const choiceSolutions = chunks(solutionPart('選擇題逐選項解析'), /^\*\*(q\d{2})：([A-D])。\*\*\s*/gm);
const writtenSolutions = chunks(solutionPart('手寫題詳解與評分'), /^\*\*(q\d{2})\*\*：/gm);
const optionDetails = {
  q01: ['再交換一次可還原。', '乘 −1/2 可還原。', '清除原 row 的資訊，無法還原任意原矩陣。', '加 −3 倍可還原。'],
  q02: ['EA 的維度為 (2×2)(2×3)，合法且做 row 操作。', 'AE 的內維度 3、2 不合。', 'E+A 尺寸不同，不能相加，也不是操作表示法。', 'A E^T 的內維度同樣不合。'],
  q03: ['未使用反向操作，一般無法還原。', '反向操作順序錯誤，E_1⁻¹ 與 E_2⁻¹ 一般不能交換。', '未使用反向操作，一般無法還原。', '由 B=E_2E_1A，先左乘 E_2⁻¹，再左乘 E_1⁻¹，得 A=E_1⁻¹E_2⁻¹B。'],
  q04: ['反例：A=(1,0)^T，P 交換兩座標，column space 從水平軸變成垂直軸。', 'P 可逆，所以 PAx=0 ⇔ Ax=P⁻¹0=0，核空間相同。', '取 A=I、P=2I，行列式改變。', '同樣取 A=I、P=2I，特徵值從 1 變成 2。'],
  q05: ['零矩陣對 b=0 也有解，不能推出可逆。', '任何矩陣的齊次方程都有零解。', '對每個 b 都有解表示滿射；方陣因此滿秩、可逆。', 'diag(1,0) 有非零 row，仍是奇異矩陣。']
};
for (const item of chunks(part('4.'), /^### (q\d{2})｜([^\n]+)\n/gm)) {
  const [body, hint] = item.body.split('\n提示：'), parsed = choices(body), isChoice = !!parsed.options;
  if (!hint) throw Error('Missing hint ' + item.key);
  const ids = [...item.header.matchAll(/k\d{2}/g)].map(match => full(match[0]));
  const question = { id: full(item.key), subjectId: 'linear-algebra', chapterId: 'LA-CH01', sectionId, title: '1-7 小節測驗 · 第 ' + Number(item.key.slice(1)) + ' 題', type: isChoice ? '選擇題' : item.header.includes('證明') ? '證明題' : '手寫計算題', text: format(parsed.text), ...(isChoice ? { options: parsed.options.map(format) } : {}), points: isChoice ? null : 10, scoringStatus: isChoice ? 'unspecified' : 'specified', knowledgePointIds: ids, tags: ids.map(id => knowledgePoints.find(point => point.id === id).title), source: { kind: 'simulation', title: '使用者提供審閱稿 · 自編模擬題' } };
  questions.push(question);
  const solution = (isChoice ? choiceSolutions : writtenSolutions).find(entry => entry.key === item.key);
  if (!solution) throw Error('Missing question solution ' + item.key);
  solutions[question.id] = { markdown: '**提示：** ' + format(hint.trim()) + '\n\n' + format(solution.body) };
  if (isChoice) {
    answers[question.id] = { correctOption: solution.header.charCodeAt(0) - 65 };
    solutions[question.id].optionExplanations = optionDetails[item.key].map(format);
  }
}
const prompts = [
  concepts[0].body.split('手寫提示：')[1].trim(),
  '對照左側定義，構造例題 02 的基本矩陣與反矩陣，標出來源與目標的下標。',
  '計算例題 03 的 EA 與 AE，分別標出被改變的 row 或 column，檢查兩側矩陣的尺寸。',
  '用例題 04 依時間順序寫出每一步，再分別寫出左乘因子的順序與逆向還原順序。',
  '', '自行以 [A|I] 完成例題 06 的求逆過程；右半同步操作，再代回 Ax=b 驗算。', '',
  '用例題 08 逐步記錄 row 與 column 操作，並說明只做 row 運算為何不夠。'
];
const correction = part('0.').split('### 前文更正\n')[1].trim();
const blocks = [{ id: full('B-INTRO'), type: 'summary', title: '用語約定與前文更正', provenance: '編輯更正', knowledgePointIds: [], markdown: '本節明確採 row（橫排，R）與 column（直行，C）；原教材「行」的用語仍待原圖確認。左乘做 row 操作，右乘做 column 操作。\n\n' + format(correction) }];
let serial = 1;
const blockId = () => full('B' + String(serial++).padStart(3, '0'));
for (let index = 0; index < knowledgePoints.length; index++) {
  const point = knowledgePoints[index], example = examples[index];
  blocks.push({ id: blockId(), type: 'concept', title: point.title, provenance: point.provenance, markdown: point.markdown, knowledgePointIds: [point.id] });
  blocks.push({ id: blockId(), type: 'example', exampleId: example.id, knowledgePointIds: [point.id] });
  blocks.push([4,6].includes(index)
    ? { id: blockId(), type: 'summary', title: index === 4 ? '等價性質對照' : '先確認方陣與量詞', markdown: index === 4 ? format(concepts[index].body.slice(concepts[index].body.indexOf('|性質|'), concepts[index].body.indexOf('\n\n例如'))) : format('非方陣 A∈F^(m×n)：只有零解等價於滿 column rank n；每個 b 都有解等價於滿 row rank m，不能直接互推。某個 b 有解、某個非零 b 有解，都不足以推出方陣可逆。'), knowledgePointIds: [point.id] }
    : { id: blockId(), type: 'note', title: '停一下，親手推導', layout: index === 1 ? 'split' : 'inline', height: 230, prompt: format(prompts[index]), knowledgePointIds: [point.id] });
}
const assessmentId = full('ASSESSMENT01');
blocks.push({ id: blockId(), type: 'summary', title: '考前摘要', markdown: format(part('7.').split('\n|錯題 ID|')[0].trim()) });
blocks.push({ id: blockId(), type: 'assessment', assessmentId });
blocks.push({ id: blockId(), type: 'note', title: '錯題訂正與重點回想', layout: 'inline', height: 260, prompt: '記錄錯題 ID、錯誤位置與原因（觀念／符號／計算／條件），再用自己的話寫下正確判斷提示及重做結果。原作答與訂正請分開保留。', knowledgePointIds: knowledgePoints.map(point => point.id) });
if (knowledgePoints.length !== 8 || examples.length !== 8 || questions.length !== 7 || blocks.length !== 28 || Object.keys(answers).length !== 5) throw Error('Incomplete 1-7 import');
const section = { id: sectionId, title: '1-7 基本行運算', reviewStatus: 'draft', contentVersion: '0.1.0-review', sourceSectionId: 'la-ch01-s07', notice: '第一階段審閱稿：未取得三張原教材圖片，原教材「行」代表 row 或 column 仍待確認。本節一律用 row（橫排）與 column（直行）區分操作方向。例題均為自編模擬，原例題與教材歸屬待核對；前文更正及補充延伸另行標示。', knowledgePointIds: knowledgePoints.map(point => point.id), blocks, assessment: { id: assessmentId, scope: 'section', title: '1-7 小節測驗', questionIds: questions.map(question => question.id), totalPoints: null, scoringNote: '原稿未指定選擇題配分；僅呈現答對題數。兩題手寫各 10 分，由本人對照詳解自評。' } };
const sourceReview = { filename: path.basename(inputPath), sha256: createHash('sha256').update(source).digest('hex'), contentVersion: section.contentVersion, status: 'draft', scope: sectionId, pendingExamCount: 15, pendingExamImported: false, note: '三張原圖未提供；原教材用語、題幹及教材歸屬待核對。編寫例題與模擬題清楚標示，前文更正保留。15 筆未核實考古候選不進正式題庫，未製作大章綜合測驗。' };
const catalog = readCatalog();
upsertSection(catalog, { section, questions, examples, knowledgePoints, answers, solutions, sourceReview });
writeCatalog(catalog);
console.log('1-7 基本行運算: 8 knowledge points, 8 authored examples, 28 blocks, 7 assessment questions; choice points unspecified.');
