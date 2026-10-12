---
title: "Колонки"
description: "Раскладывает содержимое блока по заданному числу колонок, как в газете."
---

# Колонки

Классы `layout-col-*` задают свойство `column-count`: содержимое блока
перетекает из колонки в колонку, как текст в газете. Берите их для длинного
текста, списков и карточек разной высоты; для сетки с ячейками по строкам
берите [грид](/ru/utilities/grid/grid-template-columns/).

## Пример

### Число колонок

Шесть одинаковых элементов в двух, трёх и четырёх колонках. Браузер
выравнивает колонки по высоте.

:::example {id="utilities/layout-break/column" label="layout-col-2, layout-col-3, layout-col-4"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: на узком экране текст идёт в одну колонку, с ширины `md` — в
две, с ширины `xl` — в три.

:::example {id="utilities/layout-break/column-responsive" label="Число колонок по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `layout-col-1` | `column-count: 1` | — |
| `layout-col-2` | `column-count: 2` | — |
| `layout-col-3` | `column-count: 3` | — |
| `layout-col-4` | `column-count: 4` | — |
| `layout-col-5` | `column-count: 5` | — |
| `layout-col-6` | `column-count: 6` | — |
| `layout-col-7` | `column-count: 7` | — |
| `layout-col-8` | `column-count: 8` | — |
| `layout-col-9` | `column-count: 9` | — |
| `layout-col-10` | `column-count: 10` | — |
| `layout-col-11` | `column-count: 11` | — |
| `layout-col-12` | `column-count: 12` | — |
| `layout-col-auto` | `column-count: auto` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:layout-col-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Колонки и интервал

Расстояние между колонками задают [`col-gap-*`](/ru/utilities/layout-break/column-gap/),
разрывы — [`break-before-*`](/ru/utilities/layout-break/break-before/),
[`break-after-*`](/ru/utilities/layout-break/break-after/) и
[`break-inside-*`](/ru/utilities/layout-break/break-inside/).

```html
<div class="layout-col-1 md:layout-col-2 col-gap-4">
  <article class="break-inside-avoid">Карточка 1</article>
  <article class="break-inside-avoid">Карточка 2</article>
</div>
```

### Отмена колонок

`layout-col-1` возвращает одну колонку, например с префиксом ширины поверх
класса для узкого экрана.

```html
<div class="layout-col-2 lg:layout-col-1">
  <!-- абзацы -->
</div>
```

## Ограничения

- `layout-col-auto` задаёт `column-count: auto`. Без ширины колонки
  (`column-width`, утилиты для неё нет) браузер не делит блок на колонки, и
  содержимое остаётся в одной колонке.
- Порядок чтения в колонках — сверху вниз, затем в следующую колонку. Для
  карточек, которые читают по строкам, берите грид.
- У семейства нет префиксов состояния.

## См. также

- [Межколоночный интервал](/ru/utilities/layout-break/column-gap/)
- [Разрыв внутри элемента](/ru/utilities/layout-break/break-inside/)
- [Шаблон колонок сетки](/ru/utilities/grid/grid-template-columns/)
