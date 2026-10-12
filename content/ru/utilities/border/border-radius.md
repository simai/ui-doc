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

:::example {id="utilities/border/border-radius" label="Скругление границы"}
:::

## Классы

Раздел собран из CSS выпуска и обновляется вместе с выпуском.

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

## Адаптивность и состояния

Раздел собран из CSS выпуска и обновляется вместе с выпуском.

Префикс применяет класс только при условии; без префикса класс действует всегда. Префиксы ширины срабатывают от указанной ширины и шире.

| Префикс | Когда действует | Пример |
|:---|:---|:---|
| `sm:` | при ширине окна от 520px | `sm:radius-0` |
| `md:` | при ширине окна от 720px | `md:radius-0` |
| `lg:` | при ширине окна от 960px | `lg:radius-0` |
| `xl:` | при ширине окна от 1140px | `xl:radius-0` |
| `xxl:` | при ширине окна от 1320px | `xxl:radius-0` |

## Применение

### Шкала

Шкала идёт от прямого угла к окружности. Первые четыре ступени одинаковы на
любой ширине; начиная с `radius-2` на экранах от 960px углы крупнее.

| Класс | Токен | До 960px | От 960px |
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

Контрол вдвое мельче блока: вложенный угол меньше внешнего, иначе вложенность
не читается.

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

```html
<div class="radius-top-surface">Шапка карточки</div>
<div class="radius-bottom-surface">Подвал карточки</div>
```

### Другие имена

- `radius-square` — то же, что `radius-0`.
- `radius-round` — второе имя `radius-rounded`; в новой разметке пишите
  `radius-rounded`.
- `radius-default` даёт 4px и не равен радиусу блока. Для блока берите
  `radius-surface`, для контрола — `radius-ui`.

## Ограничения

- Классы сторон и углов опираются на логические свойства
  (`border-start-start-radius` и соседние). Для браузеров без их поддержки
  выпуск задаёт физические углы по атрибуту `dir="rtl"` у предка.
- Скругление не обрезает содержимое: картинке или фону потомка, которые
  выходят за углы, нужен `overflow` на том же элементе.

## См. также

- [Толщина границы](/ru/utilities/border/border-width/)
- [Цвет границы](/ru/utilities/border/border-color/)
- [Границы](/ru/guide/fundamentals/borders/)
