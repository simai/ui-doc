#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const json = args.includes('--json');
const option = (name) => {
  const prefix = `${name}=`;
  return args.find((argument) => argument.startsWith(prefix))?.slice(prefix.length);
};
const positional = args.filter((argument) => !argument.startsWith('--'));
const coreRoot = positional[0];
const buildRoot = option('--build-root');
const outputPath = option('--output');

if (!coreRoot || !path.isAbsolute(coreRoot) || (buildRoot && !path.isAbsolute(buildRoot)) || (outputPath && !path.isAbsolute(outputPath))) {
  console.error('Usage: audit-utility-executable-examples.mjs /absolute/core-root [--build-root=/absolute/build] [--output=/absolute/report.json] [--json]');
  process.exit(2);
}

const projectRoot = path.resolve(import.meta.dirname, '..');
const lockPath = path.join(projectRoot, 'simai-framework.lock.json');
const registryPath = path.join(coreRoot, 'contracts', 'generated', 'framework-contract-registry.json');
const rulesPath = path.join(coreRoot, 'distr', 'rule', 'rule.json');
const blockers = [];
const observations = [];

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha256 = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
for (const required of [lockPath, registryPath, rulesPath]) {
  if (!fs.existsSync(required)) {
    console.error(`Required input not found: ${required}`);
    process.exit(2);
  }
}

const lock = readJson(lockPath);
const registry = readJson(registryPath);
const rules = readJson(rulesPath);
const expectedRevision = lock.runtime?.ui?.commit;
const expectedRegistryHash = lock.runtime?.framework_registry?.file_sha256;
const actualRegistryHash = sha256(registryPath);

if (registry.compatibility?.ui?.commit && registry.compatibility.ui.commit !== expectedRevision) {
  blockers.push({ code: 'registry_core_revision_mismatch', expected: expectedRevision, actual: registry.compatibility.ui.commit });
}
if (actualRegistryHash !== expectedRegistryHash) {
  blockers.push({ code: 'registry_hash_mismatch', expected: expectedRegistryHash, actual: actualRegistryHash });
}

const registryByName = new Map(registry.entries
  .filter((entry) => entry.kind === 'utility')
  .map((entry) => [entry.name, entry]));
const rulesByName = new Map(rules.map((rule) => [rule.name, rule]));

const cases = [
  {
    id: 'margin',
    page: 'content/ru/utilities/indents/margin.md',
    route: 'ru/utilities/indents/margin/index.html',
    example: 'examples/utilities/indents/margin/index.html',
    families: ['margin', 'margin-ext'],
    classes: [
      ['m-3', 'margin/default', 'margin: var(--sf-space-3);'],
      ['-m-inline-start-2', 'margin/default', 'margin-inline-start: calc(0rem - var(--sf-space-2));'],
      ['md:m-inline-start-3', 'margin/md', 'margin-inline-start: var(--sf-space-3);'],
      ['m-a2', 'margin-ext/default', 'margin: var(--sf-a2);'],
    ],
    pageSnippets: ['calc(-1 * var(--sf-space-{n}))', 'm-{token}', 'LTR/RTL', 'Публичных псевдонимов'],
  },
  {
    id: 'padding',
    page: 'content/ru/utilities/indents/padding.md',
    route: 'ru/utilities/indents/padding/index.html',
    example: 'examples/utilities/indents/padding/index.html',
    families: ['padding', 'padding-ext'],
    classes: [
      ['p-4', 'padding/default', 'padding: var(--sf-space-4);'],
      ['p-inline-start-4', 'padding/default', 'padding-inline-start: var(--sf-space-4);'],
      ['md:p-4', 'padding/md', 'padding: var(--sf-space-4);'],
      ['p-a2', 'padding-ext/default', 'padding: var(--sf-a2);'],
    ],
    pageSnippets: ['p-{token}', 'LTR/RTL', 'отрицательные значения не поддерживаются', 'Публичных псевдонимов'],
  },
  {
    id: 'gap',
    page: 'content/ru/utilities/grid-and-flexbox-utilities/gap.md',
    route: 'ru/utilities/grid-and-flexbox-utilities/gap/index.html',
    example: 'examples/utilities/grid-and-flexbox-utilities/gap/index.html',
    families: ['gap'],
    classes: [
      ['gap-1', 'gap/default', 'gap: var(--sf-space-1);'],
      ['col-gap-4', 'gap/default', 'column-gap: var(--sf-space-4);'],
      ['row-gap-2', 'gap/default', 'row-gap: var(--sf-space-2);'],
      ['md:gap-4', 'gap/md', 'gap: var(--sf-space-4);'],
    ],
    pageSnippets: ['g-*', 'gap-x-*', 'LTR и RTL', 'Отрицательные значения'],
  },
  {
    id: 'width',
    page: 'content/ru/utilities/sizes/width.md',
    route: 'ru/utilities/sizes/width/index.html',
    example: 'examples/utilities/sizes/width/index.html',
    families: ['width', 'width-ext'],
    classes: [
      ['w-full', 'width/default', 'width: 100%;'],
      ['md:w-1/2', 'width/md', 'width: 50%;'],
      ['w-25', 'width-ext/default', 'width: 25%;'],
      ['w-e4', 'width-ext/default', 'width: var(--sf-e4);'],
    ],
    pageSnippets: ['w-screen-dynamic', 'w-a0 ... w-i9', 'w-1` … `w-99', 'Публичных псевдонимов'],
  },
  {
    id: 'text-wrap',
    page: 'content/ru/utilities/typography/text-wrap.md',
    route: 'ru/utilities/typography/text-wrap/index.html',
    example: 'examples/utilities/typography/text-wrap/index.html',
    families: ['text-wrap'],
    classes: [
      ['text-wrap', 'text-wrap/default', 'text-wrap: wrap;'],
      ['text-nowrap', 'text-wrap/default', 'text-wrap: nowrap;'],
      ['text-balance', 'text-wrap/default', 'text-wrap: balance;'],
      ['text-pretty', 'text-wrap/default', 'text-wrap: pretty;'],
    ],
    pageSnippets: ['Responsive- и state-варианты', 'LTR и RTL', 'поддержки браузером', 'публичные псевдонимы'],
  },
  {
    id: 'table-border-spacing',
    page: 'content/ru/utilities/tables/table-border-spacing.md',
    route: 'ru/utilities/tables/table-border-spacing/index.html',
    example: 'examples/utilities/tables/table-border-spacing/index.html',
    families: ['border-collapse', 'border-spacing'],
    classes: [
      ['border-collapse', 'border-collapse/default', 'border-collapse: collapse;'],
      ['border-separate', 'border-collapse/default', 'border-collapse: separate;'],
      ['border-spacing-2', 'border-spacing/default', 'border-spacing: var(--sf-space-2);'],
    ],
    pageSnippets: ['работают только с таблицами', 'border-spacing-x-*', 'border-spacing-y-*'],
  },
  {
    id: 'mix-blend-mode',
    page: 'content/ru/utilities/filters/mix-blend-mode.md',
    route: 'ru/utilities/filters/mix-blend-mode/index.html',
    example: 'examples/utilities/filters/mix-blend-mode/index.html',
    families: ['mix-blend-mode'],
    classes: [
      ['mix-blend-normal', 'mix-blend-mode/default', 'mix-blend-mode: normal;'],
      ['mix-blend-multiply', 'mix-blend-mode/default', 'mix-blend-mode: multiply;'],
      ['mix-blend-screen', 'mix-blend-mode/default', 'mix-blend-mode: screen;'],
    ],
    pageSnippets: ['декоративных слоёв', 'mix-blend-difference', 'isolate'],
  },
  {
    id: 'opacity',
    page: 'content/ru/utilities/filters/opacity.md',
    route: 'ru/utilities/filters/opacity/index.html',
    example: 'examples/utilities/filters/opacity/index.html',
    families: ['opacity'],
    classes: [
      ['opacity-3', 'opacity/default', 'opacity: 0.3;'],
      ['opacity-5', 'opacity/default', 'opacity: 0.5;'],
      ['opacity-full', 'opacity/default', 'opacity: 1;'],
    ],
    pageSnippets: ['весь элемент', 'pointer-events-none', 'filter-opacity-*'],
  },
  {
    id: 'ring',
    page: 'content/ru/utilities/outline/ring.md',
    route: 'ru/utilities/outline/ring/index.html',
    example: 'examples/utilities/outline/ring/index.html',
    families: ['ring-width', 'ring-color', 'ring-offset-width', 'ring-offset-color'],
    classes: [
      ['ring-2', 'ring-width/default', '--sf-ring-width: var(--sf-a2);'],
      ['ring-primary', 'ring-color/default', '--sf-ring-color: var(--sf-outline-primary);'],
      ['ring-offset-2', 'ring-offset-width/default', '--sf-ring-offset-width: var(--sf-a2);'],
      ['ring-offset-surface', 'ring-offset-color/default', '--sf-ring-offset-color: var(--sf-surface-1);'],
    ],
    pageSnippets: ['не меняет его размер', 'фокусе с клавиатуры', 'ring-inset'],
  },
  {
    id: 'scroll-subtle',
    page: 'content/ru/utilities/overscroll/scroll-subtle.md',
    route: 'ru/utilities/overscroll/scroll-subtle/index.html',
    example: 'examples/utilities/overscroll/scroll-subtle/index.html',
    families: ['scroll-subtle'],
    classes: [
      ['scroll-subtle', 'scroll-subtle/default', 'scrollbar-width: thin;'],
    ],
    pageSnippets: ['текущей темы', 'overflow-auto', 'повышенной контрастности'],
  },
];

const parseRule = (source) => {
  if (typeof source !== 'string' || !source.startsWith('/')) return null;
  const lastSlash = source.lastIndexOf('/');
  if (lastSlash <= 0) return null;
  return new RegExp(source.slice(1, lastSlash), source.slice(lastSlash + 1));
};

const cssSelector = (className) => `.${className.replaceAll('\\', '\\\\').replaceAll(':', '\\:').replaceAll('/', '\\/')}`;

const htmlClassTokens = (html) => {
  const tokens = new Set();
  for (const match of html.matchAll(/\bclass=(?:"([^"]*)"|'([^']*)')/giu)) {
    for (const token of (match[1] ?? match[2] ?? '').split(/\s+/u).filter(Boolean)) tokens.add(token);
  }
  return tokens;
};

const htmlBalanceErrors = (html) => {
  const stack = [];
  const errors = [];
  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
  for (const match of html.matchAll(/<\/?([a-z][a-z0-9-]*)\b[^>]*>/giu)) {
    const source = match[0];
    const tag = match[1].toLowerCase();
    if (voidTags.has(tag) || source.endsWith('/>')) continue;
    if (!source.startsWith('</')) {
      stack.push(tag);
      continue;
    }
    const opened = stack.pop();
    if (opened !== tag) errors.push({ expected: opened ?? null, actual: tag });
  }
  while (stack.length) errors.push({ expected_close: stack.pop() });
  return errors;
};

const targetLabelToken = /^(?:(?:sm|md|lg|xl):)?(?:-?(?:m|p)-|gap-|col-gap-|row-gap-|w-|text-)/u;

for (const definition of cases) {
  const pagePath = path.join(projectRoot, definition.page);
  const examplePath = path.join(projectRoot, definition.example);
  const page = fs.readFileSync(pagePath, 'utf8');
  const example = fs.readFileSync(examplePath, 'utf8');
  const exampleClasses = htmlClassTokens(example);
  const caseBlockers = [];
  const expectedModules = new Set();

  for (const family of definition.families) {
    const entry = registryByName.get(family);
    if (!entry) {
      caseBlockers.push({ code: 'registry_family_missing', family });
      continue;
    }
    if (!['ready', 'discoverable'].includes(entry.readiness?.status)) {
      caseBlockers.push({ code: 'registry_family_not_available', family, readiness: entry.readiness?.status ?? null });
    }
    const assetRoot = path.join(coreRoot, entry.runtime?.asset_root ?? '');
    if (!fs.existsSync(assetRoot)) caseBlockers.push({ code: 'registry_asset_root_missing', family, asset_root: entry.runtime?.asset_root ?? null });
    for (const ruleName of entry.runtime?.rule_names ?? []) {
      if (!rulesByName.has(ruleName)) caseBlockers.push({ code: 'registry_loader_rule_missing', family, rule: ruleName });
    }
  }

  for (const [className, ruleName, declaration] of definition.classes) {
    expectedModules.add(ruleName);
    if (!exampleClasses.has(className)) caseBlockers.push({ code: 'example_class_missing', class: className });
    const rule = rulesByName.get(ruleName);
    const matcher = rule ? parseRule(rule.regex) : null;
    if (!matcher || !matcher.test(className)) caseBlockers.push({ code: 'loader_rule_does_not_match', class: className, rule: ruleName });
    const [family, variant] = ruleName.split('/');
    const cssPath = path.join(coreRoot, 'distr', 'utility', family, variant, 'css', `${variant}.css`);
    const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';
    if (!css.includes(cssSelector(className))) caseBlockers.push({ code: 'css_selector_missing', class: className, rule: ruleName });
    if (!css.includes(declaration)) caseBlockers.push({ code: 'css_declaration_missing', class: className, rule: ruleName, declaration });
  }

  const expectedExampleId = definition.example.replace(/^examples\//u, '').replace(/\/index\.html$/u, '');
  if (!page.includes(`id="${expectedExampleId}"`)) caseBlockers.push({ code: 'page_example_reference_missing', id: expectedExampleId });
  for (const snippet of definition.pageSnippets) {
    if (!page.includes(snippet)) caseBlockers.push({ code: 'page_contract_snippet_missing', snippet });
  }
  if (page.includes('-var(')) caseBlockers.push({ code: 'invalid_negative_custom_property_syntax' });

  const tableClasses = [...page.matchAll(/^\|\s*`([^`]+)`\s*\|/gmu)].map((match) => match[1]);
  const duplicates = [...new Set(tableClasses.filter((value, index) => tableClasses.indexOf(value) !== index))];
  if (duplicates.length) caseBlockers.push({ code: 'duplicate_class_table_rows', classes: duplicates });

  const balanceErrors = htmlBalanceErrors(example);
  if (balanceErrors.length) caseBlockers.push({ code: 'example_html_unbalanced', errors: balanceErrors });
  for (const match of example.matchAll(/<[^>]*\bclass="([^"]*)"[^>]*\baria-label="([^"]*)"[^>]*>/giu)) {
    const classes = new Set(match[1].split(/\s+/u).filter(Boolean));
    for (const token of match[2].split(/\s+/u).filter((value) => targetLabelToken.test(value))) {
      if (!classes.has(token)) caseBlockers.push({ code: 'aria_label_class_mismatch', label_token: token, classes: [...classes] });
    }
  }
  if (/(?:distr\/utility\/(?:all|utility)|utility(?:\.min)?\.css)/iu.test(example)) {
    caseBlockers.push({ code: 'example_loads_full_utility_bundle' });
  }

  let buildModules = null;
  if (buildRoot) {
    const builtPagePath = path.join(buildRoot, definition.route);
    if (!fs.existsSync(builtPagePath)) {
      caseBlockers.push({ code: 'built_page_missing', path: builtPagePath });
    } else {
      const builtPage = fs.readFileSync(builtPagePath, 'utf8');
      const preloadedMatch = builtPage.match(/<script[^>]*data-docara-framework-asset="simai\.framework\.preloaded"[^>]*>window\.SF_PRELOADED=(\{.*?\});<\/script>/su);
      if (!preloadedMatch) {
        caseBlockers.push({ code: 'built_page_preloaded_contract_missing' });
      } else {
        const preloaded = JSON.parse(preloadedMatch[1]);
        buildModules = preloaded.modules ?? [];
        for (const module of expectedModules) {
          if (!buildModules.includes(module)) caseBlockers.push({ code: 'built_page_loader_module_missing', module });
        }
        if (buildModules.some((module) => ['utility', 'utility/all', 'utilities'].includes(module))) {
          caseBlockers.push({ code: 'built_page_full_utility_bundle_detected' });
        }
      }
    }
  }

  observations.push({
    id: definition.id,
    page: definition.page,
    example: definition.example,
    registry_families: definition.families,
    checked_classes: definition.classes.map(([className]) => className),
    expected_loader_modules: [...expectedModules],
    built_loader_module_count: buildModules?.length ?? null,
    status: caseBlockers.length ? 'fail' : 'pass',
    blockers: caseBlockers,
  });
  blockers.push(...caseBlockers.map((blocker) => ({ case: definition.id, ...blocker })));
}

const report = {
  schema: 'ui-doc.utility_executable_examples.v1',
  status: blockers.length ? 'fail' : 'pass',
  foundation: {
    core_revision: expectedRevision,
    registry_sha256: actualRegistryHash,
    lock_pair_id: lock.runtime?.framework_registry?.compatibility_id ?? null,
    registry_internal_compatibility_id: registry.compatibility?.pair_id ?? registry.compatibility?.id ?? null,
  },
  scope: {
    cases: cases.length,
    registry_families: [...new Set(cases.flatMap((item) => item.families))].length,
    classes: cases.reduce((sum, item) => sum + item.classes.length, 0),
    build_checked: Boolean(buildRoot),
  },
  observations,
  blocker_count: blockers.length,
  blockers,
};

if (outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
}

if (json) {
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
} else {
  console.log(`Executable utility examples: ${report.scope.cases}`);
  console.log(`Registry families: ${report.scope.registry_families}`);
  console.log(`Classes checked: ${report.scope.classes}`);
  console.log(`Build checked: ${report.scope.build_checked ? 'yes' : 'no'}`);
  console.log(`Blockers: ${report.blocker_count}`);
}

process.exit(blockers.length ? 1 : 0);
