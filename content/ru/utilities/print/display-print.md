---
title: "Отображение элемента при печати"
description: "Отображение элемента при печати (display-print)"
tags: [display-print]
---

# Отображение элемента при печати

:badge[display-print]{type=main scheme=on-surface size=1}

Утилиты `print-*` задают `display` только внутри `@media print`.

## Наглядный пример

:::example {id="utilities/print/display-print" label="Отображение элемента при печати"}
:::

## Классы и значения

| Класс | Значение в режиме печати |
|:---|:---|
| `print-block` | `display: block;` |
| `print-inline-block` | `display: inline-block;` |
| `print-inline` | `display: inline;` |
| `print-flex` | `display: flex;` |
| `print-inline-flex` | `display: inline-flex;` |
| `print-table` | `display: table;` |

## Как это работает

Каждый `print-*` класс в обычном экране выставляет `display: none`, а при печати включает нужный `display`.

## Синтаксис

`print-{block|inline-block|inline|flex|inline-flex|table}`

## Пример

