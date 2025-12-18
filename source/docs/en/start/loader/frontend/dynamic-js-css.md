---
extends: _core._layouts.documentation
section: content
title: 1.2 Dynamic JS and CSS loading
description: 1.2 Dynamic JS and CSS loading
---

# 1.2 Dynamic JS and CSS loading

**SFLoaderPlugin** supports **lazy (dynamic) resource loading** so you don’t load all JavaScript and CSS in advance. This
optimizes first paint and loads only the components actually used.

## How loading works

After a plugin is found (for example via `sf-asset="modal"`), the loader:

1. Determines which files are needed (js, css).
2. Checks for local paths or CDN links.
3. Dynamically creates `<script>` and `<link>` and injects them into `<head>`.

## Load formats

**SFLoaderPlugin** can load a file:

- From CDN (when a full URL is provided):

```json
{
  "modal": {
    "js": "https://cdn.site.com/modal.min.js",
    "css": "https://cdn.site.com/modal.min.css"
  }
}
```

- From a local build:

```json
{
  "modal": {
    "js": "simai/asset/simai.framework/sf5.master/component/modal/js/modal.js",
    "css": "simai/asset/simai.framework/sf5.master/component/modal/css/modal.css"
  }
}
```

## Dynamic DOM insertion

**SFLoaderPlugin** ensures the same file is not loaded twice.

```js
const script = document.createElement('script');
script.src = plugin.js;
script.async = true;
document.head.appendChild(script);
const link = document.createElement('link');
link.href = plugin.css;
link.rel = 'stylesheet';
document.head.appendChild(link);
```

## Asynchronous behavior

* JS and CSS load **asynchronously**.
* Component initialization runs after load.
* Multiple components load **in parallel**, but dependencies can affect init order (see section 1.3).

## Notes

* Respects gzip support.
* Uses versioned (hash) files for caching.
* Works with regular components and frameworks (core, smart, etc.).
* On load error, prints a console warning.

## Example

```html
<!-- The "tooltip" component loads dynamically -->
<div sf-asset="tooltip"></div>
```

Based on configuration the loader builds paths and loads:

```json
{
  "tooltip": {
    "js": "simai/asset/simai.framework/sf5.master/component/tooltip/js/tooltip.js",
    "css": "simai/asset/simai.framework/sf5.master/component/tooltip/css/tooltip.css"
  }
}
```
