---
title: "Скругление границы"
description: "Скругляет углы элемента целиком, по сторонам или по одному углу — по шкале радиусов или по смысловой роли."
---

# Скругление границы

Классы `radius-*` задают `border-radius` по шкале радиусов Framework: для всего
элемента, для одной стороны или для одного угла. Берите их, когда конкретный
элемент должен отличаться от радиуса своей роли или когда собственный блок
страницы нужно скруглить так же, как компоненты.

## Пример

### Шкала

Ступени идут от прямого угла к окружности. Под каждым образцом — класс,
который его скругляет.

:::example {id="utilities/border/border-radius" label="Шкала радиусов"}
:::

### Смысловые радиусы

`radius-ui` — угол контрола, `radius-surface` — угол блока. Вложенный контрол
скруглён меньше блока, в котором лежит.

:::example {id="utilities/border/border-radius-semantic" label="Смысловые радиусы и другие имена"}
:::

### Стороны

Класс стороны скругляет два угла этой стороны и оставляет остальные прямыми.

:::example {id="utilities/border/border-radius-sides" label="Скругление стороны"}
:::

### Углы

Класс угла скругляет один угол. Горизонтальная сторона названа логически, поэтому
при письме справа налево угол переходит на другую сторону.

:::example {id="utilities/border/border-radius-corners" label="Скругление угла"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: на узком экране углы прямые, с ширины `md` — скруглены, с ширины `xl`
полоса становится капсулой.

:::example {id="utilities/border/border-radius-responsive" label="Радиус по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `radius-{значение}` | `border-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-ui` | `border-radius: var(--sf-radius--ui)` | — |
| `radius-surface` | `border-radius: var(--sf-radius--surface)` | — |
| `radius-top-{значение}` | `border-start-start-radius: var(--sf-radius-{значение}); border-start-end-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-bottom-{значение}` | `border-end-start-radius: var(--sf-radius-{значение}); border-end-end-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-inline-start-{значение}` | `border-start-start-radius: var(--sf-radius-{значение}); border-end-start-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-inline-end-{значение}` | `border-start-end-radius: var(--sf-radius-{значение}); border-end-end-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-top-inline-start-{значение}` | `border-start-start-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-top-inline-end-{значение}` | `border-start-end-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-bottom-inline-start-{значение}` | `border-end-start-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-bottom-inline-end-{значение}` | `border-end-end-radius: var(--sf-radius-{значение})` | `0`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `default`, `square`, `rounded`, `round` |
| `radius-top-ui` | `border-start-start-radius: var(--sf-radius--ui); border-start-end-radius: var(--sf-radius--ui)` | — |
| `radius-bottom-ui` | `border-end-start-radius: var(--sf-radius--ui); border-end-end-radius: var(--sf-radius--ui)` | — |
| `radius-inline-start-ui` | `border-start-start-radius: var(--sf-radius--ui); border-end-start-radius: var(--sf-radius--ui)` | — |
| `radius-inline-end-ui` | `border-start-end-radius: var(--sf-radius--ui); border-end-end-radius: var(--sf-radius--ui)` | — |
| `radius-top-inline-start-ui` | `border-start-start-radius: var(--sf-radius--ui)` | — |
| `radius-top-inline-end-ui` | `border-start-end-radius: var(--sf-radius--ui)` | — |
| `radius-bottom-inline-start-ui` | `border-end-start-radius: var(--sf-radius--ui)` | — |
| `radius-bottom-inline-end-ui` | `border-end-end-radius: var(--sf-radius--ui)` | — |
| `radius-top-surface` | `border-start-start-radius: var(--sf-radius--surface); border-start-end-radius: var(--sf-radius--surface)` | — |
| `radius-bottom-surface` | `border-end-start-radius: var(--sf-radius--surface); border-end-end-radius: var(--sf-radius--surface)` | — |
| `radius-inline-start-surface` | `border-start-start-radius: var(--sf-radius--surface); border-end-start-radius: var(--sf-radius--surface)` | — |
| `radius-inline-end-surface` | `border-start-end-radius: var(--sf-radius--surface); border-end-end-radius: var(--sf-radius--surface)` | — |
| `radius-top-inline-start-surface` | `border-start-start-radius: var(--sf-radius--surface)` | — |
| `radius-top-inline-end-surface` | `border-start-end-radius: var(--sf-radius--surface)` | — |
| `radius-bottom-inline-start-surface` | `border-end-start-radius: var(--sf-radius--surface)` | — |
| `radius-bottom-inline-end-surface` | `border-end-end-radius: var(--sf-radius--surface)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:radius-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-radius-0` | `var(--sf-a0)` |
| `--sf-radius-1/3` | `0.125rem` |
| `--sf-radius-1/2` | `0.25rem` |
| `--sf-radius-1` | `var(--sf-a8)` |
| `--sf-radius-2` | `var(--sf-b2)` |
| `--sf-radius-3` | `var(--sf-b6)` |
| `--sf-radius-4` | `var(--sf-c2)` |
| `--sf-radius-default` | `var(--sf-a4)` |
| `--sf-radius--ui` | `var(--sf-radius-1/2)` |
| `--sf-radius--surface` | `var(--sf-radius-1)` |
| `--sf-radius-square` | `0` |
| `--sf-radius-rounded` | `1000px` |
| `--sf-radius-round` | `var(--sf-radius-rounded)` |

## Применение

### Шкала

Первые четыре ступени одинаковы на любой ширине; начиная с `radius-2` на
экранах от ширины `lg` углы крупнее.

| Класс | Токен | До `lg` | От `lg` |
| :--- | :--- | ---: | ---: |
| `radius-0` | `--sf-radius-0` | 0 | 0 |
| `radius-1/3` | `--sf-radius-1\/3` | 2px | 2px |
| `radius-1/2` | `--sf-radius-1\/2` | 4px | 4px |
| `radius-1` | `--sf-radius-1` | 8px | 8px |
| `radius-2` | `--sf-radius-2` | 12px | 16px |
| `radius-3` | `--sf-radius-3` | 16px | 24px |
| `radius-4` | `--sf-radius-4` | 24px | 32px |
| `radius-rounded` | `--sf-radius-rounded` | 1000px | 1000px |

Значения приведены при `1rem = 16px`. Шкала задана в `rem`, поэтому углы
растут вместе с кеглем.

### Смысловые радиусы

Их берут по назначению, а не по номеру; значение они получают со шкалы.

| Класс | Токен | Значение | Куда |
| :--- | :--- | :--- | :--- |
| `radius-ui` | `--sf-radius--ui` | `radius-1/2` — 4px | мелкий контрол: поле, кнопка, флажок |
| `radius-surface` | `--sf-radius--surface` | `radius-1` — 8px | крупный блок: карточка, панель, модальное окно |

Обычному компоненту класс радиуса не нужен: он уже стоит на своей смысловой
роли. Класс берут, когда конкретный элемент должен от этой роли отличаться.

```html
<section class="bg-surface-container p-3 radius-surface">
  <div class="bg-surface p-2 radius-ui">Вложенный блок</div>
</section>
```

### Стороны и углы

Каждое значение шкалы и каждый смысловой радиус есть в вариантах для стороны и
для одного угла. Стороны по горизонтали названы логически — `inline-start` и
`inline-end`, поэтому при письме справа налево они меняются местами.

| Шаблон | Что скругляет |
| :--- | :--- |
| `radius-top-{значение}` | оба верхних угла |
| `radius-bottom-{значение}` | оба нижних угла |
| `radius-inline-start-{значение}` | оба угла со стороны начала строки |
| `radius-inline-end-{значение}` | оба угла со стороны конца строки |
| `radius-top-inline-start-{значение}` | верхний угол в начале строки |
| `radius-top-inline-end-{значение}` | верхний угол в конце строки |
| `radius-bottom-inline-start-{значение}` | нижний угол в начале строки |
| `radius-bottom-inline-end-{значение}` | нижний угол в конце строки |

Шапка и подвал карточки скругляются по своей стороне, чтобы вместе повторить
угол карточки:

```html
<div class="radius-top-surface">Шапка карточки</div>
<div class="radius-bottom-surface">Подвал карточки</div>
```

### Другие имена

- `radius-square` — то же, что `radius-0`.
- `radius-round` — второе имя `radius-rounded`; в разметке пишите
  `radius-rounded`.
- `radius-default` даёт 4px и не равен радиусу блока. Для блока берите
  `radius-surface`, для контрола — `radius-ui`.

## Ограничения

- Классы сторон и углов опираются на логические свойства
  (`border-start-start-radius` и соседние). Для браузеров без их поддержки
  выпуск задаёт физические углы по атрибуту `dir="rtl"` у предка.
- Скругление не обрезает содержимое: картинке или фону потомка, которые
  выходят за углы, нужен `overflow-hidden` на том же элементе.
- У семейства нет префиксов состояния: радиус не меняется при наведении или
  фокусе.

## См. также

- [Толщина границы](/ru/utilities/border/border-width/)
- [Цвет границы](/ru/utilities/border/border-color/)
- [Границы](/ru/guide/fundamentals/borders/)
