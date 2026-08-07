<?php

declare(strict_types=1);

$repositoryRoot = dirname(__DIR__);
$projectionPath = $repositoryRoot . '/contracts/sf5/content-spacing.docs.v1.json';
$guidePath = $repositoryRoot . '/source/docs/ru/fundamentals/content-spacing.md';
$menuPath = $repositoryRoot . '/source/docs/ru/fundamentals/.settings.php';

$fail = static function (string $code): never {
    fwrite(STDERR, $code . PHP_EOL);
    exit(1);
};

foreach ([$projectionPath, $guidePath, $menuPath] as $requiredPath) {
    if (!is_file($requiredPath)) {
        $fail('CONTENT_SPACING_REQUIRED_FILE_MISSING:' . basename($requiredPath));
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
    $fail('CONTENT_SPACING_PROJECTION_INVALID_JSON');
}

$guide = (string) file_get_contents($guidePath);
$menu = (string) file_get_contents($menuPath);
$source = $projection['source'] ?? null;
$tokens = $projection['public_tokens'] ?? null;

if (!is_array($source) || !is_array($tokens) || count($tokens) !== 4) {
    $fail('CONTENT_SPACING_PROJECTION_INVALID');
}

$contractHash = $source['contract_sha256'] ?? null;
if (!is_string($contractHash) || preg_match('/^[a-f0-9]{64}$/D', $contractHash) !== 1) {
    $fail('CONTENT_SPACING_CONTRACT_HASH_INVALID');
}
if (!str_contains($guide, $contractHash)) {
    $fail('CONTENT_SPACING_GUIDE_HASH_STALE');
}

foreach ($tokens as $token) {
    $name = $token['token'] ?? null;
    $mobile = $token['mobile_px'] ?? null;
    $desktop = $token['desktop_px'] ?? null;
    if (!is_string($name) || !is_int($mobile) || !is_int($desktop)) {
        $fail('CONTENT_SPACING_TOKEN_INVALID');
    }
    if (!str_contains($guide, '| `' . $name . '` |')) {
        $fail('CONTENT_SPACING_TOKEN_UNDOCUMENTED:' . $name);
    }
    if (!str_contains($guide, '| ' . $mobile . 'px | ' . $desktop . 'px |')) {
        $fail('CONTENT_SPACING_TOKEN_VALUES_STALE:' . $name);
    }
}

if (preg_match('/[\'\"]content-spacing[\'\"]\s*=>/u', $menu) !== 1) {
    $fail('CONTENT_SPACING_MENU_ENTRY_MISSING');
}

echo json_encode([
    'status' => 'pass',
    'contract_sha256' => $contractHash,
    'projection_sha256' => hash_file('sha256', $projectionPath),
    'public_token_count' => count($tokens),
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL;
