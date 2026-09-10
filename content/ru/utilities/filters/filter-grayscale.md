---
title: "Монохромность элемента"
description: "Монохромность элемента (filter-grayscale)"
tags: [filter-grayscale, hover]
---

# Монохромность элемента

:badge[filter-grayscale]{type=main scheme=on-surface size=1}

Данный модификатор позволяет управлять оттенком серого для элемента.
Убираем адаптивность (`sm`, `md`, `lg`, `xl`), оставляем поддержку `hover`.

## Наглядный пример

:::example {id="utilities/filters/filter-grayscale" label="Монохромность элемента"}
:::

## Классы и их значения

| Класс           | Значение              |
|:----------------|:----------------------|
| `grayscale-none` | `filter: grayscale(0);` |
| `grayscale` | `filter: grayscale(1);` |

## Описание

Модификаторы `grayscale-none` и `grayscale` управляют тем, насколько элемент будет отображаться в оттенках серого:

- `grayscale-none` — элемент без преобразования, в исходных цветах.
- `grayscale` — элемент отображается полностью в оттенках серого.

Можно использовать `hover:grayscale` или `hover:grayscale-none` для изменения оттенка серого при наведении курсора.

## Синтаксис

- `grayscale-none` — убирает монохромность.
- `grayscale` — добавляет монохромность элементу.
- `hover:grayscale` или `hover:grayscale-none` — изменение при наведении.

## Пример использования
