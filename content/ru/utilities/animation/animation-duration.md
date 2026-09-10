---
title: "Продолжительность анимации"
description: "Классы animation-duration-fast, animation-duration-normal и animation-duration-slow"
---

# Продолжительность анимации

:badge[animation-duration]{type=main scheme=on-surface size=1}

Утилиты задают длительность CSS-анимации через токены времени SIMAI Framework.

## Наглядный пример

Одинаковое движение повторяется с тремя значениями продолжительности. Различается
только токен времени, поэтому скорость легко сравнить одновременно.

:::example {id="utilities/animation/animation-duration" label="Продолжительность анимации"}
:::

## Классы и значения

| Класс                      | Значение |
|:---------------------------|:---------|
| `animation-duration-fast` | `animation-duration: var(--sf-duration-fast);` |
| `animation-duration-normal` | `animation-duration: var(--sf-duration-normal);` |
| `animation-duration-slow` | `animation-duration: var(--sf-duration-slow);` |

## Синтаксис

```html
<div class="animation animation-duration-fast">...</div>
<div class="animation animation-duration-normal">...</div>
<div class="animation animation-duration-slow">...</div>
```
