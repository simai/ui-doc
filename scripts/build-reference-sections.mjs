#!/usr/bin/env node
// Generate the release-derived sections of utility and component pages, as the
// reference page standard (docs/developer/reference-page-standard.md) asks:
//   utility page   — «## Классы» (class → CSS of the family's default variant)
//                    and «## Адаптивность и состояния» (the variant prefixes);
//   component page — «## Классы» (block, parts, modifiers, sizes from its CSS).
// Pages hand-wrote these and drifted: seven layout pages gave breakpoints the
// release never had. Only pages enrolled in config/reference-pages.json are
// written; the rest wait for their migration.
//
// The release is read from git objects at the lock's ui commit, so the result
// does not depend on what the ui checkout holds (../ui or SIMAI_UI_REPO).
//
// Usage: node scripts/build-reference-sections.mjs [--check]

import {execFileSync} from 'node:child_process';
import {existsSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checkOnly = process.argv.includes('--check');
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const lock = readJson(join(root, 'simai-framework.lock.json'));
const settings = readJson(join(root, 'config/reference-pages.json'));
const commit = lock.runtime.ui.commit;
const uiRepo = process.env.SIMAI_UI_REPO || resolve(root, '../ui');
if (!existsSync(join(uiRepo, '.git'))) {
  if (checkOnly) {
    console.log(JSON.stringify({schema: 'ui-doc.reference_sections.v1', status: 'skipped_no_sources'}, null, 2));
    process.exit(0);
  }
  console.error(`no ui checkout at ${uiRepo}; set SIMAI_UI_REPO`);
  process.exit(2);
}
const show = (path) => {
  try {
    return execFileSync('git', ['-C', uiRepo, 'show', `${commit}:${path}`], {encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'ignore']});
  } catch {
    return null;
  }
};
const tree = (path) => {
  try {
    return execFileSync('git', ['-C', uiRepo, 'ls-tree', '--name-only', `${commit}:${path}`], {encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore']}).split('\n').filter(Boolean);
  } catch {
    return [];
  }
};

// The change journal at the release's ui-source revision names the class
// modifiers that only stay for compatibility (sf-button--ghost → --link, and
// the status words danger/clear → error/neutral).
const pair = lock.runtime.pair_id;
const releaseLock = JSON.parse(show(`contracts/releases/${pair}.lock.json`)
  ?? execFileSync('git', ['-C', uiRepo, 'show', `HEAD:contracts/releases/${pair}.lock.json`], {encoding: 'utf8'}));
const sourceRepo = process.env.SIMAI_UI_SOURCE_REPO || resolve(root, '../ui-source');
let journal = {records: []};
try {
  journal = JSON.parse(execFileSync('git', ['-C', sourceRepo, 'show', `${releaseLock.build_inputs.source.commit}:contracts/changes/journal.json`], {encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore']}));
} catch {
  if (checkOnly) {
    console.log(JSON.stringify({schema: 'ui-doc.reference_sections.v1', status: 'skipped_no_sources'}, null, 2));
    process.exit(0);
  }
  console.error(`no ui-source checkout with the journal at ${sourceRepo}; set SIMAI_UI_SOURCE_REPO`);
  process.exit(2);
}
const legacyModifiers = (block, present) => {
  const out = new Map();
  for (const record of journal.records) {
    for (const item of record.items ?? []) {
      if (!item.from || !item.to) continue;
      if (record.kind === 'class' && item.from.startsWith(`${block}--`)) out.set(item.from, item.to);
      if (record.kind === 'value' && item.attribute === 'status' && (!item.component || item.component === block)) {
        const from = `${block}--${item.from}`;
        const to = `${block}--${item.to}`;
        if (present.has(from) && present.has(to)) out.set(from, to);
      }
    }
  }
  return out;
};

// ---- CSS ----------------------------------------------------------------------

const unescape = (name) => name.replace(/\\(.)/gu, '$1');
// Flat rules with their enclosing @media condition: enough for the generated
// sheets, which hold one level of @layer and at most one @media.
const rules = (css) => {
  const out = [];
  const stack = [];
  let buffer = '';
  for (const char of css.replace(/\/\*[\s\S]*?\*\//gu, '')) {
    if (char === '{') {
      stack.push(buffer.trim());
      buffer = '';
    } else if (char === '}') {
      const head = stack.pop();
      if (head !== undefined && !head.startsWith('@') && buffer.trim()) {
        const media = stack.find((item) => item.startsWith('@media')) ?? null;
        out.push({selector: head, body: buffer.trim(), media});
      }
      buffer = '';
    } else {
      buffer += char;
    }
  }
  return out;
};
const declarations = (body) => body.split(';').map((item) => item.trim()).filter(Boolean).join('; ');
const firstClass = (selector) => {
  const match = selector.match(/\.((?:[a-zA-Z0-9_-]|\\.)+)/u);
  return match ? unescape(match[1]) : null;
};
const code = (text) => `\`${String(text).replace(/\|/gu, '\\|')}\``;

// ---- utility sections -------------------------------------------------------------

const STATES = {
  hover: 'при наведении указателя',
  focus: 'при фокусе',
  'focus-visible': 'при фокусе с клавиатуры',
  'focus-within': 'когда фокус внутри элемента',
  active: 'при нажатии',
  disabled: 'у недоступного элемента',
  'group-hover': 'при наведении на родителя с классом `group`',
};

const utilityClasses = (families) => {
  // One row per class. A class the sheet declares several times (a logical
  // property plus physical LTR/RTL fallbacks) is shown by its own selector
  // `.name` when it has one: that is the rule a reader relies on.
  const byClass = new Map();
  for (const family of families) {
    const css = show(`distr/utility/${family}/default/css/default.css`);
    if (!css) throw new Error(`no default variant for utility family ${family}`);
    for (const {selector, body} of rules(css)) {
      for (const part of selector.split(',').map((item) => item.trim())) {
        const name = firstClass(part);
        if (!name) continue;
        const plain = unescape(part) === `.${name}`;
        const known = byClass.get(name);
        const css = unescape(declarations(body));
        if (!known) byClass.set(name, {css: plain ? css : css, selector: plain ? null : unescape(part), plain});
        else if (plain && !known.plain) byClass.set(name, {css, selector: null, plain: true});
        else if (plain && known.plain && !known.css.includes(css)) known.css = `${known.css}; ${css}`;
      }
    }
  }
  // A run of classes that differ in one value, and whose CSS differs in that
  // same value, is one row: `radius-top-{значение}` with the values listed.
  // The value may be any dash segment of the name (`color-on-{значение}-container`);
  // each class joins the largest run it can, and runs shorter than three stay rows.
  const candidates = new Map();
  const count = new Map();
  // A short family reads better class by class; folding pays off past twenty.
  const fold = byClass.size > 20;
  for (const [name, entry] of byClass) {
    if (entry.selector || !fold) continue;
    const segments = name.split('-');
    const keys = [];
    for (let index = 1; index < segments.length; index += 1) {
      const value = segments[index];
      if (!value || !entry.css.includes(value)) continue;
      const nameTemplate = [...segments.slice(0, index), '{значение}', ...segments.slice(index + 1)].join('-');
      const cssTemplate = entry.css.split(value).join('{значение}');
      const key = `${nameTemplate}\u0000${cssTemplate}`;
      keys.push({key, value, nameTemplate, cssTemplate});
      count.set(key, (count.get(key) ?? 0) + 1);
    }
    candidates.set(name, keys);
  }
  const rows = [];
  const groups = new Map();
  for (const [name, entry] of byClass) {
    const best = (candidates.get(name) ?? []).filter(({key}) => count.get(key) >= 3)
      .sort((a, b) => count.get(b.key) - count.get(a.key))[0];
    if (best) {
      const group = groups.get(best.key) ?? {nameTemplate: best.nameTemplate, cssTemplate: best.cssTemplate, values: []};
      group.values.push(best.value);
      if (!groups.has(best.key)) {
        groups.set(best.key, group);
        rows.push({group});
      }
      continue;
    }
    rows.push({name, entry});
  }
  const lines = ['| Класс | CSS | Значения |', '|:---|:---|:---|'];
  for (const row of rows) {
    if (row.group && row.group.values.length >= 3) {
      lines.push(`| ${code(row.group.nameTemplate)} | ${code(row.group.cssTemplate)} | ${row.group.values.map(code).join(', ')} |`);
    } else if (row.group) {
      for (const value of row.group.values) {
        lines.push(`| ${code(row.group.nameTemplate.replace('{значение}', value))} | ${code(row.group.cssTemplate.split('{значение}').join(value))} | — |`);
      }
    } else {
      const shown = row.entry.selector ? ` (${code(row.entry.selector)})` : '';
      lines.push(`| ${code(row.name)}${shown} | ${code(row.entry.css)} | — |`);
    }
  }
  return lines;
};

const utilityVariants = (families) => {
  const seen = new Map();
  for (const family of families) {
    for (const variant of tree(`distr/utility/${family}`).filter((name) => name !== 'default')) {
      const css = show(`distr/utility/${family}/${variant}/css/${variant}.css`);
      if (!css) continue;
      const first = rules(css).find(({selector}) => firstClass(selector));
      if (!first) continue;
      const name = firstClass(first.selector);
      const prefix = name.includes(':') ? name.slice(0, name.lastIndexOf(':') + 1) : `${variant}:`;
      const width = first.media?.match(/min-width:\s*([0-9.]+(?:px|rem|em))/u)?.[1];
      const meaning = width
        ? `при ширине окна от ${width}`
        : (STATES[prefix.slice(0, -1)] ?? `в состоянии ${code(prefix.slice(0, -1))}`);
      if (!seen.has(prefix)) seen.set(prefix, {meaning, example: name, width: width ? parseFloat(width) : null});
    }
  }
  if (seen.size === 0) return null;
  const ordered = [...seen].sort(([, a], [, b]) => (a.width ?? 1e9) - (b.width ?? 1e9));
  return [
    'Префикс применяет класс только при условии; без префикса класс действует всегда. Префиксы ширины срабатывают от указанной ширины и шире.',
    '',
    '| Префикс | Когда действует | Пример |',
    '|:---|:---|:---|',
    ...ordered.map(([prefix, {meaning, example}]) => `| ${code(prefix)} | ${meaning} | ${code(example)} |`),
  ];
};

// ---- component section -------------------------------------------------------------

const componentClasses = (component, block) => {
  const css = show(`distr/component/${component}/css/${component}.css`);
  if (!css) throw new Error(`no stylesheet for component ${component}`);
  const names = new Set();
  for (const {selector} of rules(css)) {
    for (const match of selector.matchAll(/\.((?:[a-zA-Z0-9_-]|\\.)+)/gu)) {
      const name = unescape(match[1]);
      // An escaped selector inside an attribute (`:has(.x\\[class*…\\])`) is not a
      // class a reader writes; a class name holds letters, digits, -, _ and /.
      if (!/^[a-z0-9_/-]+$/u.test(name)) continue;
      if (name === block || name.startsWith(`${block}-`)) names.add(name);
    }
  }
  const sorted = [...names].sort();
  const sizes = sorted.filter((name) => name.startsWith(`${block}--size-`));
  const legacy = legacyModifiers(block, names);
  const modifiers = sorted.filter((name) => name.startsWith(`${block}--`) && !sizes.includes(name) && !legacy.has(name));
  const parts = sorted.filter((name) => name !== block && !name.startsWith(`${block}--`));
  const row = (label, list) => (list.length ? [`| ${label} | ${list.map(code).join(', ')} |`] : []);
  return [
    '| Что | Классы |',
    '|:---|:---|',
    ...row('Блок', names.has(block) ? [block] : []),
    ...row('Части', parts),
    ...row('Модификаторы', modifiers),
    ...row('Размеры', sizes),
    ...(legacy.size ? [`| Устаревшие | ${[...legacy].sort().map(([from, to]) => `${code(from)} → ${code(to)}`).join(', ')} |`] : []),
  ];
};

// ---- writing ----------------------------------------------------------------------

const ORDER = {
  utility: ['Пример', 'Классы', 'Адаптивность и состояния', 'Применение', 'Ограничения', 'См. также'],
  component: ['Пример', 'Разметка', 'Варианты', 'Состояния', 'Доступность', 'JavaScript', 'Классы', 'См. также'],
};
const NOTE = 'Раздел собран из CSS выпуска и обновляется вместе с выпуском.';

const setSection = (text, kind, heading, body) => {
  const [head, ...sections] = text.split(/^(?=## )/mu);
  const titleOf = (section) => section.match(/^## (.+)$/mu)?.[1].trim();
  const content = body === null ? null : `## ${heading}\n\n${NOTE}\n\n${body.join('\n')}\n\n`;
  const index = sections.findIndex((section) => titleOf(section) === heading);
  if (index >= 0) {
    if (content === null) sections.splice(index, 1);
    else sections[index] = content;
  } else if (content !== null) {
    const order = ORDER[kind];
    const after = sections.findIndex((section) => order.indexOf(titleOf(section)) > order.indexOf(heading));
    sections.splice(after === -1 ? sections.length : after, 0, content);
  }
  return `${head}${sections.join('')}`.replace(/\n{3,}/gu, '\n\n').replace(/\n*$/u, '\n');
};

const changed = [];
for (const [page, entry] of Object.entries(settings.pages)) {
  const path = join(root, 'content/ru', page);
  const current = readFileSync(path, 'utf8');
  let next = current;
  if (entry.kind === 'utility') {
    next = setSection(next, 'utility', 'Классы', utilityClasses(entry.families));
    next = setSection(next, 'utility', 'Адаптивность и состояния', utilityVariants(entry.families));
  } else if (entry.kind === 'component') {
    next = setSection(next, 'component', 'Классы', componentClasses(entry.component, entry.block));
  }
  if (next !== current) {
    changed.push(page);
    if (!checkOnly) writeFileSync(path, next);
  }
}
const result = {
  schema: 'ui-doc.reference_sections.v1',
  release: lock.runtime.pair_id,
  status: changed.length === 0 ? 'pass' : (checkOnly ? 'needs_revision' : 'written'),
  pages: Object.keys(settings.pages).length,
  changed,
};
console.log(JSON.stringify(result, null, 2));
if (checkOnly && changed.length) process.exit(1);
