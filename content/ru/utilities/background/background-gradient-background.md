---
title: "Градиент фона"
description: "Задаёт цвета точек градиента классами gr1-, gr2- и gr3- из цветовых ролей темы."
---

# Градиент фона

Классы `gr1-*`, `gr2-*` и `gr3-*` задают цвета первой, второй и третьей
точки фонового градиента. Сам градиент рисует класс вида —
`gr-line-*`, `gr-radial-*`, `gr-conic-*` или `bg-gradient-to-*`. Берите эти
классы, когда цвета градиента должны идти из ролей темы.

## Пример

### Две точки

Линейный градиент `gr-line-2` с разными парами цветов. Под образцом — классы
цвета.

:::example {id="utilities/background/background-gradient-background" label="gr1- и gr2- с gr-line-2"}
:::

### Три точки

Одни и те же три цвета в линейном, радиальном и коническом градиенте.

:::example {id="utilities/background/background-gradient-background-three" label="gr1-, gr2- и gr3- с градиентами на три точки"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `gr1-{значение}` | `--sf-gradient--color-1: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning` |
| `gr1-surface-0` | `--sf-gradient--color-1: var(--sf-surface-0)` | — |
| `gr1-surface-1` | `--sf-gradient--color-1: var(--sf-surface-1)` | — |
| `gr1-surface-2` | `--sf-gradient--color-1: var(--sf-surface-2)` | — |
| `gr1-on-surface` | `--sf-gradient--color-1: var(--sf-on-surface)` | — |
| `gr1-{значение}-container` | `--sf-gradient--color-1: var(--sf-{значение}-container)` | `primary`, `secondary`, `tertiary` |
| `gr2-{значение}` | `--sf-gradient--color-2: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning` |
| `gr2-surface-0` | `--sf-gradient--color-2: var(--sf-surface-0)` | — |
| `gr2-surface-1` | `--sf-gradient--color-2: var(--sf-surface-1)` | — |
| `gr2-surface-2` | `--sf-gradient--color-2: var(--sf-surface-2)` | — |
| `gr2-on-surface` | `--sf-gradient--color-2: var(--sf-on-surface)` | — |
| `gr2-{значение}-container` | `--sf-gradient--color-2: var(--sf-{значение}-container)` | `primary`, `secondary`, `tertiary` |
| `gr3-{значение}` | `--sf-gradient--color-3: var(--sf-{значение})` | `transparent`, `current`, `inherit`, `primary`, `secondary`, `tertiary`, `success`, `warning` |
| `gr3-surface-{значение}` | `--sf-gradient--color-3: var(--sf-surface-{значение})` | `0`, `1`, `2` |
| `gr3-on-surface` | `--sf-gradient--color-3: var(--sf-on-surface)` | — |
| `gr3-{значение}-container` | `--sf-gradient--color-3: var(--sf-{значение}-container)` | `primary`, `secondary`, `tertiary` |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-inherit` | `inherit` |
| `--sf-surface-0` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-1` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |

## Применение

### Как это работает

Класс цвета записывает значение в переменную, класс вида читает её:

| Класс цвета | Переменная | Какая точка |
| :--- | :--- | :--- |
| `gr1-*` | `--sf-gradient--color-1` | первая |
| `gr2-*` | `--sf-gradient--color-2` | вторая |
| `gr3-*` | `--sf-gradient--color-3` | третья |

Классы `from-*`, `via-*` и `to-*` пишут в те же переменные; выберите одну
запись и держитесь её на странице.

```html
<div class="gr-line-2 gr1-primary gr2-tertiary h-e0"></div>
<div class="gr-radial-3 gr1-primary gr2-warning gr3-success h-e0"></div>
```

### Какие цвета есть

`transparent`, `current`, `inherit`, поверхности `surface-0` … `surface-2`,
`on-surface`, акценты `primary`, `secondary`, `tertiary` и их контейнеры,
статусы `success` и `warning`.

## Ограничения

- Без класса вида класс цвета ничего не рисует.
- Переменные градиента наследуются: вложенный элемент с классом вида без своих
  цветов берёт цвета родителя.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Вид градиента](/ru/utilities/background/background-gradient-type/)
- [Точки градиента](/ru/utilities/background/background-gradient-stops/)
- [Обрезка фона](/ru/utilities/background/background-clip/)
