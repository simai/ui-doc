---
title: "Межколоночный интервал"
description: "Задаёт расстояние между колонками по шкале отступов."
---

# Межколоночный интервал

Классы `col-gap-*` задают свойство `column-gap` значением из шкалы отступов
(`--sf-space-*`). Берите их, чтобы развести колонки многоколоночного блока
([`layout-col-*`](/ru/utilities/layout-break/column/)) или колонки грид- и
флекс-контейнера.

## Пример

### Шкала

Три колонки с разным интервалом. Пунктирная линия между колонками нарисована
только для примера; подпись над образцом — класс интервала.

:::example {id="utilities/layout-break/column-gap" label="Шкала межколоночного интервала"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `col-gap-0` | `column-gap: var(--sf-space-0)` | — |
| `col-gap-1/4` | `column-gap: var(--sf-space-1/4)` | — |
| `col-gap-1/3` | `column-gap: var(--sf-space-1/3)` | — |
| `col-gap-1/2` | `column-gap: var(--sf-space-1/2)` | — |
| `col-gap-1` | `column-gap: var(--sf-space-1)` | — |
| `col-gap-2` | `column-gap: var(--sf-space-2)` | — |
| `col-gap-3` | `column-gap: var(--sf-space-3)` | — |
| `col-gap-4` | `column-gap: var(--sf-space-4)` | — |
| `col-gap-5` | `column-gap: var(--sf-space-5)` | — |
| `col-gap-6` | `column-gap: var(--sf-space-6)` | — |
| `col-gap-7` | `column-gap: var(--sf-space-7)` | — |
| `col-gap-8` | `column-gap: var(--sf-space-8)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:col-gap-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-space-0` | `0` |
| `--sf-space-1/4` | `0.25rem; от ширины lg: var(--sf-a4)` |
| `--sf-space-1/3` | `0.5rem; от ширины lg: var(--sf-a8)` |
| `--sf-space-1/2` | `0.5rem; от ширины lg: 0.75rem` |
| `--sf-space-1` | `var(--sf-b2); от ширины lg: var(--sf-b6)` |
| `--sf-space-2` | `var(--sf-b6); от ширины lg: var(--sf-c0)` |
| `--sf-space-3` | `var(--sf-b6); от ширины lg: var(--sf-c2)` |
| `--sf-space-4` | `var(--sf-c2); от ширины lg: var(--sf-c6)` |
| `--sf-space-5` | `var(--sf-c6); от ширины lg: var(--sf-d0)` |
| `--sf-space-6` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-space-7` | `var(--sf-d0); от ширины lg: var(--sf-d6)` |
| `--sf-space-8` | `var(--sf-d2); от ширины lg: var(--sf-e0)` |

## Применение

### Многоколоночный текст

```html
<div class="layout-col-2 col-gap-4">
  <!-- абзацы -->
</div>
```

### Грид и флекс

`col-gap-*` меняет только расстояние между колонками; расстояние между
строками задают `row-gap-*` или общий `gap-*`. В одном условии `col-gap-*`
уточняет общий `gap-*`: в `gap-8 col-gap-2` строки разделены шагом `8`,
колонки — шагом `2`.

```html
<div class="grid grid-col-3 gap-8 col-gap-2">
  <!-- элементы сетки -->
</div>
```

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире.

```html
<div class="layout-col-2 col-gap-2 md:col-gap-6">
  <!-- абзацы -->
</div>
```

## Ограничения

- Линию между колонками утилиты не рисуют.
- У семейства нет префиксов состояния.

## См. также

- [Колонки](/ru/utilities/layout-break/column/)
- [Шаблон колонок сетки](/ru/utilities/grid/grid-template-columns/)
