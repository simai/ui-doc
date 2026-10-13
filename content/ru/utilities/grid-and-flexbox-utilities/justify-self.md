---
title: "Выравнивание отдельного элемента в ячейке по основной оси"
description: "Выравнивает один элемент сетки по горизонтали внутри его ячейки."
---

# Выравнивание отдельного элемента в ячейке по основной оси

Классы `self-main-*` задают `justify-self`: где один элемент сетки стоит в
своей ячейке по горизонтали, независимо от
[`items-main-*`](/ru/utilities/grid-and-flexbox-utilities/justify-items/)
контейнера. Берите их, когда один элемент сетки должен стоять иначе, чем
соседи.

## Пример

### Значения

Сетка из одной колонки, элемент шириной по своему тексту. Подпись над
образцом — класс элемента.

:::example {id="utilities/grid-and-flexbox-utilities/justify-self" label="self-main-auto … self-main-stretch"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `self-main-auto` | `justify-self: auto` | — |
| `self-main-start` | `justify-self: start` | — |
| `self-main-end` | `justify-self: end` | — |
| `self-main-center` | `justify-self: center` | — |
| `self-main-stretch` | `justify-self: stretch` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:self-main-auto`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `self-main-auto` — элемент следует классу контейнера; значение по
  умолчанию. Класс нужен, чтобы отменить `self-main-*` на другой ширине
  экрана.
- `self-main-start`, `self-main-center`, `self-main-end` — элемент своей
  ширины у начала, в центре или у конца ячейки.
- `self-main-stretch` — элемент на всю ширину ячейки.

### Кнопка у конца формы

```html
<form class="grid gap-2">
  <label>Имя <input type="text"></label>
  <button class="self-main-end" type="submit">Отправить</button>
</form>
```

## Ограничения

- Класс работает только в сетке. Во флекс-контейнере `justify-self` не
  действует; отодвинуть один флекс-элемент к концу строки можно отступом
  `m-inline-start-auto`.
- Начало ячейки следует направлению письма: при `dir="rtl"` `self-main-start`
  прижимает к правому краю.

## См. также

- [Выравнивание каждого элемента по основной оси внутри ячейки](/ru/utilities/grid-and-flexbox-utilities/justify-items/)
- [Выравнивание отдельного элемента по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-self/)
- [Размещение отдельного элемента](/ru/utilities/grid-and-flexbox-utilities/place-self/)
