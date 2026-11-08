#!/usr/bin/env node
// Inline code in the docs copies on click (owner 2026-11-07, R024).
//
// The Framework's core does it for every container that opts in with
// data-sf-code-copy (SF.codeCopy, ui-0c23f6a0af12): a word of code in running
// text becomes a copy control, and code in blocks, keys, buttons and the
// Framework's own parts stays as it is. The content root is Docara's
// <article class="docara-prose">, which Docara writes itself, so the
// attribute is added here, after the build, on that one element per page.
//
// Usage: node scripts/code-copy-root.mjs [build-dir] (default build_production)

import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, process.argv[2] ?? 'build_production');
const ARTICLE = /<article class="docara-prose(?:\s[^"]*)?"(?![^>]*\bdata-sf-code-copy\b)/u;

const pages = (dir, out = []) => {
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) pages(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
};

let files = 0;
for (const file of pages(site)) {
  const html = readFileSync(file, 'utf8');
  const match = ARTICLE.exec(html);
  if (!match) continue;
  writeFileSync(file, html.replace(ARTICLE, `${match[0]} data-sf-code-copy`));
  files++;
}
console.log(JSON.stringify({schema: 'ui-doc.code_copy_root.v1', site, files}, null, 2));
