---
extends: _core._layouts.documentation
section: content
title: "Title Size (title-size)"
description: "Heading/title size utilities"
---

# Title Size (title-size)


The updated title scale uses different token groups for `font-size` and `line-height`:
- `font-size` comes from text-size tokens.
- `line-height` comes from title-height tokens.

## Class Table

| Class | Properties |
|:--|:--|
| `.title-1` | `font-size: var(--sf-text-size-1); line-height: var(--sf-title-height-1);` |
| `.title-2` | `font-size: var(--sf-text-size-2); line-height: var(--sf-title-height-2);` |
| `.title-3` | `font-size: var(--sf-text-size-3); line-height: var(--sf-title-height-3);` |
| `.title-4` | `font-size: var(--sf-text-size-4); line-height: var(--sf-title-height-4);` |
| `.title-5` | `font-size: var(--sf-text-size-5); line-height: var(--sf-title-height-5);` |
| `.title-6` | `font-size: var(--sf-text-size-6); line-height: var(--sf-title-height-6);` |
| `.title-7` | `font-size: var(--sf-text-size-7); line-height: var(--sf-title-height-7);` |
| `.title-8` | `font-size: var(--sf-text-size-8); line-height: var(--sf-title-height-8);` |
| `.title-9` | `font-size: var(--sf-text-size-9); line-height: var(--sf-title-height-9);` |
| `.title-10` | `font-size: var(--sf-text-size-10); line-height: var(--sf-title-height-10);` |
| `.title-11` | `font-size: var(--sf-text-size-11); line-height: var(--sf-title-height-11);` |
| `.title-12` | `font-size: var(--sf-text-size-12); line-height: var(--sf-title-height-12);` |
{.table}

## Usage Example

```html
<p class="title-1">Base title size</p>
<p class="title-2">Slightly larger title</p>
<p class="title-12">Largest title size</p>
```

## Responsive

Use breakpoint prefixes:

```html
<p class="md:title-2">Applies title-2 from md and up</p>
```

## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=typography&group=title-size"></iframe>
</div>
