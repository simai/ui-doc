---
extends: _core._layouts.documentation
section: content
title: "Точка трансформации (transform-origin)"
description: "Классы точки трансформации transform-origin"
---

# Точка трансформации (transform-origin)

`transform-origin` задает точку, относительно которой выполняется `rotate/scale/skew`.

## Классы

| Класс | Значение |
|:--|:--|
| `.origin-center` | `transform-origin: center` |
| `.origin-top` | `transform-origin: top` |
| `.origin-top-inline-end` | `transform-origin: top right` |
| `.origin-inline-end` | `transform-origin: right` |
| `.origin-bottom-inline-end` | `transform-origin: bottom right` |
| `.origin-bottom` | `transform-origin: bottom` |
| `.origin-bottom-inline-start` | `transform-origin: bottom left` |
| `.origin-inline-start` | `transform-origin: left` |
| `.origin-top-inline-start` | `transform-origin: top left` |

{.table}

## Синтаксис

- `origin-{position}`
- `hover:origin-{position}`

Используйте logical-названия `inline-start/inline-end` для корректной LTR/RTL семантики в разметке.
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=transform&group=transform-origin"></iframe>
</div>