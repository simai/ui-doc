---
extends: _core._layouts.documentation
section: content
title: 1.8 Cache clearing and control
description: 1.8 Cache clearing and control
---

# 1.8 Cache clearing and control

## Purpose

**SFLoaderPlugin** uses cache to speed up repeated asset and template loading. In some cases you need to **clear or
reset cache**, especially:

* when updating component templates.
* when switching to another build version.
* during development.

## Cached data

Stored in `localStorage`:

* `SF_PLUGIN_LIST-<pageHash>` — already loaded plugins.
* `SF_SMART_LIST-<pageHash>` — Smart-component data and templates.
* `SF_SMART_GZIP` — all data and templates compressed via `compressToUTF16`.
* `SF_MISSING_PLUGINS` — plugin files that failed to load.

`document.cookie` can also be used for temporary data if enabled (`CacheManager.setCookie`).

## How to clear

Clearing can be done in several ways:

### 1. URL parameter

Add `loader_clear=Y` to the URL to trigger a full client cache wipe:

**https://site.com/page?loader\_clear=Y**

Checked during initialization; if present, `SF.Loader.clearCache()` runs.


### 2. Programmatically

Call the method in console or code:

```js
SF.Loader.clearCache()
```

### 3. Via DevTools

* Application → Local Storage → delete `SF_PLUGIN_LIST-*`, `SF_SMART_LIST-*`, `SF_SMART_GZIP`, `SF_MISSING_PLUGINS`.
* Clear cookies if needed.

## What `SF.Loader.clearCache()` does

* Removes all `SF_PLUGIN_LIST-*` and `SF_SMART_LIST-*` keys from localStorage.
* Removes `SF_SMART_GZIP`.
* Clears `SF_MISSING_PLUGINS`.
* Optionally resets template cache (if `CacheManager` is enabled).

## Notes

* Cache clearing does not affect statically embedded components.
* After clearing, components load again on the next visit.
* Clearing affects only the current domain.
