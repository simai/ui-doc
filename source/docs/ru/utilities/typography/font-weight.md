---
extends: _core._layouts.documentation
section: content
title: "Толщина шрифта (font-weight)"
description: "Толщина шрифта (font-weight)"
---

# Толщина шрифта (font-weight)

!rtags[font-weight sm md lg xl hover]



Модификаторы для управления толщиной шрифта позволяют задать нужное начертание в диапазоне от очень тонкого (100) до
очень жирного (900).

## Таблица классов

| Класс     | Значение                   |
|:----------|:---------------------------|
| .regular  | font-weight: normal; (400) |
| .bold     | font-weight: bold; (700)   |
| .lighter  | font-weight: lighter;      |
| .bolder   | font-weight: bolder;       |
| .weight-1 | font-weight: 100;          |
| .weight-2 | font-weight: 200;          |
| .weight-3 | font-weight: 300;          |
| .weight-4 | font-weight: 400;          |
| .weight-5 | font-weight: 500;          |
| .weight-6 | font-weight: 600;          |
| .weight-7 | font-weight: 700;          |
| .weight-8 | font-weight: 800;          |
| .weight-9 | font-weight: 900;          |
{.table}


## Пример использования

```html
<p class="regular">Текст с нормальной толщиной шрифта (400)</p>
<p class="bold">Текст с полужирным шрифтом (700)</p>
<p class="lighter">Текст будет визуально тоньше относительно исходного</p>
<p class="bolder">Текст будет визуально толще относительно исходного</p>
<p class="weight-3">Текст с толщиной шрифта 300</p>
<p class="weight-7">Текст с толщиной шрифта 700</p>
```

## Адаптивность

Для изменения толщины шрифта начиная с определённого размера экрана используйте префикс контрольной точки. Например,
чтобы сделать текст полужирным на экранах medium и больше:

```html
<p class="md:bold">
  Текст будет полужирным на экранах размером Medium и больше.
</p>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=typography&group=font-weight"></iframe>
</div>
