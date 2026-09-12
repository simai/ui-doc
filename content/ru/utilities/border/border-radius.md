---
title: "Скругление границы"
description: "Скругление границы"
tags: [border-radius, sm, md, lg, xl, xxl]
---

# Скругление границы

:badge[border-radius]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

С помощью модификаторов радиуса вы можете задавать скругление для всего элемента,
отдельных сторон и отдельных углов.

## Наглядный пример

:::example {id="utilities/border/border-radius" label="Скругление границы"}
:::

## Размеры радиуса

`0`, `1/3`, `1/2`, `1`, `2`, `3`, `default`, `square`, `rounded`, `round`

Шкала идёт от прямого угла к полностью круглой форме. Наглядное сравнение всех
размеров приведено в интерактивном примере ниже.

Для обычных компонентов сначала используйте их системную геометрию без
дополнительного класса: компактные контролы опираются на `--sf-radius--ui`, а
карточки и другие крупные поверхности — на `--sf-radius-default`. Классы
радиуса нужны, когда конкретный элемент должен явно отличаться от своего
семантического значения по умолчанию.

## Базовые классы

| Класс | Значение |
| --- | --- |
| `radius-{size}` | `border-radius: var(--sf-radius-*)` |
| `radius-top-{size}` | верхние углы |
| `radius-bottom-{size}` | нижние углы |
| `radius-inline-start-{size}` | углы по стороне `inline-start` |
| `radius-inline-end-{size}` | углы по стороне `inline-end` |
| `radius-top-inline-start-{size}` | верхний `inline-start` угол |
| `radius-top-inline-end-{size}` | верхний `inline-end` угол |
| `radius-bottom-inline-start-{size}` | нижний `inline-start` угол |
| `radius-bottom-inline-end-{size}` | нижний `inline-end` угол |

## Синтаксис

- `{модификатор}` — применяет стиль для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — применяет стиль с брейкпоинта (`sm`, `md`, `lg`, `xl`, `xxl`), например: `md:radius-2`.

## Пример
