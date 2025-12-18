---
extends: _core._layouts.documentation
section: content
title: 1.6 Server interaction
description: 1.6 Server interaction
---

# 1.6 Server interaction

## Purpose

**SFLoaderPlugin** communicates with the server to get:

* Lists of required JS and CSS files.
* Smart-component templates (when they are used).
* Configurations and dependencies.
* Cached build results (when available).

This interaction is required when the project runs **with `standAlone: false`**, meaning it does not rely on prebuilt
assets but depends on dynamic loading and server-side generation.

## Main request

The loader sends a GET request to the server at:

**/simai/loader/loader.php**

With parameters such as:

**?a\=modal,tooltip\&relations={"modal":\["core"\]}&checkFake\=true**

## Parameters

| Parameter   | Purpose                                                   |
|:------------|:----------------------------------------------------------|
| **a**       | Component list to load                                    |
| **relations** | Dependency object between components                    |
| **checkFake** | Flag requesting fake Smart-component templates          |
| **url**     | Page URL (used to form `pageHash`)                        |
| **load**    | Whether the backend was contacted before                  |
| **gzip**    | Indicates gzip support (so curl is not run on every call) |

{.table}

## Server processing

The `Loader.php` class handles:

1. Incoming parameters.
2. Calls to `LoaderAsset`, `AssetManager`, `TemplateLoader`.
3. Generation of:
  1. JS and CSS bundles.
  2. Fake templates.
  3. Initialization config.

## Server response

The response can include:

* `smartFakeContent` — serialized templates.
* Paths to `.js` and `.css` files.
* Cache identifiers (`BUNDLE_ID`, `pageHash`).
* Gzip flag.

```json
{
  "status": true,
  "js": [
    "/simai/cache/loader/bundle-abc123.js"
  ],
  "css": [
    "/simai/cache/loader/bundle-abc123.css"
  ],
  "smartFakeContent": {
    "templates": {
      ...
    },
    "fakeTemplates": {
      "modal": "<div>...</div>"
    }
  },
  "bundleId": "abc123"
}
```

## Notes

* The request always depends on the current URL (hashed on the server).
* The server may return ready bundles.
* Uses **`MatthiasMullie\Minify`** for concatenation and minification.
* For Smart components it calls **`TemplateLoader::buildObject()`**.

## 2.5 LoaderRequest.php — Request handling

## Purpose

The **`LoaderRequest`** class is a **universal request adapter** that provides:

* Safe access to request parameters.
* Support for multiple environments (Bitrix or plain PHP).
* A single interface for GET, POST, headers, etc.

`Loader.php` uses it to read all parameters including `a`, `b`, `clear_cache`, `relations`, `url`, `checkFake`.


## Structure

```php
class LoaderRequest
{
  protected string $method;
  protected string $uri;
  protected array $get;
  protected array $post;
  protected array $server;
  protected array $cookies;
}
```

All superglobals are copied into the object to avoid direct access to `$_GET`, `$_POST`, etc.

## Constructor

```php
public function __construct(array $get = [], array $post = [], array $server = [], array $cookies = [])
```

Allows setting input manually (e.g., for simulated requests) or defaults to the superglobals.

## Key methods

### **`getQuery(string $key = null): mixed`**

Returns a GET parameter value; with no key, returns the entire `$_GET` array.

### **`getPost(string $key = null): mixed`**

Same for POST parameters.

### **`getCookies(): array`**

Returns cookies.

### **`getServerParams(): array`**

Returns `$_SERVER`.

### **`getMethod(): string`**

HTTP method (`GET`, `POST`, etc.).

### **`getUri(): string`**

URI without the query string. Example: `/page/item`.

### **`getRequestUri(): string`**

Full URI including query string. Example: `/page/item?a=modal`.

### **`getHeader($name): string|null`**

Returns a header value by name. Uses `getallheaders()` when available.

### **`getRequestedPageDirectory(): string`**

Returns the page directory without query parameters and without the last segment.

#### Example

* URI: `/catalog/item/123`
* Returns: `/catalog/item`

Used when generating `pageHash`.

## Notes

* Universal: works in Bitrix (via **`Application::getContext()`**) and plain PHP.
* Avoids global variables.
* Eases testing and extension of the loader.
* All parameters are available centrally through **`Loader::$request`**.
