---
title: "Размер SVG-изображений"
description: "Задаёт ширину и высоту значка по шкале размеров текста."
---

# Размер SVG-изображений

Классы `svg-*` задают ширину и высоту элемента по шкале размеров текста:
`svg-3` совпадает с размером шрифта `text-3`. Берите их для значков SVG, чтобы
значок был одного размера с текстом рядом.

## Пример

### Шкала

Ступени от `svg-1/4` до `svg-12`.

:::example {id="utilities/svg/svg-image-size" label="Шкала размеров"}
:::

### Рядом с текстом

Значок и текст одной ступени шкалы одного размера.

:::example {id="utilities/svg/svg-image-size-text" label="svg-* рядом с text-*"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину окна просмотра: значок растёт с ширины `md` и ещё раз с ширины `xl`.

:::example {id="utilities/svg/svg-image-size-responsive" label="Размер по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `svg-1/4` | `width: var(--sf-text-size-1/4); height: var(--sf-text-size-1/4); line-height: var(--sf-text-height-1/4)` | — |
| `svg-1/3` | `width: var(--sf-text-size-1/3); height: var(--sf-text-size-1/3); line-height: var(--sf-text-height-1/3)` | — |
| `svg-1/2` | `width: var(--sf-text-size-1/2); height: var(--sf-text-size-1/2); line-height: var(--sf-text-height-1/2)` | — |
| `svg-1` | `width: var(--sf-text-size-1); height: var(--sf-text-size-1); line-height: var(--sf-text-height-1)` | — |
| `svg-2` | `width: var(--sf-text-size-2); height: var(--sf-text-size-2); line-height: var(--sf-text-height-2)` | — |
| `svg-3` | `width: var(--sf-text-size-3); height: var(--sf-text-size-3); line-height: var(--sf-text-height-3)` | — |
| `svg-4` | `width: var(--sf-text-size-4); height: var(--sf-text-size-4); line-height: var(--sf-text-height-4)` | — |
| `svg-5` | `width: var(--sf-text-size-5); height: var(--sf-text-size-5); line-height: var(--sf-text-height-5)` | — |
| `svg-6` | `width: var(--sf-text-size-6); height: var(--sf-text-size-6); line-height: var(--sf-text-height-6)` | — |
| `svg-7` | `width: var(--sf-text-size-7); height: var(--sf-text-size-7); line-height: var(--sf-text-height-7)` | — |
| `svg-8` | `width: var(--sf-text-size-8); height: var(--sf-text-size-8); line-height: var(--sf-text-height-8)` | — |
| `svg-9` | `width: var(--sf-text-size-9); height: var(--sf-text-size-9); line-height: var(--sf-text-height-9)` | — |
| `svg-10` | `width: var(--sf-text-size-10); height: var(--sf-text-size-10); line-height: var(--sf-text-height-10)` | — |
| `svg-11` | `width: var(--sf-text-size-11); height: var(--sf-text-size-11); line-height: var(--sf-text-height-11)` | — |
| `svg-12` | `width: var(--sf-text-size-12); height: var(--sf-text-size-12); line-height: var(--sf-text-height-12)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:svg-1/4`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-text-size-1/4` | `var(--sf-text--size-1\/4)` |
| `--sf-text-height-1/4` | `var(--sf-text--height-1\/4)` |
| `--sf-text-size-1/3` | `var(--sf-text--size-1\/3)` |
| `--sf-text-height-1/3` | `var(--sf-text--height-1\/3)` |
| `--sf-text-size-1/2` | `var(--sf-text--size-1\/2)` |
| `--sf-text-height-1/2` | `var(--sf-text--height-1\/2)` |
| `--sf-text-size-1` | `var(--sf-text--size-1)` |
| `--sf-text-height-1` | `var(--sf-text--height-1)` |
| `--sf-text-size-2` | `var(--sf-text--size-2)` |
| `--sf-text-height-2` | `var(--sf-text--height-2)` |
| `--sf-text-size-3` | `var(--sf-text--size-3)` |
| `--sf-text-height-3` | `var(--sf-text--height-3)` |
| `--sf-text-size-4` | `var(--sf-text--size-4)` |
| `--sf-text-height-4` | `var(--sf-text--height-4)` |
| `--sf-text-size-5` | `var(--sf-text--size-5)` |
| `--sf-text-height-5` | `var(--sf-text--height-5)` |
| `--sf-text-size-6` | `var(--sf-text--size-6)` |
| `--sf-text-height-6` | `var(--sf-text--height-6)` |
| `--sf-text-size-7` | `var(--sf-text--size-7)` |
| `--sf-text-height-7` | `var(--sf-text--height-7)` |
| `--sf-text-size-8` | `var(--sf-text--size-8)` |
| `--sf-text-height-8` | `var(--sf-text--height-8)` |
| `--sf-text-size-9` | `var(--sf-text--size-9)` |
| `--sf-text-height-9` | `var(--sf-text--height-9)` |
| `--sf-text-size-10` | `var(--sf-text--size-10)` |
| `--sf-text-height-10` | `var(--sf-text--height-10)` |
| `--sf-text-size-11` | `var(--sf-text--size-11)` |
| `--sf-text-height-11` | `var(--sf-text--height-11)` |
| `--sf-text-size-12` | `var(--sf-text--size-12)` |
| `--sf-text-height-12` | `var(--sf-text--height-12)` |

В CSS косую черту в имени экранируют: `var(--sf-text-size-1\/4)`.

## Применение

### Ступени

Класс `svg-{ступень}` берёт ширину и высоту из токена
`--sf-text-size-{ступень}` — того же, что задаёт размер шрифта `text-{ступень}`.
Поэтому значок, подобранный по ступени текста, остаётся с ним одного размера,
когда меняется шкала текста.

```html
<span class="flex items-center gap-1 text-2">
  <svg class="svg-2 fill-current" viewBox="0 0 24 24" aria-hidden="true">…</svg>
  Избранное
</span>
```

Класс подходит и для `<img>` с файлом SVG: он задаёт размер любого элемента.

## Ограничения

- Класс задаёт ширину и высоту одним значением: значок с другими пропорциями
  вписывается в квадрат по своему `viewBox`.
- Класс задаёт и `line-height` ступени текста; на сам элемент `<svg>` это не
  влияет.
- Префиксов состояния у семейства нет.

## См. также

- [Цвет заливки](/ru/utilities/svg/svg-fill-color/)
- [Толщина обводки](/ru/utilities/svg/svg-stroke-width/)
