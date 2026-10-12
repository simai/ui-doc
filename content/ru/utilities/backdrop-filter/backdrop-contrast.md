---
title: "Контрастность фона элемента"
description: "Повышает или снижает контрастность того, что видно за элементом."
---

# Контрастность фона элемента

Классы `backdrop-contrast-*` меняют контрастность всего, что лежит за
элементом. Берите их, чтобы успокоить фон под текстом или, наоборот, сделать
его выразительнее.

## Пример

### Шкала

В каждом образце рамка в центре — элемент с классом; изображение под ним меняется только внутри рамки. `backdrop-contrast-1` оставляет фон как есть, `backdrop-contrast-0` делает его сплошным серым.

:::example {id="utilities/backdrop-filter/backdrop-contrast" label="Ступени: контрастность фона"}
:::

### При наведении

Наведите указатель на изображение: фон за рамкой становится серым.

:::example {id="utilities/backdrop-filter/backdrop-contrast-hover" label="hover:backdrop-contrast-0"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `backdrop-contrast-0` | `--sf-backdrop-contrast: contrast(0); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-contrast-1/4` | `--sf-backdrop-contrast: contrast(0.8); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-contrast-1/3` | `--sf-backdrop-contrast: contrast(0.9); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-contrast-1/2` | `--sf-backdrop-contrast: contrast(0.95); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-contrast-1` | `--sf-backdrop-contrast: contrast(1); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-contrast-2` | `--sf-backdrop-contrast: contrast(1.05); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-contrast-3` | `--sf-backdrop-contrast: contrast(1.1); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-contrast-4` | `--sf-backdrop-contrast: contrast(1.2); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:backdrop-contrast-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-backdrop-blur` | задаётся темой |
| `--sf-backdrop-brightness` | задаётся темой |
| `--sf-backdrop-grayscale` | задаётся темой |
| `--sf-backdrop-hue-rotate` | задаётся темой |
| `--sf-backdrop-invert` | задаётся темой |
| `--sf-backdrop-opacity` | задаётся темой |
| `--sf-backdrop-saturate` | задаётся темой |
| `--sf-backdrop-sepia` | задаётся темой |

## Применение

### Шкала

| Класс | Значение |
| :--- | ---: |
| `backdrop-contrast-0` | 0 |
| `backdrop-contrast-1/4` | 0.8 |
| `backdrop-contrast-1/3` | 0.9 |
| `backdrop-contrast-1/2` | 0.95 |
| `backdrop-contrast-1` | 1 |
| `backdrop-contrast-2` | 1.05 |
| `backdrop-contrast-3` | 1.1 |
| `backdrop-contrast-4` | 1.2 |

### Сочетание с другими фильтрами фона

Классы разных семейств фильтра фона складываются на одном элементе; класс с
`hover:` тоже добавляется к остальным, а не заменяет их.

```html
<div class="bg-surface-transparent-overlay backdrop-blur-large backdrop-contrast-2">…</div>
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

- [Контрастность элемента](/ru/utilities/filters/filter-contrast/)
- [Размытие фона элемента](/ru/utilities/backdrop-filter/backdrop-blur/)
