---
extends: _core._layouts.documentation
section: content
title: "Автоматическая ширина столбцов сетки (grid-auto-columns)"
description: "Автоматическая ширина столбцов сетки (grid-auto-columns)"
---

# Автоматическая ширина столбцов сетки (grid-auto-columns)

[https://dev.ru.simai.io/ru/ui/utility/grid/grid-auto-columns.php](https://dev.ru.simai.io/ru/ui/utility/grid/grid-auto-columns.php)

В SIMAI Framework с помощью модификаторов можно управлять размером столбцов сетки, для которых явно не указаны размеры.
Это позволяет более гибко адаптировать макет под различные сценарии и размер экрана.

## Таблица классов

| Класс          | Значение       |
|:---------------|:-----------------------------------|
| .auto-cols     | grid-auto-columns: auto;           |
| .auto-cols-min | grid-auto-columns: min-content;    |
| .auto-cols-max | grid-auto-columns: max-content;    |
| .auto-cols-fr  | grid-auto-columns: minmax(0, 1fr); |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `auto-cols` — столбцы будут иметь автоматическую ширину (по умолчанию);
    - `auto-cols-min` — ширина столбцов определяется минимальным размером содержимого (min-content);
    - `auto-cols-max` — ширина столбцов определяется максимальным размером содержимого (max-content);
    - `auto-cols-fr` — ширина столбцов будет распределяться равномерно за счёт единиц измерения fr.

## Пример использования

```html
<div class="grid gap-1 grid-flow-col auto-cols">
    <div>1</div>
    <div>Short</div>
    <div>Medium length</div>
    <div>Larger amount of content</div>
</div>
```

В данном примере используется класс `auto-cols`, и ширина столбцов определяется автоматически в зависимости от
содержимого.

Для равномерного распределения можно использовать `auto-cols-fr`:

```html
<div class="grid gap-1 grid-flow-col auto-cols-fr">
    <div>1</div>
    <div>Short</div>
    <div>Medium length</div>
    <div>Larger amount of content</div>
</div>
```

Здесь все столбцы будут занимать одинаковую долю доступной ширины.

## Адаптивность

Для настройки размеров столбцов, начиная с определённого размера экрана, используйте контрольные точки. Например:

```html
<div class="md:auto-cols-min">
    <!-- Начиная с размера экрана md и больше столбцы будут использовать минимальный размер содержимого -->
</div>
```
