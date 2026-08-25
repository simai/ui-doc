---
title: "Яркость элемента (filter-brightness)"
description: "Яркость элемента (filter-brightness)"
---

# Яркость элемента (filter-brightness)

!rtags[filter-brightness hover]



Данные модификаторы позволяют управлять яркостью элемента.

## Классы

| Старый класс                 | Новый класс    |
|:-----------------------------|:---------------|
| .brightness-1, .brightness-2 | brightness-1/4 |
| .brightness-3                | brightness-1/3 |
| .brightness-4                | brightness-1/2 |
| .brightness-5                | brightness-1   |
| .brightness-6                | brightness-2   |
| .brightness-7                | brightness-3   |
| .brightness-8, .brightness-9 | brightness-4   |

## Новые классы и их значения

| Класс           | Значение                  |
|:----------------|:--------------------------|
| .brightness-0   | filter: brightness(0);    |
| .brightness-1/4 | filter: brightness(0.8);  |
| .brightness-1/3 | filter: brightness(0.9);  |
| .brightness-1/2 | filter: brightness(0.95); |
| .brightness-1   | filter: brightness(1);    |
| .brightness-2   | filter: brightness(1.05); |
| .brightness-3   | filter: brightness(1.1);  |
| .brightness-4   | filter: brightness(1.2);  |

## Описание

Модификаторы `brightness-*` устанавливают яркость элемента.

- `brightness-1` соответствует нормальной яркости (1).
- Значения меньше `1` уменьшают яркость, а больше `1` — увеличивают.

Также можно использовать `hover:brightness-*` для изменения яркости при наведении курсора.

## Синтаксис

- `brightness-0`, `brightness-1/4`, `brightness-1/3`, `brightness-1/2`, `brightness-1`, `brightness-2`, `brightness-3`,
  `brightness-4` задают степень яркости.
- `hover:brightness-*` позволяет изменять яркость при наведении.

## Пример использования

:::example {id="utilities/filters/filter-brightness" label="Результат"}
:::

