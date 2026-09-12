#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const positional = args.filter((argument) => !argument.startsWith('--'));
const option = (name) => {
  const prefix = `${name}=`;
  return args.find((argument) => argument.startsWith(prefix))?.slice(prefix.length);
};
const json = args.includes('--json');

const [coreRoot, sourceRoot, smartRoot] = positional;
const revisions = {
  source: option('--source-revision'),
  builder: option('--builder-revision'),
  core: option('--core-revision'),
  smart: option('--smart-revision'),
};
const documentationStatusPath = option('--documentation-status');
const outputPath = option('--output');
const classificationOutputPath = option('--classification-output');

const requiredPaths = [coreRoot, sourceRoot, smartRoot, documentationStatusPath];
const optionalPaths = [outputPath, classificationOutputPath].filter(Boolean);
if (
  requiredPaths.some((value) => !value || !path.isAbsolute(value)) ||
  optionalPaths.some((value) => !path.isAbsolute(value)) ||
  Object.values(revisions).some((value) => !/^[0-9a-f]{40}$/u.test(value ?? ''))
) {
  console.error(
    'Usage: audit-component-reference-batch.mjs /absolute/core /absolute/source /absolute/smart ' +
      '--source-revision=<40-hex> --builder-revision=<40-hex> --core-revision=<40-hex> ' +
      '--smart-revision=<40-hex> --documentation-status=/absolute/status.json ' +
      '[--output=/absolute/report.json] [--classification-output=/absolute/classification.json] [--json]',
  );
  process.exit(2);
}

const projectRoot = path.resolve(import.meta.dirname, '..');
const registryPath = path.join(coreRoot, 'contracts', 'generated', 'framework-contract-registry.json');
const rulesPath = path.join(coreRoot, 'distr', 'rule', 'rule.json');
const blockers = [];
const sourceDefects = [];
const observations = [];

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const read = (file) => fs.readFileSync(file, 'utf8');
const exists = (file) => fs.existsSync(file);
const addBlocker = (code, details = {}) => blockers.push({ code, ...details });

for (const required of [registryPath, rulesPath, documentationStatusPath]) {
  if (!exists(required)) addBlocker('required_input_missing', { path: required });
}
if (blockers.length) {
  const report = { schema: 'ui-doc.component_reference_batch.v1', status: 'fail', blockers };
  console.error(JSON.stringify(report, null, 2));
  process.exit(2);
}

const registry = readJson(registryPath);
const rules = readJson(rulesPath);
const documentationStatus = readJson(documentationStatusPath);
const registryComponents = registry.entries.filter((entry) => entry.kind === 'component');
const registryByName = new Map(registryComponents.map((entry) => [entry.name, entry]));
const rulesByName = new Map(rules.map((rule) => [rule.name, rule]));
const referencePath = path.join(projectRoot, 'docs/developer/component-page-reference.md');
const readmePath = path.join(projectRoot, 'README.md');
if (!exists(referencePath)) addBlocker('component_page_reference_missing');
if (!exists(readmePath) || !read(readmePath).includes('(docs/developer/component-page-reference.md)')) {
  addBlocker('component_page_reference_entrypoint_missing');
}

const cases = [
  {
    name: 'buttons',
    page: 'content/ru/components/buttons.md',
    examples: ['basic', 'variants', 'sizes', 'icons', 'states', 'tightness', 'radius', 'segments'],
    selector: '.sf-button',
    sourceJs: 'src/component/buttons/js/_buttons.js',
    sourceSnippets: ["registerComponent('Buttons'", "this.button.setAttribute('type', 'button')"],
    pageSnippets: ['## Когда использовать', '## Быстрый старт', '## Состав кнопки', '## Публичные классы', '## Состояния', '## Формы и доступность', '## Узкие экраны и направление текста', '## Ограничения и проверка'],
  },
  {
    name: 'inputs',
    page: 'content/ru/components/inputs.md',
    examples: ['overview', 'types', 'variants', 'sizes', 'states', 'mask'],
    selector: '.sf-input',
    sourceJs: 'src/component/inputs/js/_inputs.js',
    sourceSnippets: ["registerComponent('Inputs'", 'window.SF.Input.setState = setInputState', 'syncFieldContract'],
    pageSnippets: ['## Быстрый старт', '## Control и field', '## Публичные классы', '### JavaScript API', '## Responsive и LTR/RTL', '## Ограничения и проверка'],
  },
  {
    name: 'checkbox',
    page: 'content/ru/components/checkbox.md',
    examples: ['overview', 'group', 'states', 'sizes', 'position'],
    selector: '.sf-checkbox',
    sourceJs: 'src/component/checkbox/js/_checkbox.js',
    sourceSnippets: ["registerComponent('Checkbox'", 'window.SF.Checkbox.setState = setCheckboxState', 'input.indeterminate'],
    pageSnippets: ['## Быстрый старт', '## Control и field/group', '## Публичные классы', '### JavaScript API', '## Responsive и LTR/RTL', '## Доступность и проверка'],
  },
  {
    name: 'modal',
    page: 'content/ru/components/modal.md',
    examples: ['overview', 'positions', 'smart-overview', 'smart-positions', 'smart-overlay', 'smart-minimized', 'smart-local-content', 'smart-inline'],
    selector: '.sf-modal',
    sourceJs: 'src/component/modal/js/_modal.js',
    sourceSnippets: ["registerComponent('Modal'", "event.key === 'Escape'", "event.key === 'Tab'", 'Modal.lockPage'],
    pageSnippets: ['## Быстрый старт', '## Обычный Modal API', '### События', '## Закрытие, фокус и scroll lock', '## Responsive и LTR/RTL', '## Ограничения и проверка'],
  },
];

const parseRule = (source) => {
  if (typeof source !== 'string' || !source.startsWith('/')) return null;
  const lastSlash = source.lastIndexOf('/');
  if (lastSlash <= 0) return null;
  return new RegExp(source.slice(1, lastSlash), source.slice(lastSlash + 1));
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

for (const definition of cases) {
  const caseBlockers = [];
  const pagePath = path.join(projectRoot, definition.page);
  const page = exists(pagePath) ? read(pagePath) : '';
  const entry = registryByName.get(definition.name);
  const rule = rulesByName.get(definition.name);
  const assetRoot = entry?.runtime?.asset_root
    ? path.join(coreRoot, entry.runtime.asset_root)
    : path.join(coreRoot, 'distr', 'component', definition.name);
  const cssPath = path.join(assetRoot, 'css', `${definition.name}.css`);
  const jsPath = path.join(assetRoot, 'js', `${definition.name}.js`);
  const sourceJsPath = path.join(sourceRoot, definition.sourceJs);
  const htmlParts = [];

  if (!entry) caseBlockers.push({ code: 'registry_entry_missing' });
  if (entry && !['ready', 'discoverable'].includes(entry.readiness?.status)) {
    caseBlockers.push({ code: 'registry_readiness_blocked', status: entry.readiness?.status ?? null });
  }
  if (entry?.runtime?.rule_name !== definition.name) {
    caseBlockers.push({ code: 'registry_rule_mismatch', actual: entry?.runtime?.rule_name ?? null });
  }
  if (!rule) caseBlockers.push({ code: 'loader_rule_missing' });
  if (!exists(cssPath) || !read(cssPath).includes(definition.selector)) {
    caseBlockers.push({ code: 'generated_css_missing_selector', selector: definition.selector });
  }
  if (!exists(jsPath) || fs.statSync(jsPath).size === 0) {
    caseBlockers.push({ code: 'generated_js_missing' });
  }
  if (!exists(sourceJsPath)) {
    caseBlockers.push({ code: 'source_js_missing', path: definition.sourceJs });
  } else {
    const sourceJs = read(sourceJsPath);
    for (const snippet of definition.sourceSnippets) {
      if (!sourceJs.includes(snippet)) caseBlockers.push({ code: 'source_contract_missing', snippet });
    }
  }

  for (const snippet of definition.pageSnippets) {
    if (!page.includes(snippet)) caseBlockers.push({ code: 'page_section_missing', snippet });
  }

  for (const example of definition.examples) {
    const id = `components/${definition.name}/${example}`;
    const exampleRoot = path.join(projectRoot, 'examples', id);
    const htmlPath = path.join(exampleRoot, 'index.html');
    if (!page.includes(`id="${id}"`)) caseBlockers.push({ code: 'page_example_reference_missing', id });
    if (!exists(htmlPath)) {
      caseBlockers.push({ code: 'example_html_missing', id });
      continue;
    }
    const html = read(htmlPath);
    htmlParts.push(html);
    const balanceErrors = htmlBalanceErrors(html);
    if (balanceErrors.length) caseBlockers.push({ code: 'example_html_unbalanced', id, errors: balanceErrors });
    if (/(?:distr\/component\/(?:all|components)|component(?:\.min)?\.css)/iu.test(html)) {
      caseBlockers.push({ code: 'example_loads_full_component_bundle', id });
    }
  }

  const matcher = parseRule(rule?.regex);
  if (!matcher || !matcher.test(htmlParts.join('\n'))) {
    caseBlockers.push({ code: 'loader_rule_does_not_match_examples', regex: rule?.regex ?? null });
  }

  if (definition.name === 'buttons') {
    const allHtml = htmlParts.join('\n');
    for (const tag of allHtml.matchAll(/<button\b[^>]*>/giu)) {
      if (!/\btype=(?:"[^"]+"|'[^']+')/iu.test(tag[0])) {
        caseBlockers.push({ code: 'button_type_missing', tag: tag[0] });
      }
    }
  }
  if (definition.name === 'checkbox') {
    const statesJs = path.join(projectRoot, 'examples/components/checkbox/states/index.js');
    if (!exists(statesJs) || !read(statesJs).includes('SF.Checkbox.setState')) {
      caseBlockers.push({ code: 'indeterminate_runtime_initialization_missing' });
    }
  }

  observations.push({
    component: definition.name,
    readiness: entry?.readiness?.status ?? null,
    examples: definition.examples.length,
    rule: rule?.regex ?? null,
    asset_root: entry?.runtime?.asset_root ?? null,
    status: caseBlockers.length ? 'fail' : 'verified',
    blockers: caseBlockers,
  });
  blockers.push(...caseBlockers.map((item) => ({ component: definition.name, ...item })));
}

if (registryComponents.length !== 63) {
  addBlocker('registry_component_count_mismatch', { expected: 63, actual: registryComponents.length });
}

const lineage = registry.compatibility?.build_inputs ?? {};
const runtimeSources = registry.compatibility?.runtime_sources ?? [];
const actualLineage = {
  source: lineage.source?.commit ?? null,
  builder: lineage.builder?.commit ?? null,
  core: runtimeSources.find((item) => item.owner === 'simai/ui')?.commit ?? null,
  smart: runtimeSources.find((item) => item.owner === 'simai/ui-smart')?.commit ?? null,
};
const lineageMismatches = Object.entries(revisions)
  .filter(([name, expected]) => actualLineage[name] !== expected)
  .map(([name, expected]) => ({ name, expected, actual: actualLineage[name] }));
if (lineageMismatches.length) {
  sourceDefects.push({
    code: 'registry_candidate_lineage_stale',
    owner: 'framework_registry_generation',
    mismatches: lineageMismatches,
  });
}

const modalRuntime = read(path.join(coreRoot, 'distr/component/modal/js/modal.js'));
const smartModalManifest = readJson(path.join(smartRoot, 'smart/modal/smart.manifest.json'));
const smartModalRuntime = read(path.join(smartRoot, 'smart/modal/js/modal.js'));
const manifestPositions = smartModalManifest.inputs?.properties?.position?.enum ?? [];
const ordinaryAllowsLogical = /\['center',\s*'left',\s*'right',\s*'inline-start'/u.test(modalRuntime);
const smartGetterAllowsLogical = /getEnumAttr\("position",\s*\["center",\s*"left",\s*"right",\s*"inline-start"/u.test(smartModalRuntime);
if (
  manifestPositions.includes('inline-start') &&
  manifestPositions.includes('inline-end') &&
  (!ordinaryAllowsLogical || !smartGetterAllowsLogical)
) {
  sourceDefects.push({
    code: 'modal_logical_position_normalized_to_center',
    owner: 'simai/ui-source',
    ordinary_runtime_allows_logical: ordinaryAllowsLogical,
    smart_manifest_declares_logical: true,
    smart_runtime_allows_logical: smartGetterAllowsLogical,
  });
  const modalObservation = observations.find((item) => item.component === 'modal');
  if (modalObservation) modalObservation.status = 'source_defect';
}

const selectedKeys = new Set(cases.map((item) => `component.${item.name}`));
const statusItems = Array.isArray(documentationStatus.items) ? documentationStatus.items : [];
const remainingItems = statusItems.filter(
  (item) => typeof item.key === 'string' && item.key.startsWith('component.') && !selectedKeys.has(item.key),
);
const categoryMap = {
  current: 'already_matches',
  changed: 'differs',
  unverified: 'not_confirmed',
  missing_example: 'missing_scenario_evidence',
};
const classificationItems = remainingItems.map((item) => ({
  component: item.key.replace(/^component\./u, ''),
  category: categoryMap[item.status] ?? 'not_confirmed',
  documentation_status: item.status,
  page_path: item.page_path,
  scenario_evidence: item.missing_example_cases?.length ? 'missing' : 'not_assessed_by_hash_status',
}));
const classificationCounts = classificationItems.reduce((counts, item) => {
  counts[item.category] = (counts[item.category] ?? 0) + 1;
  return counts;
}, {});
const classification = {
  schema: 'ui-doc.component_catalog_classification.v1',
  source_revision: documentationStatus.sources?.[0]?.revision ?? null,
  exact_candidate: revisions,
  selected_components: [...selectedKeys].map((key) => key.replace(/^component\./u, '')),
  remaining_count: classificationItems.length,
  counts: classificationCounts,
  note: 'Hash status does not prove keyboard, responsive, accessibility or LTR/RTL behavior.',
  items: classificationItems,
};
if (remainingItems.length !== 59) {
  addBlocker('remaining_component_count_mismatch', { expected: 59, actual: remainingItems.length });
}

const report = {
  schema: 'ui-doc.component_reference_batch.v1',
  status: blockers.length ? 'fail' : sourceDefects.length ? 'pass_with_source_defects' : 'pass',
  candidate: revisions,
  scope: {
    selected_components: cases.length,
    examples: observations.reduce((sum, item) => sum + item.examples, 0),
    registry_components: registryComponents.length,
    remaining_components_classified: classificationItems.length,
  },
  observations,
  source_defects: sourceDefects,
  blocker_count: blockers.length,
  blockers,
};

if (outputPath) fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
if (classificationOutputPath) fs.writeFileSync(classificationOutputPath, `${JSON.stringify(classification, null, 2)}\n`);
if (json) console.log(JSON.stringify(report, null, 2));
else console.log(`${report.status}: ${cases.length} components, ${report.scope.examples} examples, ${blockers.length} blockers, ${sourceDefects.length} source defects`);
process.exit(blockers.length ? 1 : 0);
