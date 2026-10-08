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

$report = [
    'schema' => 'ui-doc.page_reachability_audit.v1',
    'status' => $orphans === [] ? 'pass' : 'fail',
    'verified' => ['pages' => $pages, 'header_entries' => count($entries)],
    'unreachable' => $orphans,
    'known_debt' => $stillKnown,
];
echo json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), "\n";
exit($orphans === [] ? 0 : 1);
