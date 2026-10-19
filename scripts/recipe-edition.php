<?php

declare(strict_types=1);

// The Composition Recipe edition a build executes. Docara's composition
// runtime lock (docara.composition_runtime_lock.v3) lists every Recipe edition
// it accepts as contract.editions [{edition, contract_digest}]; the Framework
// distribution the build used declares its own edition in
// distr/core/contracts/composition-recipe-v1/contract.lock.json. The edition
// executed is the distribution's, and only when Docara lists it with the same
// digest.

/**
 * @return array{edition: string, contract_digest: string}|null
 */
function simai_recipe_edition(mixed $runtimeLock, mixed $distributionLock): ?array
{
    if (! is_array($runtimeLock) || ($runtimeLock['schema'] ?? null) !== 'docara.composition_runtime_lock.v3') {
        return null;
    }
    if (! is_array($distributionLock)
        || ! simai_recipe_is_contract_lock($distributionLock)
        || ! is_string($distributionLock['version'] ?? null)
        || ! is_string($distributionLock['contractDigest'] ?? null)
    ) {
        return null;
    }
    foreach ($runtimeLock['contract']['editions'] ?? [] as $entry) {
        if (is_array($entry)
            && ($entry['edition'] ?? null) === $distributionLock['version']
            && ($entry['contract_digest'] ?? null) === $distributionLock['contractDigest']
        ) {
            return ['edition' => $entry['edition'], 'contract_digest' => $entry['contract_digest']];
        }
    }

    return null;
}

function simai_recipe_is_contract_lock(array $lock): bool
{
    require_once __DIR__ . '/schema-name.php';

    return simai_is_schema($lock, 'simai.composition.recipe-contract-lock', 1);
}
