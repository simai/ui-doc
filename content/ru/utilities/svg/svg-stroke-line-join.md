---
title: "Углы обводки"
description: "Задаёт форму углов, где сходятся отрезки обводки SVG."
---

# Углы обводки

Классы `linejoin-*` задают `stroke-linejoin` — форму углов на стыке отрезков
обводки SVG. Берите `linejoin-round` для мягких линейных значков,
`linejoin-bevel` — чтобы острые углы не выступали.

## Пример

### Формы

Одинаковый острый угол с толстой обводкой.

:::example {id="utilities/svg/svg-stroke-line-join" label="Формы углов обводки"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `linejoin-miter` | `stroke-linejoin: miter` | — |
| `linejoin-arcs` | `stroke-linejoin: arcs` | — |
| `linejoin-bevel` | `stroke-linejoin: bevel` | — |
| `linejoin-miter-clip` | `stroke-linejoin: miter-clip` | — |
| `linejoin-round` | `stroke-linejoin: round` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Какую форму выбрать

| Класс | Угол |
| :--- | :--- |
| `linejoin-miter` | острый — значение по умолчанию |
| `linejoin-round` | скруглённый |
| `linejoin-bevel` | срезанный |
| `linejoin-miter-clip` | острый, при слишком длинном острие обрезается |
| `linejoin-arcs` | продолжает кривизну отрезков дугами |

```html
<svg class="svg-3 fill-transparent stroke-current stroke-2 linecap-round linejoin-round" viewBox="0 0 24 24" aria-hidden="true">…</svg>
```

Свойство наследуется: класс на `<svg>` действует на все фигуры внутри.

## Ограничения

- Loader не читает классы на самих элементах `<svg>`, `<path>` и `<g>`:
  такой класс не загружает модуль утилиты и действует, только если модуль
  уже загрузил другой элемент страницы. Одноцветный знак надёжнее красить так:
  `fill="currentColor"` (или `stroke="currentColor"`) на SVG и утилита
  `color-*` на обёртке — ссылке или `<span>` (см. [Знак бренда и встроенный SVG](/ru/guide/colour/colour-roles/#знак-бренда-и-встроенный-svg)).
- `linejoin-miter-clip` и `linejoin-arcs` поддерживают не все браузеры; в
  Chromium они не действуют, и угол рисуется как с `linejoin-miter`.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Концы обводки](/ru/utilities/svg/svg-stroke-line-cap/)
- [Толщина обводки](/ru/utilities/svg/svg-stroke-width/)
