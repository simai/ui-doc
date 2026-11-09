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
| `border-{значение}` | `border-color: var(--sf-{значение})` | `transparent`, `current`, `outline`, `white`, `black` |
| `border-outline-variant` | `border-color: var(--sf-outline-variant)` | — |
| `border-surface` | `border-color: var(--sf-surface-1)` | — |
| `border-surface-{значение}` | `border-color: var(--sf-surface-{значение})` | `0`, `1`, `overlay`, `inverse` |
| `border-{значение}-container` | `border-color: var(--sf-{значение}-container)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `border-{значение}-transparent-overlay` | `border-color: var(--sf-{значение}-transparent-overlay)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `border-on-surface` | `border-color: var(--sf-on-surface)` | — |
| `border-on-surface-variant` | `border-color: var(--sf-on-surface-variant)` | — |
| `border-{значение}` | `border-color: var(--sf-outline-{значение})` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `border-info-container-strong` | `border-color: var(--sf-info-container-strong)` | — |
| `border-gray` | `border-color: var(--sf-gray-50)` | — |
| `border-{значение}-0` | `border-color: var(--sf-{значение}-98)` | `gray`, `orange`, `yellow`, `green`, `blue` |
| `border-{значение}-1` | `border-color: var(--sf-{значение}-98)` | `gray`, `yellow`, `green` |
| `border-{значение}-2` | `border-color: var(--sf-{значение}-90)` | `gray`, `green`, `blue` |
| `border-gray-3` | `border-color: var(--sf-gray-85)` | — |
| `border-{значение}-4` | `border-color: var(--sf-{значение}-60)` | `gray`, `red`, `blue`, `pink` |
| `border-gray-5` | `border-color: var(--sf-gray-50)` | — |
| `border-{значение}-6` | `border-color: var(--sf-{значение}-40)` | `gray`, `red`, `blue` |
| `border-gray-7` | `border-color: var(--sf-gray-30)` | — |
| `border-{значение}-8` | `border-color: var(--sf-{значение}-20)` | `gray`, `blue`, `purple` |
| `border-{значение}-9` | `border-color: var(--sf-{значение}-15)` | `gray`, `blue`, `purple` |
| `border-red` | `border-color: var(--sf-red-50)` | — |
| `border-{значение}-0` | `border-color: var(--sf-{значение}-95)` | `red`, `purple`, `pink` |
| `border-{значение}-1` | `border-color: var(--sf-{значение}-90)` | `red`, `purple`, `pink` |
| `border-{значение}-2` | `border-color: var(--sf-{значение}-80)` | `red`, `purple`, `pink` |
| `border-{значение}-3` | `border-color: var(--sf-{значение}-70)` | `red`, `blue`, `purple`, `pink` |
| `border-red-5` | `border-color: var(--sf-red-50)` | — |
| `border-red-7` | `border-color: var(--sf-red-40)` | — |
| `border-red-8` | `border-color: var(--sf-red-35)` | — |
| `border-red-9` | `border-color: var(--sf-red-30)` | — |
| `border-{значение}` | `border-color: var(--sf-{значение}-60)` | `orange`, `green`, `pink` |
| `border-orange-1` | `border-color: var(--sf-orange-95)` | — |
| `border-orange-2` | `border-color: var(--sf-orange-85)` | — |
| `border-orange-3` | `border-color: var(--sf-orange-80)` | — |
| `border-orange-4` | `border-color: var(--sf-orange-70)` | — |
| `border-{значение}-5` | `border-color: var(--sf-{значение}-60)` | `orange`, `green`, `pink` |
| `border-orange-6` | `border-color: var(--sf-orange-60)` | — |
| `border-orange-7` | `border-color: var(--sf-orange-50)` | — |
| `border-orange-8` | `border-color: var(--sf-orange-50)` | — |
| `border-orange-9` | `border-color: var(--sf-orange-40)` | — |
| `border-yellow` | `border-color: var(--sf-yellow-85)` | — |
| `border-yellow-2` | `border-color: var(--sf-yellow-95)` | — |
| `border-yellow-3` | `border-color: var(--sf-yellow-90)` | — |
| `border-yellow-4` | `border-color: var(--sf-yellow-90)` | — |
| `border-yellow-5` | `border-color: var(--sf-yellow-85)` | — |
| `border-yellow-6` | `border-color: var(--sf-yellow-80)` | — |
| `border-yellow-7` | `border-color: var(--sf-yellow-70)` | — |
| `border-yellow-8` | `border-color: var(--sf-yellow-60)` | — |
| `border-yellow-9` | `border-color: var(--sf-yellow-40)` | — |
| `border-green-3` | `border-color: var(--sf-green-85)` | — |
| `border-green-4` | `border-color: var(--sf-green-70)` | — |
| `border-green-6` | `border-color: var(--sf-green-50)` | — |
| `border-green-7` | `border-color: var(--sf-green-40)` | — |
| `border-green-8` | `border-color: var(--sf-green-35)` | — |
| `border-green-9` | `border-color: var(--sf-green-25)` | — |
| `border-blue` | `border-color: var(--sf-blue-40)` | — |
| `border-blue-1` | `border-color: var(--sf-blue-95)` | — |
| `border-blue-5` | `border-color: var(--sf-blue-40)` | — |
| `border-blue-7` | `border-color: var(--sf-blue-30)` | — |
| `border-purple` | `border-color: var(--sf-purple-40)` | — |
| `border-purple-4` | `border-color: var(--sf-purple-50)` | — |
| `border-purple-5` | `border-color: var(--sf-purple-40)` | — |
| `border-purple-6` | `border-color: var(--sf-purple-30)` | — |
| `border-purple-7` | `border-color: var(--sf-purple-25)` | — |
| `border-pink-6` | `border-color: var(--sf-pink-50)` | — |
| `border-pink-7` | `border-color: var(--sf-pink-50)` | — |
| `border-pink-8` | `border-color: var(--sf-pink-40)` | — |
| `border-pink-9` | `border-color: var(--sf-pink-25)` | — |

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
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
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
