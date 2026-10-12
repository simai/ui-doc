---
title: "Сепия подложки"
description: "Окрашивает в коричневые тона то, что видно за элементом."
---

# Сепия подложки

Класс `backdrop-sepia` переводит всё, что лежит за элементом, в коричневые
тона старой фотографии, `backdrop-sepia-none` возвращает исходные цвета.

## Пример

### Значения

В каждом образце рамка в центре — элемент с классом; изображение под ним меняется только внутри рамки.

:::example {id="utilities/backdrop-filter/backdrop-sepia" label="backdrop-sepia-none и backdrop-sepia"}
:::

### При наведении

Наведите указатель на изображение: фон за рамкой окрашивается в сепию.

:::example {id="utilities/backdrop-filter/backdrop-sepia-hover" label="hover:backdrop-sepia"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `backdrop-sepia` | `--sf-backdrop-sepia: sepia(1); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-sepia-none` | `--sf-backdrop-sepia: sepia(0); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:backdrop-sepia`.

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
| `--sf-backdrop-invert` | задаётся темой |
| `--sf-backdrop-opacity` | задаётся темой |
| `--sf-backdrop-saturate` | задаётся темой |

## Применение

### Тонированная подложка

```html
<div class="bg-surface-transparent-overlay backdrop-sepia">…</div>
```

### Сочетание с другими фильтрами фона

Классы разных семейств фильтра фона складываются на одном элементе; класс с
`hover:` тоже добавляется к остальным, а не заменяет их.

```html
<div class="bg-surface-transparent-overlay backdrop-blur-large backdrop-sepia">…</div>
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

- [Сепия элемента](/ru/utilities/filters/filter-sepia/)
- [Размытие фона элемента](/ru/utilities/backdrop-filter/backdrop-blur/)
