<?php

declare(strict_types=1);

require_once __DIR__ . '/recipe-edition.php';

$runtime = [
    'schema' => 'docara.composition_runtime_lock.v3',
    'contract' => ['editions' => [
        ['edition' => '1.0.1', 'contract_digest' => 'sha256:' . str_repeat('a', 64)],
        ['edition' => '1.1.0', 'contract_digest' => 'sha256:' . str_repeat('b', 64)],
    ]],
];
$lock = static fn (string $version, string $digest, array $name = ['schema' => 'simai.composition.recipe-contract-lock.v1']): array
    => [...$name, 'version' => $version, 'contractDigest' => 'sha256:' . str_repeat($digest, 64)];
$cases = [
    'older edition' => [simai_recipe_edition($runtime, $lock('1.0.1', 'a')), '1.0.1'],
    'current edition' => [simai_recipe_edition($runtime, $lock('1.1.0', 'b')), '1.1.0'],
    'name without a version' => [simai_recipe_edition($runtime, $lock('1.1.0', 'b', ['schema' => 'simai.composition.recipe-contract-lock', 'schema_version' => 1])), '1.1.0'],
    'digest of another edition' => [simai_recipe_edition($runtime, $lock('1.1.0', 'a')), null],
    'edition not listed' => [simai_recipe_edition($runtime, $lock('1.2.0', 'b')), null],
    'other lock format' => [simai_recipe_edition($runtime, $lock('1.1.0', 'b', ['schema' => 'simai.composition.recipe.v1'])), null],
    'runtime lock v2' => [simai_recipe_edition(['schema' => 'docara.composition_runtime_lock.v2'] + $runtime, $lock('1.1.0', 'b')), null],
    'no distribution lock' => [simai_recipe_edition($runtime, null), null],
];
$failed = [];
foreach ($cases as $name => [$actual, $expected]) {
    if (($actual['edition'] ?? null) !== $expected) {
        $failed[] = $name;
    }
}
if ($failed !== []) {
    fwrite(STDERR, 'UI_DOC_RECIPE_EDITION_FAILED: ' . implode(', ', $failed) . "\n");
    exit(1);
}
echo 'UI_DOC_RECIPE_EDITION_PASS (' . count($cases) . " cases)\n";
