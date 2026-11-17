#!/usr/bin/env php
<?php
declare(strict_types=1);

// Since pair ui-1ed6b6c9a040 (owner decision C282) the SIMAI Framework
// components carry English only; a Russian page gets its words from the
// language file core/lang/ru.js or, without it, core fetches the family parts
// core/lang/ru/<family>.json from the runtime folder. Docara publishes only the
// runtime files its page plans name, and no plan names the language files, so
// every Russian page asked for its parts and got 404 (English words, a console
// error per part). Until Docara plans the language files itself, this step
// copies distr/core/lang of the pinned distribution into the published runtime
// folder and puts the language file in front of the Framework scripts of every
// page in another language than English. It runs after `docara build`
// (scripts/build-documentation.php).

chdir(dirname(__DIR__));
$root = getcwd();
$lock = json_decode((string) file_get_contents($root . '/simai-framework.lock.json'), true, 512, JSON_THROW_ON_ERROR);
$commit = (string) ($lock['runtime']['ui']['commit'] ?? '');
if (preg_match('/^[0-9a-f]{40}$/D', $commit) !== 1) {
    fwrite(STDERR, "LANGUAGE_FILES_COMMIT_MISSING\n");
    exit(2);
}
$target = $root . '/build_production/_docara/vendor/simai-framework/runtime/' . $commit . '/distr/core/lang';
if (!is_dir(dirname($target))) {
    fwrite(STDERR, "LANGUAGE_FILES_RUNTIME_FOLDER_MISSING " . dirname($target) . "\n");
    exit(2);
}

$frameworkRoot = getenv('DOCARA_SIMAI_UI_ROOT') ?: getenv('SIMAI_UI_ROOT') ?: '';
$files = [];
if ($frameworkRoot !== '') {
    $source = rtrim($frameworkRoot, '/') . '/distr/core/lang';
    if (!is_file($source . '/index.json')) {
        fwrite(STDERR, "LANGUAGE_FILES_SOURCE_MISSING $source\n");
        exit(2);
    }
    $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source, FilesystemIterator::SKIP_DOTS));
    foreach ($iterator as $file) {
        if ($file->isFile()) {
            $files[substr($file->getPathname(), strlen($source) + 1)] = (string) file_get_contents($file->getPathname());
        }
    }
} else {
    // As audit-docara-recipe-primary.php: the pinned runtime commit read from ../ui.
    $repository = dirname($root) . '/ui';
    $list = shell_exec('git -C ' . escapeshellarg($repository) . ' ls-tree -r --name-only ' . escapeshellarg($commit) . ' distr/core/lang 2>/dev/null');
    foreach (array_filter(explode("\n", (string) $list)) as $path) {
        $bytes = shell_exec('git -C ' . escapeshellarg($repository) . ' show ' . escapeshellarg($commit . ':' . $path) . ' 2>/dev/null');
        if (is_string($bytes)) {
            $files[substr($path, strlen('distr/core/lang/'))] = $bytes;
        }
    }
    if (!isset($files['index.json'])) {
        fwrite(STDERR, "LANGUAGE_FILES_SOURCE_MISSING $repository@$commit\n");
        exit(2);
    }
}

ksort($files, SORT_STRING);
$written = 0;
foreach ($files as $relative => $bytes) {
    // Only what a browser asks for; precompressed twins are the server's business.
    if (str_ends_with($relative, '.gz')) {
        continue;
    }
    $path = $target . '/' . $relative;
    if (!is_dir(dirname($path))) {
        mkdir(dirname($path), 0775, true);
    }
    file_put_contents($path, $bytes);
    $written++;
}
// A page declares its language (C282: lang="ru"); its language file goes in
// front of the first Framework script, as the Framework asks ("Include it
// before core.js"). A classic script, unlike the parts core fetches, also
// loads inside Docara's sandboxed example frames (origin "null"): the shell
// hands every script[data-docara-framework-asset][src] of the page to its
// frames in page order, so the frames read the words from the same file.
$pages = 0;
$html = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/build_production', FilesystemIterator::SKIP_DOTS));
$paths = [];
foreach ($html as $file) {
    if ($file->isFile() && str_ends_with($file->getFilename(), '.html')) {
        $paths[] = $file->getPathname();
    }
}
sort($paths, SORT_STRING);
foreach ($paths as $path) {
    $document = (string) file_get_contents($path);
    if (preg_match('~<html\b[^>]*\blang="([a-z]{2,3})(?:-[A-Za-z0-9-]+)?"~', $document, $language) !== 1 || $language[1] === 'en') {
        continue;
    }
    $code = $language[1];
    if (!isset($files[$code . '.js']) || str_contains($document, 'data-docara-framework-asset="simai.framework.language.' . $code . '"')) {
        continue;
    }
    $pattern = '~<script defer src="([^"]*/runtime/' . $commit . '/distr/)[^"?]*(\?sf_v=[^"]*)?" data-docara-framework-asset="[^"]*"></script>~';
    if (preg_match($pattern, $document, $first, PREG_OFFSET_CAPTURE) !== 1) {
        continue;
    }
    $tag = '<script defer src="' . $first[1][0] . 'core/lang/' . $code . '.js' . ($first[2][0] ?? '') . '" data-docara-framework-asset="simai.framework.language.' . $code . '"></script>';
    $document = substr($document, 0, $first[0][1]) . $tag . substr($document, $first[0][1]);
    file_put_contents($path, $document);
    $pages++;
}

echo json_encode(['schema' => 'ui-doc.framework_language_files.v1', 'commit' => $commit, 'files' => $written, 'pages' => $pages], JSON_UNESCAPED_SLASHES) . "\n";
