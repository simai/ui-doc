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
// REFERENCE_PAGES_CONFIG names another enrolment list (a migration wave's).
const settings = readJson(process.env.REFERENCE_PAGES_CONFIG || join(root, 'config/reference-pages.json'));
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
// A vendor-prefixed declaration (`-o-object-fit`) beside its standard one is
// a fallback a reader does not write; it is left out.
// A selector list split at its own commas, not those inside `:where(…)`.
const splitSelector = (selector) => {
  const parts = [];
  let depth = 0;
  let current = '';
  for (const char of selector) {
    if (char === '(') depth += 1;
    if (char === ')') depth -= 1;
    if (char === ',' && depth === 0) {
      parts.push(current);
      current = '';
      continue;
    }
    current += char;
  }
  parts.push(current);
  return parts;
};
const declarations = (body) => {
  const items = body.split(';').map((item) => item.trim()).filter(Boolean);
  const standard = new Set(items.map((item) => item.split(':')[0].trim()).filter((property) => !property.startsWith('-')));
  return items.filter((item) => {
    const property = item.split(':')[0].trim();
    const bare = property.replace(/^-(webkit|moz|ms|o)-/u, '');
    // `-webkit-margin-start` is the old name of `margin-inline-start`.
    const logical = bare.replace(/^(margin|padding|border)-(start|end)\b/u, '$1-inline-$2');
    return property === bare || !(standard.has(bare) || standard.has(logical));
  }).join('; ');
};
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
    for (const {selector, body, media} of rules(css)) {
      for (const part of splitSelector(selector).map((item) => item.trim())) {
        const name = firstClass(part);
        if (!name) continue;
        const shownSelector = unescape(part);
        // Physical LTR/RTL fallbacks (`html:not([dir="rtl"]) .x`, `.x:dir(ltr)`)
        // repeat what the logical rule says; the logical one is the row.
        const fallback = /\[dir|:dir\(|html:not\(/u.test(shownSelector);
        const plain = shownSelector === `.${name}`;
        const rank = plain ? 2 : (fallback ? 0 : 1);
        const label = mediaLabel(media);
        const css = `${label ? `${label}: ` : ''}${unescape(declarations(body))}`;
        const known = byClass.get(name);
        // A class may style more than itself (`.table-border tr` and
        // `.table-border td`): such a rule is kept beside the main one,
        // labelled with its selector.
        if (known && rank === 1 && known.rank === 2) {
          const extra = `${shownSelector} { ${css} }`;
          if (!known.css.includes(extra)) known.css = `${known.css}; ${extra}`;
          continue;
        }
        if (!known || rank > known.rank) {
          const extras = known && known.rank === 1 && plain ? `; ${known.selector} { ${known.css} }` : '';
          byClass.set(name, {css: `${css}${extras}`, selector: plain ? null : shownSelector, plain, rank});
        } else if (rank === 1 && known.rank === 1 && known.selector !== shownSelector) {
          // Two wider rules of one class: each keeps its selector.
          if (!known.labelled) {
            known.css = `${known.selector} { ${known.css} }`;
            known.selector = null;
            known.labelled = true;
          }
          const extra = `${shownSelector} { ${css} }`;
          if (!known.css.includes(extra)) known.css = `${known.css}; ${extra}`;
        } else if (rank === known.rank && !known.css.includes(css)) known.css = `${known.css}; ${css}`;
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
    if (!fold) continue;
    const segments = name.split('-');
    const keys = [];
    for (let index = 1; index < segments.length; index += 1) {
      const value = segments[index];
      if (!value || !entry.css.includes(value)) continue;
      const nameTemplate = [...segments.slice(0, index), '{значение}', ...segments.slice(index + 1)].join('-');
      const cssTemplate = entry.css.split(value).join('{значение}');
      // A class shown by a wider selector (`.space-x-2 > * + *`) folds with
      // the same selector shape.
      const selectorTemplate = entry.selector ? entry.selector.split(value).join('{значение}') : null;
      const key = `${nameTemplate}\u0000${cssTemplate}\u0000${selectorTemplate ?? ''}`;
      keys.push({key, value, nameTemplate, cssTemplate, selectorTemplate});
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
      const group = groups.get(best.key) ?? {nameTemplate: best.nameTemplate, cssTemplate: best.cssTemplate, selectorTemplate: best.selectorTemplate, values: []};
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
      const shown = row.group.selectorTemplate ? ` (${code(row.group.selectorTemplate)})` : '';
      lines.push(`| ${code(row.group.nameTemplate)}${shown} | ${code(row.group.cssTemplate)} | ${row.group.values.map(code).join(', ')} |`);
    } else if (row.group) {
      for (const value of row.group.values) {
        const shown = row.group.selectorTemplate ? ` (${code(row.group.selectorTemplate.split('{значение}').join(value))})` : '';
        lines.push(`| ${code(row.group.nameTemplate.replace('{значение}', value))}${shown} | ${code(row.group.cssTemplate.split('{значение}').join(value))} | — |`);
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
      // A container query (`cq-sm:`) is a condition of its own kind, not a
      // state: it answers to the width of the nearest query container.
      const container = prefix.startsWith('cq-');
      if (!seen.has(prefix)) seen.set(prefix, {width: width ?? null, container, state: width || container ? null : prefix.slice(0, -1), example: name});
    }
  }
  // A family may ship its state classes in the default sheet (`hover:fill-*`).
  for (const family of families) {
    const css = show(`distr/utility/${family}/default/css/default.css`) ?? '';
    for (const {selector} of rules(css)) {
      const name = firstClass(selector);
      if (!name || !name.includes(':')) continue;
      const prefix = name.slice(0, name.lastIndexOf(':') + 1);
      const container = prefix.startsWith('cq-');
      if (!seen.has(prefix)) seen.set(prefix, {width: null, container, state: container ? null : prefix.slice(0, -1), example: name});
    }
  }
  return [...seen].map(([prefix, data]) => ({prefix, ...data}))
    .sort((a, b) => (a.width ? parseFloat(a.width) : 1e9) - (b.width ? parseFloat(b.width) : 1e9));
};

// The theme tokens a family reads: what a project changes to restyle every
// use of the utility at once.
const utilityTokens = (families) => {
  const names = new Set();
  const own = new Set();
  for (const family of families) {
    for (const variant of tree(`distr/utility/${family}`)) {
      const css = show(`distr/utility/${family}/${variant}/css/${variant}.css`) ?? '';
      for (const [, name] of css.matchAll(/var\((--sf-[a-zA-Z0-9_\\/-]+)/gu)) names.add(unescape(name));
      // A variable the family sets on the element itself (`--sf-blur` for the
      // filter chain) is its own plumbing, not a theme token.
      for (const [, name] of css.matchAll(/(--sf-[a-zA-Z0-9_\\/-]+)\s*:/gu)) own.add(unescape(name));
    }
  }
  return [...names].filter((name) => !own.has(name));
};

const coreCss = show('distr/core/css/core.css') ?? '';
// Screen widths by prefix name, read from a family that has them all; pages
// name widths only by prefix (the numbers are the guide's to state).
const widthPrefixes = (() => {
  const map = new Map();
  for (const variant of tree('distr/utility/display')) {
    const css = show(`distr/utility/display/${variant}/css/${variant}.css`) ?? '';
    const width = css.match(/min-width:\s*([0-9.]+(?:px|rem|em))/u)?.[1];
    if (width) map.set(width, variant);
  }
  return map;
})();
const mediaLabel = (media) => {
  if (!media) return '';
  if (/\bprint\b/u.test(media)) return 'при печати';
  const width = media.match(/min-width:\s*([0-9.]+(?:px|rem|em))/u)?.[1];
  if (width && widthPrefixes.has(width)) return `от ширины ${widthPrefixes.get(width)}`;
  return unescape(media.replace(/^@media\s*/u, ''));
};
// A token's value at the root, and the values the core gives it at wider
// screens (`--sf-space-2` grows from lg); theme-scoped values are left out.
const coreRules = rules(coreCss);
const tokenValue = (name) => {
  const values = [];
  for (const {selector, body, media} of coreRules) {
    // Tokens live on :root, and the theme roles on `.theme-light, .theme-dark`
    // (one light-dark() value for both).
    if (!/(^|,)\s*(:root|html|\.theme-light|\.theme-dark)\s*(,|$)/u.test(selector)) continue;
    for (const part of body.split(';')) {
      const index = part.indexOf(':');
      if (index < 0 || unescape(part.slice(0, index).trim()) !== name) continue;
      // The value is CSS and is copied into CSS: it keeps the escaped slash.
      const value = part.slice(index + 1).trim();
      const label = mediaLabel(media);
      if (values.some((item) => item.label === label)) continue;
      // A wider-screen value equal to the base one says nothing new.
      if (label && values.find((item) => item.label === '')?.value === value) continue;
      values.push({label, value});
    }
  }
  if (values.length === 0) return null;
  return values.map(({label, value}) => (label ? `${label}: ${value}` : value)).join('; ');
};

// The conditions a family supports, as one line under its classes. Prefix
// names only: the widths behind sm … xxl are the guide's to state, and may
// still change (owner, 2026-10-12).
const utilityConditions = (families) => {
  const variants = utilityVariants(families);
  const widths = variants.filter(({width}) => width).map(({prefix}) => code(prefix));
  const containers = variants.filter(({container}) => container).map(({prefix}) => code(prefix));
  const states = variants.filter(({state}) => state).map(({prefix}) => code(prefix));
  const example = variants[0]?.example;
  const containerPart = containers.length ? `; ширина контейнера — ${containers.join(', ')}` : '';
  return [
    '',
    `Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — ${widths.length ? widths.join(', ') : 'нет'}${containerPart}; состояния — ${states.length ? states.join(', ') : 'нет'}.${example ? ` Например: ${code(example)}.` : ''}`,
  ];
};

// A step written as a fraction keeps its slash in the name, and CSS reads the
// slash only escaped: a name copied from the table into var() as printed
// breaks the declaration. Said once, under every table that has one.
const fractionNote = (names) => (names.some((name) => name.includes('/'))
  ? ['', `В CSS косую черту в имени экранируют: ${code(`var(${names.find((name) => name.includes('/')).replace('/', '\\/')})`)}.`]
  : []);

const utilityVariables = (families) => {
  const tokens = utilityTokens(families);
  if (tokens.length === 0) return null;
  return [
    'Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).',
    '',
    '| Переменная | Значение по умолчанию |',
    '|:---|:---|',
    ...tokens.map((name) => `| ${code(name)} | ${tokenValue(name) ? code(tokenValue(name)) : 'задаётся темой'} |`),
    ...fractionNote(tokens),
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
      // Parts are `block-…` or BEM `block__…`.
      if (name === block || name.startsWith(`${block}-`) || name.startsWith(`${block}__`)) names.add(name);
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

// The component's own variables: every `--<block>…` custom property its sheet
// declares. Most are set by modifiers rather than by the base rule (a button's
// background comes from `.sf-button--default.sf-button--primary`), so a
// variable's default is the base rule's value when it has one, else the value
// the first rule that sets it gives, with that rule named.
const componentVariables = (component, block) => {
  const css = show(`distr/component/${component}/css/${component}.css`) ?? '';
  const all = rules(css);
  const declared = new Map();
  for (const {selector, body, media} of all) {
    for (const part of body.split(';')) {
      const match = part.trim().match(/^(--[a-zA-Z0-9_-]+)\s*:\s*([\s\S]+)$/u);
      if (!match || !match[1].startsWith(`--${block}`)) continue;
      const base = !media && splitSelector(selector).map((item) => item.trim()).includes(`.${block}`);
      const known = declared.get(match[1]);
      const value = unescape(match[2].trim());
      if (!known) declared.set(match[1], {value, from: base ? null : unescape(splitSelector(selector)[0].trim()), base});
      else if (base && !known.base) declared.set(match[1], {value, from: null, base: true});
    }
  }
  const used = (name) => {
    const properties = new Set();
    for (const {body} of all) {
      for (const part of body.split(';')) {
        const match = part.trim().match(/^([a-z-]+)\s*:/u);
        if (match && part.includes(`var(${name}`)) properties.add(match[1]);
      }
    }
    // A logical property and its physical fallbacks say one thing.
    const list = [...properties].filter((property) => !property.startsWith('-webkit-'));
    const logical = list.some((property) => /(inline|block)-(start|end)|(start|end)-(start|end)/u.test(property));
    return logical ? list.filter((property) => !/(left|right)/u.test(property)) : list;
  };
  return [...declared].sort(([a], [b]) => a.localeCompare(b))
    .map(([name, {value, from}]) => ({name, value, from, properties: used(name)}));
};

// Public variables: the release's core/contracts/public-variables.v1.json names
// the few variables a component offers for customisation; they are stable and
// renamed only through the change journal. PUBLIC_VARIABLES_FILE points at
// another copy of the contract (a candidate's) for a trial run. Their summaries
// are translated in config/public-variables.ru.json; a missing one fails.
const publicContract = (() => {
  const text = process.env.PUBLIC_VARIABLES_FILE
    ? readFileSync(process.env.PUBLIC_VARIABLES_FILE, 'utf8')
    : show('distr/core/contracts/public-variables.v1.json');
  return text ? JSON.parse(text) : {components: []};
})();
const publicTranslations = (() => {
  const path = join(root, 'config/public-variables.ru.json');
  return existsSync(path) ? readJson(path).strings : {};
})();
const untranslated = new Set();
const ru = (text) => {
  if (publicTranslations[text]) return publicTranslations[text];
  untranslated.add(text);
  return text;
};
const VARIES = {appearance: 'вида', scheme: 'схемы', status: 'статуса', size: 'размера'};

const publicVariablesSection = (entry) => {
  const example = entry.variables.find((item) => item.role === 'radius') ?? entry.variables[0];
  return [
    `Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (${code(entry.selector)}) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.`,
    '',
    '| Переменная | Что задаёт | По умолчанию |',
    '|:---|:---|:---|',
    ...entry.variables.map((item) => {
      const varies = (item.varies_with ?? []).map((name) => VARIES[name] ?? name);
      const fallback = `${code(item.default)}${varies.length ? `; зависит от ${varies.join(', ')}` : ''}`;
      return `| ${code(item.name)} | ${ru(item.summary)} | ${fallback} |`;
    }),
    '',
    '```css',
    `${entry.selector} {`,
    `  ${example.name}: ${example.role === 'radius' ? '0' : example.default};`,
    '}',
    '```',
  ];
};

const componentVariablesSection = (component, blocks) => {
  // A component's public variables may sit on a part rather than on its block
  // (the modal's on .sf-modal-surface): the contract names the component.
  const offered = publicContract.components.filter((item) => blocks.includes(item.selector.replace(/^\./u, '')) || item.component === component);
  const publicNames = new Set(offered.flatMap((item) => item.variables.map((variable) => variable.name)));
  const variables = blocks.flatMap((item) => componentVariables(component, item)).filter(({name}) => !publicNames.has(name));
  if (offered.length) {
    return [
      '### Настройка',
      '',
      ...offered.flatMap((item, index) => [...(index ? [''] : []), ...publicVariablesSection(item)]),
      ...(variables.length ? [
        '',
        '### Устройство',
        '',
        `Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (${blocks.map((item) => code(`.${item}`)).join(', ')}); переменную без него задают только модификаторы.`,
        '',
        '| Переменная | По умолчанию | Задаёт |',
        '|:---|:---|:---|',
        ...variables.map(({name, value, from, properties}) => `| ${code(name)} | ${from ? `не задана; задают модификаторы, например ${code(from)}: ${code(value)}` : code(value)} | ${properties.length ? properties.map(code).join(', ') : '—'} |`),
      ] : []),
    ];
  }
  if (variables.length === 0) return null;
  return [
    `Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид смарт-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (${blocks.map((item) => code(`.${item}`)).join(', ')}); переменную без него задают только модификаторы.`,
    '',
    '| Переменная | По умолчанию | Задаёт |',
    '|:---|:---|:---|',
    ...variables.map(({name, value, from, properties}) => `| ${code(name)} | ${from ? `не задана; задают модификаторы, например ${code(from)}: ${code(value)}` : code(value)} | ${properties.length ? properties.map(code).join(', ') : '—'} |`),
  ];
};

// ---- writing ----------------------------------------------------------------------

const ORDER = {
  utility: ['Пример', 'Классы', 'Переменные', 'Применение', 'Ограничения', 'См. также'],
  component: ['Пример', 'Разметка', 'Варианты', 'Состояния', 'Доступность', 'JavaScript', 'Классы', 'Переменные', 'См. также'],
};
const SOURCE_NOTE = 'Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.';

const setSection = (text, kind, heading, body) => {
  const [head, ...sections] = text.split(/^(?=## )/mu);
  const titleOf = (section) => section.match(/^## (.+)$/mu)?.[1].trim();
  const content = body === null ? null : `## ${heading}\n\n${body.join('\n')}\n\n`;
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
    next = setSection(next, 'utility', 'Сводка', null);
    next = setSection(next, 'utility', 'Классы', [...utilityClasses(entry.families), ...utilityConditions(entry.families), '', SOURCE_NOTE]);
    next = setSection(next, 'utility', 'Переменные', utilityVariables(entry.families));
  } else if (entry.kind === 'component' && entry.css === false) {
    // A component that ships only a script (theme, hide-show) has no classes
    // or variables of its own to list.
    next = setSection(next, 'component', 'Сводка', null);
  } else if (entry.kind === 'component') {
    next = setSection(next, 'component', 'Сводка', null);
    // A component may own several blocks (pagination: the bar and its page
    // numbers); each gets its own class table, and the variables are joined.
    const blocks = entry.blocks ?? [entry.block];
    const classes = blocks.length === 1
      ? componentClasses(entry.component, blocks[0])
      : blocks.flatMap((block, index) => [...(index ? [''] : []), `**${code(block)}**`, '', ...componentClasses(entry.component, block)]);
    next = setSection(next, 'component', 'Классы', [...classes, '', SOURCE_NOTE]);
    next = setSection(next, 'component', 'Переменные', componentVariablesSection(entry.component, blocks));
  }
  if (next !== current) {
    changed.push(page);
    if (!checkOnly) writeFileSync(path, next);
  }
}
if (untranslated.size) {
  console.error(JSON.stringify({untranslated: [...untranslated]}, null, 2));
  console.error('translate them in config/public-variables.ru.json');
  process.exit(1);
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
