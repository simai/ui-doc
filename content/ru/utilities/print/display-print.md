---
title: "Отображение элемента при печати (display-print)"
description: "Отображение элемента при печати (display-print)"
tags: [display-print]
---

# Отображение элемента при печати (display-print)

Утилиты `print-*` задают `display` только внутри `@media print`.

## Классы и значения

| Класс | Значение в режиме печати |
|:--|:--|
| `.print-block` | `display: block;` |
| `.print-inline-block` | `display: inline-block;` |
| `.print-inline` | `display: inline;` |
| `.print-flex` | `display: flex;` |
| `.print-inline-flex` | `display: inline-flex;` |
| `.print-table` | `display: table;` |

## Как это работает

Каждый `print-*` класс в обычном экране выставляет `display: none`, а при печати включает нужный `display`.

## Синтаксис

`print-{block|inline-block|inline|flex|inline-flex|table}`

## Пример

:::example {id="utilities/print/display-print" label="Результат"}
:::

