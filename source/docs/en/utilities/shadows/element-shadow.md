---
extends: _core._layouts.documentation
section: content
title: Element Shadow (box-shadow)
description: Element depth and hover shadow states
---

# Element Shadow (box-shadow)


`shadow-*` utilities set depth by changing `--sf-shadow--level-ratio`.

## Class Table

| Class | Value |
|:--|:--|
| `.shadow-0` | no shadow |
| `.shadow-1` | `--sf-shadow--level-ratio: 1` |
| `.shadow-2` | `--sf-shadow--level-ratio: 2` |
| `.shadow-3` | `--sf-shadow--level-ratio: 4` |
| `.shadow-4` | `--sf-shadow--level-ratio: 8` |
| `.shadow-5` | `--sf-shadow--level-ratio: 16` |
| `.hover:shadow-0 ... .hover:shadow-5` | set depth in `:hover` |
{.table}

## Syntax

- `shadow-{0...5}`
- `hover:shadow-{0...5}`

## Usage Example

```html
<div class="shadow-1 hover:shadow-3 p-2 radius-2 border border-outline-variant">
  Hover to increase depth
</div>
```

## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=shadows&group=element-shadow"></iframe>
</div>
