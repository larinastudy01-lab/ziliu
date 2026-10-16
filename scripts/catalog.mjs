import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';
export function readCatalog() { const context = { window: {} }; vm.runInNewContext(readFileSync('docs/content.js', 'utf8'), context); return context.window.ZILIU_CONTENT; }
export function upsertSection(catalog, payload) {
  const { section, questions, examples, knowledgePoints, answers, solutions, sourceReview } = payload;
  const subject = catalog.subjects.find(item => item.id === (payload.subjectId || 'linear-algebra'));
  if (!subject) throw Error('Unknown subject: ' + payload.subjectId);
  const chapterId = payload.chapter?.id || section.id.split('-S')[0];
  let chapter = subject.chapters.find(item => item.id === chapterId);
  if (!chapter) { chapter = { id: chapterId, title: '第 1 章', titleStatus: '待確認正式章名', ...payload.chapter, curriculumComplete: false, sections: [] }; subject.chapters.push(chapter); }
  chapter.curriculumComplete = false;
  chapter.sections = [...chapter.sections.filter(item => item.id !== section.id), section].sort((a, b) => Number(a.title.match(/^1-(\d+)/)?.[1]) - Number(b.title.match(/^1-(\d+)/)?.[1]));
  const belongs = id => id.startsWith(section.id + '-');
  for (const [key, items] of Object.entries({ questions, examples, knowledgePoints })) catalog[key] = [...(catalog[key] || []).filter(item => !belongs(item.id)), ...items];
  for (const [key, records] of Object.entries({ answers, solutions })) catalog[key] = { ...Object.fromEntries(Object.entries(catalog[key] || {}).filter(([id]) => !belongs(id))), ...records };
  const reviews = catalog.sourceReviews || (catalog.sourceReview ? [catalog.sourceReview] : []);
  catalog.sourceReviews = [...reviews.filter(item => item.scope !== section.id), sourceReview];
  catalog.version = 4;
}
export function writeCatalog(catalog) { writeFileSync('docs/content.js', '// 僅收錄使用者提供的教材；筆跡、作答與進度另存於個人裝置。\nwindow.ZILIU_CONTENT = ' + JSON.stringify(catalog, null, 2) + ';\n'); }
