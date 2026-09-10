<?php

declare(strict_types=1);

/**
 * Moves the first reusable utility example next to the introductory paragraph
 * and replaces the generic tab label with the page title.
 *
 * Usage:
 *   php scripts/normalize-utility-example-placement.php          # dry run
 *   php scripts/normalize-utility-example-placement.php --write  # apply
 */

$root = dirname(__DIR__);
$write = in_array('--write', $argv, true);
$files = glob($root . '/content/ru/utilities/*/*.md') ?: [];
$changed = [];
$skipped = [];

foreach ($files as $file) {
    if (basename($file) === 'index.md') {
        continue;
    }

    $source = file_get_contents($file);
    if ($source === false || !str_contains($source, ':::example')) {
        continue;
    }

    if (!preg_match('/^---\n.*?^title:\s*["\']?([^"\'\n]+)["\']?\s*$.*?^---\n/msu', $source, $frontmatter)) {
        $skipped[] = [$file, 'title-not-found'];
        continue;
    }

    $title = trim($frontmatter[1]);
    $normalized = preg_replace(
        '/(:::example\s*\{[^}\n]*\blabel=)["\']Результат["\']/u',
        '$1"' . addcslashes($title, '\\$') . '"',
        $source,
        1
    ) ?? $source;

    if (!preg_match(
        '/(?:^##\s+(?:Наглядный\s+)?Пример[^\n]*\n)?^:::example\s*\{[^}\n]+\}\s*\n^:::\s*\n?/mu',
        $normalized,
        $exampleMatch,
        PREG_OFFSET_CAPTURE
    )) {
        $skipped[] = [$file, 'example-block-not-found'];
        continue;
    }

    $block = $exampleMatch[0][0];
    $offset = $exampleMatch[0][1];
    $before = substr($normalized, 0, $offset);

    // Pages that already present the example before the first detailed section
    // keep their deliberate editorial structure.
    if (substr_count($before, "\n## ") <= 1) {
        if ($normalized !== $source) {
            $changed[] = $file;
            if ($write) {
                file_put_contents($file, $normalized);
            }
        }
        continue;
    }

    $exampleDirective = preg_replace('/^##\s+(?:Наглядный\s+)?Пример[^\n]*\n/mu', '', $block, 1) ?? $block;
    $without = substr($normalized, 0, $offset) . substr($normalized, $offset + strlen($block));

    // Insert after H1, badges and the first explanatory paragraph. This keeps
    // the visible proof before reference tables and long syntax sections.
    if (!preg_match(
        '/(^#\s+[^\n]+\n\n(?:^:badge[^\n]*\n\n)?(?:^(?!#|:::|\||```)[^\n]+\n)+(?:\n)?)/mu',
        $without,
        $intro,
        PREG_OFFSET_CAPTURE
    )) {
        $skipped[] = [$file, 'intro-not-found'];
        continue;
    }

    $insertAt = $intro[0][1] + strlen($intro[0][0]);
    $insertion = "\n## Наглядный пример\n\n" . trim($exampleDirective) . "\n\n";
    $result = substr($without, 0, $insertAt) . $insertion . substr($without, $insertAt);
    $result = preg_replace('/\n{3,}/', "\n\n", $result) ?? $result;

    if ($result !== $source) {
        $changed[] = $file;
        if ($write) {
            file_put_contents($file, $result);
        }
    }
}

echo json_encode([
    'mode' => $write ? 'write' : 'dry-run',
    'changed' => count($changed),
    'skipped' => count($skipped),
    'changed_files' => array_map(static fn(string $path): string => substr($path, strlen($root) + 1), $changed),
    'skipped_files' => array_map(
        static fn(array $row): array => [substr($row[0], strlen($root) + 1), $row[1]],
        $skipped
    ),
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . PHP_EOL;
