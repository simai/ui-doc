---
extends: _core._layouts.documentation
section: content
title: 2.1 Loader.php — Main loading controller
description: 2.1 Loader.php — Main loading controller
---

# 2.1 Loader.php — Main loading controller

# Backend navigation

- [Server interaction](server-interaction.md)
- [Caching and assets](caching.md)
- [Integration](integration.md)

## Core initialization (`init()`)

### Purpose

The `init()` method in `Loader` is **the main entry point for the server-side loader initialization**. It should be
called when `loader.php` is accessed—most often when assets are included in the site header.

This method prepares everything needed for correct loader operation: modules, paths, configurations, and runtime
environment.

## Wiring

If Composer is used, connect `Loader` via autoloading:

```php
require_once $_SERVER["DOCUMENT_ROOT"] . "/simai/vendor/autoload.php";
use SIMAI\Main\Loader\Loader;
$loader = new Loader();
$loader->init();
```

## Detailed flow

### 1. Load configuration

```php
$this->getConfig();
```

Loads `.config.php` containing cache state, update flags, and plugin list.

### 2. Handle `loader_clear`

```php
$clear = $this->request->getQuery('loader_clear');
if ($clear === 'Y') {
    $this->clearCacheAnConfig(...);
}
```

If ?loader_clear=Y is present, `clearCacheAnConfig()` runs to:

* remove all files from `/simai/cache/`;
* reset `.config.php`.

### 3. Load the core framework

```php
LoaderAsset::getInstance()->load(framework: "simai.framework");
```

Loads the main library (core.js, core.css) defined as "simai.framework" in `asset.config.php`.

### 4. Attach `contentPerPages`

```php
LoaderAsset::getInstance()->assetManager->contentPerPages = $this->listConfig['contentPerPages'] ?? [];
```

If `.config.php` contains per-page content, pass it into AssetManager.

### 5. Bitrix vs regular environment

```php
if (class_exists('\\Bitrix\\Main\\Application')) {
    ...
} else {
    ...
}
```

Determines the environment:

* In Bitrix, uses `$APPLICATION` and `$request`;
* Otherwise, builds a simulated request array from `$_SERVER`, `$_GET`, `$_POST`.

This lets one loader work across different systems.

### 6. Load and check `.config.php`

```php
if (file_exists($fileConfig)) {
    $arProperty = require $fileConfig;
}
```

Loads the configuration array.

### 7. Check for existing core bundle

```php
$frameWorkHash = LoaderAsset::getInstance()->getCoreHash("simai.framework", $cache_path);
...
if (file_exists(js) && file_exists(css)) { ... }
```

If the core framework is already built (JS and CSS in cache), it is connected:

```php
addJs(..., true);
addCss(..., true);
```

And sent to the client:

```html
<script> window.need_preload = false; window.update_need = true|false; </script>
```

### 8. Attach page bundles

```php
LoaderAsset::getInstance()->assetManager->findPageBundles();
```

If a page bundle (bundle-xxx.js/css) already exists, it is connected now.

### 9. Check CSS theme

```php
if (file_exists(...sf-color.css)) {
  // can be enabled if needed
}
```

Checks for custom themes (e.g., color schemes).

### Summary

The `init()` method:

* runs first;
* handles cache, environment, configs;
* connects core and templates;
* prepares the page for quick bundling or full generation.

## The `initLoader()` method

### Purpose

**`initLoader()`** launches the **main loading logic** but **is not called inside `init()`—only separately during a
client Ajax request** when plugin lists, templates, and assets need to be generated.

### When it is called

**`initLoader()`** **is not invoked automatically inside `init()`**. Call it manually after core initialization, for
example:

**simai/loader/loader.php**

```php
require_once __DIR__ . '/../vendor/autoload.php';
use SIMAI\Main\Loader\Loader;
Loader::getInstance()->initLoader();
```

This is needed when:

* the frontend (`sfLoader`) sends a request to build bundles;
* smart templates, dependencies, and paths must be loaded;
* a response with fake templates or bundle paths is being formed.

**Why so**

`init()` itself may be used:

* for simple environment prep (e.g., in `header.php` inserted into the site template) and for rendering the core
  framework;
* in Bitrix or other CMS where there is no direct Ajax request to `loader.php`.

Therefore the full loading logic (including `vUseGenerate`, `vUseMergeConfigGenerate`) runs **only when needed**.

### Summary

* `init()` initializes the environment;
* `initLoader()` runs **only on frontend Ajax requests** when assets and templates truly need to be generated.

## Other key methods

### `getPlugin()`

Builds the final plugin list from:

* `a` (from request),
* `global_plugin` (from config).

### `clearCacheAnConfig($path)`

Clears/removes:

* asset cache (`/cache`);
* `.config.php`;
* `.lock` file.

### `updateModule()`

Adds to `.config.php`:

* new plugins;
* `update_last_stamp`;
* `update_last_date`.

### `vUseGenerate()` (deprecated)

* Asset generation (`v_use = 2` mode);
* Result: ready `.js` and `.css` files in `/cache/loader`.

### `vUseMergeConfigGenerate()`

* Main mode;
* Smart template support;
* Temp mode support (`/temp`);
* Forms the JSON response for the client.

## Summary

* Use `init()` to prepare and connect base assets;
* Use `initLoader()` **only when assets and templates must be generated**;
* Splitting these methods provides flexibility across scenarios—from header insertion to Ajax requests.
