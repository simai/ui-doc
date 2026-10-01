#!/usr/bin/env node
// A Framework component does not lay itself out. Its CSS styles the parts; the
// flex container they sit in comes from the markup, written with utility
// classes. Every rule that needs one carries the list in a comment above itself:
//
//   /* utility-hint: display/flex (.flex) flex-direction/row (.flex-row)
//      flex-wrap/nowrap (.flex-nowrap) justify-content/center (.justify-center)
//      align-items/center (.items-center) */
//   .sf-radio-button .sf-radio-button-box { … }
//
// Leave them out and nothing complains. The element is simply not a flex
// container and its parts pile into a corner: a radio written by hand without
// them shows its dot in the top left of the ring instead of the middle.
//
// Only part of a hint is a requirement. A flex container is already row, nowrap
// and flex-start, so naming those changes nothing and omitting them breaks
// nothing -- they are there because Figma writes every frame out in full. What
// this file keeps is the rest: a column direction, wrapping, a non-start
// alignment, a non-start justification. Those are decisions, and a decision that
// never reaches the page is a defect.
//
// The expectation is recorded as the computed value a browser should report, not
// as a class name, because a project may reach it any way it likes -- a utility
// class, its own stylesheet, an inline style. What matters is the result.
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const projectRoot = path.resolve(import.meta.dirname, '..');
const outPath = path.join(projectRoot, 'contracts/documentation/layout-expectations.json');

const EXPECTATION = {
  'flex-col': ['flexDirection', 'column'],
  'flex-wrap': ['flexWrap', 'wrap'],
  'items-center': ['alignItems', 'center'],
  'items-end': ['alignItems', 'end'],
  'justify-center': ['justifyContent', 'center'],
  'justify-end': ['justifyContent', 'flex-end'],
  'justify-between': ['justifyContent', 'space-between'],
};

const cssFiles = (root) => {
  const found = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      // The hints are comments, so they survive only in the unminified file.
      else if (entry.name.endsWith('.css') && !entry.name.endsWith('.min.css')) found.push(full);
    }
  };
  walk(path.join(root, 'distr/component'));
  return found.sort();
};

export const build = (uiRoot) => {
  const targets = {};
  for (const file of cssFiles(uiRoot)) {
    const css = fs.readFileSync(file, 'utf8');
    for (const rule of css.matchAll(/\/\* utility-hint:([^*]*)\*\/\s*\n([^{]*)\{/gu)) {
      const hinted = [...rule[1].matchAll(/\(\.([a-z0-9\\/-]+)\)/gu)].map((m) => m[1]);
      const expect = {};
      for (const name of hinted) {
        const pair = EXPECTATION[name];
        if (pair) expect[pair[0]] = pair[1];
      }
      if (Object.keys(expect).length === 0) continue;
      for (const branch of rule[2].split(',')) {
        // Only the last simple selector names the element being laid out. What
        // comes before it is scope -- and in the published CSS that scope is
        // often direction scaffolding, `html:not([dir="rtl"]) …`, split out of a
        // single source rule. Reading the whole branch would throw those away
        // along with the element they point at.
        const last = branch.trim().split(/\s+/u).filter(Boolean).at(-1) ?? '';
        // A state or an attribute on the element itself describes a moment, not
        // resting layout.
        if (/[:[]/u.test(last)) continue;
        const target = [...last.matchAll(/\.([a-zA-Z0-9_-]+)/gu)].map((m) => m[1]).pop();
        // A hint above a rule for a bare element -- an input inside a field --
        // names nothing the author composes.
        if (!target || !target.startsWith('sf-')) continue;
        targets[target] = { ...(targets[target] ?? {}), ...expect };
      }
    }
  }
  return Object.fromEntries(Object.entries(targets).sort(([a], [b]) => a.localeCompare(b)));
};

// The Core runtime normally sits beside this repository, so the common case
// needs no environment at all. The variables stay for a checkout laid out
// differently.
const sibling = path.resolve(projectRoot, '../ui');
const candidate = process.env.SIMAI_UI_ROOT ?? process.env.DOCARA_SIMAI_UI_ROOT
  ?? (fs.existsSync(path.join(sibling, 'distr/component')) ? sibling : '');
const uiRoot = candidate;
const write = process.argv.includes('--write');
const stored = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, 'utf8')) : null;

if (!uiRoot) {
  // Without a runtime there is nothing to compare against, and a check that
  // quietly passes when it did not run is worse than one that is not there.
  console.log(JSON.stringify({
    schema: 'ui-doc.layout_expectations.v1',
    status: stored ? 'skipped' : 'needs_revision',
    reason: 'SIMAI_UI_ROOT is not set; the stored map was not verified',
    elements: stored ? Object.keys(stored.targets).length : 0,
  }, null, 2));
  process.exit(stored ? 0 : 1);
}

const built = build(uiRoot);
if (write) {
  fs.writeFileSync(outPath, `${JSON.stringify({
    schema: 'ui-doc.layout_expectations.v1',
    note: 'Built from the utility-hint comments of the pinned Core runtime by scripts/build-layout-expectations.mjs --write.',
    elements: Object.keys(built).length,
    targets: built,
  }, null, 4)}\n`);
  console.log(JSON.stringify({ status: 'written', elements: Object.keys(built).length }, null, 2));
  process.exit(0);
}

const drift = [];
const names = [...new Set([...Object.keys(stored?.targets ?? {}), ...Object.keys(built)])].sort();
for (const name of names) {
  const recorded = JSON.stringify(stored?.targets?.[name] ?? null);
  const current = JSON.stringify(built[name] ?? null);
  if (recorded !== current) drift.push({ element: name, recorded, current });
}
console.log(JSON.stringify({
  schema: 'ui-doc.layout_expectations.v1',
  status: drift.length === 0 ? 'pass' : 'needs_revision',
  elements: Object.keys(built).length,
  drift,
}, null, 2));
process.exit(drift.length === 0 ? 0 : 1);
