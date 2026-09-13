---
title: "Границы и интервалы таблицы"
description: "Объединяет границы ячеек или добавляет пространство между ними."
tags: [border-collapse, border-spacing]
---

# Границы и интервалы таблицы

:badge[border-collapse]{type=main scheme=on-surface size=1} :badge[border-spacing]{type=main scheme=on-surface size=1}

Эти утилиты определяют, соприкасаются ли границы соседних ячеек и какое
расстояние остаётся между ними. Они работают только с таблицами.

## Пример

Слева границы объединены, справа ячейки разделены интервалом.

:::example {id="utilities/tables/table-border-spacing" label="Сравнение границ таблицы"}
:::

## Когда применять

- `border-collapse` подходит для обычной таблицы с единой сеткой;
- `border-separate` позволяет раздвинуть ячейки;
- `border-spacing-*` задаёт общий интервал;
- `border-spacing-x-*` и `border-spacing-y-*` управляют осями отдельно.

```html
<table class="border-separate border-spacing-2">
  ...
</table>
```

Значение после `border-spacing-` берётся из общей шкалы интервалов: например,
`border-spacing-1`, `border-spacing-2` или `border-spacing-4`.

