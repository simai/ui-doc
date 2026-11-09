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
| `drop-shadow-0` | `--sf-shadow--level-ratio: 0` | — |
| `drop-shadow-1` | `--sf-shadow--level-ratio: 1` | — |
| `drop-shadow-2` | `--sf-shadow--level-ratio: 2` | — |
| `drop-shadow-3` | `--sf-shadow--level-ratio: 4` | — |
| `drop-shadow-4` | `--sf-shadow--level-ratio: 8` | — |
| `drop-shadow-5` | `--sf-shadow--level-ratio: 16` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:drop-shadow-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

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
