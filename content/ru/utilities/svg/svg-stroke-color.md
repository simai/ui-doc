---
title: "Цвет обводки"
description: "Задаёт цвет обводки фигур SVG по ролям границ темы."
---

# Цвет обводки

Классы `stroke-*` задают `stroke` — цвет обводки фигур SVG — по ролям границ
темы. Берите их для линейных значков, схем и графиков.

## Пример

### Роли

:::example {id="utilities/svg/svg-stroke-color" label="Цвета обводки"}
:::

### При наведении

Наведите указатель на круг: обводка принимает цвет `primary`.

:::example {id="utilities/svg/svg-stroke-color-hover" label="hover:stroke-primary"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `stroke-transparent` | `stroke: var(--sf-transparent)` | — |
| `stroke-current` | `stroke: var(--sf-current)` | — |
| `stroke` | `stroke: var(--sf-outline-variant)` | — |
| `stroke-outline` | `stroke: var(--sf-outline)` | — |
| `stroke-outline-variant` | `stroke: var(--sf-outline-variant)` | — |
| `stroke-primary` | `stroke: var(--sf-outline-primary)` | — |
| `stroke-secondary` | `stroke: var(--sf-outline-secondary)` | — |
| `stroke-tertiary` | `stroke: var(--sf-outline-tertiary)` | — |
| `stroke-error` | `stroke: var(--sf-outline-error)` | — |
| `stroke-warning` | `stroke: var(--sf-outline-warning)` | — |
| `stroke-success` | `stroke: var(--sf-outline-success)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:stroke-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-outline` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-60--alfa-64))` |
| `--sf-outline-primary` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-outline-secondary` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-outline-tertiary` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-outline-error` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-outline-warning` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-outline-success` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |

## Применение

### Как выбрать роль

| Класс | Роль |
| :--- | :--- |
| `stroke`, `stroke-outline-variant` | спокойная граница: `--sf-outline-variant` |
| `stroke-outline` | заметная граница: `--sf-outline` |
| `stroke-primary`, `stroke-secondary`, `stroke-tertiary` | граница акцентной роли: `--sf-outline-primary` … |
| `stroke-error`, `stroke-warning`, `stroke-success` | граница статусной роли |
| `stroke-current` | цвет текста |
| `stroke-transparent` | без видимой обводки |

Цвета обводки — это роли границ (`--sf-outline-*`), а не цвета заливки:
`stroke-primary` совпадает с границей акцентного поля, а не с заливкой
`fill-primary`.

```html
<svg class="svg-3 fill-transparent stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">…</svg>
```

## Ограничения

- Loader не читает классы на самих элементах `<svg>`, `<path>` и `<g>`:
  такой класс не загружает модуль утилиты и действует, только если модуль
  уже загрузил другой элемент страницы. Одноцветный знак надёжнее красить так:
  `fill="currentColor"` (или `stroke="currentColor"`) на SVG и утилита
  `color-*` на обёртке — ссылке или `<span>` (см. [Знак бренда и встроенный SVG](/ru/guide/colour/colour-roles/#знак-бренда-и-встроенный-svg)).
- Префиксов ширины экрана у семейства нет.

## См. также

- [Толщина обводки](/ru/utilities/svg/svg-stroke-width/)
- [Цвет заливки](/ru/utilities/svg/svg-fill-color/)
- [Цвет границы](/ru/utilities/border/border-color/)
