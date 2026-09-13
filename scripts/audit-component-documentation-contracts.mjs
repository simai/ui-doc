#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const value = (name) => {
  const prefix = `${name}=`;
  return args.find((argument) => argument.startsWith(prefix))?.slice(prefix.length);
};
const refresh = args.includes('--refresh');
const jsonOutput = args.includes('--json');
const sourceRoot = value('--source-root');
const coreRoot = value('--core-root');

if ((sourceRoot && !path.isAbsolute(sourceRoot)) || (coreRoot && !path.isAbsolute(coreRoot))) {
  console.error('Paths passed to --source-root and --core-root must be absolute.');
  process.exit(2);
}
if (refresh && (!sourceRoot || !coreRoot)) {
  console.error('--refresh requires both --source-root and --core-root.');
  process.exit(2);
}

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha256 = (content) => crypto.createHash('sha256').update(content).digest('hex');
const findings = [];
const add = (code, details = {}) => findings.push({ code, ...details });

const lock = readJson(path.join(projectRoot, 'simai-framework.lock.json'));
const registry = readJson(path.join(projectRoot, 'contracts/generated/framework-contract-registry.json'));
const sourceRevision = registry.compatibility?.build_inputs?.source?.commit;
const coreRevision = lock.runtime?.ui?.commit;

if (!/^[0-9a-f]{40}$/u.test(sourceRevision ?? '')) add('source_revision_missing');
if (!/^[0-9a-f]{40}$/u.test(coreRevision ?? '')) add('core_revision_missing');

const gitShow = (root, revision, file) => {
  const result = spawnSync('git', ['-C', root, 'show', `${revision}:${file}`], {
    encoding: null,
    maxBuffer: 32 * 1024 * 1024,
  });
  if (result.status !== 0) {
    throw new Error((result.stderr || Buffer.from('git show failed')).toString('utf8').trim());
  }
  return result.stdout;
};

const parseRule = (source) => {
  if (typeof source !== 'string' || !source.startsWith('/')) return null;
  const lastSlash = source.lastIndexOf('/');
  if (lastSlash < 1) return null;
  return new RegExp(source.slice(1, lastSlash), source.slice(lastSlash + 1));
};

const contractsRoot = path.join(projectRoot, 'contracts/documentation/components');
const contractPaths = fs.readdirSync(contractsRoot)
  .filter((name) => name.endsWith('.json'))
  .sort()
  .map((name) => path.join(contractsRoot, name));

for (const contractPath of contractPaths) {
  const contract = readJson(contractPath);
  const component = contract.component;
  const pagePath = path.join(projectRoot, contract.page);
  const page = fs.existsSync(pagePath) ? fs.readFileSync(pagePath, 'utf8') : '';

  if (contract.schema !== 'ui-doc.component_documentation_contract.v1') {
    add('contract_schema_invalid', { component });
    continue;
  }
  if (!page) add('documentation_page_missing', { component, path: contract.page });

  const h1Count = (page.match(/^#\s+\S/gmu) || []).length;
  if (h1Count !== 1) add('documentation_h1_count_invalid', { component, count: h1Count });
  for (const section of contract.page_sections ?? []) {
    if (!page.includes(section)) add('documentation_section_missing', { component, section });
  }
  for (const snippet of contract.page_snippets ?? []) {
    if (!page.includes(snippet)) add('documentation_fact_missing', { component, snippet });
  }

  for (const [exampleId, snippets] of Object.entries(contract.examples ?? {})) {
    const directive = `id="${exampleId}"`;
    const examplePath = path.join(projectRoot, 'examples', exampleId, 'index.html');
    if (!page.includes(directive)) add('documentation_example_not_referenced', { component, example: exampleId });
    if (!fs.existsSync(examplePath)) {
      add('documentation_example_missing', { component, example: exampleId });
      continue;
    }
    const example = fs.readFileSync(examplePath, 'utf8');
    for (const snippet of snippets) {
      if (!example.includes(snippet)) add('documentation_example_fact_missing', { component, example: exampleId, snippet });
    }
  }

  const registryEntry = registry.entries?.find((entry) => entry.id === `component.${component}`);
  if (!registryEntry) add('registry_component_missing', { component });
  if (registryEntry?.runtime?.rule_name !== component) add('registry_rule_mismatch', { component });
  if (registryEntry?.runtime?.declared?.css !== true || registryEntry?.runtime?.declared?.js !== true) {
    add('registry_runtime_incomplete', { component });
  }

  if (!refresh && contract.reviewed?.source_revision !== sourceRevision) {
    add('documentation_source_review_required', {
      component,
      reviewed: contract.reviewed?.source_revision || null,
      current: sourceRevision,
    });
  }
  if (!refresh && contract.reviewed?.core_revision !== coreRevision) {
    add('documentation_generated_review_required', {
      component,
      reviewed: contract.reviewed?.core_revision || null,
      current: coreRevision,
    });
  }

  const nextSourceHashes = {};
  const nextGeneratedHashes = {};
  if (sourceRoot) {
    for (const file of contract.source_files ?? []) {
      try {
        const content = gitShow(sourceRoot, sourceRevision, file);
        const text = content.toString('utf8');
        const digest = sha256(content);
        nextSourceHashes[file] = digest;
        for (const snippet of contract.source_snippets?.[file] ?? []) {
          if (!text.includes(snippet)) add('source_contract_fact_missing', { component, file, snippet });
        }
        if (!refresh && contract.reviewed?.source_files?.[file] !== digest) {
          add('documentation_source_file_changed', { component, file });
        }
      } catch (error) {
        add('source_contract_file_unreadable', { component, file, message: error.message });
      }
    }
  }

  if (coreRoot) {
    for (const file of contract.generated_files ?? []) {
      try {
        const content = gitShow(coreRoot, coreRevision, file);
        const text = content.toString('utf8');
        const digest = sha256(content);
        nextGeneratedHashes[file] = digest;
        for (const snippet of contract.generated_snippets?.[file] ?? []) {
          if (!text.includes(snippet)) add('generated_contract_fact_missing', { component, file, snippet });
        }
        if (!refresh && contract.reviewed?.generated_files?.[file] !== digest) {
          add('documentation_generated_file_changed', { component, file });
        }
      } catch (error) {
        add('generated_contract_file_unreadable', { component, file, message: error.message });
      }
    }

    try {
      const rules = JSON.parse(gitShow(coreRoot, coreRevision, 'distr/rule/rule.json').toString('utf8'));
      const rule = rules.find((item) => item.name === component);
      const pattern = parseRule(rule?.regex);
      if (!pattern) add('loader_rule_invalid', { component });
      for (const exampleId of Object.keys(contract.examples ?? {})) {
        const example = fs.readFileSync(path.join(projectRoot, 'examples', exampleId, 'index.html'), 'utf8');
        pattern.lastIndex = 0;
        if (!pattern.test(example)) add('loader_does_not_detect_example', { component, example: exampleId });
      }
      const relations = new Set((rule?.relation ?? []).map((item) => item.name));
      for (const dependency of ['icons', 'icon-buttons']) {
        if (!relations.has(dependency)) add('loader_dependency_missing', { component, dependency });
      }
    } catch (error) {
      add('loader_rule_unreadable', { component, message: error.message });
    }
  }

  if (refresh) {
    const ownFindings = findings.filter((finding) => finding.component === component);
    if (ownFindings.length === 0) {
      contract.reviewed = {
        source_revision: sourceRevision,
        core_revision: coreRevision,
        source_files: nextSourceHashes,
        generated_files: nextGeneratedHashes,
      };
      fs.writeFileSync(contractPath, `${JSON.stringify(contract, null, 2)}\n`);
    }
  }
}

const report = {
  schema: 'ui-doc.component_documentation_audit.v1',
  status: findings.length === 0 ? 'pass' : 'needs_revision',
  contracts: contractPaths.length,
  source_revision: sourceRevision,
  core_revision: coreRevision,
  exact_source_checked: Boolean(sourceRoot),
  exact_core_checked: Boolean(coreRoot),
  refreshed: refresh && findings.length === 0,
  findings,
};

if (jsonOutput || findings.length > 0) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`Component documentation contracts: PASS (${contractPaths.length})`);
  console.log(`Source ${sourceRevision}; Core ${coreRevision}`);
}
process.exit(findings.length === 0 ? 0 : 1);
