---
extends: _core._layouts.documentation
section: content
title: "Шаблон колонок сетки (grid-template-columns)"
description: "Шаблон колонок сетки (grid-template-columns)"
---

# Шаблон колонок сетки (grid-template-columns)

!rtags[grid-template-columns sm md lg xl]


Модификаторы `grid-col-*` задают количество колонок и их размер, формируя базовый шаблон сетки.

## Таблица классов

| Класс            | Значение                                |
|:-----------------|:----------------------------------------|
| .grid-col-1 … 12 | grid-template-columns: repeat(n, minmax(0, 1fr)); |
| .grid-col-none   | grid-template-columns: none;            |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с указанного брейкпоинта (`sm`, `md`, `lg`, `xl`). Если не указана, действует всегда.
- Модификатор *(обязательный параметр)*: `grid-col-{n}` или `grid-col-none`.

## Пример

```html
<div class="grid grid-col-3 gap-2">
  <div class="sf-card bg-primary color-on-primary p-2">1</div>
  <div class="sf-card bg-secondary color-on-secondary p-2">2</div>
  <div class="sf-card bg-tertiary color-on-tertiary p-2">3</div>
</div>
```

## Адаптивность

```html
<div class="grid grid-col-2 md:grid-col-4">
  <!-- 2 колонки на мобильных, 4 на md и выше -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=grid&group=grid-template-columns"></iframe>
</div>
