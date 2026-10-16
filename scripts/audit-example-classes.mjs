#!/usr/bin/env node
// Every class an example writes must exist: in the release's stylesheets or in
// the example's own CSS. A reader copies an example as the way to do it; a class
// that does nothing teaches a name the Framework never had. The docs-only trial
// (ui-control control/DOCS-TRIAL-2026-10-12.md) found `m-b-2` in 132 example
// files and `sf-card` in 202, neither declared anywhere.
//
// A class the Loader renames on the page (convertTailwindClassToken in
// src/core/js/tailwind-map.js at the pinned source revision) counts as the
// name it becomes.
//
// Sources: the release's distr/**/*.css (--core-root=/absolute/ui, or
// SIMAI_UI_CORE_ROOT, or ../ui), and per example the .css files beside it and
// its <style> blocks. JavaScript hooks (`js-*`) are not styling and are skipped.
// contracts/documentation/known-unknown-example-classes.json lists what is
// still to fix; a class not on it fails, and a listed class that is gone fails
// too, so the list only shrinks.
//
// Usage: node scripts/audit-example-classes.mjs [--write-baseline]

import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const args = process.argv.slice(2);
const value = (name) => args.find((a) => a.startsWith(`${name}=`))?.slice(name.length + 1);
const projectRoot = path.resolve(import.meta.dirname, '..');
const sibling = path.resolve(projectRoot, '../ui');
const coreRoot = value('--core-root') || process.env.SIMAI_UI_CORE_ROOT
  || (fs.existsSync(path.join(sibling, 'distr/core/css/core.css')) ? sibling : null);
const baselinePath = path.join(projectRoot, 'contracts/documentation/known-unknown-example-classes.json');

if (coreRoot === null) {
  console.log(JSON.stringify({schema: 'ui-doc.example_class_audit.v1', status: 'skipped_no_core_root', findings: []}, null, 2));
  process.exit(0);
}

const walk = (dir, test, out = []) => {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, test, out);
    else if (test(entry.name)) out.push(full);
  }
  return out;
};
const selectors = (css) => [...css.matchAll(/\.((?:[a-zA-Z0-9_]|-|\\[^\s])+)/gu)].map(([, name]) => name.replace(/\\/gu, ''));

const declared = new Set(walk(path.join(coreRoot, 'distr'), (name) => name.endsWith('.css') && !name.endsWith('.min.css'))
  .flatMap((file) => selectors(fs.readFileSync(file, 'utf8'))));

// A class the release's JavaScript names is a hook its templates and scripts
// read or write (`sf-dropdown-hidden-input`), not styling; it exists.
const scripts = walk(path.join(coreRoot, 'distr'), (name) => name.endsWith('.js') && !name.endsWith('.min.js'))
  .map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const inScripts = (name) => new RegExp(`(^|[^a-zA-Z0-9_-])${name.replace(/[.*+?^${}()|[\]\\/]/gu, '\\$&')}($|[^a-zA-Z0-9_-])`, 'u').test(scripts);

// The Loader rewrites class names before they reach a stylesheet: markup
// writes `cq-sm:justify-between` and the sheet holds `cq-sm:content-main-between`.
// A class is known when the name the Loader gives it is declared. The mapping is
// the Loader's own module, src/core/js/tailwind-map.js, read from ui-source at
// the source revision the pinned release was built from -- never a hand list.
const sourceRoot = process.env.SIMAI_UI_SOURCE_ROOT || path.resolve(projectRoot, '../ui-source');
const sourceCommit = JSON.parse(fs.readFileSync(path.join(projectRoot, 'contracts/generated/framework-contract-registry.json'), 'utf8'))
  .compatibility?.build_inputs?.source?.commit;
let loaderName = (name) => name;
let loaderMapping = 'unavailable';
try {
  const module = execFileSync('git', ['-C', sourceRoot, 'show', `${sourceCommit}:src/core/js/tailwind-map.js`], {encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore']});
  const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'ui-doc-loader-map-')), 'tailwind-map.mjs');
  fs.writeFileSync(file, module);
  const {convertTailwindClassToken} = await import(pathToFileURL(file).href);
  fs.rmSync(path.dirname(file), {recursive: true, force: true});
  loaderName = (name) => convertTailwindClassToken(name) ?? name;
  loaderMapping = `${sourceCommit}:src/core/js/tailwind-map.js`;
} catch {
  // Without the source checkout a class is looked up as written.
}
const isDeclared = (name) => declared.has(name) || declared.has(loaderName(name));

const unknown = new Map();
const examples = walk(path.join(projectRoot, 'examples'), (name) => name.endsWith('.html'));
for (const file of examples) {
  const html = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const local = new Set([
    ...fs.readdirSync(dir).filter((name) => name.endsWith('.css')).flatMap((name) => selectors(fs.readFileSync(path.join(dir, name), 'utf8'))),
    ...[...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gu)].flatMap(([, css]) => selectors(css)),
  ]);
  for (const [, list] of html.matchAll(/\bclass="([^"]*)"/gu)) {
    for (const name of list.split(/\s+/u).filter(Boolean)) {
      if (/[{}$<>]/u.test(name) || name.startsWith('js-') || name.startsWith('language-')
        || isDeclared(name) || local.has(name) || inScripts(name)) continue;
      const files = unknown.get(name) ?? new Set();
      files.add(path.relative(projectRoot, file));
      unknown.set(name, files);
    }
  }
}

const found = Object.fromEntries([...unknown].sort(([a], [b]) => a.localeCompare(b)).map(([name, files]) => [name, files.size]));
if (args.includes('--write-baseline')) {
  fs.writeFileSync(baselinePath, `${JSON.stringify({
    schema: 'ui-doc.known-unknown-example-classes',
    schema_version: 1,
    why: 'Classes examples write that no release stylesheet and no example CSS declares; each is to be renamed to the real class or removed. The count is the number of example files.',
    classes: found,
  }, null, 2)}\n`);
}
const baseline = fs.existsSync(baselinePath) ? JSON.parse(fs.readFileSync(baselinePath, 'utf8')).classes : {};
const findings = [
  ...Object.keys(found).filter((name) => !(name in baseline)).map((name) => ({code: 'class_unknown', class: name, files: [...unknown.get(name)].slice(0, 5)})),
  ...Object.keys(baseline).filter((name) => !(name in found)).map((name) => ({code: 'baseline_entry_fixed', class: name})),
  ...Object.keys(found).filter((name) => name in baseline && found[name] > baseline[name]).map((name) => ({code: 'class_spread', class: name, files: found[name], baseline: baseline[name]})),
];
console.log(JSON.stringify({
  schema: 'ui-doc.example_class_audit.v1',
  status: findings.length === 0 ? 'pass' : 'needs_revision',
  examples: examples.length,
  loader_mapping: loaderMapping,
  unknown_classes: Object.keys(found).length,
  findings,
}, null, 2));
process.exit(findings.length === 0 ? 0 : 1);
