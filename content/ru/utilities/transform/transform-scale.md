---
title: "Масштабирование"
description: "Уменьшает или увеличивает элемент целиком или по одной оси — для отклика на наведение и эффектов появления."
---

# Масштабирование

Классы `scale-*` уменьшают или увеличивают элемент относительно его центра,
не меняя место в раскладке. Берите их для отклика карточек и кнопок на
наведение, для эффектов появления и для сжатия элемента по одной оси.

## Пример

### Шкала

Пунктир — размер элемента без масштаба. Подпись — класс.

:::example {id="utilities/transform/transform-scale" label="Шкала масштаба"}
:::

### Одна ось

`scale-x-*` и `scale-y-*` меняют только ширину или только высоту.

:::example {id="utilities/transform/transform-scale-axis" label="Масштаб по оси"}
:::

### При наведении

Префикс `hover:` масштабирует элемент, пока над ним указатель. Наведите
указатель на образцы; плавность даёт класс `transition-transform`.

:::example {id="utilities/transform/transform-scale-hover" label="Масштаб при наведении"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `scale-0` | `transform: scale(0)` | — |
| `scale-x-0` | `transform: scaleX(0)` | — |
| `scale-y-0` | `transform: scaleY(0)` | — |
| `scale-1/4` | `transform: scale(0.8)` | — |
| `scale-x-1/4` | `transform: scaleX(0.8)` | — |
| `scale-y-1/4` | `transform: scaleY(0.8)` | — |
| `scale-1/3` | `transform: scale(0.9)` | — |
| `scale-x-1/3` | `transform: scaleX(0.9)` | — |
| `scale-y-1/3` | `transform: scaleY(0.9)` | — |
| `scale-1/2` | `transform: scale(0.95)` | — |
| `scale-x-1/2` | `transform: scaleX(0.95)` | — |
| `scale-y-1/2` | `transform: scaleY(0.95)` | — |
| `scale-1` | `transform: scale(1)` | — |
| `scale-x-1` | `transform: scaleX(1)` | — |
| `scale-y-1` | `transform: scaleY(1)` | — |
| `scale-2` | `transform: scale(1.05)` | — |
| `scale-x-2` | `transform: scaleX(1.05)` | — |
| `scale-y-2` | `transform: scaleY(1.05)` | — |
| `scale-3` | `transform: scale(1.1)` | — |
| `scale-x-3` | `transform: scaleX(1.1)` | — |
| `scale-y-3` | `transform: scaleY(1.1)` | — |
| `scale-4` | `transform: scale(1.2)` | — |
| `scale-x-4` | `transform: scaleX(1.2)` | — |
| `scale-y-4` | `transform: scaleY(1.2)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:scale-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Шкала

Номер ступени — не множитель: ступени меньше 1 уменьшают элемент, больше 1 —
увеличивают.

| Ступень | Масштаб |
| :--- | ---: |
| `0` | 0 |
| `1/4` | 0,8 |
| `1/3` | 0,9 |
| `1/2` | 0,95 |
| `1` | 1 |
| `2` | 1,05 |
| `3` | 1,1 |
| `4` | 1,2 |

Ступени одинаковы для `scale-*`, `scale-x-*` и `scale-y-*`. Для отклика
на наведение хватает `scale-2` или `scale-3`; `scale-1/2` подходит для
эффекта нажатия.

```html
<div class="transition-transform hover:scale-2">Карточка</div>
```

### Скрыть и показать

`scale-0` сжимает элемент в точку, но он остаётся в раскладке и доступен
программам экранного доступа. Чтобы убрать элемент совсем, сочетайте
трансформацию с [видимостью](/ru/utilities/layout/visibility/).

## Ограничения

- Классы поворота, масштаба, наклона и смещения задают одно свойство
  `transform` целиком, поэтому на одном элементе действует только один из
  них: `rotate-45 scale-2` не повернёт и не увеличит элемент одновременно.
  Сочетаются только смещения по `x` и `y` между собой.
- Трансформация не меняет раскладку: соседние элементы остаются на местах, а
  увеличенный или повёрнутый элемент может перекрыть их.
- Увеличение растягивает уже отрисованный элемент: мелкий текст и тонкие
  линии при `scale-4` могут стать размытыми.
- Из префиксов есть только `hover:`; префиксов ширины экрана нет.

## См. также

- [Точка трансформации](/ru/utilities/transform/transform-origin/)
- [Вращение](/ru/utilities/transform/transform-rotate/)
- [Общее свойство перехода](/ru/utilities/animation/animation-transition-property/)
