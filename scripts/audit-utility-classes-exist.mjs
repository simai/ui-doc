#!/usr/bin/env node
// Every class a utility page names must exist in the built utilities. The pages
// are written by hand and the build moves; they drifted apart quietly — the
// scroll-padding page still described the size system that was replaced, so a
// reader copying from it wrote classes that do nothing.
//
// The built sheet comes from the Framework distribution: --core-root=/absolute/path
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
  || (fs.existsSync(path.join(sibling, 'distr/core/css/utility.full.css')) ? sibling : null);

const emit = (result) => {
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.findings.length === 0 ? 0 : 1);
};

if (coreRoot === null) {
  emit({ schema: 'ui-doc.utility_class_existence_audit.v1', status: 'skipped_no_core_root', pages_checked: 0, findings: [] });
}

// Some families a utility page documents are emitted by the core sheet rather
// than the utility one — the text roles and the link modifiers live there — so
// both sheets are the surface a reader can rely on.
const css = ['distr/core/css/core.css', 'distr/core/css/utility.full.css']
  .map((file) => fs.readFileSync(path.join(coreRoot, file), 'utf8'))
  .join('\n');
// A class in the sheet may carry escaped slashes (`.scroll-p-1\/2`); compare on
// the name a page would write.
const declared = new Set(
  [...css.matchAll(/\.((?:[a-z0-9]|-|\\\/)+)(?=[\s,{:.>+~])/gu)].map(([, name]) => name.replace(/\\/g, '')),
);

// Pages that explain the move from the old size system quote the retired names on
// purpose; they document history, not the current surface.
const HISTORICAL = /from-old-to-new|sizes-from-old-to-new/u;

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : (entry.name.endsWith('.md') ? [full] : []);
});

// Discrepancies already reviewed and waiting on an owner's decision: a class is
// either added to the Framework or the promise is taken off the page. They are
// listed with a reason so they stay visible; anything new still fails.
const knownPath = path.join(projectRoot, 'contracts/documentation/known-missing-utility-classes.json');
const known = new Set(
  fs.existsSync(knownPath)
    ? JSON.parse(fs.readFileSync(knownPath, 'utf8')).entries.map((entry) => `${entry.page}|${entry.class}`)
    : [],
);

const findings = [];
let checked = 0;
for (const page of walk(path.join(projectRoot, 'content')).sort()) {
  const relative = path.relative(projectRoot, page);
  if (!relative.includes('/utilities/') || HISTORICAL.test(relative)) continue;
  checked += 1;
  const text = fs.readFileSync(page, 'utf8');
  const named = new Set();
  // A table headed "Старый класс" maps retired names onto current ones; its first
  // column is history, not a promise. Tracking the last header row is enough to
  // tell the two apart.
  let migrationTable = false;
  for (const line of text.split('\n')) {
    if (!line.startsWith('|')) {
      migrationTable = false;
      continue;
    }
    const first = line.split('|')[1]?.trim().replace(/`/gu, '') ?? '';
    if (/^Стар/iu.test(first)) {
      migrationTable = true;
      continue;
    }
    if (migrationTable) continue;
    // A utility class carries a hyphen or a digit; a bare word in that column is
    // a family name or an element, not something a reader can write.
    if (/^[a-z][a-z0-9-]*(?:-[0-9]+(?:\/[0-9]+)?)?$/u.test(first) && /[-0-9]/u.test(first)) {
      named.add(first);
    }
  }
  const missing = [...named]
    .filter((name) => !declared.has(name) && !known.has(`${relative.replace('content/', '')}|${name}`))
    .sort();
  if (missing.length > 0) findings.push({ page: relative, named: named.size, missing });
}

emit({
  schema: 'ui-doc.utility_class_existence_audit.v1',
  status: findings.length === 0 ? 'pass' : 'needs_revision',
  pages_checked: checked,
  known_pending: known.size,
  missing_total: findings.reduce((sum, f) => sum + f.missing.length, 0),
  findings,
});
