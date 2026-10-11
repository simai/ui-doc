#!/usr/bin/env node
// Every Smart page carries a hand-written table of attributes. The manifest the
// runtime ships is the contract; the table is what a developer reads. They drifted:
// pages kept naming the legacy aliases (`type`, `variant`) as if they were the
// public names, and listed no allowed values, so the docs pointed at deprecated
// words while the component had moved to the named axes.
//
// This check compares the two. It needs the manifests: since release lock v2 they
// ship in the ui release's distr/smart (--ui-root=/absolute/path, or SIMAI_UI_ROOT /
// DOCARA_SIMAI_UI_ROOT), and those of a product component package in the package
// itself (--package-root=/absolute/path, repeatable, or SIMAI_UI_PACKAGE_ROOTS
// separated by `:`): a package output holding smart/ (sf-build --out) or a package
// source folder holding src/smart/ (Larena's larena-ui/components). A separate
// ui-smart checkout (--smart-root, SIMAI_UI_SMART_ROOT) is still read when named.
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const value = (name) => args.find((a) => a.startsWith(`${name}=`))?.slice(name.length + 1);
const projectRoot = path.resolve(import.meta.dirname, '..');
// The manifests live in the Smart repository. It is named explicitly when the
// caller knows where it is, found beside this project when the repositories sit
// side by side, and otherwise the check reports that it could not run rather than
// failing a build that has no way to satisfy it.
const found = (candidate, inner) => (fs.existsSync(path.join(candidate, inner)) ? candidate : null);
const smartRoot = value('--smart-root') || process.env.SIMAI_UI_SMART_ROOT || null;
const uiRoot = value('--ui-root') || process.env.SIMAI_UI_ROOT || process.env.DOCARA_SIMAI_UI_ROOT
  || found(path.resolve(projectRoot, '../ui'), 'distr/smart');
const packageRoots = [
  ...args.filter((a) => a.startsWith('--package-root=')).map((a) => a.slice('--package-root='.length)),
  ...(process.env.SIMAI_UI_PACKAGE_ROOTS || '').split(':').filter(Boolean),
];
if (packageRoots.length === 0) {
  const beside = found(path.resolve(projectRoot, '../larena-ui/components'), 'src/smart');
  if (beside) packageRoots.push(beside);
}
for (const root of [smartRoot, uiRoot, ...packageRoots]) {
  if (root && !path.isAbsolute(root)) {
    console.error('--smart-root, --ui-root and --package-root must be absolute paths');
    process.exit(2);
  }
}
const manifestRoots = smartRoot
  ? [path.join(smartRoot, 'smart')]
  : (uiRoot ? [path.join(uiRoot, 'distr/smart')] : []);
if (manifestRoots.length > 0) {
  for (const root of packageRoots) {
    const smart = ['smart', 'src/smart'].map((inner) => path.join(root, inner)).find((dir) => fs.existsSync(dir));
    if (!smart) {
      console.error(`${root} holds neither smart/ nor src/smart/`);
      process.exit(2);
    }
    manifestRoots.push(smart);
  }
}
if (manifestRoots.length === 0) {
  console.log(JSON.stringify({
    schema: 'ui-doc.smart_attribute_table_audit.v1',
    status: 'skipped_no_smart_root',
    components_checked: 0,
    findings: [],
  }, null, 2));
  process.exit(0);
}

// The three named axes plus the words they replaced.
const AXES = new Set(['status', 'appearance', 'kind']);
// `size` is not an axis, but it drifts the same way: a page kept the words a
// component accepted before the shared ladder, and a reader never saw the steps.
const LADDER = 'size';
const LEGACY = new Set(['type', 'variant']);

const pages = new Map();
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.md')) pages.set(entry.name.slice(0, -3), full);
  }
};
walk(path.join(projectRoot, 'content/ru/smart-components'));

const findings = [];
let checked = 0;
const manifestNames = manifestRoots
  .flatMap((manifestRoot) => fs.readdirSync(manifestRoot).map((name) => [name, manifestRoot]))
  .sort(([a], [b]) => a.localeCompare(b));
for (const [name, manifestRoot] of manifestNames) {
  const manifestPath = path.join(manifestRoot, name, 'smart.manifest.json');
  if (!fs.existsSync(manifestPath)) continue;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const inputs = manifest.inputs?.properties ?? {};
  const axes = Object.keys(inputs).filter((key) => AXES.has(key));
  if (axes.length === 0) continue;
  if (inputs[LADDER]?.enum) axes.push(LADDER);
  const page = pages.get(name) ?? pages.get(name.replace(/s$/, '')) ?? pages.get(`${name}s`);
  if (!page) {
    findings.push({ component: name, code: 'page_missing' });
    continue;
  }
  checked += 1;
  const text = fs.readFileSync(page, 'utf8');
  const relative = path.relative(projectRoot, page);
  // Two different questions. An axis counts as documented when its name appears,
  // in code style, anywhere in a table row — pages lay their columns out
  // differently. A legacy word counts as presented as public only when a row is
  // *about* it: its first cell is that attribute and nothing else.
  const tableRows = text.split('\n').filter((line) => line.startsWith('|'));
  const mentioned = new Set(
    tableRows.flatMap((row) => [...row.matchAll(/`([a-z-]+)`/gu)].map(([, token]) => token)),
  );
  const defined = tableRows
    .map((row) => row.match(/^\|\s*`([a-z-]+)`\s*\|/u)?.[1])
    .filter(Boolean);
  for (const axis of axes) {
    // The ladder is not an axis: a page may introduce it in prose and still show
    // every step, which is what a reader needs.
    const documented = axis === LADDER ? text.includes(`\`${axis}\``) : mentioned.has(axis);
    if (!documented) {
      findings.push({ component: name, page: relative, code: 'axis_missing', axis });
      continue;
    }
    // An empty string is a real value — it is how a component says it reports
    // nothing — but it cannot be written in code style, so the page says so in
    // words instead.
    const missing = (inputs[axis].enum ?? []).filter((v) => (v === ''
      ? !/пусто|`''`/u.test(text)
      : !text.includes(`\`${v}\``)));
    if (missing.length > 0) {
      findings.push({ component: name, page: relative, code: 'axis_values_missing', axis, missing });
    }
  }
  for (const legacy of defined.filter((attribute) => LEGACY.has(attribute))) {
    findings.push({ component: name, page: relative, code: 'legacy_named_as_public', attribute: legacy });
  }
}

const result = {
  schema: 'ui-doc.smart_attribute_table_audit.v1',
  status: findings.length === 0 ? 'pass' : 'needs_revision',
  components_checked: checked,
  findings,
};
console.log(JSON.stringify(result, null, 2));
process.exit(findings.length === 0 ? 0 : 1);
