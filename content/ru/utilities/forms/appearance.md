---
title: "Сброс стиля (appearance)"
description: "Сброс стиля (appearance)"
---

# Сброс стиля (appearance)

!rtags[appearance]



С помощью модификатора сброса стиля в SIMAI Framework вы можете отменять стандартные стили элементов управления формами,
таки
 как выпадающие списки или поля ввода, и применять собственные стили.

## Классы и и
 значения

| Класс            | Значение          |
|:-----------------|:------------------|
| .appearance-none | appearance: none; |
{.table}

## Описание

Данный модификатор убирает стандартное оформление элементов формы, позволяя вам полностью контролировать и
 внешний вид
с помощью собственны
 стилей.

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
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=forms&group=appearance"&gt;&lt;/iframe&gt;
&lt;/div&gt;
