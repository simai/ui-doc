---
extends: _core._layouts.documentation
section: content
title: Сортировка (order)
description: Сортировка (order)
---

# Сортировка (order)

!rtags[order sm md lg xl]


Данный модификатор управляет порядком отображения элементов в потоке раскладки, не изменяя их логический порядок в
документе.

## Таблица классов

| Класс        | Значение       |
|:-------------|:---------------|
| .order-1     | order: 1;      |
| .order-2     | order: 2;      |
| .order-3     | order: 3;      |
| .order-4     | order: 4;      |
| .order-5     | order: 5;      |
| .order-6     | order: 6;      |
| .order-7     | order: 7;      |
| .order-8     | order: 8;      |
| .order-9     | order: 9;      |
| .order-10    | order: 10;     |
| .order-11    | order: 11;     |
| .order-12    | order: 12;     |
| .order-first | order: \-9999; |
| .order-last  | order: 9999;   |
| .order-none  | order: 0;      |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `order-{1...12}` — изменяет порядок элемента в рамках от 1 до 12\.
    - `order-first` — элемент будет отображаться первым.
    - `order-last` — элемент будет отображаться последним.
    - `order-none` — порядок будет сброшен, элемент отображается по умолчанию.

## Пример использования

```html
<!-- Пример: последний элемент будет отображаться первым -->
<div class="flex content-main-between">
    <div class="order-last">1</div>
    <div>2</div>
    <div>3</div>
</div>
```

## Адаптивность

Для управления порядком отображения элементов при достижении определенной контрольной точки экрана, просто добавьте её к
модификатору:

```html
<div class="md:order-last">
    <!-- Начиная с md элемент будет отображаться последним -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=grid-and-flexbox-utilities&group=order"></iframe>
</div>
