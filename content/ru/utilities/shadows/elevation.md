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
| `elevation-1` | приподнятый элемент в потоке: пункт списка, ручка ползунка | `--sf-elevation-1--surface` и `--sf-elevation-1--shadow` |
| `elevation-2` | всплывающее меню, контекстное меню, подсказка | `--sf-elevation-2--surface` и `--sf-elevation-2--shadow` |
| `elevation-3` | модальное окно, календарь, выпадающий список | `--sf-elevation-3--surface` и `--sf-elevation-3--shadow` |
| `elevation-4` | выдвижная панель | `--sf-elevation-4--surface` и `--sf-elevation-4--shadow` |
| `elevation-5` | верх лестницы, делит поверхность с четвёртым | `--sf-elevation-5--surface` и `--sf-elevation-5--shadow` |

## Синтаксис

- `elevation-{0...5}`

## Чем отличается от `shadow-*`

`shadow-2` ставит **только тень**. В светлой теме этого достаточно: там высоту
несёт тень. В тёмной теме тень не работает вовсе — она чёрная, а фон почти
чёрный, — и панель ложится плашмя. Заметить это на светлом экране невозможно.

Поэтому для высоты берите `elevation-2`, а `shadow-2` оставьте для случая,
когда нужна именно тень и ничего больше.

В своём CSS ступень — это пара переменных одного номера, поверхность и тень:

```css
.project-panel {
    background: var(--sf-elevation-2--surface);
    --sf-on-surface-variant: var(--sf-on-elevation-2--variant);
    box-shadow: var(--sf-elevation-2--shadow);
}
```

Берите их всегда вместе. Тень ступени `--sf-elevation-N--shadow` без её
поверхности — та же ошибка, что `shadow-2` вместо `elevation-2`: в тёмной теме
панель пропадает. Компоненты Framework проверяются на это правило
автоматически.

## Настройка высоты в теме

Высоту можно перенастроить, не трогая компоненты: достаточно переопределить
переменные ступени. Например, в тёмной теме оставить только светлеющую
поверхность и убрать тень:

```css
.theme-dark {
    --sf-elevation-2--shadow: none;
}
```

Последний слой каждой тени — `--sf-shadow--rim`. По умолчанию он выключен
(`0 0 0 0 transparent`). Тема может включить его, чтобы обвести поднятые
панели тонким светлым краем в тёмной теме:

```css
.theme-dark {
    --sf-shadow--rim: 0 0 0 var(--sf-px) var(--sf-white--alfa-12);
}
```

Правило целиком, с замерами и порядком ступеней, — в руководстве:
[Границы и высота](/ru/guide/fundamentals/borders/).
