---
extends: _core._layouts.documentation
section: content
title: Цвет обводки
description: Цвет обводки
---

# Цвет обводки

!rtags[stroke-color hover]





Классы `stroke*` задают `stroke` у SVG.

| Класс | Значение |
|:--|:--|
| `.stroke` | `stroke: var(--sf-outline-variant);` |
| `.stroke-outline` | `stroke: var(--sf-outline);` |
| `.stroke-primary` | `stroke: var(--sf-outline-primary);` |
| `.stroke-secondary` | `stroke: var(--sf-outline-secondary);` |
| `.stroke-tertiary` | `stroke: var(--sf-outline-tertiary);` |
| `.stroke-error` | `stroke: var(--sf-outline-error);` |
| `.stroke-warning` | `stroke: var(--sf-outline-warning);` |
| `.stroke-success` | `stroke: var(--sf-outline-success);` |
| `.stroke-transparent` | `stroke: var(--sf-transparent);` |
| `.stroke-current` | `stroke: currentColor;` |
{.table}

## Пример

```html
<svg class="stroke-primary fill-transparent"></svg>
<svg class="stroke-warning fill-transparent"></svg>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=svg&group=svg-stroke-color"></iframe>
</div>
