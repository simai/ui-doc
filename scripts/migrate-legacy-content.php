<?php

declare(strict_types=1);

/**
 * Convert legacy ui-doc Markdown front matter to the closed Docara v2 set.
 *
 * Content is otherwise left byte-for-byte intact. The command is intentionally
 * deterministic and may be run repeatedly.
 */

$root = $argv[1] ?? null;

if (! is_string($root) || ! is_dir($root)) {
    fwrite(STDERR, "Usage: php scripts/migrate-legacy-content.php <content-root>\n");
    exit(2);
}

$allowed = ['title', 'description', 'tags', 'draft', 'translation_key'];
$canonicalRouteFromRelative = static function (string $relative): string {
    $route = preg_replace('/\.md$/', '', str_replace('\\', '/', $relative)) ?? $relative;
    if ($route === 'index') {
        return '';
    }

    return str_ends_with($route, '/index') ? substr($route, 0, -6) : $route;
};
$normalizeRoute = static function (string $base, string $relative): string {
    $segments = [];
    foreach (explode('/', trim($base . '/' . $relative, '/')) as $segment) {
        if ($segment === '' || $segment === '.') {
            continue;
        }
        if ($segment === '..') {
            array_pop($segments);
            continue;
        }
        $segments[] = $segment;
    }

    return implode('/', $segments);
};
$escapeRawHtml = static function (string $markdown): string {
    // PCRE must run in UTF-8 mode: without `u`, the second byte (0x85) of the
    // Cyrillic letter "х" is interpreted as the legacy NEL line separator.
    $lines = preg_split('/\R/u', $markdown);
    if (! is_array($lines)) {
        return $markdown;
    }

    $fence = null;
    $escapeHtmlSegment = static fn (string $segment): string => preg_replace_callback(
        '/<!--.*?-->|<\/?[A-Za-z][^>\n]*>|<!DOCTYPE[^>\n]*>/i',
        static fn (array $match): string => str_replace(['<', '>'], ['&lt;', '&gt;'], $match[0]),
        $segment,
    ) ?? $segment;

    foreach ($lines as &$line) {
        if (preg_match('/^ {0,3}(`{3,}|~{3,})/', $line, $match)) {
            $marker = $match[1][0];
            if ($fence === null) {
                $fence = ['marker' => $marker, 'length' => strlen($match[1])];
            } elseif ($fence['marker'] === $marker && strlen($match[1]) >= $fence['length']) {
                $fence = null;
            }

            continue;
        }

        if ($fence !== null) {
            continue;
        }

        // Raw HTML must be escaped, but angle brackets inside Markdown code
        // spans are literal documentation and must remain byte-for-byte
        // stable. Parse backtick runs instead of applying the HTML regexp to
        // the complete line.
        $escaped = '';
        $offset = 0;
        $delimiterLength = null;
        $length = strlen($line);

        while ($offset < $length) {
            $tick = strpos($line, '`', $offset);
            if ($tick === false) {
                $tail = substr($line, $offset);
                $escaped .= $delimiterLength === null ? $escapeHtmlSegment($tail) : $tail;
                $offset = $length;
                break;
            }

            $runEnd = $tick;
            while ($runEnd < $length && $line[$runEnd] === '`') {
                $runEnd++;
            }
            $runLength = $runEnd - $tick;
            $segment = substr($line, $offset, $tick - $offset);
            $escaped .= $delimiterLength === null ? $escapeHtmlSegment($segment) : $segment;
            $escaped .= substr($line, $tick, $runLength);

            if ($delimiterLength === null) {
                $delimiterLength = $runLength;
            } elseif ($delimiterLength === $runLength) {
                $delimiterLength = null;
            }

            $offset = $runEnd;
        }

        $line = $escaped;
    }
    unset($line);

    if ($fence !== null) {
        $lines[] = str_repeat($fence['marker'], $fence['length']);
    }

    return implode("\n", $lines);
};
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
);
$changed = 0;

foreach ($iterator as $file) {
    if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
        continue;
    }

    $path = $file->getPathname();
    $original = file_get_contents($path);

    if (! is_string($original)) {
        continue;
    }

    $source = mb_check_encoding($original, 'UTF-8')
        ? $original
        : (iconv('UTF-8', 'UTF-8//IGNORE', $original) ?: $original);
    $source = preg_replace('/\A\xEF\xBB\xBF/', '', $source) ?? $source;

    if (preg_match('/\A```markdown\R(.*)\R```\s*\z/su', $source, $wrapper)) {
        $source = $wrapper[1] . "\n";
    }

    $source = preg_replace('/^#{1,6}\s+(`{3,}.*)$/m', '$1', $source) ?? $source;

    if (! preg_match('/\A---\R(.*?)\R---\R/su', $source, $match)) {
        $target = $escapeRawHtml($source);
        if ($target !== $original) {
            file_put_contents($path, $target);
            $changed++;
        }

        continue;
    }

    $frontMatter = preg_split('/\R/u', $match[1]);
    if (! is_array($frontMatter)) {
        continue;
    }

    $kept = [];
    $keepContinuation = false;

    foreach ($frontMatter as $line) {
        if (preg_match('/^([A-Za-z_][A-Za-z0-9_-]*):(?:\s|$)/', $line, $keyMatch)) {
            $keepContinuation = in_array($keyMatch[1], $allowed, true);
            if (! $keepContinuation) {
                continue;
            }

            $key = $keyMatch[1];
            $value = trim(substr($line, strlen($key) + 1));
            if (in_array($key, ['title', 'description', 'translation_key'], true)
                && trim($value, "\"' \t") === '') {
                continue;
            }
            if (in_array($key, ['title', 'description', 'translation_key'], true)
                && ! preg_match('/^(?:".*"|\'.*\')$/s', $value)) {
                $value = json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?: '""';
            }
            $kept[] = $key . ': ' . $value;

            continue;
        }

        // Legacy files contain broken-encoding line splits inside scalar
        // values. Docara v2 intentionally keeps one closed key/value per line;
        // continuation lines are therefore dropped instead of interpreted as
        // executable YAML structure.
    }

    $body = substr($source, strlen($match[0]));
    $target = $kept === []
        ? $body
        : "---\n" . implode("\n", $kept) . "\n---\n" . $body;

    $target = $escapeRawHtml($target);

    if ($target !== $original) {
        file_put_contents($path, $target);
        $changed++;
    }
}

$renamed = [];
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
);
foreach ($files as $file) {
    if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
        continue;
    }

    $name = $file->getBasename('.md');
    if ($name === strtolower($name)) {
        continue;
    }

    $slug = strtolower(preg_replace('/(?<!^)[A-Z]/', '-$0', $name) ?? $name);
    $target = $file->getPath() . DIRECTORY_SEPARATOR . $slug . '.md';
    if (is_file($target) || ! rename($file->getPathname(), $target)) {
        fwrite(STDERR, "Cannot safely rename [{$file->getPathname()}] to [$target].\n");
        exit(3);
    }

    $renamed[$name] = $slug;
}

if ($renamed !== []) {
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
    );
    foreach ($files as $file) {
        if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
            continue;
        }

        $source = file_get_contents($file->getPathname());
        if (! is_string($source)) {
            continue;
        }

        $target = $source;
        foreach ($renamed as $old => $new) {
            $target = str_replace(["/$old/", "/$old.md", "($old.md"], ["/$new/", "/$new.md", "($new.md"], $target);
        }

        if ($target !== $source) {
            file_put_contents($file->getPathname(), $target);
            $changed++;
        }
    }
}

$relocated = [];
foreach (['ru', 'en'] as $locale) {
    $from = rtrim($root, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $locale . DIRECTORY_SEPARATOR . 'components';
    $to = rtrim($root, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $locale . DIRECTORY_SEPARATOR . 'framework-components';
    if (! is_dir($from)) {
        if (is_dir($to)) {
            $files = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator($to, FilesystemIterator::SKIP_DOTS),
            );
            foreach ($files as $file) {
                if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
                    continue;
                }
                $relative = str_replace('\\', '/', substr($file->getPathname(), strlen(rtrim($root, DIRECTORY_SEPARATOR)) + 1));
                $new = $canonicalRouteFromRelative($relative);
                $relocated[str_replace("$locale/framework-components", "$locale/components", $new)] = $new;
            }
        }
        continue;
    }
    if (file_exists($to)) {
        fwrite(STDERR, "Framework component relocation target already exists [$to].\n");
        exit(7);
    }

    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($from, FilesystemIterator::SKIP_DOTS),
    );
    foreach ($files as $file) {
        if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
            continue;
        }
        $relative = str_replace('\\', '/', substr($file->getPathname(), strlen(rtrim($root, DIRECTORY_SEPARATOR)) + 1));
        $old = $canonicalRouteFromRelative($relative);
        $relocated[$old] = str_replace("$locale/components", "$locale/framework-components", $old);
    }

    if (! rename($from, $to)) {
        fwrite(STDERR, "Cannot relocate legacy framework components [$from].\n");
        exit(8);
    }
}

$flattened = [];
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
);
foreach ($files as $file) {
    if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
        continue;
    }

    $relative = str_replace('\\', '/', substr($file->getPathname(), strlen(rtrim($root, DIRECTORY_SEPARATOR)) + 1));
    $segments = explode('/', substr($relative, 0, -3));
    if (count($segments) <= 4) {
        continue;
    }

    $locale = array_shift($segments);
    $oldRoute = $canonicalRouteFromRelative($relative);
    $targetSegments = [array_shift($segments), array_shift($segments), implode('-', $segments)];
    $newRoute = $locale . '/' . implode('/', $targetSegments);
    $target = rtrim($root, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $newRoute . '.md';

    if (is_file($target)) {
        fwrite(STDERR, "Flattened route collision for [$oldRoute] at [$target].\n");
        exit(4);
    }

    if (! is_dir(dirname($target)) && ! mkdir(dirname($target), 0777, true) && ! is_dir(dirname($target))) {
        fwrite(STDERR, "Cannot create flattened route directory for [$target].\n");
        exit(5);
    }

    if (! rename($file->getPathname(), $target)) {
        fwrite(STDERR, "Cannot flatten [$oldRoute] to [$newRoute].\n");
        exit(6);
    }

    $flattened[$oldRoute] = $newRoute;
}

$redirectsPath = $argv[2] ?? dirname(rtrim($root, DIRECTORY_SEPARATOR)) . DIRECTORY_SEPARATOR . 'redirects.json';
$existingMap = [];
if (is_file($redirectsPath)) {
    $existing = json_decode((string) file_get_contents($redirectsPath), true);
    if (is_array($existing['redirects'] ?? null)) {
        foreach ($existing['redirects'] as $redirect) {
            if (is_array($redirect) && is_string($redirect['from'] ?? null) && is_string($redirect['to'] ?? null)) {
                $existingMap[$redirect['from']] = $redirect['to'];
            }
        }
    }
}
$routeMap = array_merge($existingMap, $relocated, $flattened);
$currentRoutes = [];
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
);
foreach ($files as $file) {
    if ($file->isFile() && strtolower($file->getExtension()) === 'md') {
        $relative = str_replace('\\', '/', substr($file->getPathname(), strlen(rtrim($root, DIRECTORY_SEPARATOR)) + 1));
        $currentRoutes[$canonicalRouteFromRelative($relative)] = true;
    }
}

$directories = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::SELF_FIRST,
);
foreach ($directories as $directory) {
    if (! $directory->isDir()) {
        continue;
    }
    $relative = str_replace('\\', '/', substr($directory->getPathname(), strlen(rtrim($root, DIRECTORY_SEPARATOR)) + 1));
    if ($relative === '' || ! str_contains($relative, '/')) {
        continue;
    }
    $route = trim($relative, '/');
    if (isset($currentRoutes[$route])) {
        continue;
    }
    $name = basename($relative);
    $candidate = $route . '/' . $name;
    if (isset($currentRoutes[$candidate])) {
        $routeMap[$route] = $candidate;
    }
}

ksort($routeMap, SORT_STRING);
$reverseRouteMap = array_flip($routeMap);
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
);
foreach ($files as $file) {
    if (! $file->isFile() || strtolower($file->getExtension()) !== 'md') {
        continue;
    }

    $source = file_get_contents($file->getPathname());
    if (! is_string($source)) {
        continue;
    }
    $relative = str_replace('\\', '/', substr($file->getPathname(), strlen(rtrim($root, DIRECTORY_SEPARATOR)) + 1));
    $currentRoute = $canonicalRouteFromRelative($relative);
    $sourceRoute = $reverseRouteMap[$currentRoute] ?? $currentRoute;
    $sourceBases = array_values(array_unique([
        str_contains($sourceRoute, '/') ? dirname($sourceRoute) : '',
        $sourceRoute,
    ]));

    $target = preg_replace_callback(
        '/(?<!!)\[([^\]]+)\]\(([^)\s]+\.md(?:#[^)\s]+)?)\)/',
        static function (array $match) use ($normalizeRoute, $routeMap, $sourceBases, $currentRoutes): string {
            [$path, $fragment] = array_pad(explode('#', $match[2], 2), 2, null);
            $absolute = str_starts_with($path, '/');
            $relative = preg_replace('/\.md$/', '', ltrim($path, '/')) ?? $path;
            $resolved = null;
            foreach ($absolute ? [''] : $sourceBases as $base) {
                $candidate = $normalizeRoute($base, $relative);
                if (str_ends_with($candidate, '/index')) {
                    $candidate = substr($candidate, 0, -6);
                }
                $candidate = $routeMap[$candidate] ?? $candidate;
                if (isset($currentRoutes[$candidate])) {
                    $resolved = $candidate;
                    break;
                }
            }
            if ($resolved === null) {
                return $match[1];
            }

            return '[' . $match[1] . '](/' . $resolved . '/' . ($fragment === null ? '' : '#' . $fragment) . ')';
        },
        $source,
    ) ?? $source;

    $target = preg_replace_callback(
        '/(?<!!)\[([^\]]+)\]\(\/([A-Za-z0-9._\/-]+)\/?(#[^)]*)?\)/',
        static function (array $match) use ($routeMap, $currentRoutes): string {
            $route = trim($match[2], '/');
            $resolved = $routeMap[$route] ?? $route;
            if (! isset($currentRoutes[$resolved])) {
                return $match[1];
            }

            return '[' . $match[1] . '](/' . $resolved . '/' . ($match[3] ?? '') . ')';
        },
        $target,
    ) ?? $target;

    if ($target !== $source) {
        file_put_contents($file->getPathname(), $target);
        $changed++;
    }
}

$redirects = [];
foreach ($routeMap as $old => $new) {
    if ($old !== $new) {
        $redirects[] = ['from' => $old, 'to' => $new];
    }
}
file_put_contents($redirectsPath, json_encode([
    'schema' => 'docara.redirects.v1',
    'version' => 1,
    'redirects' => $redirects,
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . "\n");

fwrite(STDOUT, json_encode([
    'status' => 'success',
    'changed_markdown_files' => $changed,
    'renamed_slugs' => $renamed,
    'relocated_routes' => $relocated,
    'flattened_routes' => $flattened,
], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "\n");
