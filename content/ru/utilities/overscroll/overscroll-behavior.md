---
title: "Поведение при прокрутке"
description: "Не даёт прокрутке вложенной области переходить на страницу или родителя, когда область дошла до края."
---

# Поведение при прокрутке

Классы `scroll-over-*` задают `overscroll-behavior`: что происходит, когда
прокручиваемая область дошла до края, а человек продолжает крутить. Берите их
для модальных окон, боковых панелей, чатов и выпадающих списков, чтобы
прокрутка внутри не уводила страницу под ними.

## Пример

Прокрутите колёсиком или пальцем внутренний блок до конца и продолжайте:
с `scroll-over-auto` прокрутка переходит на родительскую область, с
`contain` и `none` — останавливается. Кнопка сразу ставит внутренний блок в
конец; счётчики показывают положение обеих областей.

:::example {id="utilities/overscroll/overscroll-behavior" label="Цепочка прокрутки"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `scroll-over-auto` | `-ms-scroll-chaining: chained; overscroll-behavior: auto` | — |
| `scroll-over-x-auto` | `overscroll-behavior-x: auto` | — |
| `scroll-over-y-auto` | `overscroll-behavior-y: auto` | — |
| `scroll-over-contain` | `-ms-scroll-chaining: none; overscroll-behavior: contain` | — |
| `scroll-over-x-contain` | `overscroll-behavior-x: contain` | — |
| `scroll-over-y-contain` | `overscroll-behavior-y: contain` | — |
| `scroll-over-none` | `-ms-scroll-chaining: none; overscroll-behavior: none` | — |
| `scroll-over-x-none` | `overscroll-behavior-x: none` | — |
| `scroll-over-y-none` | `overscroll-behavior-y: none` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Выбор значения

| Класс | Что происходит у края |
| :--- | :--- |
| `scroll-over-auto` | прокрутка переходит на родителя — поведение браузера по умолчанию |
| `scroll-over-contain` | прокрутка остаётся в области; эффекты у края (отскок, свечение) сохраняются |
| `scroll-over-none` | прокрутка остаётся в области, эффектов у края нет |

Обычно хватает `scroll-over-contain`: страница под окном не двигается, а
отклик у края остаётся привычным.

```html
<div class="max-h-f4 overflow-auto scroll-over-contain">
  <!-- содержимое панели -->
</div>
```

### Одна ось

Классы `scroll-over-x-*` и `scroll-over-y-*` задают поведение только по
горизонтали или по вертикали. Например, горизонтальная лента не уводит
страницу вбок, но вертикальная прокрутка через неё проходит:

```html
<div class="flex overflow-auto scroll-over-x-contain">
  <!-- карточки ленты -->
</div>
```

`scroll-over-none` на корневом элементе отключает жест «потянуть для
обновления» в мобильных браузерах.

## Ограничения

- Класс действует только на прокручиваемый элемент: без `overflow-auto` или
  `overflow-scroll` ему нечего ограничивать.
- Свойство не мешает прокрутке скриптом и переходу по якорю.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Плавность прокрутки](/ru/utilities/overscroll/overscroll-behavior-smooth/)
- [Переполнение](/ru/utilities/layout/overflow/)
