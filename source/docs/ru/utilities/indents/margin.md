---
extends: _core._layouts.documentation
section: content
title: Внешний отступ (margin)
description: Внешний отступ (margin)
---

# Внешний отступ (margin)

!rtags[margin sm md lg xl]


Модификаторы `margin` управляют пространством вокруг элемента: задают расстояние до соседних блоков и контейнера.

## Таблица классов

| Класс                 | Значение                                |
|:----------------------|:----------------------------------------|
| .m-{n}                | margin: var(`--sf-space-{n}`);          |
| .-m-{n}               | margin: `-var(--sf-space-{n})`;         |
| .m-top-{n}            | margin-top: var(`--sf-space-{n}`);      |
| .m-bottom-{n}         | margin-bottom: var(`--sf-space-{n}`);   |
| .m-inline-{n}         | margin-inline: var(`--sf-space-{n}`);      |
| .m-block-{n}          | margin-block: var(`--sf-space-{n}`);       |
| .m-inline-start-{n}   | margin-inline-start: var(`--sf-space-{n}`);|
| .m-inline-end-{n}     | margin-inline-end: var(`--sf-space-{n}`);  |
| .m-top-{n}            | margin-top: var(`--sf-space-{n}`);         |
| .m-bottom-{n}         | margin-bottom: var(`--sf-space-{n}`);      |
| отрицательные варианты| те же классы с префиксом `-`               |
{.table}

Где `{n}` ∈ `0, 1/4, 1/3, 1/2, 1, 2, 3, 4, 5, 6, 7, 8`. Используются логические стороны (`inline-start/end`) вместо left/right для поддержки LTR/RTL.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`). Если не указана, действует для всех размеров.
- Модификатор *(обязательный параметр)*: `m-{n}`, `m-inline-{n}`, `m-block-{n}`, `m-top/{bottom}-{n}`, `m-inline-start/{end}-{n}`, а также их отрицательные варианты.

## Пример использования

```html
<div class="m-1/2">Отступ со всех сторон 1/2</div>
<div class="m-top-4 m-inline-start-1">Отступ сверху и по направлению письма</div>
<div class="m-inline-3">Отступ по inline-оси</div>
<div class="m-block-2">Отступ по block-оси</div>
<div class="-m-bottom-2">Отрицательный отступ снизу</div>
```

## Адаптивность

Чтобы применять отступ с определённого брейкпоинта, добавьте префикс контрольной точки:

```html
<div class="md:m-4">
  <!-- Начиная с md отступ var(--sf-space-4) -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=indents&group=margin"></iframe>
</div>
