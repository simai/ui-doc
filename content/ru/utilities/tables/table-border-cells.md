---
title: "Границы вокруг ячеек"
description: "Управление схлопыванием границ и расстоянием между ячейками таблицы"
tags: [table-border]
---

# Границы вокруг ячеек

:badge[table-border]{type=main scheme=on-surface size=1}

Утилиты этой группы управляют поведением границ таблицы.

## Наглядный пример

:::example {id="utilities/tables/table-border-cells" label="Границы вокруг ячеек"}
:::

## Таблица классов

| Класс | Значение |
|:--|:--|
| `border-collapse` | `border-collapse: collapse;` |
| `border-separate` | `border-collapse: separate;` |
| `border-spacing-{n}` | `border-spacing: var(--sf-...);` |

## Описание

- `border-collapse` объединяет соседние границы ячеек.
- `border-separate` оставляет границы раздельными.
- `border-spacing-*` задаёт расстояние между ячейками и имеет эффект только в режиме `border-separate`.

## Пример
