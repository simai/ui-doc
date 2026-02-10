---
extends: _core._layouts.documentation
section: content
title: "Автоматический размер строк сетки (grid-auto-rows)"
description: "Автоматический размер строк сетки (grid-auto-rows)"
---

# Автоматический размер строк сетки (grid-auto-rows)

[https://dev.ru.simai.io/ru/ui/utility/grid/grid-auto-rows.php](https://dev.ru.simai.io/ru/ui/utility/grid/grid-auto-rows.php)

В SIMAI Framework с помощью модификаторов можно управлять размером строк для тех, у которых явно не указаны размеры. Это
позволяет гибко настраивать сетку, учитывая особенности содержимого.

## Таблица классов

| Класс          | Значение                        |
|:---------------|:--------------------------------|
| .auto-rows     | grid-auto-rows: auto;           |
| .auto-rows-min | grid-auto-rows: min-content;    |
| .auto-rows-max | grid-auto-rows: max-content;    |
| .auto-rows-fr  | grid-auto-rows: minmax(0, 1fr); |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `auto-rows` — размер строк устанавливается автоматически (по умолчанию).
    - `auto-rows-min` — размер строк по минимальному размеру содержимого.
    - `auto-rows-max` — размер строк по максимальному размеру содержимого.
    - `auto-rows-fr` — строки распределяются равномерно.

## Пример использования

```html
<div class="grid gap-1 auto-rows">
    <div>1</div>
    <div>Short</div>
    <div>Medium length</div>
    <div>Larger amount of content</div>
</div>
```

Здесь строки будут автоматически подстраиваться в зависимости от содержимого.

## Адаптивность

Для изменения поведения начиная с определённого размера экрана, добавьте контрольную точку:

```html
<div class="md:auto-rows-min">
    <!-- Начиная с md строки будут ориентироваться на минимальный размер содержимого -->
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=grid&group=grid-auto-rows"></iframe>
</div>