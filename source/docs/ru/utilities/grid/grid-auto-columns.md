---
extends: _core._layouts.documentation
section: content
title: "Автоматическая ширина столбцов сетки (grid-auto-columns)"
description: "Автоматическая ширина столбцов сетки (grid-auto-columns)"
---

# Автоматическая ширина столбцов сетки (grid-auto-columns)

!rtags[grid-auto-columns sm md lg xl]


В SIMAI Framework с помощью модификаторов можно управлять размером автоматически создаваемых столбцов сетки, для которых не задана явная ширина. Это помогает гибко адаптировать макет под разные сценарии и размеры экрана.

## Таблица классов

| Класс          | Значение                           |
|:---------------|:-----------------------------------|
| .auto-cols     | grid-auto-columns: auto;           |
| .auto-cols-min | grid-auto-columns: min-content;    |
| .auto-cols-max | grid-auto-columns: max-content;    |
| .auto-cols-fr  | grid-auto-columns: minmax(0, 1fr); |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`). Если не указана, модификатор действует на все размеры.
- Модификатор *(обязательный параметр)*:
  - `auto-cols` — столбцы имеют автоматическую ширину (значение по умолчанию);
  - `auto-cols-min` — ширина определяется минимальным размером содержимого (min-content);
  - `auto-cols-max` — ширина определяется максимальным размером содержимого (max-content);
  - `auto-cols-fr` — ширина столбцов распределяется равномерно за счёт единиц измерения fr.

## Пример использования

```html
<div class="grid gap-1 grid-flow-col auto-cols">
  <div>1</div>
  <div>Short</div>
  <div>Medium length</div>
  <div>Larger amount of content</div>
</div>
```

В этом примере используется класс `auto-cols`, и ширина столбцов определяется автоматически в зависимости от содержимого.

Для равномерного распределения можно использовать `auto-cols-fr`:

```html
<div class="grid gap-1 grid-flow-col auto-cols-fr">
  <div>1</div>
  <div>Short</div>
  <div>Medium length</div>
  <div>Larger amount of content</div>
</div>
```

Здесь все столбцы будут занимать равные доли доступной ширины.

## Адаптивность

Чтобы настраивать размеры столбцов, начиная с определённого брейкпоинта, используйте контрольные точки. Например:

```html
<div class="md:auto-cols-min">
  <!-- Начиная с ширины md и выше столбцы используют минимальный размер содержимого -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=grid&group=grid-auto-columns"></iframe>
</div>
