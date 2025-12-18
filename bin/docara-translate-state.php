<?php

declare(strict_types=1);

/**
 * Docara documentation translation state builder.
 *
 * Usage examples:
 *  php bin/docara-translate-state.php --docs-dir=source/docs --source=ru --targets=en
 *  php bin/docara-translate-state.php --docs-dir=source/docs --source=ru --targets=en --print-locales
 *  php bin/docara-translate-state.php --docs-dir=source/docs --source=ru --targets=en --print-todo --target=en
 *  php bin/docara-translate-state.php --docs-dir=source/docs --source=ru --targets=en --print-todo-with-size --target=en
 *  php bin/docara-translate-state.php --docs-dir=source/docs --source=ru --targets=en --sync-targets=en
 */

final class Cli
{
    /**
     * @param array<int, string> $argv
     */
    public function run(array $argv): int
    {
        $options = (new OptionsParser())->parse($argv);

        if ($options->printLocales) {
            $locales = (new LocaleDiscovery())->discoverLocales($options->docsDir);
            foreach ($locales as $locale) {
                fwrite(STDOUT, $locale . "\n");
            }

            return 0;
        }

        if ($options->sourceLocale === '') {
            fwrite(STDERR, "Error: --source is required\n");
            return 2;
        }

        $builder = new StateBuilder(
            $options->docsDir,
            $options->stateFile,
            $options->sourceLocale,
            $options->targets,
            $options->extensions
        );

        $state = $builder->build($options);
        (new StateWriter())->write($options->stateFile, $state);

        if ($options->printTodo || $options->printTodoWithSize) {
            $target = $options->todoTarget !== '' ? $options->todoTarget : ($options->targets[0] ?? '');
            if ($target === '') {
                fwrite(STDERR, "Error: --print-todo requires --target or --targets\n");
                return 2;
            }

            $todo = (new TodoExtractor())->extractTodoFiles($state, $target);
            foreach ($todo as $relativePath) {
                if ($options->printTodoWithSize) {
                    $size = null;
                    if (isset($state['locales'][$options->sourceLocale]['files'][$relativePath]['size'])) {
                        $size = (int) $state['locales'][$options->sourceLocale]['files'][$relativePath]['size'];
                    } else {
                        $sourcePath = $options->docsDir . '/' . $options->sourceLocale . '/' . $relativePath;
                        $size = is_file($sourcePath) ? filesize($sourcePath) : 0;
                    }
                    fwrite(STDOUT, $relativePath . "\t" . $size . "\n");
                } else {
                    fwrite(STDOUT, $relativePath . "\n");
                }
            }
        }

        return 0;
    }
}

final class Options
{
    public string $docsDir = 'source/docs';

    public string $stateFile = '';

    public string $sourceLocale = '';

    /** @var array<int, string> */
    public array $targets = [];

    /** @var array<int, string> */
    public array $extensions = ['md'];

    /** @var array<int, string> */
    public array $specialFiles = ['.lang.php', '.settings.php'];

    public bool $printLocales = false;

    public bool $printTodo = false;

    public bool $printTodoWithSize = false;

    public string $todoTarget = '';

    public bool $force = false;

    /** @var array<int, string> */
    public array $syncTargets = [];
}

final class OptionsParser
{
    /**
     * @param array<int, string> $argv
     */
    public function parse(array $argv): Options
    {
        $args = (new ArgvParser())->parse($argv);

        $opt = new Options();

        if (isset($args['docs-dir'])) {
            $opt->docsDir = (string) $args['docs-dir'];
        }

        $opt->docsDir = rtrim(str_replace('\\', '/', $opt->docsDir), '/');
        $opt->stateFile = $opt->docsDir . '/.translate.php';

        if (isset($args['state-file'])) {
            $opt->stateFile = (string) $args['state-file'];
        }

        if (isset($args['source'])) {
            $opt->sourceLocale = strtolower(trim((string) $args['source']));
        }

        if (isset($args['targets'])) {
            $opt->targets = $this->csv((string) $args['targets']);
            $opt->targets = array_values(array_unique(array_map(
                static fn (string $v): string => strtolower($v),
                $opt->targets
            )));
        }

        if (isset($args['extensions'])) {
            $opt->extensions = $this->csv((string) $args['extensions']);
            $opt->extensions = array_values(array_unique(array_map(
                static fn (string $v): string => strtolower(ltrim($v, '.')),
                $opt->extensions
            )));
        }

        if (isset($args['special-files'])) {
            $opt->specialFiles = $this->csv((string) $args['special-files']);
            $opt->specialFiles = array_values(array_unique(array_map(
                static fn (string $v): string => trim($v),
                $opt->specialFiles
            )));
        }

        if (isset($args['print-locales'])) {
            $opt->printLocales = true;
        }

        if (isset($args['print-todo'])) {
            $opt->printTodo = true;
        }

        if (isset($args['print-todo-with-size'])) {
            $opt->printTodoWithSize = true;
        }

        if (isset($args['target'])) {
            $opt->todoTarget = strtolower(trim((string) $args['target']));
        }

        if (isset($args['force'])) {
            $opt->force = true;
        }

        if (isset($args['sync-targets'])) {
            $opt->syncTargets = $this->csv((string) $args['sync-targets']);
            $opt->syncTargets = array_values(array_unique(array_map(
                static fn (string $v): string => strtolower($v),
                $opt->syncTargets
            )));
        }

        return $opt;
    }

    /**
     * @return array<int, string>
     */
    private function csv(string $value): array
    {
        $items = array_map('trim', explode(',', $value));
        $items = array_values(array_filter($items, static fn (string $v): bool => $v !== ''));

        return $items;
    }
}

final class ArgvParser
{
    /**
     * @param array<int, string> $argv
     *
     * @return array<string, string|bool>
     */
    public function parse(array $argv): array
    {
        $out = [];

        foreach ($argv as $i => $arg) {
            if ($i === 0) {
                continue;
            }

            if (!str_starts_with($arg, '--')) {
                continue;
            }

            $arg = substr($arg, 2);

            if ($arg === '') {
                continue;
            }

            if (str_contains($arg, '=')) {
                [$k, $v] = explode('=', $arg, 2);
                $k = trim($k);
                $v = trim($v);
                if ($k !== '') {
                    $out[$k] = $v;
                }
                continue;
            }

            $out[trim($arg)] = true;
        }

        return $out;
    }
}

final class LocaleDiscovery
{
    /**
     * @return array<int, string>
     */
    public function discoverLocales(string $docsDir): array
    {
        if (!is_dir($docsDir)) {
            return [];
        }

        $entries = scandir($docsDir);
        if ($entries === false) {
            return [];
        }

        $locales = [];

        foreach ($entries as $entry) {
            if ($entry === '.' || $entry === '..') {
                continue;
            }

            if ($entry[0] === '.' || $entry[0] === '_') {
                continue;
            }

            $path = $docsDir . '/' . $entry;
            if (!is_dir($path)) {
                continue;
            }

            if (!$this->looksLikeLocale($entry)) {
                continue;
            }

            $locales[] = $entry;
        }

        sort($locales);

        return $locales;
    }

    /**
     * @param string $entry
     *
     * @return bool
     */
    private function looksLikeLocale(string $entry): bool
    {
        // Accept: en, ru, tr, pt-BR, zh-Hans, etc.
        return (bool) preg_match('/^[a-z]{2,3}([\\\-\_][A-Za-z0-9]{2,8})*$/', $entry);
    }
}

final class StateBuilder
{
    /**
     * @param string $docsDir
     * @param string $stateFile
     * @param string $sourceLocale
     * @param array<int, string> $targets
     * @param array<int, string> $extensions
     */
    public function __construct(
        private readonly string $docsDir,
        private readonly string $stateFile,
        private readonly string $sourceLocale,
        private readonly array $targets,
        private readonly array $extensions
    ) {
    }

    /**
     * @return array<string, array|string|int|bool|null>
     */
    public function build(Options $options): array
    {
        $existing = (new StateReader())->read($this->stateFile);

        $discovery = new LocaleDiscovery();
        $locales = $discovery->discoverLocales($this->docsDir);

        if (!in_array($this->sourceLocale, $locales, true)) {
            throw new RuntimeException('Source locale folder not found: ' . $this->sourceLocale);
        }

        $sourceRoot = $this->docsDir . '/' . $this->sourceLocale;

        $scanner = new FileScanner();
        $sourceFiles = $scanner->scan($sourceRoot, $this->extensions, $options->specialFiles);

        $state = [
            'docs_dir' => $this->docsDir,
            'base_locale' => $this->sourceLocale,
            'locales' => [],
            'meta' => [
                'hash_algo' => 'sha256',
                'generated_at' => (new DateTimeImmutable())->format(DATE_ATOM),
                'version' => 1,
            ],
        ];

        /** @var array<string, array<string, array<string, array<string, mixed>>>> $prevLocales */
        $prevLocales = [];
        if (is_array($existing) && isset($existing['locales']) && is_array($existing['locales'])) {
            $prevLocales = $existing['locales'];
        }

        foreach ($locales as $locale) {
            $localeRoot = $this->docsDir . '/' . $locale;

            if ($locale === $this->sourceLocale) {
                $files = [];
                    foreach ($sourceFiles as $relativePath => $sha) {
                        $files[$relativePath] = [
                            'sha256' => $sha,
                            'size' => @filesize($sourceRoot . '/' . $relativePath) ?: 0,
                        ];
                }

                $state['locales'][$locale] = [
                    'path' => $localeRoot,
                    'files' => $files,
                ];

                continue;
            }

            $prevLocaleFiles = [];
            if (isset($prevLocales[$locale]) && is_array($prevLocales[$locale]) && isset($prevLocales[$locale]['files']) && is_array($prevLocales[$locale]['files'])) {
                $prevLocaleFiles = $prevLocales[$locale]['files'];
            }

                $files = [];

                foreach ($sourceFiles as $relativePath => $sourceSha) {
                $targetFilePath = $localeRoot . '/' . $relativePath;

                    $sourceSize = @filesize($sourceRoot . '/' . $relativePath) ?: 0;

                $targetExists = is_file($targetFilePath);
                $targetSha = $targetExists ? hash_file('sha256', $targetFilePath) : null;
                    $targetSize = $targetExists ? (@filesize($targetFilePath) ?: null) : null;

                $prevTranslatedFrom = null;
                $prevTargetSha = null;
                $prevNeeds = null;

                if (isset($prevLocaleFiles[$relativePath]) && is_array($prevLocaleFiles[$relativePath])) {
                    $prev = $prevLocaleFiles[$relativePath];

                    if (isset($prev['translated_from_sha256']) && is_string($prev['translated_from_sha256'])) {
                        $prevTranslatedFrom = $prev['translated_from_sha256'];
                    }

                    if (isset($prev['sha256']) && is_string($prev['sha256'])) {
                        $prevTargetSha = $prev['sha256'];
                    }

                    if (isset($prev['needs_translate']) && is_bool($prev['needs_translate'])) {
                        $prevNeeds = $prev['needs_translate'];
                    }
                }

                $hasLocalChanges = false;
                if ($prevTargetSha !== null && $targetSha !== null && $prevTargetSha !== $targetSha) {
                    $hasLocalChanges = true;
                }

                $needsTranslate = $options->force
                    || !$targetExists
                    || ($prevTranslatedFrom === null)
                    || ($prevTranslatedFrom !== $sourceSha);

                // Preserve previous explicit needs_translate flag.
                if ($prevNeeds === true) {
                    $needsTranslate = true;
                }

                $files[$relativePath] = [
                    'translated_from_sha256' => $prevTranslatedFrom,
                    'sha256' => $targetSha,
                    'needs_translate' => $needsTranslate,
                    'has_local_changes' => $hasLocalChanges,
                    'source_size' => $sourceSize,
                    'size' => $targetSize,
                ];
            }

            $state['locales'][$locale] = [
                'path' => $localeRoot,
                'files' => $files,
            ];
        }

        // SYNC: mark translated_from_sha256 to current source sha and clear needs_translate.
        if ($options->syncTargets !== []) {
            foreach ($options->syncTargets as $locale) {
                if (!isset($state['locales'][$locale]) || !is_array($state['locales'][$locale])) {
                    continue;
                }

                if (!isset($state['locales'][$locale]['files']) || !is_array($state['locales'][$locale]['files'])) {
                    continue;
                }

                $localeRoot = $this->docsDir . '/' . $locale;
                $files = $state['locales'][$locale]['files'];

                foreach ($files as $relativePath => $info) {
                    $targetFilePath = $localeRoot . '/' . (string) $relativePath;

                    if (!is_file($targetFilePath)) {
                        continue;
                    }

                    $files[$relativePath]['translated_from_sha256'] = $sourceFiles[$relativePath] ?? null;
                    $files[$relativePath]['sha256'] = hash_file('sha256', $targetFilePath);
                    $files[$relativePath]['needs_translate'] = false;
                    $files[$relativePath]['has_local_changes'] = false;
                    $files[$relativePath]['source_size'] = @filesize($sourceRoot . '/' . $relativePath) ?: 0;
                    $files[$relativePath]['size'] = @filesize($targetFilePath) ?: null;
                }

                $state['locales'][$locale]['files'] = $files;
            }
        }

        return $state;
    }
}

final class FileScanner
{
    /**
     * @param string $rootDir
     * @param array<int, string> $extensions
     * @param array<int, string> $includeBasenames
     *
     * @return array<string, string> relativePath => sha256
     */
    public function scan(string $rootDir, array $extensions, array $includeBasenames = []): array
    {
        if (!is_dir($rootDir)) {
            return [];
        }

        $extensions = array_map(static fn (string $e): string => strtolower(ltrim($e, '.')), $extensions);
        $includeBasenames = array_values(array_unique($includeBasenames));

        $it = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($rootDir, RecursiveDirectoryIterator::SKIP_DOTS)
        );

        $files = [];

        /** @var SplFileInfo $file */
        foreach ($it as $file) {
            if (!$file->isFile()) {
                continue;
            }

            $path = $file->getPathname();

            // Skip hidden/_ directories anywhere in the path.
            if (preg_match('#/(\.|_)[^/]+/#', str_replace('\\', '/', $path)) === 1) {
                continue;
            }

            $ext = strtolower($file->getExtension());
            $basename = $file->getFilename();

            if (!in_array($ext, $extensions, true) && !in_array($basename, $includeBasenames, true)) {
                continue;
            }

            $relative = $this->relativePath($rootDir, $path);
            $files[$relative] = hash_file('sha256', $path);
        }

        ksort($files);

        return $files;
    }

    /**
     * @param string $rootDir
     * @param string $absolutePath
     *
     * @return string
     */
    private function relativePath(string $rootDir, string $absolutePath): string
    {
        $rootDir = rtrim(str_replace('\\', '/', $rootDir), '/') . '/';
        $absolutePath = str_replace('\\', '/', $absolutePath);

        if (!str_starts_with($absolutePath, $rootDir)) {
            throw new RuntimeException('Path is not inside root dir');
        }

        return substr($absolutePath, strlen($rootDir));
    }
}

final class StateReader
{
    /**
     * @return array<string, mixed>|null
     */
    public function read(string $stateFile): ?array
    {
        if (!is_file($stateFile)) {
            return null;
        }

        /** @var mixed $data */
        $data = include $stateFile;

        if (!is_array($data)) {
            return null;
        }

        return $data;
    }
}

final class StateWriter
{
    /**
     * @param array<string, array|string|int|bool|null> $state
     */
    public function write(string $stateFile, array $state): void
    {
        $exporter = new PhpExporter();

        $php = "<?php\n\n";
        $php .= "declare(strict_types=1);\n\n";
        $php .= "return " . $exporter->export($state) . ";\n";

        $dir = dirname($stateFile);
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }

        file_put_contents($stateFile, $php);
    }
}

final class PhpExporter
{
    /**
     * @param array|string|int|float|bool|null $value
     * @param int $indent
     *
     * @return string
     */
    public function export(array|string|int|float|bool|null $value, int $indent = 0): string
    {
        if (is_array($value)) {
            return $this->exportArray($value, $indent);
        }

        if (is_string($value)) {
            return $this->exportString($value);
        }

        if (is_int($value) || is_float($value)) {
            return (string) $value;
        }

        if (is_bool($value)) {
            return $value ? 'true' : 'false';
        }

        if ($value === null) {
            return 'null';
        }

        throw new RuntimeException('Unsupported value type for export: ' . gettype($value));
    }

    /**
     * @param array<array-key, array|string|int|float|bool|null> $arr
     * @param int $indent
     *
     * @return string
     */
    private function exportArray(array $arr, int $indent): string
    {
        if ($arr === []) {
            return '[]';
        }

        $pad = str_repeat('    ', $indent);
        $padInner = str_repeat('    ', $indent + 1);

        $lines = ['['];

        if (array_is_list($arr)) {
            foreach ($arr as $value) {
                $lines[] = $padInner . $this->export($value, $indent + 1) . ',';
            }
        } else {
            foreach ($arr as $key => $value) {
                $k = is_int($key) ? (string) $key : $this->exportString((string) $key);
                $lines[] = $padInner . $k . ' => ' . $this->export($value, $indent + 1) . ',';
            }
        }

        $lines[] = $pad . ']';

        return implode("\n", $lines);
    }

    /**
     * @param string $value
     *
     * @return string
     */
    private function exportString(string $value): string
    {
        $escaped = addcslashes($value, "\\\n\r\t\v\f\"\$");
        $escaped = str_replace("'", "\\'", $escaped);

        return "'" . $escaped . "'";
    }
}

final class TodoExtractor
{
    /**
     * @param array<string, mixed> $state
     * @param string $targetLocale
     *
     * @return array<int, string>
     */
    public function extractTodoFiles(array $state, string $targetLocale): array
    {
        if (!isset($state['locales']) || !is_array($state['locales'])) {
            return [];
        }

        if (!isset($state['locales'][$targetLocale]) || !is_array($state['locales'][$targetLocale])) {
            return [];
        }

        $target = $state['locales'][$targetLocale];

        if (!isset($target['files']) || !is_array($target['files'])) {
            return [];
        }

        $todo = [];

        foreach ($target['files'] as $relativePath => $info) {
            if (!is_array($info)) {
                continue;
            }

            if (isset($info['needs_translate']) && $info['needs_translate'] === true) {
                $todo[] = (string) $relativePath;
            }
        }

        sort($todo);

        return $todo;
    }
}

// Bootstrap
$exitCode = (new Cli())->run($argv);
exit($exitCode);
