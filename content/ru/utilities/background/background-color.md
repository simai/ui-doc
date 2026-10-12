---
title: "Цвет фона"
description: "Заливает элемент цветовой ролью темы, чтобы фон сам подстраивался под светлую и тёмную тему."
---

# Цвет фона

Классы `bg-*` задают `background-color` через цветовые роли и палитры темы.
Берите роль (`bg-surface-container`, `bg-primary`, `bg-error-container`), когда
цвет несёт смысл, и палитру (`bg-blue-5`), только когда нужен конкретный
оттенок вне ролей.

## Пример

### Поверхности

Ступени поверхности от `bg-surface-0` до `bg-surface-4`, мягкий контейнер и
инверсная поверхность. `bg-surface` — то же, что `bg-surface-1`.

:::example {id="utilities/background/background-color" label="Поверхности"}
:::

### Заливка акцентом и статусом

Насыщенная заливка роли; текст на ней берёт парную роль `color-on-*`.

:::example {id="utilities/background/background-color-accent" label="bg-primary … bg-success и bg-disable"}
:::

### Контейнеры

Мягкая заливка роли для плашек и выделенных блоков; текст на ней —
`color-on-*-container`.

:::example {id="utilities/background/background-color-container" label="bg-*-container"}
:::

### Полупрозрачные слои

`-transparent-select` — лёгкий слой выбранной строки или пункта,
`-transparent-overlay` — плотный слой поверх содержимого.

:::example {id="utilities/background/background-color-transparent" label="bg-*-transparent-select и bg-*-transparent-overlay"}
:::

### Состояния

Классы `hover:` и `active:` меняют оттенок той же роли при наведении и
нажатии. Наведите указатель на кнопку, нажмите и удерживайте её.

:::example {id="utilities/background/background-color-states" label="hover: и active:"}
:::

### Палитра и служебные значения

Цвета палитры заданы числом и не зависят от темы. `bg-current` берёт цвет
текста элемента, `bg-transparent` убирает заливку.

:::example {id="utilities/background/background-color-palette" label="Палитра, bg-current, bg-transparent, bg-on-surface"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `bg-{значение}` | `background-color: var(--sf-{значение})` | `transparent`, `current`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-surface-{значение}` | `background-color: var(--sf-surface-{значение})` | `0`, `1`, `2`, `3`, `4`, `inverse` |
| `bg-surface` | `background-color: var(--sf-surface-1)` | — |
| `bg-surface-inverse-fixed` | `background-color: var(--sf-surface-inverse-fixed)` | — |
| `bg-{значение}-container` | `background-color: var(--sf-{значение}-container)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-on-surface` | `background-color: var(--sf-on-surface)` | — |
| `bg-on-surface-variant` | `background-color: var(--sf-on-surface-variant)` | — |
| `bg-{значение}-transparent-select` | `background-color: var(--sf-{значение}-transparent-select)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-{значение}-transparent-overlay` | `background-color: var(--sf-{значение}-transparent-overlay)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `active:bg-{значение}-container` (`.active:bg-{значение}-container:active`) | `background-color: var(--sf-{значение}-container-active)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `active:bg-on-surface` (`.active:bg-on-surface:active`) | `background-color: var(--sf-on-surface-active)` | — |
| `active:bg-{значение}-transparent` (`.active:bg-{значение}-transparent:active`) | `background-color: var(--sf-{значение}-transparent-active)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `active:bg-{значение}` (`.active:bg-{значение}:active`) | `background-color: var(--sf-{значение}-active)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `hover:bg-{значение}-container` (`.hover:bg-{значение}-container:hover`) | `background-color: var(--sf-{значение}-container-hover)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `hover:bg-on-surface` (`.hover:bg-on-surface:hover`) | `background-color: var(--sf-on-surface-hover)` | — |
| `hover:bg-{значение}-transparent` (`.hover:bg-{значение}-transparent:hover`) | `background-color: var(--sf-{значение}-transparent-hover)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `hover:bg-{значение}` (`.hover:bg-{значение}:hover`) | `background-color: var(--sf-{значение}-hover)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-white` | `background-color: rgb(255, 255, 255)` | — |
| `bg-black` | `background-color: rgb(0, 0, 0)` | — |
| `bg-gray` | `background-color: rgb(106, 115, 125)` | — |
| `bg-gray-0` | `background-color: rgb(250, 251, 252)` | — |
| `bg-gray-1` | `background-color: rgb(246, 248, 250)` | — |
| `bg-gray-2` | `background-color: rgb(225, 228, 232)` | — |
| `bg-gray-3` | `background-color: rgb(209, 213, 218)` | — |
| `bg-gray-4` | `background-color: rgb(149, 157, 165)` | — |
| `bg-gray-5` | `background-color: rgb(106, 115, 125)` | — |
| `bg-gray-6` | `background-color: rgb(88, 96, 105)` | — |
| `bg-gray-7` | `background-color: rgb(68, 77, 86)` | — |
| `bg-gray-8` | `background-color: rgb(47, 54, 61)` | — |
| `bg-gray-9` | `background-color: rgb(36, 41, 46)` | — |
| `bg-red` | `background-color: rgb(215, 58, 73)` | — |
| `bg-red-0` | `background-color: rgb(255, 238, 240)` | — |
| `bg-red-1` | `background-color: rgb(255, 220, 224)` | — |
| `bg-red-2` | `background-color: rgb(253, 174, 183)` | — |
| `bg-red-3` | `background-color: rgb(249, 117, 131)` | — |
| `bg-red-4` | `background-color: rgb(234, 74, 90)` | — |
| `bg-red-5` | `background-color: rgb(215, 58, 73)` | — |
| `bg-red-6` | `background-color: rgb(203, 36, 49)` | — |
| `bg-red-7` | `background-color: rgb(179, 29, 40)` | — |
| `bg-red-8` | `background-color: rgb(158, 28, 35)` | — |
| `bg-red-9` | `background-color: rgb(134, 24, 29)` | — |
| `bg-orange` | `background-color: rgb(246, 106, 10)` | — |
| `bg-orange-0` | `background-color: rgb(255, 248, 242)` | — |
| `bg-orange-1` | `background-color: rgb(255, 235, 218)` | — |
| `bg-orange-2` | `background-color: rgb(255, 209, 172)` | — |
| `bg-orange-3` | `background-color: rgb(255, 171, 112)` | — |
| `bg-orange-4` | `background-color: rgb(251, 133, 50)` | — |
| `bg-orange-5` | `background-color: rgb(246, 106, 10)` | — |
| `bg-orange-6` | `background-color: rgb(227, 98, 9)` | — |
| `bg-orange-7` | `background-color: rgb(209, 87, 4)` | — |
| `bg-orange-8` | `background-color: rgb(194, 78, 0)` | — |
| `bg-orange-9` | `background-color: rgb(160, 65, 0)` | — |
| `bg-yellow` | `background-color: rgb(255, 211, 61)` | — |
| `bg-yellow-0` | `background-color: rgb(255, 253, 239)` | — |
| `bg-yellow-1` | `background-color: rgb(255, 251, 221)` | — |
| `bg-yellow-2` | `background-color: rgb(255, 245, 177)` | — |
| `bg-yellow-3` | `background-color: rgb(255, 234, 127)` | — |
| `bg-yellow-4` | `background-color: rgb(255, 223, 93)` | — |
| `bg-yellow-5` | `background-color: rgb(255, 211, 61)` | — |
| `bg-yellow-6` | `background-color: rgb(249, 197, 19)` | — |
| `bg-yellow-7` | `background-color: rgb(219, 171, 9)` | — |
| `bg-yellow-8` | `background-color: rgb(176, 136, 0)` | — |
| `bg-yellow-9` | `background-color: rgb(115, 92, 15)` | — |
| `bg-green` | `background-color: rgb(40, 167, 69)` | — |
| `bg-green-0` | `background-color: rgb(240, 255, 244)` | — |
| `bg-green-1` | `background-color: rgb(220, 255, 228)` | — |
| `bg-green-2` | `background-color: rgb(190, 245, 203)` | — |
| `bg-green-3` | `background-color: rgb(133, 232, 157)` | — |
| `bg-green-4` | `background-color: rgb(52, 208, 88)` | — |
| `bg-green-5` | `background-color: rgb(40, 167, 69)` | — |
| `bg-green-6` | `background-color: rgb(34, 134, 58)` | — |
| `bg-green-7` | `background-color: rgb(23, 111, 44)` | — |
| `bg-green-8` | `background-color: rgb(22, 92, 38)` | — |
| `bg-green-9` | `background-color: rgb(20, 70, 32)` | — |
| `bg-blue` | `background-color: rgb(3, 102, 214)` | — |
| `bg-blue-0` | `background-color: rgb(241, 248, 255)` | — |
| `bg-blue-1` | `background-color: rgb(219, 237, 255)` | — |
| `bg-blue-2` | `background-color: rgb(200, 225, 255)` | — |
| `bg-blue-3` | `background-color: rgb(121, 184, 255)` | — |
| `bg-blue-4` | `background-color: rgb(33, 136, 255)` | — |
| `bg-blue-5` | `background-color: rgb(3, 102, 214)` | — |
| `bg-blue-6` | `background-color: rgb(0, 92, 197)` | — |
| `bg-blue-7` | `background-color: rgb(4, 66, 137)` | — |
| `bg-blue-8` | `background-color: rgb(3, 47, 98)` | — |
| `bg-blue-9` | `background-color: rgb(5, 38, 76)` | — |
| `bg-purple` | `background-color: rgb(111, 66, 193)` | — |
| `bg-purple-0` | `background-color: rgb(245, 240, 255)` | — |
| `bg-purple-1` | `background-color: rgb(230, 220, 253)` | — |
| `bg-purple-2` | `background-color: rgb(209, 188, 249)` | — |
| `bg-purple-3` | `background-color: rgb(179, 146, 240)` | — |
| `bg-purple-4` | `background-color: rgb(138, 99, 210)` | — |
| `bg-purple-5` | `background-color: rgb(111, 66, 193)` | — |
| `bg-purple-6` | `background-color: rgb(90, 50, 163)` | — |
| `bg-purple-7` | `background-color: rgb(76, 40, 136)` | — |
| `bg-purple-8` | `background-color: rgb(58, 29, 110)` | — |
| `bg-purple-9` | `background-color: rgb(41, 19, 78)` | — |
| `bg-pink` | `background-color: rgb(234, 74, 170)` | — |
| `bg-pink-0` | `background-color: rgb(255, 238, 248)` | — |
| `bg-pink-1` | `background-color: rgb(254, 219, 240)` | — |
| `bg-pink-2` | `background-color: rgb(249, 179, 221)` | — |
| `bg-pink-3` | `background-color: rgb(246, 146, 206)` | — |
| `bg-pink-4` | `background-color: rgb(236, 108, 185)` | — |
| `bg-pink-5` | `background-color: rgb(234, 74, 170)` | — |
| `bg-pink-6` | `background-color: rgb(208, 53, 146)` | — |
| `bg-pink-7` | `background-color: rgb(185, 58, 134)` | — |
| `bg-pink-8` | `background-color: rgb(153, 48, 111)` | — |
| `bg-pink-9` | `background-color: rgb(109, 34, 79)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `active:`, `hover:`. Например: `active:bg-surface-container`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

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
| `--sf-surface-container-active` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-on-surface-active` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-80))` |
| `--sf-surface-transparent-active` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` |
| `--sf-primary-active` | `light-dark(var(--sf-primary-30), var(--sf-primary-90))` |
| `--sf-primary-container-active` | `light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))` |
| `--sf-primary-transparent-active` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-90--alfa-12))` |
| `--sf-secondary-active` | `light-dark(var(--sf-secondary-30), var(--sf-secondary-90))` |
| `--sf-secondary-container-active` | `light-dark(var(--sf-secondary-50--alfa-20), var(--sf-secondary-50--alfa-32))` |
| `--sf-secondary-transparent-active` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-90--alfa-12))` |
| `--sf-tertiary-active` | `light-dark(var(--sf-tertiary-30), var(--sf-tertiary-90))` |
| `--sf-tertiary-container-active` | `light-dark(var(--sf-tertiary-50--alfa-20), var(--sf-tertiary-50--alfa-32))` |
| `--sf-tertiary-transparent-active` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-90--alfa-12))` |
| `--sf-error-active` | `light-dark(var(--sf-error-30), var(--sf-error-90))` |
| `--sf-error-container-active` | `light-dark(var(--sf-error-50--alfa-20), var(--sf-error-50--alfa-32))` |
| `--sf-error-transparent-active` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-90--alfa-12))` |
| `--sf-warning-active` | `light-dark(var(--sf-warning-30), var(--sf-warning-90))` |
| `--sf-warning-container-active` | `light-dark(var(--sf-warning-50--alfa-20), var(--sf-warning-50--alfa-32))` |
| `--sf-warning-transparent-active` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-90--alfa-12))` |
| `--sf-success-active` | `light-dark(var(--sf-success-30), var(--sf-success-90))` |
| `--sf-success-container-active` | `light-dark(var(--sf-success-50--alfa-20), var(--sf-success-50--alfa-32))` |
| `--sf-success-transparent-active` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-90--alfa-12))` |
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

### Как выбрать

| Задача | Классы |
| :--- | :--- |
| Фон страницы и крупных блоков | `bg-surface`, `bg-surface-0` … `bg-surface-4` |
| Мягкая подложка без смысла | `bg-surface-container` |
| Главное действие, акцент | `bg-primary`, `bg-secondary`, `bg-tertiary` |
| Статус | `bg-error`, `bg-warning`, `bg-success` |
| Плашка статуса или акцента | `bg-*-container` |
| Выбранная строка, слой поверх | `bg-*-transparent-select`, `bg-*-transparent-overlay` |
| Тёмная плашка на светлой теме и наоборот | `bg-surface-inverse` |
| Цвет вне ролей | палитра: `bg-red-5`, `bg-blue-2` … |

### Парный цвет текста

Заливке роли нужен текст своей пары, иначе контраст не гарантирован:

| Фон | Текст |
| :--- | :--- |
| `bg-surface*`, `bg-surface-container` | `color-on-surface`, `color-on-surface-variant` |
| `bg-primary` | `color-on-primary` |
| `bg-primary-container` | `color-on-primary-container` |
| `bg-surface-inverse` | `color-on-surface-inverse` |
| `bg-disable` | `color-on-disable` |

```html
<div class="bg-error-container color-on-error-container p-2 radius-ui">
  Платёж не прошёл
</div>
```

### Состояния кнопки

Класс состояния не заменяет основной: `hover:bg-primary` даёт оттенок
наведения роли `primary`, поэтому его ставят рядом с `bg-primary`. Для
кнопки без заливки основного класса нет — заливка появляется только при
наведении.

```html
<button class="bg-primary color-on-primary hover:bg-primary active:bg-primary">Сохранить</button>
<button class="color-primary hover:bg-primary-transparent active:bg-primary-transparent">Отмена</button>
```

`hover:` и `active:` есть у ролей `surface-container`, `on-surface`,
`surface-transparent` и у каждой акцентной и статусной роли в трёх видах:
заливка, `-container`, `-transparent`.

## Ограничения

- Цвета палитры (`bg-white`, `bg-gray-*`, `bg-blue-*` …) одинаковы в обеих
  темах: светлые ступени теряются на светлом фоне, тёмные — на тёмном.
- Префиксов ширины экрана у семейства нет.
- Цвет фона не сообщает смысл программам экранного доступа: статус
  дублируйте текстом или значком.

## См. также

- [Цвет текста](/ru/utilities/text-formatting/text-color/)
- [Брендовые цвета фона](/ru/utilities/background/background-color-brand/)
- [Цветовые роли](/ru/guide/fundamentals/colour-roles/)
- [Высота](/ru/utilities/shadows/elevation/)
