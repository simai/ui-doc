---
extends: _core._layouts.documentation
section: content
title: 1.4 Caching and load acceleration
description: 1.4 Caching and load acceleration
---

# 1.4 Caching and load acceleration

**SFLoaderPlugin** implements caching to speed up repeat component loads. This lets you:

* **Avoid loading the same plugins twice**.
* Reduce network requests.
* Reuse generated templates and assets.

Cache is stored in browser **localStorage**.

Keys use a page identifier (`pageHash`) calculated from the URL (usually `md5(window.location.pathname).slice(0, 16)`).
This separates cache across pages and avoids extra downloads.

## What is cached

Stored in **localStorage** using the page hash:

### List of loaded plugins

* Key: `SF_PLUGIN_LIST-<pageHash>`
* Contains names of successfully loaded JS/CSS components.

### Smart-component templates

* Key: `SF_SMART_LIST-<pageHash>`
* Contains serialized HTML templates (if used).

### Missing plugins and files

* Key: `SF_MISSING_PLUGINS`
* Temporary list preventing repeated load attempts.


## How the hash is created

Page identification uses a hash based on the URL:

```js
const pageHash = md5(window.location.pathname).slice(0, 16);
```

Used as part of `localStorage` keys and filenames (e.g., `bundle-<pageHash>-<hash>.js`).

## How caching works

* First page load — cache is created and stored.
* On revisit:
  * loader checks for `SF_PLUGIN_LIST-<hash>`.
  * if present — assets are not re-requested.
  * if absent — loads again and updates cache.

## Data compression (compressToUTF16)

* All data is **compressed before saving** via **`LZString.compressToUTF16()`**.
* Reduces stored volume.
* Improves read/write performance.
* Fits browser storage limits (5–10 MB).


### Example

```js
const raw = JSON.stringify({ modal: true, core: true });
const compressed = LZString.compressToUTF16(raw);
localStorage.setItem('SF\_PLUGIN\_LIST-abc123', compressed);

// Для чтения
const data = JSON.parse(LZString.decompressFromUTF16(localStorage.getItem('SF_PLUGIN_LIST-abc123')));
```

This method is **safe for localStorage** because it encodes only valid UTF-16 characters (unlike standard Base64).

Used for both loaded plugin lists and Smart-component templates.

* **SFLoaderPlugin** not only stores cache in **localStorage** but **optimizes its size** via `compressToUTF16`.
* Loads stay fast and memory-efficient.
* Users see an instant interface even without hitting the server if templates/plugins were loaded before.

## When cache is used

* On page load the loader checks cache by `pageHash`.
* If found:
  * Missing plugin files are not reloaded.
  * Smart-component templates are not requested from the server.
* If not found — data is fetched and cached again.

## Clearing cache

Force cache clearing by:

* Adding `?loader_clear=Y` to the page URL.
* Calling the method manually:

```js
SF.Loader.clearCache();
```
