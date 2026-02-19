---
extends: _core._layouts.documentation
section: content
title: Сброс стиля (appearance)
description: Сброс стиля (appearance)
---

# Сброс стиля (appearance)


С помощью модификатора сброса стиля в SIMAI Framework вы можете отменять стандартные стили элементов управления формами,
таких как выпадающие списки или поля ввода, и применять собственные стили.

## Классы и их значения

| Класс            | Значение          |
|:-----------------|:------------------|
| .appearance-none | appearance: none; |
{.table}

## Описание

Данный модификатор убирает стандартное оформление элементов формы, позволяя вам полностью контролировать их внешний вид
с помощью собственных стилей.

## Синтаксис

- `appearance-none` – убрать стандартные стили у элемента формы.

## Пример использования

```html
<select>
    <option>Да</option>
    <option>Нет</option>
    <option>Возможно</option>
</select>

<select class="appearance-none">
    <option>Да</option>
    <option>Нет</option>
    <option>Возможно</option>
</select>
```
