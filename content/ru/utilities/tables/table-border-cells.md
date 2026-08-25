---
title: "Границы вокруг ячеек"
description: "Управление схлопыванием границ и расстоянием между ячейками таблицы"
---

# Границы вокруг ячеек

!rtags[table-border]


Утилиты этой группы управляют поведением границ таблицы.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.border-collapse` | `border-collapse: collapse;` |
| `.border-separate` | `border-collapse: separate;` |
| `.border-spacing-{n}` | `border-spacing: var(--sf-...);` |

## Описание

- `border-collapse` объединяет соседние границы ячеек.
- `border-separate` оставляет границы раздельными.
- `border-spacing-*` задаёт расстояние между ячейками и имеет эффект только в режиме `border-separate`.

## Пример

:::example {id="utilities/tables/table-border-cells" label="Результат"}
:::

