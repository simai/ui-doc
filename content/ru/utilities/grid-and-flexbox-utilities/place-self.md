---
title: "Размещение отдельного элемента"
description: "Одним классом выравнивает один элемент сетки в его ячейке сразу по горизонтали и по вертикали."
---

# Размещение отдельного элемента

Классы `self-*` задают `place-self` — `align-self` и `justify-self` одним
значением: где один элемент стоит в своей ячейке сетки, независимо от
[`items-*`](/ru/utilities/grid-and-flexbox-utilities/place-items/) контейнера.
Берите их, чтобы поставить один элемент в угол или в центр ячейки.

## Пример

### Значения

Сетка из одной ячейки заданной высоты. Подпись над образцом — класс элемента.

:::example {id="utilities/grid-and-flexbox-utilities/place-self" label="self-auto … self-stretch"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `self-auto` | `align-self: auto; justify-self: auto; place-self: auto` | — |
| `self-start` | `align-self: start; justify-self: start; place-self: start` | — |
| `self-end` | `align-self: end; justify-self: end; place-self: end` | — |
| `self-center` | `align-self: center; justify-self: center; place-self: center` | — |
| `self-stretch` | `align-self: stretch; justify-self: stretch; place-self: stretch` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:self-auto`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `self-auto` — элемент следует классу контейнера; значение по умолчанию.
  Класс нужен, чтобы отменить `self-*` на другой ширине экрана.
- `self-start`, `self-center`, `self-end` — элемент своего размера у начала, в
  центре или у конца ячейки по обеим осям.
- `self-stretch` — элемент на всю ячейку.

### Метка в углу карточки

```html
<div class="grid">
  <img class="row-start-1 col-start-1" src="photo.jpg" alt="Фото">
  <span class="row-start-1 col-start-1 self-start">Новинка</span>
</div>
```

## Ограничения

- Во флекс-контейнере действует только часть `align-self`: класс выравнивает
  элемент по поперечной оси, как
  [`self-cross-*`](/ru/utilities/grid-and-flexbox-utilities/align-self/).
- Класс ставят на элемент, а не на контейнер.

## См. также

- [Размещение элементов по обеим осям](/ru/utilities/grid-and-flexbox-utilities/place-items/)
- [Выравнивание отдельного элемента по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-self/)
- [Выравнивание отдельного элемента в ячейке по основной оси](/ru/utilities/grid-and-flexbox-utilities/justify-self/)
