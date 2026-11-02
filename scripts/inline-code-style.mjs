#!/usr/bin/env node
// Temporary: gives code inside article text a quiet background so it reads as
// code. The rule belongs to the SIMAI Framework prose style; this transform
// goes away when the pair that carries it is pinned.
import {readdirSync, readFileSync, statSync, writeFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, process.argv[2] ?? 'build_production');

const STYLE = '<style data-ui-doc-inline-code>'
  + '.docara-prose :not(pre) > code:not([class]):not([data-docara-example] code){'
  + 'padding:0 var(--sf-space-1\\/4);border-radius:var(--sf-radius--ui);'
  + 'background:light-dark(rgb(0 0 0 / .06),rgb(255 255 255 / .1));'
  + 'font-family:var(--sf-mono);font-size:.875em;overflow-wrap:anywhere}'
  + '</style>';

function* pages(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* pages(path);
    else if (name.endsWith('.html')) yield path;
  }
}

let files = 0;
for (const file of pages(site)) {
  const html = readFileSync(file, 'utf8');
  if (!html.includes('docara-prose') || html.includes('data-ui-doc-inline-code')) continue;
  writeFileSync(file, html.replace('</head>', `${STYLE}</head>`));
  files++;
}
console.log(JSON.stringify({schema: 'ui-doc.inline_code_style.v1', site, files}, null, 2));
