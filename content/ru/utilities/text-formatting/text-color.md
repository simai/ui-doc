---
title: "Цвет текста"
description: "Окрашивает текст цветовой ролью темы, чтобы он сам подстраивался под светлую и тёмную тему."
---

# Цвет текста

Классы `color-*` задают цвет текста через цветовые роли темы: текст на
поверхности (`color-on-surface`), акцентные и статусные роли (`color-primary`,
`color-error`) и текст на их заливке. Роль сама подстраивается под светлую и
тёмную тему. Классов для отдельных ступеней палитры нет: оттенок вне ролей
берут из [статической палитры](/ru/guide/colour/palettes/#статическая-палитра).

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

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `color-{значение}` | `color: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `color-on-{значение}` | `color: var(--sf-on-{значение})` | `surface`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `color-on-surface-{значение}` | `color: var(--sf-on-surface-{значение})` | `fixed`, `variant`, `inverse` |
| `color-on-surface-inverse-fixed` | `color: var(--sf-on-surface-inverse-fixed)` | — |
| `color-on-{значение}-container` | `color: var(--sf-on-{значение}-container)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `color-on-{значение}-container-graphic` | `color: var(--sf-on-{значение}-container-graphic)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |

Ещё 90 классов уходят без замены и работают до 2027-01-01 (запись `utility-c17-legacy-palette-classes` журнала, [Как обновить проект](/ru/guide/connection/updating/)); в новой разметке их не пишите.

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

## Применение

### Текст на поверхности

Для обычного текста на поверхности есть три уровня:

| Класс | Назначение |
|:---|:---|
| `color-on-surface` | основной текст |
| `color-on-surface-variant` | вспомогательный текст: пояснения, подписи, метаданные |
| `color-on-surface-inverse` | текст на инверсной поверхности `bg-surface-inverse` |

```html
<article class="bg-surface-page">
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
