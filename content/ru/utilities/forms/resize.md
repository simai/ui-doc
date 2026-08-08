---
title: "Изменение размера (resize)"
description: "Изменение размера (resize)"
---

# Изменение размера (resize)

!rtags[resize]



С помощью модификаторов resize вы можете управлять тем, может ли элемент быть изменён в размера
 пользователем, и в
каком направлении.

## Классы и и
 значения

| Класс        | Значение            |
|:-------------|:--------------------|
| .resize-none | resize: none;       |
| .resize-y    | resize: vertical;   |
| .resize-x    | resize: horizontal; |
| .resize      | resize: both;       |
{.table}

## Описание

Используя данные модификаторы, вы можете разрешить или запретить изменение размера элемента, а также задать направление
изменения размера — по горизонтали, по вертикали или по обеим осям.

## Синтаксис

- `resize-none` – запретить изменение размера.
- `resize-y` – разрешить изменение размера только по вертикали.
- `resize-x` – разрешить изменение размера только по горизонтали.
- `resize` – разрешить изменение размера по обеим осям.

## Пример использования

```html
<!-- Изменение размера во все
 направления
 -->
<textarea class="resize p-1 border-1 ..."></textarea>

<!-- Изменение размера только по вертикали -->
<textarea class="resize-y p-1 border-1 ..."></textarea>

<!-- Изменение размера только по горизонтали -->
<textarea class="resize-x p-1 border-1 ..."></textarea>

<!-- Заблокировать изменение размера -->
<textarea class="resize-none p-1 border-1 ..."></textarea>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=forms&group=resize"&gt;&lt;/iframe&gt;
&lt;/div&gt;
