#!/usr/bin/env node
// A block takes its padding and its corner from the same step of the ladder,
// and every nested level steps down: p-3 radius-3 around p-2 radius-2 around
// p-1 radius-1. The rule is written in the borders guide; this check holds the
// material to it.
//
// Two things are reported:
//   pair     — one element carries p-N and radius-M with N != M
//   nesting  — an element's corner is not smaller than the corner around it
//
// Semantic and shape corners are out of scope: radius-ui and radius-surface
// belong to a role, radius-circle, radius-square and radius-rounded are shapes,
// and none of them sit on the ladder.
//
// The material predates the rule, so the count it starts from is recorded in
// contracts/documentation/nesting-step-baseline.json. Anything above the
// recorded count fails; the recorded part stays visible and waits for a sweep.
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const projectRoot = path.resolve(import.meta.dirname, '..');
const LADDER = ['0', '1/4', '1/3', '1/2', '1', '2', '3', '4', '5', '6', '7', '8'];
const rank = (step) => LADDER.indexOf(step);

// A breakpoint prefix does not change which step a class names.
const stepOf = (classes, prefix) => {
  for (const name of classes) {
    const match = name.match(new RegExp(`^(?:[a-z]{2}:)?${prefix}-((?:[0-9]+)(?:/[0-9]+)?)$`, 'u'));
    if (match) return match[1];
  }
  return null;
};

const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr']);

const inspect = (html) => {
  const findings = [];
  const stack = [];
  const tag = /<(\/?)([a-zA-Z][\w-]*)([^>]*)>/gu;
  let match;
  while ((match = tag.exec(html))) {
    const [, closing, name, attributes] = match;
    const lower = name.toLowerCase();
    if (closing) {
      if (stack.length > 0) stack.pop();
      continue;
    }
    if (VOID_TAGS.has(lower) || /\/\s*$/u.test(attributes)) continue;
    const classes = (attributes.match(/class="([^"]*)"/u) || [, ''])[1].split(/\s+/u).filter(Boolean);
    const padding = stepOf(classes, 'p');
    const radius = stepOf(classes, 'radius');
    if (padding && radius && padding !== radius) {
      findings.push({ kind: 'pair', padding, radius, classes: classes.join(' ') });
    }
    if (radius) {
      const around = [...stack].reverse().find((entry) => entry.radius);
      if (around && rank(radius) >= rank(around.radius)) {
        findings.push({ kind: 'nesting', outer: around.radius, inner: radius, classes: classes.join(' ') });
      }
    }
    stack.push({ radius });
  }
  return findings;
};

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : (entry.name.endsWith('.html') ? [full] : []);
});

const baselinePath = path.join(projectRoot, 'contracts/documentation/nesting-step-baseline.json');
const baseline = fs.existsSync(baselinePath)
  ? JSON.parse(fs.readFileSync(baselinePath, 'utf8')).files
  : {};

const counts = {};
const details = [];
for (const file of walk(path.join(projectRoot, 'examples')).sort()) {
  const relative = path.relative(projectRoot, file);
  const findings = inspect(fs.readFileSync(file, 'utf8'));
  if (findings.length === 0) continue;
  counts[relative] = findings.length;
  details.push({ file: relative, findings });
}

const regressions = [];
for (const [file, count] of Object.entries(counts)) {
  const allowed = baseline[file] ?? 0;
  if (count > allowed) regressions.push({ file, recorded: allowed, found: count });
}

const recordedTotal = Object.values(baseline).reduce((sum, n) => sum + n, 0);
const foundTotal = Object.values(counts).reduce((sum, n) => sum + n, 0);

const result = {
  schema: 'ui-doc.nesting_step_audit.v1',
  status: regressions.length === 0 ? 'pass' : 'needs_revision',
  files_with_findings: Object.keys(counts).length,
  findings_total: foundTotal,
  recorded_total: recordedTotal,
  regressions,
};
if (process.argv.includes('--details')) result.details = details;
console.log(JSON.stringify(result, null, 2));
process.exit(regressions.length === 0 ? 0 : 1);
