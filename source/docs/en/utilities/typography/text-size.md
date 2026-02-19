---
extends: _core._layouts.documentation
section: content
title: "Text Size (text-size)"
description: "Text size utilities"
---

# Text Size (text-size)


The supported text scale is now `text-1/4 ... text-12`.
`text-*` utilities update `font-size` and `line-height` together.

## Class Table

| Class | Properties |
|:--|:--|
| `.text-1/4` | `font-size: var(--sf-text-size-1/4); line-height: var(--sf-text-height-1/4);` |
| `.text-1/3` | `font-size: var(--sf-text-size-1/3); line-height: var(--sf-text-height-1/3);` |
| `.text-1/2` | `font-size: var(--sf-text-size-1/2); line-height: var(--sf-text-height-1/2);` |
| `.text-1 ... .text-12` | `font-size: var(--sf-text-size-*); line-height: var(--sf-text-height-*);` |
{.table}

## Note

`text-13` from older versions is deprecated. Use `text-12` as the largest size.

## Usage Example

```html
<p class="text-1/4">Very small text</p>
<p class="text-1">Base text</p>
<p class="text-3">Larger text</p>
<p class="text-12">Largest text</p>
```

## Responsive

```html
<p class="md:text-2">Applies text-2 from md and up</p>
```

## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=typography&group=text-size"></iframe>
</div>
