---
title: "Насыщенность подложки"
description: "Снижает или повышает насыщенность цветов за элементом."
---

# Насыщенность подложки

Классы `backdrop-saturate-*` меняют насыщенность цветов за элементом. Вместе с
размытием фона они дают «живое» матовое стекло, через которое цвета видны
ярче.

## Пример

### Шкала

В каждом образце рамка в центре — элемент с классом; изображение под ним меняется только внутри рамки. `backdrop-saturate-1` оставляет цвета как есть, `backdrop-saturate-0` убирает их.

:::example {id="utilities/backdrop-filter/backdrop-saturate" label="Ступени: насыщенность фона"}
:::

### При наведении

Наведите указатель на изображение: фон за рамкой теряет цвет.

:::example {id="utilities/backdrop-filter/backdrop-saturate-hover" label="hover:backdrop-saturate-0"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `backdrop-saturate-0` | `--sf-backdrop-saturate: saturate(0); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-saturate-1/4` | `--sf-backdrop-saturate: saturate(0.25); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-saturate-1/3` | `--sf-backdrop-saturate: saturate(0.5); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-saturate-1/2` | `--sf-backdrop-saturate: saturate(0.75); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-saturate-1` | `--sf-backdrop-saturate: saturate(1); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-saturate-2` | `--sf-backdrop-saturate: saturate(1.25); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-saturate-3` | `--sf-backdrop-saturate: saturate(1.5); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-saturate-4` | `--sf-backdrop-saturate: saturate(1.75); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:backdrop-saturate-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-backdrop-blur` | задаётся темой |
| `--sf-backdrop-brightness` | задаётся темой |
| `--sf-backdrop-contrast` | задаётся темой |
| `--sf-backdrop-grayscale` | задаётся темой |
| `--sf-backdrop-hue-rotate` | задаётся темой |
| `--sf-backdrop-invert` | задаётся темой |
| `--sf-backdrop-opacity` | задаётся темой |
| `--sf-backdrop-sepia` | задаётся темой |

## Применение

### Шкала

| Класс | Значение |
| :--- | ---: |
| `backdrop-saturate-0` | 0 |
| `backdrop-saturate-1/4` | 0.25 |
| `backdrop-saturate-1/3` | 0.5 |
| `backdrop-saturate-1/2` | 0.75 |
| `backdrop-saturate-1` | 1 |
| `backdrop-saturate-2` | 1.25 |
| `backdrop-saturate-3` | 1.5 |
| `backdrop-saturate-4` | 1.75 |

Шаг насыщенности — четверть, крупнее, чем у яркости и контраста.

### Сочетание с другими фильтрами фона

Классы разных семейств фильтра фона складываются на одном элементе; класс с
`hover:` тоже добавляется к остальным, а не заменяет их.

```html
<div class="bg-surface-transparent-overlay backdrop-blur-large backdrop-saturate-2">…</div>
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

- [Насыщенность элемента](/ru/utilities/filters/filter-saturate/)
- [Размытие фона элемента](/ru/utilities/backdrop-filter/backdrop-blur/)
