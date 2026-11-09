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
| `shadow-flat` | `box-shadow: var(--sf-shadow-flat)` | — |
| `shadow-raised` | `box-shadow: 0 var(--sf-px) var(--sf-a2) var(--sf-shadow-key-color), 0 var(--sf-a2) var(--sf-a8) var(--sf-shadow-ambient-color)` | — |
| `shadow-overlay` | `box-shadow: 0 var(--sf-a2) var(--sf-a4) var(--sf-shadow-key-color), 0 var(--sf-a8) var(--sf-b6) var(--sf-shadow-ambient-color)` | — |
| `shadow-modal` | `box-shadow: 0 var(--sf-a4) var(--sf-a8) var(--sf-shadow-key-color), 0 var(--sf-b6) var(--sf-c6) var(--sf-shadow-ambient-color)` | — |

Прежние имена работают до 2027-01-01: `shadow-0` → `shadow-flat`, `shadow-1` → `shadow-raised`, `shadow-2` → `shadow-overlay`, `shadow-3` → `shadow-overlay`, `shadow-4` → `shadow-modal`, `shadow-5` → `shadow-modal`. Все замены — на странице [Как обновить проект](/ru/guide/connection/updating/).

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:shadow-flat`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-shadow-flat` | `none` |
| `--sf-px` | `1px` |
| `--sf-a2` | `0.125rem` |
| `--sf-shadow-key-color` | `light-dark(var(--sf-black--alfa-16), var(--sf-black--alfa-28))` |
| `--sf-a8` | `0.5rem` |
| `--sf-shadow-ambient-color` | `light-dark(var(--sf-black--alfa-8), var(--sf-transparent))` |
| `--sf-a4` | `0.25rem` |
| `--sf-b6` | `1rem` |
| `--sf-c6` | `2rem` |

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
