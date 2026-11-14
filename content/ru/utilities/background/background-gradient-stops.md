---
title: "Точки градиента"
description: "Задаёт начальный, средний и конечный цвет фонового градиента классами from-, via- и to-."
---

# Точки градиента

Классы `from-*`, `via-*` и `to-*` задают начальный, средний и конечный цвет
фонового градиента. Сам градиент рисует класс вида — `bg-gradient-to-*` или
`gr-*`. Берите эту запись, когда удобнее думать «откуда — через что — куда».

## Пример

### С направлением

Линейный градиент `bg-gradient-to-r` с разными точками. Без `via-*` цвет идёт
прямо от начального к конечному.

:::example {id="utilities/background/background-gradient-stops" label="from-, via- и to- с bg-gradient-to-r"}
:::

### С видом градиента

Те же три точки в линейном, радиальном и коническом градиенте.

:::example {id="utilities/background/background-gradient-stops-types" label="from-, via- и to- с gr-line-3, gr-radial-3 и gr-conic-3"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `from-{значение}` | `--sf-gradient--color-1: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `info`, `error`, `white`, `black` |
| `via-{значение}` | `--sf-gradient--color-2: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `info`, `error`, `white`, `black` |
| `to-{значение}` | `--sf-gradient--color-3: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `info`, `error`, `white`, `black` |
| `from-surface-{значение}` | `--sf-gradient--color-1: var(--sf-surface-{значение})` | `page`, `area`, `2`, `card`, `popup`, `inverse` |
| `via-surface-{значение}` | `--sf-gradient--color-2: var(--sf-surface-{значение})` | `page`, `area`, `card`, `popup`, `inverse` |
| `to-surface-{значение}` | `--sf-gradient--color-3: var(--sf-surface-{значение})` | `page`, `area`, `2`, `card`, `popup`, `inverse` |
| `via-surface-2` | `--sf-gradient--color-2: var(--sf-surface-2)` | — |
| `from-on-surface` | `--sf-gradient--color-1: var(--sf-on-surface)` | — |
| `via-on-surface` | `--sf-gradient--color-2: var(--sf-on-surface)` | — |
| `to-on-surface` | `--sf-gradient--color-3: var(--sf-on-surface)` | — |
| `from-primary-container` | `--sf-gradient--color-1: var(--sf-primary-container)` | — |
| `via-primary-container` | `--sf-gradient--color-2: var(--sf-primary-container)` | — |
| `to-primary-container` | `--sf-gradient--color-3: var(--sf-primary-container)` | — |
| `from-secondary-container` | `--sf-gradient--color-1: var(--sf-secondary-container)` | — |
| `via-secondary-container` | `--sf-gradient--color-2: var(--sf-secondary-container)` | — |
| `to-secondary-container` | `--sf-gradient--color-3: var(--sf-secondary-container)` | — |
| `from-tertiary-container` | `--sf-gradient--color-1: var(--sf-tertiary-container)` | — |
| `via-tertiary-container` | `--sf-gradient--color-2: var(--sf-tertiary-container)` | — |
| `to-tertiary-container` | `--sf-gradient--color-3: var(--sf-tertiary-container)` | — |
| `from-surface-popup-nested` | `--sf-gradient--color-1: var(--sf-surface-popup-nested)` | — |
| `via-surface-popup-nested` | `--sf-gradient--color-2: var(--sf-surface-popup-nested)` | — |
| `to-surface-popup-nested` | `--sf-gradient--color-3: var(--sf-surface-popup-nested)` | — |
| `from-{значение}-5` | `--sf-gradient--color-1: var(--sf-{значение}-5)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-5` | `--sf-gradient--color-2: var(--sf-{значение}-5)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-5` | `--sf-gradient--color-3: var(--sf-{значение}-5)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-10` | `--sf-gradient--color-1: var(--sf-{значение}-10)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-10` | `--sf-gradient--color-2: var(--sf-{значение}-10)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-10` | `--sf-gradient--color-3: var(--sf-{значение}-10)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-15` | `--sf-gradient--color-1: var(--sf-{значение}-15)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-15` | `--sf-gradient--color-2: var(--sf-{значение}-15)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-15` | `--sf-gradient--color-3: var(--sf-{значение}-15)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-20` | `--sf-gradient--color-1: var(--sf-{значение}-20)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-20` | `--sf-gradient--color-2: var(--sf-{значение}-20)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-20` | `--sf-gradient--color-3: var(--sf-{значение}-20)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-25` | `--sf-gradient--color-1: var(--sf-{значение}-25)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-25` | `--sf-gradient--color-2: var(--sf-{значение}-25)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-25` | `--sf-gradient--color-3: var(--sf-{значение}-25)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-30` | `--sf-gradient--color-1: var(--sf-{значение}-30)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-30` | `--sf-gradient--color-2: var(--sf-{значение}-30)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-30` | `--sf-gradient--color-3: var(--sf-{значение}-30)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-35` | `--sf-gradient--color-1: var(--sf-{значение}-35)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-35` | `--sf-gradient--color-2: var(--sf-{значение}-35)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-35` | `--sf-gradient--color-3: var(--sf-{значение}-35)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-40` | `--sf-gradient--color-1: var(--sf-{значение}-40)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-40` | `--sf-gradient--color-2: var(--sf-{значение}-40)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-40` | `--sf-gradient--color-3: var(--sf-{значение}-40)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-50` | `--sf-gradient--color-1: var(--sf-{значение}-50)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-50` | `--sf-gradient--color-2: var(--sf-{значение}-50)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-50` | `--sf-gradient--color-3: var(--sf-{значение}-50)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-60` | `--sf-gradient--color-1: var(--sf-{значение}-60)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-60` | `--sf-gradient--color-2: var(--sf-{значение}-60)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-60` | `--sf-gradient--color-3: var(--sf-{значение}-60)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-70` | `--sf-gradient--color-1: var(--sf-{значение}-70)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-70` | `--sf-gradient--color-2: var(--sf-{значение}-70)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-70` | `--sf-gradient--color-3: var(--sf-{значение}-70)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-80` | `--sf-gradient--color-1: var(--sf-{значение}-80)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-80` | `--sf-gradient--color-2: var(--sf-{значение}-80)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-80` | `--sf-gradient--color-3: var(--sf-{значение}-80)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-85` | `--sf-gradient--color-1: var(--sf-{значение}-85)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-85` | `--sf-gradient--color-2: var(--sf-{значение}-85)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-85` | `--sf-gradient--color-3: var(--sf-{значение}-85)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-90` | `--sf-gradient--color-1: var(--sf-{значение}-90)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-90` | `--sf-gradient--color-2: var(--sf-{значение}-90)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-90` | `--sf-gradient--color-3: var(--sf-{значение}-90)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-95` | `--sf-gradient--color-1: var(--sf-{значение}-95)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-95` | `--sf-gradient--color-2: var(--sf-{значение}-95)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-95` | `--sf-gradient--color-3: var(--sf-{значение}-95)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `from-{значение}-98` | `--sf-gradient--color-1: var(--sf-{значение}-98)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `via-{значение}-98` | `--sf-gradient--color-2: var(--sf-{значение}-98)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `to-{значение}-98` | `--sf-gradient--color-3: var(--sf-{значение}-98)` | `primary`, `secondary`, `tertiary`, `neutral`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |

Прежние имена работают до 2027-01-01: `from-surface-0` → `from-surface-page`, `from-surface-1` → `from-surface-area`, `to-surface-0` → `to-surface-page`, `to-surface-1` → `to-surface-area`, `via-surface-0` → `via-surface-page`, `via-surface-1` → `via-surface-area`. Все замены — на странице [Как обновить проект](/ru/guide/connection/updating/).

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-inherit` | `inherit` |
| `--sf-surface-page` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-area` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-info` | `light-dark(var(--sf-info-40), var(--sf-info-80))` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-surface-card` | `light-dark(var(--sf-surface-page), var(--sf-surface-2))` |
| `--sf-surface-popup` | `light-dark(var(--sf-surface-page), var(--sf-surface-4))` |
| `--sf-surface-popup-nested` | `light-dark(var(--sf-surface-page), var(--sf-surface-5))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-primary-5` | `#00102c` |
| `--sf-primary-10` | `#001a40` |
| `--sf-primary-15` | `#002453` |
| `--sf-primary-20` | `#002f67` |
| `--sf-primary-25` | `#00397c` |
| `--sf-primary-30` | `#004491` |
| `--sf-primary-35` | `#0050a7` |
| `--sf-primary-40` | `#005bbe` |
| `--sf-primary-50` | `#0073ed` |
| `--sf-primary-60` | `#488fff` |
| `--sf-primary-70` | `#7eabff` |
| `--sf-primary-80` | `#acc7ff` |
| `--sf-primary-85` | `#c2d5ff` |
| `--sf-primary-90` | `#d7e2ff` |
| `--sf-primary-95` | `#edf0ff` |
| `--sf-primary-98` | `#f9f9ff` |
| `--sf-secondary-5` | `#051126` |
| `--sf-secondary-10` | `#101b31` |
| `--sf-secondary-15` | `#1a263b` |
| `--sf-secondary-20` | `#253047` |
| `--sf-secondary-25` | `#303b52` |
| `--sf-secondary-30` | `#3c475e` |
| `--sf-secondary-35` | `#47526a` |
| `--sf-secondary-40` | `#535e77` |
| `--sf-secondary-50` | `#6c7791` |
| `--sf-secondary-60` | `#8591ab` |
| `--sf-secondary-70` | `#a0abc7` |
| `--sf-secondary-80` | `#bbc6e3` |
| `--sf-secondary-85` | `#c9d4f1` |
| `--sf-secondary-90` | `#d7e2ff` |
| `--sf-secondary-95` | `#edf0ff` |
| `--sf-secondary-98` | `#f9f9ff` |
| `--sf-tertiary-5` | `#23002d` |
| `--sf-tertiary-10` | `#32053e` |
| `--sf-tertiary-15` | `#3e1249` |
| `--sf-tertiary-20` | `#4a1e54` |
| `--sf-tertiary-25` | `#562960` |
| `--sf-tertiary-30` | `#63356c` |
| `--sf-tertiary-35` | `#6f4079` |
| `--sf-tertiary-40` | `#7c4c86` |
| `--sf-tertiary-50` | `#9765a0` |
| `--sf-tertiary-60` | `#b37ebb` |
| `--sf-tertiary-70` | `#cf98d8` |
| `--sf-tertiary-80` | `#ecb3f4` |
| `--sf-tertiary-85` | `#f9c2ff` |
| `--sf-tertiary-90` | `#fdd6ff` |
| `--sf-tertiary-95` | `#ffebfd` |
| `--sf-tertiary-98` | `#fff7fa` |
| `--sf-neutral-5` | `#0f1115` |
| `--sf-neutral-10` | `#1a1b1f` |
| `--sf-neutral-15` | `#24262a` |
| `--sf-neutral-20` | `#2f3035` |
| `--sf-neutral-25` | `#3a3b40` |
| `--sf-neutral-30` | `#45474b` |
| `--sf-neutral-35` | `#515257` |
| `--sf-neutral-40` | `#5d5e63` |
| `--sf-neutral-50` | `#76777c` |
| `--sf-neutral-60` | `#909095` |
| `--sf-neutral-70` | `#ababb0` |
| `--sf-neutral-80` | `#c6c6cb` |
| `--sf-neutral-85` | `#d4d4d9` |
| `--sf-neutral-90` | `#e3e2e7` |
| `--sf-neutral-95` | `#f1f0f6` |
| `--sf-neutral-98` | `#faf9fe` |
| `--sf-error-5` | `var(--sf-red-5)` |
| `--sf-error-10` | `var(--sf-red-10)` |
| `--sf-error-15` | `var(--sf-red-15)` |
| `--sf-error-20` | `var(--sf-red-20)` |
| `--sf-error-25` | `var(--sf-red-25)` |
| `--sf-error-30` | `var(--sf-red-30)` |
| `--sf-error-35` | `var(--sf-red-35)` |
| `--sf-error-40` | `var(--sf-red-40)` |
| `--sf-error-50` | `var(--sf-red-50)` |
| `--sf-error-60` | `var(--sf-red-60)` |
| `--sf-error-70` | `var(--sf-red-70)` |
| `--sf-error-80` | `var(--sf-red-80)` |
| `--sf-error-85` | `var(--sf-red-85)` |
| `--sf-error-90` | `var(--sf-red-90)` |
| `--sf-error-95` | `var(--sf-red-95)` |
| `--sf-error-98` | `var(--sf-red-98)` |
| `--sf-warning-5` | `var(--sf-amber-5)` |
| `--sf-warning-10` | `var(--sf-amber-10)` |
| `--sf-warning-15` | `var(--sf-amber-15)` |
| `--sf-warning-20` | `var(--sf-amber-20)` |
| `--sf-warning-25` | `var(--sf-amber-25)` |
| `--sf-warning-30` | `var(--sf-amber-30)` |
| `--sf-warning-35` | `var(--sf-amber-35)` |
| `--sf-warning-40` | `var(--sf-amber-40)` |
| `--sf-warning-50` | `var(--sf-amber-50)` |
| `--sf-warning-60` | `var(--sf-amber-60)` |
| `--sf-warning-70` | `var(--sf-amber-70)` |
| `--sf-warning-80` | `var(--sf-amber-80)` |
| `--sf-warning-85` | `var(--sf-amber-85)` |
| `--sf-warning-90` | `var(--sf-amber-90)` |
| `--sf-warning-95` | `var(--sf-amber-95)` |
| `--sf-warning-98` | `var(--sf-amber-98)` |
| `--sf-success-5` | `var(--sf-green-5)` |
| `--sf-success-10` | `var(--sf-green-10)` |
| `--sf-success-15` | `var(--sf-green-15)` |
| `--sf-success-20` | `var(--sf-green-20)` |
| `--sf-success-25` | `var(--sf-green-25)` |
| `--sf-success-30` | `var(--sf-green-30)` |
| `--sf-success-35` | `var(--sf-green-35)` |
| `--sf-success-40` | `var(--sf-green-40)` |
| `--sf-success-50` | `var(--sf-green-50)` |
| `--sf-success-60` | `var(--sf-green-60)` |
| `--sf-success-70` | `var(--sf-green-70)` |
| `--sf-success-80` | `var(--sf-green-80)` |
| `--sf-success-85` | `var(--sf-green-85)` |
| `--sf-success-90` | `var(--sf-green-90)` |
| `--sf-success-95` | `var(--sf-green-95)` |
| `--sf-success-98` | `var(--sf-green-98)` |
| `--sf-info-5` | `var(--sf-blue-5)` |
| `--sf-info-10` | `var(--sf-blue-10)` |
| `--sf-info-15` | `var(--sf-blue-15)` |
| `--sf-info-20` | `var(--sf-blue-20)` |
| `--sf-info-25` | `var(--sf-blue-25)` |
| `--sf-info-30` | `var(--sf-blue-30)` |
| `--sf-info-35` | `var(--sf-blue-35)` |
| `--sf-info-40` | `var(--sf-blue-40)` |
| `--sf-info-50` | `var(--sf-blue-50)` |
| `--sf-info-60` | `var(--sf-blue-60)` |
| `--sf-info-70` | `var(--sf-blue-70)` |
| `--sf-info-80` | `var(--sf-blue-80)` |
| `--sf-info-85` | `var(--sf-blue-85)` |
| `--sf-info-90` | `var(--sf-blue-90)` |
| `--sf-info-95` | `var(--sf-blue-95)` |
| `--sf-info-98` | `var(--sf-blue-98)` |

## Применение

### Как это работает

| Класс | Переменная |
| :--- | :--- |
| `from-*` | `--sf-gradient--color-1` |
| `via-*` | `--sf-gradient--color-2` |
| `to-*` | `--sf-gradient--color-3` |

Это те же переменные, что у классов `gr1-*`, `gr2-*` и `gr3-*`. Классы вида
подставляют недостающую точку: `bg-gradient-to-r from-primary to-tertiary`
рисует переход из двух цветов без `via-*`.

```html
<div class="bg-gradient-to-r from-primary to-tertiary h-d8"></div>
<div class="bg-gradient-to-b from-surface-0 to-primary-container h-f0"></div>
```

### Затухание

`to-transparent` растворяет цвет в фоне — для подложек под текстом поверх
картинки:

```html
<div class="bg-gradient-to-t from-on-surface to-transparent">…</div>
```

## Ограничения

- `from-*` нужен всегда: без начальной точки градиент не рисуется.
- Переменные наследуются: вложенный элемент с классом вида без своих точек
  берёт точки родителя.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Вид градиента](/ru/utilities/background/background-gradient-type/)
- [Градиент фона](/ru/utilities/background/background-gradient-background/)
