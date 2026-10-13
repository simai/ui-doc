---
title: "Размер колонки сетки"
description: "Задаёт, сколько колонок сетки занимает элемент."
---

# Размер колонки сетки

Классы `col-span-*` задают `grid-column`: сколько колонок грид-контейнера
занимает элемент. Берите их, чтобы растянуть карточку, поле формы или область
страницы на несколько колонок.

## Пример

### Число колонок

Сетка из шести колонок. На каждом элементе написан его класс.

:::example {id="utilities/grid/grid-column" label="col-span-2 … col-span-full и col-auto"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: на узком экране каждый элемент занимает всю строку, с ширины `md`
— две колонки из шести.

:::example {id="utilities/grid/grid-column-responsive" label="col-span-full md:col-span-2"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `col-auto` | `grid-column: auto` | — |
| `col-span-1` | `grid-column: span 1 / span 1` | — |
| `col-span-2` | `grid-column: span 2 / span 2` | — |
| `col-span-3` | `grid-column: span 3 / span 3` | — |
| `col-span-4` | `grid-column: span 4 / span 4` | — |
| `col-span-5` | `grid-column: span 5 / span 5` | — |
| `col-span-6` | `grid-column: span 6 / span 6` | — |
| `col-span-7` | `grid-column: span 7 / span 7` | — |
| `col-span-8` | `grid-column: span 8 / span 8` | — |
| `col-span-9` | `grid-column: span 9 / span 9` | — |
| `col-span-10` | `grid-column: span 10 / span 10` | — |
| `col-span-11` | `grid-column: span 11 / span 11` | — |
| `col-span-12` | `grid-column: span 12 / span 12` | — |
| `col-span-full` | `grid-column: 1 / -1` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:col-auto`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `col-span-1` … `col-span-12` — элемент занимает столько колонок, начиная с
  места, куда его поставила раскладка.
- `col-span-full` — от первой до последней колонки шаблона.
- `col-auto` — снимает размер: элемент занимает одну колонку.

Где элемент начинается и заканчивается, задают классы
[`col-start-*`](/ru/utilities/grid/grid-column-start/) и
[`col-end-*`](/ru/utilities/grid/grid-column-end/).

### Поле формы на всю ширину

```html
<form class="grid grid-col-1 md:grid-col-2 gap-2">
  <label>Имя <input type="text"></label>
  <label>Фамилия <input type="text"></label>
  <label class="md:col-span-full">Комментарий <textarea></textarea></label>
</form>
```

## Ограничения

- `col-span-*` больше числа колонок шаблона добавляет колонки справа от
  шаблона, и сетка становится шире, чем задумано.
- `col-span-full` охватывает только колонки, заданные шаблоном
  [`grid-col-*`](/ru/utilities/grid/grid-template-columns/); в сетке без шаблона
  элемент займёт одну колонку.

## См. также

- [Шаблон колонок сетки](/ru/utilities/grid/grid-template-columns/)
- [Начальное положение колонки сетки](/ru/utilities/grid/grid-column-start/)
- [Конечное положение колонки сетки](/ru/utilities/grid/grid-column-end/)
- [Размер строки сетки](/ru/utilities/grid/grid-row/)
