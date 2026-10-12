---
title: "Выравнивание содержимого по основной оси"
description: "Прижимает элементы флекс-контейнера или колонки сетки к началу, центру или концу и распределяет между ними свободное место."
---

# Выравнивание содержимого по основной оси

Классы `justify-*` задают `justify-content`: куда флекс-контейнер сдвигает
элементы вдоль основной оси и как делит между ними свободное место. В сетке
они так же располагают колонки, если колонки уже контейнера. Берите их для
панелей с кнопками, шапок и навигации.

## Пример

### Значения

Три элемента во флекс-контейнере. Подпись над образцом — класс контейнера.

:::example {id="utilities/grid-and-flexbox-utilities/justify-content" label="justify-start … justify-evenly"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: на узком экране элементы по центру, с ширины `md` — по краям.

:::example {id="utilities/grid-and-flexbox-utilities/justify-content-responsive" label="justify-center md:justify-between"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `justify-start` | `justify-content: flex-start` | — |
| `content-main-start` | `justify-content: flex-start` | — |
| `justify-end` | `justify-content: flex-end` | — |
| `content-main-end` | `justify-content: flex-end` | — |
| `justify-center` | `justify-content: center` | — |
| `content-main-center` | `justify-content: center` | — |
| `justify-between` | `justify-content: space-between` | — |
| `content-main-between` | `justify-content: space-between` | — |
| `justify-around` | `justify-content: space-around` | — |
| `content-main-around` | `justify-content: space-around` | — |
| `justify-evenly` | `justify-content: space-evenly` | — |
| `content-main-evenly` | `justify-content: space-evenly` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:justify-start`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `justify-start`, `justify-center`, `justify-end` — элементы вместе у начала,
  в центре или у конца.
- `justify-between` — крайние элементы у краёв, остальное место поровну между
  элементами.
- `justify-around` — у каждого элемента одинаковые поля с двух сторон, поэтому
  у краёв место вдвое меньше, чем между элементами.
- `justify-evenly` — место поровну между элементами и у краёв.

### Шапка: логотип слева, меню справа

```html
<header class="flex justify-between items-cross-center">
  <a href="/">Логотип</a>
  <nav>Меню</nav>
</header>
```

Основная ось следует направлению: при
[`flex-col`](/ru/utilities/flex/flex-direction/) классы выравнивают по
вертикали. Выравнивание по второй оси задают классы
[`items-cross-*`](/ru/utilities/grid-and-flexbox-utilities/align-items/), обе
оси сразу — [`start-start` … `end-end`](/ru/utilities/grid-and-flexbox-utilities/flex-align/).

### Второе имя

У каждого класса есть второе имя: `content-main-start`, `content-main-center`,
`content-main-end`, `content-main-between`, `content-main-around`,
`content-main-evenly`. Значения те же. В разметке пишите `justify-*`.

## Ограничения

- Классы распределяют только свободное место. Если элемент растягивается
  (`grow`, `flex-1`), свободного места нет и класс ничего не меняет.
- `justify-start` и `justify-end` следуют направлению письма: при `dir="rtl"`
  начало строки справа.

## См. также

- [Выравнивание каждого элемента в ячейках по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-items/)
- [Одновременное выравнивание по двум осям](/ru/utilities/grid-and-flexbox-utilities/flex-align/)
- [Размещение содержимого по обеим осям](/ru/utilities/grid-and-flexbox-utilities/place-content/)
- [Направление размещения](/ru/utilities/flex/flex-direction/)
