---
title: "Цвет падающей тени"
description: "Окрашивает падающую тень значка или картинки цветовой ролью темы, в том числе при наведении."
---

# Цвет падающей тени

Классы `drop-shadow-{цвет}` окрашивают тень, которую рисуют классы
[падающей тени](/ru/utilities/shadows/drop-shadow/). Берите их для цветного
свечения вокруг значка, логотипа или картинки с прозрачностью.

## Пример

### Роли

Под каждым образцом — класс цвета; ступень задаёт `drop-shadow-4`.

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
| `drop-shadow-transparent` | `--sf-shadow--color: var(--sf-transparent); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-transparent) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-transparent) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-transparent) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | — |
| `drop-shadow-{значение}` | `--sf-shadow--color: var(--sf-{значение}); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | `current`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `drop-shadow-surface` | `--sf-shadow--color: var(--sf-surface-1); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-1) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-1) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-1) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | — |
| `drop-shadow-surface-{значение}` | `--sf-shadow--color: var(--sf-surface-{значение}); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-{значение}) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-{значение}) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-{значение}) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | `0`, `1`, `2`, `3`, `4`, `inverse` |
| `drop-shadow-{значение}-container` | `--sf-shadow--color: var(--sf-{значение}-container); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-container) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `drop-shadow-surface-inverse-fixed` | `--sf-shadow--color: var(--sf-surface-inverse-fixed); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-inverse-fixed) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-inverse-fixed) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-surface-inverse-fixed) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | — |
| `drop-shadow-on-surface-variant` | `--sf-shadow--color: var(--sf-on-surface-variant); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface-variant) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface-variant) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface-variant) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | — |
| `drop-shadow-{значение}-transparent-select` | `--sf-shadow--color: var(--sf-{значение}-transparent-select); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-select) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-select) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-select) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `drop-shadow-{значение}-transparent-overlay` | `--sf-shadow--color: var(--sf-{значение}-transparent-overlay); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-overlay) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-overlay) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-{значение}-transparent-overlay) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `drop-shadow-on-surface` | `--sf-shadow--color: var(--sf-on-surface); --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-fill)); --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-outline)); --sf-shadow--color-shading: color-mix(in srgb, var(--sf-transparent), var(--sf-on-surface) var(--sf-shadow--alfa-shade)); --sf-shadow--color-shade: var(--sf-shadow--color-shading)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:drop-shadow-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-shadow--alfa-fill` | `24%` |
| `--sf-shadow--alfa-outline` | `12%` |
| `--sf-shadow--alfa-shade` | `8%` |
| `--sf-current` | `currentColor` |
| `--sf-surface-1` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-0` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
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
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |

## Применение

Цвета: `drop-shadow-on-surface`, `drop-shadow-on-surface-variant`, акценты
`primary`, `secondary`, `tertiary`, статусы `error`, `warning`, `success`,
поверхности `surface`, `surface-0` … `surface-4`, `surface-inverse`,
`surface-inverse-fixed`, контейнеры `-container` и полупрозрачные слои
`-transparent-select`, `-transparent-overlay`, а также `current` и
`transparent`.

```html
<svg class="drop-shadow-3 drop-shadow-primary hover:drop-shadow-tertiary" aria-hidden="true">…</svg>
```

## Ограничения

- Класс цвета без класса ступени рисует падающую тень первой ступени: ядро
  ставит фильтр каждому элементу, в классе которого есть слово `drop-shadow`.
- Цвета контейнеров и полупрозрачных слоёв уже бледные; тень из них почти не
  видна.
- Префиксов ширины экрана у семейства нет; из состояний есть только `hover:`.

## См. также

- [Падающая тень](/ru/utilities/shadows/drop-shadow/)
- [Цвет тени элемента](/ru/utilities/shadows/element-color/)
