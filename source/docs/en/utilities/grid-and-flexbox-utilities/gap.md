---
extends: _core._layouts.documentation
section: content
title: "Промежутки между элементами (gap)"
description: "Промежутки между элементами (gap)"
---

# Промежутки между элементами (gap)


Этот модификатор задает расстояние между элементами внутри сетки (grid) или флексбокса (flex), упрощая управление
горизонтальными и вертикальными промежутками.

## Таблица классов

| Класс    | Значение                           |
|:---------|:-----------------------------------|
| .g-0     | gap: var(`--sf-space-0`);          |
| .gap-x-0 | column-gap: var(`--sf-space-0`);   |
| .gap-y-0 | row-gap: var(`--sf-space-0`);      |
| .g-1     | gap: var(`--sf-space-1/3`);        |
| .gap-x-1 | column-gap: var(`--sf-space-1/3`); |
| .gap-y-1 | row-gap: var(`--sf-space-1/3`);    |
| .g-2     | gap: var(`--sf-space-1/2`);        |
| .gap-x-2 | column-gap: var(`--sf-space-1/2`); |
| .gap-y-2 | row-gap: var(`--sf-space-1/2`);    |
| .g-3     | gap: var(`--sf-space-1`);          |
| .gap-x-3 | column-gap: var(`--sf-space-1`);   |
| .gap-y-3 | row-gap: var(`--sf-space-1`);      |
| .g-4     | gap: var(`--sf-space-1`);          |
| .gap-x-4 | column-gap: var(`--sf-space-1`);   |
| .gap-y-4 | row-gap: var(`--sf-space-1`);      |
| .g-5     | gap: var(`--sf-space-2`);          |
| .gap-x-5 | column-gap: var(`--sf-space-2`);   |
| .gap-y-5 | row-gap: var(`--sf-space-2`);      |
| .g-6     | gap: var(`--sf-space-3`);          |
| .gap-x-6 | column-gap: var(`--sf-space-3`);   |
| .gap-y-6 | row-gap: var(`--sf-space-3`);      |
| .g-7     | gap: var(`--sf-space-4`);          |
| .gap-x-7 | column-gap: var(`--sf-space-4`);   |
| .gap-y-7 | row-gap: var(`--sf-space-4`);      |
| .g-8     | gap: var(`--sf-space-4`);          |
| .gap-x-8 | column-gap: var(`--sf-space-4`);   |
| .gap-y-8 | row-gap: var(`--sf-space-4`);      |
| .g-9     | gap: var(`--sf-space-5`);          |
| .gap-x-9 | column-gap: var(`--sf-space-5`);   |
| .gap-y-9 | row-gap: var(`--sf-space-5`);      |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `g-{0...9}` — устанавливает одинаковые промежутки по горизонтали и вертикали.
    - `gap-x-{0...9}` — устанавливает промежутки только по горизонтали.
    - `gap-y-{0...9}` — устанавливает промежутки только по вертикали.

## Пример использования

```html
<!-- Пример: одинаковый промежуток -->
<div class="grid grid-col-2 g-1">
  <div class="h-d1 radius-1/3 text-center bg-primary"></div>
  <div class="h-d1 radius-1/3 text-center bg-primary"></div>
</div>
```

```html
<!-- Пример: разный промежуток по горизонтали и вертикали -->
<div class="grid grid-col-2 gap-y-3 gap-x-6">
  <div class="h-d1 radius-1/3 text-center bg-primary"></div>
  <div class="h-d1 radius-1/3 text-center bg-primary"></div>
</div>
```

## Адаптивность

Для изменения промежутка, начиная с определённого размера экрана, просто добавьте контрольную точку. Например:

```html
<div class="md:gap-4">
    <!-- Начиная с md: промежуток будет var(--sf-space-1) (старый p-8) -->
</div>
```
