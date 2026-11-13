#!/usr/bin/env node
// The name column of a reference table is wide enough for its names (C10,
// variant A, owner 2026-11-11).
//
// Inline code in a table cell may break anywhere, so one long value never
// widens the table. That also lets a browser squeeze the first column down to
// a few characters when the description beside it is long, and then the names
// -- `current-from-location`, `sf-menu-navigate` -- break in the middle. A
// reference table names one thing per row in its first column (an attribute,
// a method, an event, a class, a variable), so the site gives that column a
// minimum width: its longest name, up to NAME_CAP characters. Longer names
// (a method with its arguments) may still break; the usual ones stay whole.
//
// A name longer than that breaks where its words join -- after a hyphen, a
// colon, a dot, a slash, a bar, an opening bracket or a comma -- and never
// between two letters: the build puts a <wbr> there (note N1 of the C10
// acceptance, 2026-11-12: at 390 `--sf-alert-bar-error-background-color`
// broke as `--sf-alert-bar-error-backgr|ound-color`). A first cell may say
// what the name is before it, as the former-name tables do: «событие
// `sf-accordion-toggle`»; the name is still the code.
//
// The shell stylesheet is Docara's and the site has no stylesheet of its own,
// so, as with inline-code-wrap.mjs, the width is written after the build on
// the header cell of the tables that need it. A table counts as a reference
// table when most of its body rows start with a cell that holds code alone.
//
// Usage: node scripts/reference-name-column.mjs [build-dir] (default build_production)

import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, process.argv[2] ?? 'build_production');

// About a phone column's third in code characters.
const NAME_CAP = 24;
const MARK = 'data-name-column';

const ARTICLE = /(<article class="docara-prose[^"]*"[^>]*>)([\s\S]*?)(<\/article>)/u;
const TABLE = /<table\b[\s\S]*?<\/table>/gu;
const ROW = /<tbody\b[\s\S]*?<\/tbody>/u;
const FIRST_CELL = /<tr\b[^>]*>\s*<td\b[^>]*>([\s\S]*?)<\/td>/gu;
const CODE_ALONE = /^\s*(?:[^<>]{1,24}\s)?<code\b[^>]*>([\s\S]*?)<\/code>\s*$/u;
const FIRST_CELL_REPLACE = /(<tr\b[^>]*>\s*<td\b[^>]*>)([\s\S]*?)(<\/td>)/gu;
const JOINS = /(?<=[^\s\-:./|(,_])([\-:./|(,_]+)(?=[^\s<&\-:./|(,_])/gu;
// The joins of a long name, outside its tags and entities.
const joinable = (code) => code.replace(/(<[^>]*>|&[^;\s]*;)|([^<&]+)/gu, (whole, kept, plain) => (
  kept ?? plain.replace(JOINS, '$1<wbr>')
));
const FIRST_HEAD = /<th(?![^>]*\bdata-name-column\b)((?:\s[^>]*)?)>/u;

const text = (html) => html
  .replace(/<[^>]*>/gu, '')
  .replace(/&(?:#\d+|#x[\da-f]+|[a-z]+);/giu, 'x');

const widen = (table) => {
  const body = ROW.exec(table)?.[0];
  if (!body || !FIRST_HEAD.test(table)) return table;
  const cells = [...body.matchAll(FIRST_CELL)].map((match) => match[1]);
  const names = cells.map((cell) => CODE_ALONE.exec(cell)?.[1]).filter((name) => name !== undefined);
  if (names.length < 2 || names.length * 2 < cells.length) return table;
  const longest = Math.min(NAME_CAP, Math.max(...names.map((name) => text(name).length)));
  // ch of the cell's text is about one code character (code is monospace at
  // 85 %); 2em more holds the code's own padding and the cell's.
  const style = `min-inline-size:calc(${longest}ch + 2em)`;
  const marked = table.replace(ROW, (rows) => rows.replace(FIRST_CELL_REPLACE, (whole, open, cell, close) => {
    const match = CODE_ALONE.exec(cell);
    if (!match || text(match[1]).length <= NAME_CAP || match[1].includes('<wbr>')) return whole;
    return open + cell.replace(match[1], joinable(match[1])) + close;
  }));
  return marked.replace(FIRST_HEAD, (whole, attributes) => (
    /\sstyle="/u.test(attributes)
      ? `<th${attributes.replace(/\sstyle="([^"]*)"/u, (_, value) => ` style="${value.replace(/;?\s*$/u, ';')}${style}"`)} ${MARK}>`
      : `<th${attributes} style="${style}" ${MARK}>`
  ));
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
let tables = 0;
for (const file of pages(site)) {
  const html = readFileSync(file, 'utf8');
  const match = ARTICLE.exec(html);
  if (!match) continue;
  const body = match[2].replace(TABLE, widen);
  if (body === match[2]) continue;
  tables += (body.match(/\sdata-name-column\b/gu) ?? []).length - (match[2].match(/\sdata-name-column\b/gu) ?? []).length;
  writeFileSync(file, html.slice(0, match.index) + match[1] + body + match[3] + html.slice(match.index + match[0].length));
  files++;
}
console.log(JSON.stringify({schema: 'ui-doc.reference_name_column.v1', site, files, tables}, null, 2));
