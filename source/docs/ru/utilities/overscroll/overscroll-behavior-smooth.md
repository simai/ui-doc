---
extends: _core._layouts.documentation
section: content
title: Плавность прокрутки
description: Плавность прокрутки
---

# Плавность прокрутки

!rtags[scroll-behavior]



Модификаторы из пакета `scroll-behavior` позволяют управлять тем, будет ли прокрутка происходить скачкообразно или
плавно.

## Классы и их значения

| Класс          | Значение                 |
|:---------------|:-------------------------|
| .scroll-auto   | scroll-behavior: auto;   |
| .scroll-smooth | scroll-behavior: smooth; |
{.table}

## Описание

Модификаторы `scroll-auto` и `scroll-smooth` определяют, как будет происходить прокрутка: моментально или с плавной
анимацией.

## Синтаксис

Использование модификатора: `{scroll-behavior}`

Например:

```html
<html class="scroll-smooth">
  <!-- контент страницы -->
</html>
```

## Пример использования

```html
<!-- Плавная прокрутка при переходе по якорным ссылкам -->
<html class="scroll-smooth">
  <body>
    <a href="#section2">Прокрутить к секции 2</a>
    <div style="height: 1000px;"></div>
    <div id="section2">Секция 2</div>
  </body>
</html>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=overscroll-behavior-smooth"></iframe>
</div>
