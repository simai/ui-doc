---
title: "Толщина границы"
description: "Толщина границы"
tags: [border-width, sm, md, lg, xl, xxl]
---

# Толщина границы

:badge[border-width]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

## Наглядный пример

:::example {id="utilities/border/border-width" label="Толщина границы"}
:::

С помощью модификаторов толщины границы в SIMAI Framework вы можете задавать толщину для всех сторон, по осям или для отдельных сторон.

## Классы и значения

| Класс | Значение |
|:---|:---|
| `border-{n}` | `border-width` со всех сторон |
| `border-x-{n}` | `border-inline-start-width` + `border-inline-end-width` |
| `border-y-{n}` | `border-top-width` + `border-bottom-width` |
| `border-inline-start-{n}` | `border-inline-start-width` |
| `border-inline-end-{n}` | `border-inline-end-width` |
| `border-top-{n}` | `border-top-width` |
| `border-bottom-{n}` | `border-bottom-width` |

`n`: `0..10`. Значение толщины берётся из фиксированной шкалы размеров:

| `n` | Значение | При корневом шрифте 16px |
|:---|:---|:---|
| `0` | `var(--sf-0)` — `0` | 0 |
| `1` … `9` | `var(--sf-a1)` … `var(--sf-a9)` — от `0.0625rem` до `0.5625rem` с шагом `0.0625rem` | от 1px до 9px |
| `10` | `var(--sf-b0)` — `0.625rem` | 10px |

Стиль линии задавать не нужно: Core ставит всем элементам `border-style: solid`
и `border-width: 0`, поэтому класс толщины сразу рисует сплошную границу.

## Описание

- `border-{n}` задаёт толщину границы со всех сторон.
- `border-x-{n}` и `border-y-{n}` задают толщину по осям.
- `border-inline-start-{n}`, `border-inline-end-{n}`, `border-top-{n}`, `border-bottom-{n}` задают толщину на конкретной стороне.

> В текущей версии используются логические стороны (`inline-start` / `inline-end`) вместо физических (`left` / `right`).

## Синтаксис

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`, `xxl`), например `md:border-4`.

## Примеры

