---
extends: _core._layouts.documentation
section: content
title: Углы обводки (Line Join)
description: Углы обводки (Line Join)
---

# Углы обводки (Line Join)

!rtags[svg-stroke-line-join]


Классы задают `stroke-linejoin`.

| Класс | Значение |
|:--|:--|
| `.linejoin-miter` | `stroke-linejoin: miter;` |
| `.linejoin-arcs` | `stroke-linejoin: arcs;` |
| `.linejoin-bevel` | `stroke-linejoin: bevel;` |
| `.linejoin-miter-clip` | `stroke-linejoin: miter-clip;` |
| `.linejoin-round` | `stroke-linejoin: round;` |
{.table}

## Пример

```html
<svg class="stroke-primary stroke-4 linejoin-miter fill-transparent"></svg>
<svg class="stroke-primary stroke-4 linejoin-bevel fill-transparent"></svg>
<svg class="stroke-primary stroke-4 linejoin-round fill-transparent"></svg>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=svg&group=svg-stroke-line-join"></iframe>
</div>
