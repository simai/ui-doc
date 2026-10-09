#!/usr/bin/env node
// Generate the table of every token the core declares, except the primitives
// those tokens are built from: the colour ramp, the size ladder and the alpha
// steps each have their own page, and repeating them here would be a second
// copy to keep in step.
//
// Written because the old full description of the Framework carried such a
// list and this documentation had none -- the values were spread across the
// pages that use them, and nothing answered «what tokens are there» (owner,
// 2026-10-09).
//
// Usage: node scripts/build-token-reference.mjs [--check]
//   --check  fails when the page on disk differs from what the core says now.

import {readFileSync, writeFileSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const uiRoot = process.env.DOCARA_SIMAI_UI_ROOT ?? process.env.SIMAI_UI_ROOT;
if (!uiRoot) {
  console.error('DOCARA_SIMAI_UI_ROOT is not set: point it at the ui checkout the core is built in.');
  process.exit(2);
}
const corePath = resolve(uiRoot, 'distr/core/css/core.css');
const css = readFileSync(corePath, 'utf8');
const page = 'content/ru/guide/fundamentals/design-tokens/all-tokens.md';

// A primitive is a step of a ramp: it has no meaning of its own, only a value.
const isPrimitive = (name) => {
  const bare = name.replace('--sf-', '');
  return /^[a-i]\d$/u.test(bare)
    || /^(neutral|primary|secondary|tertiary|success|warning|error|info)-\d+/u.test(bare)
    || /^alpha-\d+$/u.test(bare)
    || bare.includes('--alfa-')
    || ['black', 'white', 'transparent', 'alpha-base'].includes(bare);
};

// The groups a reader looks in, in the order the guide introduces them. A token
// lands in the first group whose test it matches, so the order is the rule.
const GROUPS = [
  ['Цвет: роли поверхности и содержимого', (n) => /^--sf-(surface|on-surface|on-[a-z]+-container|inverse)/u.test(n)],
  ['Цвет: акцентные роли', (n) => /^--sf-(primary|secondary|tertiary|success|warning|error|info|link|mark|code)(-|$)/u.test(n)],
  ['Цвет: границы и отключённое', (n) => /^--sf-(outline|disable|on-disable|focus)/u.test(n)],
  ['Текст', (n) => /^--sf-(text|body-text|heading|display|title|label|weight|font|mono)/u.test(n)],
  ['Размеры и интервалы', (n) => /^--sf-(space|size|icon-size|breakpoint|container|max-width)/u.test(n)],
  ['Границы, радиусы и тени', (n) => /^--sf-(radius|border|shadow|elevation|divider)/u.test(n)],
  ['Движение', (n) => /^--sf-(animation|duration|transition|easing)/u.test(n)],
  ['Слои и прозрачность', (n) => /^--sf-(z|opacity|alfa|blur|scroll|floating)/u.test(n)],
  ['Геометрия элементов управления', (n) => /^--sf-ui-/u.test(n)],
  ['Поток содержимого', (n) => /^--sf-(content|viewport|composition|auto|bg|caret|accent|ring|stripe|ease)/u.test(n)],
];

const declarations = [...css.matchAll(/(--sf-[a-z0-9\\/-]+):\s*([^;]+);/gu)];
const values = new Map();
for (const [, name, value] of declarations) {
  if (isPrimitive(name)) continue;
  const list = values.get(name) ?? [];
  const trimmed = value.trim();
  if (!list.includes(trimmed)) list.push(trimmed);
  values.set(name, list);
}

const grouped = new Map(GROUPS.map(([title]) => [title, []]));
const other = [];
for (const name of [...values.keys()].sort()) {
  const group = GROUPS.find(([, test]) => test(name));
  (group ? grouped.get(group[0]) : other).push(name);
}
if (other.length) grouped.set('Прочее', other);

// A token declared twice carries one value per theme or per screen width; both
// are shown, because either one alone would read as the whole answer.
// The core escapes the slash in a name like --sf-radius-1\/2 because CSS needs
// it; a reader does not, and a table cell is not CSS.
const readable = (text) => text.replace(/\\\//gu, '/');
const shown = (name) => values.get(name)
  .map((value) => `\`${readable(value).replace(/\|/gu, '\\|')}\``)
  .join('<br>');

const total = values.size;
const sections = [...grouped.entries()]
  .filter(([, names]) => names.length > 0)
  .map(([title, names]) => `### ${title}\n\n| Переменная | Значение по умолчанию |\n| :--- | :--- |\n`
    + names.map((name) => `| \`${readable(name)}\` | ${shown(name)} |`).join('\n'))
  .join('\n\n');

const body = `---
title: "Все переменные"
description: "Полный список переменных, которые объявляет ядро SIMAI Framework, со значениями по умолчанию, кроме примитивов цвета и размера."
---

# Все переменные

${total} переменных, которые объявляет ядро, со значениями по умолчанию.
Примитивы сюда не входят: ступени цвета, размера и прозрачности — это ряды
значений, у каждого ряда своя страница, и повторять их здесь значило бы
держать вторую копию.

Переменная, объявленная дважды, несёт по значению на тему или на ширину
экрана; показаны оба.

## Когда применять

Когда нужно узнать, есть ли во фреймворке переменная для нужного, и что она
даёт по умолчанию, — прежде чем заводить свою.

## Пример

Переопределяются они как обычные свойства, на любом уровне:

\`\`\`css
.theme-light,
.theme-dark {
    --sf-radius--ui: var(--sf-radius-1\\/2);
}
\`\`\`

## Список

Страница собирается из байтов ядра: \`node scripts/build-token-reference.mjs\`.
Правка руками разойдётся с кодом при первой же пересборке.

${sections}
`;

if (process.argv.includes('--check')) {
  const current = readFileSync(resolve(root, page), 'utf8');
  if (current !== body) {
    console.error(JSON.stringify({
      schema: 'ui-doc.token_reference_audit.v1',
      status: 'fail',
      page,
      reason: 'the page differs from what the core declares now; run node scripts/build-token-reference.mjs',
    }, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify({schema: 'ui-doc.token_reference_audit.v1', status: 'pass', tokens: total}, null, 2));
  process.exit(0);
}

writeFileSync(resolve(root, page), body);
console.log(`${page}: ${total} tokens in ${[...grouped.values()].filter((n) => n.length).length} groups`);
