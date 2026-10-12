---
title: "Высота"
description: "Поднимает элемент над страницей одним классом: ставит поверхность ступени и её тень."
---

# Высота

Классы `elevation-{n}` показывают, насколько элемент поднят над страницей:
ставят поверхность ступени, её тень и цвет второстепенного текста на ней.
Берите их для панелей, меню, модальных окон и других слоёв поверх
содержимого вместо отдельных классов фона и тени.

## Пример

### Ступени

Панели на фоне страницы; под каждой — класс высоты. Переключите тему сайта:
в светлой высоту показывает тень, в тёмной — светлеющая поверхность.

:::example {id="utilities/shadows/elevation" label="elevation-0 … elevation-5"}
:::

### Высота и тень

`shadow-2` с белой поверхностью и `elevation-2`. В светлой теме они похожи; в
тёмной панель с одной тенью сливается с фоном.

:::example {id="utilities/shadows/elevation-compare" label="bg-surface-0 shadow-2 и elevation-2"}
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

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-elevation-1--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-2))` |
| `--sf-elevation-1--shadow` | `var(--sf-ui-shadow-1), var(--sf-shadow--rim)` |
| `--sf-on-elevation-1--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-elevation-2--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-3))` |
| `--sf-elevation-2--shadow` | `var(--sf-ui-shadow-2), var(--sf-shadow--rim)` |
| `--sf-on-elevation-2--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-elevation-3--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-4))` |
| `--sf-elevation-3--shadow` | `var(--sf-ui-shadow-3), var(--sf-shadow--rim)` |
| `--sf-on-elevation-3--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-elevation-4--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-5))` |
| `--sf-elevation-4--shadow` | `var(--sf-ui-shadow-4), var(--sf-shadow--rim)` |
| `--sf-on-elevation-4--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-elevation-5--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-5))` |
| `--sf-elevation-5--shadow` | `var(--sf-ui-shadow-5), var(--sf-shadow--rim)` |
| `--sf-on-elevation-5--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-surface-0` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |

## Применение

### Как выбрать

| Класс | Куда |
| :--- | :--- |
| `elevation-0` | на уровне страницы: поверхность `surface-0`, без тени |
| `elevation-1` | приподнятый элемент в потоке: пункт списка, ручка ползунка |
| `elevation-2` | всплывающее меню, контекстное меню, подсказка |
| `elevation-3` | модальное окно, календарь, выпадающий список |
| `elevation-4` | выдвижная панель |
| `elevation-5` | верх лестницы; поверхность та же, что у четвёртой ступени |

Ступени `1` … `5` задают `--sf-on-surface-variant`, поэтому второстепенный
текст на поднятой панели остаётся читаемым.

```html
<div class="elevation-2 radius-surface p-2">Меню</div>
```

### Высота в своём CSS

Ступень — это пара переменных одного номера: поверхность и тень. Берите их
всегда вместе: тень ступени без её поверхности в тёмной теме не видна.

```css
.project-panel {
  background: var(--sf-elevation-2--surface);
  --sf-on-surface-variant: var(--sf-on-elevation-2--variant);
  box-shadow: var(--sf-elevation-2--shadow);
}
```

### Настройка в теме

Высоту перенастраивают переменными ступени, не трогая компоненты. Например,
убрать тень второй ступени в тёмной теме:

```css
.theme-dark {
  --sf-elevation-2--shadow: none;
}
```

Последний слой каждой тени ступени — `--sf-shadow--rim`, по умолчанию
`0 0 0 0 transparent`. Тема может включить его, чтобы обвести поднятые
панели тонким светлым краем:

```css
.theme-dark {
  --sf-shadow--rim: 0 0 0 var(--sf-px) var(--sf-white--alfa-8);
}
```

## Ограничения

- Класс задаёт `background-color` и `box-shadow`: класс цвета фона или тени
  на том же элементе спорит с ним.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Тень элемента](/ru/utilities/shadows/element-shadow/)
- [Цвет фона](/ru/utilities/background/background-color/)
- [Границы](/ru/guide/fundamentals/borders/)
