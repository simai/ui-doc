---
title: "Высота"
description: "Уровень подъёма элемента: поверхность ступени и её тень одним классом"
tags: [box-shadow, background-color, elevation]
---

# Высота

:badge[box-shadow]{type=main scheme=on-surface size=1}
:badge[background-color]{type=main scheme=on-surface size=1}

Поднятый элемент показывает высоту двумя вещами сразу: тенью под собой и
поверхностью, на которой стоит. Утилиты `elevation-*` ставят обе.

## Наглядный пример

:::example {id="utilities/shadows/elevation" label="Высота"}
:::

## Таблица классов

| Класс | Куда | Что ставит |
|:---|:---|:---|
| `elevation-0` | на уровне страницы | `--sf-surface-0`, тень снята |
| `elevation-1` | приподнятый элемент в потоке: пункт списка, ручка ползунка | `--sf-elevation-1--surface` и `--sf-ui-shadow-1` |
| `elevation-2` | всплывающее меню, контекстное меню, подсказка | `--sf-elevation-2--surface` и `--sf-ui-shadow-2` |
| `elevation-3` | модальное окно, календарь, выпадающий список | `--sf-elevation-3--surface` и `--sf-ui-shadow-3` |
| `elevation-4` | выдвижная панель | `--sf-elevation-4--surface` и `--sf-ui-shadow-4` |
| `elevation-5` | верх лестницы, делит поверхность с четвёртым | `--sf-elevation-5--surface` и `--sf-ui-shadow-5` |

## Синтаксис

- `elevation-{0...5}`

## Чем отличается от `shadow-*`

`shadow-2` ставит **только тень**. В светлой теме этого достаточно: там высоту
несёт тень. В тёмной теме тень не работает вовсе — она чёрная, а фон почти
чёрный, — и панель ложится плашмя. Заметить это на светлом экране невозможно.

Поэтому для высоты берите `elevation-2`, а `shadow-2` оставьте для случая,
когда нужна именно тень и ничего больше.

В своём CSS то же самое двумя переменными:

```css
.project-panel {
    background: var(--sf-elevation-2--surface);
    box-shadow: var(--sf-ui-shadow-2);
}
```

Правило целиком, с замерами и порядком ступеней, — в руководстве:
[Границы и высота](/ru/guide/fundamentals/borders/).
