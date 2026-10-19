#!/usr/bin/env node
// Copy the Framework's standards and host ports from the pinned release into
// contracts/standards and contracts/ports, which the AI export publishes under
// /ai/standards and /ai/ports.
//
// The copies were taken by hand once and fell behind: the site published the
// manifest schema of an earlier edition, one data-view port of the ten the
// release ships, and no envelope for the change-lifecycle and component-package
// standards. They are read from git objects at the pin now
// (scripts/materialize-framework-runtime.php), never from a working tree:
//   - standards: ui-source contracts/standards at SOURCE_REVISION -- each
//     current edition's standard.json, the standard-contract schema, the
//     manifest schema in force (contracts/schema) and the pinned host-port,
//     interface-fragment descriptor and effect manifest schemas (history/
//     stays in the source);
//   - ports: ui distr/core/contracts/ports at UI_RUNTIME_REVISION, every
//     edition and its conformance kit (the .gz copies left out).
//
// Usage: node scripts/sync-framework-standards.mjs [--check]

import {execFileSync} from 'node:child_process';
import {existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const githubRoot = resolve(root, '..');
const pin = readFileSync(join(root, 'scripts/materialize-framework-runtime.php'), 'utf8');
const pinned = (name) => {
  const match = pin.match(new RegExp(`const ${name} = '([0-9a-f]{40})'`));
  if (!match) throw new Error(`pin unreadable: ${name}`);
  return match[1];
};
const repositories = {
  source: [process.env.SIMAI_UI_SOURCE_ROOT || join(githubRoot, 'ui-source'), pinned('SOURCE_REVISION')],
  ui: [process.env.SIMAI_UI_ROOT || join(githubRoot, 'ui'), pinned('UI_RUNTIME_REVISION')],
};
const git = (repository, args) => execFileSync('git', ['-C', repositories[repository][0], ...args], {maxBuffer: 64 * 1024 * 1024});
const list = (repository, path) => git(repository, ['ls-tree', '-r', '--name-only', repositories[repository][1], path])
  .toString().split('\n').filter(Boolean);
const read = (repository, path) => git(repository, ['show', `${repositories[repository][1]}:${path}`]);

const expected = new Map();
// Standards: current editions only.
const standards = 'contracts/standards/';
for (const path of list('source', standards)) {
  const rest = path.slice(standards.length);
  if (/^simai\.[a-z0-9-]+\/\d+\.\d+\.\d+\/standard\.json$/.test(rest) || rest === 'standard-contract-1.0.schema.json') {
    expected.set(`contracts/standards/${rest}`, read('source', path));
  }
}
for (const [from, to] of [
  // The manifest schema in force is the one the Framework validates with;
  // pinned/ holds the editions the standards were written against.
  ['contracts/schema/smart-component-manifest.v2.schema.json', 'smart-component-manifest.v2.schema.json'],
  [standards + 'pinned/composite-host-port.v1.schema.json', 'composite-host-port.v1.schema.json'],
  [standards + 'pinned/interface-fragment-1.2.0.schema.json', 'interface-fragment.v1.schema.json'],
  [standards + 'pinned/effect-1.2.0.schema.json', 'effect.v1.schema.json'],
]) {
  expected.set(`contracts/standards/${to}`, read('source', from));
}
// Ports: every edition the release ships, with its kit.
const ports = 'distr/core/contracts/ports/';
for (const path of list('ui', ports)) {
  if (!path.endsWith('.gz')) expected.set(`contracts/ports/${path.slice(ports.length)}`, read('ui', path));
}

const present = [];
const walk = (dir) => {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else present.push(full.slice(root.length + 1));
  }
};
walk(join(root, 'contracts/standards'));
walk(join(root, 'contracts/ports'));

const changed = [];
for (const [path, bytes] of expected) {
  const target = join(root, path);
  if (existsSync(target) && readFileSync(target).equals(bytes)) continue;
  changed.push(path);
  if (!check) {
    mkdirSync(dirname(target), {recursive: true});
    writeFileSync(target, bytes);
  }
}
const stale = present.filter((path) => !expected.has(path));
if (!check) for (const path of stale) rmSync(join(root, path));

console.log(JSON.stringify({
  schema: 'ui-doc.framework_standards_sync.v1',
  status: changed.length + stale.length === 0 ? 'synchronized' : (check ? 'drift' : 'updated'),
  source: repositories.source[1],
  ui: repositories.ui[1],
  files: expected.size,
  changed,
  removed: stale,
}, null, 2));
process.exit(check && changed.length + stale.length > 0 ? 1 : 0);
