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

// The product packages the site serves, in the order PACKAGES declares them.
// Each prints <NAME>_REPOSITORY, _REVISION, _PATH, _ARCHIVE_SHA256, _BUILDER
// and _CHECKOUT (pro -> PRO_*, admin -> ADMIN_*), and PACKAGE_NAMES lists the
// names. CI clones one ui-builder, so every package names the same builder;
// a package built with another one fails here, not in a wrong build.
$package = "/'(?<name>[a-z0-9-]+)' => \[\s*'repository' => '(?<repository>[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+)',"
    . "\s*'revision' => '(?<revision>[0-9a-f]{40})',\s*'path' => '(?<path>[A-Za-z0-9._\/-]+)',"
    . "\s*'archive_sha256' => '(?<archive>[0-9a-f]{64})',\s*'builder' => '(?<builder>[0-9a-f]{40})',\s*\]/";
$declared = preg_match_all("/^    '[a-z0-9-]+' => \[\s*'repository' =>/m", $text);
if (preg_match_all($package, $text, $matches, PREG_SET_ORDER) < 1 || count($matches) !== $declared
    || $matches[0]['name'] !== 'pro'
) {
    fwrite(STDERR, "pin unreadable: PACKAGES must declare the pro package first, each entry in the pinned form\n");
    exit(1);
}
$names = [];
foreach ($matches as $match) {
    $prefix = strtoupper(str_replace('-', '_', $match['name']));
    if (in_array($match['name'], $names, true) || $match['builder'] !== $matches[0]['builder']) {
        fwrite(STDERR, "pin unreadable: package {$match['name']} is declared twice or names another builder\n");
        exit(1);
    }
    $names[] = $match['name'];
    $pins[$prefix . '_REPOSITORY'] = $match['repository'];
    $pins[$prefix . '_REVISION'] = $match['revision'];
    $pins[$prefix . '_PATH'] = $match['path'];
    $pins[$prefix . '_ARCHIVE_SHA256'] = $match['archive'];
    $pins[$prefix . '_BUILDER'] = $match['builder'];
    // The folder CI clones the package repository into, beside this checkout:
    // the repository's own name (simai/ui-admin -> ui-admin), the layout the
    // scripts default to.
    $pins[$prefix . '_CHECKOUT'] = explode('/', $match['repository'])[1];
}
$pins['PACKAGE_NAMES'] = implode(' ', $names);

foreach ($pins as $name => $value) {
    echo $name, '=', $value, "\n";
}
