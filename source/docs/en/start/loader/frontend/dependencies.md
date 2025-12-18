---
extends: _core._layouts.documentation
section: content
title: 1.3 Plugin dependency management
description: 1.3 Plugin dependency management
---

# 1.3 Plugin dependency management

**SFLoaderPlugin** supports **dependency management**: plugin dependencies are loaded **first**, before the main
component. For example, fancybox may depend on jquery.

## How it works

In the client config you can pass a `relations` object that describes which components depend on others:

```json
{relations: { "fancybox": ["jquery"],  "tooltip": ["jquery", "wow"]}}
```

When the loader encounters fancybox, it first loads all declared dependencies (jquery, ...), **then fancybox itself**.

This matters when the main plugin uses functionality from its dependencies (shared functions, animations, base styles,
etc.).

## Example server request

**SFLoaderPlugin** sends dependencies with the main components in the `relations` parameter:

**/simai/loader/loader.php?a=modal\&relations\={"fancybox":\["jquery"\]}**

The server uses this to generate cache and correct asset order.

## Load order

1. Loader **analyzes dependencies**.
2. Loads **all dependencies** in order.
3. Then loads the main component.
4. Components initialize after full load.

## Notes

* Supports **multi-level dependencies**.
* A component is not loaded twice.
* Works for initial and dynamic loads.
* Load order prevents errors from missing dependencies.
