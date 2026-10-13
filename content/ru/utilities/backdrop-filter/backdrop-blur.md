---
title: "Размытие фона элемента"
description: "Размывает то, что видно за элементом, — эффект матового стекла."
---

# Размытие фона элемента

Классы `backdrop-blur-*` размывают всё, что лежит за элементом, а сам элемент
и его содержимое остаются чёткими. Берите их для панелей и шапок поверх
изображений и прокручиваемого содержимого.

## Пример

### Шкала

В каждом образце рамка в центре — элемент с классом; изображение под ним меняется только внутри рамки. `backdrop-blur` и `backdrop-blur-medium` дают одно и то же.

:::example {id="utilities/backdrop-filter/backdrop-blur" label="Степени размытия фона"}
:::

### При наведении

Наведите указатель на изображение: фон за рамкой размывается.

:::example {id="utilities/backdrop-filter/backdrop-blur-hover" label="hover:backdrop-blur-large"}
:::

### Матовая панель

Полупрозрачный фон роли, размытие и насыщенность фона на одной панели.

:::example {id="utilities/backdrop-filter/backdrop-blur-combined" label="Сочетание классов фильтра фона"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `backdrop-blur-small` | `--sf-backdrop-blur: blur(var(--sf-blur-small)); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-blur` | `--sf-backdrop-blur: blur(var(--sf-blur-medium)); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-blur-medium` | `--sf-backdrop-blur: blur(var(--sf-blur-medium)); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-blur-large` | `--sf-backdrop-blur: blur(var(--sf-blur-large)); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-blur-none` | `--sf-backdrop-blur: blur(var(--sf-blur-none)); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:backdrop-blur-small`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-blur-small` | `var(--sf-a2)` |
| `--sf-backdrop-brightness` | задаётся темой |
| `--sf-backdrop-contrast` | задаётся темой |
| `--sf-backdrop-grayscale` | задаётся темой |
| `--sf-backdrop-hue-rotate` | задаётся темой |
| `--sf-backdrop-invert` | задаётся темой |
| `--sf-backdrop-opacity` | задаётся темой |
| `--sf-backdrop-saturate` | задаётся темой |
| `--sf-backdrop-sepia` | задаётся темой |
| `--sf-blur-medium` | `var(--sf-a4)` |
| `--sf-blur-large` | `var(--sf-a8)` |
| `--sf-blur-none` | `var(--sf-a0)` |

## Применение

### Как выбрать степень

| Класс | Токен | Радиус |
| :--- | :--- | ---: |
| `backdrop-blur-none` | `--sf-blur-none` | 0 |
| `backdrop-blur-small` | `--sf-blur-small` | 2px |
| `backdrop-blur`, `backdrop-blur-medium` | `--sf-blur-medium` | 4px |
| `backdrop-blur-large` | `--sf-blur-large` | 8px |

Значения приведены при `1rem = 16px`. Те же токены читают классы
[размытия элемента](/ru/utilities/filters/filter-blur/).

### Матовая панель

Размытию нужен полупрозрачный фон: он сохраняет контраст текста, а размытие
убирает мелкие детали под ним.

```html
<header class="sticky top-0 bg-surface-transparent-overlay backdrop-blur-large backdrop-saturate-3">…</header>
```

Классы разных семейств фильтра фона складываются на одном элементе; класс с
`hover:` добавляется к остальным, а не заменяет их.

## Ограничения

- Эффект виден только сквозь прозрачный или полупрозрачный фон элемента:
  непрозрачный фон закрывает то, что лежит за ним.
- Классы фильтра фона наследуются: элемент с классом `backdrop-*` внутри
  другого такого элемента получает и функции предка. Например, `backdrop-sepia`
  внутри `backdrop-blur` даёт и сепию, и размытие.
- Любое значение создаёт у элемента новый контекст наложения и содержащий
  блок для потомков с `position: fixed`.

## См. также

- [Размытие элемента](/ru/utilities/filters/filter-blur/)
- [Яркость фона элемента](/ru/utilities/backdrop-filter/backdrop-brightness/)
- [Насыщенность подложки](/ru/utilities/backdrop-filter/backdrop-saturate/)
