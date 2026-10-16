import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const app = readFileSync('docs/app.js', 'utf8');
const content = readFileSync('docs/content.js', 'utf8');
let checks = 0;
function check(value, message) { assert(value, message); checks++; }
function launch(initialStorage = {}) {
  const store = new Map(Object.entries(initialStorage)), handlers = {}, windowHandlers = {}, elements = new Map();
  const element = () => ({ innerHTML: '', textContent: '', isConnected: true, classList: { add() {}, remove() {}, toggle() {}, contains: () => false }, focus() {}, querySelector: () => element(), querySelectorAll: () => [] });
  const get = selector => { if (!elements.has(selector)) elements.set(selector, element()); return elements.get(selector); };
  const document = { querySelector: get, querySelectorAll: () => [], activeElement: element(), documentElement: element(), addEventListener: (type, fn) => (handlers[type] ??= []).push(fn) };
  let hash = '#home';
  const location = { get hash() { return hash; }, set hash(value) { hash = value.startsWith('#') ? value : '#' + value; (windowHandlers.hashchange || []).forEach(fn => fn()); } };
  const window = { addEventListener: (type, fn) => (windowHandlers[type] ??= []).push(fn), scrollTo() {} };
  const context = vm.createContext({ window, document, location, localStorage: { getItem: key => store.get(key) || null, setItem: (key, value) => store.set(key, value) }, setTimeout: () => 1, clearTimeout() {}, requestAnimationFrame() {}, ResizeObserver: class { observe() {} disconnect() {} }, devicePixelRatio: 1, URLSearchParams, Intl, Date, structuredClone, matchMedia: () => ({ matches: true }), console });
  vm.runInContext(content, context); vm.runInContext(app, context);
  const run = code => vm.runInContext(code, context);
  const click = dataset => { const target = { dataset, classList: { contains: () => false }, closest() { return this; } }; (handlers.click || []).forEach(fn => fn({ target })); };
  return { run, click, get, location, store, handlers };
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
  check(page.get('#app').innerHTML.includes('0 個大章 · 0 個小節'), 'subject ' + index + ' has empty curriculum');
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
