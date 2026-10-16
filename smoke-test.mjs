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
function launch(initialStorage = {}, emptyCatalog = true, withExams = false) {
  const store = new Map(Object.entries(initialStorage)), handlers = {}, windowHandlers = {}, elements = new Map();
  const element = () => ({ innerHTML: '', textContent: '', isConnected: true, classList: { add() {}, remove() {}, toggle() {}, contains: () => false }, focus() {}, querySelector: () => element(), querySelectorAll: () => [] });
  const get = selector => { if (!elements.has(selector)) elements.set(selector, element()); return elements.get(selector); };
  const document = { querySelector: get, querySelectorAll: () => [], activeElement: element(), documentElement: element(), addEventListener: (type, fn) => (handlers[type] ??= []).push(fn) };
  let hash = '#home';
  const location = { get hash() { return hash; }, set hash(value) { hash = value.startsWith('#') ? value : '#' + value; (windowHandlers.hashchange || []).forEach(fn => fn()); } };
  const window = { katex, addEventListener: (type, fn) => (windowHandlers[type] ??= []).push(fn), scrollTo() {} };
  const context = vm.createContext({ window, document, location, localStorage: { getItem: key => store.get(key) || null, setItem: (key, value) => store.set(key, value) }, setTimeout: () => 1, clearTimeout() {}, requestAnimationFrame() {}, ResizeObserver: class { observe() {} disconnect() {} }, devicePixelRatio: 1, URLSearchParams, Intl, Date, structuredClone, matchMedia: () => ({ matches: true }), console });
  vm.runInContext(content, context);
  if (withExams) vm.runInContext(readFileSync('docs/exams.js', 'utf8'), context);
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
check(live.run('allSections().length') === 24, 'all twenty-four supplied sections are imported across two subjects');
check(live.run("courses.filter(subject=>!['linear-algebra','data-structures'].includes(subject.id)).every(subject=>subject.chapters.length===0)"), 'other four subjects stay empty');
check(live.run('catalog.knowledgePoints.filter(item=>item.id.startsWith("LA-CH01-S01-")).length') === 12, 'original twelve knowledge points retained');
check(live.run('catalog.examples.filter(item=>item.id.startsWith("LA-CH01-S01-")).length') === 12, 'original twelve examples retained');
check(live.run('allSections()[0].blocks.length') === 35, 'thirty-five planned blocks');
check(live.run('bank.length') === 168, 'one hundred sixty-eight supplied assessment questions');
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
check(live.get('#app').innerHTML.includes('共 168 題'), 'question bank displays supplied simulations only');
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
check(multiple.run('allSections().filter(section=>section.chapter.id==="LA-CH01").map(section=>section.id).join(",")') === 'LA-CH01-S01,LA-CH01-S03,LA-CH01-S04,LA-CH01-S05,LA-CH01-S06,LA-CH01-S07', 'linear algebra first chapter follows source numbering and does not invent 1-2');
check(multiple.run('subjectProgress(courses[0]).percent') === 7, 'provided-section progress expands to fifteen linear algebra sections, excluding pending 3-4');
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
check(persistedCatalog.questions.length === 168, 'reimport does not duplicate questions across subjects');
check(persistedCatalog.examples.length === 175, 'reimport does not duplicate examples across subjects');
check(JSON.stringify(persistedCatalog.subjects[0].chapters[0].sections[0]) === originalFirstSection, 'original 1-1 section content remains byte-for-byte equivalent');
check(JSON.stringify(persistedCatalog.questions.filter(question=>question.sectionId==='LA-CH01-S01')) === originalFirstQuestions, 'original 1-1 question IDs and answers stay equivalent');
const ids = persistedCatalog.questions.map(question=>question.id);
check(new Set(ids).size === ids.length, 'question IDs globally unique');
check(persistedCatalog.questions.every(question=>persistedCatalog.solutions[question.id]?.markdown), 'all formal questions have reference solutions');
check(persistedCatalog.questions.filter(question=>question.options).every(question=>persistedCatalog.solutions[question.id].optionExplanations.length===4), 'all choice questions have all four option explanations');
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
check(structures.get('#app').innerHTML.includes('共 105 題')&&!structures.get('#app').innerHTML.includes('資料結構 · 第 1 章'), 'linear algebra bank remains separate');
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
check(dsData.subjects[2].chapters[0].sections.length===9&&dsData.subjects[0].chapters[0].sections.length===6&&dsData.questions.length===168, 'cross-subject idempotent upsert preserves all sections');
const dsReloaded=launch(Object.fromEntries(structures.store),false);
check(dsReloaded.run("state.notes['lesson-LA-CH01-S01'].text")==='既有線代筆記', 'cross-subject notes survive reload');
console.log(`PASS: ${checks} existing workflow and cross-subject checks.`);

const determinants=launch({},false), chapterTwoConfigs=[
  {n:1,k:4,e:5,b:17,total:null,written:10,ids:['Q101','Q102','Q103','Q104','Q105','Q106','Q107'],correct:[2,0,3,1,2]},
  {n:2,k:6,e:8,b:25,total:null,written:10,ids:['Q201','Q202','Q203','Q204','Q205','Q206','Q207'],correct:[1,3,0,2,1]},
  {n:3,k:11,e:14,b:40,total:40,written:10,ids:['Q01','Q02','Q03','Q04','Q05','H01','H02'],correct:[1,2,3,0,2]},
  {n:4,k:8,e:8,b:28,total:100,written:30,ids:['Q01','Q02','Q03','Q04','Q05','Q06','Q07'],correct:[1,3,0,2,1]}
];
determinants.run("state.notes['lesson-LA-CH01-S01']={text:'第一章筆記',strokes:[],sectionId:'LA-CH01-S01',subjectIndex:0};state.notes['lesson-DS-CH01-S01']={text:'資料結構筆記',strokes:[],sectionId:'DS-CH01-S01',subjectIndex:2};persist()");
determinants.location.hash='#courses';
check(determinants.get('#app').innerHTML.includes('第 2 章 行列式'), 'second chapter appears with determinant title');
check(determinants.run('courses[0].chapters.length')===3, 'linear algebra chapters are distinct');
check(determinants.run("allSections().filter(section=>section.chapter.id==='LA-CH02').map(section=>section.title.split(' ')[0]).join(',')")==='2-1,2-2,2-3,2-4', 'second chapter section order correct');
for(const config of chapterTwoConfigs){
  const prefix='LA-CH02-S0'+config.n,qid=short=>prefix+'-'+short;
  determinants.location.hash='#lesson?section='+prefix;
  check(determinants.run('currentLesson().chapter.id')==='LA-CH02'&&determinants.run('state.subject')===0, 'deep link selects second chapter '+config.n);
  check(determinants.run(`catalog.knowledgePoints.filter(point=>point.id.startsWith('${prefix}-')).length`)===config.k, 'determinant knowledge coverage '+config.n);
  check(determinants.run(`catalog.examples.filter(example=>example.id.startsWith('${prefix}-')).length`)===config.e, 'determinant example coverage '+config.n);
  check(determinants.run('currentLesson().blocks.length')===config.b, 'determinant block coverage '+config.n);
  check(!determinants.get('#app').innerHTML.includes('math-fallback')&&!determinants.get('#app').innerHTML.includes('undefined'), 'determinant lecture formulas render '+config.n);
  check(determinants.get('#app').innerHTML.includes('第一階段審閱稿'), 'determinant source limitations visible '+config.n);
  determinants.click({action:'section-quiz'});
  check(determinants.run('assessmentFor(currentLesson()).totalPoints')===config.total, 'determinant total follows source '+config.n);
  determinants.click({action:'submit-assessment'});
  check(!determinants.run(`state.quizzes['${prefix}-AS01']`), 'unfinished determinant test cannot submit '+config.n);
  for(let i=0;i<5;i++)determinants.change({dataset:{assessmentChoice:qid(config.ids[i])},value:String(config.correct[i])});
  determinants.run(`state.notes['answer-${qid(config.ids[5])}'].text='第2章小節${config.n}的原作答'`);
  determinants.click({action:'submit-assessment'});
  check(determinants.get('#app').innerHTML.includes(config.total===null?'5<small> / 5 題':config.n===3?'20<small> / 20 分':'40<small> / 40 分'), 'determinant score or count correct '+config.n);
  check(!determinants.get('#app').innerHTML.includes('math-fallback'), 'determinant solution formulas render '+config.n);
  check(determinants.run(`bank.find(q=>q.id==='${qid(config.ids[5])}').points`)===config.written, 'determinant handwriting points correct '+config.n);
  determinants.click({assessmentRate:qid(config.ids[5])+',部分正確'});determinants.click({assessmentRate:qid(config.ids[6])+',不會'});
  determinants.click({action:'finish-assessment'});determinants.click({action:'close-modal'});
  check(determinants.run(`state.completedSections.includes('${prefix}')`), 'determinant subsection completion recorded '+config.n);
  check(determinants.run('state.completedChapters.length')===0, 'source review does not claim entire chapter complete '+config.n);
  determinants.location.hash='#question?q='+qid(config.ids[6]);determinants.click({action:'question-review'});
  check(determinants.run('activeSectionId')===prefix&&determinants.run('currentLesson().chapter.id')==='LA-CH02', 'weakness review returns to right second-chapter lesson '+config.n);
}
determinants.click({action:'chapter-practice'});
check(determinants.run('bankFilters.chapter')==='LA-CH02'&&determinants.get('#app').innerHTML.includes('共 28 題'), 'chapter practice filters second chapter only');
determinants.location.hash='#quiz?section=LA-CH02-S04';determinants.click({action:'retry-assessment'});
check(determinants.run("state.notes['archive-LA-CH02-S04-Q06-1'].text")==='第2章小節4的原作答', 'second-chapter retry archives handwriting');
check(determinants.run("state.notes['lesson-LA-CH01-S01'].text")==='第一章筆記'&&determinants.run("state.notes['lesson-DS-CH01-S01'].text")==='資料結構筆記', 'new chapter preserves previous subjects and notes');
determinants.location.hash='#lesson?section=LA-CH02-S03';
check(determinants.get('#app').innerHTML.includes('與前節的記號對照'), 'cofactor and minor notation bridge visible');
determinants.location.hash='#lesson?section=LA-CH02-S04';
check(determinants.get('#app').innerHTML.includes('原教材轉述，例23編號待核')&&determinants.get('#app').innerHTML.includes('原教材轉述，例7編號待核'), 'both transcribed adjugate examples show original verification status');
check(determinants.run("catalog.examples.filter(example=>example.id.startsWith('LA-CH02-')&&example.source.verificationStatus==='pending_original').length")===6, 'six second-chapter examples await original verification');
check(determinants.run("catalog.examples.filter(example=>example.id.startsWith('LA-CH02-')&&example.source.kind==='simulation').length")===29, 'twenty-nine second-chapter examples authored simulations');
check(determinants.run("catalog.examples.find(example=>example.id==='LA-CH02-S04-E02').text.includes('bmatrix')"), 'adjugate verification example retains its complete matrix');
const determinant=matrix=>matrix.length===0?1:matrix[0].reduce((sum,value,j)=>sum+(-1)**j*value*determinant(matrix.slice(1).map(row=>row.filter((_,k)=>k!==j))),0);
const adjugate=matrix=>matrix.map((row,i)=>row.map((_,j)=>(-1)**(i+j)*determinant(matrix.filter((_,k)=>k!==j).map(row=>row.filter((_,k)=>k!==i)))||0));
for(const [matrix,expected] of [
  [[[1,2],[3,4]],-2],[[[-7,4],[-3,6]],-30],[[[0,1,3],[-2,-3,-5],[4,-4,4]],48],
  [[[2,0,0,0],[1,3,4,0],[0,0,5,0],[2,1,0,-1]],-30],[[[1,2,0],[0,3,4],[2,0,5]],31],
  [[[0,2,1],[1,1,0],[2,3,4]],-7],[[[2,0,1],[0,3,1],[1,2,4]],17],
  [[[1,0,1,0],[0,2,0,1],[3,0,5,0],[0,4,0,6]],16],[[[1,1,1],[1,2,4],[1,4,16]],6]
]){assert.equal(determinant(matrix),expected);checks++;}
const adjA=[[3,-2,1],[5,6,2],[1,0,-3]],adjExpected=[[-18,-6,-10],[17,-10,-1],[-6,-2,28]];
assert.equal(determinant(adjA),-94);checks++;assert.deepEqual(adjugate(adjA),adjExpected);checks++;
assert.deepEqual(multiply(adjA,adjExpected),[[-94,0,0],[0,-94,0],[0,0,-94]]);checks++;
const adjQuiz=[[1,2,0],[0,1,0],[0,0,3]];
assert.deepEqual(adjugate(adjQuiz),[[3,-6,0],[0,3,0],[0,0,1]]);checks++;
assert.deepEqual(multiply(adjQuiz,adjugate(adjQuiz)),[[3,0,0],[0,3,0],[0,0,3]]);checks++;
for(let n=1;n<=6;n++){const tri=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===j?10:Math.abs(i-j)===1?5:0));assert.equal(determinant(tri),(n+1)*5**n);checks++;}
for(const a of [-4,-2,-1,0,1,2,4]){assert.equal(determinant([[1,1,a],[1,a,1],[a,1,1]]),-1*(a-1)**2*(a+2)||0);checks++;if(a!==1&&a!==-2){const rhs=multiply([[1,1,a],[1,a,1],[a,1,1]],[[2],[1/(a-1)],[-1/(a-1)]]);[1,3,2*a].forEach((value,i)=>assert(Math.abs(rhs[i][0]-value)<1e-10));checks++;}}
for(const t of [0,1/3,2]){const x=[[5/3+t],[-2/3+t],[t]],rhs=multiply([[1,1,-2],[1,-2,1],[-2,1,1]],x);[1,3,-4].forEach((value,i)=>assert(Math.abs(rhs[i][0]-value)<1e-10));checks++;}
const ch2Data=readCatalog(),ch2=ch2Data.subjects[0].chapters.find(chapter=>chapter.id==='LA-CH02');
for(const section of [...ch2.sections].reverse()){const belongs=id=>id.startsWith(section.id+'-');upsertSection(ch2Data,{section,chapter:ch2,questions:ch2Data.questions.filter(q=>belongs(q.id)),examples:ch2Data.examples.filter(q=>belongs(q.id)),knowledgePoints:ch2Data.knowledgePoints.filter(q=>belongs(q.id)),answers:Object.fromEntries(Object.entries(ch2Data.answers).filter(([id])=>belongs(id))),solutions:Object.fromEntries(Object.entries(ch2Data.solutions).filter(([id])=>belongs(id))),sourceReview:ch2Data.sourceReviews.find(review=>review.scope===section.id)});}
check(ch2.sections.map(section=>section.title.split(' ')[0]).join(',')==='2-1,2-2,2-3,2-4', 'second chapter order stable even when reimported backwards');
check(ch2Data.questions.length===168&&ch2Data.examples.length===175&&ch2Data.knowledgePoints.length===163, 'second chapter reimport does not duplicate catalog');

const vectors=launch({},false), vectorConfigs=[
  {n:1,k:9,e:10,b:31,correct:[2,0,3,1,2]},
  {n:2,k:8,e:8,b:27,correct:[2,0,3,1,2]},
  {n:3,k:13,e:12,b:50,correct:[2,0,3,[1,2,3],1]},
  {n:5,k:6,e:5,b:20,correct:[2,3,0,1,2]},
  {n:6,k:4,e:5,b:16,correct:[3,0,2,1,3]}
];
vectors.location.hash='#courses';
const courseHTML=vectors.get('#app').innerHTML;
check(courseHTML.includes('3-4 基底與維度')&&courseHTML.includes('教材待提供'), '3-4 keeps user-confirmed title and unavailable material status');
check(courseHTML.indexOf('3-3 生成與線性獨立')<courseHTML.indexOf('3-4 基底與維度')&&courseHTML.indexOf('3-4 基底與維度')<courseHTML.indexOf('3-5 直和'), 'pending 3-4 appears in numerical order');
check(vectors.run("!allSections().some(section=>section.id==='LA-CH03-S04')&&!bank.some(question=>question.sectionId==='LA-CH03-S04')"), 'pending 3-4 has no fabricated lecture, assessment or progress');
check(!courseHTML.includes('data-section="LA-CH03-S04"')&&!courseHTML.includes('data-open-assessment="LA-CH03-S04"'), 'pending title cannot open a nonexistent lesson');
for(const config of vectorConfigs){
  const prefix='LA-CH03-S0'+config.n,qid=n=>prefix+'-Q0'+n;
  vectors.location.hash='#lesson?section='+prefix;
  check(vectors.run('currentLesson().chapter.id')==='LA-CH03'&&vectors.run('state.subject')===0,'chapter three deep link '+config.n);
  check(vectors.run(`catalog.knowledgePoints.filter(k=>k.id.startsWith('${prefix}-')).length`)===config.k,'chapter three knowledge coverage '+config.n);
  check(vectors.run(`catalog.examples.filter(e=>e.id.startsWith('${prefix}-')).length`)===config.e,'chapter three example coverage '+config.n);
  check(vectors.run('currentLesson().blocks.length')===config.b,'chapter three blocks '+config.n);
  check(!vectors.get('#app').innerHTML.includes('math-fallback')&&!vectors.get('#app').innerHTML.includes('undefined'),'chapter three lecture renders '+config.n);
  check(vectors.get('#app').innerHTML.includes('原圖')&&vectors.get('#app').innerHTML.includes('原創模擬例題'),'source limitations and authored examples '+config.n);
  check(!/<details class="details" open>/.test(vectors.get('#app').innerHTML),'example and transcript solutions initially collapsed '+config.n);
  vectors.click({action:'section-quiz'});vectors.click({action:'submit-assessment'});
  check(!vectors.run(`state.quizzes['${prefix}-AS01']`),'incomplete chapter three quiz blocked '+config.n);
  config.correct.forEach((value,index)=>{for(const chosen of Array.isArray(value)?value:[value])vectors.change({dataset:{assessmentChoice:qid(index+1)},value:String(chosen),checked:true});});
  vectors.run(`state.notes['answer-${qid(6)}'].text='第3章${config.n}節原始證明'`);
  vectors.click({action:'submit-assessment'});
  check(vectors.get('#app').innerHTML.includes(config.n===1?'20<small> / 20 分':'5<small> / 5 題'),'chapter three scoring follows specified or unknown points '+config.n);
  check(!vectors.get('#app').innerHTML.includes('math-fallback'),'chapter three solutions render '+config.n);
  check(vectors.run(`state.records['${qid(6)}'].attempts[0].answer.text`)==='第3章'+config.n+'節原始證明','chapter three handwriting snapshot '+config.n);
  vectors.click({assessmentRate:qid(6)+',部分正確'});vectors.click({assessmentRate:qid(7)+',不會'});vectors.click({action:'finish-assessment'});vectors.click({action:'close-modal'});
  check(vectors.run(`state.completedSections.includes('${prefix}')&&!state.completedChapters.includes('LA-CH03')`),'chapter three subsection completion only '+config.n);
  vectors.location.hash='#question?q='+qid(7);vectors.click({action:'question-review'});
  check(vectors.run('activeSectionId')===prefix,'chapter three weakness returns to correct lecture '+config.n);
}
vectors.click({action:'chapter-practice'});
check(vectors.run('bankFilters.chapter')==='LA-CH03'&&vectors.get('#app').innerHTML.includes('共 35 題'),'chapter three practice excludes eight pending transcripts');
vectors.location.hash='#lesson?section=LA-CH03-S03';
check(vectors.get('#app').innerHTML.includes('閱讀參考 · 不計入作答統計')&&vectors.get('#app').innerHTML.includes('未於本次重新核對來源'),'transcript provenance and statistics exclusion visible');
check(vectors.run('catalog.pendingExamTranscripts.length')===8,'all eight full transcripts retained');
check(vectors.run('catalog.pendingExamTranscripts.every(t=>t.groupId===t.id&&t.status==="pending_original"&&t.source.pages&&t.editorialSolution&&!bank.some(q=>q.id===t.id))'),'transcript shared stems, solutions and pages separate from graded questions');
check(vectors.run("catalog.pendingExamTranscripts.find(t=>t.id==='PY-NCTU-103-04').text.includes('(e)')&&catalog.pendingExamTranscripts.find(t=>t.id==='PY-NCTU-104-05').text.includes('(N)')"),'long transcript retains all lettered statements and subparts');
check(vectors.run("catalog.pendingExamTranscripts.find(t=>t.id==='PY-NCTU-106-08').editorialSolution.includes('min(n,2)')"),'editorial rank-bound correction retained');
check(vectors.run("catalog.pendingExamTranscripts.find(t=>t.id==='PY-NCTU-101-05').editorialSolution.includes('n\\\\le m')"),'editorial non-strict inequality correction retained');
const transcriptRecordCount=vectors.run('Object.keys(state.records).length');
vectors.location.hash='#question?q=PY-NCTU-105-02';vectors.click({action:'submit-single'});
check(vectors.run('Object.keys(state.records).length')===transcriptRecordCount,'unverified transcript cannot create graded attempt through deep link');
vectors.location.hash='#lesson?section=LA-CH03-S01';
check(vectors.get('#app').innerHTML.includes('A10')&&vectors.get('#app').innerHTML.includes('零向量唯一'),'axioms and extra uniqueness proof preserved');
vectors.location.hash='#lesson?section=LA-CH03-S06';
check(vectors.get('#app').innerHTML.includes('四點內插')&&vectors.get('#app').innerHTML.includes('待原圖確認'),'four-point source data limitation beside example');

const multi=launch({},false),multiId='LA-CH03-S03-Q04',multiAssessment='LA-CH03-S03-AS01';
multi.location.hash='#question?q='+multiId;
check((multi.get('#app').innerHTML.match(/type="checkbox" name="choice-/g)||[]).length===4&&multi.get('#app').innerHTML.includes('須完全符合才算答對'),'multiple-select controls and exact-match rule visible');
multi.click({action:'submit-single'});check(!multi.run(`state.records['${multiId}']`),'empty multiple-select blocked');
const toggle=(index,checked)=>multi.change({dataset:{assessmentChoice:multiId},value:String(index),checked});
toggle(1,true);toggle(1,false);multi.click({action:'submit-single'});
check(!multi.run(`state.records['${multiId}']`),'deselecting all answers also blocks submission');
for(const value of [undefined,[],[1],[1,2],[0,1,2,3],[1,2,2,3],[-1,1,2,3],[1,2,3,4]])check(!multi.run(`isCorrectChoice(bank.find(q=>q.id==='${multiId}'),${JSON.stringify(value)})`),'invalid or incomplete multiple selection cannot earn correctness '+JSON.stringify(value));
check(multi.run(`isCorrectChoice(bank.find(q=>q.id==='${multiId}'),[3,1,2])`),'complete unordered set accepted');
toggle(1,true);toggle(2,true);multi.click({action:'submit-single'});
check(multi.run(`state.records['${multiId}'].status`)==='待訂正','subset fails grading in question bank');
check((multi.get('#app').innerHTML.match(/data-assessment-choice="LA-CH03-S03-Q04" disabled/g)||[]).length===4,'submitted multiple choice controls locked');
multi.click({action:'retry-single'});for(const index of [3,1,2])toggle(index,true);multi.click({action:'submit-single'});
check(multi.run(`state.records['${multiId}'].status`)==='已答對'&&multi.run(`state.records['${multiId}'].attempts[0].status`)==='待訂正','bank retry preserves first wrong attempt and correct redo');
multi.run(`quizAnswers['${multiId}'].push(0)`);
check(multi.run(`state.records['${multiId}'].choice.join(',')`)==='1,2,3'&&multi.run(`state.records['${multiId}'].attempts[1].choice.join(',')`)==='1,2,3','submitted arrays do not alias mutable answer buffer');
multi.location.hash='#analysis';
check(multi.get('#app').innerHTML.includes('多選題'),'multiple-select type included in analysis');
check(multi.get('#app').innerHTML.includes('0% / 1 題'),'first-attempt analysis uses original subset result');
multi.click({analysis:'redo'});
check(multi.get('#app').innerHTML.includes('100% / 1 題'),'redo analysis uses full correct set');
multi.location.hash='#quiz?section=LA-CH03-S03';
for(const [i,value]of [2,0,3].entries())multi.change({dataset:{assessmentChoice:'LA-CH03-S03-Q0'+(i+1)},value:String(value)});
multi.change({dataset:{assessmentChoice:'LA-CH03-S03-Q05'},value:'1'});
multi.run(`quizAnswers['${multiId}']=[]`);multi.click({action:'submit-assessment'});
check(!multi.run(`state.quizzes['${multiAssessment}']`),'section assessment requires a nonempty multiple selection');
for(const index of [1,2,3,0])toggle(index,true);multi.click({action:'submit-assessment'});
check(multi.get('#app').innerHTML.includes('4<small> / 5 題'),'superset earns no correctness in section quiz');
check(multi.run(`state.quizzes['${multiAssessment}'].answers['${multiId}'].length`)===4,'quiz preserves original superset');
multi.click({action:'retry-assessment'});
for(const [i,value]of [2,0,3,[1,2,3],1].entries())for(const selected of Array.isArray(value)?value:[value])multi.change({dataset:{assessmentChoice:'LA-CH03-S03-Q0'+(i+1)},value:String(selected),checked:true});
multi.click({action:'submit-assessment'});
check(multi.get('#app').innerHTML.includes('5<small> / 5 題'),'full correct set earns correctness in section quiz');
multi.run(`quizAnswers['${multiId}'].length=0`);
check(multi.run(`state.quizzes['${multiAssessment}'].answers['${multiId}'].join(',')`)==='1,2,3','submitted quiz independently snapshots checkbox selections');
const multiReload=launch(Object.fromEntries(multi.store),false);multiReload.location.hash='#quiz?section=LA-CH03-S03';
check(multiReload.get('#app').innerHTML.includes('5<small> / 5 題')&&multiReload.run(`state.records['${multiId}'].attempts.length`)===4,'multiple-select results and all attempts survive reload');
multiReload.location.hash='#questions';multiReload.run("bankFilters={type:'多選題'};render()");
check(multiReload.get('#app').innerHTML.includes('共 1 題'),'multiple-select bank filter works');

// Check content-specific claims independently of rendered text.
assert.equal(determinant([[1,0,1],[1,1,0],[0,1,-1]]),0);checks++;
for(const t of [-2,-1,0,1,3]){assert.equal(determinant([[1,0,1],[1,1,0],[0,1,t]]),t+1);checks++;}
assert.deepEqual(multiply([[1,2,1],[2,4,2],[0,1,1]],[[1],[-1],[1]]),[[0],[0],[0]]);checks++;
assert.deepEqual(multiply([[-2,1,0]],[[1,2,1],[2,4,2],[0,1,1]]),[[0,0,0]]);checks++;
for(const [r,s,t]of [[1,2,3],[-2,1,7],[0,0,0]]){const c=(r+s-t)/2,a=(r-s+t)/2,b=(-r+s+t)/2;assert.deepEqual([a+c,b+c,a+b],[r,s,t]);checks++;}
const lagrange=(nodes,values,x)=>nodes.reduce((sum,node,i)=>sum+values[i]*nodes.reduce((p,other,j)=>j===i?p:p*(x-other)/(node-other),1),0);
for(const x of [-7,-6,0,5,2]){assert(Math.abs(lagrange([5,-7,-6,0],[1,-23,-54,-954],x)-(4*x**3+35*x**2-84*x-954))<1e-8);checks++;}
for(const x of [-2,-1,0,1,3]){assert(Math.abs(lagrange([-1,0,1],[2,1,4],x)-(2*x*x+x+1))<1e-8);checks++;assert(Math.abs(lagrange([-1,0,1],[1,1,1],x)-1)<1e-8);checks++;}
const projection=[[4/6,2/6,-2/6],[2/6,4/6,2/6],[-2/6,2/6,4/6]], projected=multiply(projection,[[-1],[3],[1]]);
projected.forEach((row,i)=>assert(Math.abs(row[0]-[0,2,2][i])<1e-12));checks++;
const minNorm=[[-14/51],[-28/51],[6/51],[32/51]], projectedFromSolution=multiply([[1,2,1,2],[1,2,2,5],[0,0,1,3]],minNorm);
projectedFromSolution.forEach((row,i)=>assert(Math.abs(row[0]-[0,2,2][i])<1e-12));checks++;
check(Math.abs(-2*minNorm[0][0]+minNorm[1][0])<1e-12&&Math.abs(minNorm[0][0]/5+2*minNorm[1][0]/5-3*minNorm[2][0]+minNorm[3][0])<1e-12,'transcribed minimum-norm answer orthogonal to both nullspace directions');
const thirdData=readCatalog(),thirdChapter=thirdData.subjects[0].chapters.find(c=>c.id==='LA-CH03');
for(const section of [...thirdChapter.sections].reverse()){const belongs=id=>id.startsWith(section.id+'-');upsertSection(thirdData,{section,chapter:thirdChapter,questions:thirdData.questions.filter(q=>belongs(q.id)),examples:thirdData.examples.filter(q=>belongs(q.id)),knowledgePoints:thirdData.knowledgePoints.filter(q=>belongs(q.id)),answers:Object.fromEntries(Object.entries(thirdData.answers).filter(([id])=>belongs(id))),solutions:Object.fromEntries(Object.entries(thirdData.solutions).filter(([id])=>belongs(id))),sourceReview:thirdData.sourceReviews.find(review=>review.scope===section.id)});}
check(thirdChapter.sections.map(s=>s.title.split(' ')[0]).join(',')==='3-1,3-2,3-3,3-5,3-6','chapter three reverse upsert retains ordering and missing section');
check(thirdData.questions.length===168&&thirdData.examples.length===175&&thirdData.knowledgePoints.length===163&&thirdData.pendingExamTranscripts.length===8,'all records stable after chapter three upsert');
console.log(`PASS: ${checks} final checks; ${formulaCount} mathematical expressions. Two subjects, 24 sections, 163 knowledge points, 175 examples, 168 graded questions and 8 read-only unverified transcripts. Browser and physical stylus verification are not included.`);

const exams=launch({},false,true),examData=exams.run('examCollection'),examBank=examData.questions;
check(exams.run('bank.length')===374,'revised bundle adds 206 scan indexes to 168 simulations without duplicating old answers');
check(examData.papers.length===9&&examData.papers.reduce((sum,p)=>sum+p.pages.length,0)===68,'nine complete papers and all 68 pages');
check(examBank.filter(q=>q.options).length===149&&examBank.filter(q=>q.practiceOnly).length===57,'149 answer records and 57 handwriting items remain distinct');
check(examBank.filter(q=>q.bonusAll).length===4,'four source bonus records preserved');
check(new Set(examBank.map(q=>q.id)).size===206,'stable original IDs unique');
const {createHash}=await import('node:crypto');
for(const paper of examData.papers)for(const page of paper.pages){
  check(/^exam-scans\/NYCU-11[234]-\d{4}\/p\d{2}\.jpg$/.test(page.asset),'safe local scan path '+page.asset);
  check(createHash('sha256').update(readFileSync('docs/'+page.asset)).digest('hex')===page.sha256,'scan bytes match reviewed source '+page.asset);
}
for(const question of examBank){
  exams.location.hash='#question?q='+question.id;
  const html=exams.get('#app').innerHTML;
  check(!html.includes('undefined')&&!html.includes('math-fallback'),'scan question renders metadata '+question.id);
  check(question.scans.every(page=>html.includes('src="'+page.asset+'"')),'complete mapped source pages visible '+question.id);
  check(html.includes('data-ink="answer-'+question.id+'"'),'each source index has independent handwriting '+question.id);
  check(!html.includes('附件採認：'),'unsubmitted indexed answer stays hidden '+question.id);
  if(question.practiceOnly||question.bonusAll){exams.click({action:'submit-single'});check(!exams.run(`state.records['${question.id}']`),'unscored source item cannot create graded record '+question.id);check(!html.includes('data-action="submit-single"'),'unscored source item has no submit control '+question.id);}
  else check((html.match(new RegExp('data-assessment-choice="'+question.id+'"','g'))||[]).length===question.options.length,'original four/five-option count preserved '+question.id);
}
const expectedPages={
 'NYCU-113-8101-Q03':[2,3],'NYCU-113-8101-Q06':[3,4],'NYCU-113-8101-Q21':[7,8],
 'NYCU-112-1103-Q13':[3,4],'NYCU-113-8103-Q25':[12,13],'NYCU-114-8103-Q20':[6,7],
 'NYCU-114-8103-Q31':[9,10],'NYCU-114-8101-Q14':[5,6],'NYCU-112-1101-W25':[7,8]
};
for(const[id,pages]of Object.entries(expectedPages))check(examBank.find(q=>q.id===id).scans.map(page=>page.number).join(',')===pages.join(','),'shared stems and cross-page figures retained '+id);
check(examBank.find(q=>q.id==='NYCU-113-8101-Q03').groupLabel==='原卷第 1 大題 · 作答格 3','113 answer slots do not masquerade as separate printed big-question numbers');
for(const paper of examData.papers){
  exams.location.hash='#paper?id='+paper.id;
  check(exams.run('activeRoute()')==='questions','paper viewer belongs to question navigation '+paper.id);
  check(paper.pages.every(page=>exams.get('#app').innerHTML.includes('src="'+page.asset+'"')),'complete original paper accessible '+paper.id);
}
const indexedId='NYCU-113-8101-Q12';exams.location.hash='#question?q='+indexedId;
const selectExam=(id,index,checked=true)=>exams.change({dataset:{assessmentChoice:id},value:String(index),checked});
for(const [value,expected]of [[[0,2],true],[[4],true],[[0,2,4],false],[[0],false],[[2],false],[[],false],[[0,2,2],false]])check(exams.run(`isCorrectChoice(bank.find(q=>q.id==='${indexedId}'),${JSON.stringify(value)})`)===expected,'AC-or-E requires an entire accepted alternative '+JSON.stringify(value));
exams.click({action:'submit-single'});check(!exams.run(`state.records['${indexedId}']`),'empty exam choice blocked');
selectExam(indexedId,0);exams.run(`state.notes['answer-${indexedId}'].text='第一次原卷推導'`);exams.click({action:'submit-single'});
check(exams.run(`state.records['${indexedId}'].status`)==='待訂正','partial alternative cannot pass source answer index');
check(exams.get('#app').innerHTML.includes('AC 或 E')&&exams.get('#app').innerHTML.includes('原表：AC'),'accepted alternatives and original corrected answer visible after submission');
check(exams.get('#app').innerHTML.includes('分步詳解與逐選項解析尚未提供'),'source answer table never pretends to provide missing explanations');
check(exams.get('#app').innerHTML.includes('data-readonly="true"'),'submitted exam scratchwork locked');
exams.click({action:'retry-single'});selectExam(indexedId,4);exams.click({action:'submit-single'});
check(exams.run(`state.records['${indexedId}'].attempts.map(a=>a.status).join(',')`)==='待訂正,已答對','five-option exam redo preserves wrong first attempt');
check(exams.run(`state.notes['archive-${indexedId}-1'].text`)==='第一次原卷推導','original exam handwriting archived before redo');
check(exams.get('#app').innerHTML.includes('你的作答：E'),'fifth option rendered correctly');
for(const id of ['NYCU-112-1101-Q08','NYCU-112-1103-Q06','NYCU-112-1103-Q17','NYCU-112-1103-Q20']){
  const answer=examData.answers[id];for(const set of answer.acceptedSets)check(exams.run(`isCorrectChoice(bank.find(q=>q.id==='${id}'),${JSON.stringify(set)})`),'112 accepted corrected alternative '+id+' '+set);
}
const singleId='NYCU-114-8103-Q21';exams.location.hash='#question?q='+singleId;
check((exams.get('#app').innerHTML.match(/type="radio"/g)||[]).length===4,'original system single-choice group stays single-choice');
selectExam(singleId,2);exams.click({action:'submit-single'});check(exams.run(`state.records['${singleId}'].status`)==='已答對','original single-choice source answer graded');
const writtenId=examBank.find(q=>q.source.examId==='NYCU-114-8102'&&q.originalNumber==='9').id;
exams.location.hash='#question?q='+writtenId;exams.run(`state.notes['answer-${writtenId}'].text='線性映射的係數矩陣推導';persist()`);
check(exams.run(`qStatus(bank.find(q=>q.id==='${writtenId}'))`)==='已練習','ungraded handwritten exam can record practice progress');
exams.location.hash='#analysis';check(exams.get('#app').innerHTML.includes('2<small>題'),'statistics include only submitted normal choice questions');
check(exams.get('#app').innerHTML.includes('50<small>%'),'first-attempt accuracy does not include ungraded writing or bonus items');
exams.click({analysis:'redo'});check(exams.get('#app').innerHTML.includes('100% / 1 題'),'exam first and redo results separate');
const examReload=launch(Object.fromEntries(exams.store),false,true);examReload.location.hash='#question?q='+indexedId;
check(examReload.run(`state.records['${indexedId}'].choice.join(',')`)==='4'&&examReload.get('#app').innerHTML.includes('你的作答：E'),'source-answer and attempt history survive reload');
check(examReload.run(`state.notes['answer-${writtenId}'].text`)==='線性映射的係數矩陣推導','ungraded exam handwriting survives reload');
examReload.location.hash='#questions';examReload.run("bankFilters={school:'國立陽明交通大學',year:'114'};render()");
check(examReload.get('#app').innerHTML.includes('共 64 筆練習'),'school and year filters include 114 source indexes only');
examReload.run("bankFilters={type:'手寫題'};render()");check(examReload.get('#app').innerHTML.includes('共 57 筆練習'),'written source indexes filter independently');
examReload.run("bankFilters={status:'送分'};render()");check(examReload.get('#app').innerHTML.includes('共 4 筆練習'),'bonus records carry explicit source status');
examReload.run("bankFilters={status:'已練習'};render()");check(examReload.get('#app').innerHTML.includes('共 1 筆練習'),'handwritten practice status filter works');
examReload.location.hash='#question?q=NYCU-114-8101-Q01';selectExam('NYCU-114-8101-Q01',0);examReload.click({action:'submit-single'});examReload.click({action:'question-review'});
check(examReload.run('activeSectionId')==='DS-CH01-S05','verified asymptotic exam topic links back to supplied lecture');
check(!readFileSync('docs/exams.js','utf8').includes('C:\\Users\\')&&!readFileSync('docs/exams.js','utf8').includes('source_repository_credential'),'published source provenance excludes local paths and credentials');
console.log(`PASS: ${checks} checks including revised NYCU scans, corrected multi-answer sets, source groups, five options, original handwritten snapshots, ungraded practice, filtering and reload. ${formulaCount} course formulas; browser and physical stylus QA unavailable.`);
