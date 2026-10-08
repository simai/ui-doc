#!/usr/bin/env php
<?php
declare(strict_types=1);

/*
 * Every page of the Russian documentation belongs to a section the header
 * points at. A tree outside them is built and published and cannot be reached
 * by anyone who does not already know its address.
 *
 * Written down because exactly that had happened and nobody noticed:
 * content/ru/reference held 66 pages -- the colour palettes, the colour roles,
 * the structure of every group of modifiers -- with no index of its own, no
 * entry in the header, 404 at its root and three inbound links in the whole
 * site. One of them described a translucent surface as an opaque palette step
 * for long enough that the drift was invisible, because the page it drifted
 * from was in another tree and the page itself had no readers (owner,
 * 2026-10-09).
 */

$root = dirname(__DIR__);
$content = $root . '/content/ru';

// Trees that are outside the header and known to be so. The list is a debt,
// not a permission: it should end up empty. Each entry says what has to be
// decided before it can go.
// Empty, and meant to stay empty. It held 'standards' and 'migration' for one
// commit: the standards are under «Устройство Framework», where they say what
// must be true of what those pages describe, and the migration notes are under
// «Версии и обновления», which is the page a reader arrives at with exactly
// that question (owner, 2026-10-09).
$known = [];
// Sections whose own address answers 404 because they have no index. The
// guide's are fixed; these sixteen belong to the catalogues.
$indexlessDebt = 16;

$header = json_decode((string) file_get_contents($content . '/section.json'), true, 512, JSON_THROW_ON_ERROR);
$entries = [];
foreach ($header['header_navigation']['items'] ?? [] as $item) {
    $href = trim((string) ($item['href'] ?? ''), '/');
    $entries[] = preg_replace('#^ru/?#', '', $href) ?? '';
}

$orphans = [];
$pages = 0;
foreach (new DirectoryIterator($content) as $entry) {
    if ($entry->isDot() || ! $entry->isDir() || $entry->getFilename() === 'assets') {
        continue;
    }
    $name = $entry->getFilename();
    $count = iterator_count(new CallbackFilterIterator(
        new RecursiveIteratorIterator(new RecursiveDirectoryIterator($entry->getPathname())),
        static fn ($file): bool => $file->isFile() && $file->getExtension() === 'md',
    ));
    $pages += $count;
    if (in_array($name, $entries, true) || in_array($name, $known, true)) {
        continue;
    }
    $orphans[] = ['section' => $name, 'pages' => $count];
}

$stillKnown = array_values(array_filter($known, static fn (string $name): bool => is_dir($content . '/' . $name)));

// A section with no index answers 404 at its own address: the name in the
// sidebar leads nowhere, and a link to the section from anywhere else is
// broken. Five sections of the guide were in that state -- Знакомство,
// Подключение, Устройство Framework and both component sections (owner,
// 2026-10-09).
$indexless = [];
$sections = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($content, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::SELF_FIRST,
);
foreach ($sections as $directory) {
    if (! $directory->isDir() || str_contains($directory->getPathname(), '/assets')) {
        continue;
    }
    $relative = substr($directory->getPathname(), strlen($content) + 1);
    // The catalogues' own groups are the same fault and are not the guide:
    // sixteen of them -- eight under «Компоненты», eight under
    // «Смарт-компоненты» -- answer 404 at their address too. They are listed
    // as debt rather than quietly passed, and go when the catalogues are the
    // subject (owner, 2026-10-09).
    $catalogueGroup = preg_match('#^(components|smart-components)/[a-z-]+$#', $relative) === 1;
    $holdsPages = glob($directory->getPathname() . '/*.md') !== [];
    if ($holdsPages && ! is_file($directory->getPathname() . '/index.md') && ! $catalogueGroup) {
        $indexless[] = $relative;
    }
}
sort($indexless);

$report = [
    'schema' => 'ui-doc.page_reachability_audit.v1',
    'status' => $orphans === [] && $indexless === [] ? 'pass' : 'fail',
    'verified' => ['pages' => $pages, 'header_entries' => count($entries)],
    'unreachable' => $orphans,
    'sections_without_index' => $indexless,
    'known_debt' => $stillKnown,
    'catalogue_groups_without_index' => $indexlessDebt,
];
echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), "\n";
exit($orphans === [] && $indexless === [] ? 0 : 1);
