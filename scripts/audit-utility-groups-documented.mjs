#!/usr/bin/env node
// The mirror of audit-utility-classes-exist: that one holds a page to the
// build, this one holds the build to the pages. A utility group can ship and
// leave no trace in the reference — the elevation group did, and the only place
// naming it was a paragraph in a guide, where nobody looking for a class in the
// utilities section would find it. Nothing complained, because the existing
// check only ever reads in the other direction.
//
// The built sheets come from the Framework distribution: --core-root=/absolute/path
// (or SIMAI_UI_CORE_ROOT), and without it the check reports that it was skipped.
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const value = (name) => args.find((a) => a.startsWith(`${name}=`))?.slice(name.length + 1);
const projectRoot = path.resolve(import.meta.dirname, '..');
const sibling = path.resolve(projectRoot, '../ui');
const coreRoot = value('--core-root')
  || process.env.SIMAI_UI_CORE_ROOT
  || (fs.existsSync(path.join(sibling, 'distr/utility')) ? sibling : null);

const emit = (result) => {
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.findings.length === 0 ? 0 : 1);
};

const SCHEMA = 'ui-doc.utility_group_documentation_audit.v1';

if (coreRoot === null) {
  emit({ schema: SCHEMA, status: 'skipped_no_core_root', groups_checked: 0, findings: [] });
}

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : (entry.name.endsWith('.md') ? [full] : []);
});

// An index page lists its section's pages by title; it names no classes, so it
// cannot stand in for the page a group is missing.
const pages = walk(path.join(projectRoot, 'content/ru/utilities'))
  .filter((file) => path.basename(file) !== 'index.md');
const text = pages.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

// Same shape the forward audit reads, minus the @layer statement, whose
// `sf.utilities` would otherwise look like a class named `utilities`.
// A variant class escapes its separators in the sheet — `.cq-sm\:block`,
// `.scroll-p-1\/2` — and a page writes them plain.
const classesOf = (css) => new Set(
  [...css.replace(/@layer[^{]*\{/gu, '').matchAll(/\.((?:[a-z0-9]|-|\\[:/])+)(?=[\s,{:.>+~])/gu)]
    .map(([, name]) => name.replace(/\\/gu, '')),
);

// A page may name a class outright, or name the family it belongs to:
// `divide-opacity-*` and `shadow-{0...5}` are both promises a reader can act on,
// and most pages are written that way.
const documented = (name) => {
  if (text.includes(name)) return true;
  const parts = name.split('-');
  for (let cut = parts.length - 1; cut >= 1; cut -= 1) {
    const stem = parts.slice(0, cut).join('-');
    if (text.includes(`${stem}-*`) || text.includes(`${stem}-{`)) return true;
  }
  return false;
};

// Groups already reviewed and waiting on an owner's decision: a page is either
// written or the group is retired. Listed with a reason so they stay visible;
// anything new still fails.
const knownPath = path.join(projectRoot, 'contracts/documentation/known-undocumented-utility-groups.json');
const known = new Set(
  fs.existsSync(knownPath)
    ? JSON.parse(fs.readFileSync(knownPath, 'utf8')).entries.map((entry) => entry.group)
    : [],
);

const findings = [];
const unparsed = [];
let checked = 0;
for (const group of fs.readdirSync(path.join(coreRoot, 'distr/utility')).sort()) {
  const sheet = path.join(coreRoot, 'distr/utility', group, 'default/css/default.css');
  if (!fs.existsSync(sheet)) continue;
  const source = fs.readFileSync(sheet, 'utf8');
  const classes = [...classesOf(source)];
  // A group can ship an empty sheet — its classes live elsewhere, or it carries
  // only custom properties — and there is nothing to hold a page to. A sheet
  // with rules whose classes cannot be read is different: that is a hole in
  // this check, and staying quiet about it is how the first gap was missed.
  if (classes.length === 0) {
    if (/\.[a-z]/u.test(source.replace(/@layer[^{]*\{/gu, ''))) unparsed.push(group);
    continue;
  }
  checked += 1;
  if (known.has(group)) continue;
  if (!classes.some(documented)) {
    findings.push({ group, classes: classes.sort().slice(0, 6) });
  }
}

emit({
  schema: SCHEMA,
  status: findings.length === 0 && unparsed.length === 0 ? 'pass' : 'needs_revision',
  groups_checked: checked,
  pages_read: pages.length,
  known_pending: known.size,
  unreadable_sheets: unparsed,
  findings: findings.concat(unparsed.map((group) => ({ group, classes: [], reason: 'sheet_unreadable' }))),
});
