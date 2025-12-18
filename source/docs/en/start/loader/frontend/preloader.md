---
extends: _core._layouts.documentation
section: content
title: 1.5 Preloader (loading indicator)
description: 1.5 Preloader (loading indicator)
---

# 1.5 Preloader (loading indicator)

**SFLoaderPlugin** provides a built-in visual preloader shown during initial component and asset loading. This hides
incomplete markup and improves perceived speed.

## Purpose

* Signals that the interface is loading.
* Hides DOM until required JS/CSS and templates arrive.
* Improves UX on slow connections.

## How it works

1. On plugin start, if no cache exists, `runPreloader()` starts.
2. `document.body.style.opacity = '0'` hides content.
3. `runPreloader()` creates `<div class="sf-loader">` with SVG animation and text.
4. After assets load, `stopPreloader()` removes the preloader and restores `body.style.opacity = '1'`.

## Preloader configuration

```js
new SFLoaderPlugin({
    preloader: {
        // width
        width: 66,
        // height
        height: 100,
        // SVG color
        color: "#E81123"
    },
});
```

## Methods

* `runPreloader()` — shows/starts the preloader.
* `rotatePreloader()` — runs SVG animation.
* `stopAnimation()` — stops animation timer.
* `stopPreloader()` — hides preloader and restores `body.style.opacity = 1`.

## When it shows

* Shown when no cache exists (`SF_PLUGIN_LIST-<pageHash>` missing).
* Only on first run (`this.firstLoad === true`).
* Can be disabled: `preloader: false`.

## Preloader does NOT show when

* All assets are already loaded and cached.
* `preloader: false` or `usePreloader = false` is set.
* Components are embedded manually (e.g., SSR/SPA build).
