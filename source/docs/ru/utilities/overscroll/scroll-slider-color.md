---
extends: _core._layouts.documentation
section: content
title: "Цвет ползунка прокрутки (scroll-slider-color)"
description: "Цвет ползунка прокрутки (scroll-slider-color)"
---

# Цвет ползунка прокрутки (scroll-slider-color)

[https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-slider-color.php](https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-slider-color.php)

## Классы и их значения

| Класс               | Значение переменной           |
|:--------------------|:--------------------------------------------------|
| .scroll-transparent | `--sf-scroll-bg-thumb`: var(`--sf-transparent`);  |
| .scroll-current     | `--sf-scroll-bg-thumb`: currentColor;             |
| .scroll-surface     | `--sf-scroll-bg-thumb`: var(`--sf-on-surface`);   |
| .scroll-primary     | `--sf-scroll-bg-thumb`: var(`--sf-on-primary`);   |
| .scroll-secondary   | `--sf-scroll-bg-thumb`: var(`--sf-on-secondary`); |
| .scroll-tertiary    | `--sf-scroll-bg-thumb`: var(`--sf-on-tertiary`);  |
{.table}

## Описание

Эти модификаторы позволяют изменять цвет ползунка прокрутки. По умолчанию цвет ползунка (`--sf-scroll-bg-thumb`)
определяется в ядре фреймворка. Применяя указанные классы, вы переопределяете значение этой переменной, настраивая
цветовую схему скроллбара в соответствии с потребностями дизайна.

## Синтаксис

- scroll-{transparent|current|surface|primary|secondary|tertiary} – задать цвет ползунка прокрутки.

## Пример использования

```html

<html class="scroll-primary h-d5 overflow-auto ...">
<div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
</div>
</html>
```
