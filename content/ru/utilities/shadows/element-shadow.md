---
title: "Тень элемента"
description: "Ставит элементу тень его места: на странице, приподнятое, всплывающее или окно."
---

# Тень элемента

Классы `shadow-{место}` ставят элементу тень одного из четырёх мест: на
странице, приподнятое, всплывающее, окно. Берите их, когда нужна только тень;
если элемент поднимается над страницей, берите [высоту](/ru/utilities/shadows/elevation/) —
она ставит тень вместе с поверхностью.

## Пример

### Четыре места

Под каждым образцом — класс тени. Переключите тему сайта: в тёмной теме тень
короче, а место показывает поверхность.

:::example {id="utilities/shadows/element-shadow" label="shadow-flat … shadow-modal"}
:::

### Наведение

С префиксом `hover:` тень меняется при наведении. Наведите указатель на
карточку: она приподнимается.

:::example {id="utilities/shadows/element-shadow-hover" label="hover:shadow-raised"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `shadow-0` | `--sf-shadow--level-ratio: 0; box-shadow: none` | — |
| `shadow-1` | `--sf-shadow--level-ratio: 1; box-shadow: 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading); box-shadow: var(--sf-ui-shadow-1, 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading))` | — |
| `shadow-2` | `--sf-shadow--level-ratio: 2; box-shadow: 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading); box-shadow: var(--sf-ui-shadow-2, 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading))` | — |
| `shadow-3` | `--sf-shadow--level-ratio: 4; box-shadow: 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading); box-shadow: var(--sf-ui-shadow-3, 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading))` | — |
| `shadow-4` | `--sf-shadow--level-ratio: 8; box-shadow: 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading); box-shadow: var(--sf-ui-shadow-4, 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading))` | — |
| `shadow-5` | `--sf-shadow--level-ratio: 16; box-shadow: 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading); box-shadow: var(--sf-ui-shadow-5, 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill), 0 calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0 var(--sf-shadow--color-outline), 0 calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shading))` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:shadow-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-a2` | `0.125rem` |
| `--sf-a1` | `0.0625rem` |
| `--sf-shadow--color-fill` | `var(--sf-black--alfa-12)` |
| `--sf-a3` | `0.1875rem` |
| `--sf-shadow--color-outline` | `var(--sf-black--alfa-8)` |
| `--sf-a4` | `0.25rem` |
| `--sf-shadow--color-shading` | `var(--sf-black--alfa-4)` |
| `--sf-ui-shadow-1` | `0 var(--sf-a2) var(--sf-a4) var(--sf-px) var(--sf-shadow--color-shading), 0 var(--sf-px) var(--sf-a3) 0 var(--sf-shadow--color-outline), 0 var(--sf-a2) var(--sf-a2) calc(-1 * var(--sf-px)) var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-2` | `0 var(--sf-a4) var(--sf-a8) var(--sf-a2) var(--sf-shadow--color-shading), 0 var(--sf-a2) var(--sf-a6) 0 var(--sf-shadow--color-outline), 0 var(--sf-a4) var(--sf-a4) calc(-1 * var(--sf-a2)) var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-3` | `0 var(--sf-a8) var(--sf-b6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a4) var(--sf-b2) 0 var(--sf-shadow--color-outline), 0 var(--sf-a8) var(--sf-a8) calc(-1 * var(--sf-a4)) var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-4` | `0 var(--sf-b6) var(--sf-c6) var(--sf-a4) var(--sf-shadow--color-shading), 0 var(--sf-a8) var(--sf-c2) 0 var(--sf-shadow--color-outline), 0 var(--sf-b6) var(--sf-b6) calc(-1 * var(--sf-a8)) var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-5` | `0 var(--sf-c6) var(--sf-d6) var(--sf-a8) var(--sf-shadow--color-shading), 0 var(--sf-b6) var(--sf-d2) 0 var(--sf-shadow--color-outline), 0 var(--sf-c6) var(--sf-c6) calc(-1 * var(--sf-b6)) var(--sf-shadow--color-fill)` |

## Применение

| Класс | Место | Куда |
| :--- | :--- | :--- |
| `shadow-flat` | на странице | снять тень; край элемента — линия `--sf-outline-variant` |
| `shadow-raised` | приподнятое | карточка-ссылка под указателем, шапка при прокрутке, ручка, плашка |
| `shadow-overlay` | всплывающее | меню, выпадающий список, поповер, подсказка, уведомление |
| `shadow-modal` | окно | диалог и шторка над затемнением |

Каждый класс рисует тень из двух цветов темы: короткой ключевой
`--sf-shadow-key-color` и широкой рассеянной `--sf-shadow-ambient-color`.
Смещения и размытия — ступени линейки размеров; значения и то, какие
компоненты где стоят, — в руководстве [Поверхность и тень](/ru/guide/colour/elevation/).

```html
<a class="block bg-surface-card radius-surface p-3 border border-outline-variant hover:shadow-raised transition" href="/catalog/">…</a>
```

## Ограничения

- В тёмной теме рассеянной тени нет, остаётся только короткая ключевая. Для
  поднятых панелей берите `elevation-*`: в тёмной теме место показывает
  светлеющая поверхность.
- Тень и [кольцо](/ru/utilities/outline/ring/) — одно свойство `box-shadow`:
  на одном элементе остаётся то, что задано позже в CSS.
- Префиксов ширины экрана у семейства нет.

## См. также

- [Высота](/ru/utilities/shadows/elevation/)
- [Падающая тень](/ru/utilities/shadows/drop-shadow/)
- [Поверхность и тень](/ru/guide/colour/elevation/)
