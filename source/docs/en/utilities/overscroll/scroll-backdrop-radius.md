---
extends: _core._layouts.documentation
section: content
title: "Радиус границы подложки прокрутки (scroll-backdrop-radius)"
description: "Радиус границы подложки прокрутки (scroll-backdrop-radius)"
---

# Радиус границы подложки прокрутки (scroll-backdrop-radius)


## Классы и их значения

| Класс               | Значение переменной                   |
|:--------------------|:--------------------------------------|
| .scroll-bg-radius-1 | `--sf-scroll-radius`: var(`--sf-a1`); |
| .scroll-bg-radius-2 | `--sf-scroll-radius`: var(`--sf-a2`); |
| .scroll-bg-radius-3 | `--sf-scroll-radius`: var(`--sf-a4`); |
| .scroll-bg-radius-4 | `--sf-scroll-radius`: var(`--sf-a8`); |
{.table}

## Описание

С помощью данных модификаторов можно изменить радиус закругления полосы прокрутки, используя предопределённые размерные
переменные фреймворка. По умолчанию значение радиуса задаётся в ядре фреймворка с помощью переменной
`--sf-scroll-radius`. Применяя модификаторы `scroll-bg-radius-{n}`, вы можете переопределить это значение и изменить
визуальный вид подложки полосы прокрутки.

## Синтаксис

- `scroll-bg-radius-{1|2|3|4}` – задать степень закругления подложки полосы прокрутки.

## Пример использования

```html

<html class="scroll-bg-radius-3 h-d5 overflow-auto ...">
<div class="p-1">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
</div>
</html>
```
