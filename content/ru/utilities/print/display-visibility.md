---
title: "Видимость элемента при печати"
description: "Видимость элемента при печати (print-visibility)"
tags: [visibility, sm, md, lg, xl]
---

# Видимость элемента при печати

:badge[visibility]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1}

Утилиты `print-visible` и `print-hidden` управляют `visibility` только внутри `@media print`.

## Наглядный пример

:::example {id="utilities/print/display-visibility" label="Видимость элемента при печати"}
:::

## Классы и значения

| Класс | Значение в режиме печати |
|:--|:--|
| `print-visible` | `visibility: visible;` |
| `print-hidden` | `visibility: hidden;` |
| `print-visible-none` | alias для `print-hidden` |

## Описание

- На экране эти классы не меняют поведение элемента.
- При печати можно скрывать или показывать элементы, не ломая поток разметки.

## Синтаксис

`print-visible` | `print-hidden` | `print-visible-none`

## Пример
