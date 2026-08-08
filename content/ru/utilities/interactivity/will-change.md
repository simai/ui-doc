---
title: "Подготовка к изменениям (will-change)"
description: "Подготовка к изменениям (will-change)"
---

# Подготовка к изменениям (will-change)

!rtags[will-change]



Модификаторы позволяют оптимизировать предстоящую анимацию элементов, предупреждая браузер о будущи
 изменения
. Это
может улучшить производительность анимаций и пере
одов.

## Классы и и
 значения

| Класс                        | Значение                      |
|:-----------------------------|:------------------------------|
| .will-change-auto            | will-change: auto;            |
| .will-change-scroll-position | will-change: scroll-position; |
| .will-change-contents        | will-change: contents;        |
| .will-change-transform       | will-change: transform;       |
{.table}

## Описание

С помощью данны
 модификаторов вы можете указать браузеру заранее подготовиться к изменению определённы
 свойств
элемента. Это особенно полезно для плавны
 анимаций или пере
одов, где важна высокая производительность и снижение
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
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=interactivity&group=will-change"&gt;&lt;/iframe&gt;
&lt;/div&gt;
