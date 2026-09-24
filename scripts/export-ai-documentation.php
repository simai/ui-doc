#!/usr/bin/env php
<?php
declare(strict_types=1);
$root = dirname(__DIR__);
$build = $root . '/build_production';
$check = in_array('--check', $argv, true);
$lockBytes = file_get_contents($root . '/simai-framework.lock.json');
$lock = json_decode($lockBytes, true, 512, JSON_THROW_ON_ERROR);
$version = $lock['runtime']['pair_id'] ?? throw new RuntimeException('Missing Framework pair');
$items = []; $expected = [];
$write = static function (string $relative, string $bytes) use ($build, $check, &$expected): void {
    $expected[] = $relative;
    $file = $build . '/' . $relative;
    if ($check) {
        if (!is_file($file) || file_get_contents($file) !== $bytes) throw new RuntimeException('AI export drift: ' . $relative);
    } else {
        if (!is_dir(dirname($file))) mkdir(dirname($file), 0775, true);
        file_put_contents($file, $bytes);
    }
};
$json = static fn (array $value): string => json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n";
$manifest = static fn (array $records, string $revision): array => [
    'format' => 'ai-first', 'formatVersion' => '1.0', 'document' => 'manifest', 'revision' => $revision,
    'resource' => ['id' => 'urn:simai:framework:documentation', 'name' => 'Simai Framework documentation', 'description' => 'Version-bound documentation and executable example sources.', 'language' => 'ru', 'scope' => './', 'publisher' => ['name' => 'Rim Zabarov']],
    'items' => $records,
];
$files = [];
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/content/ru')) as $file) {
    if ($file->isFile() && $file->getExtension() === 'md') $files[] = $file->getPathname();
}
sort($files, SORT_STRING);
foreach ($files as $file) {
    $relative = substr($file, strlen($root . '/content/'));
    $route = preg_replace('#(?:/index)?\.md$#', '', $relative) . '/';
    if (!is_file($build . '/' . $route . 'index.html')) continue;
    $text = file_get_contents($file);
    if (preg_match('/^(?:draft:\s*true|status:\s*["\x27]?draft)/mi', $text)) continue;
    $metaFile = substr($file, 0, -3) . '.page.json';
    $meta = is_file($metaFile) ? json_decode(file_get_contents($metaFile), true, 512, JSON_THROW_ON_ERROR) : [];
    if (($meta['draft'] ?? false) || ($meta['status'] ?? '') === 'draft') continue;
    preg_match('/^#\s+(.+)$/m', $text, $title);
    $body = preg_replace('/^---\R.*?\R---\R/s', '', $text);
    $body = preg_replace_callback('/^:::example\s+\{[^}]*\bid="([a-zA-Z0-9\/_-]+)"[^}]*}\s*\R.*?^:::\s*$/ms', static function (array $match) use ($root): string {
        $dir = $root . '/examples/' . $match[1];
        $paths = [];
        foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $f) {
            if ($f->isFile() && in_array($f->getExtension(), ['html','js','css','json'], true)) $paths[] = $f->getPathname();
        }
        sort($paths, SORT_STRING); $out = '';
        foreach ($paths as $path) {
            $out .= "\nExample source: " . $match[1] . '/' . substr($path, strlen($dir) + 1) . "\n\n````" . pathinfo($path, PATHINFO_EXTENSION) . "\n" . file_get_contents($path) . "\n````\n";
        }
        return $out;
    }, $body);
    $body = preg_replace_callback('/^:::code\s+\{[^}]*src="([^"\n]+)"[^}]*}\s*\R^:::\s*$/m', static function (array $match) use ($root, $file): string {
        $path = realpath(dirname($file) . '/' . $match[1]);
        if ($path === false || !str_starts_with($path, $root . '/examples/')) throw new RuntimeException('Unsafe example source');
        $sources = [$path];
        if (basename($path) === "index.js" && is_dir(dirname($path) . "/assets")) foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator(dirname($path) . "/assets")) as $asset) {
            if ($asset->isFile() && in_array($asset->getExtension(), ["js", "css", "json", "html"], true)) $sources[] = $asset->getPathname();
        }
        sort($sources, SORT_STRING); $result = "";
        foreach ($sources as $path) $result .= "\nSource: " . substr($path, strlen($root) + 1) . "\n\n````" . pathinfo($path, PATHINFO_EXTENSION) . "\n" . file_get_contents($path) . "\n````\n";
        return $result;
    }, $body);
    $bytes = '<!-- Canonical page: /' . $route . '; Framework lock SHA-256: ' . hash('sha256', $lockBytes) . " -->\n" . trim($body) . "\n";
    $hash = hash('sha256', $bytes);
    $write($route . 'ai.md', $bytes);
    $item = ['id' => 'urn:simai:docs:' . str_replace('/', ':', trim($route, '/')), 'kind' => 'knowledge', 'title' => $title[1] ?? $route, 'description' => 'Documentation: ' . ($title[1] ?? $route), 'language' => explode('/', $route)[0], 'revision' => $hash, 'status' => 'published', 'source' => './' . $route . 'ai.md', 'htmlPage' => '/' . $route, 'appliesTo' => ['product' => 'urn:simai:framework', 'versions' => [(string)$version]], 'representations' => [['href' => './' . $route . 'ai.md', 'mediaType' => 'text/markdown', 'sha256' => $hash, 'role' => 'full']]];
    $items[] = $item;
    $local = $item; $local['source'] = './ai.md'; $local['representations'][0]['href'] = './ai.md';
    $write($route . 'ai.json', $json($manifest([$local], $hash)));
}
if (count($items) < 100) throw new RuntimeException('AI export requires a complete documentation build');
$specRoot = $root . '/contracts/composition-recipe-v1';
$specLock = json_decode((string) file_get_contents($specRoot . '/contract.lock.json'), true, 512, JSON_THROW_ON_ERROR);
if (($specLock['version'] ?? null) !== '1.0.1') throw new RuntimeException('Unexpected Recipe specification edition');
$normative = $specLock['normativeFiles'] ?? throw new RuntimeException('Recipe normative file map is missing');
ksort($normative, SORT_STRING);
if ('sha256:' . hash('sha256', json_encode($normative, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR)) !== $specLock['contractDigest']) {
    throw new RuntimeException('Recipe specification digest mismatch');
}
$specBase = 'ai/standards/composition-recipe/1.0.1/';
foreach ([...array_keys($normative), 'contract.lock.json', 'fixtures/header-switch.json'] as $relative) {
    if (!preg_match('#^[a-zA-Z0-9._/-]+$#', $relative) || str_contains($relative, '..')) throw new RuntimeException('Unsafe Recipe specification path');
    $bytes = (string) file_get_contents($specRoot . '/' . $relative);
    $hash = hash('sha256', $bytes);
    if (isset($normative[$relative]) && 'sha256:' . $hash !== $normative[$relative]) throw new RuntimeException('Recipe source copy drift: ' . $relative);
    if ($relative === 'fixtures/header-switch.json' && $bytes !== (string) file_get_contents($root . '/assets/examples/composition/header-switch.json')) {
        throw new RuntimeException('Recipe checked example drift');
    }
    $public = $specBase . $relative;
    $write($public, $bytes);
    $id = $relative === 'README.md' ? 'urn:simai:framework:composition-recipe:specification' :
        'urn:simai:framework:composition-recipe:' . str_replace(['/', '.'], ':', strtolower($relative));
    $title = $relative === 'README.md' ? 'Composition Recipe: полная спецификация' : 'Composition Recipe: ' . $relative;
    $items[] = [
        'id' => $id, 'kind' => 'knowledge', 'title' => $title,
        'description' => $relative === 'fixtures/header-switch.json' ?
            'Проверенный пример двух вариантов шапки и ожидаемых результатов Recipe.' :
            'Проверенный файл нормативного комплекта Composition Recipe 1.0.1.',
        'language' => 'ru', 'revision' => $hash, 'status' => 'published',
        'source' => './' . $public,
        'appliesTo' => ['product' => 'urn:simai:framework', 'versions' => [(string) $version]],
        'representations' => [['href' => './' . $public, 'mediaType' => str_ends_with($relative, '.md') ? 'text/markdown' : 'application/json', 'sha256' => $hash, 'role' => 'full']],
        'x-simai-contractDigest' => $specLock['contractDigest'],
        'x-simai-sourceRevision' => '8d3438aa9c2e054580fa1eab97916aed010ec545',
    ];
}
// Framework standards: the envelope of every published standard, plus the
// contract bytes the envelopes pin, under one AI path per identity and version.
$standardsRoot = $root . '/contracts/standards';
$standards = [];
foreach (glob($standardsRoot . '/*', GLOB_ONLYDIR) as $identityDirectory) {
    foreach (glob($identityDirectory . '/*/standard.json') as $file) {
        $standard = json_decode((string) file_get_contents($file), true, 512, JSON_THROW_ON_ERROR);
        $identity = $standard['id'] ?? throw new RuntimeException('Standard without an identity: ' . $file);
        $edition = $standard['version'] ?? throw new RuntimeException('Standard without a version: ' . $file);
        if ($identity !== basename($identityDirectory) || $edition !== basename(dirname($file))) {
            throw new RuntimeException('Standard does not live at its identity: ' . $file);
        }
        $standards[$identity . '/' . $edition] = [$file, $standard, 'standard.json', $standard['title'] ?? $identity, 'Конверт стандарта ' . $identity . ' ' . $edition . ' в формате standard-contract 1.0.'];
    }
}
$standards['standard-contract/1.0.0'] = [$standardsRoot . '/standard-contract-1.0.schema.json', null, 'standard.schema.json', 'Standard Contract 1.0.0', 'Схема конверта Standard Contract 1.0, закреплённая копия из ai-first.'];
$standards['smart-component-manifest/2.1.0'] = [$standardsRoot . '/smart-component-manifest.v2.schema.json', null, 'manifest.schema.json', 'Манифест Smart-компонента 2.1.0', 'Схема манифеста Smart-компонента, версия 2.'];
ksort($standards, SORT_STRING);
foreach ($standards as $key => [$file, $standard, $name, $title, $description]) {
    $bytes = (string) file_get_contents($file);
    $hash = hash('sha256', $bytes);
    $public = 'ai/standards/' . $key . '/' . $name;
    $write($public, $bytes);
    $items[] = [
        'id' => 'urn:simai:framework:standard:' . str_replace(['/', '.'], [':', '-'], $key),
        'kind' => 'knowledge', 'title' => $title, 'description' => $description,
        'language' => 'ru', 'revision' => $hash, 'status' => 'published',
        'source' => './' . $public,
        'htmlPage' => '/ru/standards/' . ($standard === null ? explode('/', $key)[0] : preg_replace('/^simai\./', '', explode('/', $key)[0])) . '/',
        'appliesTo' => ['product' => 'urn:simai:framework', 'versions' => [(string) $version]],
        'representations' => [['href' => './' . $public, 'mediaType' => 'application/json', 'sha256' => $hash, 'role' => 'full']],
    ];
}
$write('ai/framework-lock.json', $lockBytes);
$main = $manifest([], hash('sha256', $json($items)));
unset($main['items']); $main['catalogs'] = [];
foreach (array_chunk($items, 100) as $index => $chunk) {
    foreach ($chunk as &$item) {
        $item['source'] = '../../' . substr($item['source'], 2);
        $item['representations'][0]['href'] = '../../' . substr($item['representations'][0]['href'], 2);
    }
    unset($item);
    $name = 'ai/catalogs/' . sprintf('%02d', $index + 1) . '.json';
    $catalog = ['format' => 'ai-first', 'formatVersion' => '1.0', 'document' => 'catalog', 'revision' => $main['revision'], 'resourceId' => 'urn:simai:framework:documentation', 'items' => $chunk];
    $bytes = $json($catalog); $write($name, $bytes);
    $main['catalogs'][] = ['href' => './' . $name, 'description' => 'Documentation pages ' . ($index * 100 + 1) . '–' . ($index * 100 + count($chunk)), 'sha256' => hash('sha256', $bytes)];
}
$main['frameworkLock'] = ['href' => './ai/framework-lock.json', 'sha256' => hash('sha256', $lockBytes)];
$write('ai.json', $json($main));
echo $json(['status'=>'pass', 'mode'=>$check?'check':'export', 'formatVersion'=>'1.0', 'knowledgeItems'=>count($items), 'files'=>count($expected)]);
