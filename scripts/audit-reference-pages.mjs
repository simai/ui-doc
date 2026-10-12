#!/usr/bin/env node
// Hold every page enrolled in config/reference-pages.json to the reference page
// standard (docs/developer/reference-page-standard.md): H2 sections from the
// page type's list, in its order, the required ones present, a live example
// under «Пример», an introduction before the first section, no badges, and no
// history or plans in the prose. Earlier page standards were not followed
// because nothing checked them; this one is checked.
//
// Usage: node scripts/audit-reference-pages.mjs

import {readFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const settings = JSON.parse(readFileSync(join(root, 'config/reference-pages.json'), 'utf8'));

const STANDARD = {
  utility: {
    order: ['Сводка', 'Пример', 'Классы', 'Переменные', 'Применение', 'Ограничения', 'См. также'],
    required: ['Сводка', 'Пример', 'Классы', 'Применение'],
  },
  component: {
    order: ['Сводка', 'Пример', 'Разметка', 'Варианты', 'Состояния', 'Доступность', 'JavaScript', 'Классы', 'Переменные', 'См. также'],
    required: ['Сводка', 'Пример', 'Разметка', 'Доступность', 'Классы'],
  },
  smart: {
    order: ['Пример', 'Применение', 'Доступность', 'Справочник API', 'См. также'],
    required: ['Пример', 'Применение', 'Доступность', 'Справочник API'],
  },
};
// Words that tell a story or promise one; a reference page states what is.
const FORBIDDEN = [
  /\bраньше\b/iu, /\bтеперь\b/iu, /\bбыло\b/iu, /\bстало\b/iu, /в новой версии/iu, /\bс версии\b/iu,
  /\bбудет\b/iu, /\bбудут\b/iu, /\bпоявится\b/iu, /\bпланируется\b/iu,
];

const prose = (text) => text
  .replace(/^---\n[\s\S]*?\n---\n/u, '')
  .replace(/```[\s\S]*?```/gu, '')
  .replace(/`[^`\n]*`/gu, '');

const findings = [];
for (const [page, entry] of Object.entries(settings.pages)) {
  const standard = STANDARD[entry.kind];
  const add = (code, detail = {}) => findings.push({page, code, ...detail});
  if (!standard) {
    add('kind_unknown', {kind: entry.kind});
    continue;
  }
  let text;
  try {
    text = readFileSync(join(root, 'content/ru', page), 'utf8');
  } catch {
    add('page_missing');
    continue;
  }
  const front = text.match(/^---\n([\s\S]*?)\n---\n/u)?.[1] ?? '';
  if (!/^title:\s*\S/mu.test(front)) add('title_missing');
  if (!/^description:\s*\S/mu.test(front)) add('description_missing');
  if (/:badge\[/u.test(text)) add('badge_in_body');
  const body = text.slice(text.indexOf('\n---\n', 3) + 5);
  const beforeFirst = body.split(/^## /mu)[0];
  if (!/^# \S/mu.test(beforeFirst)) add('h1_missing');
  if (beforeFirst.replace(/^# .*$/mu, '').trim().length === 0) add('introduction_missing');

  const headings = [...body.matchAll(/^## (.+)$/gmu)].map(([, title]) => title.trim());
  for (const heading of headings) {
    if (!standard.order.includes(heading)) add('section_not_in_standard', {heading});
  }
  const known = headings.filter((heading) => standard.order.includes(heading));
  const positions = known.map((heading) => standard.order.indexOf(heading));
  if (positions.some((position, index) => index > 0 && position <= positions[index - 1])) {
    add('section_order', {headings: known});
  }
  for (const heading of standard.required) {
    if (!headings.includes(heading)) add('section_missing', {heading});
  }
  const sections = body.split(/^## /mu);
  const example = sections.find((section) => section.startsWith('Пример\n'));
  if (example && !/^:::example\b/mu.test(example)) add('live_example_missing');
  // A component shows every modifier axis and state it describes: each H3
  // under «Варианты» and «Состояния» carries its own live example.
  if (entry.kind === 'component') {
    for (const name of ['Варианты', 'Состояния']) {
      const section = sections.find((item) => item.startsWith(`${name}\n`));
      if (!section) continue;
      for (const sub of section.split(/^### /mu).slice(1)) {
        if (!/^:::example\b/mu.test(sub)) add('variant_example_missing', {section: name, heading: sub.split('\n')[0].trim()});
      }
    }
  }

  const plain = prose(text);
  for (const pattern of FORBIDDEN) {
    const match = plain.match(pattern);
    if (match) add('history_or_plan', {word: match[0]});
  }
}

const result = {
  schema: 'ui-doc.reference_page_audit.v1',
  status: findings.length === 0 ? 'pass' : 'needs_revision',
  pages: Object.keys(settings.pages).length,
  findings,
};
console.log(JSON.stringify(result, null, 2));
process.exit(findings.length === 0 ? 0 : 1);
