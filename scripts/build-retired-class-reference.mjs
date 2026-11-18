#!/usr/bin/env node
// Generate the «Прежние имена классов» section of the update guide from the
// pair's one table of retired class names (src/core/js/retired-classes.table.js,
// owner decision C187 (1)). A retired class is not described beside the
// current ones (owner rule D03): the utility and component pages teach the
// names to write, and this section is the one place that lists every name the
// release retires, what to write instead and until when it keeps drawing.
//
// The table is read from git objects of the ui-source checkout at the source
// revision the release was built from, as build-token-reference.mjs reads the
// change journal: a checkout moved to a newer source would otherwise turn the
// check red for a site that has not moved.
//
// Usage: node scripts/build-retired-class-reference.mjs [--check]
//   --check  fails when the section on disk differs from what the table says.

import {execFileSync} from 'node:child_process';
import {readFileSync, writeFileSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = process.env.SIMAI_UI_SOURCE_ROOT ?? resolve(root, '../ui-source');
const sourceCommit = JSON.parse(readFileSync(resolve(root, 'contracts/generated/framework-contract-registry.json'), 'utf8'))
  .compatibility?.build_inputs?.source?.commit;
const page = 'content/ru/guide/connection/updating.md';
const heading = '## Прежние имена классов';

let table;
try {
  const text = execFileSync('git', ['-C', sourceRoot, 'show', `${sourceCommit}:src/core/js/retired-classes.table.js`],
    {encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'ignore']});
  // The module is data only: one default export of a JSON-shaped object.
  table = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
} catch {
  console.error(JSON.stringify({
    schema: 'ui-doc.retired_class_reference.v1',
    status: 'fail',
    reason: 'the retired-class table was not read: set SIMAI_UI_SOURCE_ROOT to a ui-source checkout',
  }));
  process.exit(1);
}

const code = (value) => `\`${value}\``;
const instead = (to) => {
  if (to === null || to === undefined) return 'без замены';
  if (typeof to === 'object') return to.to ? code(to.to) : 'без замены';
  return to.split(' ').map(code).join(' ');
};

const rows = [];
for (const record of table.records) {
  const until = record.remove_after ?? '';
  const decision = record.decision ?? '';
  for (const [name, to] of Object.entries(record.names ?? {})) {
    rows.push([code(name), instead(to), until, decision]);
  }
  for (const pattern of record.patterns ?? []) {
    const to = /\$\d/u.test(pattern.to ?? '') ? `${code(pattern.to.replace(/\$\d/gu, '…'))} той же ступени` : instead(pattern.to);
    rows.push([`${code(pattern.from)} (семейство)`, to, until, decision]);
  }
  for (const [sheet, to] of Object.entries(record.sheets ?? {})) {
    rows.push([`все классы модуля ${code(sheet)}`, instead(to), until, decision]);
  }
}

const section = [
  heading,
  '',
  'Классы, которые выпуск убирает. Прежний класс рисует то же, что рисовал, до даты в третьем столбце,'
    + ' а первое использование каждого имени на странице Loader записывает в `SF.deprecations`.'
    + ' В новой разметке пишите имя из второго столбца; «без замены» значит, что задача ушла из утилит'
    + ' (страница утилиты говорит, чем её решать). Под `md:`, `hover:` и другими условиями замена та же.'
    + ' Страницы утилит и компонентов прежних имён не описывают.'
    + ' Таблица собрана из таблицы прежних классов выпуска (`node scripts/build-retired-class-reference.mjs`).',
  '',
  '| Прежнее имя | Что писать | Работает до | Решение |',
  '| :--- | :--- | :--- | :--- |',
  ...rows.map((row) => `| ${row.join(' | ')} |`),
  '',
].join('\n');

const updating = readFileSync(resolve(root, page), 'utf8');
const next = (() => {
  const begin = updating.indexOf(`\n${heading}\n`);
  if (begin < 0) {
    const anchor = updating.indexOf('\n## Связь с другими частями\n');
    if (anchor < 0) throw new Error(`${page}: no place for ${heading}`);
    return `${updating.slice(0, anchor + 1)}${section}\n${updating.slice(anchor + 1)}`;
  }
  const after = begin + 1 + heading.length + 1;
  const end = updating.slice(after).search(/^## /mu);
  return `${updating.slice(0, begin + 1)}${section}${end < 0 ? '' : `\n${updating.slice(after + end)}`}`;
})();

if (process.argv.includes('--check')) {
  if (next !== updating) {
    console.error(JSON.stringify({schema: 'ui-doc.retired_class_reference.v1', status: 'fail', page,
      reason: 'the section differs from the release table: run node scripts/build-retired-class-reference.mjs'}));
    process.exit(1);
  }
  console.log(JSON.stringify({schema: 'ui-doc.retired_class_reference.v1', status: 'pass', rows: rows.length}));
} else {
  writeFileSync(resolve(root, page), next);
  console.log(JSON.stringify({schema: 'ui-doc.retired_class_reference.v1', status: 'written', page, rows: rows.length}));
}
