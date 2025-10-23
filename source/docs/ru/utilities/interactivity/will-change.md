---
extends: _core._layouts.documentation
section: content
title: "Подготовка к изменениям (will-change)"
description: "Подготовка к изменениям (will-change)"
---

# Подготовка к изменениям (will-change)

[https://dev.ru.simai.io/ru/ui/utility/interactivity/will-change.php](https://dev.ru.simai.io/ru/ui/utility/interactivity/will-change.php)

Модификаторы позволяют оптимизировать предстоящую анимацию элементов, предупреждая браузер о будущих изменениях. Это
может улучшить производительность анимаций и переходов.

## Классы и их значения

| Класс                        | Значение                      |
|:-----------------------------|:------------------------------|
| .will-change-auto            | will-change: auto;            |
| .will-change-scroll-position | will-change: scroll-position; |
| .will-change-contents        | will-change: contents;        |
| .will-change-transform       | will-change: transform;       |
{.table}

## Описание

С помощью данных модификаторов вы можете указать браузеру заранее подготовиться к изменению определённых свойств
элемента. Это особенно полезно для плавных анимаций или переходов, где важна высокая производительность и снижение
задержек при рендеринге.

## Синтаксис

- `will-change-auto` – указать автоматическую оптимизацию.
- `will-change-scroll-position` – подготовиться к изменению позиции прокрутки.
- `will-change-contents` – подготовиться к изменению содержимого.
- `will-change-transform` – подготовиться к изменению параметров трансформации.

## Пример использования

```html
<div class="will-change-transform">
  <!-- Элемент, который будет анимирован с transform -->
</div>
```
