---
extends: _core._layouts.documentation
section: content
title: "События указателя (pointer-events)"
description: "События указателя (pointer-events)"
---

# События указателя (pointer-events)

[https://dev.ru.simai.io/ru/ui/utility/form/pointer-events.php](https://dev.ru.simai.io/ru/ui/utility/form/pointer-events.php)

С помощью модификаторов pointer-events вы можете управлять тем, будет ли элемент реагировать на события указателя (
например, клики мыши или касания).

## Классы и их значения

| Класс               | Значение              |
|:--------------------|:----------------------|
| .pointer-event-none | pointer-events: none; |
| .pointer-event-auto | pointer-events: auto; |
{.table}

## Описание

Используя данные модификаторы, вы можете отключать или включать реакцию элемента на события указателя. Это может быть
полезно, когда необходимо временно сделать элемент «неактивным» для взаимодействия, например, наложив прозрачный слой
или убрав интерактивность кнопки, пока выполняется определенное действие.

## Синтаксис

- `pointer-event-none` – отключить все события указателя для элемента.
- `pointer-event-auto` – вернуть стандартное поведение и включить события указателя для элемента.

## Пример использования

```html
<!-- Кнопка без реакции на указатель -->
<button class="pointer-event-none bg-primary color-on-surface-inverse p-1 radius-1/3">
    Нажать нельзя
</button>

<!-- Кнопка с реакцией на указатель -->
<button class="pointer-event-auto bg-secondary color-on-surface-inverse p-1 radius-1/3">
    Нажать можно
</button>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=forms&group=pointer-events"></iframe>
</div>