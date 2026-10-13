---
title: "Размещение содержимого по обеим осям"
description: "Одним классом располагает содержимое сетки или флекс-контейнера с переносом сразу по горизонтали и по вертикали."
---

# Размещение содержимого по обеим осям

Классы `content-*` задают `place-content` — `align-content` и
`justify-content` одним значением. В сетке они располагают колонки и строки, во
флекс-контейнере с переносом — элементы в строке и сами строки. Берите
`content-center`, чтобы поставить содержимое в центр блока заданной высоты.

## Пример

### Значения

Флекс-контейнер с `flex-wrap` заданной высоты. Подпись над образцом — класс
контейнера.

:::example {id="utilities/grid-and-flexbox-utilities/place-content" label="content-start … content-stretch"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `content-center` | `align-content: center; justify-content: center; place-content: center` | — |
| `content-start` | `align-content: start; justify-content: start; place-content: start` | — |
| `content-end` | `align-content: end; justify-content: end; place-content: end` | — |
| `content-between` | `align-content: space-between; justify-content: space-between; place-content: space-between` | — |
| `content-around` | `align-content: space-around; justify-content: space-around; place-content: space-around` | — |
| `content-evenly` | `align-content: space-evenly; justify-content: space-evenly; place-content: space-evenly` | — |
| `content-stretch` | `align-content: stretch; justify-content: stretch; place-content: stretch` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:content-center`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `content-start`, `content-center`, `content-end` — содержимое вместе у
  начала, в центре или у конца по обеим осям.
- `content-between`, `content-around`, `content-evenly` — свободное место
  делится между элементами и строками по обеим осям.
- `content-stretch` — строки делят высоту; по горизонтали во флекс-контейнере
  элементы стоят у начала.

### Содержимое в центре блока

```html
<div class="grid content-center h-f0">
  <p>По центру по обеим осям</p>
</div>
```

По одной оси выравнивают классы
[`justify-*`](/ru/utilities/grid-and-flexbox-utilities/justify-content/) и
[`content-cross-*`](/ru/utilities/grid-and-flexbox-utilities/align-content/).

## Ограничения

- Во флекс-контейнере без [`flex-wrap`](/ru/utilities/flex/flex-wrap/)
  вертикальная часть класса не действует.
- Нужна свободная высота: у блока без заданной высоты по вертикали двигать
  нечего.
- Не путайте `content-*` с `content`: последний задаёт `display: contents` и
  описан на странице [Метод отображения элемента](/ru/utilities/layout/display/).

## См. также

- [Выравнивание содержимого по основной оси](/ru/utilities/grid-and-flexbox-utilities/justify-content/)
- [Выравнивание содержимого по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-content/)
- [Размещение элементов по обеим осям](/ru/utilities/grid-and-flexbox-utilities/place-items/)
