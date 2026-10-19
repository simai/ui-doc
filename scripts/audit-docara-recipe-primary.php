#!/usr/bin/env php
<?php
declare(strict_types=1);
require_once __DIR__ . '/schema-name.php';
require_once __DIR__ . '/recipe-edition.php';

$root = dirname(__DIR__);
$read = static fn (string $path): array => json_decode((string) file_get_contents($path), true, 512, JSON_THROW_ON_ERROR);
$plans = $read($root . '/build_production.docara/resolved-page-plans.json');
$lock = $read($root . '/composer.lock');
$specification = $read($root . '/contracts/composition-recipe-v1/contract.lock.json');
// The Recipe edition the build executed is the one the Framework distribution
// it used declares, which Docara's runtime lock must list (recipe-edition.php).
// The distribution is the one Docara reads: DOCARA_SIMAI_UI_ROOT or
// SIMAI_UI_ROOT, else the pinned runtime commit read from ../ui.
$runtimeLock = $read($root . '/vendor/simai/docara/resources/contracts/composition/runtime-lock.json');
$distributionPath = 'distr/core/contracts/composition-recipe-v1/contract.lock.json';
$frameworkRoot = getenv('DOCARA_SIMAI_UI_ROOT') ?: getenv('SIMAI_UI_ROOT') ?: '';
if ($frameworkRoot !== '') {
    $distributionLock = $read(rtrim($frameworkRoot, '/') . '/' . $distributionPath);
} else {
    $commit = (string) ($read($root . '/simai-framework.lock.json')['runtime']['ui']['commit'] ?? '');
    $bytes = shell_exec('git -C ' . escapeshellarg(dirname($root) . '/ui') . ' show ' . escapeshellarg($commit . ':' . $distributionPath) . ' 2>/dev/null');
    $distributionLock = is_string($bytes) ? json_decode($bytes, true) : null;
}
$executed = simai_recipe_edition($runtimeLock, $distributionLock);
$executedEdition = (string) ($executed['edition'] ?? '');
$executedDigest = (string) ($executed['contract_digest'] ?? '');
$package = null;
foreach ($lock['packages'] ?? [] as $candidate) {
    if (($candidate['name'] ?? null) === 'simai/docara') $package = $candidate;
}
$engine = $plans['build']['engine'] ?? [];
$findings = [];
$add = static function (string $code, ?string $url = null) use (&$findings): void {
    $findings[] = array_filter(['code' => $code, 'url' => $url], static fn (mixed $value): bool => $value !== null);
};
if (($plans['schema'] ?? null) !== 'docara.resolved_page_plans.v1') $add('page_plan_schema_invalid');
if ($executed === null) $add('recipe_execution_edition_unsupported');
// The kit the site publishes is the edition the build executed.
if ($executed !== null && ($executedEdition !== ($specification['version'] ?? null) || $executedDigest !== ($specification['contractDigest'] ?? null))) {
    $add('recipe_published_edition_mismatch');
}
if (($engine['source_revision'] ?? null) !== ($package['source']['reference'] ?? null)) $add('docara_composer_revision_mismatch');
if (!is_array($plans['pages'] ?? null) || $plans['pages'] === []) $add('pages_missing');
$registries = [];
foreach ($plans['pages'] ?? [] as $page) {
    $url = (string) ($page['url'] ?? '');
    $receipt = $page['declarative_pipeline']['composition_recipe_primary'] ?? null;
    if (!is_array($receipt) || ($receipt['schema'] ?? null) !== 'docara.composition_recipe_primary.v1') {
        $add('primary_recipe_receipt_missing', $url);
        continue;
    }
    $dependency = $receipt['dependency_receipt'] ?? [];
    $execution = $dependency['executionContract'] ?? [];
    // Either form of the format name (scripts/schema-name.php).
    if (!simai_is_schema($dependency, 'simai.composition.dependencies', 1)) $add('dependency_receipt_invalid', $url);
    if (($execution['contractDigest'] ?? null) !== $executedDigest) $add('recipe_specification_mismatch', $url);
    if (($execution['rendererDigest'] ?? null) !== 'sha256:' . ($engine['tree_sha256'] ?? '')) $add('docara_renderer_mismatch', $url);
    foreach (['recipe_digest' => 'recipeDigest', 'document_digest' => 'documentDigest'] as $field => $dependencyField) {
        $value = (string) ($receipt[$field] ?? '');
        if (!preg_match('/\Asha256:[a-f0-9]{64}\z/D', $value) || $value !== ($dependency[$dependencyField] ?? null)) $add($field . '_invalid', $url);
    }
    $registry = (string) ($execution['registryDigest'] ?? '');
    if (!preg_match('/\Asha256:[a-f0-9]{64}\z/D', $registry)) $add('registry_digest_invalid', $url);
    $registries[$registry] = true;
    if (($page['declarative_pipeline']['status'] ?? null) !== 'published') $add('page_pipeline_not_published', $url);
}
if (count($registries) !== 1) $add('page_type_registries_differ');
echo json_encode([
    'schema' => 'ui-doc.docara_recipe_primary_audit.v1',
    'status' => $findings === [] ? 'pass' : 'needs_revision',
    'pages' => count($plans['pages'] ?? []),
    'docara_revision' => $engine['source_revision'] ?? null,
    'specification_edition' => $specification['version'] ?? null,
    'specification_digest' => $specification['contractDigest'] ?? null,
    'execution_edition' => $executedEdition,
    'execution_digest' => $executedDigest,
    'findings' => $findings,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
exit($findings === [] ? 0 : 1);
