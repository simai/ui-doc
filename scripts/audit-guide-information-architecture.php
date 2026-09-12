#!/usr/bin/env php
<?php

declare(strict_types=1);

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
$read = static function (string $relative) use ($root): string {
    $path = $root . '/' . $relative;
    if (! is_file($path)) {
        throw new RuntimeException('Required file is missing: ' . $relative);
    }
    return (string) file_get_contents($path);
};
$readJson = static fn (string $relative): array => json_decode($read($relative), true, 512, JSON_THROW_ON_ERROR);

$structure = [
    'introduction' => ['title' => 'Знакомство', 'order' => 10, 'pages' => [
        'what-is-simai-framework' => ['Что такое SIMAI Framework', 10],
        'quick-start' => ['Быстрый старт', 20],
    ]],
    'connection' => ['title' => 'Подключение', 'order' => 20, 'pages' => [
        'project-setup' => ['Подключение к проекту', 10],
        'loader' => ['Как работает Loader', 20],
        'versions-and-updates' => ['Версии и обновление', 30],
    ]],
    'architecture' => ['title' => 'Устройство Framework', 'order' => 30, 'pages' => [
        'overview' => ['Общая схема', 10],
        'core' => ['Core', 20],
        'utilities' => ['Утилиты', 30],
        'components' => ['Компоненты', 40],
        'smart-components' => ['Smart-компоненты', 50],
        'complex-smart-components' => ['Сложные Smart-компоненты', 60],
        'blocks' => ['Блоки', 70],
        'framework-and-project' => ['Framework и проект', 80],
    ]],
    'fundamentals' => ['title' => 'Основы оформления', 'order' => 40, 'pages' => [
        'index' => ['Основы оформления', 40],
        'modifiers' => ['Модификаторы', 10],
        'conditions' => ['Условия действия', 20],
        'values-and-scales' => ['Значения и шкалы', 30],
        'sizes' => ['Система размеров', 40],
        'size-scale' => ['Шкала размеров', 50],
        'spacing' => ['Интервалы', 60],
        'colors-and-themes' => ['Цвета и темы', 70],
        'design-tokens' => ['Дизайн-токены', 80],
        'typography' => ['Типографика', 90],
        'adaptive-sizing' => ['Адаптивные размеры', 100],
    ]],
    'practical' => ['title' => 'Практическое использование', 'order' => 50, 'pages' => [
        'ai' => ['Работа с ИИ', 10],
    ]],
];

$guideSection = $readJson('content/ru/guide/section.json');
$check(($guideSection['title'] ?? null) === 'Руководство', 'guide_title_mismatch');
$header = $readJson('content/ru/section.json')['header_navigation']['items'] ?? [];
$headerActual = array_map(static fn (array $item): array => [$item['label'] ?? null, $item['href'] ?? null], $header);
$headerExpected = [
    ['Руководство', '/ru/guide/'],
    ['Утилиты', '/ru/utilities/'],
    ['Компоненты', '/ru/components/'],
    ['Смарт-компоненты', '/ru/smart-components/'],
];
$check($headerActual === $headerExpected, 'header_navigation_mismatch', ['actual' => $headerActual]);

$pageCount = 0;
$paragraphs = [];
foreach ($structure as $directory => $group) {
    $section = $readJson('content/ru/guide/' . $directory . '/section.json');
    $check(($section['title'] ?? null) === $group['title'], 'group_title_mismatch', ['group' => $directory]);
    $check(($section['navigation']['order'] ?? null) === $group['order'], 'group_order_mismatch', ['group' => $directory]);
    foreach ($group['pages'] as $slug => [$title, $order]) {
        $pageCount++;
        $base = 'content/ru/guide/' . $directory . '/' . $slug;
        $markdown = $read($base . '.md');
        $sidecar = $readJson($base . '.page.json');
        preg_match_all('/^# (.+)$/m', $markdown, $h1);
        $check(count($h1[1]) === 1 && ($h1[1][0] ?? null) === $title, 'page_h1_mismatch', ['page' => $base, 'actual' => $h1[1]]);
        $check(str_contains($markdown, 'title: "' . $title . '"'), 'page_title_mismatch', ['page' => $base]);
        $check(($sidecar['navigation']['order'] ?? null) === $order, 'page_order_mismatch', ['page' => $base]);
        foreach (['## Когда применять', '## Пример', '## Что дальше'] as $heading) {
            $check(str_contains($markdown, $heading), 'editorial_section_missing', ['page' => $base, 'heading' => $heading]);
        }
        $body = preg_replace('/^---.*?---\s*/s', '', $markdown) ?? $markdown;
        $intro = preg_split('/^## /m', $body, 2)[0] ?? '';
        $check(mb_strlen(trim(preg_replace('/^# .*$/m', '', $intro) ?? '')) >= 40, 'introduction_too_short', ['page' => $base]);
        foreach (preg_split('/\R\s*\R/u', $body) ?: [] as $paragraph) {
            $normalized = mb_strtolower(trim(preg_replace('/\s+/u', ' ', $paragraph) ?? ''));
            if (mb_strlen($normalized) >= 100 && ! str_starts_with($normalized, '```') && ! str_contains($normalized, '|')) {
                $paragraphs[$normalized][] = $base;
            }
        }
    }
}

$guideIndex = $read('content/ru/guide/index.md');
foreach (['## Когда применять', '## Пример', '## Что дальше'] as $heading) {
    $check(str_contains($guideIndex, $heading), 'guide_index_section_missing', ['heading' => $heading]);
}
foreach ($paragraphs as $paragraph => $files) {
    if (count(array_unique($files)) > 1) {
        $blockers[] = ['code' => 'duplicate_paragraph', 'pages' => array_values(array_unique($files)), 'sample' => mb_substr($paragraph, 0, 120)];
    }
}

$forbidden = [
    'Docara',
    'Larena',
    'Bitrix',
    'UI Studio',
    'Custom Elements',
    'registry',
    'manifest',
    'runtime',
    'API',
    'backend',
    'уровень абстракции',
    'жизненный цикл',
    'синхронизировать состояние',
    'проектирование интеграции',
    'проектирования интеграции',
    'бизнес-логик',
    'бизнес-операц',
    'направление развития',
];
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/content/ru/guide'));
foreach ($iterator as $file) {
    if (! $file->isFile() || $file->getExtension() !== 'md') {
        continue;
    }
    $contents = (string) file_get_contents($file->getPathname());
    $prose = preg_replace('/```.*?```/s', '', $contents) ?? $contents;
    foreach ($forbidden as $term) {
        $check(! str_contains($prose, $term), 'forbidden_term', ['page' => str_replace($root . '/', '', $file->getPathname()), 'term' => $term]);
    }
}

$expectedRedirects = [
    'ru/start' => 'ru/guide/introduction/quick-start',
    'ru/start/vision' => 'ru/guide/introduction/what-is-simai-framework',
    'ru/start/installation' => 'ru/guide/connection/project-setup',
    'ru/start/compatibility' => 'ru/guide/connection/versions-and-updates',
    'ru/start/ai' => 'ru/guide/practical/ai',
    'ru/fundamentals' => 'ru/guide/fundamentals',
    'ru/fundamentals/architecture' => 'ru/guide/architecture/overview',
    'ru/fundamentals/modifiers' => 'ru/guide/fundamentals/modifiers',
    'ru/fundamentals/conditions' => 'ru/guide/fundamentals/conditions',
    'ru/fundamentals/values-and-scales' => 'ru/guide/fundamentals/values-and-scales',
    'ru/fundamentals/sizes/sizes' => 'ru/guide/fundamentals/sizes',
    'ru/fundamentals/sizes/size-scale' => 'ru/guide/fundamentals/size-scale',
    'ru/fundamentals/content-spacing' => 'ru/guide/fundamentals/spacing',
    'ru/fundamentals/colors-and-themes' => 'ru/guide/fundamentals/colors-and-themes',
    'ru/fundamentals/design-tokens' => 'ru/guide/fundamentals/design-tokens',
    'ru/fundamentals/typography-system' => 'ru/guide/fundamentals/typography',
    'ru/fundamentals/adaptive-sizing-system' => 'ru/guide/fundamentals/adaptive-sizing',
];
$redirectRows = $readJson('redirects.json')['redirects'] ?? [];
$redirects = [];
foreach ($redirectRows as $row) {
    $from = $row['from'] ?? '';
    $to = $row['to'] ?? '';
    $check(! isset($redirects[$from]), 'duplicate_redirect_source', ['from' => $from]);
    $redirects[$from] = $to;
    $check(! str_starts_with($to, 'ru/start') && ! str_starts_with($to, 'ru/fundamentals'), 'redirect_chain_to_removed_tree', ['from' => $from, 'to' => $to]);
}
foreach ($expectedRedirects as $from => $to) {
    $check(($redirects[$from] ?? null) === $to, 'required_redirect_mismatch', ['from' => $from, 'actual' => $redirects[$from] ?? null, 'expected' => $to]);
}
foreach ($redirects as $from => $to) {
    $check($from !== $to && ! isset($redirects[$to]), 'redirect_chain_or_cycle', ['from' => $from, 'to' => $to]);
}

$oldReferences = [];
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root . '/content/ru'));
foreach ($iterator as $file) {
    if (! $file->isFile() || $file->getExtension() !== 'md') {
        continue;
    }
    $contents = (string) file_get_contents($file->getPathname());
    if (preg_match('#/ru/(?:start|fundamentals)/#', $contents) === 1) {
        $oldReferences[] = str_replace($root . '/', '', $file->getPathname());
    }
}
$check($oldReferences === [], 'old_internal_links_remain', ['files' => $oldReferences]);
$check(! is_dir($root . '/content/ru/start') && ! is_dir($root . '/content/ru/fundamentals'), 'removed_source_tree_present');

$report = [
    'schema' => 'ui-doc.guide_information_architecture_audit.v1',
    'status' => $blockers === [] ? 'pass' : 'fail',
    'verified' => ['groups' => count($structure), 'pages' => $pageCount + 1, 'required_redirects' => count($expectedRedirects), 'header_items' => count($headerExpected)],
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
