---
extends: _core._layouts.documentation
section: content
title: 1.9 StandAlone mode
description: 1.9 StandAlone mode
---

# 1.9 StandAlone mode

## Purpose

The **`standAlone`** option in **SFLoaderPlugin** enables **autonomous component loading** where JS/CSS load **without
calling the server**. Useful when all assets are known in advance and don’t need dynamic requests.

## How to enable

Enable at plugin initialization:

```js
new SFLoaderPlugin({
    standAlone: true,
    findPlugins: SF.RuleLoader
});
```

## Behavior when `standAlone: true`

* Loader **does not request** `/simai/loader/loader.php`.
* Uses **`vUseMergeConfigGenerate()`** client-side to form local asset config.
* Plugins connect **directly via addScript/addStyle** using known paths (`/asset/...`).
* Works only with components predefined or found via **`findPlugins`**/DOM.
* Smart components and templates are not requested from the server—they must already be embedded.

## Behavior when `standAlone: false` (default)

* Loader sends plugin and dependency lists to the server.
* Server returns JS/CSS, templates, bundles, and cached assets.
* Supports template builds, `gzip`, fake templates.

## Benefits of `standAlone`

* No network calls — fully client-side.
* Great for SPA/SSR projects.
* Can be used in offline apps.
* Simplifies testing (everything loads locally).

## Limitations of `standAlone`

* All plugins must be available at fixed paths.
* Cannot dynamically assemble dependencies from the server.
* No automatic template substitution (**smartFakeContent**).
* If a file is missing (e.g., `.min.js`), the loader **tries an alternative** (regular `.js`) and continues.
* Full stop occurs only if no suitable file is found.
