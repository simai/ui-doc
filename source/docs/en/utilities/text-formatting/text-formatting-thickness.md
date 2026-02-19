---
extends: _core._layouts.documentation
section: content
title: Толщина оформления текста
description: Толщина оформления текста
---

# Толщина оформления текста


С помощью модификаторов толщины оформления текста можно изменить толщину  
линии подчеркивания текста.

## Таблица классов

| Класс            | Значение               |
|:-----------------|:-------------------------------------------|
| .decoration-auto | text-decoration-thickness: auto;           |
| .decoration-font | text-decoration-thickness: from-font;      |
| .decoration-0    | text-decoration-thickness: var(`--sf-a0`); |
| .decoration-1    | text-decoration-thickness: var(`--sf-a1`); |
| .decoration-2    | text-decoration-thickness: var(`--sf-a2`); |
| .decoration-3    | text-decoration-thickness: var(`--sf-a3`); |
| .decoration-4    | text-decoration-thickness: var(`--sf-a4`); |
{.table}

## Описание

Модификаторы толщины оформления текста задают толщину линии подчеркивания.  
Это может быть автоматически определяемая толщина, соответствующая толщине шрифта, либо заданная через системные
переменные толщины.

## Синтаксис

Использование: `{модификатор}`

- Модификатор *(обязательный параметр)*:

    - `decoration-auto` — толщина определяется автоматически.
    - `decoration-font` — толщина определяется на основе толщины шрифта.
    - `decoration-0` ... `decoration-4` — толщина задаётся через системные переменные.

## Пример использования

```html
<p class="decoration-auto underline">
  Этот текст будет подчеркнут линией автоматической толщины.
</p>

<p class="decoration-font underline">
  Этот текст будет подчеркнут линией толщины, зависящей от шрифта.
</p>

<p class="decoration-2 underline">
  Этот текст будет подчеркнут линией фиксированной толщины, заданной переменной.
</p>
```
