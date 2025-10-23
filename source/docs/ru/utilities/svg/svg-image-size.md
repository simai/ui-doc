---
extends: _core._layouts.documentation
section: content
title: "Размер SVG-изображений"
description: "Размер SVG-изображений"
---

# Размер SVG-изображений

[https://dev.ru.simai.io/ru/ui/utility/svg/svg-size.php](https://dev.ru.simai.io/ru/ui/utility/svg/svg-size.php)

С помощью модификаторов можно задать размер SVG-изображений, ориентируясь  
на параметры размеров текста.

## Таблица классов

| Класс    | Значение                                                                                                |
|:---------|:----------------------------------------------------------------------------------------------------------------------------|
| .svg-1/4 | width: var(`--sf-text--size-1/4`); <br/>height: var(`--sf-text--size-1/4`); <br/>line-height: var(`--sf-text--height-1/4`); |
| .svg-1/3 | width: var(`--sf-text--size-1/3`); <br/>height: var(`--sf-text--size-1/3`); <br/>line-height: var(`--sf-text--height-1/3`); |
| .svg-1/2 | width: var(`--sf-text--size-1/2`); <br/>height: var(`--sf-text--size-1/2`); <br/>line-height: var(`--sf-text--height-1/2`); |
| .svg-1   | width: var(`--sf-text--size-1`); <br/>height: var(`--sf-text--size-1`); <br/>line-height: var(`--sf-text--height-1`);       |
| .svg-2   | width: var(`--sf-text--size-2`); <br/>height: var(`--sf-text--size-2`); <br/>line-height: var(`--sf-text--height-2`);       |
| .svg-3   | width: var(`--sf-text--size-3`); <br/>height: var(`--sf-text--size-3`); <br/>line-height: var(`--sf-text--height-3`);       |
| .svg-4   | width: var(`--sf-text--size-4`); <br/>height: var(`--sf-text--size-4`); <br/>line-height: var(`--sf-text--height-4`);       |
| .svg-5   | width: var(`--sf-text--size-5`); <br/>height: var(`--sf-text--size-5`); <br/>line-height: var(`--sf-text--height-5`);       |
| .svg-6   | width: var(`--sf-text--size-6`); <br/>height: var(`--sf-text--size-6`); <br/>line-height: var(`--sf-text--height-6`);       |
| .svg-7   | width: var(`--sf-text--size-7`); <br/>height: var(`--sf-text--size-7`); <br/>line-height: var(`--sf-text--height-7`);       |
| .svg-8   | width: var(`--sf-text--size-8`); <br/>height: var(`--sf-text--size-8`); <br/>line-height: var(`--sf-text--height-8`);       |
| .svg-9   | width: var(`--sf-text--size-9`); <br/>height: var(`--sf-text--size-9`); <br/>line-height: var(`--sf-text--height-9`);       |
| .svg-10  | width: var(`--sf-text--size-10`); <br/>height: var(`--sf-text--size-10`); <br/>line-height: var(`--sf-text--height-10`);    |
| .svg-11  | width: var(`--sf-text--size-11`); <br/>height: var(`--sf-text--size-11`); <br/>line-height: var(`--sf-text--height-11`);    |
| .svg-12  | width: var(`--sf-text--size-12`); <br/>height: var(`--sf-text--size-12`); <br/>line-height: var(`--sf-text--height-12`);    |
{.table}

## Описание

При переходе с предыдущей версии:  
Класс `svg-13` заменяется на `svg-12`.

## Синтаксис

Использование: `{модификатор}`  
Например: `svg-1`, `svg-2`, `svg-10` и т.д.

## Пример использования

```html
<svg class="svg-1/4"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-1/3"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-1/2"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-1"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-2"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-3"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-4"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-5"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-6"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-7"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-8"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-9"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-10"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-11"><!-- Ваше содержимое SVG --></svg>
<svg class="svg-12"><!-- Ваше содержимое SVG --></svg>
```

## Адаптивность

Для установки размера SVG-элементов, начиная с определенного размера экрана,  
можно использовать контрольные точки (`sm`, `md`, `lg`, `xl`).  
Например:  
`md:svg-7` — применит `svg-7` при размере экрана Medium и больше.
