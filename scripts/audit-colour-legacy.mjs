#!/usr/bin/env node
// Fails when the documentation still shows colour the palette decision C17
// retired (owner remark R087, 2026-11-09): the old palette illustration, the
// avatar tones, the legacy palette classes (bg-blue-5), the separate chart
// generator and its «soft» set, and every other name the change journal
// retires under C17.
//
// The old forms may be named only where a reader looks for the way off them:
// the update guide and the names guide, and the generated migration lines of
// a reference page (the «Устаревшие» row of a class table, the «Прежние имена
// работают» line under a utility table). content/en is the untranslated
// Docara 2 copy; it is not checked until it is translated again.
//
// Usage: node scripts/audit-colour-legacy.mjs
//   SIMAI_UI_SOURCE_ROOT  ui-source checkout with the change journal
//                         (default ../ui-source); without it the journal
//                         names are skipped and the fixed patterns still run.

import {execFileSync} from 'node:child_process';
import {existsSync, readdirSync, readFileSync, statSync} from 'node:fs';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const EXEMPT = new Set([
  'content/ru/guide/connection/updating.md',
  'content/ru/guide/smart-components/names.md',
]);

const walk = (dir, test, out = []) => {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, test, out);
    else if (test(entry)) out.push(path);
  }
  return out;
};
const MIGRATION_LINE = /^\| Устаревшие \||^Прежние имена работают/u;
const files = [
  ...walk(join(root, 'content/ru'), (name) => name.endsWith('.md')),
  ...walk(join(root, 'examples'), (name) => /\.(html|js|css)$/u.test(name)),
].map((path) => relative(root, path)).filter((path) => !EXEMPT.has(path));

const escape = (text) => text.replace(/[.*+?^${}()|[\]\\/]/gu, '\\$&');
const word = (name) => new RegExp(`(?<![A-Za-z0-9_:/-])${escape(name)}(?![A-Za-z0-9_/-])`, 'u');

// Fixed patterns: what C17 retired, whether or not the journal is at hand.
const LEGACY_HUES = '(?:white|black|gray|red|orange|yellow|green|blue|purple|pink)';
const RULES = [
  {id: 'tone-token', why: 'avatar tone tokens are retired (C17): read --sf-hue-* roles or --sf-<hue>-<tone>', re: /--sf-(?:on-)?tone-[a-z]/u},
  {id: 'avatar-tone-class', why: 'sf-avatar--tone-* is retired (C17): sf-hue-<name>', re: /sf-avatar--tone-[a-z]/u},
  {id: 'avatar-tone-attribute', why: 'sf-avatar tone is retired (C17): write hue', re: /<sf-avatar\b[^>]*\stone=|`tone="(?:auto|rose|amber|lime|green|teal|sky|indigo|violet)"`/u},
  {id: 'legacy-palette-class', why: 'the legacy palette classes are retired (C17) and have no successor', re: new RegExp(`(?<![A-Za-z0-9_/-])(?:[a-z]+:)?(?:bg|color|border)-${LEGACY_HUES}(?:-[0-9])?(?![A-Za-z0-9_/-])`, 'u')},
  {id: 'chart-soft', why: 'the «soft» chart set is retired (C17): the chart sets are the main, warm and cool hue orders', re: /palette=["']soft["']|«мягк|мягк(?:ий|ого) набор/u},
  {id: 'chart-generator', why: 'the separate chart colour generator is retired (C17): charts read the static palette', re: /chart-palettes\.mjs|генератор(?:а|ом)? график/u},
];

// The journal: every name a C17 record retires.
const sourceRoot = process.env.SIMAI_UI_SOURCE_ROOT ?? resolve(root, '../ui-source');
let journal = null;
try {
  const registry = JSON.parse(readFileSync(join(root, 'contracts/generated/framework-contract-registry.json'), 'utf8'));
  const commit = registry.compatibility?.build_inputs?.source?.commit;
  journal = JSON.parse(execFileSync('git', ['-C', sourceRoot, 'show', `${commit}:contracts/changes/journal.json`], {encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'ignore']}));
} catch {
  journal = null;
}
const journalNames = new Map();
for (const record of journal?.records ?? []) {
  if (!/-c17-/u.test(record.id) || !['compat', 'removed'].includes(record.stage)) continue;
  if (!['token', 'class', 'utility'].includes(record.kind)) continue;
  for (const item of record.items ?? []) {
    if (!item.from || /[*<{\s]/u.test(item.from)) continue;
    journalNames.set(item.from.replace(/\\\//gu, '/'), record.id);
  }
}
const journalPatterns = [...journalNames].map(([name, id]) => ({name, id, re: word(name)}));

const findings = [];
for (const path of files) {
  const lines = readFileSync(join(root, path), 'utf8').split('\n');
  lines.forEach((line, index) => {
    if (MIGRATION_LINE.test(line)) return;
    for (const rule of RULES) {
      const match = line.match(rule.re);
      if (match) findings.push({path, line: index + 1, rule: rule.id, found: match[0], why: rule.why});
    }
    for (const {name, id, re} of journalPatterns) {
      if (re.test(line)) findings.push({path, line: index + 1, rule: 'journal', found: name, why: `retired by ${id}`});
    }
  });
}

// The colour guide's pictures: the palettes are shown live, so the palette
// page holds no image and no file of the guide looks like the old picture;
// every picture is used by a page.
for (const locale of ['ru']) {
  const guide = join(root, 'content', locale, 'guide/colour');
  if (!existsSync(guide)) continue;
  const pages = walk(guide, (name) => name.endsWith('.md'));
  const text = pages.map((path) => readFileSync(path, 'utf8')).join('\n');
  const palettes = join(guide, 'palettes.md');
  if (existsSync(palettes) && /!\[[^\]]*\]\([^)]+\)/u.test(readFileSync(palettes, 'utf8'))) {
    findings.push({path: relative(root, palettes), line: 0, rule: 'palette-image', found: 'image', why: 'the palettes are shown by live examples, not by a picture'});
  }
  for (const asset of walk(join(guide, 'assets'), () => true)) {
    const name = asset.split('/').pop();
    if (/palette/iu.test(name)) findings.push({path: relative(root, asset), line: 0, rule: 'palette-image', found: name, why: 'an old palette picture'});
    if (!text.includes(`/assets/${name}`)) findings.push({path: relative(root, asset), line: 0, rule: 'unused-image', found: name, why: 'no colour guide page shows it'});
  }
  for (const [, src] of text.matchAll(/!\[[^\]]*\]\((\/[^)\s]+)\)/gu)) {
    const file = join(root, 'content', src.replace(/^\//u, ''));
    if (!existsSync(file)) findings.push({path: `content${src}`, line: 0, rule: 'missing-image', found: src, why: 'a page shows a picture that is not there'});
  }
}

const report = {
  schema: 'ui-doc.colour_legacy_audit.v1',
  status: findings.length ? 'fail' : 'pass',
  files: files.length,
  journal: journal ? `${journalNames.size} names from C17 records` : 'skipped: no ui-source checkout with the journal',
  findings,
};
console.log(JSON.stringify(report, null, 2));
process.exit(findings.length ? 1 : 0);
