---
extends: _core._layouts.documentation
section: content
title: "Line Height (line-height)"
description: "Fixed and relative line-height utilities"
---

# Line Height (line-height)

Use line-height utilities to set either fixed token-based values or relative multipliers.

## Class Table

Fixed line-height:

| Class | Value |
|:--|:--|
| `.line-1/4` | `line-height: var(--sf-text-height-1/4);` |
| `.line-1/3` | `line-height: var(--sf-text-height-1/3);` |
| `.line-1/2` | `line-height: var(--sf-text-height-1/2);` |
| `.line-1 ... .line-12` | `line-height: var(--sf-text-height-*);` |
{.table}

Relative line-height:

| Class | Value |
|:--|:--|
| `.line-none` | `line-height: 1;` |
| `.line-tight` | `line-height: 1.25;` |
| `.line-snug` | `line-height: 1.375;` |
| `.line-normal` | `line-height: 1.5;` |
| `.line-relaxed` | `line-height: 1.625;` |
| `.line-loose` | `line-height: 2;` |
{.table}

## Syntax

Use `{breakpoint}:{modifier}` or `{modifier}`.

- Breakpoint (optional): `sm`, `md`, `lg`, `xl`.
- Modifier: one of fixed (`line-1/4 ... line-12`) or relative (`line-none ... line-loose`) values.

## Usage Example

```html
<p class="line-1">Base line-height</p>
<p class="line-2">Larger line-height</p>
<p class="line-1/2">Smaller line-height</p>

<p class="line-tight">Tight line-height</p>
<p class="line-normal">Normal line-height</p>
<p class="line-loose">Loose line-height</p>
```

## Notes

- `line-13` from older versions is deprecated; use `line-12`.
- Use responsive prefixes if needed, e.g. `md:line-2`.

## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=typography&group=line-height"></iframe>
</div>
