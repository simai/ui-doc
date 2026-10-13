---
title: "Цвет placeholder"
description: "Красит текст-подсказку в пустом поле по роли темы, в том числе при наведении и фокусе."
---

# Цвет placeholder

Классы `placeholder-*` задают цвет текста-подсказки (`::placeholder`), который
поле показывает, пока оно пустое. Берите их, когда подсказка должна читаться на
необычном фоне поля или отличаться по статусу.

## Пример

### Роли

Под каждым полем — класс подсказки. На заливке `bg-primary` подсказка берёт
парную роль `placeholder-on-primary`.

:::example {id="utilities/forms/placeholder-color" label="Цвет подсказки по ролям"}
:::

### Наведение и фокус

Префикс применяет цвет только в состоянии. Наведите указатель на первое поле,
щёлкните во второе — его подсказка исчезнет.

:::example {id="utilities/forms/placeholder-color-states" label="hover:placeholder-* и focus:placeholder-*"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `placeholder-{значение}` | `.placeholder-{значение}::-webkit-input-placeholder { color: var(--sf-{значение}) }; .placeholder-{значение}::-moz-placeholder { color: var(--sf-{значение}) }; .placeholder-{значение}:-ms-input-placeholder { color: var(--sf-{значение}) }; .placeholder-{значение}::-ms-input-placeholder { color: var(--sf-{значение}) }; .placeholder-{значение}::placeholder { color: var(--sf-{значение}) }` | `transparent`, `current`, `inherit`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `placeholder-on-{значение}` | `.placeholder-on-{значение}::-webkit-input-placeholder { color: var(--sf-on-{значение}) }; .placeholder-on-{значение}::-moz-placeholder { color: var(--sf-on-{значение}) }; .placeholder-on-{значение}:-ms-input-placeholder { color: var(--sf-on-{значение}) }; .placeholder-on-{значение}::-ms-input-placeholder { color: var(--sf-on-{значение}) }; .placeholder-on-{значение}::placeholder { color: var(--sf-on-{значение}) }` | `surface`, `disable`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `placeholder-on-surface-{значение}` | `.placeholder-on-surface-{значение}::-webkit-input-placeholder { color: var(--sf-on-surface-{значение}) }; .placeholder-on-surface-{значение}::-moz-placeholder { color: var(--sf-on-surface-{значение}) }; .placeholder-on-surface-{значение}:-ms-input-placeholder { color: var(--sf-on-surface-{значение}) }; .placeholder-on-surface-{значение}::-ms-input-placeholder { color: var(--sf-on-surface-{значение}) }; .placeholder-on-surface-{значение}::placeholder { color: var(--sf-on-surface-{значение}) }` | `fixed`, `variant`, `inverse` |
| `placeholder-on-surface-inverse-fixed` | `.placeholder-on-surface-inverse-fixed::-webkit-input-placeholder { color: var(--sf-on-surface-inverse-fixed) }; .placeholder-on-surface-inverse-fixed::-moz-placeholder { color: var(--sf-on-surface-inverse-fixed) }; .placeholder-on-surface-inverse-fixed:-ms-input-placeholder { color: var(--sf-on-surface-inverse-fixed) }; .placeholder-on-surface-inverse-fixed::-ms-input-placeholder { color: var(--sf-on-surface-inverse-fixed) }; .placeholder-on-surface-inverse-fixed::placeholder { color: var(--sf-on-surface-inverse-fixed) }` | — |
| `placeholder-on-{значение}-container` | `.placeholder-on-{значение}-container::-webkit-input-placeholder { color: var(--sf-on-{значение}-container) }; .placeholder-on-{значение}-container::-moz-placeholder { color: var(--sf-on-{значение}-container) }; .placeholder-on-{значение}-container:-ms-input-placeholder { color: var(--sf-on-{значение}-container) }; .placeholder-on-{значение}-container::-ms-input-placeholder { color: var(--sf-on-{значение}-container) }; .placeholder-on-{значение}-container::placeholder { color: var(--sf-on-{значение}-container) }` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `placeholder-on-{значение}-container-graphic` | `.placeholder-on-{значение}-container-graphic::-webkit-input-placeholder { color: var(--sf-on-{значение}-container-graphic) }; .placeholder-on-{значение}-container-graphic::-moz-placeholder { color: var(--sf-on-{значение}-container-graphic) }; .placeholder-on-{значение}-container-graphic:-ms-input-placeholder { color: var(--sf-on-{значение}-container-graphic) }; .placeholder-on-{значение}-container-graphic::-ms-input-placeholder { color: var(--sf-on-{значение}-container-graphic) }; .placeholder-on-{значение}-container-graphic::placeholder { color: var(--sf-on-{значение}-container-graphic) }` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `focus:`, `hover:`. Например: `focus:placeholder-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-inherit` | `inherit` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-surface-fixed` | `var(--sf-neutral-10)` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-on-surface-inverse` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-10))` |
| `--sf-on-surface-inverse-fixed` | `var(--sf-neutral-90)` |
| `--sf-disable` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` |
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

## Применение

Подсказка — второстепенный текст, поэтому на обычной поверхности её цвет —
`placeholder-on-surface-variant`. Роли `placeholder-on-*` берите для полей на
заливке или контейнере той же роли: `placeholder-on-primary` на `bg-primary`,
`placeholder-on-error-container` на `bg-error-container`.

```html
<input class="bg-surface color-on-surface placeholder-on-surface-variant focus:placeholder-transparent"
       placeholder="Имя и фамилия">
```

`focus:placeholder-transparent` прячет подсказку, как только поле получает
фокус. Прозрачность подсказки отдельно от цвета задают классы
[`placeholder-opacity-*`](/ru/utilities/forms/placeholder-opacity/).

## Ограничения

- Подсказка не заменяет подпись поля: она исчезает при вводе, а скринридеры
  читают её не всегда. Подпись задайте элементом `label` или `aria-label`.
- Светлая подсказка на светлом поле может не набрать контраста 4,5:1;
  проверяйте её в обеих темах.
- Префиксов ширины экрана у семейства нет.

## См. также

- [Прозрачность placeholder](/ru/utilities/forms/placeholder-opacity/)
- [Цвет текста](/ru/utilities/text-formatting/text-color/)
- [Поля ввода](/ru/components/forms/inputs/)
