---
title: "Стиль границы"
description: "Стиль границы"
tags: [border-style]
---

# Стиль границы

С помощью модификаторов стиля границы в SIMAI Framework вы можете задавать стиль для всех сторон, по осям или для отдельных сторон.

## Поддерживаемые стили

- `dotted`
- `dashed`
- `solid`
- `double`
- `hidden`
- `inset`
- `none`

## Классы

| Класс | Значение |
|:--|:--|
| `.border-{style}` | `border-style: {style}` |
| `.border-x-{style}` | `border-inline-start-style` + `border-inline-end-style` |
| `.border-y-{style}` | `border-top-style` + `border-bottom-style` |
| `.border-inline-start-{style}` | `border-inline-start-style` |
| `.border-inline-end-{style}` | `border-inline-end-style` |
| `.border-top-{style}` | `border-top-style` |
| `.border-bottom-{style}` | `border-bottom-style` |


## Синтаксис

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`), например `lg:border-dashed`.

> В текущей версии используются логические стороны (`inline-start` / `inline-end`) вместо `left` / `right`.

## Примеры

:::example {id="utilities/border/border-style" label="Результат"}
:::

