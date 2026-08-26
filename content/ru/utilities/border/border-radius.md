---
title: "Скругление границы"
description: "Скругление границы"
---

# Скругление границы

!rtags[border-radius sm md lg xl]


С помощью модификаторов радиуса вы можете задавать скругление для всего элемента,
отдельных сторон и отдельных углов.

## Размеры радиуса

`0`, `1/3`, `1/2`, `1`, `2`, `3`, `default`, `square`, `rounded`, `round`

Шкала идёт от прямого угла к полностью круглой форме. Наглядное сравнение всех
размеров приведено в интерактивном примере ниже.

## Базовые классы

| Класс | Значение |
|:--|:--|
| `.radius-{size}` | `border-radius: var(--sf-radius-*)` |
| `.radius-top-{size}` | верхние углы |
| `.radius-bottom-{size}` | нижние углы |
| `.radius-inline-start-{size}` | углы по стороне `inline-start` |
| `.radius-inline-end-{size}` | углы по стороне `inline-end` |
| `.radius-top-inline-start-{size}` | верхний `inline-start` угол |
| `.radius-top-inline-end-{size}` | верхний `inline-end` угол |
| `.radius-bottom-inline-start-{size}` | нижний `inline-start` угол |
| `.radius-bottom-inline-end-{size}` | нижний `inline-end` угол |

## Синтаксис

- `{модификатор}` — применяет стиль для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — применяет стиль с брейкпоинта (`sm`, `md`, `lg`, `xl`), например: `md:radius-2`.

## Пример

:::example {id="utilities/border/border-radius" label="Результат"}
:::
