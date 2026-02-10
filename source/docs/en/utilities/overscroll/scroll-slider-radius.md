---
extends: _core._layouts.documentation
section: content
title: "Scroll thumb radius (scroll-thumb-radius)"
description: "Scroll thumb radius (scroll-thumb-radius)"
---

# Scroll thumb radius (scroll-thumb-radius)

С помощью данных модификаторов вы можете изменить радиус скругления ползунка прокрутки.

## Классы и их значения

| Класс               | Значение переменной                  |
|:--------------------|:-------------------------------------|
| .scroll-thumb-radius-1 | `--sf-scroll-radius`: var(`--sf-a1`) |
| .scroll-thumb-radius-2 | `--sf-scroll-radius`: var(`--sf-a2`) |
| .scroll-thumb-radius-3 | `--sf-scroll-radius`: var(`--sf-a4`) |
| .scroll-thumb-radius-4 | `--sf-scroll-radius`: var(`--sf-a8`) |

{.table}

## Описание

Данные модификаторы позволяют задать радиус скругления ползунка прокрутки. По умолчанию радиус ползунка задан в ядре
фреймворка через переменную `--sf-scroll-radius`. Используя данные классы вы можете изменить это значение на одно из
заданных.

## Синтаксис

- scroll-thumb-radius-{1...4} - set scroll thumb radius.
- scroll-radius-{1...4} - legacy alias kept for backward compatibility.

## Пример использования

```html

<html class="scroll-thumb-radius-3 h-d5 overflow-auto ...">
<div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
</div>
</html>
```
