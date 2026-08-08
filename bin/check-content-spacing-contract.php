<?php

declare(strict_types=1);

$options = getopt('', ['root::']);
$requestedRoot = $options['root'] ?? dirname(__DIR__);
$repositoryRoot = realpath((string) $requestedRoot);

$fail = static function (
    string $code,
    mixed $expected = null,
    mixed $actual = null,
    string $path = ''
): never {
    fwrite(STDERR, json_encode([
        'status' => 'fail',
        'diagnostic' => [
            'code' => $code,
            'path' => $path,
            'expected' => $expected,
            'actual' => $actual,
        ],
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL);
    exit(1);
};

if ($repositoryRoot === false || !is_dir($repositoryRoot)) {
    $fail('CONTENT_SPACING_ROOT_INVALID', 'existing directory', $requestedRoot);
}

$projectionRelativePath = 'contracts/sf5/content-spacing.docs.v1.json';
$guideRelativePath = 'source/docs/ru/fundamentals/content-spacing.md';
$menuRelativePath = 'source/docs/ru/fundamentals/.settings.php';
$projectionPath = $repositoryRoot . '/' . $projectionRelativePath;
$guidePath = $repositoryRoot . '/' . $guideRelativePath;
$menuPath = $repositoryRoot . '/' . $menuRelativePath;

foreach ([$projectionPath, $guidePath, $menuPath] as $requiredPath) {
    if (!is_file($requiredPath)) {
        $fail(
            'CONTENT_SPACING_REQUIRED_FILE_MISSING',
            'regular file',
            basename($requiredPath),
            ltrim(str_replace($repositoryRoot, '', $requiredPath), '/')
        );
    }
}

try {
    $projection = json_decode(
        (string) file_get_contents($projectionPath),
        true,
        512,
        JSON_THROW_ON_ERROR
    );
} catch (JsonException) {
    $fail(
        'CONTENT_SPACING_PROJECTION_INVALID_JSON',
        'valid JSON object',
        null,
        $projectionRelativePath
    );
}

$guide = (string) file_get_contents($guidePath);
$menu = (string) file_get_contents($menuPath);
$source = $projection['source'] ?? null;
$tokens = $projection['public_tokens'] ?? null;

if (!is_array($source) || !is_array($tokens) || count($tokens) !== 4) {
    $fail(
        'CONTENT_SPACING_PROJECTION_INVALID',
        ['source' => 'object', 'public_token_count' => 4],
        ['source' => get_debug_type($source), 'public_token_count' => is_array($tokens) ? count($tokens) : null],
        $projectionRelativePath
    );
}

$contractHash = $source['contract_sha256'] ?? null;
if (!is_string($contractHash) || preg_match('/^[a-f0-9]{64}$/D', $contractHash) !== 1) {
    $fail(
        'CONTENT_SPACING_CONTRACT_HASH_INVALID',
        '64 lowercase hexadecimal characters',
        $contractHash,
        $projectionRelativePath
    );
}
if (!str_contains($guide, $contractHash)) {
    $fail(
        'CONTENT_SPACING_GUIDE_HASH_STALE',
        $contractHash,
        null,
        $guideRelativePath
    );
}

$rowsByToken = [];
foreach (preg_split('/\R/u', $guide) ?: [] as $line) {
    $trimmed = trim($line);
    if (!str_starts_with($trimmed, '|') || !str_ends_with($trimmed, '|')) {
        continue;
    }
    $cells = array_map('trim', explode('|', trim($trimmed, '|')));
    if (count($cells) !== 5 || preg_match('/^`([^`]+)`$/u', $cells[0], $tokenMatch) !== 1) {
        continue;
    }
    if (!str_starts_with($tokenMatch[1], '--sf-content--space-')) {
        continue;
    }
    $role = preg_match('/^`([^`]+)`$/u', $cells[1], $roleMatch) === 1
        ? $roleMatch[1]
        : $cells[1];
    $mobile = preg_match('/^(\d+)px$/D', $cells[3], $mobileMatch) === 1
        ? (int) $mobileMatch[1]
        : null;
    $desktop = preg_match('/^(\d+)px$/D', $cells[4], $desktopMatch) === 1
        ? (int) $desktopMatch[1]
        : null;
    $rowsByToken[$tokenMatch[1]][] = [
        'token' => $tokenMatch[1],
        'role' => $role,
        'mobile_px' => $mobile,
        'desktop_px' => $desktop,
    ];
}

foreach ($tokens as $token) {
    $expectedTuple = [
        'token' => $token['token'] ?? null,
        'role' => $token['role'] ?? null,
        'mobile_px' => $token['mobile_px'] ?? null,
        'desktop_px' => $token['desktop_px'] ?? null,
    ];
    if (!is_string($expectedTuple['token'])
        || !is_string($expectedTuple['role'])
        || !is_int($expectedTuple['mobile_px'])
        || !is_int($expectedTuple['desktop_px'])) {
        $fail(
            'CONTENT_SPACING_TOKEN_INVALID',
            'complete token tuple',
            $expectedTuple,
            $projectionRelativePath
        );
    }

    $actualRows = $rowsByToken[$expectedTuple['token']] ?? [];
    if ($actualRows === []) {
        $fail(
            'CONTENT_SPACING_TUPLE_MISSING',
            $expectedTuple,
            null,
            $guideRelativePath
        );
    }
    if (count($actualRows) !== 1) {
        $fail(
            'CONTENT_SPACING_TUPLE_DUPLICATE',
            $expectedTuple,
            $actualRows,
            $guideRelativePath
        );
    }
    if ($actualRows[0] !== $expectedTuple) {
        $fail(
            'CONTENT_SPACING_TUPLE_MISMATCH',
            $expectedTuple,
            $actualRows[0],
            $guideRelativePath
        );
    }
}

if (preg_match('/[\'\"]content-spacing[\'\"]\s*=>/u', $menu) !== 1) {
    $fail(
        'CONTENT_SPACING_MENU_ENTRY_MISSING',
        'content-spacing menu entry',
        null,
        $menuRelativePath
    );
}

echo json_encode([
    'status' => 'pass',
    'contract_sha256' => $contractHash,
    'projection_sha256' => hash_file('sha256', $projectionPath),
    'public_token_count' => count($tokens),
    'validated_tuple_count' => count($tokens),
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL;
