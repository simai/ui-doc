---
title: "Выравнивание содержимого по поперечной оси"
description: "Располагает строки флекс-контейнера с переносом или строки сетки по поперечной оси, когда им хватает места с запасом."
---

# Выравнивание содержимого по поперечной оси

Классы `content-cross-*` задают `align-content`: где стоят строки
флекс-контейнера с переносом или строки сетки, когда контейнер выше их, и как
между ними делится свободное место. Берите их для блоков заданной высоты с
переносящимися элементами.

## Пример

### Значения

Флекс-контейнер с `flex-wrap` заданной высоты: пять элементов в две строки.
Подпись над образцом — класс контейнера.

:::example {id="utilities/grid-and-flexbox-utilities/align-content" label="content-cross-start … content-cross-stretch"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `content-cross-start` | `align-content: flex-start` | — |
| `content-cross-end` | `align-content: flex-end` | — |
| `content-cross-center` | `align-content: center` | — |
| `content-cross-between` | `align-content: space-between` | — |
| `content-cross-around` | `align-content: space-around` | — |
| `content-cross-evenly` | `align-content: space-evenly` | — |
| `content-cross-stretch` | `align-content: stretch` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:content-cross-start`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `content-cross-start`, `content-cross-center`, `content-cross-end` — строки
  вместе у начала, в центре или у конца.
- `content-cross-between`, `content-cross-around`, `content-cross-evenly` —
  свободное место между строками, как у
  [`justify-between`, `justify-around`, `justify-evenly`](/ru/utilities/grid-and-flexbox-utilities/justify-content/).
- `content-cross-stretch` — строки растягиваются и делят высоту; это значение
  по умолчанию у флекс-контейнера.

### Метки в блоке заданной высоты

```html
<div class="flex flex-wrap content-cross-start gap-1 h-f0">
  <span>Метка</span>
  <span>Метка</span>
  <span>Метка</span>
</div>
```

## Ограничения

- Во флекс-контейнере класс действует только вместе с
  [`flex-wrap`](/ru/utilities/flex/flex-wrap/) или `flex-wrap-reverse`.
- Нужна свободная высота: у контейнера без заданной высоты строки занимают её
  целиком, и выравнивать нечего.
- Классы `content-cross-*` двигают строки целиком. Элементы внутри строки
  выравнивают классы [`items-cross-*`](/ru/utilities/grid-and-flexbox-utilities/align-items/).

## См. также

- [Выравнивание каждого элемента в ячейках по поперечной оси](/ru/utilities/grid-and-flexbox-utilities/align-items/)
- [Размещение содержимого по обеим осям](/ru/utilities/grid-and-flexbox-utilities/place-content/)
- [Перенос элементов](/ru/utilities/flex/flex-wrap/)
