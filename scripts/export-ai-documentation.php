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
    'format' => 'ai-first', 'formatVersion' => '0.1', 'document' => 'manifest', 'revision' => $revision,
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
    $catalog = ['format' => 'ai-first', 'formatVersion' => '0.1', 'document' => 'catalog', 'revision' => $main['revision'], 'resourceId' => 'urn:simai:framework:documentation', 'items' => $chunk];
    $bytes = $json($catalog); $write($name, $bytes);
    $main['catalogs'][] = ['href' => './' . $name, 'description' => 'Documentation pages ' . ($index * 100 + 1) . '–' . ($index * 100 + count($chunk)), 'sha256' => hash('sha256', $bytes)];
}
$main['frameworkLock'] = ['href' => './ai/framework-lock.json', 'sha256' => hash('sha256', $lockBytes)];
$write('ai.json', $json($main));
echo $json(['status'=>'pass', 'mode'=>$check?'check':'export', 'formatVersion'=>'0.1', 'pages'=>count($items), 'files'=>count($expected)]);
