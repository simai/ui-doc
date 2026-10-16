---
title: "Максимальный размер контейнера"
description: "Задаёт вложенным контейнерам своё ограничение ширины на широком экране вместо шагов контейнера."
---

# Максимальный размер контейнера

Класс `max-container-{1–8}` ставят на предка, и он меняет ограничение ширины
у вложенных элементов с классом [`container`](/ru/utilities/layout/container/).
Берите его, когда страница или её раздел на широком экране должны быть уже
или шире, чем шаги контейнера.

## Пример

Пунктир — элемент с классом `max-container-*`, заливка — вложенный
`container m-inline-auto`. Ограничение действует от ширины `lg`: разверните
окно просмотра пошире. На более узком экране все три контейнера одинаковы.

:::example {id="utilities/layout/max-container" label="container внутри max-container-1 и max-container-8"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `max-container-1` (`.max-container-1 .container`) | `width: 100%; от ширины lg: max-width: var(--sf-container-1--size-max)` | — |
| `max-container-2` (`.max-container-2 .container`) | `width: 100%; от ширины lg: max-width: var(--sf-container-2--size-max)` | — |
| `max-container-3` (`.max-container-3 .container`) | `width: 100%; от ширины lg: max-width: var(--sf-container-3--size-max)` | — |
| `max-container-4` (`.max-container-4 .container`) | `width: 100%; от ширины lg: max-width: var(--sf-container-4--size-max)` | — |
| `max-container-5` (`.max-container-5 .container`) | `width: 100%; от ширины lg: max-width: var(--sf-container-5--size-max)` | — |
| `max-container-6` (`.max-container-6 .container`) | `width: 100%; от ширины lg: max-width: var(--sf-container-6--size-max)` | — |
| `max-container-7` (`.max-container-7 .container`) | `width: 100%; от ширины lg: max-width: var(--sf-container-7--size-max)` | — |
| `max-container-8` (`.max-container-8 .container`) | `width: 100%; от ширины lg: max-width: var(--sf-container-8--size-max)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-container-1--size-max` | `от ширины lg: var(--sf-h5)` |
| `--sf-container-2--size-max` | `от ширины lg: var(--sf-h6)` |
| `--sf-container-3--size-max` | `от ширины lg: var(--sf-h8)` |
| `--sf-container-4--size-max` | `от ширины lg: var(--sf-i0)` |
| `--sf-container-5--size-max` | `от ширины lg: var(--sf-i1)` |
| `--sf-container-6--size-max` | `от ширины lg: var(--sf-i2)` |
| `--sf-container-7--size-max` | `от ширины lg: var(--sf-i3)` |
| `--sf-container-8--size-max` | `от ширины lg: var(--sf-i4)` |

## Применение

### Как действует класс

`max-container-{N}` ничего не меняет у элемента, на котором стоит. Он
действует на все вложенные элементы с классом `container`:

- на любой ширине экрана задаёт им `width: 100%`;
- от ширины `lg` задаёт `max-width: var(--sf-container-{N}--size-max)` вместо
  ограничения шага контейнера.

Внутренние отступы контейнера остаются прежними. До ширины `lg` контейнер
идёт по своим шагам.

```html
<body class="max-container-4">
  <header class="container m-inline-auto">…</header>
  <main class="container m-inline-auto">…</main>
</body>
```

### Как выбрать значение

Чем больше номер, тем шире ограничение. Значение меньше шага контейнера
сужает его, значение больше — даёт контейнеру стать шире своего шага.
`max-container-1` совпадает с ограничением шага `lg`, `max-container-3` — с
ограничением шага `xl`, `max-container-6` — с ограничением шага `xxl`.
При значениях по умолчанию ширина ограничена так: `1` — 60rem, `2` — 64rem,
`3` — 72rem, `4` — 80rem, `5` — 88rem, `6` — 96rem, `7` — 104rem,
`8` — 112rem.
Размеры задают переменные `--sf-container-{N}--size-max` из таблицы выше;
чтобы изменить их для всего проекта, задайте переменные в теме.

## Ограничения

- Класс находит только элементы с классом `container`. На контейнеры с
  префиксом ширины, например `md:container`, он не действует.
- У класса нет префиксов ширины экрана и состояния: `md:max-container-4` не
  существует.
- Шаг `lg` здесь — ширина окна, а не ширина предка.

## См. также

- [Контейнер](/ru/utilities/layout/container/)
- [Максимальная ширина](/ru/utilities/sizes/max-width/)
