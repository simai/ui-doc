---
title: "Фокусное кольцо"
description: "Рисует кольцо вокруг элемента тенью, не меняя его размер, и задаёт толщину и цвет кольца."
---

# Фокусное кольцо

Классы `ring-{n}` рисуют сплошное кольцо вокруг элемента свойством
`box-shadow`, классы `ring-{цвет}` задают его цвет. Кольцо не занимает места
и не сдвигает соседей. Берите его для выделения выбранного элемента и для
фокуса с клавиатуры — с префиксом `focus-visible:`.

Компоненты Framework рисуют фокус контуром из токенов `--sf-focus--*`, см.
[Фокус](/ru/guide/fundamentals/focus/). Кольцо на утилитах — для
собственной разметки проекта; рядом с компонентами Framework берите токены,
чтобы фокус выглядел одинаково.

## Пример

### Толщина

Под каждым образцом — класс толщины; цвет задаёт `ring-primary`.

:::example {id="utilities/outline/ring" label="ring-0 … ring-4"}
:::

### Цвет

Под каждым образцом — класс цвета; толщину задаёт `ring-2`.

:::example {id="utilities/outline/ring-color" label="Цвета кольца"}
:::

### Состояния

Префикс показывает кольцо только в состоянии. Переведите фокус на первую
кнопку клавишей Tab, наведите указатель на вторую.

:::example {id="utilities/outline/ring-states" label="focus-visible: и hover:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `ring-{значение}` | `--sf-ring-color: var(--sf-{значение})` | `transparent`, `current`, `outline` |
| `ring-outline-variant` | `--sf-ring-color: var(--sf-outline-variant)` | — |
| `ring-surface` | `--sf-ring-color: var(--sf-surface-1)` | — |
| `ring-surface-{значение}` | `--sf-ring-color: var(--sf-surface-{значение})` | `0`, `1`, `overlay`, `inverse` |
| `ring-{значение}-container` | `--sf-ring-color: var(--sf-{значение}-container)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `ring-{значение}-transparent-overlay` | `--sf-ring-color: var(--sf-{значение}-transparent-overlay)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `ring-on-surface` | `--sf-ring-color: var(--sf-on-surface)` | — |
| `ring-on-surface-variant` | `--sf-ring-color: var(--sf-on-surface-variant)` | — |
| `ring-{значение}` | `--sf-ring-color: var(--sf-outline-{значение})` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `ring-offset-{значение}` | `--sf-ring-offset-color: var(--sf-{значение})` | `transparent`, `current`, `outline` |
| `ring-offset-outline-variant` | `--sf-ring-offset-color: var(--sf-outline-variant)` | — |
| `ring-offset-surface` | `--sf-ring-offset-color: var(--sf-surface-1)` | — |
| `ring-offset-surface-{значение}` | `--sf-ring-offset-color: var(--sf-surface-{значение})` | `0`, `1`, `overlay`, `inverse` |
| `ring-offset-{значение}-container` | `--sf-ring-offset-color: var(--sf-{значение}-container)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `ring-offset-{значение}-transparent-overlay` | `--sf-ring-offset-color: var(--sf-{значение}-transparent-overlay)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `ring-offset-on-surface` | `--sf-ring-offset-color: var(--sf-on-surface)` | — |
| `ring-offset-on-surface-variant` | `--sf-ring-offset-color: var(--sf-on-surface-variant)` | — |
| `ring-offset-{значение}` | `--sf-ring-offset-color: var(--sf-outline-{значение})` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `ring-offset-{значение}` | `--sf-ring-offset-width: var(--sf-a{значение})` | `1`, `2`, `3`, `4` |
| `ring-offset-0` | `--sf-ring-offset-width: var(--sf-0)` | — |
| `ring-1` | `--sf-ring-width: var(--sf-a1); box-shadow: var(--sf-ring-inset, ) 0 0 0 calc(var(--sf-ring-width) + 0px) color-mix(in srgb, transparent, currentColor calc(1 * 100%)), 0 0 0 0px transparent; box-shadow: var(--sf-ring-inset, ) 0 0 0 calc(var(--sf-ring-width) + var(--sf-ring-offset-width, 0px)) color-mix(in srgb, transparent, var(--sf-ring-color, currentColor) calc(var(--sf-ring--alfa, 1) * 100%)), 0 0 0 var(--sf-ring-offset-width, 0px) var(--sf-ring-offset-color, transparent)` | — |
| `ring-{значение}` | `--sf-ring-width: var(--sf-a{значение}); box-shadow: var(--sf-ring-inset, ) 0 0 0 calc(var(--sf-ring-width) + 0px) color-mix(in srgb, transparent, currentColor calc(1 * 100%)), 0 0 0 0px transparent; box-shadow: var(--sf-ring-inset, ) 0 0 0 calc(var(--sf-ring-width) + var(--sf-ring-offset-width, 0px)) color-mix(in srgb, transparent, var(--sf-ring-color, currentColor) calc(var(--sf-ring--alfa, 1) * 100%)), 0 0 0 var(--sf-ring-offset-width, 0px) var(--sf-ring-offset-color, transparent)` | `2`, `3`, `4` |
| `ring-0` | `--sf-ring-width: var(--sf-0); box-shadow: var(--sf-ring-inset, ) 0 0 0 calc(var(--sf-ring-width) + 0px) color-mix(in srgb, transparent, currentColor calc(1 * 100%)), 0 0 0 0px transparent; box-shadow: var(--sf-ring-inset, ) 0 0 0 calc(var(--sf-ring-width) + var(--sf-ring-offset-width, 0px)) color-mix(in srgb, transparent, var(--sf-ring-color, currentColor) calc(var(--sf-ring--alfa, 1) * 100%)), 0 0 0 var(--sf-ring-offset-width, 0px) var(--sf-ring-offset-color, transparent)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `focus-visible:`, `focus:`, `hover:`. Например: `focus-visible:ring-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-outline` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-60--alfa-64))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-surface-1` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-0` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16))` |
| `--sf-surface-overlay` | `light-dark(var(--sf-black--alfa-8), var(--sf-white--alfa-8))` |
| `--sf-surface-transparent-overlay` | `light-dark(var(--sf-neutral-50--alfa-32), var(--sf-neutral-90--alfa-32))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-outline-primary` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-primary-transparent-overlay` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-outline-secondary` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-secondary-transparent-overlay` | `light-dark(var(--sf-secondary-50--alfa-24), var(--sf-secondary-90--alfa-24))` |
| `--sf-outline-tertiary` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-tertiary-transparent-overlay` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-outline-error` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-error-container` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-50--alfa-24))` |
| `--sf-error-transparent-overlay` | `light-dark(var(--sf-error-50--alfa-24), var(--sf-error-90--alfa-24))` |
| `--sf-outline-warning` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-warning-container` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-50--alfa-24))` |
| `--sf-warning-transparent-overlay` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-outline-success` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |
| `--sf-success-container` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-50--alfa-24))` |
| `--sf-success-transparent-overlay` | `light-dark(var(--sf-success-50--alfa-24), var(--sf-success-90--alfa-24))` |
| `--sf-outline-info` | `light-dark(var(--sf-info-50), var(--sf-info-60))` |
| `--sf-info-container` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-50--alfa-24))` |
| `--sf-a1` | `0.0625rem` |
| `--sf-a2` | `0.125rem` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a4` | `0.25rem` |
| `--sf-0` | `0` |
| `--sf-ring-inset` | задаётся темой |
| `--sf-ring--alfa` | `1` |

## Применение

### Как собрать кольцо

| Задача | Классы |
| :--- | :--- |
| Толщина | `ring-1` … `ring-4` — от 1 до 4px; `ring-0` убирает кольцо |
| Цвет | `ring-primary`, `ring-error`, `ring-outline` и другие роли |
| Кольцо внутри элемента | [`ring-inset`](/ru/utilities/outline/ring-inset/) |
| Прозрачность | [`ring-opacity-*`](/ru/utilities/outline/ring-opacity/) |

Ставьте толщину и цвет вместе: без класса цвета кольцо не рисуется.

```html
<button class="focus-visible:ring-2 focus-visible:ring-primary">Сохранить</button>
<div class="ring-2 ring-primary radius-surface">Выбранный тариф</div>
```

### Когда кольцо появляется

| Префикс | Когда срабатывает |
| :--- | :--- |
| `focus-visible:` | при фокусе с клавиатуры — для фокуса берите его |
| `focus:` | при любом фокусе, в том числе после щелчка мышью |
| `hover:` | при наведении указателя |

### Кольцо и тень

Кольцо — это `box-shadow`. Класс кольца и класс
[тени элемента](/ru/utilities/shadows/element-shadow/) на одном элементе
перекрывают друг друга: остаётся то, что задано позже в CSS. Для карточки с
тенью и кольцом выбора оберните её или выделяйте контуром
[`outline-*`](/ru/utilities/outline/outline-color/).

## Ограничения

- Без класса цвета кольцо не рисуется: переменная цвета кольца в ядре задана
  пустой, и запасной цвет текста не подставляется.
- Классы `ring-offset-{n}` в выпуске не оставляют зазора: кольцо
  становится толще на ширину отступа, а цвет `ring-offset-{цвет}` оказывается
  под кольцом и не виден. `ring-offset-0` убирает кольцо целиком. Для кольца с
  зазором берите контур с [`outline-offset-*`](/ru/utilities/outline/outline-offset/).
- Префиксов ширины экрана у семейства нет.

## См. также

- [Внутреннее кольцо](/ru/utilities/outline/ring-inset/)
- [Прозрачность кольца](/ru/utilities/outline/ring-opacity/)
- [Цвет внешней границы](/ru/utilities/outline/outline-color/)
- [Фокус](/ru/guide/fundamentals/focus/)
