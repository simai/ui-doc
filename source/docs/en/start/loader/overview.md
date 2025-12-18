---
extends: _core._layouts.documentation
section: content
title: Introduction
description: Introduction
---

# Introduction

This document describes the SFLoader architecture, covering both frontend and backend parts.

The system is split into two large areas: client-side (frontend) and server-side (backend) logic.

## **Chapter 1: Frontend**

- **1.1 Automatic plugin discovery**
- **1.2 Dynamic JS and CSS loading**
- **1.3 Plugin dependency management**
- **1.4 Caching and load acceleration**
- **1.5 Preloader (loading indicator)**
- **1.6 Server interaction**
- **1.7 Smart component support**
- **1.8 Cache cleanup and control**
- **1.9 Standalone mode**

## **Chapter 2: Backend**

- **2.1 Loader.php — main loading controller**
- **2.2 LoaderAsset.php — asset manager**
- **2.3 AssetManager.php — asset generation and bundling**
- **2.4 TemplateLoader.php — smart component templates**
- **2.5 LoaderRequest.php — HTTP request adapter**
- **2.6 Constants.php — global paths and constants**
- **2.7 LoaderFile.php — file search and filtering**
- **2.8 Composer and autoloading**

## Conclusion

## SFLoader

**SFLoader** solves a complex task: **intelligently, quickly, and flexibly loading components**, their styles,
dependencies, and templates on both client and server. It brings together:

* Frontend initializer (**`SFLoaderPlugin`**);
* Preloader and client cache;
* Server-side asset bundling;
* Smart component support;
* Composer-compatible architecture.

## Key features

* **Automatic component discovery and loading**, including via DOM and RegExp;
* **Flexible dependency handling**, including multi-level relations;
* **Hybrid mode** with server loading and client caching;
* **Smart components** with templates, cache, and `pageHash`-based bundling;
* **Gzip optimization** and hash-based builds for CDN caching;
* **Temp and cache modes** for asset generation;
* **Fully offline capable** in `standAlone` mode.

## Use cases

* **Enterprise platforms** with dynamic interfaces;
* **Editors/builders** (UI Builder, Course Creator);
* **Modular systems, CRM, e-commerce**;
* **Single Page Apps (SPA)** with gradual initialization.

## Possible improvements

* Extend **`RuleLoader`** for more flexible discovery;
* Add tests and diagnostics for connected assets;
* Support ES6 module imports and **`importmap`**;
* Extend the smart system — tie to roles, state, templates;
* Split the site into commonly reused components;
* Support gzip cache for smart components;
* Optimize smart components with more flexible cache settings.

## Summary

**SFLoader** combines **speed, flexibility, and reliability** in a single architecture. It fits complex projects where
plain Webpack or Laravel Mix cannot keep up with the required dynamics and classic jQuery-style loading is obsolete. The
loader is easy to scale, readable, and already has everything needed for high-load, dynamic interfaces.
