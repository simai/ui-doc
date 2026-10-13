---
title: "Прозрачность фона элемента"
description: "Ослабляет действие остальных фильтров фона, смешивая их с исходным фоном."
---

# Прозрачность фона элемента

Классы `backdrop-opacity-*` задают прозрачность отфильтрованного фона за
элементом. Сами по себе они почти незаметны; берите их вместе с другими
классами фильтра фона, чтобы ослабить их действие.

## Пример

### Шкала

В каждом образце рамка в центре — элемент с классом; изображение под ним меняется только внутри рамки. Во всех образцах фон за рамкой размыт классом `backdrop-blur-large`; номер ступени — десятки процентов непрозрачности, `backdrop-opacity-full` — 100%.

:::example {id="utilities/backdrop-filter/backdrop-opacity" label="Ступени прозрачности фильтра фона"}
:::

### При наведении

Наведите указатель на изображение: размытие за рамкой исчезает.

:::example {id="utilities/backdrop-filter/backdrop-opacity-hover" label="hover:backdrop-opacity-0"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `backdrop-opacity-1` | `--sf-backdrop-opacity: opacity(0.1); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-2` | `--sf-backdrop-opacity: opacity(0.2); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-3` | `--sf-backdrop-opacity: opacity(0.3); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-4` | `--sf-backdrop-opacity: opacity(0.4); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-5` | `--sf-backdrop-opacity: opacity(0.5); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-6` | `--sf-backdrop-opacity: opacity(0.6); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-7` | `--sf-backdrop-opacity: opacity(0.7); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-8` | `--sf-backdrop-opacity: opacity(0.8); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-9` | `--sf-backdrop-opacity: opacity(0.9); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-full` | `--sf-backdrop-opacity: opacity(1); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |
| `backdrop-opacity-0` | `--sf-backdrop-opacity: opacity(0); backdrop-filter: var(--sf-backdrop-blur, ) var(--sf-backdrop-brightness, ) var(--sf-backdrop-contrast, ) var(--sf-backdrop-grayscale, ) var(--sf-backdrop-hue-rotate, ) var(--sf-backdrop-invert, ) var(--sf-backdrop-opacity, ) var(--sf-backdrop-saturate, ) var(--sf-backdrop-sepia, )` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:backdrop-opacity-1`.

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
| `--sf-backdrop-saturate` | задаётся темой |
| `--sf-backdrop-sepia` | задаётся темой |

## Применение

### Шкала

| Класс | Непрозрачность |
| :--- | ---: |
| `backdrop-opacity-0` | 0 |
| `backdrop-opacity-1` … `backdrop-opacity-9` | 0.1 … 0.9 |
| `backdrop-opacity-full` | 1 |

### Ослабить размытие

```html
<div class="backdrop-blur-large backdrop-opacity-5">…</div>
```

Прозрачность самого элемента вместе с содержимым задаёт
[`opacity-*`](/ru/utilities/filters/opacity/).

## Ограничения

- Эффект виден только сквозь прозрачный или полупрозрачный фон элемента:
  непрозрачный фон закрывает то, что лежит за ним.
- Классы фильтра фона наследуются: элемент с классом `backdrop-*` внутри
  другого такого элемента получает и функции предка. Например, `backdrop-sepia`
  внутри `backdrop-blur` даёт и сепию, и размытие.
- Любое значение создаёт у элемента новый контекст наложения и содержащий
  блок для потомков с `position: fixed`.

## См. также

- [Прозрачность](/ru/utilities/filters/opacity/)
- [Размытие фона элемента](/ru/utilities/backdrop-filter/backdrop-blur/)
