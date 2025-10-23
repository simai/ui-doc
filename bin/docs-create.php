#!/usr/bin/env php
<?php
    declare(strict_types=1);


    $opts = getopt('', ['lang::','slug::','title::','order::','dry-run::','import::','category::','no-parent-menu::']);
    $dry  = filter_var($opts['dry-run'] ?? 'false', FILTER_VALIDATE_BOOLEAN);
    $importPath = $opts['import'] ?? null;
    $baseDir = realpath(__DIR__ . '/..') ?: getcwd();

    if ($importPath) {

        $batch = loadImportFile($importPath);
        $lang = $batch['lang'] ?? ($opts['lang'] ?? 'en');
        if (!$lang) { fwrite(STDERR, "Import file missing 'lang' and no --lang provided.\n"); exit(1); }

        $pages = $batch['pages'] ?? null;
        if (!is_array($pages) || !$pages) { fwrite(STDERR, "Import file has no non-empty 'pages' array.\n"); exit(1); }

        $ok=0; $fail=0;
        foreach ($pages as $i => $item) {
            [$slug,$title,$order,$isCategory,$noParentMenu] = normalizePageItem($item, $i);
            if (!$slug || !$title) { $fail++; fwrite(STDERR, "[skip] missing slug/title at index {$i}\n"); continue; }
            $res = processOne($baseDir, $lang, $slug, $title, $order, $dry, $isCategory, $noParentMenu);
            $res ? $ok++ : $fail++;
        }
        echo "Batch finished: success={$ok}, failed={$fail}\n";
        exit($fail>0 ? 1 : 0);
    }


    $lang  = $opts['lang']  ?? 'en';
    $slug  = $opts['slug']  ?? null;
    $title = $opts['title'] ?? null;
    $order = isset($opts['order']) ? (int)$opts['order'] : null;

    $isCategory    = filter_var($opts['category'] ?? 'false', FILTER_VALIDATE_BOOLEAN);
    $noParentMenu  = filter_var($opts['no-parent-menu'] ?? 'false', FILTER_VALIDATE_BOOLEAN);

    if (!$slug || !$title) {
        fwrite(STDERR, "Missing required args: --slug and --title (or use --import=file)\n");
        exit(1);
    }

    $ok = processOne($baseDir, $lang, $slug, $title, $order, $dry, $isCategory, $noParentMenu);
    exit($ok ? 0 : 1);


    function processOne(
        string $baseDir,
        string $lang,
        string $slug,
        string $title,
        ?int $order,
        bool $dry,
        bool $isCategory,
        bool $noParentMenu
    ): bool {


        if (str_ends_with($slug, '/')) $isCategory = true;
        $slugPath = normalizePathSlug($slug);
        $parentPath = getParentPath($slugPath);
        if ($slugPath === '') { fwrite(STDERR, "Slug becomes empty after normalization: '{$slug}'\n"); return false; }

        $docsDir = $baseDir . "/source/{$_ENV['DOCS_DIR']}/{$lang}";
        $dirPart   = $isCategory ? $slugPath : dirname($slugPath);
        $filePart  = $isCategory ? null : basename($slugPath);
        $pageDir   = $dirPart === '.' || $dirPart === '' ? $docsDir : $docsDir . '/' . $dirPart;
        // paths
        $settingsPath = $pageDir . '/.settings.php';
        $pagePath     = $isCategory ? null : ($pageDir . '/' . $filePart . '.md');

        // for pages: skip menu if folder == file
        $parentLeaf = ($dirPart === '.' || $dirPart === '') ? null : basename($dirPart);
        $skipMenuForPage = (!$isCategory) && ($parentLeaf !== null && $parentLeaf === $filePart);

        ensureDir($docsDir, $dry);
        if(!$isCategory) {
            ensureDir($pageDir, $dry);
        }

        // load/prepare settings for current (category or page) dir
        $settings = [
            'title' => $title,
            'order' => $order ?? 10,
        ];
        $settingsExists = file_exists($settingsPath);
        if ($settingsExists) {
            $loaded = include $settingsPath;
            if (is_array($loaded)) {
                $settings['title'] = $loaded['title'] ?? $settings['title'];
                $settings['order'] = $loaded['order'] ?? ($order ?? $settings['order']);
                if (!$isCategory && !$skipMenuForPage) {
                    $settings['menu'] = isset($loaded['menu']) && is_array($loaded['menu']) ? $loaded['menu'] : [];
                } elseif ($isCategory && isset($loaded['menu']) && is_array($loaded['menu'])) {
                    // категории обычно имеют меню для вложенных пунктов — оставим, если уже было
                    $settings['menu'] = $loaded['menu'];
                }
            }
        }
        if ($settingsExists && $order !== null) { $settings['order'] = $order; }

        // write page .md (only for page mode)
        if (!$isCategory) {
            if (!file_exists($pagePath)) {
                $frontMatter = "---\n"
                    . "extends: _core._layouts.documentation\n"
                    . "section: content\n"
                    . "title: " . yamlEscape($title) . "\n"
                    . "description: " . yamlEscape($title) . "\n"
                    . "---\n\n"
                    . "# {$title}\n\n"
                    . "_Draft_";
                if ($dry) {
                    echo "[dry-run] write file: {$pagePath}\n{$frontMatter}\n";
                } else {
                    if (@file_put_contents($pagePath, $frontMatter) === false) {
                        fwrite(STDERR, "Failed to write page: {$pagePath}\n");
                        return false;
                    }
//                    echo "Created page: " . rel($pagePath, $baseDir) . "\n";
                }
            } else {
                echo "Page already exists: " . rel($pagePath, $baseDir) . "\n";
            }

            // menu in current dir (unless folder==file)
            if (!$skipMenuForPage) {
                $menuKey = $filePart;
                if (!isset($settings['menu'])) $settings['menu'] = [];
                if (!array_key_exists($menuKey, $settings['menu'])) {
                    $settings['menu'][$menuKey] = $title;
                } else {
                    echo "Menu already contains key '{$menuKey}' at " . rel($settingsPath, $baseDir) . "\n";
                }
            }
            $settingsPhp = "<?php\nreturn " . var_export($settings, true) . ";\n";
            if ($dry) {
                echo "[dry-run] write file: {$settingsPath}\n{$settingsPhp}\n";
            } else {
                if (@file_put_contents($settingsPath, $settingsPhp) === false) {
                    fwrite(STDERR, "Failed to write settings: {$settingsPath}\n");
                    return false;
                }

            }
        }





        if ($isCategory && !$noParentMenu) {
            $nameArr =  explode('/',$pageDir);

            $parentDir = getParentPath($pageDir);
            $mainDir = $parentDir;
            $leaf = basename($pageDir);
            if($leaf === basename($parentDir)) {
                $parentDir = getParentPath($parentDir);
            }

            $parentSettingsPath = ($parentDir === '' ? $docsDir : $parentDir) . '/.settings.php';
            $currentSettingsPath = ($parentDir === '' ? $docsDir : $mainDir) . '/.settings.php';
            if($mainDir !== $parentDir) {
                ensureDir($mainDir, $dry);
            }
            ensureDir($parentDir, $dry);

            $current = [
                'title' => $title,
                'order' => $order ?? 10,
                'menu'  => [],
            ];
            $parent = [];
            $parentExists = file_exists($parentSettingsPath);
            if ($parentExists) {
                $loaded = include $parentSettingsPath;
                if (is_array($loaded)) {
                    $parent['title'] = $loaded['title'] ?? $current['title'];
                    $parent['order'] = $loaded['order'] ?? $current['order'];
                    $parent['menu']  = isset($loaded['menu']) && is_array($loaded['menu']) ? $loaded['menu'] :$current['menu'];
                }
            }
            if (!array_key_exists($leaf, $current['menu'])) {
                $parent['menu'][$leaf] = $title;
            }

            $parentPhp = "<?php\nreturn " . var_export($parent, true) . ";\n";
            $currentPhp = "<?php\nreturn " . var_export($current, true) . ";\n";
            if ($dry) {
                echo "[dry-run] write file: {$parentSettingsPath}\n{$parentPhp}\n";
            } else {
                if (@file_put_contents($currentSettingsPath, $currentPhp) === false) {
                    fwrite(STDERR, "Failed to write parent settings: {$parentSettingsPath}\n");
                    return false;
                }
                if (@file_put_contents($parentSettingsPath, $parentPhp) === false) {
                    fwrite(STDERR, "Failed to write parent settings: {$parentSettingsPath}\n");
                    return false;
                }

            }
        }

        return true;
    }

    function normalizePageItem(mixed $item, int $idx): array {
        $slug=null; $title=null; $order=null; $isCategory=false; $noParentMenu=false;

        if (is_array($item)) {
            // assoc?
            if (array_keys($item) !== range(0, count($item)-1)) {
                $slug  = $item['slug']  ?? null;
                $title = $item['title'] ?? null;
                $order = isset($item['order']) ? (int)$item['order'] : null;
                $isCategory   = filter_var(($item['category'] ?? false), FILTER_VALIDATE_BOOLEAN);
                $noParentMenu = filter_var(($item['noParentMenu'] ?? false), FILTER_VALIDATE_BOOLEAN);
            } else {
                $slug  = $item[0] ?? null;
                $title = $item[1] ?? null;
                $order = isset($item[2]) ? (int)$item[2] : null;
                if (isset($item[3]) && is_array($item[3])) {
                    $isCategory   = filter_var(($item[3]['category'] ?? false), FILTER_VALIDATE_BOOLEAN);
                    $noParentMenu = filter_var(($item[3]['noParentMenu'] ?? false), FILTER_VALIDATE_BOOLEAN);
                }
            }
        } else {
            fwrite(STDERR, "Invalid page item at index {$idx}: must be array.\n");
        }

        if (is_string($slug) && str_ends_with($slug, '/')) $isCategory = true;
        return [$slug, $title, $order, $isCategory, $noParentMenu];
    }

    function loadImportFile(string $path): array {
        if (!file_exists($path)) { fwrite(STDERR, "Import file not found: {$path}\n"); exit(1); }
        $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
        if ($ext === 'json') {
            $raw = file_get_contents($path);
            $data = json_decode($raw, true);
            if (!is_array($data)) { fwrite(STDERR, "Invalid JSON in {$path}\n"); exit(1); }
            return $data;
        }
        if ($ext === 'php') {
            $data = include $path;
            if (!is_array($data)) { fwrite(STDERR, "PHP import file must return array in {$path}\n"); exit(1); }
            return $data;
        }
        fwrite(STDERR, "Unsupported import file type: .{$ext} (use .json or .php)\n");
        exit(1);
    }

    function getParentPath(string $raw): string  {
        $path = explode('/', $raw);
       array_pop($path);
        if(count($path) > 0) {
            return implode('/', $path);
        } else {
            return  '';
        }
    }

    function normalizePathSlug(string $raw): string {
        $raw = trim($raw);
        $raw = str_replace('\\', '/', $raw);
        $parts = array_filter(explode('/', $raw), fn($p) => $p !== '' && $p !== '.' && $p !== '..');
        $norm = [];
        foreach ($parts as $p) {
            $p = strtolower(trim($p));
            $p = preg_replace('~[^a-z0-9\-]+~', '-', $p);
            $p = trim($p, '-');
            if ($p !== '') $norm[] = $p;
        }
        return implode('/', $norm);
    }

    function ensureDir(string $dir, bool $dry): void {
        if (!is_dir($dir)) {
            if ($dry) {
                echo "[dry-run] mkdir -p: {$dir}\n";
            } else {
                if (!mkdir($dir, 0775, true) && !is_dir($dir)) {
                    fwrite(STDERR, "Failed to create directory: {$dir}\n");
                    exit(1);
                }
            }
        }
    }

    function yamlEscape(string $s): string {
        if (preg_match('~[:#\-\[\]\{\},&\*\?\'"%@`]|^\s| \s$~u', $s)) {
            $s = str_replace(['\\', '"'], ['\\\\', '\\"'], strval($s));
            return "\"{$s}\"";
        }
        return $s;
    }

    function rel(string $path, string $base): string {
        if (str_starts_with($path, $base)) {
            return ltrim(substr($path, strlen($base)), DIRECTORY_SEPARATOR);
        }
        return $path;
    }


    if (!function_exists('str_ends_with')) {
        function str_ends_with(string $haystack, string $needle): bool {
            $len = strlen($needle);
            return $len === 0 ? true : (substr($haystack, -$len) === $needle);
        }
    }
