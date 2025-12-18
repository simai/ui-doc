---
extends: _core._layouts.documentation
section: content
title: 2.3 AssetManager.php — Генерация и сборка асетов
description: 2.3 AssetManager.php — Генерация и сборка асетов
---

# 2.3 AssetManager.php — Генерация и сборка асетов

## Назначение

**`AssetManager`** — это **ядро логики генерации, подключения и кэширования JS и CSS файлов** в SFLoader.  
Он собирает ассеты из фреймворков и компонентов, объединяет их в бандлы, создаёт `.gz` версии, и подключает их к
страницам.

## Основная структура

| class AssetManager{    public array $components \= \[\];    public array $frameworksFiles \= \[\];    public array $frameworkHash \= \[\];    public array $frameworks \= \[\];    public array $gzipSupport \= \[\];    public array $contentPerPages \= \[\];    public bool $isTemp \= false;    ...} |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

`$components` — обычные плагины;

`$frameworksFiles` — ассеты фреймворков;

`$contentPerPages` — кастомные бандлы на основе страницы;

`$isTemp` — флаг временного режима (используется в **`vUseMergeConfigGenerate()`**).

## Методы добавления ассетов

### `addJs($path, $isFramework = false)`

### `addCss($path, $isFramework = false)`

### `addString($string, $isFramework = false)`

* Добавляют JS, CSS или строку (`<script>...</script>`, `<style>...</style>`);
* В зависимости от флага `$isFramework` — кладут в `$frameworksFiles` или `$components`.

## Метод renderAll($name = '', $onlyPaths = false)

* Главный метод генерации финального вывода;
* При `$name` — рендерит только указанный фреймворк;
* Иначе вызывает `renderAllBundles()` — сборку всех плагинов и компонент.

## Метод renderAllBundles($onlyPaths = false)

* Объединяет все JS и CSS из `$components`;
* Вызывает **`bundle()`** для создания файлов;
* Возвращает:
    * массив путей (если `$onlyPaths = true`);
    * или HTML-теги `<script>`, `<link>`.

## Метод bundle($onlyPaths = false)
---
extends: _core._layouts.documentation
section: content
title: 2.3 AssetManager.php — Asset generation and bundling
description: 2.3 AssetManager.php — Asset generation and bundling
---

# 2.3 AssetManager.php — Asset generation and bundling

## Purpose

**`AssetManager`** is the **core of JS/CSS generation, connection, and caching** in SFLoader. It collects assets from
frameworks and components, bundles them, creates `.gz` versions, and connects them to pages.

## Main structure

| class AssetManager { public array $components = []; public array $frameworksFiles = []; public array $frameworkHash = []; public array $frameworks = []; public array $gzipSupport = []; public array $contentPerPages = []; public bool $isTemp = false; ... } |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

`$components` — regular plugins.

`$frameworksFiles` — framework assets.

`$contentPerPages` — per-page custom bundles.

`$isTemp` — temp-mode flag (used in **`vUseMergeConfigGenerate()`**).

## Methods to add assets

### `addJs($path, $isFramework = false)`

### `addCss($path, $isFramework = false)`

### `addString($string, $isFramework = false)`

* Add JS, CSS, or string (`<script>...</script>`, `<style>...</style>`).
* With `$isFramework`, place into `$frameworksFiles` or `$components`.

## Method `renderAll($name = '', $onlyPaths = false)`

* Main method for generating final output.
* With `$name`, renders only the specified framework.
* Otherwise calls `renderAllBundles()` to bundle all plugins/components.

## Method `renderAllBundles($onlyPaths = false)`

* Merges all JS/CSS from `$components`.
* Calls **`bundle()`** to create files.
* Returns either an array of paths (if `$onlyPaths = true`) or `<script>` / `<link>` tags.

## Method `bundle($onlyPaths = false)`

* Generates a content hash (`md5()`).
* Checks if files already exist:
    * `bundle-<hash>.js`
    * `bundle-<hash>.css`
* If not, creates files and writes content.
* Creates GZIP versions (`.gz`) if needed.
* Returns path or HTML.

## Method `getGzip($filePath, $content)`

* Creates a `.gz` version of given files.

## Method `getIdenticalHashFiles($prefix, $extension)`

* Checks whether files with the same hash already exist.
* Helps avoid unnecessary recreation.

## Method `unlinkFiles($files, $keep)`

* Deletes files while keeping `$keep` files.
* Used during updates or bundling.

## Method `findPageBundles()`

* Checks cache using the current `pageHash`.
* If `.js`/`.css` bundles exist, attaches them.
* Also injects:

```html
<script>
    window.BUNDLE_LOADED = true;
    window.BUNDLE_ID = '<hash>';
</script>
```

## Purpose of `window.BUNDLE_LOADED` and `window.BUNDLE_ID`

### `window.BUNDLE_LOADED`

In the plugin `init()` method:

```js
this.firstLoad = !window.BUNDLE_LOADED;
if (this.firstLoad) {
    document.body.style.opacity = '0';
}
```

If `BUNDLE_LOADED === true`:

* The bundle is already connected by the server (`AssetManager::findPageBundles()`).
* No need to fetch all assets via Ajax.
* Loader pulls plugins from localStorage and renders.
* Backend generates only the temp part if needed.

If `BUNDLE_LOADED !== true`:

* Preloader is shown.
* A full request to the server (`loader.php?a=...`) runs to build assets.

### `window.BUNDLE_ID`

Holds the unique page hash (`pageHash`) generated on the server.

Used in `SFLoaderPlugin` to:

* match the current page with cache in **localStorage**;
* load plugins if the hash differs;
* compare whether cache aligns with the current page structure.

#### Example

| let plugins = localStorage.getItem(`SF_PLUGIN_LIST-${this.urlHash}`) if (!plugins || window.BUNDLE_ID !== this.urlHash) { plugins = localStorage.getItem(`SF_PLUGIN_LIST-${window.BUNDLE_ID}`) } |
| :---- |

#### Summary

These variables allow you to:

* avoid reloading JS/CSS;
* skip the preloader when not needed;
* improve performance and stability of loading;
* know exactly which plugins were already connected.

## GZIP support

* Stores info in `$gzipSupport[$path]`.
* Used during generation if compression is enabled and supported by the server.

## Used in

* **`LoaderAsset::renderAll()`** and **`render()`** — to output HTML.
* **`Loader::vUseGenerate()`** and **`vUseMergeConfigGenerate()`** — as the basis for generation.
* **`checkSmartCache()`** — connecting smart cache (`smart/<pageHash>/js.js`).

## Summary

**`AssetManager`** is:

* the generator of final assets;
* an optimizer and cacher (via hashes and gzip);
* working in normal (`/cache`) and temp (`/temp`) modes;
* supporting separation by components and frameworks.

## 2.2 LoaderAsset.php — Asset manager

## Purpose

**`LoaderAsset`** is the **proxy between the loader system and the lower-level asset manager (`AssetManager`)**. It
controls framework connections, JS/CSS loading, smart-component cache checks, and provides access to `AssetManager`.

## Main structure

```php
class LoaderAsset
{
    protected static $instance;
    public AssetManager $assetManager;
    public const ASSET_DIR = SF_MAIN . '/asset';
    public const ASSET_CONFIG_FILE = '/config/.asset.config.php';
}
```

* Implemented as `Singleton (getInstance())`.
* Stores the AssetManager instance in `$this->assetManager`.

## Method `getInstance()`

Returns the same **`LoaderAsset`** instance:

```php
LoaderAsset::getInstance()
```

Allows centralized asset manager usage across the system.

## Method `load($framework, $types = null, $version = 'default')`

Loads the specified framework by name:

* Reads /simai/config/.asset.config.php.
* Looks for structure at `$framework → version → file[]`.
* Passes each file to AssetManager->addJs(), addCss(), or addString() depending on type (script, style, string).
* Can apply the /simai prefix to paths.
* Returns an array of connected paths.

### **Method `fetchComponents()`**

Protected, called from `load()`:

* Iterates asset config structure.
* Checks file extensions.
* Adds files to AssetManager.
* Supports styles, scripts, strings.

## Method `getCoreHash($name, $cache_path)`

* Gets the hash file for the specified framework:
    * `core-<hash>.js`
    * `core-<hash>.css`
* Checks for these files in `/cache/loader/`.
* If present, returns their paths.
* Used, for example, in **`Loader::init()`** to insert the core bundle without rebuilding.

## Method `checkSmartCache()`

Checks if a smart-component cache exists:

* Path: `/simai/cache/smart/<pageHash>/`.
* If `js.js` and/or `css.css` are found, they are attached as assets:

```php
$this->assetManager->addJs(...);
$this->assetManager->addCss(...);
```

Avoids regenerating templates and speeds up loading.

## Method `render(string|array $path)`

Accepts a path string or array and:

* Generates HTML `<script>` or `<link>` tags.
* Outputs them directly in the HTML response.

## Used in

* **`Loader::init()`** — to load the framework and connect ready caches.
* **`Loader::vUseGenerate()`** and **`vUseMergeConfigGenerate()`** — to generate final output.
* Templates, themes, dynamic loading.

## Summary

**`LoaderAsset`** is:

* the layer between logic and **`AssetManager`**;
* a tool for connecting frameworks, cache, and core bundles;
* the store/delegator of all JS/CSS resources;
* the main access point to **`AssetManager`** in the project.

## 2.4 TemplateLoader.php — Working with smart-component templates

## Purpose

**`TemplateLoader`** is responsible for:

* loading and saving smart-component templates;
* generating `js.js` and `css.css` from templates;
* forming fake templates for DOM insertion;
* updating template cache when changes occur.

It is used when forming the client response, particularly in **`vUseMergeConfigGenerate()`**.

## Key methods

### **`buildObject($hash): array`**

* Accepts the page hash (`pageHash`).
* Collects templates from cache and/or temp content.
* Returns an array:

```php
[
    'status' => true,
    'hasHash' => true|false,
    'templates' => [...],
    'fakeTemplates' => [...]
]
```

### **`getTemplates($path)` and `getFakeTemplates($path)`**

* Load templates from templates.txt and fake.txt under /simai/cache/.

### **`setTemplates($data, $path)` and `setFakeTemplates(...)`**

* Save serialized template arrays into .txt files.

### **`processTemplateData()` / `processCacheData()`**

* Update templates if differences are found.
* Use `searchDiff()` to detect changes.
* Merge old and new templates when needed.

### **`getTemplateFiles($data, $hashDir)`**

* **Builds an array of CSS and JS paths derived from smart-component templates.**
* **Used when generating unified js.js and css.css.**

## **`setCachedFiles($hashDir, $data)`**

* Stores templates in /simai/cache/smart/<hash>/.
* Minifies and merges files.
* Creates:
    * js.js
    * css.css

## Minification

Uses **`MatthiasMullie\Minify`**:

```php
use MatthiasMullie\Minify\CSS;
use MatthiasMullie\Minify\JS;
```

Minification is performed in **`setFileData($data, $path, $type)`**.

## Caching by `pageHash`

* Templates are cached under /cache/smart/<hash>/.
* On subsequent loads, templates are taken from there.
* If the hash matches, regeneration is skipped.

## Cleanup

#### **`clear()`**

* Removes templates.txt.

#### **`removeDirectory($dir)`**

* Deletes the smart/<hash> directory (including stale ones).

## **Safety**

### **`checkData($data)`**

* Checks whether the file is a valid serialized array.

## **Used**

* `Loader::vUseMergeConfigGenerate()` → template generation.
* Smart-component server logic.
* To store `fakeTemplates` → inserted into the client DOM.

## 2.7 LoaderFile.php — File search and filtering

## Purpose

**`LoaderFile`** is a **helper class** providing a method to get a file list from a directory with filtering. It is used
to find JS/CSS files when building assets in `Loader.php` and **`AssetManager`**.

## Main method

**`getList($dir, $arSearchFileType = false, $arIgnoreFile = false, $sortFlag = true): array`**

### Arguments

| Parameter             | Description                                                               |
|:----------------------|:--------------------------------------------------------------------------|
| **$dir**              | Absolute or relative directory path                                      |
| **$arSearchFileType** | List of extensions needed, e.g., `['js', 'css']`                         |
| **$arIgnoreFile**     | Substring filters to exclude files (e.g., `['.map']`)                    |
| **$sortFlag**         | Whether to sort results (default `true`)                                 |
{.table}

## Behavior

1. If the path is not absolute, it is prefixed with `$_SERVER["DOCUMENT_ROOT"]`.
2. Runs **`opendir($dir)`** and iterates files.
3. Skips `.` and `..`.
4. Applies extension filters.
5. Applies substring filters on filenames.
6. Returns an array of files.

## Used in

* **`Loader::getMinFile()`** — to find `.js`.
* **`Loader::getMinFileCss()`** — to find `.css`.
* Other parts needing a filtered file list from a component folder.
