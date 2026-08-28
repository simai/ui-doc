---
title: "Толщина границы"
description: "Толщина границы"
tags: [border-width, sm, md, lg, xl]
---

# Толщина границы

С помощью модификаторов толщины границы в SIMAI Framework вы можете задавать толщину для всех сторон, по осям или для отдельных сторон.

## Классы и значения

| Класс | Значение |
|:--|:--|
| `.border-{n}` | `border-width: var(--sf-*)` |
| `.border-x-{n}` | `border-inline-start-width` + `border-inline-end-width` |
| `.border-y-{n}` | `border-top-width` + `border-bottom-width` |
| `.border-inline-start-{n}` | `border-inline-start-width` |
| `.border-inline-end-{n}` | `border-inline-end-width` |
| `.border-top-{n}` | `border-top-width` |
| `.border-bottom-{n}` | `border-bottom-width` |


`n`: `0..10`

## Описание

- `border-{n}` задаёт толщину границы со всех сторон.
- `border-x-{n}` и `border-y-{n}` задают толщину по осям.
- `border-inline-start-{n}`, `border-inline-end-{n}`, `border-top-{n}`, `border-bottom-{n}` задают толщину на конкретной стороне.

> В текущей версии используются логические стороны (`inline-start` / `inline-end`) вместо физических (`left` / `right`).

## Синтаксис

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`), например `md:border-4`.

## Примеры

:::example {id="utilities/border/border-width" label="Результат"}
:::

