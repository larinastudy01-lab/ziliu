'use strict';
// 僅支援教材需要的 Markdown 子集；不執行或信任原文中的 HTML。
function courseMarkdown(markdown) {
  const formulas = [];
  let source = String(markdown || '').replace(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g, (match, display, inline) => {
    const index = formulas.length;
    formulas.push({ tex: (display ?? inline).trim(), display: display !== undefined });
    return '\uE000' + index + '\uE001';
  });
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const inline = text => escape(text).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>');
  const lines = source.split('\n');
  const output = [];
  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim();
    if (!line) { index++; continue; }
    if (line.startsWith('|') && /^\|[ :|-]+\|$/.test((lines[index + 1] || '').trim())) {
      const row = text => text.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim());
      const headers = row(line); index += 2; const rows = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) rows.push(row(lines[index++]));
      output.push('<div class="table-scroll"><table><thead><tr>' + headers.map(cell => '<th>' + inline(cell) + '</th>').join('') + '</tr></thead><tbody>' + rows.map(cells => '<tr>' + cells.map(cell => '<td>' + inline(cell) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>');
    } else if (/^(?:[-*] |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line), items = [];
      while (index < lines.length && (ordered ? /^\d+\. / : /^[-*] /).test(lines[index].trim())) items.push(lines[index++].trim().replace(ordered ? /^\d+\. / : /^[-*] /, ''));
      const tag = ordered ? 'ol' : 'ul'; output.push('<' + tag + '>' + items.map(item => '<li>' + inline(item) + '</li>').join('') + '</' + tag + '>');
    } else {
      const paragraph = [line]; index++;
      while (index < lines.length && lines[index].trim() && !lines[index].trim().startsWith('|') && !/^(?:[-*] |\d+\. )/.test(lines[index].trim())) paragraph.push(lines[index++].trim());
      output.push('<div class="course-paragraph">' + paragraph.map(inline).join('<br>') + '</div>');
    }
  }
  return output.join('').replace(/\uE000(\d+)\uE001/g, (_, index) => {
    const formula = formulas[Number(index)];
    try { return window.katex.renderToString(formula.tex, { displayMode: formula.display, throwOnError: true, trust: false, strict: 'ignore', output: 'htmlAndMathml' }); }
    catch { return `<span class="math-fallback" role="math" aria-label="${escape(formula.tex)}">${escape(formula.tex)}</span>`; }
  });
}
