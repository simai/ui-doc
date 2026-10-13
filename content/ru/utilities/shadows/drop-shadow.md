---
title: "Падающая тень"
description: "Отбрасывает тень по контуру видимой части элемента — по форме значка, прозрачной картинки или текста."
---

# Падающая тень

Классы `drop-shadow-{n}` отбрасывают тень фильтром `drop-shadow()`: тень
повторяет форму видимой части элемента, а не его прямоугольник. Берите их для
значков, SVG и картинок с прозрачностью; для блоков берите
[тень элемента](/ru/utilities/shadows/element-shadow/).

## Пример

### Шкала

Под каждым образцом — класс ступени.

:::example {id="utilities/shadows/drop-shadow" label="drop-shadow-0 … drop-shadow-5"}
:::

### Падающая тень и тень элемента

`shadow-3` рисует тень прямоугольника, `drop-shadow-3` — тень формы.

:::example {id="utilities/shadows/drop-shadow-compare" label="shadow-3 и drop-shadow-3"}
:::

### Наведение

С префиксом `hover:` ступень меняется при наведении. Наведите указатель на
звезду.

:::example {id="utilities/shadows/drop-shadow-hover" label="hover:drop-shadow-5"}
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

Ступени `1` … `5` удваивают смещение и размытие тени: множители 1, 2, 4, 8 и
16. `drop-shadow-0` снимает тень.

```html
<img class="drop-shadow-2" src="/images/product.png" alt="Наушники">
<svg class="drop-shadow-1 color-primary" aria-hidden="true">…</svg>
```

## Ограничения

- Ядро ставит фильтр каждому элементу, в классе которого есть слово
  `drop-shadow`, и убирает у него `box-shadow`: падающая тень и тень элемента
  на одном элементе не сочетаются.
- Фильтр задаёт свойство `filter` и перекрывает другие фильтры того же
  элемента.
- Префиксов ширины экрана у семейства нет.

## См. также

- [Цвет падающей тени](/ru/utilities/shadows/drop-shadow-color/)
- [Тень элемента](/ru/utilities/shadows/element-shadow/)
