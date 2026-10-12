---
title: "Цвет внешней границы"
description: "Окрашивает внешний контур элемента цветовой ролью темы, в том числе при наведении, фокусе и нажатии."
---

# Цвет внешней границы

Классы `outline-{цвет}` задают `outline-color` — цвет контура, который
рисуется снаружи рамки и не занимает места в раскладке. Берите их вместе с
классами толщины и стиля контура, чтобы выделить элемент, не сдвигая соседей.

## Пример

### Роли

Под каждым образцом — класс цвета; контур включают `outline outline-2` и
отодвигает `outline-offset-2`.

:::example {id="utilities/outline/outline-color" label="Роли цвета контура"}
:::

### Состояния

Префикс применяет цвет только в состоянии. Наведите указатель на первую
кнопку, переведите фокус на вторую клавишей Tab, нажмите и удерживайте третью.

:::example {id="utilities/outline/outline-color-states" label="hover:, focus-visible: и active:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `outline-transparent` | `outline-color: var(--sf-transparent)` | — |
| `outline-current` | `outline-color: var(--sf-current)` | — |
| `outline-outline` | `outline-color: var(--sf-outline)` | — |
| `outline-outline-variant` | `outline-color: var(--sf-outline-variant)` | — |
| `outline-primary` | `outline-color: var(--sf-outline-primary)` | — |
| `outline-secondary` | `outline-color: var(--sf-outline-secondary)` | — |
| `outline-tertiary` | `outline-color: var(--sf-outline-tertiary)` | — |
| `outline-error` | `outline-color: var(--sf-outline-error)` | — |
| `outline-warning` | `outline-color: var(--sf-outline-warning)` | — |
| `outline-success` | `outline-color: var(--sf-outline-success)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `active:`, `focus-visible:`, `focus:`, `hover:`. Например: `active:outline-transparent`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-outline` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-60--alfa-64))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-outline-primary` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-outline-secondary` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-outline-tertiary` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-outline-error` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-outline-warning` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-outline-success` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |

## Применение

| Задача | Класс |
| :--- | :--- |
| Тихий контур | `outline-outline-variant` |
| Заметный нейтральный контур | `outline-outline` |
| Выделение, выбор | `outline-primary` |
| Статус | `outline-error`, `outline-warning`, `outline-success` |
| Цвет текста | `outline-current` |
| Контур есть, но не виден | `outline-transparent` |

Класс цвета контур не рисует: у элемента по умолчанию стиль контура `none`.
Класс `outline` из ядра включает сплошной контур в 1px цвета
`outline-variant`; класс цвета его перекрашивает, класс
[толщины](/ru/utilities/outline/outline-width/) меняет толщину.

```html
<div class="outline outline-2 outline-offset-2 outline-primary radius-surface">Выбранная карточка</div>
```

### Фокус

Ядро рисует фокус с клавиатуры (`:focus-visible`) контуром из токенов
`--sf-focus--*`. Класс `focus-visible:outline-*` перекрашивает этот контур на
одном элементе; для всего проекта меняйте токены.

## Ограничения

- `focus:` срабатывает и при щелчке мышью; для фокуса с клавиатуры берите
  `focus-visible:`.
- Префиксов ширины экрана у семейства нет.
- Контур повторяет скругление элемента в современных браузерах; в старых он
  остаётся прямоугольным.

## См. также

- [Толщина внешней границы](/ru/utilities/outline/outline-width/)
- [Стиль внешней границы](/ru/utilities/outline/outline-style/)
- [Отступ внешней границы](/ru/utilities/outline/outline-offset/)
- [Фокус](/ru/guide/fundamentals/focus/)
