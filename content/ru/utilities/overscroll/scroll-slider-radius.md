---
title: "Радиус границы ползунка прокрутки (scroll-thumb-radius)"
description: "Радиус границы ползунка прокрутки (scroll-thumb-radius)"
tags: [scroll-slider-radius]
---

# Радиус границы ползунка прокрутки (scroll-thumb-radius)

С помощью данных модификаторов вы можете изменить радиус скругления ползунка прокрутки.

## Классы и их значения

| Класс               | Значение переменной                  |
|:--------------------|:-------------------------------------|
| .scroll-thumb-radius-1 | `--sf-scroll-radius`: var(`--sf-a1`) |
| .scroll-thumb-radius-2 | `--sf-scroll-radius`: var(`--sf-a2`) |
| .scroll-thumb-radius-3 | `--sf-scroll-radius`: var(`--sf-a4`) |
| .scroll-thumb-radius-4 | `--sf-scroll-radius`: var(`--sf-a8`) |


## Описание

Данные модификаторы позволяют задать радиус скругления ползунка прокрутки. По умолчанию радиус ползунка задан в ядре
фреймворка через переменную `--sf-scroll-radius`. Используя данные классы вы можете изменить это значение на одно из
заданных.

## Синтаксис

- scroll-thumb-radius-{1...4} – задать радиус скругления ползунка.
- scroll-radius-{1...4} – устаревший алиас (поддерживается для совместимости).

## Пример использования

:::example {id="utilities/overscroll/scroll-slider-radius" label="Результат"}
:::

