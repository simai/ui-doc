---
title: "Цвет границы"
description: "Цвет границы"
---

# Цвет границы

!rtags[border-color hover focus active]


Утилиты цвета границы позволяют быстро назначать цвет рамки через токены SIMAI.

## Ролевые классы

| Класс | Значение |
|:--|:--|
| `.border-transparent` | `border-color: var(--sf-transparent)` |
| `.border-current` | `border-color: currentColor` |
| `.border-outline` | `border-color: var(--sf-outline)` |
| `.border-outline-variant` | `border-color: var(--sf-outline-variant)` |
| `.border-primary` | `border-color: var(--sf-outline-primary)` |
| `.border-secondary` | `border-color: var(--sf-outline-secondary)` |
| `.border-tertiary` | `border-color: var(--sf-outline-tertiary)` |
| `.border-error` | `border-color: var(--sf-outline-error)` |
| `.border-warning` | `border-color: var(--sf-outline-warning)` |
| `.border-success` | `border-color: var(--sf-outline-success)` |


Также поддерживаются palette-классы вида `.border-red-5`, `.border-blue-700`, и т.д.

## Синтаксис

- `{модификатор}` — обычное применение.
- `hover:{модификатор}` — цвет на `:hover`.
- `active:{модификатор}` — цвет на `:active`.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`).

## Примеры

:::example {id="utilities/border/border-color" label="Результат"}
:::

