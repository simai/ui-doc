<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$manifestPath = $root . '/source/workflow/evidence/2026-08-25-playground-native-examples/migration-manifest.json';
$manifest = json_decode((string) file_get_contents($manifestPath), true, 512, JSON_THROW_ON_ERROR);
if (($manifest['schema'] ?? null) !== 'ui-doc.playground_native_example_migration.v1') {
    throw new RuntimeException('The accepted Playground migration manifest is missing or invalid.');
}

$examples = [];
$pagePlans = [];
$assetSources = [
    'simai.svg' => $root . '/content/ru/assets/playground/simai.svg',
    'media.svg' => $root . '/content/ru/assets/playground/media.svg',
];

foreach ($manifest['entries'] as $entry) {
    $relativePage = (string) $entry['content_file'];
    $page = $root . '/' . $relativePage;
    $markdown = (string) file_get_contents($page);
    $id = 'utilities/' . $entry['component'] . '/' . $entry['group'];
    preg_match_all(
        '/^:::example\h*(?<attrs>\{[^\n]*})?\h*\R(?<body>.*?)^:::\h*$/ms',
        $markdown,
        $blocks,
        PREG_SET_ORDER | PREG_OFFSET_CAPTURE,
    );
    if (count($blocks) !== 1) {
        throw new RuntimeException("Expected one inline example in [$relativePage].");
    }
    $block = $blocks[0];
    $attributes = (string) $block['attrs'][0];
    if (preg_match('/\bid\h*=/', $attributes) === 1) {
        throw new RuntimeException("Page [$relativePage] is already externalized; refuse a partial rerun.");
    }
    if (preg_match('/\blabel\h*=\h*(?<value>"[^"]*"|\'[^\']*\'|[^\s}]+)/', $attributes, $label) !== 1) {
        throw new RuntimeException("Example in [$relativePage] has no label.");
    }
    preg_match_all(
        '/^(?<fence>`{3,}|~{3,})(?<language>html|css|javascript)\h*\R(?<source>.*?)^\k<fence>\h*$/msi',
        (string) $block['body'][0],
        $sources,
        PREG_SET_ORDER,
    );
    $files = [];
    foreach ($sources as $source) {
        $language = strtolower((string) $source['language']);
        $filename = match ($language) {
            'html' => 'index.html',
            'css' => 'index.css',
            'javascript' => 'index.js',
        };
        if (isset($files[$filename])) {
            throw new RuntimeException("Duplicate [$language] source in [$relativePage].");
        }
        $contents = str_replace(["\r\n", "\r"], "\n", (string) $source['source']);
        $contents = str_replace(
            ['/ru/assets/playground/simai.svg', '/ru/assets/playground/media.svg'],
            ['assets/simai.svg', 'assets/media.svg'],
            $contents,
        );
        $files[$filename] = rtrim($contents, "\n") . "\n";
    }
    if (! isset($files['index.html'])) {
        throw new RuntimeException("Example in [$relativePage] has no HTML source.");
    }
    $assets = [];
    foreach ($assetSources as $name => $sourcePath) {
        if (str_contains(implode("\n", $files), 'assets/' . $name)) {
            $assets[$name] = (string) file_get_contents($sourcePath);
        }
    }
    $record = ['files' => $files, 'assets' => $assets, 'consumers' => []];
    if (isset($examples[$id])) {
        if ($examples[$id]['files'] !== $files || $examples[$id]['assets'] !== $assets) {
            throw new RuntimeException("Shared example [$id] differs between locales.");
        }
        $record = $examples[$id];
    }
    $record['consumers'][] = $relativePage;
    sort($record['consumers'], SORT_STRING);
    $examples[$id] = $record;

    $replacement = ':::example {id="' . $id . '" label=' . $label['value'] . "}\n:::\n";
    $pagePlans[$relativePage] = substr_replace(
        $markdown,
        $replacement,
        (int) $block[0][1],
        strlen((string) $block[0][0]),
    );
}

ksort($examples, SORT_STRING);
ksort($pagePlans, SORT_STRING);
foreach ($examples as $id => $record) {
    $directory = $root . '/examples/' . $id;
    if (! is_dir($directory) && ! mkdir($directory, 0755, true) && ! is_dir($directory)) {
        throw new RuntimeException("Cannot create [$directory].");
    }
    foreach ($record['files'] as $name => $contents) {
        file_put_contents($directory . '/' . $name, $contents);
    }
    if ($record['assets'] !== []) {
        $assetDirectory = $directory . '/assets';
        if (! is_dir($assetDirectory) && ! mkdir($assetDirectory, 0755, true) && ! is_dir($assetDirectory)) {
            throw new RuntimeException("Cannot create [$assetDirectory].");
        }
        foreach ($record['assets'] as $name => $contents) {
            file_put_contents($assetDirectory . '/' . $name, $contents);
        }
    }
}
foreach ($pagePlans as $relative => $contents) {
    file_put_contents($root . '/' . $relative, $contents);
}

$receipt = [
    'schema' => 'ui-doc.shared_example_migration.v1',
    'source_manifest' => substr($manifestPath, strlen($root) + 1),
    'source_manifest_sha256' => hash_file('sha256', $manifestPath),
    'consumer_count' => count($pagePlans),
    'example_count' => count($examples),
    'examples' => [],
];
foreach ($examples as $id => $record) {
    $files = [];
    foreach ($record['files'] as $name => $contents) {
        $files[$name] = hash('sha256', $contents);
    }
    foreach ($record['assets'] as $name => $contents) {
        $files['assets/' . $name] = hash('sha256', $contents);
    }
    ksort($files, SORT_STRING);
    $receipt['examples'][] = ['id' => $id, 'files' => $files, 'consumers' => $record['consumers']];
}
$evidence = $root . '/source/workflow/evidence/2026-08-25-shared-examples';
if (! is_dir($evidence) && ! mkdir($evidence, 0755, true) && ! is_dir($evidence)) {
    throw new RuntimeException("Cannot create [$evidence].");
}
file_put_contents(
    $evidence . '/migration-receipt.json',
    json_encode($receipt, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n",
);

fwrite(STDOUT, "Migrated " . count($pagePlans) . " consumers to " . count($examples) . " shared examples.\n");
