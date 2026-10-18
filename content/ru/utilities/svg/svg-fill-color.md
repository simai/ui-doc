---
title: "Цвет заливки"
description: "Задаёт заливку фигур SVG цветом роли темы."
---

# Цвет заливки

Классы `fill-*` задают `fill` — цвет заливки фигур SVG — по ролям темы. Цвет
роли меняется вместе с темой, поэтому значок одинаково читается в светлой и
тёмной теме.

## Пример

### Акцент и статус

:::example {id="utilities/svg/svg-fill-color" label="Акцентные и статусные роли"}
:::

### Контейнеры

Мягкие цвета роли для крупных фигур и фона иллюстраций.

:::example {id="utilities/svg/svg-fill-color-container" label="fill-*-container"}
:::

### Поверхность и текст

Цвета поверхностей и текста на них. Обводка показывает границы светлых фигур.

:::example {id="utilities/svg/svg-fill-color-surface" label="Роли поверхности и текста"}
:::

### Полупрозрачные

Полупрозрачные роли выделения (`-select`) и слоя (`-overlay`) на подложке.

:::example {id="utilities/svg/svg-fill-color-transparent" label="fill-*-transparent-*"}
:::

### Служебные значения

`fill-current` берёт цвет текста, `fill-transparent` убирает заливку.

:::example {id="utilities/svg/svg-fill-color-keywords" label="fill-current и fill-transparent"}
:::

### При наведении

Наведите указатель на фигуры. Класс `hover:fill-{роль}` даёт цвет наведения роли — он темнее или светлее основного цвета.

:::example {id="utilities/svg/svg-fill-color-hover" label="hover:fill-*"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `fill-{значение}` | `fill: var(--sf-{значение})` | `transparent`, `current`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `fill-surface-{значение}` | `fill: var(--sf-surface-{значение})` | `0`, `1`, `2`, `3`, `4`, `inverse` |
| `fill-surface` | `fill: var(--sf-surface-1)` | — |
| `fill-surface-inverse-fixed` | `fill: var(--sf-surface-inverse-fixed)` | — |
| `fill-{значение}-container` | `fill: var(--sf-{значение}-container)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `fill-on-surface` | `fill: var(--sf-on-surface)` | — |
| `fill-on-surface-variant` | `fill: var(--sf-on-surface-variant)` | — |
| `fill-{значение}-transparent-select` | `fill: var(--sf-{значение}-transparent-select)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `fill-{значение}-transparent-overlay` | `fill: var(--sf-{значение}-transparent-overlay)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `hover:fill-{значение}-container` (`.hover:fill-{значение}-container:hover`) | `fill: var(--sf-{значение}-container-hover)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `hover:fill-on-surface` (`.hover:fill-on-surface:hover`) | `fill: var(--sf-on-surface-hover)` | — |
| `hover:fill-{значение}-transparent` (`.hover:fill-{значение}-transparent:hover`) | `fill: var(--sf-{значение}-transparent-hover)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `hover:fill-{значение}` (`.hover:fill-{значение}:hover`) | `fill: var(--sf-{значение}-hover)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:fill-surface-container`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-surface-0` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-1` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-surface-transparent-select` | `light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8))` |
| `--sf-surface-transparent-overlay` | `light-dark(var(--sf-neutral-50--alfa-32), var(--sf-neutral-90--alfa-32))` |
| `--sf-disable` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-primary-transparent-select` | `light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-90--alfa-8))` |
| `--sf-primary-transparent-overlay` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-secondary-transparent-select` | `light-dark(var(--sf-secondary-50--alfa-8), var(--sf-secondary-90--alfa-8))` |
| `--sf-secondary-transparent-overlay` | `light-dark(var(--sf-secondary-50--alfa-24), var(--sf-secondary-90--alfa-24))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-tertiary-transparent-select` | `light-dark(var(--sf-tertiary-50--alfa-8), var(--sf-tertiary-90--alfa-8))` |
| `--sf-tertiary-transparent-overlay` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-error-container` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-50--alfa-24))` |
| `--sf-error-transparent-select` | `light-dark(var(--sf-error-50--alfa-8), var(--sf-error-90--alfa-8))` |
| `--sf-error-transparent-overlay` | `light-dark(var(--sf-error-50--alfa-24), var(--sf-error-90--alfa-24))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-warning-container` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-50--alfa-24))` |
| `--sf-warning-transparent-select` | `light-dark(var(--sf-warning-50--alfa-8), var(--sf-warning-90--alfa-8))` |
| `--sf-warning-transparent-overlay` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-success-container` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-50--alfa-24))` |
| `--sf-success-transparent-select` | `light-dark(var(--sf-success-50--alfa-8), var(--sf-success-90--alfa-8))` |
| `--sf-success-transparent-overlay` | `light-dark(var(--sf-success-50--alfa-24), var(--sf-success-90--alfa-24))` |
| `--sf-surface-container-hover` | `light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20))` |
| `--sf-on-surface-hover` | `light-dark(var(--sf-neutral-15), var(--sf-neutral-85))` |
| `--sf-surface-transparent-hover` | `light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4))` |
| `--sf-primary-hover` | `light-dark(var(--sf-primary-35), var(--sf-primary-85))` |
| `--sf-primary-container-hover` | `light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))` |
| `--sf-primary-transparent-hover` | `light-dark(var(--sf-primary-50--alfa-4), var(--sf-primary-90--alfa-4))` |
| `--sf-secondary-hover` | `light-dark(var(--sf-secondary-35), var(--sf-secondary-85))` |
| `--sf-secondary-container-hover` | `light-dark(var(--sf-secondary-50--alfa-16), var(--sf-secondary-50--alfa-28))` |
| `--sf-secondary-transparent-hover` | `light-dark(var(--sf-secondary-50--alfa-4), var(--sf-secondary-90--alfa-4))` |
| `--sf-tertiary-hover` | `light-dark(var(--sf-tertiary-35), var(--sf-tertiary-85))` |
| `--sf-tertiary-container-hover` | `light-dark(var(--sf-tertiary-50--alfa-16), var(--sf-tertiary-50--alfa-28))` |
| `--sf-tertiary-transparent-hover` | `light-dark(var(--sf-tertiary-50--alfa-4), var(--sf-tertiary-90--alfa-4))` |
| `--sf-error-hover` | `light-dark(var(--sf-error-35), var(--sf-error-85))` |
| `--sf-error-container-hover` | `light-dark(var(--sf-error-50--alfa-16), var(--sf-error-50--alfa-28))` |
| `--sf-error-transparent-hover` | `light-dark(var(--sf-error-50--alfa-4), var(--sf-error-90--alfa-4))` |
| `--sf-warning-hover` | `light-dark(var(--sf-warning-35), var(--sf-warning-85))` |
| `--sf-warning-container-hover` | `light-dark(var(--sf-warning-50--alfa-16), var(--sf-warning-50--alfa-28))` |
| `--sf-warning-transparent-hover` | `light-dark(var(--sf-warning-50--alfa-4), var(--sf-warning-90--alfa-4))` |
| `--sf-success-hover` | `light-dark(var(--sf-success-35), var(--sf-success-85))` |
| `--sf-success-container-hover` | `light-dark(var(--sf-success-50--alfa-16), var(--sf-success-50--alfa-28))` |
| `--sf-success-transparent-hover` | `light-dark(var(--sf-success-50--alfa-4), var(--sf-success-90--alfa-4))` |

## Применение

### Как выбрать роль

| Задача | Классы |
| :--- | :--- |
| значок цвета текста рядом | `fill-current` |
| акцентный или статусный значок | `fill-primary`, `fill-secondary`, `fill-tertiary`, `fill-error`, `fill-warning`, `fill-success` |
| крупная фигура, фон иллюстрации | `fill-*-container` |
| нейтральная графика | `fill-on-surface`, `fill-on-surface-variant`, `fill-surface-*` |
| подсветка поверх другой графики | `fill-*-transparent-select`, `fill-*-transparent-overlay` |

`fill-surface` — то же, что `fill-surface-1`.

### Значок цвета текста

`fill-current` берёт цвет текста элемента: значок меняет цвет вместе с текстом,
в том числе при наведении на ссылку.

```html
<a class="flex items-center gap-1 color-primary" href="#">
  <svg class="svg-1 fill-current" viewBox="0 0 24 24" aria-hidden="true">…</svg>
  Скачать
</a>
```

### При наведении

Классы `hover:fill-*` есть у ролей `surface-container`, `on-surface`,
`primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, их
контейнеров (`hover:fill-primary-container` …) и полупрозрачных ролей
(`hover:fill-primary-transparent` …). Они берут цвет наведения роли
(`--sf-primary-hover` …), а не основной цвет: `fill-primary hover:fill-primary`
меняет оттенок при наведении. Полный список — в таблице классов.

## Ограничения

- Loader не читает классы на самих элементах `<svg>`, `<path>` и `<g>`:
  такой класс не загружает модуль утилиты и действует, только если модуль
  уже загрузил другой элемент страницы. Одноцветный знак надёжнее красить так:
  `fill="currentColor"` (или `stroke="currentColor"`) на SVG и утилита
  `color-*` на обёртке — ссылке или `<span>` (см. [Знак бренда и встроенный SVG](/ru/guide/colour/colour-roles/#знак-бренда-и-встроенный-svg)).
- Строка условий под таблицей классов не называет `hover:`: правила наведения
  этого семейства лежат в его основном файле CSS. Классы `hover:fill-*` из
  таблицы работают.
- `hover:fill-surface-transparent` и другие `hover:fill-*-transparent` не
  имеют пары без префикса: обычный класс полупрозрачной роли называется
  `fill-*-transparent-select` или `fill-*-transparent-overlay`.
- Класс заливки не действует на фигуру, у которой цвет задан атрибутом
  `style`; атрибут `fill` класс перекрывает.

## См. также

- [Цвет обводки](/ru/utilities/svg/svg-stroke-color/)
- [Брендовая SVG-заливка](/ru/utilities/svg/svg-fill-brand/)
- [Цвет текста](/ru/utilities/text-formatting/text-color/)
