---
extends: _core._layouts.documentation
section: content
title: "Выделение текста (user-select)"
description: "Выделение текста (user-select)"
---

# Выделение текста (user-select)

[https://dev.ru.simai.io/ru/ui/utility/interactivity/user-select.php](https://dev.ru.simai.io/ru/ui/utility/interactivity/user-select.php)

Данные модификаторы позволяют управлять поведением выделения текста пользователем в элементе. Вы можете запретить
выделение, автоматически выделять весь текст или использовать настройки по умолчанию.

## Классы и их значения

| Класс        | Значение           |
|:-------------|:-------------------|
| .select-none | user-select: none; |
| .select-text | user-select: text; |
| .select-all  | user-select: all;  |
| .select-auto | user-select: auto; |
{.table}

## Описание

С помощью данных модификаторов можно контролировать, может ли пользователь выделять текст внутри элемента. Это может
быть полезно при создании интерфейсов, где требуется ограничить копирование содержимого или, наоборот, упростить его
выделение.

## Синтаксис

- `select-none` – запретить выделение текста.
- `select-text` – разрешить выделение текста.
- `select-all` – при нажатии мышью выделить весь текст.
- `select-auto` – использовать поведение выделения текста по умолчанию.

## Пример использования

```html
<!-- Предотвратить выделение текста -->
<div class="select-none">
  Быстрая коричневая лиса прыгает через ленивую собаку.
</div>

<!-- Разрешить выделение текста -->
<div class="select-text">
  Быстрая коричневая лиса прыгает через ленивую собаку.
</div>

<!-- Автоматически выделять весь текст при клике -->
<div class="select-all">
  Быстрая коричневая лиса прыгает через ленивую собаку.
</div>

<!-- Использовать поведение выделения по умолчанию -->
<div class="select-auto">
  Быстрая коричневая лиса прыгает через ленивую собаку.
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=interactivity&group=user-select"></iframe>
</div>