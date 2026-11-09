---
title: "Цвет падающей тени"
description: "Цветные падающие тени уходят из SIMAI Framework 2027-01-01: тень не несёт цвета. Что брать вместо них."
---

# Цвет падающей тени

Классы `drop-shadow-{цвет}` уходят из SIMAI Framework после **2027-01-01** и
замены не получают: в системе теней тень не несёт цвета. До этой даты класс
ещё окрашивает тень, которую рисуют классы
[падающей тени](/ru/utilities/shadows/drop-shadow/). Новых мест для этих
классов не заводите: значку и логотипу хватает тени места без цвета.

## Пример

### Цвет поверх тени места

Под каждым образцом — класс цвета; тень задаёт `drop-shadow-overlay`.

:::example {id="utilities/shadows/drop-shadow-color" label="Цвета падающей тени"}
:::

### Наведение

С префиксом `hover:` цвет меняется при наведении. Наведите указатель на
звезду.

:::example {id="utilities/shadows/drop-shadow-color-hover" label="hover:drop-shadow-primary"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `drop-shadow-transparent` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-transparent) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-transparent) var(--sf-shadow--alfa-shade))` | — |
| `drop-shadow-{значение}` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}) var(--sf-shadow--alfa-shade))` | `current`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `drop-shadow-surface` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-1) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-1) var(--sf-shadow--alfa-shade))` | — |
| `drop-shadow-surface-{значение}` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-{значение}) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-{значение}) var(--sf-shadow--alfa-shade))` | `0`, `1`, `2`, `3`, `4`, `inverse` |
| `drop-shadow-{значение}-container` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container) var(--sf-shadow--alfa-shade))` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `drop-shadow-surface-inverse-fixed` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-inverse-fixed) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-inverse-fixed) var(--sf-shadow--alfa-shade))` | — |
| `drop-shadow-on-surface-variant` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface-variant) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface-variant) var(--sf-shadow--alfa-shade))` | — |
| `drop-shadow-{значение}-transparent-select` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-select) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-select) var(--sf-shadow--alfa-shade))` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `drop-shadow-{значение}-transparent-overlay` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-overlay) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-overlay) var(--sf-shadow--alfa-shade))` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `drop-shadow-on-surface` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-shade))` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:drop-shadow-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-shadow--alfa-fill` | `24%` |
| `--sf-shadow--alfa-shade` | `8%` |
| `--sf-current` | `currentColor` |
| `--sf-surface-1` | `var(--sf-surface-area)` |
| `--sf-surface-0` | `var(--sf-surface-page)` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
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
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |

## Применение

Вместо цветной падающей тени берите тень места без цвета
(`drop-shadow-raised`, `drop-shadow-overlay`), а цвет передавайте самим
значком или картинкой. Как переписать страницы на новые имена теней — в
таблице на странице
[Как обновить проект](/ru/guide/connection/updating/#новые-имена-теней).

## Ограничения

- Класс меняет только цвета `--sf-shadow-key-color` и
  `--sf-shadow-ambient-color` на своём элементе; без класса падающей тени он
  ничего не рисует.
- Префиксов ширины экрана у семейства нет; из состояний есть только `hover:`.

## См. также

- [Падающая тень](/ru/utilities/shadows/drop-shadow/)
- [Поверхность и тень](/ru/guide/colour/elevation/)
