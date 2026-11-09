#!/usr/bin/env node
// Long inline code in running text may wrap, so a page never scrolls sideways.
//
// Docara keeps inline code on one line (white-space: nowrap), which is right for
// a word of code: a class or an attribute is not split across lines. A long one
// -- a path, a URN, a call with its arguments, a line of markup -- is wider than
// a phone column, and some are wider than the desktop column too, so the whole
// page scrolled sideways. The shell stylesheet is Docara's and the site has no
// stylesheet of its own, so the exception is written here, after the build, on
// the code that needs it: inline code in the article, outside code blocks and
// tables (which scroll inside their own frames), longer than LONG characters.
// Such code wraps at its spaces first and, only where one token is still wider
// than the line, inside the token.
//
// Usage: node scripts/inline-code-wrap.mjs [build-dir] (default build_production)

import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, process.argv[2] ?? 'build_production');

// About the width of a phone column in code characters, with room to spare;
// a heading sets its code larger, so half as many fit.
const LONG = 32;
const LONG_IN_HEADING = 16;
const STYLE = 'white-space:normal;overflow-wrap:anywhere';
const MARK = 'data-code-wrap';

const ARTICLE = /(<article class="docara-prose[^"]*"[^>]*>)([\s\S]*?)(<\/article>)/u;
// Regions whose code is left alone (code blocks, tables, live inline
// examples) and headings, whose code is measured against the shorter length.
const SKIP = /<pre\b[\s\S]*?<\/pre>|<table\b[\s\S]*?<\/table>|<div class="[^"]*docara-example-inline[\s\S]*?<\/div>|<h[1-6]\b[\s\S]*?<\/h[1-6]>/gu;
const CODE = /<code(?![^>]*\bdata-code-wrap\b)((?:\s[^>]*)?)>([\s\S]*?)<\/code>/gu;
// A link whose text is one long token (a path or an address) wraps the same way.
const LINK = /<a(?![^>]*\bdata-code-wrap\b)(\s[^>]*)>([^<\s]{33,})<\/a>/gu;

const text = (html) => html
  .replace(/<[^>]*>/gu, '')
  .replace(/&(?:#\d+|#x[\da-f]+|[a-z]+);/giu, 'x');

const withStyle = (attributes) => {
  if (/\sstyle="/u.test(attributes)) {
    return attributes.replace(/\sstyle="([^"]*)"/u, (_, value) => ` style="${value.replace(/;?\s*$/u, ';')}${STYLE}"`);
  }
  return `${attributes} style="${STYLE}"`;
};

const wrapCode = (part, long = LONG) => part
  .replace(CODE, (whole, attributes, inner) => (
    text(inner).length > long ? `<code${withStyle(attributes)} ${MARK}>${inner}</code>` : whole
  ))
  .replace(LINK, (whole, attributes, inner) => `<a${withStyle(attributes)} ${MARK}>${inner}</a>`);

const transform = (body) => {
  let out = '';
  let last = 0;
  for (const match of body.matchAll(SKIP)) {
    out += wrapCode(body.slice(last, match.index))
      + (/^<h[1-6]\b/u.test(match[0]) ? wrapCode(match[0], LONG_IN_HEADING) : match[0]);
    last = match.index + match[0].length;
  }
  return out + wrapCode(body.slice(last));
};

const pages = (dir, out = []) => {
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) pages(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
};

let files = 0;
let wrapped = 0;
for (const file of pages(site)) {
  const html = readFileSync(file, 'utf8');
  const match = ARTICLE.exec(html);
  if (!match) continue;
  const body = transform(match[2]);
  if (body === match[2]) continue;
  wrapped += (body.match(/\sdata-code-wrap\b/gu) ?? []).length - (match[2].match(/\sdata-code-wrap\b/gu) ?? []).length;
  writeFileSync(file, html.slice(0, match.index) + match[1] + body + match[3] + html.slice(match.index + match[0].length));
  files++;
}
console.log(JSON.stringify({schema: 'ui-doc.inline_code_wrap.v1', site, files, wrapped}, null, 2));
