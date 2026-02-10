---
extends: _core._layouts.documentation
section: content
title: Границы вокруг ячеек
description: Управление схлопыванием границ и расстоянием между ячейками таблицы
---

# Границы вокруг ячеек

Утилиты этой группы управляют поведением границ таблицы.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.border-collapse` | `border-collapse: collapse;` |
| `.border-separate` | `border-collapse: separate;` |
| `.border-spacing-{n}` | `border-spacing: var(--sf-...);` |
{.table}

## Описание

- `border-collapse` объединяет соседние границы ячеек.
- `border-separate` оставляет границы раздельными.
- `border-spacing-*` задаёт расстояние между ячейками и имеет эффект только в режиме `border-separate`.

## Пример

```html
<table class="table border-collapse">...</table>
<table class="table border-separate border-spacing-2">...</table>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=tables&group=table-border-cells"></iframe>
</div>