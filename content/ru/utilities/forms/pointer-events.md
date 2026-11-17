---
title: "События указателя"
description: "Делает элемент прозрачным для мыши и касаний или возвращает ему реакцию на указатель."
---

# События указателя

Классы `pointer-events-none` и `pointer-events-auto` задают свойство
`pointer-events`: элемент либо пропускает щелчки, наведение и касания к тому,
что лежит под ним, либо принимает их сам. Берите их для декоративных слоёв
поверх кнопок и ссылок.

## Пример

Над каждой кнопкой лежит полупрозрачный слой. Наведите указатель: слой с
`pointer-events-none` пропускает его к кнопке, слой с `pointer-events-auto`
перехватывает.

:::example {id="utilities/forms/pointer-events" label="Слой поверх кнопки"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `pointer-events-none` | `pointer-events: none` | — |
| `pointer-event-none` | `pointer-events: none` | — |
| `pointer-events-auto` | `pointer-events: auto` | — |
| `pointer-event-auto` | `pointer-events: auto` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Декоративный слой — градиент, блик, рамку — делают прозрачным для указателя,
чтобы под ним работали ссылки и кнопки:

```html
<div class="relative">
  <a href="/catalog/">Каталог</a>
  <div class="absolute inset-0 pointer-events-none bg-primary-container-strong"></div>
</div>
```

`pointer-events-none` наследуется. Чтобы внутри такого блока снова принимал
указатель один элемент, поставьте ему `pointer-events-auto`.

Имя класса повторяет свойство CSS: `pointer-events-*`. `pointer-event-none` и
`pointer-event-auto` — прежние имена; они работают до 2027-01-01.

## Ограничения

- Класс не делает элемент недоступным: на него по-прежнему можно перейти
  клавишей Tab и нажать Enter. Для недоступной кнопки используйте атрибут
  `disabled`, для блока — `inert`.
- С `pointer-events-none` у элемента не срабатывают и `hover:`-классы, и вид
  курсора `cursor-*`.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Вид курсора](/ru/utilities/interactivity/cursor/)
- [Сенсорное действие](/ru/utilities/interactivity/touch-action/)
- [Прозрачность](/ru/utilities/filters/opacity/)
