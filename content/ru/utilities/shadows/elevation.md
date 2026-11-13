---
title: "Высота"
description: "Классы `elevation-{n}` уходят из SIMAI Framework 2027-01-01: вместо одного класса — два, фон места и его тень."
---

# Высота

Классы `elevation-{n}` уходят из SIMAI Framework после **2027-01-01**. Вместо
одного класса пишите два — фон места и тень этого места:
`bg-surface-popup shadow-overlay` вместо `elevation-2` и `elevation-3`. До этой
даты класс рисует то же, что пара. Новых мест для этих классов не заводите.

Высота элемента — его место: на странице, приподнятое, всплывающее или окно.
Поверхность места ставит и цвет второстепенного текста на ней. Берите пару для
панелей, меню, модальных окон и других слоёв поверх содержимого.

## Пример

### Места

Панели на фоне области; под каждой — пара классов. Переключите тему сайта:
в светлой место показывает тень, в тёмной — светлеющая поверхность.

:::example {id="utilities/shadows/elevation" label="Четыре места"}
:::

### Тень без поверхности

`shadow-overlay` на поверхности страницы и пара `bg-surface-popup
shadow-overlay`. В светлой теме они похожи; в тёмной панель с одной тенью
сливается с фоном.

:::example {id="utilities/shadows/elevation-compare" label="Тень одна и тень с поверхностью"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `elevation-1` | `background-color: var(--sf-surface-card); box-shadow: var(--sf-shadow-raised); --sf-on-surface-variant: var(--sf-on-surface-card-variant)` | — |
| `elevation-2` | `background-color: var(--sf-surface-popup); box-shadow: var(--sf-shadow-overlay); --sf-on-surface-variant: var(--sf-on-surface-popup-variant)` | — |
| `elevation-3` | `background-color: var(--sf-surface-popup); box-shadow: var(--sf-shadow-overlay); --sf-on-surface-variant: var(--sf-on-surface-popup-variant)` | — |
| `elevation-4` | `background-color: var(--sf-surface-popup-nested); box-shadow: var(--sf-shadow-modal); --sf-on-surface-variant: var(--sf-on-surface-popup-nested-variant)` | — |
| `elevation-5` | `background-color: var(--sf-surface-popup-nested); box-shadow: var(--sf-shadow-modal); --sf-on-surface-variant: var(--sf-on-surface-popup-nested-variant)` | — |
| `elevation-0` | `background-color: var(--sf-surface-page); box-shadow: var(--sf-shadow-flat)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-surface-card` | `light-dark(var(--sf-surface-page), var(--sf-surface-2))` |
| `--sf-shadow-raised` | `0 var(--sf-px) var(--sf-a2) var(--sf-shadow-key-color), 0 var(--sf-a2) var(--sf-a8) var(--sf-shadow-ambient-color)` |
| `--sf-on-surface-card-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-surface-popup` | `light-dark(var(--sf-surface-page), var(--sf-surface-4))` |
| `--sf-shadow-overlay` | `0 var(--sf-a2) var(--sf-a4) var(--sf-shadow-key-color), 0 var(--sf-a8) var(--sf-b6) var(--sf-shadow-ambient-color)` |
| `--sf-on-surface-popup-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-surface-popup-nested` | `light-dark(var(--sf-surface-page), var(--sf-surface-5))` |
| `--sf-shadow-modal` | `0 var(--sf-a4) var(--sf-a8) var(--sf-shadow-key-color), 0 var(--sf-b6) var(--sf-c6) var(--sf-shadow-ambient-color)` |
| `--sf-on-surface-popup-nested-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-surface-page` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-shadow-flat` | `none` |

## Применение

### Как выбрать

| Место | Классы | Поверхность | Тень | Куда |
| :--- | :--- | :--- | :--- | :--- |
| на странице | `bg-surface-page shadow-flat` | `--sf-surface-page` | `--sf-shadow-flat` | вернуть элемент на страницу |
| приподнятое | `bg-surface-card shadow-raised` | `--sf-surface-card` | `--sf-shadow-raised` | приподнятый элемент в потоке |
| всплывающее | `bg-surface-popup shadow-overlay` | `--sf-surface-popup` | `--sf-shadow-overlay` | меню, выпадающий список, поповер, подсказка |
| окно | `bg-surface-popup-nested shadow-modal` | `--sf-surface-popup-nested` | `--sf-shadow-modal` | диалог и шторка над затемнением |

Поверхность места задаёт `--sf-on-surface-variant`, поэтому второстепенный
текст на поднятой панели остаётся читаемым. Класс `bg-surface-*` — место:
внутри цветного блока он возвращает элементам на нём роли темы, а прежний
класс `elevation-{n}` этого не делал. Какие компоненты стоят на каком
месте — в руководстве [Поверхность и тень](/ru/guide/colour/elevation/#какие-компоненты-где-стоят).

```html
<!-- было -->
<div class="elevation-2 radius-surface p-2">Меню</div>
<!-- стало -->
<div class="bg-surface-popup shadow-overlay radius-surface p-2">Меню</div>
```

Прежние имена работают до 2027-01-01: классы `elevation-{n}` рисуют ту же пару — `0` как `bg-surface-page shadow-flat`, `1` как `bg-surface-card shadow-raised`, `2` и `3` как `bg-surface-popup shadow-overlay`, `4` и `5` как `bg-surface-popup-nested shadow-modal`; в новой разметке пишите пару. Как переписать страницы — в таблице [Как обновить проект](/ru/guide/connection/updating/#новые-имена-теней). Запись журнала — `utility-c20-elevation-former`.

### Высота в своём CSS

Место — это пара: поверхность и тень. Берите их всегда вместе: тень без
поверхности в тёмной теме не видна.

```css
.project-panel {
  background: var(--sf-surface-popup);
  --sf-on-surface-variant: var(--sf-on-surface-popup-variant);
  box-shadow: var(--sf-shadow-overlay);
}
```

### Настройка в теме

Тени перенастраивают переменными места или двумя цветами тени, не трогая
компоненты. Например, убрать тень всплывающего места в тёмной теме — там его
и так показывает поверхность:

```css
@layer project {
  .theme-dark {
    --sf-shadow-overlay: none;
  }
}
```

## Ограничения

- Классы `elevation-{n}` уходят после 2027-01-01 (`utility-c20-elevation-former`);
  `sf-upgrade` находит их и называет пару, но не переписывает сам: замена —
  два класса.
- Два класса места задают `background-color` и `box-shadow`: другой класс
  цвета фона или тени на том же элементе спорит с ними.

## См. также

- [Тень элемента](/ru/utilities/shadows/element-shadow/)
- [Поверхность и тень](/ru/guide/colour/elevation/)
- [Цвет фона](/ru/utilities/background/background-color/)
- [Границы](/ru/guide/size-and-type/borders-and-radii/#границы)
