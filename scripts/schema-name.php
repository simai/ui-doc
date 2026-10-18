<?php

declare(strict_types=1);

// A data format's name in either form (Framework journal record
// format-names-without-version): "schema": "simai.<name>" with
// "schema_version": <major> beside it, or the older "simai.<name>.v<major>".
// The ui-doc scripts that check a Framework format by its name read it here,
// as the Framework's own readers read it through core/js/composition/schema-name.mjs.

/**
 * @return array{name: string, version: ?int}|null
 */
function simai_read_schema(mixed $document): ?array
{
    if (! is_array($document)) {
        return null;
    }
    $label = $document['schema'] ?? $document['schema_id'] ?? null;
    if (! is_string($label) || $label === '') {
        return null;
    }
    if (preg_match('/\A(.+)\.v([0-9]+)\z/D', $label, $match) === 1) {
        return ['name' => $match[1], 'version' => (int) $match[2]];
    }
    $version = $document['schema_version'] ?? null;

    return ['name' => $label, 'version' => is_int($version) ? $version : null];
}

function simai_is_schema(mixed $document, string $name, int $version): bool
{
    $read = simai_read_schema($document);

    return $read !== null && $read['name'] === $name && $read['version'] === $version;
}
