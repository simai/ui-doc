---
title: "Толщина внешней границы"
description: "Задаёт толщину внешнего контура от 0 до 4 пикселей, в том числе только в фокусе."
---

# Толщина внешней границы

Классы `outline-{n}` задают `outline-width` — толщину внешнего контура.
Берите их вместе с классом `outline` или классом стиля, чтобы сделать контур
толще, и с префиксом `focus-visible:`, чтобы выделить элемент в фокусе.

## Пример

### Шкала

Под каждым образцом — класс толщины; цвет и отступ задают `outline-primary
outline-offset-2`.

:::example {id="utilities/outline/outline-width" label="outline-0 … outline-4"}
:::

### Фокус

Контур толстеет только в фокусе. Щёлкните первую кнопку и переведите фокус
на вторую клавишей Tab: `focus:` срабатывает в обоих случаях,
`focus-visible:` — только при работе с клавиатуры.

:::example {id="utilities/outline/outline-width-states" label="focus: и focus-visible:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `outline-1` | `outline-width: var(--sf-a1)` | — |
| `outline-2` | `outline-width: var(--sf-a2)` | — |
| `outline-3` | `outline-width: var(--sf-a3)` | — |
| `outline-4` | `outline-width: var(--sf-a4)` | — |
| `outline-0` | `outline-width: var(--sf-0)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `focus-visible:`, `focus:`. Например: `focus-visible:outline-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-a1` | `0.0625rem` |
| `--sf-a2` | `0.125rem` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a4` | `0.25rem` |
| `--sf-0` | `0` |

## Применение

| Класс | Толщина при `1rem = 16px` |
| :--- | :--- |
| `outline-0` | 0 |
| `outline-1` | 1px |
| `outline-2` | 2px |
| `outline-3` | 3px |
| `outline-4` | 4px |

Класс толщины контур не включает: у элемента по умолчанию стиль контура
`none`. Добавьте класс `outline` из ядра или класс
[стиля](/ru/utilities/outline/outline-style/).

```html
<button class="outline outline-1 outline-primary outline-offset-2 focus-visible:outline-4">Отправить</button>
```

## Ограничения

- `outline-0` оставляет контур без толщины; на элементе в фокусе это убирает
  видимый фокус.
- Префиксов ширины экрана у семейства нет; из состояний есть `focus:` и
  `focus-visible:`.

## См. также

- [Стиль внешней границы](/ru/utilities/outline/outline-style/)
- [Цвет внешней границы](/ru/utilities/outline/outline-color/)
- [Отступ внешней границы](/ru/utilities/outline/outline-offset/)
- [Фокус](/ru/guide/fundamentals/focus/)
