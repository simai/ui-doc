---
title: "Видимость элемента при печати (print-visibility)"
description: "Видимость элемента при печати (print-visibility)"
---

# Видимость элемента при печати (print-visibility)


!rtags[visibility sm md lg xl]





Утилиты `print-visible` и `print-hidden` управляют `visibility` только внутри `@media print`.

## Классы и значения

| Класс | Значение в режиме печати |
|:--|:--|
| `.print-visible` | `visibility: visible;` |
| `.print-hidden` | `visibility: hidden;` |
| `.print-visible-none` | alias для `print-hidden` |

## Описание

- На экране эти классы не меняют поведение элемента.
- При печати можно скрывать или показывать элементы, не ломая поток разметки.

## Синтаксис

`print-visible` | `print-hidden` | `print-visible-none`

## Пример

:::example {id="utilities/print/display-visibility" label="Результат"}
:::

