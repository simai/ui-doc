#!/usr/bin/env php
<?php

declare(strict_types=1);

/**
 * Print the Framework pins of scripts/materialize-framework-runtime.php as
 * NAME=value lines, one per pin, for `>> "$GITHUB_ENV"`. CI reads the
 * revisions from the one place a repin writes them and never repeats them.
 *
 *   php scripts/print-framework-pins.php
 *
 * Exits 1 when a pin cannot be read, so a reshaped pin file fails CI loudly
 * instead of cloning the wrong revision.
 */

$text = file_get_contents(__DIR__ . '/materialize-framework-runtime.php');
if (! is_string($text)) {
    fwrite(STDERR, "pin file unreadable\n");
    exit(1);
}

$pins = [];
foreach (['UI_METADATA_REVISION', 'UI_RUNTIME_REVISION', 'SOURCE_REVISION', 'BUILDER_REVISION'] as $name) {
    if (preg_match("/^const {$name} = '([0-9a-f]{40})';$/m", $text, $match) !== 1) {
        fwrite(STDERR, "pin unreadable: {$name}\n");
        exit(1);
    }
    $pins[$name] = $match[1];
}

// The one product package the site serves; a second package would need its
// own variables and its own build step, so its appearance fails here.
$package = "/'(?<name>[a-z0-9-]+)' => \[\s*'repository' => '(?<repository>[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+)',"
    . "\s*'revision' => '(?<revision>[0-9a-f]{40})',\s*'path' => '(?<path>[A-Za-z0-9._\/-]+)',"
    . "\s*'archive_sha256' => '(?<archive>[0-9a-f]{64})',\s*'builder' => '(?<builder>[0-9a-f]{40})',\s*\]/";
if (preg_match_all($package, $text, $matches, PREG_SET_ORDER) !== 1 || $matches[0]['name'] !== 'larena') {
    fwrite(STDERR, "pin unreadable: PACKAGES must declare exactly the larena package\n");
    exit(1);
}
$pins['LARENA_REPOSITORY'] = $matches[0]['repository'];
$pins['LARENA_REVISION'] = $matches[0]['revision'];
$pins['LARENA_PATH'] = $matches[0]['path'];
$pins['LARENA_ARCHIVE_SHA256'] = $matches[0]['archive'];
$pins['LARENA_BUILDER'] = $matches[0]['builder'];
// The folder CI clones the package repository into, beside this checkout: the
// repository's own name (simai/ui-admin -> ui-admin), the layout the scripts
// default to.
$pins['LARENA_CHECKOUT'] = explode('/', $matches[0]['repository'])[1];

foreach ($pins as $name => $value) {
    echo $name, '=', $value, "\n";
}
