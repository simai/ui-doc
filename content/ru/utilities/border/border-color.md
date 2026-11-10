---
title: "Цвет границы"
description: "Окрашивает рамку элемента цветовой ролью темы, чтобы она подстраивалась под светлую и тёмную тему."
---

# Цвет границы

Классы `border-{цвет}` задают `border-color` через цветовые роли темы. Берите `border-outline-variant` для обычных разделительных рамок,
`border-outline` — для рамки поля, акцентные и статусные роли — когда рамка
сообщает выбор, ошибку или успех.

## Пример

### Роли

Основные роли рамки. Под каждым образцом — класс цвета; толщину задаёт
`border-4`.

:::example {id="utilities/border/border-color" label="Роли цвета границы"}
:::

### Мягкие и поверхностные цвета

`-container` и `-transparent-overlay` дают бледную рамку своей роли. Цвета
поверхности совпадают с фоном страницы: на заливке такая рамка выглядит как
вырез.

:::example {id="utilities/border/border-color-soft" label="-container, -transparent-overlay и цвета поверхности"}
:::

### Состояния

Префикс применяет цвет только в состоянии. Наведите указатель на поле, затем
щёлкните в нём; нажмите и удерживайте кнопку.

:::example {id="utilities/border/border-color-states" label="hover:, focus: и active:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `border-{значение}` | `border-color: var(--sf-{значение})` | `transparent`, `current`, `outline` |
| `border-outline-variant` | `border-color: var(--sf-outline-variant)` | — |
| `border-surface` | `border-color: var(--sf-surface-1)` | — |
| `border-surface-{значение}` | `border-color: var(--sf-surface-{значение})` | `0`, `1`, `overlay`, `inverse` |
| `border-{значение}-container` | `border-color: var(--sf-{значение}-container)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `border-{значение}-transparent-overlay` | `border-color: var(--sf-{значение}-transparent-overlay)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `border-on-surface` | `border-color: var(--sf-on-surface)` | — |
| `border-on-surface-variant` | `border-color: var(--sf-on-surface-variant)` | — |
| `border-{значение}` | `border-color: var(--sf-outline-{значение})` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `border-info-container-strong` | `border-color: var(--sf-info-container-strong)` | — |

Другие классы записи `utility-c17-legacy-palette-classes` журнала уходят без замены и работают до 2027-01-01 ([Как обновить проект](/ru/guide/connection/updating/)); в новой разметке их не пишите.

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `active:`, `focus:`, `hover:`. Например: `active:border-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-outline` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-surface-1` | `var(--sf-surface-area)` |
| `--sf-surface-0` | `var(--sf-surface-page)` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16))` |
| `--sf-surface-overlay` | `var(--sf-surface-veil)` |
| `--sf-surface-transparent-overlay` | `var(--sf-surface-container-strong)` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-outline-primary` | `var(--sf-primary-outline)` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-primary-transparent-overlay` | `var(--sf-primary-container-strong)` |
| `--sf-outline-secondary` | `var(--sf-secondary-outline)` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-secondary-transparent-overlay` | `var(--sf-secondary-container-strong)` |
| `--sf-outline-tertiary` | `var(--sf-tertiary-outline)` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-tertiary-transparent-overlay` | `var(--sf-tertiary-container-strong)` |
| `--sf-outline-error` | `var(--sf-error-outline)` |
| `--sf-error-container` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-50--alfa-24))` |
| `--sf-error-transparent-overlay` | `var(--sf-error-container-strong)` |
| `--sf-outline-warning` | `var(--sf-warning-outline)` |
| `--sf-warning-container` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-50--alfa-24))` |
| `--sf-warning-transparent-overlay` | `var(--sf-warning-container-strong)` |
| `--sf-outline-success` | `var(--sf-success-outline)` |
| `--sf-success-container` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-50--alfa-24))` |
| `--sf-success-transparent-overlay` | `var(--sf-success-container-strong)` |
| `--sf-outline-info` | `var(--sf-info-outline)` |
| `--sf-info-container` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-50--alfa-24))` |
| `--sf-info-container-strong` | `light-dark(var(--sf-info-50--alfa-24), var(--sf-info-90--alfa-24))` |

## Применение

### Как выбрать

| Задача | Класс |
| :--- | :--- |
| Тихая рамка карточки, разделитель | `border-outline-variant` |
| Рамка поля ввода, заметный контур | `border-outline` |
| Выбранный элемент, фокус | `border-primary` |
| Ошибка, предупреждение, успех, сведения | `border-error`, `border-warning`, `border-success`, `border-info` |
| Рамка цвета текста | `border-current` |
| Вырез вокруг аватара на заливке | `border-surface`, `border-surface-0` |
| Невидимая рамка, которая держит размер | `border-transparent` |

Классы цвета не включают рамку: толщину задают классы
[толщины границы](/ru/utilities/border/border-width/). Класс `border` из ядра
включает рамку в 1px цвета `outline-variant`, класс цвета её перекрашивает.

```html
<div class="border border-primary radius-surface p-3">Выбранный тариф</div>
<input class="border-1 border-outline hover:border-on-surface-variant focus:border-primary">
```

### Рамка, которая не сдвигает соседей

Если рамка появляется только в состоянии, задайте её заранее прозрачной:
размер элемента не изменится.

```html
<button class="border-2 border-transparent hover:border-primary">Тариф</button>
```

## Ограничения

- Префиксов ширины экрана у семейства нет; есть состояния `hover:`, `focus:`
  и `active:`.
- Цвет рамки не сообщает статус программам экранного доступа: ошибку поля
  связывайте с текстом сообщения.

## См. также

- [Толщина границы](/ru/utilities/border/border-width/)
- [Стиль границы](/ru/utilities/border/border-style/)
- [Скругление границы](/ru/utilities/border/border-radius/)
- [Границы](/ru/guide/size-and-type/borders-and-radii/#границы)
