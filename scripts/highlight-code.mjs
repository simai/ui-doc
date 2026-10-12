#!/usr/bin/env node
// Colour the code blocks of a built site with Shiki, the way GitHub does.
//
// The Framework's Highlight component colours code in the browser with
// highlight.js, whose grammars mark fewer things than GitHub's (no function
// calls, properties or parameters in JavaScript; coarser HTML). Shiki reads
// the TextMate grammars VS Code uses, so the site colours its code at build
// time with GitHub's light and dark themes. A block coloured here carries
// `data-highlighted`, which the Highlight component skips.
//
// Each token holds both colours as custom properties; the page's theme class
// picks one. Plain text takes the page's text colour.
//
// Usage: node scripts/highlight-code.mjs [build-dir] (default build_production)

import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHighlighter} from 'shiki';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, process.argv[2] ?? 'build_production');

const THEMES = {light: 'github-light', dark: 'github-dark'};
// Docara's language names → Shiki's; a language not here stays plain.
const LANGUAGES = {
  html: 'html', xhtml: 'html', css: 'css', scss: 'scss', js: 'javascript', javascript: 'javascript',
  mjs: 'javascript', ts: 'typescript', typescript: 'typescript', json: 'json', php: 'php',
  markdown: 'markdown', md: 'markdown', shell: 'shellscript', bash: 'shellscript', sh: 'shellscript',
  yaml: 'yaml', yml: 'yaml', xml: 'xml', sql: 'sql',
};
// The Highlight component colours a block's own text through `.hljs`, which a
// Shiki block does not carry; the block's text takes the page's text colour.
const STYLE = '<style data-docara-shiki>'
  + '.source code[data-docara-shiki]{color:var(--sf-on-surface)}'
  + '[data-docara-shiki] span{color:var(--shiki-light);font-style:var(--shiki-light-font-style);font-weight:var(--shiki-light-font-weight)}'
  + '.theme-dark [data-docara-shiki] span{color:var(--shiki-dark);font-style:var(--shiki-dark-font-style);font-weight:var(--shiki-dark-font-weight)}'
  + '</style>';
const BLOCK = /(<pre class="docara-code-scroll[^"]*"><code)([^>]*)>([\s\S]*?)(<\/code><\/pre>)/gu;

const highlighter = await createHighlighter({themes: Object.values(THEMES), langs: [...new Set(Object.values(LANGUAGES))]});
const foreground = Object.fromEntries(Object.entries(THEMES)
  .map(([mode, name]) => [`--shiki-${mode}`, highlighter.getTheme(name).fg.toUpperCase()]));

const decode = (text) => text
  .replace(/&lt;/gu, '<').replace(/&gt;/gu, '>').replace(/&quot;/gu, '"').replace(/&#0?39;|&apos;/gu, "'")
  .replace(/&#x([0-9a-f]+);/giu, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
  .replace(/&#([0-9]+);/gu, (_, dec) => String.fromCodePoint(Number(dec)))
  .replace(/&amp;/gu, '&');
const escape = (text) => text.replace(/&/gu, '&amp;').replace(/</gu, '&lt;').replace(/>/gu, '&gt;');

// A token in the theme's text colour in both themes is plain text: it is
// written bare and keeps the block's colour. Neighbours of one style merge.
const styleOf = (token) => {
  const style = Object.entries(token.htmlStyle ?? {});
  const plain = style.every(([name, value]) => foreground[name] === String(value).toUpperCase());
  return plain ? '' : style.map(([name, value]) => `${name}:${value}`).join(';');
};
const colour = (code, lang) => highlighter
  .codeToTokens(code, {lang, themes: THEMES, defaultColor: false})
  .tokens.map((line) => {
    const runs = [];
    for (const token of line) {
      const style = styleOf(token);
      if (runs.length && runs.at(-1).style === style) runs.at(-1).text += token.content;
      else runs.push({style, text: token.content});
    }
    return runs.map(({style, text}) => (style ? `<span style="${style}">${escape(text)}</span>` : escape(text))).join('');
  })
  .join('\n');

const pages = (dir, out = []) => {
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) pages(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
};

let files = 0;
let blocks = 0;
for (const file of pages(site)) {
  const html = readFileSync(file, 'utf8');
  if (!html.includes('docara-code-scroll')) continue;
  let changed = 0;
  const next = html.replace(BLOCK, (whole, open, attributes, content, close) => {
    if (/\bdata-highlighted\b/u.test(attributes)) return whole;
    const name = attributes.match(/\b(?:language|lang)-([a-z0-9_+-]+)/iu)?.[1]?.toLowerCase();
    const lang = LANGUAGES[name];
    if (!lang) return whole;
    const source = decode(content);
    const trailing = source.match(/\n*$/u)[0];
    changed++;
    return `${open}${attributes} data-highlighted="yes" data-docara-shiki>${colour(source.slice(0, source.length - trailing.length), lang)}${trailing}${close}`;
  });
  if (changed === 0) continue;
  writeFileSync(file, next.includes('data-docara-shiki>') && !next.includes('<style data-docara-shiki>')
    ? next.replace('</head>', `${STYLE}</head>`)
    : next);
  files++;
  blocks += changed;
}
console.log(JSON.stringify({schema: 'ui-doc.code_highlight.v1', engine: 'shiki', themes: THEMES, site, files, blocks}, null, 2));
