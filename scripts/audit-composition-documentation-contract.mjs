#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const arg = (name) => args.find((item) => item.startsWith(`${name}=`))?.slice(name.length + 1);
const refresh = args.includes('--refresh');
const jsonOutput = args.includes('--json');
const sourceRoot = arg('--source-root');
const coreRoot = arg('--core-root');
const contractPath = path.join(root, 'contracts/documentation/composition.json');
const sha256 = (bytes) => crypto.createHash('sha256').update(bytes).digest('hex');
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const findings = [];
const add = (code, details = {}) => findings.push({ code, ...details });

if ((sourceRoot && !path.isAbsolute(sourceRoot)) || (coreRoot && !path.isAbsolute(coreRoot))) {
  console.error('Paths passed to --source-root and --core-root must be absolute.');
  process.exit(2);
}
if (refresh && (!sourceRoot || !coreRoot)) {
  console.error('--refresh requires --source-root and --core-root.');
  process.exit(2);
}

const contract = readJson(contractPath);
const registry = readJson(path.join(root, 'contracts/generated/framework-contract-registry.json'));
const lock = readJson(path.join(root, 'simai-framework.lock.json'));
const sourceRevision = registry.compatibility?.build_inputs?.source?.commit;
const coreRevision = lock.runtime?.ui?.commit;
if (contract.schema !== 'ui-doc.composition_documentation_contract.v1') add('contract_schema_invalid');
if (!refresh && contract.reviewed?.source_revision !== sourceRevision) add('source_revision_review_required', { reviewed: contract.reviewed?.source_revision, current: sourceRevision });
if (!refresh && contract.reviewed?.core_revision !== coreRevision) add('core_revision_review_required', { reviewed: contract.reviewed?.core_revision, current: coreRevision });

for (const pageContract of contract.pages ?? []) {
  const file = path.join(root, pageContract.path);
  if (!fs.existsSync(file)) { add('page_missing', { path: pageContract.path }); continue; }
  const text = fs.readFileSync(file, 'utf8');
  if ((text.match(/^#\s+\S/gmu) || []).length !== 1) add('page_h1_invalid', { path: pageContract.path });
  for (const snippet of pageContract.snippets ?? []) if (!text.includes(snippet)) add('page_fact_missing', { path: pageContract.path, snippet });
}

const gitShow = (repo, revision, file) => {
  const result = spawnSync('git', ['-C', repo, 'show', `${revision}:${file}`], { encoding: null, maxBuffer: 32 * 1024 * 1024 });
  if (result.status !== 0) throw new Error((result.stderr || Buffer.from('git show failed')).toString('utf8').trim());
  return result.stdout;
};
const next = { source_files: {}, generated_files: {} };
for (const [kind, repo, revision, files] of [
  ['source', sourceRoot, sourceRevision, contract.source_files ?? []],
  ['generated', coreRoot, coreRevision, contract.generated_files ?? []],
]) {
  if (!repo) continue;
  for (const file of files) {
    try {
      const bytes = gitShow(repo, revision, file);
      const digest = sha256(bytes);
      next[`${kind}_files`][file] = digest;
      if (!refresh && contract.reviewed?.[`${kind}_files`]?.[file] !== digest) add(`${kind}_file_changed`, { file });
      for (const snippet of contract[`${kind}_snippets`]?.[file] ?? []) {
        if (!bytes.toString('utf8').includes(snippet)) add(`${kind}_fact_missing`, { file, snippet });
      }
    } catch (error) { add(`${kind}_file_unreadable`, { file, message: error.message }); }
  }
}

if (sourceRoot) {
  const sourceFixture = gitShow(sourceRoot, sourceRevision, contract.fixture.source);
  const docsFixture = fs.readFileSync(path.join(root, contract.fixture.public_copy));
  if (!sourceFixture.equals(docsFixture)) add('public_fixture_drift', { source: contract.fixture.source, public_copy: contract.fixture.public_copy });
}

if (refresh && findings.length === 0) {
  contract.reviewed = { source_revision: sourceRevision, core_revision: coreRevision, ...next };
  fs.writeFileSync(contractPath, `${JSON.stringify(contract, null, 2)}\n`);
}
const report = {
  schema: 'ui-doc.composition_documentation_audit.v1',
  status: findings.length === 0 ? 'pass' : 'needs_revision',
  source_revision: sourceRevision,
  core_revision: coreRevision,
  exact_source_checked: Boolean(sourceRoot),
  exact_core_checked: Boolean(coreRoot),
  refreshed: refresh && findings.length === 0,
  pages: contract.pages?.length ?? 0,
  findings,
};
if (jsonOutput || findings.length) console.log(JSON.stringify(report, null, 2));
else console.log(`Composition documentation contract: PASS (${report.pages} pages)`);
process.exit(findings.length === 0 ? 0 : 1);
