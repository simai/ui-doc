#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const json = args.includes('--json');
const positional = args.filter((argument) => argument !== '--json');
const distributionRoot = positional[0];

if (!distributionRoot || !path.isAbsolute(distributionRoot)) {
  console.error('Usage: audit-utility-public-contract.mjs /absolute/path/to/build [--json]');
  process.exit(2);
}

const projectRoot = path.resolve(import.meta.dirname, '..');
const utilityRoot = path.join(distributionRoot, 'utility');
const documentationRoot = path.join(projectRoot, 'content', 'ru', 'utilities');

if (!fs.existsSync(utilityRoot) || !fs.statSync(utilityRoot).isDirectory()) {
  console.error(`Utility build not found: ${utilityRoot}`);
  process.exit(2);
}

const walk = (root, extension) => fs.readdirSync(root, { withFileTypes: true })
  .flatMap((entry) => {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) return walk(absolute, extension);
    return entry.name.endsWith(extension) ? [absolute] : [];
  });

const pages = walk(documentationRoot, '.md');
const pagesByStem = new Map();
for (const page of pages) {
  const stem = path.basename(page, '.md');
  if (!pagesByStem.has(stem)) pagesByStem.set(stem, []);
  pagesByStem.get(stem).push(page);
}

// These are documentation routes whose historical, reader-facing names differ
// from the generated Loader family. They are aliases of pages, not aliases of CSS.
const documentationMap = JSON.parse(fs.readFileSync(
  path.join(projectRoot, 'scripts', 'utility-documentation-map.json'),
  'utf8',
));
const pageAliases = documentationMap.page_aliases;

const internalFamilies = {
  js: 'runtime bundle, not a CSS utility family',
  ...Object.fromEntries(Object.entries(documentationMap.non_visual_families ?? {})
    .map(([family, value]) => [family, value.reason])),
};

const families = fs.readdirSync(utilityRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const resolved = [];
const missing = [];
for (const family of families) {
  if (internalFamilies[family]) {
    resolved.push({ family, status: 'internal', reason: internalFamilies[family] });
    continue;
  }
  const pageStem = pagesByStem.has(family) ? family : pageAliases[family];
  const candidates = pageStem ? pagesByStem.get(pageStem) : undefined;
  if (!candidates?.length) {
    missing.push(family);
    continue;
  }
  resolved.push({
    family,
    status: pageStem === family ? 'documented' : 'documented-by-alias',
    page: path.relative(projectRoot, candidates[0]),
  });
}

const requiredSnippets = {
  'content/ru/utilities/grid-and-flexbox-utilities/justify-content.md': [
    'justify-center',
    'content-main-center',
  ],
  'content/ru/utilities/grid-and-flexbox-utilities/gap.md': [
    'gap-2',
    'col-gap-2',
    'row-gap-2',
    'g-*',
  ],
  'content/ru/utilities/sizes/height.md': ['h-min', 'h-content-min'],
  'content/ru/utilities/layout/isolation.md': ['isolation-auto'],
  'content/ru/utilities/transform/transform-translate.md': ['hover:-translate-x-1'],
  'content/ru/utilities/indents/margin.md': ['md:-m-1'],
  'content/ru/utilities/layout/element-position.md': ['md:-top-a0'],
};

const snippetFailures = [];
for (const [relative, snippets] of Object.entries(requiredSnippets)) {
  const absolute = path.join(projectRoot, relative);
  const source = fs.existsSync(absolute) ? fs.readFileSync(absolute, 'utf8') : '';
  for (const snippet of snippets) {
    if (!source.includes(snippet)) snippetFailures.push(`${relative}: missing ${snippet}`);
  }
}

// Documentation examples are executable contracts. Checking the prose alone
// allowed a public class to remain documented after it disappeared from the
// generated CSS. Keep a small set of representative aliases bound to the
// actual distribution used by the documentation build.
const runtimeSelectors = {
  'justify-content/default/css/default.css': [
    '.justify-center',
    '.content-main-center',
  ],
  'justify-content/xxl/css/xxl.css': [
    '.xxl\\:justify-center',
    '.xxl\\:content-main-center',
  ],
};

for (const [relative, selectors] of Object.entries(runtimeSelectors)) {
  const absolute = path.join(utilityRoot, relative);
  const source = fs.existsSync(absolute) ? fs.readFileSync(absolute, 'utf8') : '';
  for (const selector of selectors) {
    if (!source.includes(selector)) {
      snippetFailures.push(`runtime ${relative}: missing ${selector}`);
    }
  }
}

const forbiddenPatterns = [
  {
    file: 'content/ru/utilities/layout/isolation.md',
    pattern: /class=["'][^"']*(?:^|\s)auto(?:\s|$)/m,
    message: 'generic auto class must not be documented',
  },
];

for (const check of forbiddenPatterns) {
  const source = fs.readFileSync(path.join(projectRoot, check.file), 'utf8');
  if (check.pattern.test(source)) snippetFailures.push(`${check.file}: ${check.message}`);
}

for (const page of pages) {
  const source = fs.readFileSync(page, 'utf8');
  if (/(?:^|\s)-(?:sm|md|lg|xl|hover|focus|active):/m.test(source)) {
    snippetFailures.push(`${path.relative(projectRoot, page)}: malformed negative modifier order`);
  }
}

const report = {
  utilityFamilies: families.length,
  documentationPages: pages.length,
  documentedFamilies: resolved.filter((entry) => entry.status !== 'internal').length,
  internalFamilies: resolved.filter((entry) => entry.status === 'internal'),
  missingFamilies: missing,
  contractFailures: snippetFailures,
  ok: missing.length === 0 && snippetFailures.length === 0,
};

if (json) {
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
} else {
  console.log(`Utility families: ${report.utilityFamilies}`);
  console.log(`Documented: ${report.documentedFamilies}`);
  console.log(`Explicitly internal: ${report.internalFamilies.length}`);
  console.log(`Missing: ${report.missingFamilies.length}`);
  console.log(`Contract failures: ${report.contractFailures.length}`);
}

process.exit(report.ok ? 0 : 1);
