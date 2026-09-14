<?php

declare(strict_types=1);

$root = dirname(__DIR__);
$apply = in_array('--apply', $argv, true);
$map = json_decode(
    (string) file_get_contents($root . '/scripts/utility-documentation-map.json'),
    true,
    flags: JSON_THROW_ON_ERROR,
);
$source = json_decode(
    (string) file_get_contents($root . '/contracts/generated/documentation-source.json'),
    true,
    flags: JSON_THROW_ON_ERROR,
);

$pagesByStem = [];
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(
    $root . '/content/ru/utilities',
    FilesystemIterator::SKIP_DOTS,
));
foreach ($iterator as $file) {
    if ($file->isFile() && strtolower($file->getExtension()) === 'md') {
        $pagesByStem[$file->getBasename('.md')][] = $file->getPathname();
    }
}

$actions = [];
$errors = [];
foreach ($source['entities'] ?? [] as $entity) {
    if (($entity['kind'] ?? null) !== 'utility') {
        continue;
    }

    $key = (string) $entity['key'];
    $family = substr($key, strlen('utility.'));
    $nonVisual = $map['non_visual_families'][$family] ?? null;
    if (is_array($nonVisual) && isset($nonVisual['page'])) {
        $stem = null;
        $nonVisualPage = $root . '/' . $nonVisual['page'];
        $candidates = is_file($nonVisualPage) ? [$nonVisualPage] : [];
    } else {
        $stem = isset($pagesByStem[$family])
            ? $family
            : ($map['page_aliases'][$family] ?? null);
        $candidates = is_string($stem) ? ($pagesByStem[$stem] ?? []) : [];
    }
    if (count($candidates) !== 1) {
        $errors[] = ['key' => $key, 'code' => 'page_not_unique', 'stem' => $stem];
        continue;
    }

    $page = $candidates[0];
    $markdown = (string) file_get_contents($page);
    preg_match('/^:::example\s+\{[^}\n]*\bid="([^"]+)"/m', $markdown, $match);
    $example = $match[1] ?? ($map['example_fallbacks'][$family] ?? null);
    if (! is_string($example) || ! is_file($root . '/examples/' . $example . '/index.html')) {
        $errors[] = ['key' => $key, 'code' => 'example_missing', 'example' => $example];
        continue;
    }

    $relative = str_replace('\\', '/', substr($page, strlen($root) + 1));
    $route = '/' . preg_replace('/\.md$/', '/', substr($relative, strlen('content/')));
    $actions[] = compact('key', 'family', 'relative', 'route', 'example');
}

if ($errors !== []) {
    echo json_encode([
        'schema' => 'ui-doc.utility_documentation_sync.v1',
        'status' => 'blocked',
        'errors' => $errors,
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n";
    exit(1);
}

$applied = 0;
if ($apply) {
    foreach ($actions as $action) {
        $base = [
            PHP_BINARY,
            $root . '/vendor/bin/docara',
            'documentation',
            'accept',
            '--source=simai-framework',
            '--key=' . $action['key'],
            '--route=' . $action['route'],
            '--example=default=' . $action['example'],
            '--review=ai_verified',
            '--json',
        ];
        $plan = run(array_merge($base, ['--dry-run']), $root);
        $planId = $plan['plan_id'] ?? null;
        if (! is_string($planId) || $planId === '') {
            throw new RuntimeException('Docara did not return a plan_id for ' . $action['key']);
        }
        run([
            PHP_BINARY,
            $root . '/vendor/bin/docara',
            'documentation',
            'accept',
            '--apply=' . $planId,
            '--json',
        ], $root);
        $applied++;
    }
}

echo json_encode([
    'schema' => 'ui-doc.utility_documentation_sync.v1',
    'status' => 'success',
    'mode' => $apply ? 'apply' : 'dry-run',
    'mapped' => count($actions),
    'applied' => $applied,
    'fallback_examples' => count($map['example_fallbacks'] ?? []),
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n";

/**
 * @param list<string> $command
 * @return array<string, mixed>
 */
function run(array $command, string $cwd): array
{
    $descriptor = [
        0 => ['pipe', 'r'],
        1 => ['pipe', 'w'],
        2 => ['pipe', 'w'],
    ];
    $process = proc_open($command, $descriptor, $pipes, $cwd);
    if (! is_resource($process)) {
        throw new RuntimeException('Unable to start Docara.');
    }
    fclose($pipes[0]);
    $stdout = stream_get_contents($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);
    $exit = proc_close($process);
    if ($exit !== 0) {
        throw new RuntimeException(trim((string) $stderr) ?: 'Docara failed with exit code ' . $exit);
    }
    return json_decode((string) $stdout, true, flags: JSON_THROW_ON_ERROR);
}
