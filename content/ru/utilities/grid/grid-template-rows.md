---
title: "Шаблон строк сетки"
description: "Задаёт грид-контейнеру число строк равной высоты."
---

# Шаблон строк сетки

Классы `grid-row-*` задают `grid-template-rows`: сколько строк у
грид-контейнера. Строки получаются равной высоты. Берите их, когда элементы
раскладываются по колонкам (`grid-flow-col`) или когда блок фиксированной
высоты нужно поделить на равные полосы.

## Пример

### Число строк

С `grid-flow-col` элементы заполняют колонку сверху вниз, и шаблон строк
решает, когда начинается следующая колонка. На блоке заданной высоты строки
делят высоту поровну, даже если в одной из них больше текста.

:::example {id="utilities/grid/grid-template-rows" label="grid-row-2, grid-row-3"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `grid-row-1` | `grid-template-rows: repeat(1, minmax(0, 1fr))` | — |
| `grid-row-2` | `grid-template-rows: repeat(2, minmax(0, 1fr))` | — |
| `grid-row-3` | `grid-template-rows: repeat(3, minmax(0, 1fr))` | — |
| `grid-row-4` | `grid-template-rows: repeat(4, minmax(0, 1fr))` | — |
| `grid-row-5` | `grid-template-rows: repeat(5, minmax(0, 1fr))` | — |
| `grid-row-6` | `grid-template-rows: repeat(6, minmax(0, 1fr))` | — |
| `grid-row-none` | `grid-template-rows: none` | — |
| `grid-row-subgrid` | `grid-template-rows: subgrid` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:grid-row-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `grid-row-1` … `grid-row-6` — строки равной высоты.
- `grid-row-none` — снимает шаблон: строки создаются по содержимому, их
  высоту задают классы [`auto-rows-*`](/ru/utilities/grid/grid-auto-rows/).
- `grid-row-subgrid` — вложенный блок берёт строки у родительской сетки; блок
  должен занимать в родителе несколько строк.

### Список по колонкам

```html
<ul class="grid grid-row-4 grid-flow-col gap-1">
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
  <li>Пункт 4</li>
  <li>Пункт 5</li>
</ul>
```

## Ограничения

- Имена `grid-row-2` и `row-span-2` похожи, но делают разное: первый задаёт
  шаблон строк контейнера, второй — сколько строк занимает элемент. См.
  [Размер строки сетки](/ru/utilities/grid/grid-row/).
- Строки задаются как `minmax(0, 1fr)`: если высота блока задана, содержимое,
  которому мало места, выходит за строку.

## См. также

- [Шаблон колонок сетки](/ru/utilities/grid/grid-template-columns/)
- [Размер строки сетки](/ru/utilities/grid/grid-row/)
- [Автоматическое формирование сетки](/ru/utilities/grid/grid-auto-flow/)
