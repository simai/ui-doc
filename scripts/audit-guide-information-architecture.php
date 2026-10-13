#!/usr/bin/env php
<?php

declare(strict_types=1);

// Hold the guide to its tree, config/guide-structure.json: every section and
// page where the tree puts it, with its title, H1 and navigation order; an
// introduction before the first heading; no paragraph repeated on two pages; no
// history or plans in the prose; every old route redirected to a page, without
// chains; no link left to a route that no longer exists.
//
// The guide is the edited single-file guide split into pages (one page per
// chapter or group of neighbouring chapters), approved by the owner on
// 2026-10-12. The tree it replaced asked every page for «Когда применять» and
// «Пример» sections and kept terms such as manifest, runtime or Larena off the
// beginner's pages; the guide is written to a different standard -- it names
// the manifest, the runtime and the product packages where a reader needs
// them -- so those two checks went with the old tree.
//
// Usage: php scripts/audit-guide-information-architecture.php [--output=path]

$root = dirname(__DIR__);
$output = null;
foreach ($argv as $argument) {
    if (str_starts_with($argument, '--output=')) {
        $output = substr($argument, strlen('--output='));
    }
}
$blockers = [];
$check = static function (bool $condition, string $code, array $details = []) use (&$blockers): void {
    if (! $condition) {
        $blockers[] = ['code' => $code, ...$details];
    }
};
$read = static function (string $relative) use ($root): ?string {
    $path = $root . '/' . $relative;
    return is_file($path) ? (string) file_get_contents($path) : null;
};
$readJson = static function (string $relative) use ($read): ?array {
    $text = $read($relative);
    return $text === null ? null : json_decode($text, true, 512, JSON_THROW_ON_ERROR);
};

$structure = $readJson('config/guide-structure.json');
$guide = 'content/ru/guide';
$check(($readJson($guide . '/section.json')['title'] ?? null) === $structure['title'], 'guide_title_mismatch');
$header = $readJson('content/ru/section.json')['header_navigation']['items'] ?? [];
$headerActual = array_map(static fn (array $item): array => [$item['label'] ?? null, $item['href'] ?? null], $header);
$headerExpected = [
    ['Руководство', '/ru/guide/'],
    ['Утилиты', '/ru/utilities/'],
    ['Компоненты', '/ru/components/'],
    ['Смарт-компоненты', '/ru/smart-components/'],
];
$check($headerActual === $headerExpected, 'header_navigation_mismatch', ['actual' => $headerActual]);

// Words that tell a story or promise one; a guide states what is.
$history = ['/\bтеперь\b/iu', '/в новой версии/iu', '/\bс версии\b/iu', '/\bпланируется\b/iu'];
$paragraphs = [];
$pageCount = 0;
$checkPage = static function (string $base, string $title, int $order) use ($read, $readJson, $check, $history, &$paragraphs, &$pageCount): void {
    $pageCount++;
    $markdown = $read($base . '.md');
    if ($markdown === null) {
        $check(false, 'page_missing', ['page' => $base]);
        return;
    }
    $sidecar = $readJson($base . '.page.json');
    preg_match_all('/^# (.+)$/m', preg_replace('/```.*?```/s', '', $markdown) ?? $markdown, $h1);
    $check(count($h1[1]) === 1 && ($h1[1][0] ?? null) === $title, 'page_h1_mismatch', ['page' => $base, 'actual' => $h1[1]]);
    $check(str_contains($markdown, 'title: "' . $title . '"'), 'page_title_mismatch', ['page' => $base]);
    $check(preg_match('/^description:\s*"\S/m', $markdown) === 1, 'page_description_missing', ['page' => $base]);
    $check(($sidecar['navigation']['order'] ?? null) === $order, 'page_order_mismatch', ['page' => $base, 'actual' => $sidecar['navigation']['order'] ?? null]);
    $body = preg_replace('/^---.*?---\s*/s', '', $markdown) ?? $markdown;
    $intro = preg_split('/^## /m', $body, 2)[0] ?? '';
    $check(mb_strlen(trim(preg_replace('/^# .*$/m', '', $intro) ?? '')) >= 40, 'introduction_too_short', ['page' => $base]);
    $prose = preg_replace(['/```.*?```/s', '/`[^`\n]*`/'], '', $body) ?? $body;
    foreach ($history as $pattern) {
        if (preg_match($pattern, $prose, $match) === 1) {
            $check(false, 'history_or_plan', ['page' => $base, 'word' => $match[0]]);
        }
    }
    foreach (preg_split('/\R\s*\R/u', $body) ?: [] as $paragraph) {
        $normalized = mb_strtolower(trim(preg_replace('/\s+/u', ' ', $paragraph) ?? ''));
        if (mb_strlen($normalized) >= 100 && ! str_starts_with($normalized, '```') && ! str_starts_with($normalized, ':::') && ! str_contains($normalized, '|')) {
            $paragraphs[$normalized][] = $base;
        }
    }
};

foreach ($structure['sections'] as $section) {
    $directory = $guide . '/' . $section['slug'];
    $sectionJson = $readJson($directory . '/section.json');
    $check(($sectionJson['title'] ?? null) === $section['title'], 'section_title_mismatch', ['section' => $section['slug']]);
    $check(($sectionJson['navigation']['order'] ?? null) === $section['order'], 'section_order_mismatch', ['section' => $section['slug']]);
    // A section's place in the navigation is its index page's order.
    $checkPage($directory . '/index', $section['title'], $section['order']);
    foreach ($section['pages'] as $page) {
        $checkPage($directory . '/' . $page['slug'], $page['title'], $page['order']);
    }
}
foreach ($structure['root_pages'] as $page) {
    $checkPage($guide . '/' . $page['slug'], $page['title'], $page['order']);
}
$check($read($guide . '/index.md') !== null, 'guide_index_missing');

// A page on disk the tree does not name is a page nobody placed.
$named = [$guide . '/index'];
foreach ($structure['sections'] as $section) {
    $named[] = $guide . '/' . $section['slug'] . '/index';
    foreach ($section['pages'] as $page) {
        $named[] = $guide . '/' . $section['slug'] . '/' . $page['slug'];
    }
}
foreach ($structure['root_pages'] as $page) {
    $named[] = $guide . '/' . $page['slug'];
}
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/' . $guide, FilesystemIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    if ($file->isFile() && $file->getExtension() === 'md') {
        $relative = substr(str_replace('\\', '/', $file->getPathname()), strlen($root) + 1, -3);
        $check(in_array($relative, $named, true), 'page_not_in_tree', ['page' => $relative]);
    }
}

foreach ($paragraphs as $paragraph => $files) {
    if (count(array_unique($files)) > 1) {
        $blockers[] = ['code' => 'duplicate_paragraph', 'pages' => array_values(array_unique($files)), 'sample' => mb_substr($paragraph, 0, 120)];
    }
}

// Redirects: no chains, no cycles, and every target an existing page.
$redirectRows = $readJson('redirects.json')['redirects'] ?? [];
$redirects = [];
foreach ($redirectRows as $row) {
    $from = $row['from'] ?? '';
    $check(! isset($redirects[$from]), 'duplicate_redirect_source', ['from' => $from]);
    $redirects[$from] = $row['to'] ?? '';
}
foreach ($redirects as $from => $to) {
    $check($from !== $to && ! isset($redirects[$to]), 'redirect_chain_or_cycle', ['from' => $from, 'to' => $to]);
    if (str_starts_with($to, 'ru/guide')) {
        $page = 'content/' . $to;
        $check($read($page . '.md') !== null || $read($page . '/index.md') !== null, 'redirect_target_missing', ['from' => $from, 'to' => $to]);
    }
}

// No link to a guide route that is not a page.
$dead = [];
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/content/ru', FilesystemIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    if (! $file->isFile() || $file->getExtension() !== 'md') {
        continue;
    }
    preg_match_all('#\]\((/ru/guide/[^)\s\#]*)#', (string) file_get_contents($file->getPathname()), $links);
    foreach ($links[1] as $link) {
        if (preg_match('/\.[a-z0-9]+$/i', $link) === 1) {
            $check(is_file($root . '/content' . $link), 'guide_asset_missing', ['page' => substr($file->getPathname(), strlen($root) + 1), 'link' => $link]);
            continue;
        }
        $page = 'content' . rtrim($link, '/');
        if ($read($page . '.md') === null && $read($page . '/index.md') === null) {
            $dead[] = ['page' => substr($file->getPathname(), strlen($root) + 1), 'link' => $link];
        }
    }
}
$check($dead === [], 'guide_link_dead', ['links' => array_slice($dead, 0, 20)]);

$report = [
    'schema' => 'ui-doc.guide_information_architecture_audit.v2',
    'status' => $blockers === [] ? 'pass' : 'fail',
    'verified' => ['sections' => count($structure['sections']), 'pages' => $pageCount, 'header_items' => count($headerExpected)],
    'blocker_count' => count($blockers),
    'blockers' => $blockers,
];
$encoded = json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR) . "\n";
if (is_string($output) && $output !== '') {
    $absolute = str_starts_with($output, '/') ? $output : $root . '/' . $output;
    if (! is_dir(dirname($absolute))) {
        mkdir(dirname($absolute), 0755, true);
    }
    file_put_contents($absolute, $encoded, LOCK_EX);
}
echo $encoded;
exit($blockers === [] ? 0 : 1);
