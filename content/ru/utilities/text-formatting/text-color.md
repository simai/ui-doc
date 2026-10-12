---
title: "Цвет текста"
description: "Окрашивает текст цветовой ролью темы, чтобы он сам подстраивался под светлую и тёмную тему."
---

# Цвет текста

Классы `color-*` задают цвет текста через цветовые роли и палитры темы.
Берите роль (`color-on-surface`, `color-primary`, `color-error`), когда цвет
несёт смысл, и палитру (`color-blue-5`), только когда нужен конкретный оттенок
вне ролей.

## Сводка

- **Модуль:** `text-color`. Loader подгружает его сам, когда встречает класс на странице.
- **Ширина экрана:** нет, класс действует на любой ширине.
- **Состояния:** `active:` при нажатии, `focus:` при фокусе, `hover:` при наведении указателя.
- **Переменные:** 34, см. «Переменные».

Префикс пишется перед классом и применяет его только при условии: `active:color-transparent`. Префиксы ширины действуют от указанной ширины и шире.

Сводка, классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Пример

### Текст на поверхности

Три уровня текста на обычной поверхности, текст на инверсной поверхности и
два цвета, которые не переключаются вместе с темой. Переключите тему сайта:
роли меняют цвет, `-fixed` остаются прежними.

:::example {id="utilities/text-formatting/text-color" label="Роли текста на поверхности"}
:::

### Акцент и статус

Акцентные и статусные роли на обычной поверхности.

:::example {id="utilities/text-formatting/text-color-accent" label="Акцентные и статусные роли"}
:::

### Текст на заливке

Роль `color-on-*` читается на заливке своей роли `bg-*`.

:::example {id="utilities/text-formatting/text-color-on-fill" label="color-on-* на заливке"}
:::

### Текст и значок на контейнере

На мягком контейнере `bg-*-container` текст берёт `color-on-*-container`, а
значок — `color-on-*-container-graphic`.

:::example {id="utilities/text-formatting/text-color-on-container" label="color-on-*-container и -graphic"}
:::

### Состояния

Префикс применяет цвет только в состоянии. Наведите указатель на первый
образец, переведите фокус на второй клавишей Tab или щелчком, нажмите и
удерживайте третий.

:::example {id="utilities/text-formatting/text-color-states" label="hover:, focus: и active:"}
:::

### Служебные значения

`color-inherit` и `color-current` берут цвет родителя там, где у элемента есть
свой цвет, — например, у кнопки. `color-transparent` делает текст невидимым.

:::example {id="utilities/text-formatting/text-color-keywords" label="color-inherit, color-current, color-transparent"}
:::

### Палитра

Цвета палитры заданы числом и не зависят от темы: светлые ступени не видны на
светлом фоне, тёмные — на тёмном.

:::example {id="utilities/text-formatting/text-color-palette" label="Ступени палитры"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `color-{значение}` | `color: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `color-on-{значение}` | `color: var(--sf-on-{значение})` | `surface`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `color-on-surface-{значение}` | `color: var(--sf-on-surface-{значение})` | `fixed`, `variant`, `inverse` |
| `color-on-surface-inverse-fixed` | `color: var(--sf-on-surface-inverse-fixed)` | — |
| `color-on-{значение}-container` | `color: var(--sf-on-{значение}-container)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `color-on-{значение}-container-graphic` | `color: var(--sf-on-{значение}-container-graphic)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `color-white` | `color: rgb(255, 255, 255)` | — |
| `color-black` | `color: rgb(0, 0, 0)` | — |
| `color-gray` | `color: rgb(106, 115, 125)` | — |
| `color-gray-0` | `color: rgb(250, 251, 252)` | — |
| `color-gray-1` | `color: rgb(246, 248, 250)` | — |
| `color-gray-2` | `color: rgb(225, 228, 232)` | — |
| `color-gray-3` | `color: rgb(209, 213, 218)` | — |
| `color-gray-4` | `color: rgb(149, 157, 165)` | — |
| `color-gray-5` | `color: rgb(106, 115, 125)` | — |
| `color-gray-6` | `color: rgb(88, 96, 105)` | — |
| `color-gray-7` | `color: rgb(68, 77, 86)` | — |
| `color-gray-8` | `color: rgb(47, 54, 61)` | — |
| `color-gray-9` | `color: rgb(36, 41, 46)` | — |
| `color-red` | `color: rgb(215, 58, 73)` | — |
| `color-red-0` | `color: rgb(255, 238, 240)` | — |
| `color-red-1` | `color: rgb(255, 220, 224)` | — |
| `color-red-2` | `color: rgb(253, 174, 183)` | — |
| `color-red-3` | `color: rgb(249, 117, 131)` | — |
| `color-red-4` | `color: rgb(234, 74, 90)` | — |
| `color-red-5` | `color: rgb(215, 58, 73)` | — |
| `color-red-6` | `color: rgb(203, 36, 49)` | — |
| `color-red-7` | `color: rgb(179, 29, 40)` | — |
| `color-red-8` | `color: rgb(158, 28, 35)` | — |
| `color-red-9` | `color: rgb(134, 24, 29)` | — |
| `color-orange` | `color: rgb(246, 106, 10)` | — |
| `color-orange-0` | `color: rgb(255, 248, 242)` | — |
| `color-orange-1` | `color: rgb(255, 235, 218)` | — |
| `color-orange-2` | `color: rgb(255, 209, 172)` | — |
| `color-orange-3` | `color: rgb(255, 171, 112)` | — |
| `color-orange-4` | `color: rgb(251, 133, 50)` | — |
| `color-orange-5` | `color: rgb(246, 106, 10)` | — |
| `color-orange-6` | `color: rgb(227, 98, 9)` | — |
| `color-orange-7` | `color: rgb(209, 87, 4)` | — |
| `color-orange-8` | `color: rgb(194, 78, 0)` | — |
| `color-orange-9` | `color: rgb(160, 65, 0)` | — |
| `color-yellow` | `color: rgb(255, 211, 61)` | — |
| `color-yellow-0` | `color: rgb(255, 253, 239)` | — |
| `color-yellow-1` | `color: rgb(255, 251, 221)` | — |
| `color-yellow-2` | `color: rgb(255, 245, 177)` | — |
| `color-yellow-3` | `color: rgb(255, 234, 127)` | — |
| `color-yellow-4` | `color: rgb(255, 223, 93)` | — |
| `color-yellow-5` | `color: rgb(255, 211, 61)` | — |
| `color-yellow-6` | `color: rgb(249, 197, 19)` | — |
| `color-yellow-7` | `color: rgb(219, 171, 9)` | — |
| `color-yellow-8` | `color: rgb(176, 136, 0)` | — |
| `color-yellow-9` | `color: rgb(115, 92, 15)` | — |
| `color-green` | `color: rgb(40, 167, 69)` | — |
| `color-green-0` | `color: rgb(240, 255, 244)` | — |
| `color-green-1` | `color: rgb(220, 255, 228)` | — |
| `color-green-2` | `color: rgb(190, 245, 203)` | — |
| `color-green-3` | `color: rgb(133, 232, 157)` | — |
| `color-green-4` | `color: rgb(52, 208, 88)` | — |
| `color-green-5` | `color: rgb(40, 167, 69)` | — |
| `color-green-6` | `color: rgb(34, 134, 58)` | — |
| `color-green-7` | `color: rgb(23, 111, 44)` | — |
| `color-green-8` | `color: rgb(22, 92, 38)` | — |
| `color-green-9` | `color: rgb(20, 70, 32)` | — |
| `color-blue` | `color: rgb(3, 102, 214)` | — |
| `color-blue-0` | `color: rgb(241, 248, 255)` | — |
| `color-blue-1` | `color: rgb(219, 237, 255)` | — |
| `color-blue-2` | `color: rgb(200, 225, 255)` | — |
| `color-blue-3` | `color: rgb(121, 184, 255)` | — |
| `color-blue-4` | `color: rgb(33, 136, 255)` | — |
| `color-blue-5` | `color: rgb(3, 102, 214)` | — |
| `color-blue-6` | `color: rgb(0, 92, 197)` | — |
| `color-blue-7` | `color: rgb(4, 66, 137)` | — |
| `color-blue-8` | `color: rgb(3, 47, 98)` | — |
| `color-blue-9` | `color: rgb(5, 38, 76)` | — |
| `color-purple` | `color: rgb(111, 66, 193)` | — |
| `color-purple-0` | `color: rgb(245, 240, 255)` | — |
| `color-purple-1` | `color: rgb(230, 220, 253)` | — |
| `color-purple-2` | `color: rgb(209, 188, 249)` | — |
| `color-purple-3` | `color: rgb(179, 146, 240)` | — |
| `color-purple-4` | `color: rgb(138, 99, 210)` | — |
| `color-purple-5` | `color: rgb(111, 66, 193)` | — |
| `color-purple-6` | `color: rgb(90, 50, 163)` | — |
| `color-purple-7` | `color: rgb(76, 40, 136)` | — |
| `color-purple-8` | `color: rgb(58, 29, 110)` | — |
| `color-purple-9` | `color: rgb(41, 19, 78)` | — |
| `color-pink` | `color: rgb(234, 74, 170)` | — |
| `color-pink-0` | `color: rgb(255, 238, 248)` | — |
| `color-pink-1` | `color: rgb(254, 219, 240)` | — |
| `color-pink-2` | `color: rgb(249, 179, 221)` | — |
| `color-pink-3` | `color: rgb(246, 146, 206)` | — |
| `color-pink-4` | `color: rgb(236, 108, 185)` | — |
| `color-pink-5` | `color: rgb(234, 74, 170)` | — |
| `color-pink-6` | `color: rgb(208, 53, 146)` | — |
| `color-pink-7` | `color: rgb(185, 58, 134)` | — |
| `color-pink-8` | `color: rgb(153, 48, 111)` | — |
| `color-pink-9` | `color: rgb(109, 34, 79)` | — |

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-surface-fixed` | `var(--sf-neutral-10)` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-on-surface-inverse` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-10))` |
| `--sf-on-surface-inverse-fixed` | `var(--sf-neutral-90)` |
| `--sf-on-disable` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-on-primary` | `light-dark(var(--sf-white), var(--sf-primary-20))` |
| `--sf-on-primary-container` | `light-dark(var(--sf-primary-10), var(--sf-primary-90))` |
| `--sf-on-primary-container-graphic` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-on-secondary` | `light-dark(var(--sf-white), var(--sf-secondary-20))` |
| `--sf-on-secondary-container` | `light-dark(var(--sf-secondary-10), var(--sf-secondary-90))` |
| `--sf-on-secondary-container-graphic` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-on-tertiary` | `light-dark(var(--sf-white), var(--sf-tertiary-20))` |
| `--sf-on-tertiary-container` | `light-dark(var(--sf-tertiary-10), var(--sf-tertiary-90))` |
| `--sf-on-tertiary-container-graphic` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-on-error` | `light-dark(var(--sf-white), var(--sf-error-20))` |
| `--sf-on-error-container` | `light-dark(var(--sf-error-10), var(--sf-error-90))` |
| `--sf-on-error-container-graphic` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-on-warning` | `light-dark(var(--sf-white), var(--sf-warning-20))` |
| `--sf-on-warning-container` | `light-dark(var(--sf-warning-10), var(--sf-warning-90))` |
| `--sf-on-warning-container-graphic` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-on-success` | `light-dark(var(--sf-white), var(--sf-success-20))` |
| `--sf-on-success-container` | `light-dark(var(--sf-success-10), var(--sf-success-90))` |
| `--sf-on-success-container-graphic` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |
| `--sf-current` | `currentColor` |
| `--sf-inherit` | `inherit` |
| `--sf-disable` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` |

## Применение

### Текст на поверхности

Для обычного текста на поверхности есть три уровня:

| Класс | Назначение |
|:---|:---|
| `color-on-surface` | основной текст |
| `color-on-surface-variant` | вспомогательный текст: пояснения, подписи, метаданные |
| `color-on-surface-inverse` | текст на инверсной поверхности `bg-surface-inverse` |

```html
<article class="bg-surface-0">
  <h2 class="color-on-surface">Заголовок и основной текст</h2>
  <p class="color-on-surface-variant">Вспомогательное описание или метаданные</p>
</article>
```

`color-on-surface-fixed` и `color-on-surface-inverse-fixed` не переключаются
вместе с темой: их берут для текста на фоне, который тоже не меняется, —
например, на фотографии.

### Акцент и статусы

`color-primary`, `color-secondary`, `color-tertiary` окрашивают текст
акцентными ролями, `color-success`, `color-warning`, `color-error` — статусными.
`color-on-disable` — цвет текста недоступного элемента. Роли для
информационного статуса (`info`) у текста нет.

На цветном фоне роли берите в паре с фоном: на `bg-primary` —
`color-on-primary`, на `bg-primary-container` — `color-on-primary-container`.
Вариант с окончанием `-graphic` предназначен для значков и графики на
контейнере; для текста берите вариант без него.

```html
<div class="bg-error-container p-2">
  <i class="sf-icon color-on-error-container-graphic" aria-hidden="true">error</i>
  <span class="color-on-error-container">Не удалось сохранить</span>
</div>
```

### Состояния

Префиксы `hover:`, `focus:` и `active:` меняют цвет при наведении, фокусе и
нажатии. `focus:` срабатывает на любом фокусе, в том числе после щелчка мышью.

```html
<a class="color-on-surface hover:color-primary" href="/ru/">Документация</a>
```

## Ограничения

- `color-secondary` — акцентная роль, а не уровень важности текста. Для
  вспомогательного текста берите `color-on-surface-variant`.
- `color-disable` — почти прозрачный цвет заливки недоступного элемента, текст
  с ним не читается. Цвет текста недоступного элемента — `color-on-disable`.
- Готового класса для токена `--sf-on-surface-muted` нет. Он слабее
  `--sf-on-surface-variant`; если проекту нужен такой уровень, объявите свой
  класс и проверьте контраст в обеих темах:

  ```css
  .color-on-surface-muted {
    color: var(--sf-on-surface-muted);
  }
  ```

- У семейства нет префиксов ширины экрана: цвет текста не меняется по ширине.
- Цвет не должен быть единственным признаком смысла: ошибку и успех
  подтверждайте текстом или значком.

## См. также

- [Цветовые роли](/ru/guide/fundamentals/colour-roles/)
- [Цвета и темы](/ru/guide/fundamentals/colors-and-themes/)
- [Цвет фона](/ru/utilities/background/background-color/)
