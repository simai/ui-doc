---
title: "Начертание шрифта (капитель) (font-variant)"
description: "Начертание шрифта (капитель) (font-variant)"
---

# Начертание шрифта (капитель) (font-variant)

!rtags[font-variant]



Модификаторы для отображения строчны
 символов в виде уменьшенны
 заглавны
 (капитель).

## Таблица классов

| Класс            | Значение                  |
|:-----------------|:--------------------------|
| .small-caps      | font-variant: small-caps; |
| .small-caps-none | font-variant: none;       |
{.table}


## Пример использования

```html
<p class="small-caps">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<p class="small-caps-none">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

## Адаптивность

Для применения начертания шрифта начиная с определённого размера экрана используйте префикс контрольной точки:

```html
<p class="small-caps">
  На экрана
 Medium и больше текст будет в стиле капитель.
</p>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=typography&group=font-variant"&gt;&lt;/iframe&gt;
&lt;/div&gt;
