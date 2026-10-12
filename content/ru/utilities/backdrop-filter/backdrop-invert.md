---
title: "Инвертирование цвета фона элемента"
description: "Инвертирует цвета того, что видно за элементом."
---

# Инвертирование цвета фона элемента

Класс `backdrop-invert` заменяет каждый цвет за элементом противоположным,
`backdrop-invert-none` возвращает исходные. Берите их для «линзы»,
выделяющей участок изображения.

## Пример

### Значения

В каждом образце рамка в центре — элемент с классом; изображение под ним меняется только внутри рамки.

:::example {id="utilities/backdrop-filter/backdrop-invert" label="backdrop-invert-none и backdrop-invert"}
:::

### При наведении

Наведите указатель на изображение: цвета за рамкой инвертируются.

:::example {id="utilities/backdrop-filter/backdrop-invert-hover" label="hover:backdrop-invert"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `backdrop-invert` | `--sf-backdrop-invert: invert(1); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-invert-none` | `--sf-backdrop-invert: invert(0); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:backdrop-invert`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-backdrop-blur` | задаётся темой |
| `--sf-backdrop-brightness` | задаётся темой |
| `--sf-backdrop-contrast` | задаётся темой |
| `--sf-backdrop-grayscale` | задаётся темой |
| `--sf-backdrop-hue-rotate` | задаётся темой |
| `--sf-backdrop-opacity` | задаётся темой |
| `--sf-backdrop-saturate` | задаётся темой |
| `--sf-backdrop-sepia` | задаётся темой |

## Применение

### Линза

```html
<div class="relative">
  <img src="photo.jpg" alt="Фотография">
  <div class="absolute inset-0 backdrop-invert"></div>
</div>
```

### Сочетание с другими фильтрами фона

Классы разных семейств фильтра фона складываются на одном элементе; класс с
`hover:` тоже добавляется к остальным, а не заменяет их.

```html
<div class="bg-surface-transparent-overlay backdrop-blur-large backdrop-invert">…</div>
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

- [Инвертирование цвета элемента](/ru/utilities/filters/filter-invert/)
- [Размытие фона элемента](/ru/utilities/backdrop-filter/backdrop-blur/)
