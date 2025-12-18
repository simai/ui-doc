---
extends: _core._layouts.documentation
section: content
title: "Радиус границы ползунка прокрутки (scroll-slider-radius)"
description: "Радиус границы ползунка прокрутки (scroll-slider-radius)"
---

# Радиус границы ползунка прокрутки (scroll-slider-radius)

С помощью данных модификаторов вы можете изменить радиус скругления ползунка прокрутки.

## Классы и их значения

| Класс               | Значение переменной                  |
|:--------------------|:-------------------------------------|
| .scroll-bg-radius-1 | `--sf-scroll-radius`: var(`--sf-a1`) |
| .scroll-bg-radius-2 | `--sf-scroll-radius`: var(`--sf-a2`) |
| .scroll-bg-radius-3 | `--sf-scroll-radius`: var(`--sf-a4`) |
| .scroll-bg-radius-4 | `--sf-scroll-radius`: var(`--sf-a8`) |

{.table}

## Описание

Данные модификаторы позволяют задать радиус скругления ползунка прокрутки. По умолчанию радиус ползунка задан в ядре
фреймворка через переменную `--sf-scroll-radius`. Используя данные классы вы можете изменить это значение на одно из
заданных.

## Синтаксис

- scroll-bg-radius-{1...4} – задать радиус скругления ползунка.

## Пример использования

```html

<html class="scroll-bg-radius-3 h-d5 overflow-auto ...">
<div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
</div>
</html>
```
