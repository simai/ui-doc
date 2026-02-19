---
extends: _core._layouts.documentation
section: content
title: "Цвет ползунка прокрутки (scroll-slider-color / scroll-thumb-color)"
description: "Цвет ползунка прокрутки (scroll-slider-color / scroll-thumb-color)"
---

# Цвет ползунка прокрутки (scroll-slider-color / scroll-thumb-color)

!rtags[scroll-slider-color]



## Классы и их значения

| Класс               | Значение переменной           |
|:--------------------|:--------------------------------------------------|
| .scroll-transparent / .scroll-thumb-transparent | `--sf-scroll-bg-thumb`: var(`--sf-transparent`);  |
| .scroll-current / .scroll-thumb-current     | `--sf-scroll-bg-thumb`: currentColor;             |
| .scroll-surface / .scroll-thumb-surface     | `--sf-scroll-bg-thumb`: var(`--sf-on-surface`);   |
| .scroll-primary / .scroll-thumb-primary     | `--sf-scroll-bg-thumb`: var(`--sf-on-primary`);   |
| .scroll-secondary / .scroll-thumb-secondary | `--sf-scroll-bg-thumb`: var(`--sf-on-secondary`); |
| .scroll-tertiary / .scroll-thumb-tertiary   | `--sf-scroll-bg-thumb`: var(`--sf-on-tertiary`);  |
{.table}

## Описание

Эти модификаторы позволяют изменять цвет ползунка прокрутки. По умолчанию цвет ползунка (`--sf-scroll-bg-thumb`)
определяется в ядре фреймворка. Применяя указанные классы, вы переопределяете значение этой переменной, настраивая
цветовую схему скроллбара в соответствии с потребностями дизайна.

## Синтаксис

- scroll-{transparent|current|surface|primary|secondary|tertiary} / scroll-thumb-{transparent|current|surface|primary|secondary|tertiary} – задать цвет ползунка прокрутки.

## Пример использования

```html

<html class="scroll-thumb-primary h-d5 overflow-auto ...">
<div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
</div>
</html>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scroll-slider-color"></iframe>
</div>
