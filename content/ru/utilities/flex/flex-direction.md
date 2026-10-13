---
title: "Направление размещения"
description: "Выстраивает флекс-элементы в строку или в столбец, в прямом или обратном порядке."
---

# Направление размещения

Классы `flex-row` и `flex-col` задают `flex-direction` — основную ось
флекс-контейнера: строку или столбец. Варианты с `-reverse` ставят элементы в
обратном порядке. Берите их вместе с [`flex`](/ru/utilities/layout/display/),
когда нужно выбрать, как идут элементы, или перестроить их на другой ширине
экрана.

## Пример

### Строка и столбец

Три элемента в одном порядке разметки. Подпись над образцом — класс
контейнера.

:::example {id="utilities/flex/flex-direction" label="flex-row, flex-row-reverse, flex-col, flex-col-reverse"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: на узком экране элементы стоят столбцом, с ширины `md` — в строку.

:::example {id="utilities/flex/flex-direction-responsive" label="flex-col md:flex-row"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `flex-row` | `flex-direction: row` | — |
| `flex-col` | `flex-direction: column` | — |
| `flex-row-reverse` | `flex-direction: row-reverse` | — |
| `flex-col-reverse` | `flex-direction: column-reverse` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:flex-row`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `flex-row` — направление по умолчанию у флекс-контейнера; класс нужен, чтобы
  вернуть строку после `flex-col` на другой ширине экрана.
- `flex-col` — элементы друг под другом: форма, меню, список карточек на
  телефоне.
- `flex-row-reverse` и `flex-col-reverse` меняют только порядок показа; в
  разметке элементы остаются в прежнем порядке.

### Столбец на телефоне, строка на широком экране

```html
<div class="flex flex-col md:flex-row gap-2">
  <aside class="md:basis-1/4">Фильтры</aside>
  <main class="md:basis-3/4">Список</main>
</div>
```

Направление меняет и смысл других классов: при `flex-col` классы
[`justify-*`](/ru/utilities/grid-and-flexbox-utilities/justify-content/)
выравнивают по вертикали, а
[`items-cross-*`](/ru/utilities/grid-and-flexbox-utilities/align-items/) — по
горизонтали.

## Ограничения

- `flex-row` следует направлению письма: при `dir="rtl"` строка идёт справа
  налево, а `flex-row-reverse` — слева направо.
- Варианты с `-reverse` расходятся с порядком разметки, по которому идут фокус
  клавиатуры и программы экранного доступа. Если порядок важен для смысла,
  меняйте порядок в разметке, а не класс.

## См. также

- [Метод отображения элемента](/ru/utilities/layout/display/)
- [Перенос элементов](/ru/utilities/flex/flex-wrap/)
- [Сортировка](/ru/utilities/grid-and-flexbox-utilities/order/)
- [Выравнивание содержимого по основной оси](/ru/utilities/grid-and-flexbox-utilities/justify-content/)
