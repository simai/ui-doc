---
title: "Толщина границы"
description: "Задаёт толщину рамки от 0 до 10 пикселей для всего элемента, оси или одной стороны."
---

# Толщина границы

Классы `border-{n}` задают `border-width` по шкале от `0` до `10` — для всех
сторон, для оси или для одной стороны. Берите их, чтобы включить рамку,
сделать её толще или оставить линию только с одной стороны.

## Пример

### Шкала

Под каждым образцом — класс толщины.

:::example {id="utilities/border/border-width" label="border-0 … border-10"}
:::

### Стороны и оси

Класс стороны задаёт толщину только своей стороны.

:::example {id="utilities/border/border-width-sides" label="Толщина стороны и оси"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: у полосы нет рамки, с ширины `md` она тонкая, с ширины `xl` —
толстая. У карточки на узком экране только верхняя и нижняя линии, с ширины
`sm` — рамка со всех сторон.

:::example {id="utilities/border/border-width-responsive" label="Толщина по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `border-{значение}` | `border-width: var(--sf-a{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `border-10` | `border-width: var(--sf-b0)` | — |
| `border-0` | `border-width: var(--sf-0)` | — |
| `border-top-{значение}` | `border-top-width: var(--sf-a{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `border-top-10` | `border-top-width: var(--sf-b0)` | — |
| `border-top-0` | `border-top-width: var(--sf-0)` | — |
| `border-inline-end-{значение}` | `border-inline-end-width: var(--sf-a{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `border-inline-end-10` | `border-inline-end-width: var(--sf-b0)` | — |
| `border-inline-end-0` | `border-inline-end-width: var(--sf-0)` | — |
| `border-bottom-{значение}` | `border-bottom-width: var(--sf-a{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `border-bottom-10` | `border-bottom-width: var(--sf-b0)` | — |
| `border-bottom-0` | `border-bottom-width: var(--sf-0)` | — |
| `border-inline-start-{значение}` | `border-inline-start-width: var(--sf-a{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `border-inline-start-10` | `border-inline-start-width: var(--sf-b0)` | — |
| `border-inline-start-0` | `border-inline-start-width: var(--sf-0)` | — |
| `border-x-{значение}` | `border-inline-end-width: var(--sf-a{значение}); border-inline-start-width: var(--sf-a{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `border-x-10` | `border-inline-end-width: var(--sf-b0); border-inline-start-width: var(--sf-b0)` | — |
| `border-x-0` | `border-inline-end-width: var(--sf-0); border-inline-start-width: var(--sf-0)` | — |
| `border-y-{значение}` | `border-top-width: var(--sf-a{значение}); border-bottom-width: var(--sf-a{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `border-y-10` | `border-top-width: var(--sf-b0); border-bottom-width: var(--sf-b0)` | — |
| `border-y-0` | `border-top-width: var(--sf-0); border-bottom-width: var(--sf-0)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:border-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-a1` | `0.0625rem` |
| `--sf-a2` | `0.125rem` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a4` | `0.25rem` |
| `--sf-a5` | `0.3125rem` |
| `--sf-a6` | `0.375rem` |
| `--sf-a7` | `0.4375rem` |
| `--sf-a8` | `0.5rem` |
| `--sf-a9` | `0.5625rem` |
| `--sf-b0` | `0.625rem` |
| `--sf-0` | `0` |

## Применение

### Шкала

| Класс | Толщина при `1rem = 16px` |
| :--- | :--- |
| `border-0` | 0 |
| `border-1` … `border-9` | от 1 до 9px, шаг 1px |
| `border-10` | 10px |

Шкала задана в `rem` и растёт вместе с кеглем.

### Стороны

| Шаблон | Что задаёт |
| :--- | :--- |
| `border-top-{n}`, `border-bottom-{n}` | верхнюю или нижнюю сторону |
| `border-inline-start-{n}`, `border-inline-end-{n}` | сторону в начале или в конце строки |
| `border-x-{n}` | обе стороны по горизонтали |
| `border-y-{n}` | верхнюю и нижнюю стороны |

### Цвет и стиль

Ядро ставит всем элементам сплошной стиль, поэтому класс толщины сразу рисует
линию. Её цвет — цвет текста, пока не задан класс
[цвета границы](/ru/utilities/border/border-color/). Класс `border` из ядра
включает рамку в 1px цвета `outline-variant`; `border-none` её убирает.

```html
<div class="border-1 border-outline-variant radius-surface p-3">Карточка</div>
<h2 class="border-bottom-2 border-primary">Раздел</h2>
<blockquote class="border-inline-start-4 border-tertiary p-x-3">Цитата</blockquote>
```

## Ограничения

- Стороны по горизонтали названы логически: при письме справа налево
  `inline-start` и `inline-end` меняются местами. Для браузеров без
  логических свойств выпуск задаёт физические стороны по атрибуту
  `dir="rtl"` у предка.
- Рамка входит в размер элемента: ядро ставит `box-sizing: border-box`, и
  толстая рамка уменьшает место для содержимого.
- У семейства нет префиксов состояния.

## См. также

- [Цвет границы](/ru/utilities/border/border-color/)
- [Стиль границы](/ru/utilities/border/border-style/)
- [Скругление границы](/ru/utilities/border/border-radius/)
- [Границы](/ru/guide/fundamentals/borders/)
