---
title: "Цвет текста"
description: "Окрашивает текст цветовой ролью темы, чтобы он сам подстраивался под светлую и тёмную тему."
---

# Цвет текста

Классы `color-*` задают цвет текста через цветовые роли и палитры темы.
Берите роль (`color-on-surface`, `color-primary`, `color-error`), когда цвет
несёт смысл, и палитру (`color-blue-5`), только когда нужен конкретный оттенок
вне ролей.

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
| `color-{значение}` | `color: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info`, `white`, `black` |
| `color-on-{значение}` | `color: var(--sf-on-{значение})` | `surface`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `color-on-surface-{значение}` | `color: var(--sf-on-surface-{значение})` | `fixed`, `variant`, `inverse` |
| `color-on-surface-inverse-fixed` | `color: var(--sf-on-surface-inverse-fixed)` | — |
| `color-on-{значение}-container` | `color: var(--sf-on-{значение}-container)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `color-on-{значение}-container-graphic` | `color: var(--sf-on-{значение}-container-graphic)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `color-gray` | `color: var(--sf-gray-50)` | — |
| `color-{значение}-0` | `color: var(--sf-{значение}-98)` | `gray`, `orange`, `yellow`, `green`, `blue` |
| `color-{значение}-1` | `color: var(--sf-{значение}-98)` | `gray`, `yellow`, `green` |
| `color-{значение}-2` | `color: var(--sf-{значение}-90)` | `gray`, `green`, `blue` |
| `color-gray-3` | `color: var(--sf-gray-85)` | — |
| `color-{значение}-4` | `color: var(--sf-{значение}-60)` | `gray`, `red`, `blue`, `pink` |
| `color-gray-5` | `color: var(--sf-gray-50)` | — |
| `color-{значение}-6` | `color: var(--sf-{значение}-40)` | `gray`, `red`, `blue` |
| `color-gray-7` | `color: var(--sf-gray-30)` | — |
| `color-{значение}-8` | `color: var(--sf-{значение}-20)` | `gray`, `blue`, `purple` |
| `color-{значение}-9` | `color: var(--sf-{значение}-15)` | `gray`, `blue`, `purple` |
| `color-red` | `color: var(--sf-red-50)` | — |
| `color-{значение}-0` | `color: var(--sf-{значение}-95)` | `red`, `purple`, `pink` |
| `color-{значение}-1` | `color: var(--sf-{значение}-90)` | `red`, `purple`, `pink` |
| `color-{значение}-2` | `color: var(--sf-{значение}-80)` | `red`, `purple`, `pink` |
| `color-{значение}-3` | `color: var(--sf-{значение}-70)` | `red`, `blue`, `purple`, `pink` |
| `color-red-5` | `color: var(--sf-red-50)` | — |
| `color-red-7` | `color: var(--sf-red-40)` | — |
| `color-red-8` | `color: var(--sf-red-35)` | — |
| `color-red-9` | `color: var(--sf-red-30)` | — |
| `color-{значение}` | `color: var(--sf-{значение}-60)` | `orange`, `green`, `pink` |
| `color-orange-1` | `color: var(--sf-orange-95)` | — |
| `color-orange-2` | `color: var(--sf-orange-85)` | — |
| `color-orange-3` | `color: var(--sf-orange-80)` | — |
| `color-orange-4` | `color: var(--sf-orange-70)` | — |
| `color-{значение}-5` | `color: var(--sf-{значение}-60)` | `orange`, `green`, `pink` |
| `color-orange-6` | `color: var(--sf-orange-60)` | — |
| `color-orange-7` | `color: var(--sf-orange-50)` | — |
| `color-orange-8` | `color: var(--sf-orange-50)` | — |
| `color-orange-9` | `color: var(--sf-orange-40)` | — |
| `color-yellow` | `color: var(--sf-yellow-85)` | — |
| `color-yellow-2` | `color: var(--sf-yellow-95)` | — |
| `color-yellow-3` | `color: var(--sf-yellow-90)` | — |
| `color-yellow-4` | `color: var(--sf-yellow-90)` | — |
| `color-yellow-5` | `color: var(--sf-yellow-85)` | — |
| `color-yellow-6` | `color: var(--sf-yellow-80)` | — |
| `color-yellow-7` | `color: var(--sf-yellow-70)` | — |
| `color-yellow-8` | `color: var(--sf-yellow-60)` | — |
| `color-yellow-9` | `color: var(--sf-yellow-40)` | — |
| `color-green-3` | `color: var(--sf-green-85)` | — |
| `color-green-4` | `color: var(--sf-green-70)` | — |
| `color-green-6` | `color: var(--sf-green-50)` | — |
| `color-green-7` | `color: var(--sf-green-40)` | — |
| `color-green-8` | `color: var(--sf-green-35)` | — |
| `color-green-9` | `color: var(--sf-green-25)` | — |
| `color-blue` | `color: var(--sf-blue-40)` | — |
| `color-blue-1` | `color: var(--sf-blue-95)` | — |
| `color-blue-5` | `color: var(--sf-blue-40)` | — |
| `color-blue-7` | `color: var(--sf-blue-30)` | — |
| `color-purple` | `color: var(--sf-purple-40)` | — |
| `color-purple-4` | `color: var(--sf-purple-50)` | — |
| `color-purple-5` | `color: var(--sf-purple-40)` | — |
| `color-purple-6` | `color: var(--sf-purple-30)` | — |
| `color-purple-7` | `color: var(--sf-purple-25)` | — |
| `color-pink-6` | `color: var(--sf-pink-50)` | — |
| `color-pink-7` | `color: var(--sf-pink-50)` | — |
| `color-pink-8` | `color: var(--sf-pink-40)` | — |
| `color-pink-9` | `color: var(--sf-pink-25)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `active:`, `focus:`, `hover:`. Например: `active:color-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-surface-fixed` | `var(--sf-neutral-10)` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-on-surface-inverse` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-10))` |
| `--sf-on-surface-inverse-fixed` | `var(--sf-neutral-90)` |
| `--sf-on-disable` | `var(--sf-on-surface-disabled)` |
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
| `--sf-info` | `light-dark(var(--sf-info-40), var(--sf-info-80))` |
| `--sf-on-info` | `light-dark(var(--sf-white), var(--sf-info-20))` |
| `--sf-on-info-container` | `light-dark(var(--sf-info-10), var(--sf-info-90))` |
| `--sf-on-info-container-graphic` | `light-dark(var(--sf-info-50), var(--sf-info-60))` |
| `--sf-current` | `currentColor` |
| `--sf-inherit` | `inherit` |
| `--sf-disable` | `var(--sf-surface-disabled)` |
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

- [Цветовые роли](/ru/guide/colour/colour-roles/)
- [Цвета и темы](/ru/guide/colour/palettes/)
- [Цвет фона](/ru/utilities/background/background-color/)
