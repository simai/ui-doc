#!/usr/bin/env node
// Copy the shared example helpers into the examples that use them.
//
// Docara inlines an example's index.js into its frame, and a frame can load
// nothing from the site by a path of its own, so a helper several examples
// share (the event log under a live example) cannot be imported. It lives once
// in examples/shared/<name>.js; an example asks for it with a region in its
// index.js, and this script writes the helper's text into that region:
//
//   // <example-helper event-log>
//   // </example-helper>
//
// --check fails when a region differs from its helper, so the copies never
// drift from the one file a person edits.
//
// Usage: node scripts/sync-example-helpers.mjs [--check]

import {existsSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const examples = join(root, 'examples');
const shared = join(examples, 'shared');
const checkOnly = process.argv.includes('--check');

const walk = (directory) => readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) return path === shared ? [] : walk(path);
  return entry.name === 'index.js' ? [path] : [];
});

const REGION = /^([ \t]*)\/\/ <example-helper ([a-z0-9-]+)>[^\n]*\n[\s\S]*?^\1\/\/ <\/example-helper>$/gmu;
const changed = [];
const unknown = [];
const users = {};
for (const file of walk(examples).sort()) {
  const current = readFileSync(file, 'utf8');
  const expected = current.replace(REGION, (whole, indent, name) => {
    const helper = join(shared, `${name}.js`);
    if (!existsSync(helper)) {
      unknown.push(`${relative(root, file)}: ${name}`);
      return whole;
    }
    (users[name] ??= []).push(relative(root, dirname(file)));
    const body = readFileSync(helper, 'utf8').replace(/\n+$/u, '');
    return `${indent}// <example-helper ${name}> -- written from examples/shared/${name}.js by scripts/sync-example-helpers.mjs; edit it there\n${body}\n${indent}// </example-helper>`;
  });
  if (expected === current) continue;
  changed.push(relative(root, file));
  if (!checkOnly) writeFileSync(file, expected);
}

const result = {
  schema: 'ui-doc.example_helpers.v1',
  status: unknown.length ? 'fail' : (changed.length === 0 ? 'pass' : (checkOnly ? 'needs_revision' : 'written')),
  helpers: Object.fromEntries(Object.entries(users).map(([name, list]) => [name, list.length])),
  changed,
  unknown,
};
console.log(JSON.stringify(result, null, 2));
if (unknown.length || (checkOnly && changed.length)) process.exit(1);
