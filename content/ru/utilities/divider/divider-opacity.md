---
title: "Прозрачность разделителя"
description: "Задаёт непрозрачность цвета линий между соседними элементами контейнера."
---

# Прозрачность разделителя

Классы `divider-opacity-*` ставятся на контейнер и задают непрозрачность
цвета линий, которые проводят классы
[толщины](/ru/utilities/divider/divider-width/) и
[цвета разделителя](/ru/utilities/divider/divider-color/). Берите
`divider-opacity-0`, чтобы спрятать линии и сохранить их место, и
`divider-opacity-full`, чтобы вернуть полный цвет.

## Пример

Списки с `divider-y-2 divider-primary`; под каждым — класс прозрачности.

:::example {id="utilities/divider/divider-opacity" label="divider-opacity-full и divider-opacity-0"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `divider-opacity-{значение}` | `--sf-divider--alfa: var(--sf-opacity-{значение}0, 0.{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `divide-opacity-{значение}` | `--sf-divider--alfa: var(--sf-opacity-{значение}0, 0.{значение})` | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9` |
| `divider-opacity-full` | `--sf-divider--alfa: 1` | — |
| `divide-opacity-full` | `--sf-divider--alfa: 1` | — |
| `divider-opacity-0` | `--sf-divider--alfa: 0` | — |
| `divide-opacity-0` | `--sf-divider--alfa: 0` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-opacity-10` | `10%` |
| `--sf-opacity-20` | `20%` |
| `--sf-opacity-30` | `30%` |
| `--sf-opacity-40` | `40%` |
| `--sf-opacity-50` | `50%` |
| `--sf-opacity-60` | `60%` |
| `--sf-opacity-70` | `70%` |
| `--sf-opacity-80` | `80%` |
| `--sf-opacity-90` | `90%` |

## Применение

| Класс | Непрозрачность линии |
| :--- | :--- |
| `divider-opacity-full` | полная — значение по умолчанию |
| `divider-opacity-0` | линия прозрачна, её толщина сохраняется |

Класс меняет переменную `--sf-divider--alfa`, которую читают классы цвета
разделителя; без класса цвета он ничего не меняет.

```html
<ul class="flex flex-col divider-y-1 divider-primary divider-opacity-0">…</ul>
```

У каждого класса есть второе имя с `divide-` вместо `divider-`. В разметке
пишите `divider-`.

## Ограничения

- `divider-opacity-1` … `divider-opacity-9` в выпуске не делают линию
  полупрозрачной: процент из токена умножается на процент, браузер отбрасывает
  такой цвет, и линия берёт цвет текста. Для полупрозрачной линии берите
  мягкие цвета: `divider-outline-variant` или цвет роли с `-container`
  у [цвета границы](/ru/utilities/border/border-color/).
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Цвет разделителя](/ru/utilities/divider/divider-color/)
- [Толщина разделителя](/ru/utilities/divider/divider-width/)
