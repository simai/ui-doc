#!/usr/bin/env node
// A page that is mostly tables gives the right «Contents» column to the
// tables (owner remark R088, 2026-11-09): wide reference tables were squeezed
// beside an outline the reader does not need on such a page. Docara already
// has the switch, `reading.toc: false` in the page's page.json; this audit
// decides which pages need it, so nobody sets it by hand and forgets.
//
// A data page: at least MIN_ROWS table rows, and table rows are at least
// MIN_SHARE of the page's text lines (code blocks left out). Such a page must
// say `"reading": {"toc": false}`. Other pages are not touched: an author may
// still turn the outline off for a reason of their own.
//
// Usage: node scripts/audit-wide-data-pages.mjs [--fix]
//   --fix  writes reading.toc false into the page.json of every data page.

import {existsSync, readdirSync, readFileSync, statSync, writeFileSync} from 'node:fs';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fix = process.argv.includes('--fix');
const MIN_ROWS = 50;
const MIN_SHARE = 0.6;

const walk = (dir, out = []) => {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (entry.endsWith('.md')) out.push(path);
  }
  return out;
};

export const measure = (text) => {
  let code = false;
  let lines = 0;
  let rows = 0;
  for (const line of text.split('\n')) {
    if (/^\s*(```|~~~)/u.test(line)) {
      code = !code;
      continue;
    }
    if (code || !line.trim()) continue;
    lines += 1;
    if (/^\s*\|/u.test(line) && !/^\s*\|[\s:|-]+\|\s*$/u.test(line)) rows += 1;
  }
  return {rows, lines, share: lines ? rows / lines : 0};
};

const pages = walk(join(root, 'content/ru')).sort();
const missing = [];
const data = [];
for (const page of pages) {
  const {rows, share} = measure(readFileSync(page, 'utf8'));
  if (rows < MIN_ROWS || share < MIN_SHARE) continue;
  const settings = page.replace(/\.md$/u, '.page.json');
  const json = existsSync(settings) ? JSON.parse(readFileSync(settings, 'utf8')) : {schema: 'docara.page.v1'};
  const path = relative(root, page);
  data.push({page: path, rows, share: Math.round(share * 100) / 100});
  if (json.reading?.toc === false) continue;
  if (fix) {
    json.reading = {...(json.reading ?? {}), toc: false};
    writeFileSync(settings, `${JSON.stringify(json, null, 2)}\n`);
  } else {
    missing.push(relative(root, settings));
  }
}

const report = {
  schema: 'ui-doc.wide_data_pages_audit.v1',
  status: missing.length ? 'fail' : 'pass',
  rule: `table rows >= ${MIN_ROWS} and >= ${MIN_SHARE * 100}% of text lines: reading.toc false`,
  data_pages: data.length,
  ...(missing.length ? {missing, reason: 'run composer docs:wide-pages:build'} : {}),
  ...(fix ? {written: data.map(({page}) => page)} : {}),
};
console.log(JSON.stringify(report, null, 2));
process.exit(missing.length ? 1 : 0);
