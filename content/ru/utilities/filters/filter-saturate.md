---
title: "Насыщенность элемента (filter-saturate)"
description: "Насыщенность элемента (filter-saturate)"
---

# Насыщенность элемента (filter-saturate)

!rtags[filter-saturate hover]



Данный модификатор позволяет управлять насыщенностью элемента, делая цвета более или менее интенсивными.

## Классы и их значения

| Класс         | Значение               |
|:--------------|:-----------------------|
| .saturate-0   | filter: saturate(0)    |
| .saturate-1/4 | filter: saturate(0.25) |
| .saturate-1/3 | filter: saturate(0.5)  |
| .saturate-1/2 | filter: saturate(0.75) |
| .saturate-1   | filter: saturate(1)    |
| .saturate-2   | filter: saturate(1.25) |
| .saturate-3   | filter: saturate(1.5)  |
| .saturate-4   | filter: saturate(1.75) |

## Описание

Модификатор `saturate` управляет насыщенностью цвета:

- Значение `0` полностью убирает насыщенность (картинка станет чёрно-белой),
- Значение `1` — нормальная насыщенность,
- Значения больше 1 делают цвета ярче, меньше 1 — бледнее.

Можно использовать `hover:saturate-x` для изменения насыщенности при наведении.

## Синтаксис

- `saturate-0` — нулевая насыщенность.
- `saturate-1/4`, `saturate-1/3`, `saturate-1/2` — пониженная насыщенность.
- `saturate-1` — нормальная насыщенность.
- `saturate-2`, `saturate-3`, `saturate-4` — повышенная насыщенность.
- Можно использовать `hover:saturate-...` для изменения насыщенности при наведении.

## Пример использования

:::example {id="utilities/filters/filter-saturate" label="Результат"}
:::

