---
title: "Плавность прокрутки"
description: "Плавность прокрутки"
tags: [scroll-behavior]
---

# Плавность прокрутки

Модификаторы из пакета `scroll-behavior` позволяют управлять тем, будет ли прокрутка происходить скачкообразно или
плавно.

## Классы и их значения

| Класс          | Значение                 |
|:---------------|:-------------------------|
| .scroll-auto   | scroll-behavior: auto;   |
| .scroll-smooth | scroll-behavior: smooth; |

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

:::example {id="utilities/overscroll/overscroll-behavior-smooth" label="Результат"}
:::

