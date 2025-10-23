---
extends: _core._layouts.documentation
section: content
title: "Прозрачность элемента (filter-opacity)"
description: "Прозрачность элемента (filter-opacity)"
---

# Прозрачность элемента (filter-opacity)

[https://dev.ru.simai.io/ru/ui/utility/filter/filter-opacity.php](https://dev.ru.simai.io/ru/ui/utility/filter/filter-opacity.php)

Данные модификаторы позволяют задавать различную степень прозрачности элемента.

## Классы

| Класс         | Значение              |
|:--------------|:----------------------|
| .opacity-0    | filter: opacity(0);   |
| .opacity-1    | filter: opacity(0.1); |
| .opacity-2    | filter: opacity(0.2); |
| .opacity-3    | filter: opacity(0.3); |
| .opacity-4    | filter: opacity(0.4); |
| .opacity-5    | filter: opacity(0.5); |
| .opacity-6    | filter: opacity(0.6); |
| .opacity-7    | filter: opacity(0.7); |
| .opacity-8    | filter: opacity(0.8); |
| .opacity-9    | filter: opacity(0.9); |
| .opacity-full | filter: opacity(1);   |
{.table}

## Описание

Модификаторы `opacity-{0...9,full}` устанавливают прозрачность элемента.

- `opacity-0` делает элемент полностью прозрачным (невидимым).
- `opacity-full` делает элемент полностью непрозрачным (видимым).
- Значения от `opacity-1` до `opacity-9` задают различные уровни прозрачности от 10% до 90%.

Также можно использовать `hover:opacity-*` для изменения прозрачности при наведении курсора.

## Синтаксис

- `opacity-0` ... `opacity-9` и `opacity-full` задают степень прозрачности.
- `hover:opacity-*` позволяет изменять прозрачность при наведении.

## Пример использования

```html
<!-- Полная прозрачность -->
<div class="opacity-0 p-4 bg-primary color-on-surface-inverse">Невидимый элемент</div>

<!-- Полупрозрачный (50%) -->
<div class="opacity-5 p-4 bg-secondary m-top-2">50% прозрачности</div>

<!-- Полная непрозрачность при наведении -->
<div class="opacity-5 hover:opacity-full p-4 bg-tertiary m-top-2 transition">Наведи, чтобы сделать непрозрачным</div>
```
