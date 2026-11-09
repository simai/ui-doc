---
title: "Высота"
description: "Поднимает элемент над страницей одним классом: ставит поверхность места, его тень и приглушённый текст на нём."
---

# Высота

Классы `elevation-{n}` поднимают элемент над страницей одним классом: ставят
поверхность места, тень этого места и цвет второстепенного текста на нём.
Берите их для панелей, меню, модальных окон и других слоёв поверх
содержимого вместо отдельных классов фона и тени.

## Пример

### Ступени

Панели на фоне области; под каждой — класс высоты. Переключите тему сайта:
в светлой место показывает тень, в тёмной — светлеющая поверхность.

:::example {id="utilities/shadows/elevation" label="elevation-0 … elevation-5"}
:::

### Высота и тень

`shadow-overlay` на поверхности страницы и `elevation-2`. В светлой теме они
похожи; в тёмной панель с одной тенью сливается с фоном.

:::example {id="utilities/shadows/elevation-compare" label="bg-surface-page shadow-overlay и elevation-2"}
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
| `--sf-on-surface-card-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-surface-popup` | `light-dark(var(--sf-surface-page), var(--sf-surface-4))` |
| `--sf-shadow-overlay` | `0 var(--sf-a2) var(--sf-a4) var(--sf-shadow-key-color), 0 var(--sf-a8) var(--sf-b6) var(--sf-shadow-ambient-color)` |
| `--sf-on-surface-popup-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-surface-popup-nested` | `light-dark(var(--sf-surface-page), var(--sf-surface-5))` |
| `--sf-shadow-modal` | `0 var(--sf-a4) var(--sf-a8) var(--sf-shadow-key-color), 0 var(--sf-b6) var(--sf-c6) var(--sf-shadow-ambient-color)` |
| `--sf-on-surface-popup-nested-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-surface-page` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-shadow-flat` | `none` |

## Применение

### Как выбрать

| Класс | Место | Поверхность | Тень | Куда |
| :--- | :--- | :--- | :--- | :--- |
| `elevation-0` | на странице | `--sf-surface-page` | `--sf-shadow-flat` | вернуть элемент на страницу |
| `elevation-1` | приподнятое | `--sf-surface-card` | `--sf-shadow-raised` | приподнятый элемент в потоке |
| `elevation-2`, `elevation-3` | всплывающее | `--sf-surface-popup` | `--sf-shadow-overlay` | меню, выпадающий список, поповер, подсказка |
| `elevation-4`, `elevation-5` | окно | `--sf-surface-popup-nested` | `--sf-shadow-modal` | диалог и шторка над затемнением |

Ступени `1` … `5` задают `--sf-on-surface-variant`, поэтому второстепенный
текст на поднятой панели остаётся читаемым. Какие компоненты стоят на каком
месте — в руководстве [Поверхность и тень](/ru/guide/colour/elevation/#какие-компоненты-где-стоят).

```html
<div class="elevation-2 radius-surface p-2">Меню</div>
```

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

- Класс задаёт `background-color` и `box-shadow`: класс цвета фона или тени
  на том же элементе спорит с ним.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Тень элемента](/ru/utilities/shadows/element-shadow/)
- [Поверхность и тень](/ru/guide/colour/elevation/)
- [Цвет фона](/ru/utilities/background/background-color/)
- [Границы](/ru/guide/size-and-type/borders-and-radii/#границы)
