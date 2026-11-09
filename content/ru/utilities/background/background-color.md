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
| `bg-{значение}` | `background-color: var(--sf-{значение})` | `transparent`, `current`, `white`, `black` |
| `bg-surface-{значение}` | `background-color: var(--sf-surface-{значение})` | `2`, `3`, `4`, `inverse`, `veil`, `disabled` |
| `bg-surface` | `background-color: var(--sf-surface-1); --sf-surface-place: var(--sf-surface-area); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: light-dark(var(--sf-neutral-40), var(--sf-neutral-60)); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-inverse-fixed` | `background-color: var(--sf-surface-inverse-fixed)` | — |
| `bg-surface-container` | `background-color: var(--sf-surface-container); --sf-on-surface-variant: var(--sf-on-surface-container--variant)` | — |
| `bg-on-surface` | `background-color: var(--sf-on-surface)` | — |
| `bg-on-surface-variant` | `background-color: var(--sf-on-surface-variant)` | — |
| `bg-{значение}` | `background-color: var(--sf-{значение}); --sf-surface-place: var(--sf-{значение}); --sf-on-surface: var(--sf-on-{значение}); --sf-on-surface-variant: light-dark(var(--sf-white--alfa-80), var(--sf-{значение}-20--alfa-80)); --sf-on-surface-container-variant: light-dark(var(--sf-white--alfa-80), var(--sf-{значение}-20--alfa-80)); --sf-surface-state-hover: light-dark(var(--sf-white--alfa-4), var(--sf-{значение}-20--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-white--alfa-8), var(--sf-{значение}-20--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-white--alfa-12), var(--sf-{значение}-20--alfa-12)); --sf-surface-container: light-dark(var(--sf-white--alfa-12), var(--sf-{значение}-20--alfa-12)); --sf-surface-container-hover: light-dark(var(--sf-white--alfa-16), var(--sf-{значение}-20--alfa-16)); --sf-surface-container-active: light-dark(var(--sf-white--alfa-20), var(--sf-{значение}-20--alfa-20)); --sf-outline: light-dark(var(--sf-white--alfa-64), var(--sf-{значение}-20--alfa-64)); --sf-outline-variant: light-dark(var(--sf-white--alfa-24), var(--sf-{значение}-20--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-white--alfa-12), var(--sf-{значение}-20--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-white--alfa-64), var(--sf-{значение}-20--alfa-64)); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `bg-{значение}-container` | `background-color: var(--sf-{значение}-container); --sf-surface-place: var(--sf-{значение}-container); --sf-surface-container: var(--sf-{значение}-container); --sf-surface-container-hover: var(--sf-{значение}-container-hover); --sf-surface-container-active: var(--sf-{значение}-container-active); --sf-surface-state-hover: var(--sf-{значение}-state-hover); --sf-surface-state-select: var(--sf-{значение}-state-select); --sf-surface-state-active: var(--sf-{значение}-state-active); --sf-outline: var(--sf-{значение}-outline); --sf-outline-variant: var(--sf-{значение}-container-strong); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `bg-{значение}-state-select` | `background-color: var(--sf-{значение}-state-select)` | `info`, `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-{значение}-container-strong` | `background-color: var(--sf-{значение}-container-strong)` | `info`, `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-surface-page` | `background-color: var(--sf-surface-page); --sf-surface-place: var(--sf-surface-page); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: light-dark(var(--sf-neutral-40), var(--sf-neutral-60)); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-area` | `background-color: var(--sf-surface-area); --sf-surface-place: var(--sf-surface-area); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: light-dark(var(--sf-neutral-40), var(--sf-neutral-60)); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-card` | `background-color: var(--sf-surface-card); --sf-surface-place: var(--sf-surface-card); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-card-variant); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-popup` | `background-color: var(--sf-surface-popup); --sf-surface-place: var(--sf-surface-popup); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-popup-variant); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-popup-nested` | `background-color: var(--sf-surface-popup-nested); --sf-surface-place: var(--sf-surface-popup-nested); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-popup-nested-variant); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-scrim` | `background-color: var(--sf-scrim-color)` | — |
| `active:bg-{значение}-container` (`.active:bg-{значение}-container:active`) | `background-color: var(--sf-{значение}-container-active)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `active:bg-on-surface` (`.active:bg-on-surface:active`) | `background-color: var(--sf-on-surface-active)` | — |
| `active:bg-{значение}-transparent` (`.active:bg-{значение}-transparent:active`) | `background-color: var(--sf-{значение}-transparent-active)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `active:bg-{значение}` (`.active:bg-{значение}:active`) | `background-color: var(--sf-{значение}-active)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `active:bg-{значение}-state` (`.active:bg-{значение}-state:active`) | `background-color: var(--sf-{значение}-state-active)` | `info`, `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `hover:bg-{значение}-container` (`.hover:bg-{значение}-container:hover`) | `background-color: var(--sf-{значение}-container-hover)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `hover:bg-on-surface` (`.hover:bg-on-surface:hover`) | `background-color: var(--sf-on-surface-hover)` | — |
| `hover:bg-{значение}-transparent` (`.hover:bg-{значение}-transparent:hover`) | `background-color: var(--sf-{значение}-transparent-hover)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `hover:bg-{значение}` (`.hover:bg-{значение}:hover`) | `background-color: var(--sf-{значение}-hover)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `hover:bg-{значение}-state` (`.hover:bg-{значение}-state:hover`) | `background-color: var(--sf-{значение}-state-hover)` | `info`, `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-gray` | `background-color: var(--sf-gray-50)` | — |
| `bg-{значение}-0` | `background-color: var(--sf-{значение}-98)` | `gray`, `orange`, `yellow`, `green`, `blue` |
| `bg-{значение}-1` | `background-color: var(--sf-{значение}-98)` | `gray`, `yellow`, `green` |
| `bg-{значение}-2` | `background-color: var(--sf-{значение}-90)` | `gray`, `green`, `blue` |
| `bg-gray-3` | `background-color: var(--sf-gray-85)` | — |
| `bg-{значение}-4` | `background-color: var(--sf-{значение}-60)` | `gray`, `red`, `blue`, `pink` |
| `bg-gray-5` | `background-color: var(--sf-gray-50)` | — |
| `bg-{значение}-6` | `background-color: var(--sf-{значение}-40)` | `gray`, `red`, `blue` |
| `bg-gray-7` | `background-color: var(--sf-gray-30)` | — |
| `bg-{значение}-8` | `background-color: var(--sf-{значение}-20)` | `gray`, `blue`, `purple` |
| `bg-{значение}-9` | `background-color: var(--sf-{значение}-15)` | `gray`, `blue`, `purple` |
| `bg-red` | `background-color: var(--sf-red-50)` | — |
| `bg-{значение}-0` | `background-color: var(--sf-{значение}-95)` | `red`, `purple`, `pink` |
| `bg-{значение}-1` | `background-color: var(--sf-{значение}-90)` | `red`, `purple`, `pink` |
| `bg-{значение}-2` | `background-color: var(--sf-{значение}-80)` | `red`, `purple`, `pink` |
| `bg-{значение}-3` | `background-color: var(--sf-{значение}-70)` | `red`, `blue`, `purple`, `pink` |
| `bg-red-5` | `background-color: var(--sf-red-50)` | — |
| `bg-red-7` | `background-color: var(--sf-red-40)` | — |
| `bg-red-8` | `background-color: var(--sf-red-35)` | — |
| `bg-red-9` | `background-color: var(--sf-red-30)` | — |
| `bg-{значение}` | `background-color: var(--sf-{значение}-60)` | `orange`, `green`, `pink` |
| `bg-orange-1` | `background-color: var(--sf-orange-95)` | — |
| `bg-orange-2` | `background-color: var(--sf-orange-85)` | — |
| `bg-orange-3` | `background-color: var(--sf-orange-80)` | — |
| `bg-orange-4` | `background-color: var(--sf-orange-70)` | — |
| `bg-{значение}-5` | `background-color: var(--sf-{значение}-60)` | `orange`, `green`, `pink` |
| `bg-orange-6` | `background-color: var(--sf-orange-60)` | — |
| `bg-orange-7` | `background-color: var(--sf-orange-50)` | — |
| `bg-orange-8` | `background-color: var(--sf-orange-50)` | — |
| `bg-orange-9` | `background-color: var(--sf-orange-40)` | — |
| `bg-yellow` | `background-color: var(--sf-yellow-85)` | — |
| `bg-yellow-2` | `background-color: var(--sf-yellow-95)` | — |
| `bg-yellow-3` | `background-color: var(--sf-yellow-90)` | — |
| `bg-yellow-4` | `background-color: var(--sf-yellow-90)` | — |
| `bg-yellow-5` | `background-color: var(--sf-yellow-85)` | — |
| `bg-yellow-6` | `background-color: var(--sf-yellow-80)` | — |
| `bg-yellow-7` | `background-color: var(--sf-yellow-70)` | — |
| `bg-yellow-8` | `background-color: var(--sf-yellow-60)` | — |
| `bg-yellow-9` | `background-color: var(--sf-yellow-40)` | — |
| `bg-green-3` | `background-color: var(--sf-green-85)` | — |
| `bg-green-4` | `background-color: var(--sf-green-70)` | — |
| `bg-green-6` | `background-color: var(--sf-green-50)` | — |
| `bg-green-7` | `background-color: var(--sf-green-40)` | — |
| `bg-green-8` | `background-color: var(--sf-green-35)` | — |
| `bg-green-9` | `background-color: var(--sf-green-25)` | — |
| `bg-blue` | `background-color: var(--sf-blue-40)` | — |
| `bg-blue-1` | `background-color: var(--sf-blue-95)` | — |
| `bg-blue-5` | `background-color: var(--sf-blue-40)` | — |
| `bg-blue-7` | `background-color: var(--sf-blue-30)` | — |
| `bg-purple` | `background-color: var(--sf-purple-40)` | — |
| `bg-purple-4` | `background-color: var(--sf-purple-50)` | — |
| `bg-purple-5` | `background-color: var(--sf-purple-40)` | — |
| `bg-purple-6` | `background-color: var(--sf-purple-30)` | — |
| `bg-purple-7` | `background-color: var(--sf-purple-25)` | — |
| `bg-pink-6` | `background-color: var(--sf-pink-50)` | — |
| `bg-pink-7` | `background-color: var(--sf-pink-50)` | — |
| `bg-pink-8` | `background-color: var(--sf-pink-40)` | — |
| `bg-pink-9` | `background-color: var(--sf-pink-25)` | — |

Прежние имена работают до 2027-01-01: `bg-disable` → `bg-surface-disabled`, `bg-error-transparent-overlay` → `bg-error-container-strong`, `bg-error-transparent-select` → `bg-error-state-select`, `bg-primary-transparent-overlay` → `bg-primary-container-strong`, `bg-primary-transparent-select` → `bg-primary-state-select`, `bg-secondary-transparent-overlay` → `bg-secondary-container-strong`, `bg-secondary-transparent-select` → `bg-secondary-state-select`, `bg-success-transparent-overlay` → `bg-success-container-strong`, `bg-success-transparent-select` → `bg-success-state-select`, `bg-surface-0` → `bg-surface-page`, `bg-surface-1` → `bg-surface-area`, `bg-surface-transparent-overlay` → `bg-surface-container-strong`, `bg-surface-transparent-select` → `bg-surface-state-select`, `bg-tertiary-transparent-overlay` → `bg-tertiary-container-strong`, `bg-tertiary-transparent-select` → `bg-tertiary-state-select`, `bg-warning-transparent-overlay` → `bg-warning-container-strong`, `bg-warning-transparent-select` → `bg-warning-state-select`. Все замены — на странице [Как обновить проект](/ru/guide/connection/updating/).

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `active:`, `hover:`. Например: `active:bg-surface-container`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-surface-0` | `var(--sf-surface-page)` |
| `--sf-surface-1` | `var(--sf-surface-area)` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-surface-transparent-overlay` | `var(--sf-surface-container-strong)` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-primary-transparent-select` | `var(--sf-primary-state-select)` |
| `--sf-primary-transparent-overlay` | `var(--sf-primary-container-strong)` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-secondary-transparent-select` | `var(--sf-secondary-state-select)` |
| `--sf-secondary-transparent-overlay` | `var(--sf-secondary-container-strong)` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-tertiary-transparent-select` | `var(--sf-tertiary-state-select)` |
| `--sf-tertiary-transparent-overlay` | `var(--sf-tertiary-container-strong)` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-error-container` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-50--alfa-24))` |
| `--sf-error-transparent-select` | `var(--sf-error-state-select)` |
| `--sf-error-transparent-overlay` | `var(--sf-error-container-strong)` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-warning-container` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-50--alfa-24))` |
| `--sf-warning-transparent-select` | `var(--sf-warning-state-select)` |
| `--sf-warning-transparent-overlay` | `var(--sf-warning-container-strong)` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-success-container` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-50--alfa-24))` |
| `--sf-success-transparent-select` | `var(--sf-success-state-select)` |
| `--sf-success-transparent-overlay` | `var(--sf-success-container-strong)` |
| `--sf-info` | `light-dark(var(--sf-info-40), var(--sf-info-80))` |
| `--sf-info-container` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-50--alfa-24))` |
| `--sf-info-state-select` | `light-dark(var(--sf-info-50--alfa-8), var(--sf-info-90--alfa-8))` |
| `--sf-info-container-strong` | `light-dark(var(--sf-info-50--alfa-24), var(--sf-info-90--alfa-24))` |
| `--sf-surface-page` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-area` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-card` | `light-dark(var(--sf-surface-page), var(--sf-surface-2))` |
| `--sf-surface-popup` | `light-dark(var(--sf-surface-page), var(--sf-surface-4))` |
| `--sf-surface-popup-nested` | `light-dark(var(--sf-surface-page), var(--sf-surface-5))` |
| `--sf-surface-container-strong` | `light-dark(var(--sf-neutral-50--alfa-32), var(--sf-neutral-90--alfa-32))` |
| `--sf-surface-veil` | `light-dark(var(--sf-black--alfa-8), var(--sf-white--alfa-8))` |
| `--sf-scrim-color` | `var(--sf-black--alfa-64)` |
| `--sf-primary-state-select` | `light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-90--alfa-8))` |
| `--sf-primary-container-strong` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-secondary-state-select` | `light-dark(var(--sf-secondary-50--alfa-8), var(--sf-secondary-90--alfa-8))` |
| `--sf-secondary-container-strong` | `light-dark(var(--sf-secondary-50--alfa-24), var(--sf-secondary-90--alfa-24))` |
| `--sf-tertiary-state-select` | `light-dark(var(--sf-tertiary-50--alfa-8), var(--sf-tertiary-90--alfa-8))` |
| `--sf-tertiary-container-strong` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-error-state-select` | `light-dark(var(--sf-error-50--alfa-8), var(--sf-error-90--alfa-8))` |
| `--sf-error-container-strong` | `light-dark(var(--sf-error-50--alfa-24), var(--sf-error-90--alfa-24))` |
| `--sf-warning-state-select` | `light-dark(var(--sf-warning-50--alfa-8), var(--sf-warning-90--alfa-8))` |
| `--sf-warning-container-strong` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-success-state-select` | `light-dark(var(--sf-success-50--alfa-8), var(--sf-success-90--alfa-8))` |
| `--sf-success-container-strong` | `light-dark(var(--sf-success-50--alfa-24), var(--sf-success-90--alfa-24))` |
| `--sf-neutral-10` | `#1a1b1f` |
| `--sf-neutral-90` | `#e3e2e7` |
| `--sf-neutral-40` | `#5d5e63` |
| `--sf-neutral-60` | `#909095` |
| `--sf-neutral-35` | `#515257` |
| `--sf-neutral-85` | `#d4d4d9` |
| `--sf-neutral-50--alfa-4` | `rgba(118,119,124,0.03922)` |
| `--sf-neutral-90--alfa-4` | `rgba(227,226,231,0.03922)` |
| `--sf-neutral-50--alfa-8` | `rgba(118,119,124,0.07843)` |
| `--sf-neutral-90--alfa-8` | `rgba(227,226,231,0.07843)` |
| `--sf-neutral-50--alfa-12` | `rgba(118,119,124,0.12157)` |
| `--sf-neutral-90--alfa-12` | `rgba(227,226,231,0.12157)` |
| `--sf-neutral-50--alfa-16` | `rgba(118,119,124,0.16078)` |
| `--sf-neutral-90--alfa-16` | `rgba(227,226,231,0.16078)` |
| `--sf-neutral-50--alfa-20` | `rgba(118,119,124,0.2)` |
| `--sf-neutral-90--alfa-20` | `rgba(227,226,231,0.2)` |
| `--sf-neutral-50--alfa-24` | `rgba(118,119,124,0.23922)` |
| `--sf-neutral-90--alfa-24` | `rgba(227,226,231,0.23922)` |
| `--sf-neutral-50--alfa-80` | `rgba(118,119,124,0.8)` |
| `--sf-neutral-90--alfa-48` | `rgba(227,226,231,0.47843)` |
| `--sf-on-surface-card-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-on-surface-popup-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-on-surface-popup-nested-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-on-primary` | `light-dark(var(--sf-white), var(--sf-primary-20))` |
| `--sf-white--alfa-80` | `rgba(255,255,255,0.8)` |
| `--sf-primary-20--alfa-80` | `rgba(0,47,103,0.8)` |
| `--sf-white--alfa-4` | `rgba(255,255,255,0.03922)` |
| `--sf-primary-20--alfa-4` | `rgba(0,47,103,0.03922)` |
| `--sf-white--alfa-8` | `rgba(255,255,255,0.07843)` |
| `--sf-primary-20--alfa-8` | `rgba(0,47,103,0.07843)` |
| `--sf-white--alfa-12` | `rgba(255,255,255,0.12157)` |
| `--sf-primary-20--alfa-12` | `rgba(0,47,103,0.12157)` |
| `--sf-white--alfa-16` | `rgba(255,255,255,0.16078)` |
| `--sf-primary-20--alfa-16` | `rgba(0,47,103,0.16078)` |
| `--sf-white--alfa-20` | `rgba(255,255,255,0.2)` |
| `--sf-primary-20--alfa-20` | `rgba(0,47,103,0.2)` |
| `--sf-white--alfa-64` | `rgba(255,255,255,0.63922)` |
| `--sf-primary-20--alfa-64` | `rgba(0,47,103,0.63922)` |
| `--sf-white--alfa-24` | `rgba(255,255,255,0.23922)` |
| `--sf-primary-20--alfa-24` | `rgba(0,47,103,0.23922)` |
| `--sf-primary-container-hover` | `light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))` |
| `--sf-primary-container-active` | `light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))` |
| `--sf-primary-state-hover` | `light-dark(var(--sf-primary-50--alfa-4), var(--sf-primary-90--alfa-4))` |
| `--sf-primary-state-active` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-90--alfa-12))` |
| `--sf-primary-outline` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-on-secondary` | `light-dark(var(--sf-white), var(--sf-secondary-20))` |
| `--sf-secondary-20--alfa-80` | `rgba(37,48,71,0.8)` |
| `--sf-secondary-20--alfa-4` | `rgba(37,48,71,0.03922)` |
| `--sf-secondary-20--alfa-8` | `rgba(37,48,71,0.07843)` |
| `--sf-secondary-20--alfa-12` | `rgba(37,48,71,0.12157)` |
| `--sf-secondary-20--alfa-16` | `rgba(37,48,71,0.16078)` |
| `--sf-secondary-20--alfa-20` | `rgba(37,48,71,0.2)` |
| `--sf-secondary-20--alfa-64` | `rgba(37,48,71,0.63922)` |
| `--sf-secondary-20--alfa-24` | `rgba(37,48,71,0.23922)` |
| `--sf-secondary-container-hover` | `light-dark(var(--sf-secondary-50--alfa-16), var(--sf-secondary-50--alfa-28))` |
| `--sf-secondary-container-active` | `light-dark(var(--sf-secondary-50--alfa-20), var(--sf-secondary-50--alfa-32))` |
| `--sf-secondary-state-hover` | `light-dark(var(--sf-secondary-50--alfa-4), var(--sf-secondary-90--alfa-4))` |
| `--sf-secondary-state-active` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-90--alfa-12))` |
| `--sf-secondary-outline` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-on-tertiary` | `light-dark(var(--sf-white), var(--sf-tertiary-20))` |
| `--sf-tertiary-20--alfa-80` | `rgba(74,30,84,0.8)` |
| `--sf-tertiary-20--alfa-4` | `rgba(74,30,84,0.03922)` |
| `--sf-tertiary-20--alfa-8` | `rgba(74,30,84,0.07843)` |
| `--sf-tertiary-20--alfa-12` | `rgba(74,30,84,0.12157)` |
| `--sf-tertiary-20--alfa-16` | `rgba(74,30,84,0.16078)` |
| `--sf-tertiary-20--alfa-20` | `rgba(74,30,84,0.2)` |
| `--sf-tertiary-20--alfa-64` | `rgba(74,30,84,0.63922)` |
| `--sf-tertiary-20--alfa-24` | `rgba(74,30,84,0.23922)` |
| `--sf-tertiary-container-hover` | `light-dark(var(--sf-tertiary-50--alfa-16), var(--sf-tertiary-50--alfa-28))` |
| `--sf-tertiary-container-active` | `light-dark(var(--sf-tertiary-50--alfa-20), var(--sf-tertiary-50--alfa-32))` |
| `--sf-tertiary-state-hover` | `light-dark(var(--sf-tertiary-50--alfa-4), var(--sf-tertiary-90--alfa-4))` |
| `--sf-tertiary-state-active` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-90--alfa-12))` |
| `--sf-tertiary-outline` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-on-info` | `light-dark(var(--sf-white), var(--sf-info-20))` |
| `--sf-info-20--alfa-80` | `var(--sf-blue-20--alfa-80)` |
| `--sf-info-20--alfa-4` | `var(--sf-blue-20--alfa-4)` |
| `--sf-info-20--alfa-8` | `var(--sf-blue-20--alfa-8)` |
| `--sf-info-20--alfa-12` | `var(--sf-blue-20--alfa-12)` |
| `--sf-info-20--alfa-16` | `var(--sf-blue-20--alfa-16)` |
| `--sf-info-20--alfa-20` | `var(--sf-blue-20--alfa-20)` |
| `--sf-info-20--alfa-64` | `var(--sf-blue-20--alfa-64)` |
| `--sf-info-20--alfa-24` | `var(--sf-blue-20--alfa-24)` |
| `--sf-info-container-hover` | `light-dark(var(--sf-info-50--alfa-16), var(--sf-info-50--alfa-28))` |
| `--sf-info-container-active` | `light-dark(var(--sf-info-50--alfa-20), var(--sf-info-50--alfa-32))` |
| `--sf-info-state-hover` | `light-dark(var(--sf-info-50--alfa-4), var(--sf-info-90--alfa-4))` |
| `--sf-info-state-active` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-90--alfa-12))` |
| `--sf-info-outline` | `light-dark(var(--sf-info-50), var(--sf-info-60))` |
| `--sf-on-success` | `light-dark(var(--sf-white), var(--sf-success-20))` |
| `--sf-success-20--alfa-80` | `var(--sf-green-20--alfa-80)` |
| `--sf-success-20--alfa-4` | `var(--sf-green-20--alfa-4)` |
| `--sf-success-20--alfa-8` | `var(--sf-green-20--alfa-8)` |
| `--sf-success-20--alfa-12` | `var(--sf-green-20--alfa-12)` |
| `--sf-success-20--alfa-16` | `var(--sf-green-20--alfa-16)` |
| `--sf-success-20--alfa-20` | `var(--sf-green-20--alfa-20)` |
| `--sf-success-20--alfa-64` | `var(--sf-green-20--alfa-64)` |
| `--sf-success-20--alfa-24` | `var(--sf-green-20--alfa-24)` |
| `--sf-success-container-hover` | `light-dark(var(--sf-success-50--alfa-16), var(--sf-success-50--alfa-28))` |
| `--sf-success-container-active` | `light-dark(var(--sf-success-50--alfa-20), var(--sf-success-50--alfa-32))` |
| `--sf-success-state-hover` | `light-dark(var(--sf-success-50--alfa-4), var(--sf-success-90--alfa-4))` |
| `--sf-success-state-active` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-90--alfa-12))` |
| `--sf-success-outline` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |
| `--sf-on-warning` | `light-dark(var(--sf-white), var(--sf-warning-20))` |
| `--sf-warning-20--alfa-80` | `var(--sf-amber-20--alfa-80)` |
| `--sf-warning-20--alfa-4` | `var(--sf-amber-20--alfa-4)` |
| `--sf-warning-20--alfa-8` | `var(--sf-amber-20--alfa-8)` |
| `--sf-warning-20--alfa-12` | `var(--sf-amber-20--alfa-12)` |
| `--sf-warning-20--alfa-16` | `var(--sf-amber-20--alfa-16)` |
| `--sf-warning-20--alfa-20` | `var(--sf-amber-20--alfa-20)` |
| `--sf-warning-20--alfa-64` | `var(--sf-amber-20--alfa-64)` |
| `--sf-warning-20--alfa-24` | `var(--sf-amber-20--alfa-24)` |
| `--sf-warning-container-hover` | `light-dark(var(--sf-warning-50--alfa-16), var(--sf-warning-50--alfa-28))` |
| `--sf-warning-container-active` | `light-dark(var(--sf-warning-50--alfa-20), var(--sf-warning-50--alfa-32))` |
| `--sf-warning-state-hover` | `light-dark(var(--sf-warning-50--alfa-4), var(--sf-warning-90--alfa-4))` |
| `--sf-warning-state-active` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-90--alfa-12))` |
| `--sf-warning-outline` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-on-error` | `light-dark(var(--sf-white), var(--sf-error-20))` |
| `--sf-error-20--alfa-80` | `var(--sf-red-20--alfa-80)` |
| `--sf-error-20--alfa-4` | `var(--sf-red-20--alfa-4)` |
| `--sf-error-20--alfa-8` | `var(--sf-red-20--alfa-8)` |
| `--sf-error-20--alfa-12` | `var(--sf-red-20--alfa-12)` |
| `--sf-error-20--alfa-16` | `var(--sf-red-20--alfa-16)` |
| `--sf-error-20--alfa-20` | `var(--sf-red-20--alfa-20)` |
| `--sf-error-20--alfa-64` | `var(--sf-red-20--alfa-64)` |
| `--sf-error-20--alfa-24` | `var(--sf-red-20--alfa-24)` |
| `--sf-error-container-hover` | `light-dark(var(--sf-error-50--alfa-16), var(--sf-error-50--alfa-28))` |
| `--sf-error-container-active` | `light-dark(var(--sf-error-50--alfa-20), var(--sf-error-50--alfa-32))` |
| `--sf-error-state-hover` | `light-dark(var(--sf-error-50--alfa-4), var(--sf-error-90--alfa-4))` |
| `--sf-error-state-active` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-90--alfa-12))` |
| `--sf-error-outline` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-on-surface-active` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-80))` |
| `--sf-primary-active` | `light-dark(var(--sf-primary-30), var(--sf-primary-90))` |
| `--sf-primary-transparent-active` | `var(--sf-primary-state-active)` |
| `--sf-secondary-active` | `light-dark(var(--sf-secondary-30), var(--sf-secondary-90))` |
| `--sf-secondary-transparent-active` | `var(--sf-secondary-state-active)` |
| `--sf-tertiary-active` | `light-dark(var(--sf-tertiary-30), var(--sf-tertiary-90))` |
| `--sf-tertiary-transparent-active` | `var(--sf-tertiary-state-active)` |
| `--sf-error-active` | `light-dark(var(--sf-error-30), var(--sf-error-90))` |
| `--sf-error-transparent-active` | `var(--sf-error-state-active)` |
| `--sf-warning-active` | `light-dark(var(--sf-warning-30), var(--sf-warning-90))` |
| `--sf-warning-transparent-active` | `var(--sf-warning-state-active)` |
| `--sf-success-active` | `light-dark(var(--sf-success-30), var(--sf-success-90))` |
| `--sf-success-transparent-active` | `var(--sf-success-state-active)` |
| `--sf-info-active` | `light-dark(var(--sf-info-30), var(--sf-info-90))` |
| `--sf-on-surface-hover` | `light-dark(var(--sf-neutral-15), var(--sf-neutral-85))` |
| `--sf-primary-hover` | `light-dark(var(--sf-primary-35), var(--sf-primary-85))` |
| `--sf-primary-transparent-hover` | `var(--sf-primary-state-hover)` |
| `--sf-secondary-hover` | `light-dark(var(--sf-secondary-35), var(--sf-secondary-85))` |
| `--sf-secondary-transparent-hover` | `var(--sf-secondary-state-hover)` |
| `--sf-tertiary-hover` | `light-dark(var(--sf-tertiary-35), var(--sf-tertiary-85))` |
| `--sf-tertiary-transparent-hover` | `var(--sf-tertiary-state-hover)` |
| `--sf-error-hover` | `light-dark(var(--sf-error-35), var(--sf-error-85))` |
| `--sf-error-transparent-hover` | `var(--sf-error-state-hover)` |
| `--sf-warning-hover` | `light-dark(var(--sf-warning-35), var(--sf-warning-85))` |
| `--sf-warning-transparent-hover` | `var(--sf-warning-state-hover)` |
| `--sf-success-hover` | `light-dark(var(--sf-success-35), var(--sf-success-85))` |
| `--sf-success-transparent-hover` | `var(--sf-success-state-hover)` |
| `--sf-info-hover` | `light-dark(var(--sf-info-35), var(--sf-info-85))` |
| `--sf-white` | `#ffffff` |
| `--sf-black` | `#000000` |
| `--sf-gray-50` | `#777777` |
| `--sf-gray-98` | `#f9f9f9` |
| `--sf-gray-90` | `#e2e2e2` |
| `--sf-gray-85` | `#d4d4d4` |
| `--sf-gray-60` | `#919191` |
| `--sf-gray-40` | `#5e5e5e` |
| `--sf-gray-30` | `#474747` |
| `--sf-gray-20` | `#303030` |
| `--sf-gray-15` | `#262626` |
| `--sf-red-50` | `#df362f` |
| `--sf-red-95` | `#ffedea` |
| `--sf-red-90` | `#ffdad6` |
| `--sf-red-80` | `#ffb4ab` |
| `--sf-red-70` | `#ff897d` |
| `--sf-red-60` | `#ff5449` |
| `--sf-red-40` | `#bb1919` |
| `--sf-red-35` | `#a9040e` |
| `--sf-red-30` | `#93000a` |
| `--sf-orange-60` | `#e4702d` |
| `--sf-orange-98` | `#fff8f6` |
| `--sf-orange-95` | `#ffede6` |
| `--sf-orange-85` | `#ffc9af` |
| `--sf-orange-80` | `#ffb692` |
| `--sf-orange-70` | `#ff8d4f` |
| `--sf-orange-50` | `#c25713` |
| `--sf-orange-40` | `#9f4200` |
| `--sf-yellow-85` | `#ffce41` |
| `--sf-yellow-98` | `#fff8f1` |
| `--sf-yellow-95` | `#ffefcf` |
| `--sf-yellow-90` | `#ffdf92` |
| `--sf-yellow-80` | `#f4c002` |
| `--sf-yellow-70` | `#d3a500` |
| `--sf-yellow-60` | `#b28b00` |
| `--sf-yellow-40` | `#755b00` |
| `--sf-green-60` | `#3ba53f` |
| `--sf-green-98` | `#ecffe4` |
| `--sf-green-90` | `#8ffa88` |
| `--sf-green-85` | `#81ec7c` |
| `--sf-green-70` | `#58c157` |
| `--sf-green-50` | `#198a27` |
| `--sf-green-40` | `#006e17` |
| `--sf-green-35` | `#006013` |
| `--sf-green-25` | `#00460b` |
| `--sf-blue-40` | `#005bbe` |
| `--sf-blue-98` | `#f9f9ff` |
| `--sf-blue-95` | `#edf0ff` |
| `--sf-blue-90` | `#d7e2ff` |
| `--sf-blue-70` | `#7eabff` |
| `--sf-blue-60` | `#538ff5` |
| `--sf-blue-30` | `#004492` |
| `--sf-blue-20` | `#002f67` |
| `--sf-blue-15` | `#002453` |
| `--sf-purple-40` | `#8c3c9f` |
| `--sf-purple-95` | `#ffebfd` |
| `--sf-purple-90` | `#fdd6ff` |
| `--sf-purple-80` | `#f4aeff` |
| `--sf-purple-70` | `#e18af3` |
| `--sf-purple-50` | `#a856ba` |
| `--sf-purple-30` | `#712085` |
| `--sf-purple-25` | `#641079` |
| `--sf-purple-20` | `#55006a` |
| `--sf-purple-15` | `#440056` |
| `--sf-pink-60` | `#dd68a9` |
| `--sf-pink-95` | `#ffecf2` |
| `--sf-pink-90` | `#ffd8e8` |
| `--sf-pink-80` | `#ffafd6` |
| `--sf-pink-70` | `#fd82c5` |
| `--sf-pink-50` | `#be4e8f` |
| `--sf-pink-40` | `#a03575` |
| `--sf-pink-25` | `#730a50` |

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
- [Цветовые роли](/ru/guide/colour/colour-roles/)
- [Высота](/ru/utilities/shadows/elevation/)
