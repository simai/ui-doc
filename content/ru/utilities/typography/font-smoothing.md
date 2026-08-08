---
title: "Сглаживание шрифтов (font-smoothing)"
description: "Сглаживание шрифтов (font-smoothing)"
---

# Сглаживание шрифтов (font-smoothing)

!rtags[font-smoothing]



Модификаторы для управления сглаживанием шрифта позволяют выбрать между субпиксельным сглаживанием и сглаживанием
оттенков серого.

## Таблица классов

| Класс        | Значение                                                 |
|:-------------|:-----------------------------------------------------------------------------|
| .antialiased | -webkit-font-smoothing: antialiased;&lt;br/&gt;-moz-osx-font-smoothing: grayscale; |
| .smoothing   | -webkit-font-smoothing: auto;&lt;br/&gt;-moz-osx-font-smoothing: auto;             |
{.table}

## Пример использования

```html
<p class="antialiased">
  Этот текст будет отрисован с использованием сглаживания оттенков серого.
</p>

<p class="smoothing">
  Этот текст будет отрисован с субпиксельным сглаживанием.
</p>
```

## Адаптивность

Для изменения сглаживания шрифта начиная с определённой контрольной точки (например, `md`) добавьте префикс контрольной
точки:

```html
<p class="antialiased">На экранах md и больше текст будет отображаться с сглаживанием оттенков серого.</p>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=typography&group=font-smoothing"&gt;&lt;/iframe&gt;
&lt;/div&gt;
