#!/usr/bin/env node
// TEMPORARY -- remove when Docara insets its example tab rows itself.
//
// Docara 3.18.0 draws the tab row of an example frame (Example / HTML) and of
// its log (Events / Console) with SIMAI Framework tabs: .sf-tabs--underline,
// whose first tab has no padding at its start (owner decision C99). Docara
// meant to inset the row with the utility p-x-1 on .sf-tabs-top-container,
// but utilities sit in the layer below components (sf.utilities <
// sf.components) and the tabs sheet sets that container's padding-inline to 0,
// so the utility does nothing: the first tab stands on the frame's line, one
// pixel from the border. The cause is Docara's renderer
// (src/PortableSite/PortableExampleRenderer.php); the fix belongs there (an
// unlayered rule in resources/portable/declarative-shell.css, as it already
// does for the collapsed log's border).
//
// The site has no stylesheet of its own, so until then the inset is written
// here, after the build, as one small unlayered rule in the head of each page
// with example frames (an unlayered rule outranks the layered component
// rule): the example's row takes the example panel's own padding
// (--sf-space-2) and the log's row the log panel's (--sf-space-1), so each
// first label stands over the content below it. Below the Framework's sm step
// (32rem) the rows keep no inset: a phone row has no room for it (four example
// tabs leave 2 px at 360 px, the log's two tabs and tools 3 px at 375 px), and
// the Framework's tabs would fold the last ones into «Ещё».
//
// The script reads the exact markup Docara 3.18 writes. When Docara changes
// it, the script finds no row to inset and fails, which is the signal to
// remove it (and its line in docara.json page_transforms).
//
// Usage: node scripts/example-tabs-inset.mjs [build-dir] (default build_production)

import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, process.argv[2] ?? 'build_production');

const CONTAINER = 'class="sf-tabs-top-container flex items-cross-center content-main-between gap-1 p-x-1"';
const HEAD = /class="(?:docara-example-preview__header|docara-example-log__head) sf-tabs[^"]*"[^>]*>(?:<span[^>]*>[^<]*<\/span>)?<div class="sf-tabs-top-container flex items-cross-center content-main-between gap-1 p-x-1"/gu;
const MARK = 'data-ui-doc-tabs-inset';
const STYLE = `<style ${MARK}>@media (min-width:32rem){`
  + '.docara-example-preview__header>.sf-tabs-top-container{padding-inline:var(--sf-space-2)}'
  + '.docara-example-log__head>.sf-tabs-top-container{padding-inline:var(--sf-space-1)}'
  + '}</style>';

const pages = (dir, out = []) => {
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) pages(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
};

let files = 0;
let rows = 0;
let rowsDocara = 0;
let missing = 0;
for (const file of pages(site)) {
  const html = readFileSync(file, 'utf8');
  const heads = (html.match(/class="(?:docara-example-preview__header|docara-example-log__head) sf-tabs/gu) ?? []).length;
  if (heads === 0) continue;
  const matched = (html.match(HEAD) ?? []).length;
  rows += heads;
  rowsDocara += matched;
  if (matched !== heads || !html.includes(CONTAINER)) missing++;
  if (html.includes(`<style ${MARK}>`)) continue;
  if (!html.includes('</head>')) { missing++; continue; }
  writeFileSync(file, html.replace('</head>', `${STYLE}</head>`));
  files++;
}
console.log(JSON.stringify({schema: 'ui-doc.example_tabs_inset.v2', site, files, rows, rows_in_docara_3_18_markup: rowsDocara}, null, 2));
if (missing > 0) {
  console.error(`example-tabs-inset: ${missing} page(s) whose example tab rows are not Docara 3.18's markup -- check whether Docara insets the row now and remove this script`);
  process.exit(1);
}
