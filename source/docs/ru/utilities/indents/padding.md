---
extends: _core._layouts.documentation
section: content
title: Внутренний отступ (padding)
description: Внутренний отступ (padding)
---

# Внутренний отступ (padding)

!rtags[padding sm md lg xl]


`padding` управляет расстоянием от контента до границ элемента. Размеры привязаны к токенам `--sf-space-*`.

## Таблица классов

| Класс               | Значение                                   |
|:--------------------|:-------------------------------------------|
| .p-{n}              | padding: var(`--sf-space-{n}`);            |
| .p-top-{n}          | padding-top: var(`--sf-space-{n}`);        |
| .p-bottom-{n}       | padding-bottom: var(`--sf-space-{n}`);     |
| .p-inline-start-{n} | padding-inline-start: var(`--sf-space-{n}`); |
| .p-inline-end-{n}   | padding-inline-end: var(`--sf-space-{n}`);   |
| .p-x-{n}            | padding-inline: var(`--sf-space-{n}`);     |
| .p-y-{n}            | padding-block: var(`--sf-space-{n}`);      |
{.table}

Где `{n}` ∈ `0, 1/4, 1/3, 1/2, 1, 2, 3, 4, 5, 6, 7, 8`. Логические стороны (`inline-start/end`) используются вместо left/right.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: `sm`, `md`, `lg`, `xl` — применяют модификатор с заданного брейкпоинта.
- Модификатор *(обязательный параметр)*: любой из классов таблицы.

## Пример использования

```html
<div class="p-1">Базовый padding</div>
<div class="p-x-2 p-y-3">Горизонтальный и вертикальный padding</div>
<div class="p-top-4 p-inline-end-1/2">Раздельные стороны</div>
```

## Адаптивность

```html
<div class="p-2 md:p-4">
  <!-- Начиная с md padding увеличится до var(--sf-space-4) -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=indents&group=padding"></iframe>
</div>
