---
extends: _core._layouts.documentation
section: content
title: Border Radius
description: Border radius
---

# Border Radius

Radius modifiers let you round the whole element, specific sides, or specific logical corners.

## Radius Sizes

`0`, `1/3`, `1/2`, `1`, `2`, `3`, `default`, `square`, `rounded`, `round`

## Base Classes

| Class | Value |
|:--|:--|
| `.radius-{size}` | `border-radius: var(--sf-radius-*)` |
| `.radius-top-{size}` | top corners |
| `.radius-bottom-{size}` | bottom corners |
| `.radius-inline-start-{size}` | inline-start corners |
| `.radius-inline-end-{size}` | inline-end corners |
| `.radius-top-inline-start-{size}` | top inline-start corner |
| `.radius-top-inline-end-{size}` | top inline-end corner |
| `.radius-bottom-inline-start-{size}` | bottom inline-start corner |
| `.radius-bottom-inline-end-{size}` | bottom inline-end corner |
{.table}

## Syntax

- `{modifier}` for all breakpoints.
- `{breakpoint}:{modifier}` for responsive behavior (`sm`, `md`, `lg`, `xl`).

## Usage Example

```html
<div class="radius-1/3">radius-1/3</div>
<div class="radius-rounded">radius-rounded</div>

<div class="radius-top-2">radius-top-2</div>
<div class="radius-inline-start-1">radius-inline-start-1</div>

<div class="radius-top-inline-start-3">radius-top-inline-start-3</div>
<div class="radius-bottom-inline-end-rounded">radius-bottom-inline-end-rounded</div>
```

## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=border&group=border-radius"></iframe>
</div>
