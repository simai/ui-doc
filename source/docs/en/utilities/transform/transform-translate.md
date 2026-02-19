---
extends: _core._layouts.documentation
section: content
title: "Смещение (transform-translate)"
description: "Смещение (transform-translate)"
---

# Смещение (transform-translate)


С помощью модификаторов смещения `transform-translate` в SIMAI Framework вы можете перемещать элементы по осям X и Y на
заданное расстояние. Это удобно для создания анимаций, эффектов при наведении (hover) или динамического позиционирования
элементов без ручного переопределения стилей.

## Классы и их значения

| Класс          | Значение           |
|:---------------|:---------------------------------------|
| .translate-x-0 | transform: translateX(0px);            |
| .translate-y-0 | transform: translateY(0px);            |
| .translate-x-1 | transform: translateX(1px);            |
| .translate-y-1 | transform: translateY(1px);            |
| .translate-x-2 | transform: translateX(var(`--sf-a2`)); |
| .translate-y-2 | transform: translateY(var(`--sf-a2`)); |
| .translate-x-3 | transform: translateX(var(`--sf-a4`)); |
| .translate-y-3 | transform: translateY(var(`--sf-a4`)); |
| .translate-x-4 | transform: translateX(var(`--sf-a6`)); |
| .translate-y-4 | transform: translateY(var(`--sf-a6`)); |
| .translate-x-5 | transform: translateX(var(`--sf-a8`)); |
| .translate-y-5 | transform: translateY(var(`--sf-a8`)); |
| .translate-x-6 | transform: translateX(var(`--sf-b0`)); |
| .translate-y-6 | transform: translateY(var(`--sf-b0`)); |
| .translate-x-7 | transform: translateX(var(`--sf-b2`)); |
| .translate-y-7 | transform: translateY(var(`--sf-b2`)); |
| .translate-x-8 | transform: translateX(var(`--sf-b4`)); |
| .translate-y-8 | transform: translateY(var(`--sf-b4`)); |
| .translate-x-9 | transform: translateX(var(`--sf-b6`)); |
| .translate-y-9 | transform: translateY(var(`--sf-b6`)); |

{.table}

## Описание

Данные модификаторы задают смещение элемента по горизонтали (X) или вертикали (Y) на определённое расстояние. Используя
их вместе с `hover:` вы можете создавать эффекты наведения, смещая элемент при поднесении курсора.

## Синтаксис

- `translate-x-{числовое значение}` – задать смещение по оси X.
- `translate-y-{числовое значение}` – задать смещение по оси Y.
- `hover:translate-x-{числовое значение}` или `hover:translate-y-{числовое значение}` – задать смещение при наведении
  курсора.

## Пример использования

```html
<img class="translate-y-9 transition ease-in-out ..." src="image.jpg" alt="Смещено вниз">

<img class="translate-x-9 hover:translate-x-0 transition ease-in-out ..." src="image.jpg"
     alt="Смещено и возвращается при наведении">
```
