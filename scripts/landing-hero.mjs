#!/usr/bin/env node
// Keep the landing hero's fluid padding on narrow screens.
//
// The home hero uses Docara's `padding=2xl`: clamp(--sf-d2, --sf-c2 + 6vw,
// --sf-e4), 3rem on a phone to 7rem on a wide screen. Docara 3.6.0 also ships
// `@media (max-width: 800px) .docara-landing [data-docara-container]
// {padding-block: var(--sf-space-2)}`, which outranks `.docara-padding-2xl`
// below 800px: the phone hero loses 64px and the effect's pause button covers
// the second call to action. This transform adds the same clamp with the
// specificity to win, so the hero reads the same at every width. Remove it
// (and its page_transforms entry in docara.json) once Docara's 2xl wins there.
//
// Usage: node scripts/landing-hero.mjs [build-dir] (default build_production)

import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, process.argv[2] ?? 'build_production');

const STYLE = '<style data-ui-doc-landing-hero>'
  + '.docara-landing [data-docara-block="hero"] > [data-docara-container]'
  + '{padding-block:clamp(3rem, 1.5rem + 6vw, 7rem)}'
  + '</style>';
const LANDING_HERO = /<main[^>]*class="[^"]*\bdocara-landing\b[^"]*"[\s\S]*?data-docara-block="hero"/u;

const pages = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory, {withFileTypes: true})) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith('.html')) pages.push(path);
  }
};
walk(site);

let changed = 0;
for (const path of pages) {
  const page = readFileSync(path, 'utf8');
  if (page.includes('data-ui-doc-landing-hero') || !LANDING_HERO.test(page)) continue;
  const at = page.indexOf('</head>');
  if (at === -1) throw new Error(`landing-hero: no </head> in ${path}`);
  writeFileSync(path, page.slice(0, at) + STYLE + page.slice(at));
  changed++;
}
console.log(JSON.stringify({schema: 'ui-doc.landing_hero.v1', pages: pages.length, changed}));
