---
extends: _core._layouts.documentation
section: content
title: Наследование цвета ссылок
description: Наследование цвета ссылок
---

# Наследование цвета ссылок

!rtags[heritage-link-color]


Утилиты наследования делают ссылку цветом текущего текста.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.link-inherit` | ссылка и ее состояния наследуют `currentColor` |
| `.link-inherit-link` | ссылка и `:hover` наследуют `currentColor` |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификаторы: `link-inherit`, `link-inherit-link`.

## Пример

```html
<p class="color-warning">
  Text with <a href="#" class="link-inherit">inherited link color</a>
</p>

<p class="color-warning link-inherit-link">
  Parent-level inherited <a href="#">link color</a>
</p>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=links&group=heritage-link-color"></iframe>
</div>
