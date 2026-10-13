---
title: "Подготовка к изменениям"
description: "Заранее сообщает браузеру, какое свойство элемента анимируется, чтобы анимация шла плавнее."
---

# Подготовка к изменениям

Классы `will-change-*` задают свойство `will-change`: браузер заранее готовит
элемент к изменению трансформации, прокрутки или содержимого — например,
выносит его в отдельный слой. Берите их для анимации, которая заметно
подтормаживает без подсказки.

## Пример

Наведите указатель на плитки: обе увеличиваются одинаково. Подсказка
`will-change-transform` не меняет вид, она меняет то, как браузер готовит
отрисовку.

:::example {id="utilities/interactivity/will-change" label="will-change-transform и will-change-auto"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `will-change-auto` | `will-change: auto` | — |
| `will-change-scroll-position` | `will-change: scroll-position` | — |
| `will-change-scroll` | `will-change: scroll-position` | — |
| `will-change-contents` | `will-change: contents` | — |
| `will-change-transform` | `will-change: transform` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Браузер готовится к изменению |
| :--- | :--- |
| `will-change-transform` | `transform` — сдвиг, масштаб, поворот |
| `will-change-scroll-position`, `will-change-scroll` | позиции прокрутки |
| `will-change-contents` | содержимого элемента |
| `will-change-auto` | ничего особого; снимает подсказку |

```html
<div class="will-change-transform transition-transform hover:scale-3">…</div>
```

Подсказку ставят только тем элементам, анимация которых тормозит, и снимают
классом `will-change-auto` после неё, если элемент долго остаётся на экране.

## Ограничения

- Каждый подготовленный элемент занимает память видеокарты. Подсказка на
  многих элементах сразу замедляет страницу.
- `will-change-transform` создаёт контекст наложения и блок для
  позиционирования: потомок с `fixed` позиционируется относительно элемента, а
  не окна, и `z-*` потомков сравниваются внутри элемента.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Масштабирование](/ru/utilities/transform/transform-scale/)
- [Общее свойство перехода](/ru/utilities/animation/animation-transition-property/)
