---
extends: _core._layouts.documentation
section: content
title: 1.1 Automatic plugin discovery
description: 1.1 Automatic plugin discovery
---

# 1.1 Automatic plugin discovery

SFLoaderPlugin automatically detects which plugins to load on a page. It scans the DOM and finds components in two ways:

1. By a special attribute (default `sf-asset`).
2. By regular expressions on attributes if `findPlugins` is provided.

## How it works

### 1. DOM scan

The loader scans all elements and looks for those with the specified attribute:

```html
<div sf-asset="modal"></div>
```


The `modal` plugin will be found and added to the load queue automatically.

### 2. RegExp search

If `findPlugins` is passed in config, the loader checks attributes of all elements to match provided regex rules.

Пример:

```js
findPlugins: {slider: {regex: /sf-slider/,type: 'component'}}
```

If an element has, for example, **data-role="sf-slider"**, the **slider** plugin will be added.

### 3. Automatic monitoring (MutationObserver)

After initial load, SFLoaderPlugin starts a MutationObserver to track DOM changes:

* Newly added elements (e.g., via AJAX).
* DOM mutations.

New elements are checked the same way, and any new plugins are loaded immediately.

### 4. Internal methods

**search()** — Starts DOM change observation.

**searchRegexp()** — Checks DOM against regex rules (`findPlugins`).

**getAttributes()** — Extracts element attributes for analysis.

### 5. Пример работы

```html
<!-- Простой компонент -->
<div sf-asset="tooltip"></div>

<!-- Компонент, определяемый через регулярное выражение -->
<div data-role="sf-slider"></div>
```

If `findPlugins` includes a rule for slider, it loads too.

### 6. Notes

* Supports multiple loads (several identical components — single call).
* Works with static and dynamic elements.
* You can use a custom attribute instead of `sf-asset` (via `attr`).
