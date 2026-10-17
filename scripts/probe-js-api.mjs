#!/usr/bin/env node
// Measure what the pinned Framework release puts on window.SF, and when.
//
// The guide named about ten SF.* globals with a usable signature; the release
// carries about seventy-five, and nothing said which exist when (the
// docs-only trial, ui-control control/DOCS-TRIAL-2026-10-12.md, found a
// solver calling SF.Input.setState before it existed). This script asks the
// runtime instead of grepping the source: it serves the release from git
// objects at the lock's commit, opens two pages in headless Chromium and
// records every own key of window.SF at each stage:
//   core        — in the first script after core.js, before the DOM is parsed;
//   dom         — at DOMContentLoaded;
//   idle        — 2.5 s after load on an empty page;
//   components  — 2.5 s after load on a page holding every Smart tag the
//                 release's rules name, after SF.whenDefined for each.
// For a function it records its arity; for an object its own keys and their
// types (one level). The result is contracts/generated/js-api-inventory.json,
// checked against the release's public-js-api.json contract.
//
// Usage: node scripts/probe-js-api.mjs
// Needs playwright-core (PLAYWRIGHT_CORE, or ../ui-studio/node_modules,
// ../ui-admin/node_modules) with its Chromium installed, and ../ui (or
// SIMAI_UI_REPO) holding the lock's commit.

import {execFileSync} from 'node:child_process';
import {createServer} from 'node:http';
import {existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, extname, join, resolve} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const lock = JSON.parse(readFileSync(join(root, 'simai-framework.lock.json'), 'utf8'));
const pair = lock.runtime.pair_id;
const commit = lock.runtime.ui.commit;
const uiRepo = process.env.SIMAI_UI_REPO || resolve(root, '../ui');

const playwrightPath = [
  process.env.PLAYWRIGHT_CORE,
  resolve(root, '../ui-studio/node_modules/playwright-core'),
  resolve(root, '../ui-admin/node_modules/playwright-core'),
].find((path) => path && existsSync(join(path, 'package.json')));
if (!playwrightPath) {
  console.error('playwright-core not found; set PLAYWRIGHT_CORE');
  process.exit(2);
}
const {chromium} = await import(pathToFileURL(join(playwrightPath, 'index.mjs')).href);

// The release, unpacked from git objects: the bytes the lock names, not
// whatever the checkout holds.
const work = mkdtempSync(join(tmpdir(), 'sf-js-api-'));
execFileSync('sh', ['-c', `git -C '${uiRepo}' archive ${commit} distr | tar -x -C '${work}'`]);
const rules = JSON.parse(readFileSync(join(work, 'distr/rule/rule.json'), 'utf8'));
const tags = rules.map((rule) => rule.name).filter((name) => name.startsWith('cl-'))
  .map((name) => name.slice(3))
  .filter((folder) => existsSync(join(work, 'distr/smart', folder, 'smart.manifest.json')))
  .map((folder) => JSON.parse(readFileSync(join(work, 'distr/smart', folder, 'smart.manifest.json'), 'utf8')).custom_element)
  .filter(Boolean);

const describe = `(() => {
  const SF = window.SF || {};
  const kind = (value) => (value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value);
  const out = {};
  for (const key of Object.keys(SF).sort()) {
    const value = SF[key];
    const entry = {type: kind(value)};
    if (typeof value === 'function') {
      entry.arity = value.length;
      entry.class = /^class[\\s{]/.test(Function.prototype.toString.call(value));
    }
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      entry.members = {};
      for (const member of Object.keys(value).sort()) {
        const inner = value[member];
        entry.members[member] = typeof inner === 'function' ? {type: 'function', arity: inner.length} : {type: kind(inner)};
      }
    }
    out[key] = entry;
  }
  return out;
})()`;

const page = (body) => `<!doctype html><html lang="ru"><head><meta charset="utf-8">
<link rel="stylesheet" href="/distr/core/css/core.css">
<script>window.SF_BOOT_CONFIG = {sfPath: '/distr', preloader: {enabled: false}};</script>
<script src="/distr/core/js/core.js"></script>
<script>window.__sfStages = {core: ${describe}};
document.addEventListener('DOMContentLoaded', () => { window.__sfStages.dom = ${describe}; });</script>
</head><body>${body}</body></html>`;
const pages = {
  '/empty.html': page('<main><p>empty</p></main>'),
  '/components.html': page(`<main>${tags.map((tag) => `<${tag}></${tag}>`).join('\n')}</main>`),
};

const types = {'.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.html': 'text/html'};
const server = createServer((request, response) => {
  const path = decodeURIComponent(new URL(request.url, 'http://x').pathname);
  if (pages[path]) {
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    response.end(pages[path]);
    return;
  }
  const file = join(work, path);
  if (!file.startsWith(work) || !existsSync(file)) {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200, {'content-type': types[extname(file)] ?? 'application/octet-stream'});
  response.end(readFileSync(file));
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const origin = `http://127.0.0.1:${server.address().port}`;

// A Chromium already on the machine is enough: CHROMIUM_EXECUTABLE, else the
// newest headless shell in the Playwright cache, else Playwright's own.
const cache = join(process.env.HOME ?? '', 'Library/Caches/ms-playwright');
const cached = existsSync(cache) ? readdirSync(cache).filter((name) => name.startsWith('chromium_headless_shell-')).sort().reverse()
  .map((name) => join(cache, name, 'chrome-headless-shell-mac-arm64/chrome-headless-shell')).find((path) => existsSync(path)) : null;
const executablePath = process.env.CHROMIUM_EXECUTABLE || cached || undefined;
const browser = await chromium.launch(executablePath ? {executablePath} : {});
const stages = {};
const errors = [];
try {
  // The Loader loads a Smart element when it comes into view: a page of every
  // tag is opened in a window tall enough to show them all, or the elements
  // below the fold never load and their globals look missing.
  const context = await browser.newContext({viewport: {width: 1280, height: 12000}});
  const tab = await context.newPage();
  tab.on('pageerror', (error) => errors.push(String(error.message).slice(0, 200)));
  await tab.goto(`${origin}/empty.html`, {waitUntil: 'load'});
  await tab.waitForTimeout(2500);
  Object.assign(stages, await tab.evaluate('window.__sfStages'));
  stages.idle = await tab.evaluate(describe);
  await tab.goto(`${origin}/components.html`, {waitUntil: 'load'});
  await tab.evaluate(`Promise.all(${JSON.stringify(tags)}.map((tag) => (window.SF?.whenDefined ? Promise.race([window.SF.whenDefined(tag), new Promise((r) => setTimeout(r, 8000))]) : null)))`);
  // A tag's script may pull further component classes after the tag is
  // defined (sf-tree brings the tree class and SF.Tree): wait until window.SF
  // holds the same keys for two seconds, at most fifteen, so a slow fetch
  // does not drop a global from the inventory.
  await tab.evaluate(`new Promise((resolve) => {
    const keys = () => Object.keys(window.SF || {}).sort().join(',');
    let last = keys(); let stable = 0; let waited = 0;
    const tick = () => {
      const now = keys();
      stable = now === last ? stable + 250 : 0; last = now; waited += 250;
      if (stable >= 2000 || waited >= 15000) resolve(); else setTimeout(tick, 250);
    };
    setTimeout(tick, 250);
  })`);
  stages.components = await tab.evaluate(describe);
} finally {
  await browser.close();
  server.close();
  rmSync(work, {recursive: true, force: true});
}

// One record per global: the first stage it appears in, and its shape there
// and at the last stage (members may be added later).
const order = ['core', 'dom', 'idle', 'components'];
const globals = {};
for (const stage of order) {
  for (const [name, entry] of Object.entries(stages[stage] ?? {})) {
    globals[name] ??= {available: stage, ...entry};
    if (entry.members) globals[name].members = entry.members;
  }
}
// The release declares every global and whether it is public or internal
// (core/contracts/public-js-api.json, simai.framework.public-js-api); the JS
// API reference is built from that contract (scripts/build-smart-reference.mjs).
// This probe is the cross-check: each name the runtime puts on window.SF takes
// the contract's status, and a name the contract does not declare is reported.
const contract = JSON.parse(execFileSync('git', ['-C', uiRepo, 'show', `${commit}:distr/core/contracts/public-js-api.json`], {encoding: 'utf8'}));
const declared = new Map(contract.globals.map((item) => [item.name.replace(/^SF\./u, ''), item]));
const undeclared = [];
for (const name of Object.keys(globals)) {
  const entry = declared.get(name);
  if (entry) globals[name].status = entry.status;
  else undeclared.push(name);
}

const inventory = {
  schema: 'ui-doc.js-api-inventory',
  schema_version: 1,
  release: pair,
  ui_commit: commit,
  stages: order,
  smart_tags: tags.length,
  page_errors: errors,
  undeclared,
  globals: Object.fromEntries(Object.entries(globals).sort(([a], [b]) => a.localeCompare(b))),
};
writeFileSync(join(root, 'contracts/generated/js-api-inventory.json'), `${JSON.stringify(inventory, null, 2)}\n`);
console.log(JSON.stringify({release: pair, globals: Object.keys(globals).length, by_stage: Object.fromEntries(order.map((stage) => [stage, Object.values(globals).filter((g) => g.available === stage).length])), page_errors: errors.length, undeclared}, null, 2));
if (undeclared.length) process.exitCode = 1;
