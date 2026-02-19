---
extends: _core._layouts.documentation
section: content
title: "Масштабирование (transform-scale)"
description: "Классы масштабирования transform-scale"
---

# Масштабирование (transform-scale)

!rtags[transform-scale]


`transform-scale` изменяет размер элемента по обеим осям или отдельно по `x`/`y`.

## Классы

| Класс | Значение |
|:--|:--|
| `.scale-0` | `transform: scale(0)` |
| `.scale-1/4` | `transform: scale(.8)` |
| `.scale-1/3` | `transform: scale(.9)` |
| `.scale-1/2` | `transform: scale(.95)` |
| `.scale-1` | `transform: scale(1)` |
| `.scale-2` | `transform: scale(1.05)` |
| `.scale-3` | `transform: scale(1.1)` |
| `.scale-4` | `transform: scale(1.2)` |
| `.scale-x-*` | масштаб только по оси X |
| `.scale-y-*` | масштаб только по оси Y |

{.table}

## Синтаксис

- `scale-{value}`
- `scale-x-{value}`
- `scale-y-{value}`
- `hover:scale-{value}`

Где `value`: `0`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`.
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=transform&group=transform-scale"></iframe>
</div>
