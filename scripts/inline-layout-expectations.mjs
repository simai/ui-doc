#!/usr/bin/env node
// The in-page checker carries the map inside itself, because it has to run on a
// page that knows nothing about this repository -- a consumer's template, a
// staging build, a page pasted into a console. This keeps the copy honest.
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const projectRoot = path.resolve(import.meta.dirname, '..');
const mapPath = path.join(projectRoot, 'contracts/documentation/layout-expectations.json');
const toolPath = path.join(projectRoot, 'assets/tools/layout-check.js');

const map = JSON.parse(fs.readFileSync(mapPath, 'utf8')).targets;
const serialised = JSON.stringify(map, null, 2).split('\n').map((line, i) => (i ? `  ${line}` : line)).join('\n');
const tool = fs.readFileSync(toolPath, 'utf8');
const current = tool.match(/var EXPECTATIONS = (\{[\s\S]*?\n  \});/u);
if (!current) {
  console.error('the checker no longer declares EXPECTATIONS the way this script writes it');
  process.exit(2);
}

if (process.argv.includes('--write')) {
  fs.writeFileSync(toolPath, tool.replace(current[1], serialised));
  console.log(JSON.stringify({ status: 'written', elements: Object.keys(map).length }, null, 2));
  process.exit(0);
}

const same = current[1] === serialised;
console.log(JSON.stringify({
  schema: 'ui-doc.layout_checker_copy.v1',
  status: same ? 'pass' : 'needs_revision',
  elements: Object.keys(map).length,
  reason: same ? undefined : 'assets/tools/layout-check.js carries a stale copy of the map',
}, null, 2));
process.exit(same ? 0 : 1);
