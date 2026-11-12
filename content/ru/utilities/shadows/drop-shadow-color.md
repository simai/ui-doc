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
| `drop-shadow-{значение}` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}) var(--sf-shadow--alfa-shade))` | `current`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `drop-shadow-surface` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-area) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-area) var(--sf-shadow--alfa-shade))` | — |
| `drop-shadow-surface-{значение}` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-{значение}) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-{значение}) var(--sf-shadow--alfa-shade))` | `page`, `area`, `2`, `3`, `4`, `inverse` |
| `drop-shadow-{значение}-container` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container) var(--sf-shadow--alfa-shade))` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `drop-shadow-surface-inverse-fixed` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-inverse-fixed) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-inverse-fixed) var(--sf-shadow--alfa-shade))` | — |
| `drop-shadow-on-surface-variant` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface-variant) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface-variant) var(--sf-shadow--alfa-shade))` | — |
| `drop-shadow-{значение}-state-select` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-state-select) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-state-select) var(--sf-shadow--alfa-shade))` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `drop-shadow-{значение}-container-strong` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container-strong) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container-strong) var(--sf-shadow--alfa-shade))` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `drop-shadow-on-surface` | `--sf-shadow-key-color: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-fill)); --sf-shadow-ambient-color: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-shade))` | — |

Прежние имена работают до 2027-01-01: `drop-shadow-error-transparent-overlay` → `drop-shadow-error-container-strong`, `drop-shadow-error-transparent-select` → `drop-shadow-error-state-select`, `drop-shadow-primary-transparent-overlay` → `drop-shadow-primary-container-strong`, `drop-shadow-primary-transparent-select` → `drop-shadow-primary-state-select`, `drop-shadow-secondary-transparent-overlay` → `drop-shadow-secondary-container-strong`, `drop-shadow-secondary-transparent-select` → `drop-shadow-secondary-state-select`, `drop-shadow-success-transparent-overlay` → `drop-shadow-success-container-strong`, `drop-shadow-success-transparent-select` → `drop-shadow-success-state-select`, `drop-shadow-surface-0` → `drop-shadow-surface-page`, `drop-shadow-surface-1` → `drop-shadow-surface-area`, `drop-shadow-tertiary-transparent-overlay` → `drop-shadow-tertiary-container-strong`, `drop-shadow-tertiary-transparent-select` → `drop-shadow-tertiary-state-select`, `drop-shadow-warning-transparent-overlay` → `drop-shadow-warning-container-strong`, `drop-shadow-warning-transparent-select` → `drop-shadow-warning-state-select`. Все замены — на странице [Как обновить проект](/ru/guide/connection/updating/).

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
| `--sf-surface-area` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-page` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-primary-state-select` | `light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-90--alfa-8))` |
| `--sf-primary-container-strong` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-secondary-state-select` | `light-dark(var(--sf-secondary-50--alfa-8), var(--sf-secondary-90--alfa-8))` |
| `--sf-secondary-container-strong` | `light-dark(var(--sf-secondary-50--alfa-24), var(--sf-secondary-90--alfa-24))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-tertiary-state-select` | `light-dark(var(--sf-tertiary-50--alfa-8), var(--sf-tertiary-90--alfa-8))` |
| `--sf-tertiary-container-strong` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-error-container` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-50--alfa-24))` |
| `--sf-error-state-select` | `light-dark(var(--sf-error-50--alfa-8), var(--sf-error-90--alfa-8))` |
| `--sf-error-container-strong` | `light-dark(var(--sf-error-50--alfa-24), var(--sf-error-90--alfa-24))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-warning-container` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-50--alfa-24))` |
| `--sf-warning-state-select` | `light-dark(var(--sf-warning-50--alfa-8), var(--sf-warning-90--alfa-8))` |
| `--sf-warning-container-strong` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-success-container` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-50--alfa-24))` |
| `--sf-success-state-select` | `light-dark(var(--sf-success-50--alfa-8), var(--sf-success-90--alfa-8))` |
| `--sf-success-container-strong` | `light-dark(var(--sf-success-50--alfa-24), var(--sf-success-90--alfa-24))` |
| `--sf-info` | `light-dark(var(--sf-info-40), var(--sf-info-80))` |
| `--sf-info-container` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-50--alfa-24))` |
| `--sf-info-state-select` | `light-dark(var(--sf-info-50--alfa-8), var(--sf-info-90--alfa-8))` |
| `--sf-info-container-strong` | `light-dark(var(--sf-info-50--alfa-24), var(--sf-info-90--alfa-24))` |
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
