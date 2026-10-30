#!/usr/bin/env node
// The documentation's usage record (standard simai.linkage 1.0.0): documentation
// pages are consumers of SIMAI Framework units, so each page records the units it
// shows, with the version and the content hash it was last read against. The
// record is contracts/documentation/unit-usage.json.
//
// What a page uses is read from the page, never restated by hand:
//   - config/reference-pages.json names a component page's component and a
//     utility page's families;
//   - a Smart reference section names its contract (`smart.textarea`);
//   - the page and its example files name the tags they draw (<sf-input>,
//     `sf-input`) and the ports they speak of (simai.property-view-port).
//
// Usage: node scripts/build-unit-usage.mjs [--check] [--write] [--accept <page>]...
//                                          [--out <report.json>]
//   --check   (default) compares the committed record with the pinned releases
//             through ui-builder's reconcile and says which pages moved. It reads
//             and reports: it changes nothing and exits 0. A page's prose is not
//             made true by a new hash, so a repin never accepts on its own.
//   --accept  a page was read against the pinned release: takes its units anew.
//   --write   takes every page anew. For the first record, or after reading all.
//
// The sources are found as the other release-derived scripts find them:
// SIMAI_UI_REPO or ../ui, SIMAI_UI_BUILDER_ROOT or ../ui-builder. Without them
// the check says it could not run, as those scripts do.

import {execFileSync} from 'node:child_process';
import {existsSync, mkdtempSync, readdirSync, readFileSync, statSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const recordPath = join(root, 'contracts/documentation/unit-usage.json');
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const values = (name) => args.flatMap((arg, index) => (arg === name ? [args[index + 1]] : []));

const lock = JSON.parse(readFileSync(join(root, 'simai-framework.lock.json'), 'utf8'));
const pair = lock.runtime.pair_id;
const packageRevision = lock.package_projections?.larena?.source?.revision
  ?? /'revision' => '([0-9a-f]{40})'/u.exec(readFileSync(join(root, 'scripts/materialize-framework-runtime.php'), 'utf8'))?.[1];
const packageId = packageRevision ? `larena-${packageRevision.slice(0, 12)}` : null;

const say = (report) => {
  console.log(JSON.stringify({schema: 'ui-doc.unit_usage.v1', ...report}, null, 2));
};

const uiRepo = process.env.SIMAI_UI_REPO || resolve(root, '..', 'ui');
const builderRoot = process.env.SIMAI_UI_BUILDER_ROOT || resolve(root, '..', 'ui-builder');
const reconcileScript = join(builderRoot, 'scripts/reconcile.mjs');
if (!existsSync(join(uiRepo, '.git')) || !existsSync(reconcileScript)) {
  if (flag('--write') || flag('--accept')) {
    console.error('no ui checkout or no ui-builder beside this one; set SIMAI_UI_REPO and SIMAI_UI_BUILDER_ROOT');
    process.exit(2);
  }
  say({status: 'skipped_no_sources', pair});
  process.exit(0);
}

const scratch = mkdtempSync(join(tmpdir(), 'unit-usage-'));

const frameworkInventory = (id) => {
  const text = execFileSync('git', ['-C', uiRepo, 'cat-file', '-p', `HEAD:contracts/releases/${id}.inventory.json`], {encoding: 'utf8', maxBuffer: 1 << 28});
  const path = join(scratch, `${id}.inventory.json`);
  writeFileSync(path, text);
  return path;
};

// A package's inventory is a release asset of simai/larena-ui, beside its tar.
const packageInventory = async (id) => {
  if (!id) return null;
  const response = await fetch(`https://github.com/simai/larena-ui/releases/download/${id}/package-inventory.json`);
  if (!response.ok) return null;
  const path = join(scratch, `${id}.inventory.json`);
  writeFileSync(path, await response.text());
  return path;
};

const inventoryPaths = [frameworkInventory(pair), await packageInventory(packageId)].filter(Boolean);
const inventories = inventoryPaths.map((path) => JSON.parse(readFileSync(path, 'utf8')));
const units = new Map();
for (const inventory of inventories) {
  for (const unit of inventory.units) {
    units.set(unit.id, {id: unit.id, version: unit.version, content_sha256: unit.content_sha256, source: inventory.source});
  }
}

// ---- what a page uses --------------------------------------------------------

const pagesRoot = join(root, 'content/ru');
const examplesRoot = join(root, 'examples');
const referencePages = JSON.parse(readFileSync(join(root, 'config/reference-pages.json'), 'utf8')).pages;

const walk = (folder) => readdirSync(folder).flatMap((name) => {
  const path = join(folder, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});

const exampleText = (id) => {
  const folder = join(examplesRoot, id);
  if (!existsSync(folder) || !statSync(folder).isDirectory()) return '';
  return walk(folder).map((path) => readFileSync(path, 'utf8')).join('\n');
};

const unitsOfPage = (key, markdown) => {
  const found = new Set();
  const take = (id) => {
    if (units.has(id)) found.add(id);
  };
  const declared = referencePages[key];
  if (declared?.kind === 'component') take(`component.${declared.component}`);
  for (const family of declared?.families ?? []) take(`utility.${family}`);

  const examples = [...markdown.matchAll(/^:::example\s+\{id="([^"]+)"/gmu)].map((match) => exampleText(match[1]));
  const text = [markdown, ...examples].join('\n');
  for (const match of text.matchAll(/`(smart\.[a-z0-9-]+)`/gu)) take(match[1]);
  for (const match of text.matchAll(/<sf-([a-z0-9-]+)/gu)) take(`smart.${match[1]}`);
  for (const match of text.matchAll(/`sf-([a-z0-9-]+)`/gu)) take(`smart.${match[1]}`);
  for (const match of text.matchAll(/\b(simai\.[a-z-]+-port)\b/gu)) take(`port.${match[1]}`);
  return [...found].sort();
};

const place = (path) => `content/ru/${path}`;
const pages = new Map();
for (const path of walk(pagesRoot).filter((file) => file.endsWith('.md'))) {
  const key = relative(pagesRoot, path);
  const used = unitsOfPage(key, readFileSync(path, 'utf8'));
  if (used.length) pages.set(place(key), used);
}

const entry = (name, ids) => ({place: name, units: ids.map((id) => units.get(id))});

const sources = () => inventories.map((inventory) => ({
  source: inventory.source,
  release: inventory.release,
  revision: inventory.revision,
  brought_up_on: new Date().toISOString().slice(0, 10),
}));

const writeRecord = (places) => {
  const record = {
    schema: 'simai.framework.unit-usage',
    schema_version: 1,
    consumer: {id: 'simai/ui-doc', kind: 'docs', title: 'SIMAI Framework documentation'},
    sources: sources(),
    places: places.sort((a, b) => a.place.localeCompare(b.place)),
  };
  writeFileSync(recordPath, `${JSON.stringify(record, null, 2)}\n`);
};

if (flag('--write')) {
  writeRecord([...pages].map(([name, ids]) => entry(name, ids)));
  say({status: 'written', pair, package: packageId, places: pages.size});
  process.exit(0);
}

if (!existsSync(recordPath)) {
  say({status: 'no_record', pair, hint: 'node scripts/build-unit-usage.mjs --write takes the first record'});
  process.exit(0);
}

const record = JSON.parse(readFileSync(recordPath, 'utf8'));

const accepted = values('--accept');
if (accepted.length) {
  const places = new Map(record.places.map((one) => [one.place, one]));
  for (const name of accepted) {
    const key = name.startsWith('content/ru/') ? name : place(name);
    const ids = pages.get(key);
    if (!ids) {
      console.error(`${name}: no such page, or it uses no unit`);
      process.exit(2);
    }
    places.set(key, entry(key, ids));
  }
  writeRecord([...places.values()]);
  say({status: 'accepted', pair, package: packageId, pages: accepted.length});
  process.exit(0);
}

// ---- the check ---------------------------------------------------------------

const reportPath = join(scratch, 'report.json');
// The inventories the record was brought up to let reconcile follow the shared
// foundations: a changed colour token marks every page drawn with it, even when
// no component's version moved.
const since = (await Promise.all(record.sources.map(({release}) => (
  release.startsWith('ui-') ? frameworkInventory(release) : packageInventory(release))))).filter(Boolean);
execFileSync('node', [reconcileScript, 'reconcile', '--record', recordPath,
  ...inventoryPaths.flatMap((path) => ['--inventory', path]),
  ...since.flatMap((path) => ['--since', path]), '--out', reportPath, '--json'], {stdio: 'ignore'});
const report = JSON.parse(readFileSync(reportPath, 'utf8'));

const recorded = new Map(record.places.map((one) => [one.place, one.units.map((unit) => unit.id).sort()]));
const notRecorded = [...pages.keys()].filter((name) => !recorded.has(name));
const noLongerUses = [...recorded.keys()].filter((name) => !pages.has(name));
const unitsMoved = [...pages].filter(([name, ids]) => recorded.has(name) && recorded.get(name).join() !== ids.join()).map(([name]) => name);
const behind = report.places.filter((one) => one.status !== 'current');

// A page behind only through a shared foundation says less than a page whose own
// unit changed, so the two are counted apart.
const direct = behind.filter((one) => one.units.some((unit) => unit.status !== 'current' && unit.content_sha256 !== unit.current?.content_sha256));

if (values('--out')[0]) {
  writeFileSync(resolve(values('--out')[0]), `${JSON.stringify({report, notRecorded, noLongerUses, unitsMoved}, null, 2)}\n`);
}

say({
  status: behind.length || notRecorded.length || unitsMoved.length ? 'pages_to_read' : 'current',
  pair,
  package: packageId,
  record_sources: record.sources.map((one) => one.release),
  places: report.places.length,
  totals: report.totals,
  behind: behind.length,
  own_unit_changed: direct.length,
  not_recorded: notRecorded.length,
  uses_other_units_now: unitsMoved.length,
  no_longer_uses_units: noLongerUses.length,
  first_pages_behind: direct.slice(0, 15).map((one) => one.place),
});
