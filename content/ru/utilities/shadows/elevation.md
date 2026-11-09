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
| `elevation-1` | `background-color: var(--sf-elevation-1--surface); box-shadow: var(--sf-elevation-1--shadow); --sf-on-surface-variant: var(--sf-on-elevation-1--variant)` | — |
| `elevation-2` | `background-color: var(--sf-elevation-2--surface); box-shadow: var(--sf-elevation-2--shadow); --sf-on-surface-variant: var(--sf-on-elevation-2--variant)` | — |
| `elevation-3` | `background-color: var(--sf-elevation-3--surface); box-shadow: var(--sf-elevation-3--shadow); --sf-on-surface-variant: var(--sf-on-elevation-3--variant)` | — |
| `elevation-4` | `background-color: var(--sf-elevation-4--surface); box-shadow: var(--sf-elevation-4--shadow); --sf-on-surface-variant: var(--sf-on-elevation-4--variant)` | — |
| `elevation-5` | `background-color: var(--sf-elevation-5--surface); box-shadow: var(--sf-elevation-5--shadow); --sf-on-surface-variant: var(--sf-on-elevation-5--variant)` | — |
| `elevation-0` | `background-color: var(--sf-surface-0); box-shadow: none` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-elevation-1--surface` | `var(--sf-surface-card)` |
| `--sf-elevation-1--shadow` | `var(--sf-shadow-card)` |
| `--sf-on-elevation-1--variant` | `var(--sf-on-surface-card-variant)` |
| `--sf-elevation-2--surface` | `light-dark(var(--sf-surface-page), var(--sf-surface-3))` |
| `--sf-elevation-2--shadow` | `var(--sf-ui-shadow-2), var(--sf-shadow--rim)` |
| `--sf-on-elevation-2--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-elevation-3--surface` | `var(--sf-surface-popup)` |
| `--sf-elevation-3--shadow` | `var(--sf-shadow-popup)` |
| `--sf-on-elevation-3--variant` | `var(--sf-on-surface-popup-variant)` |
| `--sf-elevation-4--surface` | `var(--sf-surface-popup-nested)` |
| `--sf-elevation-4--shadow` | `var(--sf-shadow-popup-nested)` |
| `--sf-on-elevation-4--variant` | `var(--sf-on-surface-popup-nested-variant)` |
| `--sf-elevation-5--surface` | `light-dark(var(--sf-surface-page), var(--sf-surface-5))` |
| `--sf-elevation-5--shadow` | `var(--sf-ui-shadow-5), var(--sf-shadow--rim)` |
| `--sf-on-elevation-5--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-surface-0` | `var(--sf-surface-page)` |

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
