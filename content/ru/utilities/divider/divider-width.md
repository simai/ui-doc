---
title: "Толщина разделителя"
description: "Проводит линии между соседними элементами списка или ряда и задаёт их толщину."
---

# Толщина разделителя

Классы `divider-y-{n}` и `divider-x-{n}` ставятся на контейнер и проводят
линию между его соседними потомками: `divider-y-*` — между элементами в
столбце, `divider-x-*` — между элементами в строке. Берите их для списков,
меню и рядов кнопок, чтобы не ставить рамку каждому пункту вручную.

## Пример

### Между элементами столбца

Под каждым списком — класс толщины на контейнере; цвет задаёт
`divider-outline`.

:::example {id="utilities/divider/divider-width" label="divider-y-1 … divider-y-4"}
:::

### Между элементами строки

:::example {id="utilities/divider/divider-width-x" label="divider-x-1 … divider-x-4"}
:::

### Обратный порядок

В контейнере с обратным порядком (`flex-col-reverse`) линия встаёт не на
ту сторону: над верхним пунктом есть лишняя черта. `divider-y-reverse`
переносит линии на другую сторону пунктов.

:::example {id="utilities/divider/divider-width-reverse" label="divider-y-reverse"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `divider-x-1` (`.divider-x-1 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-a1) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-a1) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divide-x-1` (`.divide-x-1 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-a1) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-a1) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divider-y-1` (`.divider-y-1 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-a1) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-a1) * var(--sf-divide-y-reverse))` | — |
| `divide-y-1` (`.divide-y-1 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-a1) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-a1) * var(--sf-divide-y-reverse))` | — |
| `divider-x-2` (`.divider-x-2 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-a2) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-a2) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divide-x-2` (`.divide-x-2 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-a2) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-a2) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divider-y-2` (`.divider-y-2 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-a2) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-a2) * var(--sf-divide-y-reverse))` | — |
| `divide-y-2` (`.divide-y-2 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-a2) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-a2) * var(--sf-divide-y-reverse))` | — |
| `divider-x-3` (`.divider-x-3 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-a4) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-a4) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divide-x-3` (`.divide-x-3 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-a4) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-a4) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divider-y-3` (`.divider-y-3 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-a4) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-a4) * var(--sf-divide-y-reverse))` | — |
| `divide-y-3` (`.divide-y-3 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-a4) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-a4) * var(--sf-divide-y-reverse))` | — |
| `divider-x-4` (`.divider-x-4 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-a8) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-a8) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divide-x-4` (`.divide-x-4 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-a8) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-a8) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divider-y-4` (`.divider-y-4 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-a8) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-a8) * var(--sf-divide-y-reverse))` | — |
| `divide-y-4` (`.divide-y-4 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-a8) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-a8) * var(--sf-divide-y-reverse))` | — |
| `divider-x-0` (`.divider-x-0 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-0) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-0) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divide-x-0` (`.divide-x-0 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse:0; border-inline-end-width: calc(var(--sf-0) * var(--sf-divide-x-reverse)); border-inline-start-width: calc(var(--sf-0) * (1 - var(--sf-divide-x-reverse)))` | — |
| `divider-y-0` (`.divider-y-0 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-0) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-0) * var(--sf-divide-y-reverse))` | — |
| `divide-y-0` (`.divide-y-0 > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse:0; border-top-width: calc(var(--sf-0) * (1 - var(--sf-divide-y-reverse))); border-bottom-width: calc(var(--sf-0) * var(--sf-divide-y-reverse))` | — |
| `divider-y-reverse` (`.divider-y-reverse > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse: 1` | — |
| `divide-y-reverse` (`.divide-y-reverse > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-y-reverse: 1` | — |
| `divider-x-reverse` (`.divider-x-reverse > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse: 1` | — |
| `divide-x-reverse` (`.divide-x-reverse > :not([hidden]) ~ :not([hidden])`) | `--sf-divide-x-reverse: 1` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-a1` | `0.0625rem` |
| `--sf-a2` | `0.125rem` |
| `--sf-a4` | `0.25rem` |
| `--sf-a8` | `0.5rem` |
| `--sf-0` | `0` |

## Применение

### Шкала

| Класс | Толщина при `1rem = 16px` |
| :--- | :--- |
| `divider-y-1`, `divider-x-1` | 1px |
| `divider-y-2`, `divider-x-2` | 2px |
| `divider-y-3`, `divider-x-3` | 4px |
| `divider-y-4`, `divider-x-4` | 8px |

### Куда встаёт линия

Линия — это рамка каждого видимого потомка, кроме первого: верхняя у
`divider-y-*`, в начале строки у `divider-x-*`. Скрытые атрибутом `hidden`
потомки пропускаются. С `divider-y-reverse` и `divider-x-reverse` линия
встаёт с другой стороны — снизу или в конце строки.

```html
<ul class="flex flex-col divider-y-1 divider-outline-variant">
  <li class="p-y-2">Профиль</li>
  <li class="p-y-2">Уведомления</li>
  <li class="p-y-2">Безопасность</li>
</ul>
```

### Цвет и стиль

Без класса цвета линия берёт цвет текста. Цвет задают классы
[цвета разделителя](/ru/utilities/divider/divider-color/), вид линии —
[стиля разделителя](/ru/utilities/divider/divider-style/).

У каждого класса есть второе имя с `divide-` вместо `divider-`:
`divide-y-1` — то же, что `divider-y-1`. В разметке пишите `divider-`.

### Классы ядра divider и divider-none

Два класса включают и выключают разделители между пунктами без отдельных
классов толщины и цвета. Как и классы шкалы, они ставятся на контейнер и
действуют на каждого видимого потомка, кроме первого.

| Класс | CSS для пунктов после первого |
| :--- | :--- |
| `divider` | `border: var(--sf-px) var(--sf-outline-variant) solid` |
| `divider-none` | `border-width: var(--sf-0)` |

`divider` даёт линию в один пиксель цвета края области. `divider-none`
снимает толщину у рамок пунктов и убирает разделители. Префиксов ширины экрана
и состояния у этих классов нет.

```html
<ul class="flex flex-col divider">
  <li class="p-y-2">Профиль</li>
  <li class="p-y-2">Уведомления</li>
</ul>
```

## Ограничения

- `divider-y-0` и `divider-x-0` в выпуске рисуют линию средней толщины
  браузера (около 3px), а не убирают её: значение без единицы не подходит для
  толщины рамки. Чтобы убрать линии, ставьте `divider-none`.
- Класс `divider` из ядра обводит рамкой в 1px все стороны каждого пункта,
  кроме первого, а не только сторону между пунктами. Для линии только между
  пунктами берите `divider-y-1` или `divider-x-1` с классом цвета.
- Линия занимает место в пункте: она входит в его размер.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Цвет разделителя](/ru/utilities/divider/divider-color/)
- [Стиль разделителя](/ru/utilities/divider/divider-style/)
- [Прозрачность разделителя](/ru/utilities/divider/divider-opacity/)
- [Толщина границы](/ru/utilities/border/border-width/)
