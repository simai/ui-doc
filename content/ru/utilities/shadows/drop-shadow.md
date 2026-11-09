---
title: "Падающая тень"
description: "Отбрасывает тень места по контуру видимой части элемента — по форме значка, прозрачной картинки или текста."
---

# Падающая тень

Классы `drop-shadow-{место}` отбрасывают тень места фильтром `drop-shadow()`:
тень повторяет форму видимой части элемента, а не его прямоугольник. Берите
их для значков, SVG и картинок с прозрачностью; для блоков берите
[тень элемента](/ru/utilities/shadows/element-shadow/).

## Пример

### Четыре места

Под каждым образцом — класс тени.

:::example {id="utilities/shadows/drop-shadow" label="drop-shadow-flat … drop-shadow-modal"}
:::

### Падающая тень и тень элемента

`shadow-overlay` рисует тень прямоугольника, `drop-shadow-overlay` — тень
формы.

:::example {id="utilities/shadows/drop-shadow-compare" label="shadow-overlay и drop-shadow-overlay"}
:::

### Наведение

С префиксом `hover:` тень меняется при наведении. Наведите указатель на
звезду.

:::example {id="utilities/shadows/drop-shadow-hover" label="hover:drop-shadow-overlay"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `drop-shadow-flat` | `box-shadow: none; filter: none` | — |
| `drop-shadow-raised` | `box-shadow: none; filter: drop-shadow(0 var(--sf-px) var(--sf-a2) var(--sf-shadow-key-color)) drop-shadow(0 var(--sf-a2) var(--sf-a8) var(--sf-shadow-ambient-color))` | — |
| `drop-shadow-overlay` | `box-shadow: none; filter: drop-shadow(0 var(--sf-a2) var(--sf-a4) var(--sf-shadow-key-color)) drop-shadow(0 var(--sf-a8) var(--sf-b6) var(--sf-shadow-ambient-color))` | — |
| `drop-shadow-modal` | `box-shadow: none; filter: drop-shadow(0 var(--sf-a4) var(--sf-a8) var(--sf-shadow-key-color)) drop-shadow(0 var(--sf-b6) var(--sf-c6) var(--sf-shadow-ambient-color))` | — |

Прежние имена работают до 2027-01-01: `drop-shadow-0` → `drop-shadow-flat`, `drop-shadow-1` → `drop-shadow-raised`, `drop-shadow-2` → `drop-shadow-overlay`, `drop-shadow-3` → `drop-shadow-overlay`, `drop-shadow-4` → `drop-shadow-modal`, `drop-shadow-5` → `drop-shadow-modal`. Все замены — на странице [Как обновить проект](/ru/guide/connection/updating/).

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:drop-shadow-flat`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-px` | `1px` |
| `--sf-a2` | `0.125rem` |
| `--sf-shadow-key-color` | `light-dark(var(--sf-black--alfa-16), var(--sf-black--alfa-28))` |
| `--sf-a8` | `0.5rem` |
| `--sf-shadow-ambient-color` | `light-dark(var(--sf-black--alfa-8), var(--sf-transparent))` |
| `--sf-a4` | `0.25rem` |
| `--sf-b6` | `1rem` |
| `--sf-c6` | `2rem` |

## Применение

Места те же, что у [тени элемента](/ru/utilities/shadows/element-shadow/):
`drop-shadow-flat` снимает тень, `drop-shadow-raised`, `drop-shadow-overlay`
и `drop-shadow-modal` рисуют тень приподнятого, всплывающего места и окна.
Каждый слой тени — отдельный `drop-shadow()` из двух цветов темы,
`--sf-shadow-key-color` и `--sf-shadow-ambient-color`.

```html
<img class="drop-shadow-raised" src="/images/product.png" alt="Наушники">
<svg class="drop-shadow-overlay color-primary" aria-hidden="true">…</svg>
```

## Ограничения

- Класс снимает с элемента `box-shadow`: падающая тень и тень элемента на
  одном элементе не сочетаются.
- Фильтр задаёт свойство `filter` и перекрывает другие фильтры того же
  элемента.
- Префиксов ширины экрана у семейства нет.

## См. также

- [Тень элемента](/ru/utilities/shadows/element-shadow/)
- [Поверхность и тень](/ru/guide/colour/elevation/)
