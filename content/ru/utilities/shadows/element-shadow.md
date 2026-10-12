---
title: "Тень элемента"
description: "Отбрасывает тень под элементом по шкале из пяти ступеней — для карточек, меню и всплывающих панелей."
---

# Тень элемента

Классы `shadow-{n}` задают `box-shadow` по шкале от `0` до `5`: чем выше
ступень, тем дальше и мягче тень. Берите их, когда нужна только тень; если
элемент поднимается над страницей, берите [высоту](/ru/utilities/shadows/elevation/) —
она ставит тень вместе с поверхностью.

## Пример

### Шкала

Под каждым образцом — класс тени.

:::example {id="utilities/shadows/element-shadow" label="shadow-0 … shadow-5"}
:::

### Наведение

С префиксом `hover:` тень меняется при наведении. Наведите указатель на
карточку.

:::example {id="utilities/shadows/element-shadow-hover" label="hover:shadow-4"}
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

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:shadow-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

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

| Класс | Куда |
| :--- | :--- |
| `shadow-0` | снять тень |
| `shadow-1` | приподнятый элемент в потоке: карточка, пункт списка |
| `shadow-2` | всплывающее меню, подсказка |
| `shadow-3` | модальное окно, выпадающий список |
| `shadow-4`, `shadow-5` | выдвижная панель и верхние слои |

Ступени `shadow-1` … `shadow-5` берут значения из токенов `--sf-ui-shadow-1`
… `--sf-ui-shadow-5`; цвет тени задают классы
[цвета тени](/ru/utilities/shadows/element-color/).

```html
<article class="bg-surface-0 radius-surface p-3 shadow-1 hover:shadow-3 transition">…</article>
```

## Ограничения

- В тёмной теме тень почти не видна на тёмном фоне. Для поднятых панелей
  берите `elevation-*`: высоту в тёмной теме показывает светлеющая
  поверхность.
- Ядро даёт тень первой ступени каждому элементу, в классе которого есть
  слово `shadow`. Поэтому класс цвета тени без класса ступени уже рисует тень,
  а `shadow-0` её снимает.
- Тень и [кольцо](/ru/utilities/outline/ring/) — одно свойство `box-shadow`:
  на одном элементе остаётся то, что задано позже в CSS.
- Префиксов ширины экрана у семейства нет.

## См. также

- [Цвет тени элемента](/ru/utilities/shadows/element-color/)
- [Высота](/ru/utilities/shadows/elevation/)
- [Падающая тень](/ru/utilities/shadows/drop-shadow/)
