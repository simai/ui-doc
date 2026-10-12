---
title: "Отступ внешней границы"
description: "Отодвигает внешний контур от рамки элемента на 1–4 пикселя."
---

# Отступ внешней границы

Классы `outline-offset-{n}` задают `outline-offset` — зазор между рамкой
элемента и его внешним контуром. Берите их, чтобы контур не сливался с
заливкой или рамкой элемента, — например, у кнопки в фокусе.

## Пример

Контур `outline-2 outline-primary` без отступа и с отступами `1` … `4`.

:::example {id="utilities/outline/outline-offset" label="outline-offset-1 … outline-offset-4"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `outline-offset-1` | `outline-offset: var(--sf-a1)` | — |
| `outline-offset-2` | `outline-offset: var(--sf-a2)` | — |
| `outline-offset-3` | `outline-offset: var(--sf-a3)` | — |
| `outline-offset-4` | `outline-offset: var(--sf-a4)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-a1` | `0.0625rem` |
| `--sf-a2` | `0.125rem` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a4` | `0.25rem` |

## Применение

| Класс | Отступ при `1rem = 16px` |
| :--- | :--- |
| `outline-offset-1` | 1px |
| `outline-offset-2` | 2px |
| `outline-offset-3` | 3px |
| `outline-offset-4` | 4px |

Без класса отступ — 0: контур прилегает к рамке.

```html
<a class="outline outline-2 outline-offset-2 outline-primary radius-ui" href="…">Ссылка</a>
```

## Ограничения

- Класса с нулевым и отрицательным отступом нет.
- Префиксов ширины экрана и состояния у семейства нет: отступ задают сразу,
  а в состоянии меняют толщину или цвет контура.

## См. также

- [Толщина внешней границы](/ru/utilities/outline/outline-width/)
- [Цвет внешней границы](/ru/utilities/outline/outline-color/)
- [Фокусное кольцо](/ru/utilities/outline/ring/)
