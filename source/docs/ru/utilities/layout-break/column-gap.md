---
extends: _core._layouts.documentation
section: content
title: "Межколоночный интервал (column-gap)"
description: "Утилита col-gap-* задаёт расстояние между колонками многоколоночного макета."
---

# Межколоночный интервал (column-gap)

!rtags[column-gap sm md lg xl]


Модификатор `col-gap-*` задаёт расстояние между колонками в многоколоночном макете (`layout-col-*`). Используются те же размерные токены, что и для отступов (`--sf-space-*`).

## Таблица классов

| Класс        | Значение                             |
|:-------------|:-------------------------------------|
| .col-gap-{n} | column-gap: var(--sf-space-{n});     |
{.table}

Где `{n}` ∈ `0, 1/4, 1/3, 1/2, 1, 2, 3, 4, 5, 6, 7, 8`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`.

- **Контрольная точка** *(необязательный параметр)*: `sm`, `md`, `lg`, `xl` — применяет модификатор начиная с указанного брейкпоинта.
- **Модификатор** *(обязательный параметр)*: `col-gap-{n}`.

> Примечание: брейкпоинтные префиксы работают так же, как у утилиты `gap` (`sm:col-gap-2`, `md:col-gap-4` и т.д.).

## Пример

```html
<div class="layout-col-3 col-gap-2">
  <div class="sf-card surface p-3 radius-2">1</div>
  <div class="sf-card surface p-3 radius-2">2</div>
  <div class="sf-card surface p-3 radius-2">3</div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=layout-break&group=column-gap"></iframe>
</div>
