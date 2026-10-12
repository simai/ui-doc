---
title: "Полосы"
description: "Заполняет фон элемента тонкими линиями: вертикальными, горизонтальными, сеткой или по диагонали."
---

# Полосы

Классы `stripe-1` … `stripe-4` рисуют на фоне элемента тонкие линии в
1px: вертикальные, горизонтальные, сетку или диагональ. Цвет линий задают
классы [цвета полос](/ru/utilities/stripes/stripes-color/), шаг —
[размера полос](/ru/utilities/stripes/stripes-size/). Берите их для
подложки-заглушки, области перетаскивания или миллиметровой сетки.

## Пример

### Узоры

Под каждым образцом — класс узора; шаг задаёт `stripe-size-4`, цвет — по
умолчанию.

:::example {id="utilities/stripes/stripes" label="stripe-1 … stripe-4"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: полосы вертикальные, с ширины `md` — сетка, с ширины `xl` —
диагональ.

:::example {id="utilities/stripes/stripes-responsive" label="Узор по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `stripe-1` | `background-image: repeating-linear-gradient(90deg, var(--sf-stripe--color) 0 var(--sf-px), transparent var(--sf-px) var(--sf-stripe--size))` | — |
| `stripe-2` | `background-image: repeating-linear-gradient(0deg, var(--sf-stripe--color) 0 var(--sf-px), transparent var(--sf-px) var(--sf-stripe--size))` | — |
| `stripe-3` | `background-image: repeating-linear-gradient(0deg, var(--sf-stripe--color) 0 var(--sf-px), transparent var(--sf-px) var(--sf-stripe--size)), repeating-linear-gradient(90deg, var(--sf-stripe--color) 0 var(--sf-px), transparent var(--sf-px) var(--sf-stripe--size))` | — |
| `stripe-4` | `background-image: repeating-linear-gradient(135deg, var(--sf-stripe--color) 0 var(--sf-px), transparent var(--sf-px) var(--sf-stripe--size))` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:stripe-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-stripe--color` | `var(--sf-surface-inverse)` |
| `--sf-px` | `1px` |
| `--sf-stripe--size` | `var(--sf-a1, 1px)` |

## Применение

| Класс | Линии |
| :--- | :--- |
| `stripe-1` | вертикальные |
| `stripe-2` | горизонтальные |
| `stripe-3` | сетка из вертикальных и горизонтальных |
| `stripe-4` | диагональ под 135° |

Ставьте класс узора вместе с классом шага: без него линии сливаются в
сплошную заливку.

```html
<div class="stripe-3 stripe-size-4 stripe-surface-transparent-overlay h-f0 radius-surface">
  Место для графика
</div>
```

Без класса цвета линии берут цвет `surface-inverse`: тёмные в светлой теме и
светлые в тёмной.

## Ограничения

- Шаг по умолчанию равен толщине линии (1px), поэтому без класса
  `stripe-size-*` элемент заливается сплошным цветом полос.
- Класс задаёт `background-image` и заменяет фоновую картинку или градиент
  того же элемента; цвет фона остаётся виден между линиями.
- У семейства нет префиксов состояния.

## См. также

- [Цвет полос](/ru/utilities/stripes/stripes-color/)
- [Размер полос](/ru/utilities/stripes/stripes-size/)
- [Паттерн фона](/ru/utilities/background/background-pattern/)
