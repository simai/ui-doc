---
title: "Вращение оттенка фона элемента"
description: "Сдвигает по цветовому кругу цвета того, что видно за элементом."
---

# Вращение оттенка фона элемента

Классы `backdrop-hue-rotate-*` поворачивают оттенок всех цветов за элементом на
угол в градусах. Берите их для цветной «линзы» поверх изображения.

## Пример

### Углы

В каждом образце рамка в центре — элемент с классом; изображение под ним меняется только внутри рамки. Классы с минусом поворачивают оттенок в другую сторону.

:::example {id="utilities/backdrop-filter/backdrop-hue-rotate" label="Углы поворота фона"}
:::

### При наведении

Наведите указатель на изображение: оттенки за рамкой сдвигаются на 180°.

:::example {id="utilities/backdrop-filter/backdrop-hue-rotate-hover" label="hover:backdrop-hue-rotate-180"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `backdrop-hue-rotate-0` | `--sf-backdrop-hue-rotate: hue-rotate(0deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-hue-rotate-15` | `--sf-backdrop-hue-rotate: hue-rotate(15deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-hue-rotate-30` | `--sf-backdrop-hue-rotate: hue-rotate(30deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-hue-rotate-60` | `--sf-backdrop-hue-rotate: hue-rotate(60deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-hue-rotate-90` | `--sf-backdrop-hue-rotate: hue-rotate(90deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-hue-rotate-180` | `--sf-backdrop-hue-rotate: hue-rotate(180deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `-backdrop-hue-rotate-15` | `--sf-backdrop-hue-rotate: hue-rotate(-15deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `-backdrop-hue-rotate-30` | `--sf-backdrop-hue-rotate: hue-rotate(-30deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `-backdrop-hue-rotate-60` | `--sf-backdrop-hue-rotate: hue-rotate(-60deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `-backdrop-hue-rotate-90` | `--sf-backdrop-hue-rotate: hue-rotate(-90deg); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:backdrop-hue-rotate-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-backdrop-blur` | задаётся темой |
| `--sf-backdrop-brightness` | задаётся темой |
| `--sf-backdrop-contrast` | задаётся темой |
| `--sf-backdrop-grayscale` | задаётся темой |
| `--sf-backdrop-invert` | задаётся темой |
| `--sf-backdrop-opacity` | задаётся темой |
| `--sf-backdrop-saturate` | задаётся темой |
| `--sf-backdrop-sepia` | задаётся темой |

## Применение

### Углы

Угол в градусах записан в имени класса: `backdrop-hue-rotate-0`,
`backdrop-hue-rotate-15`, `backdrop-hue-rotate-30`, `backdrop-hue-rotate-60`,
`backdrop-hue-rotate-90`, `backdrop-hue-rotate-180`. Отрицательный угол
пишется с минусом в начале: `-backdrop-hue-rotate-15`, `-backdrop-hue-rotate-30`,
`-backdrop-hue-rotate-60`, `-backdrop-hue-rotate-90`.

Поворот меняет оттенок, но не яркость и насыщенность: серые участки фона
остаются прежними.

### Сочетание с другими фильтрами фона

Классы разных семейств фильтра фона складываются на одном элементе; класс с
`hover:` тоже добавляется к остальным, а не заменяет их.

```html
<div class="bg-surface-transparent-overlay backdrop-blur-large backdrop-hue-rotate-90">…</div>
```

## Ограничения

- Эффект виден только сквозь прозрачный или полупрозрачный фон элемента:
  непрозрачный фон закрывает то, что лежит за ним.
- Классы фильтра фона наследуются: элемент с классом `backdrop-*` внутри
  другого такого элемента получает и функции предка. Например, `backdrop-sepia`
  внутри `backdrop-blur` даёт и сепию, и размытие.
- Любое значение создаёт у элемента новый контекст наложения и содержащий
  блок для потомков с `position: fixed`.

## См. также

- [Вращение оттенка элемента](/ru/utilities/filters/filter-hue-rotate/)
- [Размытие фона элемента](/ru/utilities/backdrop-filter/backdrop-blur/)
