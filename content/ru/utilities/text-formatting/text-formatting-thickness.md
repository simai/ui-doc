---
title: "Толщина оформления текста"
description: "Задаёт толщину подчёркивания и других линий оформления текста."
---

# Толщина оформления текста

Классы `decoration-*` с числом задают толщину линии оформления текста. Берите
их, когда линия должна быть заметнее обычной — у активного пункта меню, у
выделенного термина — или тоньше.

## Пример

Подчёркнутый текст с разной толщиной линии. Подпись над образцом — класс,
который на нём стоит.

:::example {id="utilities/text-formatting/text-formatting-thickness" label="Шкала толщины"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `decoration-auto` | `text-decoration-thickness: auto` | — |
| `decoration-font` | `text-decoration-thickness: from-font` | — |
| `decoration-0` | `text-decoration-thickness: var(--sf-a0)` | — |
| `decoration-1` | `text-decoration-thickness: var(--sf-a1)` | — |
| `decoration-2` | `text-decoration-thickness: var(--sf-a2)` | — |
| `decoration-3` | `text-decoration-thickness: var(--sf-a3)` | — |
| `decoration-4` | `text-decoration-thickness: var(--sf-a4)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-a0` | `0rem` |
| `--sf-a1` | `0.0625rem` |
| `--sf-a2` | `0.125rem` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a4` | `0.25rem` |

## Применение

Толщина не рисует линию: добавьте класс к элементу с `underline`,
`overline`, `line-through` или к ссылке. `decoration-auto` оставляет толщину
браузеру, `decoration-font` берёт её из шрифта.

```html
<a class="underline decoration-2 decoration-primary decoration-offset-2" href="/ru/">Активный раздел</a>
```

## Ограничения

- `decoration-0` задаёт нулевую толщину; чтобы наверняка убрать линию, берите
  `decoration-none`.
- Значения шкалы заданы в `rem` и не растут вместе с размером шрифта.

## См. также

- [Линии оформления текста](/ru/utilities/text-formatting/text-decoration/)
- [Стиль линий оформления](/ru/utilities/text-formatting/text-decoration-style/)
- [Смещение линий оформления](/ru/utilities/text-formatting/text-decoration-offset/)
