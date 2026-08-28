---
title: "Цвет ползунка прокрутки (scroll-slider-color / scroll-thumb-color)"
description: "Цвет ползунка прокрутки (scroll-slider-color / scroll-thumb-color)"
tags: [scroll-slider-color]
---

# Цвет ползунка прокрутки (scroll-slider-color / scroll-thumb-color)

## Классы и их значения

| Класс               | Значение переменной           |
|:--------------------|:--------------------------------------------------|
| .scroll-transparent / .scroll-thumb-transparent | `--sf-scroll-bg-thumb`: var(`--sf-transparent`);  |
| .scroll-current / .scroll-thumb-current     | `--sf-scroll-bg-thumb`: currentColor;             |
| .scroll-surface / .scroll-thumb-surface     | `--sf-scroll-bg-thumb`: var(`--sf-on-surface`);   |
| .scroll-primary / .scroll-thumb-primary     | `--sf-scroll-bg-thumb`: var(`--sf-on-primary`);   |
| .scroll-secondary / .scroll-thumb-secondary | `--sf-scroll-bg-thumb`: var(`--sf-on-secondary`); |
| .scroll-tertiary / .scroll-thumb-tertiary   | `--sf-scroll-bg-thumb`: var(`--sf-on-tertiary`);  |

## Описание

Эти модификаторы позволяют изменять цвет ползунка прокрутки. По умолчанию цвет ползунка (`--sf-scroll-bg-thumb`)
определяется в ядре фреймворка. Применяя указанные классы, вы переопределяете значение этой переменной, настраивая
цветовую схему скроллбара в соответствии с потребностями дизайна.

## Синтаксис

- scroll-{transparent|current|surface|primary|secondary|tertiary} / scroll-thumb-{transparent|current|surface|primary|secondary|tertiary} – задать цвет ползунка прокрутки.

## Пример использования

:::example {id="utilities/overscroll/scroll-slider-color" label="Результат"}
:::

