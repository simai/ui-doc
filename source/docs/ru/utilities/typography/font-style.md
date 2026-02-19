---
extends: _core._layouts.documentation
section: content
title: "Стиль шрифта (font-style)"
description: "Стиль шрифта (font-style)"
---

# Стиль шрифта (font-style)

!rtags[font-style]



Модификаторы для управления стилем шрифта позволяют задать наклонный (italic) или нормальный стиль.

## Таблица классов

| Класс        | Значение            |
|:-------------|:--------------------|
| .italic      | font-style: italic; |
| .italic-none | font-style: normal; |
{.table}


## Пример использования

```html
<p class="italic">
  Этот текст будет отображаться наклонным шрифтом (italic).
</p>

<p class="italic-none">
  Этот текст будет отображаться обычным (не наклонным) шрифтом.
</p>
```

## Адаптивность

Для изменения стиля шрифта начиная с определённой контрольной точки (например, `md`) добавьте префикс контрольной точки:

```html
<p class="md:italic">На экранах md и больше текст будет отображаться наклонным шрифтом.</p>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=typography&group=font-style"></iframe>
</div>
