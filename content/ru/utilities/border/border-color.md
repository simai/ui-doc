---
title: "Цвет границы"
description: "Окрашивает рамку элемента цветовой ролью темы, чтобы она подстраивалась под светлую и тёмную тему."
---

# Цвет границы

Классы `border-{цвет}` задают `border-color` через цветовые роли и палитры
темы. Берите `border-outline-variant` для обычных разделительных рамок,
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

### Палитра

Цвета палитры заданы числом и не зависят от темы.

:::example {id="utilities/border/border-color-palette" label="Палитра"}
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
| `border-white` | `border-color: rgb(255, 255, 255)` | — |
| `border-black` | `border-color: rgb(0, 0, 0)` | — |
| `border-gray` | `border-color: rgb(106, 115, 125)` | — |
| `border-gray-0` | `border-color: rgb(250, 251, 252)` | — |
| `border-gray-1` | `border-color: rgb(246, 248, 250)` | — |
| `border-gray-2` | `border-color: rgb(225, 228, 232)` | — |
| `border-gray-3` | `border-color: rgb(209, 213, 218)` | — |
| `border-gray-4` | `border-color: rgb(149, 157, 165)` | — |
| `border-gray-5` | `border-color: rgb(106, 115, 125)` | — |
| `border-gray-6` | `border-color: rgb(88, 96, 105)` | — |
| `border-gray-7` | `border-color: rgb(68, 77, 86)` | — |
| `border-gray-8` | `border-color: rgb(47, 54, 61)` | — |
| `border-gray-9` | `border-color: rgb(36, 41, 46)` | — |
| `border-red` | `border-color: rgb(215, 58, 73)` | — |
| `border-red-0` | `border-color: rgb(255, 238, 240)` | — |
| `border-red-1` | `border-color: rgb(255, 220, 224)` | — |
| `border-red-2` | `border-color: rgb(253, 174, 183)` | — |
| `border-red-3` | `border-color: rgb(249, 117, 131)` | — |
| `border-red-4` | `border-color: rgb(234, 74, 90)` | — |
| `border-red-5` | `border-color: rgb(215, 58, 73)` | — |
| `border-red-6` | `border-color: rgb(203, 36, 49)` | — |
| `border-red-7` | `border-color: rgb(179, 29, 40)` | — |
| `border-red-8` | `border-color: rgb(158, 28, 35)` | — |
| `border-red-9` | `border-color: rgb(134, 24, 29)` | — |
| `border-orange` | `border-color: rgb(246, 106, 10)` | — |
| `border-orange-0` | `border-color: rgb(255, 248, 242)` | — |
| `border-orange-1` | `border-color: rgb(255, 235, 218)` | — |
| `border-orange-2` | `border-color: rgb(255, 209, 172)` | — |
| `border-orange-3` | `border-color: rgb(255, 171, 112)` | — |
| `border-orange-4` | `border-color: rgb(251, 133, 50)` | — |
| `border-orange-5` | `border-color: rgb(246, 106, 10)` | — |
| `border-orange-6` | `border-color: rgb(227, 98, 9)` | — |
| `border-orange-7` | `border-color: rgb(209, 87, 4)` | — |
| `border-orange-8` | `border-color: rgb(194, 78, 0)` | — |
| `border-orange-9` | `border-color: rgb(160, 65, 0)` | — |
| `border-yellow` | `border-color: rgb(255, 211, 61)` | — |
| `border-yellow-0` | `border-color: rgb(255, 253, 239)` | — |
| `border-yellow-1` | `border-color: rgb(255, 251, 221)` | — |
| `border-yellow-2` | `border-color: rgb(255, 245, 177)` | — |
| `border-yellow-3` | `border-color: rgb(255, 234, 127)` | — |
| `border-yellow-4` | `border-color: rgb(255, 223, 93)` | — |
| `border-yellow-5` | `border-color: rgb(255, 211, 61)` | — |
| `border-yellow-6` | `border-color: rgb(249, 197, 19)` | — |
| `border-yellow-7` | `border-color: rgb(219, 171, 9)` | — |
| `border-yellow-8` | `border-color: rgb(176, 136, 0)` | — |
| `border-yellow-9` | `border-color: rgb(115, 92, 15)` | — |
| `border-green` | `border-color: rgb(40, 167, 69)` | — |
| `border-green-0` | `border-color: rgb(240, 255, 244)` | — |
| `border-green-1` | `border-color: rgb(220, 255, 228)` | — |
| `border-green-2` | `border-color: rgb(190, 245, 203)` | — |
| `border-green-3` | `border-color: rgb(133, 232, 157)` | — |
| `border-green-4` | `border-color: rgb(52, 208, 88)` | — |
| `border-green-5` | `border-color: rgb(40, 167, 69)` | — |
| `border-green-6` | `border-color: rgb(34, 134, 58)` | — |
| `border-green-7` | `border-color: rgb(23, 111, 44)` | — |
| `border-green-8` | `border-color: rgb(22, 92, 38)` | — |
| `border-green-9` | `border-color: rgb(20, 70, 32)` | — |
| `border-blue` | `border-color: rgb(3, 102, 214)` | — |
| `border-blue-0` | `border-color: rgb(241, 248, 255)` | — |
| `border-blue-1` | `border-color: rgb(219, 237, 255)` | — |
| `border-blue-2` | `border-color: rgb(200, 225, 255)` | — |
| `border-blue-3` | `border-color: rgb(121, 184, 255)` | — |
| `border-blue-4` | `border-color: rgb(33, 136, 255)` | — |
| `border-blue-5` | `border-color: rgb(3, 102, 214)` | — |
| `border-blue-6` | `border-color: rgb(0, 92, 197)` | — |
| `border-blue-7` | `border-color: rgb(4, 66, 137)` | — |
| `border-blue-8` | `border-color: rgb(3, 47, 98)` | — |
| `border-blue-9` | `border-color: rgb(5, 38, 76)` | — |
| `border-purple` | `border-color: rgb(111, 66, 193)` | — |
| `border-purple-0` | `border-color: rgb(245, 240, 255)` | — |
| `border-purple-1` | `border-color: rgb(230, 220, 253)` | — |
| `border-purple-2` | `border-color: rgb(209, 188, 249)` | — |
| `border-purple-3` | `border-color: rgb(179, 146, 240)` | — |
| `border-purple-4` | `border-color: rgb(138, 99, 210)` | — |
| `border-purple-5` | `border-color: rgb(111, 66, 193)` | — |
| `border-purple-6` | `border-color: rgb(90, 50, 163)` | — |
| `border-purple-7` | `border-color: rgb(76, 40, 136)` | — |
| `border-purple-8` | `border-color: rgb(58, 29, 110)` | — |
| `border-purple-9` | `border-color: rgb(41, 19, 78)` | — |
| `border-pink` | `border-color: rgb(234, 74, 170)` | — |
| `border-pink-0` | `border-color: rgb(255, 238, 248)` | — |
| `border-pink-1` | `border-color: rgb(254, 219, 240)` | — |
| `border-pink-2` | `border-color: rgb(249, 179, 221)` | — |
| `border-pink-3` | `border-color: rgb(246, 146, 206)` | — |
| `border-pink-4` | `border-color: rgb(236, 108, 185)` | — |
| `border-pink-5` | `border-color: rgb(234, 74, 170)` | — |
| `border-pink-6` | `border-color: rgb(208, 53, 146)` | — |
| `border-pink-7` | `border-color: rgb(185, 58, 134)` | — |
| `border-pink-8` | `border-color: rgb(153, 48, 111)` | — |
| `border-pink-9` | `border-color: rgb(109, 34, 79)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `active:`, `focus:`, `hover:`. Например: `active:border-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

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

- Цвета палитры одинаковы в обеих темах: светлые ступени теряются на светлом
  фоне, тёмные — на тёмном.
- Префиксов ширины экрана у семейства нет; есть состояния `hover:`, `focus:`
  и `active:`.
- Цвет рамки не сообщает статус программам экранного доступа: ошибку поля
  связывайте с текстом сообщения.

## См. также

- [Толщина границы](/ru/utilities/border/border-width/)
- [Стиль границы](/ru/utilities/border/border-style/)
- [Скругление границы](/ru/utilities/border/border-radius/)
- [Границы](/ru/guide/size-and-type/borders-and-radii/#границы)
