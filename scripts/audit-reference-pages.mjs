#!/usr/bin/env node
// Hold every page enrolled in config/reference-pages.json to the reference page
// standard (docs/developer/reference-page-standard.md): H2 sections from the
// page type's list, in its order, the required ones present, a live example
// under «Пример», an introduction before the first section, no badges, and no
// history or plans in the prose. Earlier page standards were not followed
// because nothing checked them; this one is checked.
//
// A Smart page carries one badge line, right under its H1: the tag and the
// version of each component, written by scripts/build-smart-reference.mjs
// (owner, 2026-11-06, R007). The page describes that version, so its prose
// names no version of its own, and it lists no earlier names: those live on
// the names guide (R006).
//
// Usage: node scripts/audit-reference-pages.mjs

import {readFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// REFERENCE_PAGES_CONFIG names another enrolment list (a migration wave's).
const settings = JSON.parse(readFileSync(process.env.REFERENCE_PAGES_CONFIG || join(root, 'config/reference-pages.json'), 'utf8'));

const STANDARD = {
  utility: {
    order: ['Пример', 'Классы', 'Переменные', 'Применение', 'Ограничения', 'См. также'],
    required: ['Пример', 'Классы', 'Применение'],
  },
  component: {
    order: ['Пример', 'Разметка', 'Варианты', 'Состояния', 'Применение', 'Доступность', 'JavaScript', 'Классы', 'Переменные', 'См. также'],
    required: ['Пример', 'Разметка', 'Доступность', 'Классы'],
  },
  smart: {
    order: ['Пример', 'Применение', 'Доступность', 'Справочник API', 'См. также'],
    required: ['Пример', 'Применение', 'Доступность', 'Справочник API'],
  },
  // The Smart page laid out like a component page (owner, 2026-10-23): the
  // markup, every visual axis and every state with a live example, then the
  // scenarios. A page moves to it by `"standard": 2` in its enrolment entry.
  smart2: {
    order: ['Пример', 'Разметка', 'Варианты', 'Состояния', 'Применение', 'Доступность', 'Справочник API', 'См. также'],
    required: ['Пример', 'Разметка', 'Применение', 'Доступность', 'Справочник API'],
  },
  // The third Smart standard (owner, 2026-11-02): the class page's order, then
  // behaviour, and the reference as tables with the component's facts last.
  // A twin class page is linked from the introduction.
  smart3: {
    order: ['Пример', 'Разметка', 'Варианты', 'Состояния', 'Поведение', 'Применение', 'Доступность', 'Справочник', 'См. также'],
    required: ['Пример', 'Разметка', 'Доступность', 'Справочник'],
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
  const standard = STANDARD[entry.kind === 'smart' && entry.standard ? `smart${entry.standard === 1 ? '' : entry.standard}` : entry.kind];
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
  const smart = entry.kind === 'smart';
  // The generated version line: tag and version badges, nothing else.
  const versionLine = /^(# .+\n)\n(:badge\[sf-[a-z0-9-]+\]\{type=tonal scheme=primary size=1\/2\} :badge\[\d+\.\d+\.\d+\]\{type=outline scheme=on-surface size=1\/2\}( |$))+\n/mu;
  if (smart && !versionLine.test(text)) add('version_badges_missing');
  if (/:badge\[/u.test(smart ? text.replace(versionLine, '$1') : text)) add('badge_in_body');
  // A page for a dated alias (`alias_of` in its entry) exists to migrate
  // from it: its table of names is its subject.
  if (smart && !entry.alias_of && /^#{2,5} Прежние имена/mu.test(text)) add('earlier_names_on_page');
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
  // A component with no stylesheet of its own (`css: false`) has no classes.
  const required = entry.css === false ? standard.required.filter((heading) => heading !== 'Классы') : standard.required;
  for (const heading of required) {
    if (!headings.includes(heading)) add('section_missing', {heading});
  }
  const sections = body.split(/^## /mu);
  const example = sections.find((section) => section.startsWith('Пример\n'));
  if (example && !/^:::example\b/mu.test(example)) add('live_example_missing');
  // A component shows every modifier axis and state it describes: each H3
  // under «Варианты» and «Состояния» carries its own live example.
  if (entry.kind === 'component' || standard === STANDARD.smart2 || standard === STANDARD.smart3) {
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
  // «(`sf-button` 1.4.0)», «версии 1.6.0»: the badges under the title say it.
  if (smart) {
    // A port's or a standard's version is a fact of its contract and stays.
    const before = text.split(/^## Справочник/mu)[0].replace(versionLine, '$1').replace(/```[\s\S]*?```/gu, '');
    const version = before.match(/`<?sf-[a-z0-9-]+>?`\s+\d+\.\d+\.\d+/u)
      ?? prose(before).match(/\(\s*\d+\.\d+\.\d+\s*[,)]/u);
    if (version) add('version_in_prose', {text: version[0]});
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
