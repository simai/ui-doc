#!/usr/bin/env node
// Generate the «Типы свойств» table of the field renderers page
// (content/ru/guide/smart-components/field-renderers.md) from the pinned
// release, so the list of property types, their variants, their parameters and
// the four modes cannot drift from what the Framework draws.
//
// The release publishes the same list at runtime as SF.fieldRenderers.registry:
// PROPERTY_TYPES from src/smart/field-renderers/registry.js, each entry with the
// modes the renderer maps hold for it (propertyModes → modesOf). This script
// computes it the same way without a browser:
//   - registry.js is read from ui-source at SOURCE_REVISION and imported as a
//     module (it has no imports), which gives PROPERTY_TYPES and modesOf;
//   - the keys of VIEW_RENDERERS, EDIT_RENDERERS, CELL_RENDERERS and
//     FILTER_RENDERERS are parsed from index.js at the same revision, and the
//     modes are the release's own modesOf over those keys;
//   - the built bundle at UI_RUNTIME_REVISION (ui distr/smart/field-renderers)
//     must hold the same four maps and every type id, or the script fails: the
//     source and the distribution the site serves have to agree.
// Both revisions are the constants of scripts/materialize-framework-runtime.php,
// read from git objects, never from a working tree.
//
// The section is everything under «## Типы свойств» up to the next «## »
// heading; the rest of the page is written by hand.
//
// Usage: node scripts/build-property-types-reference.mjs [--check]
//   --check  fails when the page differs from what the release says.
// Repositories: SIMAI_UI_SOURCE_ROOT (default ../ui-source) and SIMAI_UI_ROOT
// (default ../ui).

import {execFileSync} from 'node:child_process';
import {existsSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checkOnly = process.argv.includes('--check');
const schema = 'ui-doc.property_types_reference.v1';
const page = 'content/ru/guide/smart-components/field-renderers.md';
const heading = '## Типы свойств';

const pin = readFileSync(join(root, 'scripts/materialize-framework-runtime.php'), 'utf8');
const pinned = (name) => {
  const match = pin.match(new RegExp(`const ${name} = '([0-9a-f]{40})'`));
  if (!match) throw new Error(`pin unreadable: ${name}`);
  return match[1];
};
const githubRoot = resolve(root, '..');
const sourceRoot = process.env.SIMAI_UI_SOURCE_ROOT || join(githubRoot, 'ui-source');
const uiRoot = process.env.SIMAI_UI_ROOT || process.env.DOCARA_SIMAI_UI_ROOT || join(githubRoot, 'ui');
const sourceRevision = pinned('SOURCE_REVISION');
const runtimeRevision = pinned('UI_RUNTIME_REVISION');

if (!existsSync(join(sourceRoot, '.git')) || !existsSync(join(uiRoot, '.git'))) {
  if (checkOnly) {
    console.log(JSON.stringify({schema, status: 'skipped_no_sources'}, null, 2));
    process.exit(0);
  }
  console.error('no ui-source or ui checkout; set SIMAI_UI_SOURCE_ROOT and SIMAI_UI_ROOT');
  process.exit(2);
}

const show = (repository, revision, path) => execFileSync(
  'git', ['-C', repository, 'show', `${revision}:${path}`],
  {encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'pipe']},
);
const fail = (reason, details = {}) => {
  console.error(JSON.stringify({schema, status: 'fail', reason, ...details}, null, 2));
  process.exit(1);
};

const registrySource = show(sourceRoot, sourceRevision, 'src/smart/field-renderers/registry.js');
const indexSource = show(sourceRoot, sourceRevision, 'src/smart/field-renderers/index.js');
const bundle = show(uiRoot, runtimeRevision, 'distr/smart/field-renderers/js/field-renderers.js');

const registry = await import(`data:text/javascript;base64,${Buffer.from(registrySource).toString('base64')}`);
const {PROPERTY_TYPES, modesOf} = registry;
if (!Array.isArray(PROPERTY_TYPES) || !PROPERTY_TYPES.length || typeof modesOf !== 'function') {
  fail('registry.js no longer exports PROPERTY_TYPES and modesOf');
}

// The keys of one renderer map: `const NAME = {` up to the line that closes it.
// Every line inside is a comment, a blank or `key: renderer,`; anything else
// fails the script rather than being skipped, so a map written differently is
// noticed instead of read short.
const mapKeys = (text, name, where) => {
  const start = text.search(new RegExp(`^(?:export )?const ${name} = \\{\\s*$`, 'mu'));
  if (start < 0) fail(`${name} not found`, {where});
  const lines = text.slice(start).split('\n').slice(1);
  const keys = [];
  for (const line of lines) {
    if (/^\};/u.test(line)) return keys;
    const bare = line.trim();
    if (bare === '' || bare.startsWith('//')) continue;
    const match = bare.match(/^(?:'([^']+)'|"([^"]+)"|([A-Za-z_$][\w$]*))\s*:\s*[A-Za-z_$][\w$]*,?$/u);
    if (!match) fail(`${name}: unexpected line`, {where, line});
    keys.push(match[1] ?? match[2] ?? match[3]);
  }
  return fail(`${name} is not closed`, {where});
};

const names = {view: 'VIEW_RENDERERS', edit: 'EDIT_RENDERERS', cell: 'CELL_RENDERERS', filter: 'FILTER_RENDERERS'};
const maps = {};
for (const [mode, name] of Object.entries(names)) {
  const source = mapKeys(indexSource, name, 'ui-source index.js');
  const built = mapKeys(bundle, name, 'ui distr field-renderers.js');
  if (!source.length) fail(`${name} is empty`);
  if ([...source].sort().join() !== [...built].sort().join()) {
    fail(`${name} differs between the source and the distribution`, {source, built});
  }
  maps[mode] = Object.fromEntries(source.map((key) => [key, true]));
}
for (const entry of PROPERTY_TYPES) {
  if (!bundle.includes(`type: '${entry.type}'`)) fail('a type is missing from the distribution', {type: entry.type});
}

const code = (value) => `\`${value}\``;
const view = {true: 'есть', false: 'нет'};
const own = {own: 'своё', text: 'текстовый'};
const rows = PROPERTY_TYPES.map((entry) => {
  const modes = modesOf(entry.type, maps);
  const variants = (entry.variants ?? []).map((variant) => `${code(variant.id)} — ${variant.label.ru}`).join(', ') || '—';
  const params = (entry.params ?? []).map(code).join(', ') || '—';
  return `| ${code(entry.type)} | ${entry.label.ru} | ${variants} | ${params} | ${view[modes.view]} | ${view[modes.edit]} | ${own[modes.cell]} | ${own[modes.filter]} |`;
});

const section = `${heading}

Таблица собирается из реестра выпуска — того же списка, что страница получает
в \`SF.fieldRenderers.registry\`: \`node scripts/build-property-types-reference.mjs\`.
Правка руками разойдётся с выпуском при первой же проверке.

Столбцы режимов: «Просмотр» и «Правка» — есть ли у типа своё отображение и свой
элемент правки; «Ячейка» и «Фильтр» — «своё», когда у набора есть для типа своя
функция, и «текстовый», когда её нет: ячейка показывает значение как есть, а
фильтр ищет по тексту.

| Тип | Название | Варианты | Параметры | Просмотр | Правка | Ячейка | Фильтр |
|:---|:---|:---|:---|:---|:---|:---|:---|
${rows.join('\n')}

`;

const current = readFileSync(join(root, page), 'utf8');
const begin = current.indexOf(`\n${heading}\n`);
if (begin < 0) fail(`${heading} not found on the page`, {page});
const after = current.slice(begin + 1 + heading.length);
const next = after.search(/^## /mu);
const end = next < 0 ? current.length : begin + 1 + heading.length + next;
const written = `${current.slice(0, begin + 1)}${section}${current.slice(end)}`.replace(/\n+$/u, '\n');

if (checkOnly) {
  if (written !== current) {
    fail('the page differs from the release registry; run node scripts/build-property-types-reference.mjs', {page});
  }
  console.log(JSON.stringify({schema, status: 'pass', types: PROPERTY_TYPES.length, source: sourceRevision, runtime: runtimeRevision}, null, 2));
  process.exit(0);
}
writeFileSync(join(root, page), written);
console.log(JSON.stringify({schema, status: 'written', page, types: PROPERTY_TYPES.length}, null, 2));
