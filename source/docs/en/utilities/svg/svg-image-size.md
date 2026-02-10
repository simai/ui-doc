---
extends: _core._layouts.documentation
section: content
title: "SVG Image Size"
description: "Set SVG width and height with utility classes"
---

# SVG Image Size

`svg-*` utilities set SVG `width` and `height` using the text-size token scale.

## Class Table

| Class | Value |
|:--|:--|
| `.svg-1/4` | `width: var(--sf-text-size-1/4); height: var(--sf-text-size-1/4); line-height: var(--sf-text-height-1/4);` |
| `.svg-1/3` | `width: var(--sf-text-size-1/3); height: var(--sf-text-size-1/3); line-height: var(--sf-text-height-1/3);` |
| `.svg-1/2` | `width: var(--sf-text-size-1/2); height: var(--sf-text-size-1/2); line-height: var(--sf-text-height-1/2);` |
| `.svg-1 ... .svg-12` | `width/height: var(--sf-text-size-*); line-height: var(--sf-text-height-*);` |
{.table}

## Description

Use these classes to keep icon sizes aligned with the same scale as text tokens.

## Syntax

`svg-{1/4|1/3|1/2|1..12}`

## Usage Example

```html
<svg class="svg-1/4"></svg>
<svg class="svg-1"></svg>
<svg class="svg-4"></svg>
<svg class="svg-12"></svg>
```

## Responsive

Use breakpoint prefixes: `sm:`, `md:`, `lg:`, `xl:`.

```html
<svg class="md:svg-7"></svg>
```

## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=svg&group=svg-image-size"></iframe>
</div>
