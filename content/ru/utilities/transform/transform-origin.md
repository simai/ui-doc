---
title: "Точка трансформации"
description: "Задаёт точку, вокруг которой элемент поворачивается, масштабируется и наклоняется: центр, сторону или угол."
---

# Точка трансформации

Классы `origin-*` задают `transform-origin` — точку, которая остаётся на месте
при повороте, масштабе и наклоне. По умолчанию это центр элемента. Берите
классы, когда элемент должен поворачиваться вокруг угла или раскрываться от
своего края, как выпадающее меню от кнопки.

## Пример

### Поворот

Все образцы повёрнуты на 15° (`rotate-15`); пунктир — место без поворота.
Подпись — класс точки: угол или сторона, которые остаются на месте.

:::example {id="utilities/transform/transform-origin" label="Точка поворота"}
:::

### Масштаб

Образцы уменьшены (`scale-1/4`) к разным точкам.

:::example {id="utilities/transform/transform-origin-scale" label="Точка масштабирования"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `origin-center` | `transform-origin: center` | — |
| `origin-top` | `transform-origin: top` | — |
| `origin-top-inline-end` | `transform-origin: top right` | — |
| `origin-inline-end` | `transform-origin: right` | — |
| `origin-bottom-inline-end` | `transform-origin: bottom right` | — |
| `origin-bottom` | `transform-origin: bottom` | — |
| `origin-bottom-inline-start` | `transform-origin: bottom left` | — |
| `origin-inline-start` | `transform-origin: left` | — |
| `origin-top-inline-start` | `transform-origin: top left` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Выбор точки

| Класс | Точка |
| :--- | :--- |
| `origin-center` | центр — значение по умолчанию |
| `origin-top`, `origin-bottom` | середина верхней или нижней стороны |
| `origin-inline-start`, `origin-inline-end` | середина левой или правой стороны |
| `origin-top-inline-start`, `origin-top-inline-end` | верхний левый или правый угол |
| `origin-bottom-inline-start`, `origin-bottom-inline-end` | нижний левый или правый угол |

### Меню, которое раскрывается от кнопки

Меню под кнопкой масштабируют от верхней стороны, чтобы оно росло вниз от
кнопки, а не из своего центра:

```html
<div class="origin-top transition-transform scale-1/2">…</div>
```

## Ограничения

- Классы `inline-start` и `inline-end` задают физические стороны: `left` и
  `right`. При письме справа налево они не меняются местами.
- Точка сама по себе ничего не двигает — она нужна вместе с классами
  поворота, масштаба или наклона.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Вращение](/ru/utilities/transform/transform-rotate/)
- [Масштабирование](/ru/utilities/transform/transform-scale/)
- [Наклон](/ru/utilities/transform/transform-skew/)
