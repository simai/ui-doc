---
extends: _core._layouts.documentation
section: content
title: "1.7 Smart components support"
description: "1.7 Smart components support"
---

# 1.7 Smart components support

## Purpose

**SFLoaderPlugin** and **`ComponentLoader`** provide full support for **Smart components** — standalone elements that:

* load dynamically (JS/CSS).
* have separate HTML templates.
* can contain their own props, events, and styles.
* are managed independently from regular components.

## Smart-component traits

* Placed inside a `<smart ... />` tag.
* Use the `name` attribute to determine component type.
* Support attributes: `data`, `property`, `events`, `modify`.
* Attributes are serialized, decoded, and passed as an object.

## Initialization flow

1. **Component discovery in DOM** (`initComponents()`):
    1. Finds all `<smart>` elements.
    2. Parses attributes and assigns a unique ID.
    3. Clones the original node and stores it in `smartTemplates`.

2. **Adding styles and scripts**:
    1. `appendStyle()` loads CSS from `/simai/asset/simai.framework/sf5.master/smart/<name>/css/<name>.css`.
    2. `appendScript()` loads JS and creates the component instance: `/smart/<name>/js/<name>.js`.

3. **Rendering**:
    1. `drawComponent()` creates a Smart-component instance (`new component.item()`), adds it to the list, and injects it
       into the DOM.

## Template loading and caching

Smart components use HTML templates that:

* are fetched from the server once (on first use).
* are stored in `CacheManager.cachedTemplates`.
* are then compressed with `compressToUTF16()` and saved to `localStorage`.

### localStorage storage

```js
localStorage["SF_SMART_GZIP"] = compressToUTF16(JSON.stringify(this.cachedTemplates));
```

### Load from localStorage

```js
const gzip = localStorage.getItem('SF_SMART_GZIP');
this.gZipReady = JSON.parse(decompressFromUTF16(gzip));
```

`cachedFakeContent` stores prepared HTML placeholders ready for insertion.

## CacheManager helpers

| Method                        | Purpose                                     |
|:------------------------------|:--------------------------------------------|
| **setCachedFakeContent(obj)** | Stores a component fake template            |
| **setCachedTemplates(obj)**   | Merges and stores templates                 |
| **setLocalZipReady()**        | Saves compressed templates to localStorage  |
| **getLocalZipReady()**        | Restores templates from localStorage        |
| **setCookie(obj, name)**      | Stores data in a cookie (optional)          |
| **getCookie(name)**           | Reads a cookie value                        |
{.table}

## When cache is used

* If templates were already loaded and stored in **`localStorage`**, no repeat request is made.
* If **`CacheManager.gZipReady`** has the needed template, it is used without contacting the server.
* Allows loading Smart components **offline** if templates are cached.

## Benefits of Smart components

* Clear separation: each component is independent.
* Convenient template/props system.
* Supports dynamic DOM insertion.
* Compressed, fast caching in localStorage.
* Fast UI restore on re-init.
