---
title: "Выравнивание отдельного элемента по поперечной оси"
description: "Выравнивает один элемент флекс-контейнера или сетки по поперечной оси иначе, чем остальные."
---

# Выравнивание отдельного элемента по поперечной оси

Классы `self-cross-*` задают `align-self`: как один элемент стоит поперёк
основной оси, независимо от
[`items-cross-*`](/ru/utilities/grid-and-flexbox-utilities/align-items/)
контейнера. Берите их, когда один элемент строки должен стоять иначе:
кнопка внизу карточки, значок в верхнем углу.

## Пример

### Значения

Контейнер с `items-cross-stretch`: крайние элементы растянуты на всю высоту, а
средний выровнен своим классом.

:::example {id="utilities/grid-and-flexbox-utilities/align-self" label="self-cross-auto … self-cross-baseline"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `self-cross-auto` | `align-self: auto` | — |
| `self-cross-start` | `align-self: start` | — |
| `self-cross-end` | `align-self: end` | — |
| `self-cross-center` | `align-self: center` | — |
| `self-cross-stretch` | `align-self: stretch` | — |
| `self-cross-baseline` | `align-self: baseline` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:self-cross-auto`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `self-cross-auto` — элемент следует классу контейнера; значение по
  умолчанию. Класс нужен, чтобы отменить `self-cross-*` на другой ширине
  экрана.
- `self-cross-start`, `self-cross-center`, `self-cross-end` — элемент своей
  высоты у начала, в центре или у конца.
- `self-cross-stretch` — элемент на всю высоту строки.
- `self-cross-baseline` — строка текста элемента на базовой линии соседей,
  выровненных так же.

### Кнопка, которая не растягивается

```html
<div class="flex gap-2">
  <p>Длинный текст описания в несколько строк.</p>
  <button class="self-cross-start" type="button">Подробнее</button>
</div>
```

## Ограничения

- Класс действует на прямого потомка флекс-контейнера или сетки.
- При [`flex-col`](/ru/utilities/flex/flex-direction/) поперечная ось
  горизонтальна: класс выравнивает по ширине.

## См. также

- [Выравнивание каждого элемента в ячейках по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-items/)
- [Выравнивание отдельного элемента в ячейке по основной оси](/ru/utilities/grid-and-flexbox-utilities/justify-self/)
- [Размещение отдельного элемента](/ru/utilities/grid-and-flexbox-utilities/place-self/)
