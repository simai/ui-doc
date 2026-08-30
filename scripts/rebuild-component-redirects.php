<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$redirectsPath = $root . '/redirects.json';
$componentsRoot = $root . '/content/ru/components';

if (! is_file($redirectsPath) || ! is_dir($componentsRoot)) {
    fwrite(STDERR, "Component routes are not ready.\n");
    exit(2);
}

$decoded = json_decode((string) file_get_contents($redirectsPath), true, 512, JSON_THROW_ON_ERROR);
$map = [];
foreach ($decoded['redirects'] ?? [] as $redirect) {
    if (! is_array($redirect) || ! is_string($redirect['from'] ?? null) || ! is_string($redirect['to'] ?? null)) {
        continue;
    }
    $from = trim($redirect['from'], '/');
    if (str_starts_with($from, 'ru/components') || str_starts_with($from, 'ru/framework-components')) {
        continue;
    }
    $map[$from] = trim($redirect['to'], '/');
}

$map['ru/framework-components'] = 'ru/components';
foreach (['catalog', 'connection', 'examples', 'introduction', 'reference'] as $legacy) {
    $map['ru/framework-components/' . $legacy] = 'ru/components';
    $map['ru/components/' . $legacy] = 'ru/components';
}

$paths = glob($componentsRoot . '/*.md') ?: [];
sort($paths, SORT_STRING);
foreach ($paths as $path) {
    $slug = basename($path, '.md');
    if ($slug === 'index') {
        continue;
    }
    $target = 'ru/components/' . $slug;
    $map['ru/framework-components/' . $slug] = $target;
    $map['ru/framework-components/reference/' . $slug] = $target;
    $map['ru/components/reference/' . $slug] = $target;
}

ksort($map, SORT_STRING);
$redirects = [];
foreach ($map as $from => $to) {
    if ($from !== $to) {
        $redirects[] = ['from' => $from, 'to' => $to];
    }
}

file_put_contents($redirectsPath, json_encode([
    'schema' => 'docara.redirects.v1',
    'version' => 1,
    'redirects' => $redirects,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n");
fwrite(STDOUT, json_encode([
    'schema' => 'ui-doc.component_redirect_rebuild.v1',
    'status' => 'success',
    'component_routes' => count($paths) - 1,
    'redirects' => count($redirects),
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n");
