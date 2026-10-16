import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readCatalog, upsertSection } from './scripts/catalog.mjs';
const require = createRequire(import.meta.url);
const katex = require('./docs/vendor/katex/katex.min.js');

const app = readFileSync('docs/app.js', 'utf8');
const content = readFileSync('docs/content.js', 'utf8');
const markdown = readFileSync('docs/course-markdown.js', 'utf8');
let checks = 0;
function check(value, message) { assert(value, message); checks++; }
function launch(initialStorage = {}, emptyCatalog = true) {
  const store = new Map(Object.entries(initialStorage)), handlers = {}, windowHandlers = {}, elements = new Map();
  const element = () => ({ innerHTML: '', textContent: '', isConnected: true, classList: { add() {}, remove() {}, toggle() {}, contains: () => false }, focus() {}, querySelector: () => element(), querySelectorAll: () => [] });
  const get = selector => { if (!elements.has(selector)) elements.set(selector, element()); return elements.get(selector); };
  const document = { querySelector: get, querySelectorAll: () => [], activeElement: element(), documentElement: element(), addEventListener: (type, fn) => (handlers[type] ??= []).push(fn) };
  let hash = '#home';
  const location = { get hash() { return hash; }, set hash(value) { hash = value.startsWith('#') ? value : '#' + value; (windowHandlers.hashchange || []).forEach(fn => fn()); } };
  const window = { katex, addEventListener: (type, fn) => (windowHandlers[type] ??= []).push(fn), scrollTo() {} };
  const context = vm.createContext({ window, document, location, localStorage: { getItem: key => store.get(key) || null, setItem: (key, value) => store.set(key, value) }, setTimeout: () => 1, clearTimeout() {}, requestAnimationFrame() {}, ResizeObserver: class { observe() {} disconnect() {} }, devicePixelRatio: 1, URLSearchParams, Intl, Date, structuredClone, matchMedia: () => ({ matches: true }), console });
  vm.runInContext(content, context);
  if (emptyCatalog) { context.window.ZILIU_CONTENT.subjects.forEach(subject => subject.chapters = []); context.window.ZILIU_CONTENT.questions = []; }
  vm.runInContext(markdown, context); vm.runInContext(app, context);
  const run = code => vm.runInContext(code, context);
  const click = dataset => { const target = { dataset, classList: { contains: () => false }, closest() { return this; } }; (handlers.click || []).forEach(fn => fn({ target })); };
  const change = target => (handlers.change || []).forEach(fn => fn({ target }));
  return { run, click, change, get, location, store, handlers };
}
const page = launch();
check(page.run('courses.length') === 6, 'six subject entry points retained');
check(page.run('courses.every(subject=>subject.chapters.length===0)'), 'all course chapters empty');
check(page.run('bank.length') === 0, 'question bank empty');
check(page.run('noteEntries().length') === 0, 'no sample notes seeded');
check(page.run('allSections().length') === 0, 'no hidden lessons');
check(page.get('#app').innerHTML.includes('0<small>%'), 'home progress starts at zero');
for (const route of ['home', 'courses', 'lesson', 'quiz', 'questions', 'question', 'analysis', 'notes', 'note']) {
  page.location.hash = '#' + route;
  check(page.get('#app').innerHTML.includes('<main'), route + ' renders without content');
  check(!page.get('#app').innerHTML.includes('undefined'), route + ' has no undefined values');
}
page.location.hash = '#courses';
for (let index = 0; index < 6; index++) {
  page.click({ subject: String(index) });
  check(page.run('state.subject') === index, 'subject selection ' + index);
  check(page.get('#app').innerHTML.includes('0 個已提供大章 · 0 個已提供小節'), 'subject ' + index + ' has empty curriculum');
}
page.location.hash = '#quiz'; page.click({ action: 'submit-quiz' });
check(page.run('Object.keys(state.quizzes).length') === 0, 'cannot submit a nonexistent quiz');
page.location.hash = '#question?q=removed'; page.click({ action: 'submit-question' });
check(page.run('Object.keys(state.records).length') === 0, 'removed question cannot create a record');
page.location.hash = '#lesson?section=removed'; page.click({ action: 'mark-complete' });
check(page.run('state.completedSections.length') === 0, 'removed lesson cannot be completed');
page.location.hash = '#questions'; page.run("bankFilters={subject:'linear-algebra',status:'待訂正'};render()");
check(page.get('#app').innerHTML.includes('共 0 題'), 'empty filters stay at zero');
page.click({ action: 'clear-filters' }); check(page.run('Object.keys(bankFilters).length') === 0, 'filter reset works');
page.location.hash = '#analysis';
check(page.get('#app').innerHTML.includes('尚未練習 / 0 題'), 'unpracticed subjects distinguished from weakness');
check(page.get('#app').innerHTML.includes('尚無可計算的作答紀錄'), 'accuracy is unavailable, not falsely zero');
page.click({ analysis: 'redo' }); check(page.get('#app').innerHTML.includes('最近一次結果'), 'redo tab remains available');
page.click({ action: 'search' }); page.run("updateSearch('基底')");
check(page.get('#search-results').innerHTML.includes('沒有符合的內容'), 'search no longer exposes old course material');
page.run("updateSearch('線性代數')"); check(page.get('#search-results').innerHTML.includes('尚未提供教材'), 'subject search clearly states unavailable material');
const migrated = launch({ 'ziliu-v1': JSON.stringify({ done: true, quiz: { correct: true }, pins: [0], notes: { 'lesson-0': { text: '我的想法', strokes: [] }, 'empty': { text: '', strokes: [] } }, records: { q1: { submitted: true } } }) });
check(migrated.run('noteEntries().length') === 1, 'only user-authored notes migrate');
check(migrated.run('Object.keys(state.records).length') === 0, 'old demo question records not reused');
check(migrated.run('state.completedSections.length') === 0, 'old demo progress not reused');
check(migrated.run('state.pins.length') === 0, 'old course bookmarks not reused');
migrated.location.hash = '#notes'; check(migrated.get('#app').innerHTML.includes('先前的手寫筆記'), 'user notes remain accessible without old course titles');
migrated.run('persist()'); check(migrated.store.has('ziliu-v2'), 'new local state is saved');
for (const forbidden of ['示範學校', 'span{', '基底與維度', 'v₁', '最長共同子序列', '二元搜尋樹', 'demoNotes']) check(!app.includes(forbidden), 'removed material absent from public source: ' + forbidden);
console.log(`PASS: ${checks} checks — empty catalog and routes, zero statistics, removed deep links, filter/search behavior, and preservation of user-authored notes.`);
console.log('Browser visual and physical stylus verification remain unavailable in this environment.');

const live = launch({}, false), sectionId = 'LA-CH01-S01', assessmentId = sectionId + '-AS01';
const questionId = number => sectionId + '-Q' + String(number).padStart(2, '0');
check(live.get('#app').innerHTML.includes('開始閱讀 1-1'), 'home offers the available first lesson');
live.click({ action: 'start-first-lesson' });
check(live.run('activeSectionId') === sectionId, 'home entry opens exact 1-1 section');
live.run("state.notes['height-test']={height:345,text:'',strokes:[]}");
check(live.run("inkPad('height-test',230).includes('height:345px')"), 'saved canvas height restored');
check(live.run('allSections().length') === 15, 'all fifteen supplied sections are imported across two subjects');
check(live.run("courses.filter(subject=>!['linear-algebra','data-structures'].includes(subject.id)).every(subject=>subject.chapters.length===0)"), 'other four subjects stay empty');
check(live.run('catalog.knowledgePoints.filter(item=>item.id.startsWith("LA-CH01-S01-")).length') === 12, 'original twelve knowledge points retained');
check(live.run('catalog.examples.filter(item=>item.id.startsWith("LA-CH01-S01-")).length') === 12, 'original twelve examples retained');
check(live.run('allSections()[0].blocks.length') === 35, 'thirty-five planned blocks');
check(live.run('bank.length') === 105, 'one hundred five supplied assessment questions');
check(live.run('bank.every(question=>question.source.kind==="simulation")'), 'simulation provenance explicit');
check(live.run('catalog.sourceReview.pendingExamImported') === false, 'unverified exam summaries excluded');
check(live.run('courses[0].chapters[0].quiz===undefined'), 'no fabricated whole-chapter quiz');
check(live.run('assessmentQuestions(allSections()[0]).reduce((n,q)=>n+q.points,0)') === 30, 'assessment points total thirty');
live.location.hash = '#courses';
check(live.get('#app').innerHTML.includes('1-1 矩陣及矩陣運算'), 'course title matches user naming');
live.click({ section: sectionId });
check(live.run('route') === 'lesson', 'subject → supplied lesson');
check(live.get('#app').innerHTML.includes('原教材前段尚待補齊'), 'source coverage limitation visible');
check(live.get('#app').innerHTML.includes('katex'), 'matrices and formulas typeset');
check(live.get('#app').innerHTML.includes('<table>'), 'source concept tables retained');
check(!live.get('#app').innerHTML.includes('math-fallback'), 'all lesson and example formulas render');
check(live.get('#app').innerHTML.includes('查看提示與分步詳解'), 'examples have collapsible solutions');
check(live.run('noteEntries().length') === 0, 'import does not prefill handwriting');
live.click({ action: 'edit' }); live.click({ insertBlock: '0' });
check(live.run('Object.keys(state.customBlocks).length') === 1, 'new handwriting block is personal state');
live.run('persist()');
check(JSON.parse(live.store.get('ziliu-v2')).layouts[sectionId].length === 36, 'block arrangement saved');
live.click({ action: 'toggle-favorite' }); live.location.hash = '#notes';
check(live.get('#app').innerHTML.includes('1-1 矩陣及矩陣運算'), 'section favorite appears in notes');
live.location.hash = '#lesson?section=' + sectionId; live.click({ action: 'section-quiz' });
check(live.run('route') === 'quiz', 'lesson → section assessment');
check(!live.get('#app').innerHTML.includes('正確選項'), 'answers not shown before submission');
live.click({ action: 'submit-assessment' });
check(live.run('Object.keys(state.quizzes).length') === 0, 'incomplete choices block submission');
for (const [index, value] of [1, 3, 0, 2, 1].entries()) live.change({ dataset: { assessmentChoice: questionId(index + 1) }, value: String(value) });
live.run(`state.notes['answer-${questionId(6)}'].text='我自己的推導'`);
live.click({ action: 'submit-assessment' });
check(live.run('Object.keys(state.records).length') === 7, 'quiz shares all seven records with question bank and analysis');
check(live.get('#app').innerHTML.includes('10<small> / 10 分'), 'choice subtotal correctly scores ten out of ten');
check(live.get('#app').innerHTML.includes('原始作答 · 已保留'), 'submitted handwriting locked');
check(live.get('#app').innerHTML.includes('正確選項'), 'per-option explanations shown after submission');
check(live.run(`state.records['${questionId(6)}'].attempts[0].answer.text`) === '我自己的推導', 'original handwriting snapshot retained');
live.click({ assessmentRate: questionId(6) + ',部分正確' }); live.click({ assessmentRate: questionId(7) + ',不會' });
live.click({ action: 'finish-assessment' });
check(live.run(`state.completedSections.includes('${sectionId}')`), 'section completion recorded');
check(live.run('state.completedChapters.length') === 0, 'partial chapter never marked wholly complete');
live.location.hash = '#analysis';
check(live.get('#app').innerHTML.includes('71<small>%'), 'analysis uses real first-attempt results including self-assessment');
live.click({ reviewQuestion: questionId(7) });
check(live.run('activeSectionId') === sectionId, 'weakness returns to exact supplied lesson');
live.location.hash = '#quiz?section=' + sectionId; live.click({ action: 'retry-assessment' });
check(live.run(`state.records['${questionId(6)}'].attempts.length`) === 1, 'retry retains first attempt');
check(live.run(`state.notes['archive-${questionId(6)}-1'].text`) === '我自己的推導', 'retry archives original work');
for (const [index, value] of [0, 3, 0, 2, 1].entries()) live.change({ dataset: { assessmentChoice: questionId(index + 1) }, value: String(value) });
live.click({ action: 'submit-assessment' });
check(live.run(`state.records['${questionId(1)}'].attempts.length`) === 2, 'second attempt stored separately');
check(live.run(`state.records['${questionId(1)}'].attempts[0].status`) === '已答對', 'first attempt unchanged after wrong retry');
live.location.hash = '#questions';
check(live.get('#app').innerHTML.includes('共 105 題'), 'question bank displays supplied simulations only');
live.click({ question: questionId(7) });
check(live.get('#app').innerHTML.includes('(a)') && live.get('#app').innerHTML.includes('(b)'), 'proof question preserves shared stem and subparts');
live.click({ bankRate: '已答對' });
check(live.run(`state.quizzes['${assessmentId}'].ratings['${questionId(7)}']`) === '答對', 'bank self-assessment stays synchronized with section quiz');
check(live.run(`state.records['${questionId(7)}'].attempts[0].status`) === '待訂正', 'revising latest self-assessment preserves first-attempt result');
live.run('persist()');
const restored = launch(Object.fromEntries(live.store), false);
check(restored.run(`state.records['${questionId(1)}'].attempts.length`) === 2, 'attempt history survives reload');
check(restored.run('Object.keys(state.customBlocks).length') === 1, 'inserted notes survive reload');
check(restored.run(`state.notes['archive-${questionId(6)}-1'].text`) === '我自己的推導', 'archived handwriting survives reload');
check(!live.run('courseMarkdown("<img src=x onerror=alert(1)>")').includes('<img'), 'source HTML cannot execute');
check(!live.run('courseMarkdown("$\\\\href{javascript:alert(1)}{x}$")').includes('href="javascript:'), 'untrusted math links rejected');
let formulaCount = 0;
const data = live.run('catalog');
function validateFormulas(value) {
  if (typeof value === 'string') for (const match of value.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g)) { katex.renderToString((match[1] ?? match[2]).trim(), { displayMode: match[1] !== undefined, throwOnError: true, trust: false, strict: 'ignore' }); formulaCount++; }
  else if (Array.isArray(value)) value.forEach(validateFormulas);
  else if (value && typeof value === 'object') Object.values(value).forEach(validateFormulas);
}
validateFormulas(data);
check(formulaCount > 200, 'all imported inline and display formulas parse');
const multiply = (a, b) => a.map(row => b[0].map((_, j) => row.reduce((sum, value, k) => sum + value * b[k][j], 0)));
assert.deepEqual(multiply([[1, 2], [0, 1]], [[2, 0], [3, 1]]), [[8, 2], [3, 1]]); checks++;
assert.deepEqual(multiply(multiply([[1, -3], [1, 1]], [[1, -3], [1, 1]]), [[1, -3], [1, 1]]), [[-8, 0], [0, -8]]); checks++;
console.log(`PASS: ${checks} total checks, including the imported 1-1 workflow, ${formulaCount} math expressions, scoring, self-assessment, notes, provenance and reload persistence.`);

const multiple = launch({}, false), originalNote = '舊有 1-1 筆記';
multiple.run(`state.notes['lesson-LA-CH01-S01']={text:'${originalNote}',strokes:[],title:'1-1'};state.completedSections=['LA-CH01-S01'];persist()`);
check(multiple.run('allSections().filter(section=>section.subject.id==="linear-algebra").map(section=>section.id).join(",")') === 'LA-CH01-S01,LA-CH01-S03,LA-CH01-S04,LA-CH01-S05,LA-CH01-S06,LA-CH01-S07', 'linear algebra section order follows source numbering and does not invent 1-2');
check(multiple.run('subjectProgress(courses[0]).percent') === 17, 'provided-section progress correctly expands to six sections');
const configurations = [
  { number: 3, knowledge: 7, examples: 8, blocks: 25, assessment: 'AS01', ids: ['MC01','MC02','MC03','MC04','MC05','HW01','HW02'], correct: [2,0,3,1,2], points: 20, written: 5 },
  { number: 4, knowledge: 13, examples: 14, blocks: 43, assessment: 'AS01', ids: ['T01','T02','T03','T04','T05','W01','W02'], correct: [0,2,1,3,1], points: null, written: 10 },
  { number: 5, knowledge: 11, examples: 11, blocks: 37, assessment: 'A01', ids: ['Q01','Q02','Q03','Q04','Q05','Q06','Q07'], correct: [2,0,3,1,2], points: null, written: 10 },
  { number: 6, knowledge: 8, examples: 8, blocks: 28, assessment: 'A01', ids: ['Q01','Q02','Q03','Q04','Q05','Q06','Q07'], correct: [1,3,0,2,1], points: null, written: 10 },
  { number: 7, knowledge: 8, examples: 8, blocks: 28, assessment: 'ASSESSMENT01', ids: ['Q01','Q02','Q03','Q04','Q05','Q06','Q07'], correct: [2,0,3,1,2], points: null, written: 10 }
];
for (const config of configurations) {
  const prefix = 'LA-CH01-S0' + config.number, qid = short => prefix + '-' + short;
  multiple.location.hash = '#lesson?section=' + prefix;
  check(multiple.run('currentLesson().title').startsWith('1-' + config.number), 'correct new section title ' + config.number);
  check(multiple.run(`catalog.knowledgePoints.filter(item=>item.id.startsWith('${prefix}-')).length`) === config.knowledge, 'knowledge coverage ' + config.number);
  check(multiple.run(`catalog.examples.filter(item=>item.id.startsWith('${prefix}-')).length`) === config.examples, 'example coverage ' + config.number);
  check(multiple.run('currentLesson().blocks.length') === config.blocks, 'all reading and writing blocks retained ' + config.number);
  check(multiple.get('#app').innerHTML.includes('第一階段審閱稿'), 'source limitation shown ' + config.number);
  check(!multiple.get('#app').innerHTML.includes('math-fallback'), 'lecture formulas typeset ' + config.number);
  check(!multiple.get('#app').innerHTML.includes('undefined'), 'no broken metadata in lesson ' + config.number);
  check(multiple.get('#app').innerHTML.includes('與 1-' + config.number + ' 講義連結'), 'handwriting linked to correct section ' + config.number);
  multiple.click({ action: 'section-quiz' });
  check(multiple.run('assessmentFor(currentLesson()).totalPoints') === config.points, 'total matches supplied scoring ' + config.number);
  check(!multiple.get('#app').innerHTML.includes('null 分') && !multiple.get('#app').innerHTML.includes('NaN'), 'unspecified points never become invalid numbers ' + config.number);
  if (config.points === null) check(multiple.get('#app').innerHTML.includes('原稿未指定配分'), 'unknown choice scoring labelled ' + config.number);
  else check(multiple.get('#app').innerHTML.includes('共 7 題、20 分'), '1-3 total twenty points displayed');
  multiple.click({ action: 'submit-assessment' });
  check(!multiple.run(`state.quizzes['${prefix}-${config.assessment}']`), 'incomplete new assessment blocked ' + config.number);
  for (let index=0; index<5; index++) multiple.change({ dataset: { assessmentChoice: qid(config.ids[index]) }, value: String(config.correct[index]) });
  multiple.run(`state.notes['answer-${qid(config.ids[5])}'].text='1-${config.number} 的原始推導'`);
  multiple.click({ action: 'submit-assessment' });
  check(multiple.get('#app').innerHTML.includes(config.points === null ? '5<small> / 5 題' : '10<small> / 10 分'), 'auto result uses correct points-or-count display ' + config.number);
  check(multiple.get('#app').innerHTML.includes('正確選項'), 'new choices have per-option explanations ' + config.number);
  check(!multiple.get('#app').innerHTML.includes('math-fallback'), 'new solutions all typeset ' + config.number);
  check(multiple.run(`state.records['${qid(config.ids[5])}'].attempts[0].answer.text`) === `1-${config.number} 的原始推導`, 'new handwriting snapshot preserved ' + config.number);
  check(multiple.run(`bank.find(q=>q.id==='${qid(config.ids[5])}').points`) === config.written, 'written points match source ' + config.number);
  multiple.click({ assessmentRate: qid(config.ids[5]) + ',部分正確' });
  multiple.click({ assessmentRate: qid(config.ids[6]) + ',不會' });
  multiple.click({ action: 'finish-assessment' });
  check(multiple.run(`state.completedSections.includes('${prefix}')`), 'only completed subsection marked ' + config.number);
  check(multiple.run('state.completedChapters.length') === 0, 'chapter stays incomplete with missing 1-2 ' + config.number);
  check(!multiple.get('#modal-root').innerHTML.includes('只標記 1-1'), 'completion reminder uses active section ' + config.number);
  multiple.click({ action: 'close-modal' });
  multiple.location.hash = '#questions'; multiple.run(`bankFilters={subject:'linear-algebra',type:'證明題'};render()`);
  check(multiple.get('#app').innerHTML.includes('證明題'), 'type filtering remains available ' + config.number);
  multiple.click({ question: qid(config.ids[6]) }); multiple.click({ action: 'question-review' });
  check(multiple.run('activeSectionId') === prefix, 'weakness review returns to right new section ' + config.number);
}
check(multiple.run(`state.notes['lesson-LA-CH01-S01'].text`) === originalNote, 'adding sections never erases previous user notes');
check(multiple.run('Object.keys(state.records).length') === 35, 'independent question IDs prevent cross-section collisions');
multiple.location.hash = '#quiz?section=LA-CH01-S04'; multiple.click({ action: 'retry-assessment' });
check(multiple.run("state.notes['archive-LA-CH01-S04-W01-1'].text") === '1-4 的原始推導', 'new-section retry archives handwriting');
check(multiple.run("state.records['LA-CH01-S03-HW01'].attempts[0].status") === '部分正確', 'retry in one section preserves another section result');
check(multiple.run("catalog.sourceReviews.every(review=>review.pendingExamImported===false)"), 'all unverified exam lists excluded');
check(multiple.run('catalog.knowledgePoints.filter(point=>point.provenance.includes("延伸")).length') >= 7, 'supplementary extensions clearly labelled');
check(multiple.run('catalog.questions.every(question=>question.source.kind==="simulation")'), 'no fabricated real exam provenance');
check(!content.includes('drive.google.com'), 'unverified external source links not promoted to course data');
check(multiple.run('courseMarkdown("### 自我檢核\\n\\n- 檢查尺寸")').includes('<h3>自我檢核</h3>'), 'source summary headings render as headings');
console.log(`PASS: ${checks} checks across all supplied sections; ${formulaCount} mathematical expressions parsed.`);

const persistedCatalog = readCatalog(), originalFirstSection = JSON.stringify(persistedCatalog.subjects[0].chapters[0].sections[0]);
const originalFirstQuestions = JSON.stringify(persistedCatalog.questions.filter(question=>question.sectionId==='LA-CH01-S01'));
for (const sec of persistedCatalog.subjects[0].chapters[0].sections) {
  const belongs = id => id.startsWith(sec.id + '-');
  const payload = { section: sec, questions: persistedCatalog.questions.filter(item=>belongs(item.id)), examples: persistedCatalog.examples.filter(item=>belongs(item.id)), knowledgePoints: persistedCatalog.knowledgePoints.filter(item=>belongs(item.id)), answers: Object.fromEntries(Object.entries(persistedCatalog.answers).filter(([id])=>belongs(id))), solutions: Object.fromEntries(Object.entries(persistedCatalog.solutions).filter(([id])=>belongs(id))), sourceReview: persistedCatalog.sourceReviews.find(review=>review.scope===sec.id) };
  upsertSection(persistedCatalog, payload);
}
check(persistedCatalog.subjects[0].chapters[0].sections.length === 6, 'reimport does not erase other sections');
check(persistedCatalog.questions.length === 105, 'reimport does not duplicate questions across subjects');
check(persistedCatalog.examples.length === 100, 'reimport does not duplicate examples across subjects');
check(JSON.stringify(persistedCatalog.subjects[0].chapters[0].sections[0]) === originalFirstSection, 'original 1-1 section content remains byte-for-byte equivalent');
check(JSON.stringify(persistedCatalog.questions.filter(question=>question.sectionId==='LA-CH01-S01')) === originalFirstQuestions, 'original 1-1 question IDs and answers stay equivalent');
const ids = persistedCatalog.questions.map(question=>question.id);
check(new Set(ids).size === ids.length, 'question IDs globally unique');
check(persistedCatalog.questions.every(question=>persistedCatalog.solutions[question.id]?.markdown), 'all formal questions have reference solutions');
check(persistedCatalog.questions.filter(question=>question.options).every(question=>persistedCatalog.solutions[question.id].optionExplanations.length===4), 'all seventy-five choices have all four option explanations');
check(persistedCatalog.subjects[0].chapters[0].sections.every(section=>section.blocks.filter(block=>block.type==='example').every(block=>persistedCatalog.examples.some(example=>example.id===block.exampleId))), 'all example references resolve');
multiple.location.hash = '#question?q=LA-CH01-S05-Q07';
check(multiple.get('#app').innerHTML.includes('(a)') && multiple.get('#app').innerHTML.includes('(b)'), '1-5 shared two-part question remains a single complete card');
multiple.location.hash = '#question?q=LA-CH01-S03-HW02';
check(['(1)','(2)','(3)'].every(part=>multiple.get('#app').innerHTML.includes(part)), '1-3 shared three-part question remains intact');
const multReloaded = launch(Object.fromEntries(multiple.store), false);
check(multReloaded.run("state.notes['lesson-LA-CH01-S01'].text") === originalNote, 'prior notes survive new-catalog reload');
multiple.location.hash = '#lesson?section=LA-CH01-S06';
check(multiple.get('#app').innerHTML.includes('教材例 38，依先前轉錄待原圖確認') && multiple.get('#app').innerHTML.includes('教材例 39，依先前轉錄待原圖確認'), 'both transcribed LU examples show their original verification limits beside the question');
check(multiple.run("catalog.examples.filter(example=>example.id.startsWith('LA-CH01-S06-')&&example.source.verificationStatus==='pending_original').length") === 2, 'exactly two LU examples await original verification');
check(multiple.run("catalog.examples.filter(example=>example.id.startsWith('LA-CH01-S06-')&&example.source.kind==='simulation').length") === 6, 'six LU examples clearly marked as authored simulations');
check(multiple.run("catalog.knowledgePoints.find(point=>point.id==='LA-CH01-S06-K08').provenance") === '補充延伸', 'LU uniqueness, determinants and block elimination marked as extension');
check(!multiple.get('#app').innerHTML.includes('split B04：') && !multiple.get('#app').innerHTML.includes('手寫 B03：'), 'draft layout instructions become actual handwriting blocks');
check(multiple.run("currentLesson().blocks.map(block=>block.id).includes('LA-CH01-S06-B27')"), 'post-assessment LU correction block retained');
multiple.location.hash = '#question?q=LA-CH01-S06-Q07';
check(['(a)','(b)','(c)','(d)'].every(part=>multiple.get('#app').innerHTML.includes(part)), 'LU parameter problem retains shared stem and all four subquestions');
const LU = [[1,0,0],[4,1,0],[-7,-0.5,1]], U = [[1,2,3],[0,-14,-18],[0,0,21]], A = [[1,2,3],[4,-6,-6],[-7,-7,9]];
assert.deepEqual(multiply(LU, U), A); checks++;
const D = [[1,0,0],[0,-14,0],[0,0,21]], unitU = [[1,2,3],[0,1,9/7],[0,0,1]];
assert.deepEqual(multiply(D, unitU), U); checks++;
const quizA = [[2,1,1],[4,3,3],[2,2,3]], quizL = [[1,0,0],[2,1,0],[1,1,1]], quizU = [[2,1,1],[0,1,1],[0,0,1]];
assert.deepEqual(multiply(quizL, quizU), quizA); checks++;
assert.deepEqual(multiply(quizA, [[1],[1],[1]]), [[4],[10],[7]]); checks++;
for (const t of [-3, 1, 2, 4]) { assert.deepEqual(multiply([[1,0],[1/t,1]], [[t,1],[0,1-1/t]]), [[t,1],[1,1]]); checks++; }
assert.deepEqual(multiply([[0,1],[1,0]], [[0,1],[1,1]]), [[1,1],[0,1]]); checks++;
multiple.location.hash = '#lesson?section=LA-CH01-S07';
check(multiple.get('#app').innerHTML.includes('row（橫排）') && multiple.get('#app').innerHTML.includes('column（直行）'), '1-7 operation directions explicitly distinguish row and column');
check(multiple.get('#app').innerHTML.includes('前文更正'), 'source corrections visible at beginning of 1-7');
check(multiple.run("currentLesson().blocks[0].markdown.includes('不能化為')"), 'row-only all-ones matrix error corrected without silently editing prior courses');
check(multiple.run("catalog.examples.filter(example=>example.id.startsWith('LA-CH01-S07-')).every(example=>example.source.kind==='simulation')"), 'all eight 1-7 examples correctly labelled as authored');
check(multiple.run("catalog.knowledgePoints.find(point=>point.id==='LA-CH01-S07-K08').provenance") === '補充延伸', 'two-sided rank normal form marked as supplementary');
const sectionSevenText = JSON.stringify(persistedCatalog.subjects[0].chapters[0].sections.find(section=>section.id==='LA-CH01-S07'));
check(!sectionSevenText.includes('[[1,') && sectionSevenText.includes('bmatrix'), 'source matrix arrays converted to mathematical typesetting');
check(!sectionSevenText.includes('請補傳') && !sectionSevenText.includes('Schema'), 'source workflow instructions are excluded from learner content');
multiple.location.hash = '#question?q=LA-CH01-S07-Q07';
check(multiple.get('#app').innerHTML.includes('非方陣') && multiple.get('#app').innerHTML.includes('反例'), 'square-matrix proof and rectangular counterexample retained as one question');
multiple.location.hash = '#quiz?section=LA-CH01-S07'; multiple.click({ action: 'retry-assessment' });
check(multiple.run("state.notes['archive-LA-CH01-S07-Q06-1'].text") === '1-7 的原始推導', '1-7 retry archives submitted writing');
const exampleA = [[1,2],[3,4]], elementary = [[1,0],[5,1]];
assert.deepEqual(multiply(elementary, exampleA), [[1,2],[8,14]]); checks++;
assert.deepEqual(multiply(exampleA, elementary), [[11,2],[23,4]]); checks++;
const firstSwap = [[0,1],[1,0]], secondSubtract = [[1,0],[-1,1]], transformed = multiply(secondSubtract, multiply(firstSwap, exampleA));
assert.deepEqual(transformed, [[3,4],[-2,-2]]); checks++;
assert.deepEqual(multiply(firstSwap, multiply([[1,0],[1,1]], transformed)), exampleA); checks++;
assert.deepEqual(multiply([[1,2],[3,5]], [[-5,2],[3,-1]]), [[1,0],[0,1]]); checks++;
assert.deepEqual(multiply([[-5,2],[3,-1]], [[1],[2]]), [[-1],[1]]); checks++;
const calculationA = [[2,1],[4,3]], eliminate = [[1,0],[-2,1]], scale = [[0.5,0],[0,1]];
assert.deepEqual(multiply(scale, multiply(eliminate, calculationA)), [[1,0.5],[0,1]]); checks++;
const allOnes = [[1,1,1],[1,1,1],[1,1,1]], rowReduce = [[1,0,0],[-1,1,0],[-1,0,1]], columnReduce = [[1,-1,-1],[0,1,0],[0,0,1]];
assert.deepEqual(multiply(rowReduce, allOnes), [[1,1,1],[0,0,0],[0,0,0]]); checks++;
assert.deepEqual(multiply(multiply(rowReduce, allOnes), columnReduce), [[1,0,0],[0,0,0],[0,0,0]]); checks++;
console.log(`PASS: ${checks} checks covering all existing linear algebra workflows and data integrity.`);

const structures = launch({}, false), dsSection = n => 'DS-CH01-S' + String(n).padStart(2,'0');
const dsConfigs = [
  {n:1,k:3,e:3,b:12,ids:['Q01','Q02','Q03','Q04','Q05','W01','W02'],correct:[0,1,2,3,0]},
  {n:2,k:10,e:10,b:33,ids:['Q06','Q07','Q08','Q09','Q10','W03','W04'],correct:[2,1,3,0,2]},
  {n:3,k:3,e:4,b:13,ids:['Q1301','Q1302','Q1303','Q1304','Q1305','Q1306','Q1307'],correct:[1,3,0,2,1]},
  {n:4,k:6,e:6,b:21,ids:['Q1401','Q1402','Q1403','Q1404','Q1405','Q1406','Q1407'],correct:[3,1,2,0,3]},
  {n:5,k:3,e:3,b:13,ids:['Q15M1','Q15M2','Q15M3','Q15M4','Q15M5','Q15W1','Q15W2'],correct:[1,2,3,0,2]},
  {n:6,k:3,e:3,b:13,ids:['Q16M1','Q16M2','Q16M3','Q16M4','Q16M5','Q16W1','Q16W2'],correct:[1,0,3,2,1]},
  {n:7,k:2,e:4,b:12,ids:['Q17M1','Q17M2','Q17M3','Q17M4','Q17M5','Q17W1','Q17W2'],correct:[2,0,3,1,2]},
  {n:8,k:3,e:3,b:13,ids:['Q18M1','Q18M2','Q18M3','Q18M4','Q18M5','Q18W1','Q18W2'],correct:[3,0,2,1,3]},
  {n:9,k:2,e:3,b:11,ids:['Q19M1','Q19M2','Q19M3','Q19M4','Q19M5','Q19W1','Q19W2'],correct:[2,0,1,3,2]}
];
structures.location.hash = '#courses'; structures.click({subject:'2'});
check(structures.get('#app').innerHTML.includes('9 個已提供小節'), 'data structures subject contains all nine supplied sections');
check(structures.run('subjectProgress(courses[2]).percent')===0, 'new subject begins without fabricated progress');
structures.run("state.notes['lesson-LA-CH01-S01']={text:'既有線代筆記',strokes:[],title:'保留筆記',subjectIndex:0,sectionId:'LA-CH01-S01'};state.completedSections=['LA-CH01-S01'];persist()");
for (const config of dsConfigs) {
  const prefix = dsSection(config.n), qid = short=>prefix+'-'+short;
  structures.location.hash = '#lesson?section='+prefix;
  check(structures.run('state.subject')===2, 'DS deep link selects data structures ' + config.n);
  check(structures.run('currentLesson().subject.id')==='data-structures', 'DS lesson has correct subject ' + config.n);
  check(structures.run(`catalog.knowledgePoints.filter(point=>point.id.startsWith('${prefix}-')).length`)===config.k, 'DS knowledge coverage ' + config.n);
  check(structures.run(`catalog.examples.filter(example=>example.id.startsWith('${prefix}-')).length`)===config.e, 'DS examples coverage ' + config.n);
  check(structures.run('currentLesson().blocks.length')===config.b, 'DS blocks coverage ' + config.n);
  check(!structures.get('#app').innerHTML.includes('undefined')&&!structures.get('#app').innerHTML.includes('math-fallback'), 'DS lecture and example formulas render ' + config.n);
  check(structures.get('#app').innerHTML.includes('第一階段審閱稿'), 'DS source limitations remain visible ' + config.n);
  if (config.n===2||config.n===4) check(structures.get('#app').innerHTML.includes('<pre tabindex="0"')&&structures.get('#app').innerHTML.includes('    return'), 'DS code retains indentation and scrolling ' + config.n);
  structures.click({action:'section-quiz'});
  check(structures.run('assessmentFor(currentLesson()).totalPoints')===(config.n<=2?40:null), 'DS source scoring respected ' + config.n);
  check(!structures.get('#app').innerHTML.includes('null 分'), 'unknown DS points not fabricated ' + config.n);
  structures.click({action:'submit-assessment'});
  check(!structures.run(`state.quizzes['${prefix}-AS01']`), 'incomplete DS test cannot submit ' + config.n);
  for (let index=0;index<5;index++) structures.change({dataset:{assessmentChoice:qid(config.ids[index])},value:String(config.correct[index])});
  structures.run(`state.notes['answer-${qid(config.ids[5])}'].text='資料結構1-${config.n}原作答'`);
  structures.click({action:'submit-assessment'});
  check(structures.get('#app').innerHTML.includes(config.n<=2?'20<small> / 20 分':'5<small> / 5 題'), 'DS automatic choice score/count correct ' + config.n);
  check(!structures.get('#app').innerHTML.includes('math-fallback'), 'DS solutions render ' + config.n);
  check(structures.run(`state.records['${qid(config.ids[5])}'].attempts[0].answer.text`)===`資料結構1-${config.n}原作答`, 'DS submitted answer snapshot preserved ' + config.n);
  structures.click({assessmentRate:qid(config.ids[5])+',部分正確'}); structures.click({assessmentRate:qid(config.ids[6])+',不會'});
  structures.click({action:'finish-assessment'}); structures.click({action:'close-modal'});
  check(structures.run(`state.completedSections.includes('${prefix}')`), 'DS subsection completion ' + config.n);
  check(structures.run('state.completedChapters.length')===0, 'unverified full chapter not automatically completed ' + config.n);
  structures.location.hash='#question?q='+qid(config.ids[6]); structures.click({action:'question-review'});
  check(structures.run('activeSectionId')===prefix&&structures.run('state.subject')===2, 'DS weakness review returns to correct subject and section ' + config.n);
}
check(structures.run("state.notes['lesson-LA-CH01-S01'].text")==='既有線代筆記', 'DS study does not overwrite prior linear algebra notes');
check(structures.run('Object.keys(state.records).length')===63, 'all DS question records independent');
structures.location.hash='#questions'; structures.run("bankFilters={subject:'data-structures'};render()");
check(structures.get('#app').innerHTML.includes('共 63 題')&&structures.get('#app').innerHTML.includes('資料結構 · 第 1 章'), 'bank subject and chapter filters distinguish DS');
structures.run("bankFilters={subject:'linear-algebra'};render()");
check(structures.get('#app').innerHTML.includes('共 42 題')&&!structures.get('#app').innerHTML.includes('資料結構 · 第 1 章'), 'linear algebra bank remains separate');
structures.click({action:'settings'});
check(structures.get('#modal-root').innerHTML.includes('線性代數')&&structures.get('#modal-root').innerHTML.includes('資料結構')&&!structures.get('#modal-root').innerHTML.includes('其他五科'), 'settings reflect two supplied subjects');
structures.click({action:'close-modal'}); structures.location.hash='#notes'; structures.change({dataset:{noteFilter:'subject'},value:'2'});
check(!structures.get('#app').innerHTML.includes('既有線代筆記'), 'DS notes subject filter keeps subjects separate');
structures.location.hash='#quiz?section=DS-CH01-S02'; structures.click({action:'retry-assessment'});
check(structures.run("state.notes['archive-DS-CH01-S02-W03-1'].text")==='資料結構1-2原作答', 'DS retries archive original writing');
structures.location.hash='#lesson?section=DS-CH01-S02';
check(structures.get('#app').innerHTML.includes('條件式自編練習')&&structures.get('#app').innerHTML.includes('定義待原圖確認'), 'conditional A(n,m) definition clearly labelled');
structures.location.hash='#lesson?section=DS-CH01-S04';
check(structures.get('#app').innerHTML.includes('待原圖核對的勘誤')&&structures.get('#app').innerHTML.includes('編者修正版'), 'transcribed recursive-sum error and correction both preserved');
structures.location.hash='#quiz?section=DS-CH01-S04';
check(structures.get('#app').innerHTML.includes('return list[0];')&&structures.get('#app').innerHTML.includes('每列每次執行均算一步'), 'standalone performance questions include required program and counting convention');
structures.location.hash='#question?q=DS-CH01-S02-W04';
check(structures.get('#app').innerHTML.includes('條件式自編練習')&&structures.get('#app').innerHTML.includes('katex'), 'standalone conditional recurrence question includes its unverified definition');
const fence = '```c\nif (n < 2) {\n    return "<script>$x$</script>";\n}\n```';
const codeRendered = structures.run('courseMarkdown('+JSON.stringify(fence)+')');
check(codeRendered.includes('    return')&&codeRendered.includes('&lt;script&gt;$x$&lt;/script&gt;')&&!codeRendered.includes('<script>')&&!codeRendered.includes('katex'), 'code is escaped, indentation preserved, dollar signs are literal');
const dsData = readCatalog();
check(dsData.knowledgePoints.filter(point=>point.id.startsWith('DS-')).length===35, 'no duplicate data abstraction fragment');
check(dsData.examples.some(example=>example.id==='DS-CH01-S03-E14'), 'earlier data abstraction example retained');
check(dsData.questions.filter(question=>question.subjectId==='data-structures').every(question=>question.source.kind==='simulation'), 'all DS tests explicitly authored simulations');
check(!JSON.stringify(dsData).includes('<details>')&&!JSON.stringify(dsData).includes('請補傳'), 'document workflow and raw details markup excluded from course data');
const sort = a=>{let comparisons=0,swaps=0;for(let i=0;i<a.length-1;i++){let min=i;for(let j=i+1;j<a.length;j++){comparisons++;if(a[j]<a[min])min=j;}if(min!==i){[a[i],a[min]]=[a[min],a[i]];swaps++;}}return{a,comparisons,swaps};};
assert.deepEqual(sort([7,3,9,2]),{a:[2,3,7,9],comparisons:6,swaps:2});checks++;
const fib = n=>n<2?{value:n,calls:1,depth:1}:(()=>{const a=fib(n-1),b=fib(n-2);return{value:a.value+b.value,calls:a.calls+b.calls+1,depth:Math.max(a.depth,b.depth)+1};})();
assert.deepEqual(fib(4),{value:3,calls:9,depth:4});checks++;
const conditionalA=(n,m)=>m===0?n+1:n===0?1:conditionalA(n-1,m)+conditionalA(n,m-1);
assert.deepEqual([conditionalA(2,2),conditionalA(1,2),conditionalA(2,3)],[10,4,15]);checks++;
for(let n=1;n<=8;n++) { let triples=0;for(let i=1;i<=n;i++)for(let j=1;j<=i;j++)for(let k=1;k<=j;k++)triples++;assert.equal(triples,n*(n+1)*(n+2)/6);checks++; }
for(let n=1;n<=5;n++) { let cost=0;for(let i=1;i<=n;i++)for(let j=0;j<i*i;j++)cost+=j;assert.equal(cost,Array.from({length:n},(_,i)=>((i+1)**4-(i+1)**2)/2).reduce((a,b)=>a+b,0));checks++; }
check((3+1)+3*(2+1)+3*2===19&&(2+1)+2*(3+1)+2*3===17, 'rectangular matrix cost distinguishes rows and columns');
for(const subject of dsData.subjects)for(const chapter of subject.chapters)for(const section of chapter.sections){const belongs=id=>id.startsWith(section.id+'-');upsertSection(dsData,{subjectId:subject.id,chapter,section,questions:dsData.questions.filter(q=>belongs(q.id)),examples:dsData.examples.filter(q=>belongs(q.id)),knowledgePoints:dsData.knowledgePoints.filter(q=>belongs(q.id)),answers:Object.fromEntries(Object.entries(dsData.answers).filter(([id])=>belongs(id))),solutions:Object.fromEntries(Object.entries(dsData.solutions).filter(([id])=>belongs(id))),sourceReview:dsData.sourceReviews.find(review=>review.scope===section.id)});}
check(dsData.subjects[2].chapters[0].sections.length===9&&dsData.subjects[0].chapters[0].sections.length===6&&dsData.questions.length===105, 'cross-subject idempotent upsert preserves all sections');
const dsReloaded=launch(Object.fromEntries(structures.store),false);
check(dsReloaded.run("state.notes['lesson-LA-CH01-S01'].text")==='既有線代筆記', 'cross-subject notes survive reload');
console.log(`PASS: ${checks} final checks; ${formulaCount} mathematical expressions. Two subjects, 15 sections, 94 knowledge points, 100 examples, 105 questions. Browser and physical stylus verification are not included.`);
