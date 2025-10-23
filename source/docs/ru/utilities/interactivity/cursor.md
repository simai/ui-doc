---
extends: _core._layouts.documentation
section: content
title: Вид курсора (cursor)
description: Вид курсора (cursor)
---

# Вид курсора (cursor)

[https://dev.ru.simai.io/ru/ui/utility/interactivity/cursor.php](https://dev.ru.simai.io/ru/ui/utility/interactivity/cursor.php)

С помощью данных модификаторов вы можете управлять стилем курсора мыши при наведении на элемент.

## Классы и их значения

| Класс                 | Значение               |
|:----------------------|:-----------------------|
| .cursor-auto          | cursor: auto;          |
| .cursor-default       | cursor: default;       |
| .cursor-pointer       | cursor: pointer;       |
| .cursor-wait          | cursor: wait;          |
| .cursor-text          | cursor: text;          |
| .cursor-move          | cursor: move;          |
| .cursor-help          | cursor: help;          |
| .cursor-not-allowed   | cursor: not-allowed;   |
| .cursor-context-menu  | cursor: context-menu;  |
| .cursor-progress      | cursor: progress;      |
| .cursor-cell          | cursor: cell;          |
| .cursor-crosshair     | cursor: crosshair;     |
| .cursor-vertical-text | cursor: vertical-text; |
| .cursor-alias         | cursor: alias;         |
| .cursor-copy          | cursor: copy;          |
| .cursor-no-drop       | cursor: no-drop;       |
| .cursor-grab          | cursor: grab;          |
| .cursor-grabbing      | cursor: grabbing;      |
| .cursor-all-scroll    | cursor: all-scroll;    |
| .cursor-col-resize    | cursor: col-resize;    |
| .cursor-row-resize    | cursor: row-resize;    |
| .cursor-n-resize      | cursor: n-resize;      |
| .cursor-e-resize      | cursor: e-resize;      |
| .cursor-s-resize      | cursor: s-resize;      |
| .cursor-w-resize      | cursor: w-resize;      |
| .cursor-ne-resize     | cursor: ne-resize;     |
| .cursor-nw-resize     | cursor: nw-resize;     |
| .cursor-se-resize     | cursor: se-resize;     |
| .cursor-sw-resize     | cursor: sw-resize;     |
| .cursor-ew-resize     | cursor: ew-resize;     |
| .cursor-ns-resize     | cursor: ns-resize;     |
| .cursor-nesw-resize   | cursor: nesw-resize;   |
| .cursor-nwse-resize   | cursor: nwse-resize;   |
| .cursor-zoom-in       | cursor: zoom-in;       |
| .cursor-zoom-out      | cursor: zoom-out;      |
{.table}

## Описание

Данные модификаторы позволяют изменить внешний вид курсора при наведении на элемент. Это может быть полезно для указания
на активные элементы (например, `cursor-pointer` для ссылок и кнопок), недоступные элементы (`cursor-not-allowed`), а
также для специфических задач, таких как изменение размера окон (`cursor-n-resize`, `cursor-ew-resize` и т.д.).

## Синтаксис

- `cursor-{тип}` – задаёт стиль курсора мыши.

## Пример использования

```html
<button type="button" class="cursor-pointer p-1 border-1 ...">
    Отправить
</button>

<button type="button" class="cursor-progress p-1 border-1 ...">
    Сохранение...
</button>

<button type="button" disabled class="cursor-not-allowed p-1 border-1 ...">
    Подтвердить
</button>
```
