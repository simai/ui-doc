---
extends: _core._layouts.documentation
section: content
title: "Размер заголовков (title-size)"
description: "Размер заголовков (title-size)"
---

# Размер заголовков (title-size)

[https://dev.ru.simai.io/ru/ui/utility/typography/title-size.php](https://dev.ru.simai.io/ru/ui/utility/typography/title-size.php)

Обновлённый набор модификаторов для заголовков использует различные наборы переменных для размера шрифта и для высоты
строки. При этом для размера шрифта применяются переменные из системы текста, а для высоты строки используются
переменные из системы заголовков.

## Таблица классов

| Класс     | Свойства                                                          |
|:----------|:--------------------------------------------------------------------------------------|
| .title-1  | font-size: var(`--sf-text-size-1`);<br/> line-height: var(`--sf-title-height-1`);   |
| .title-2  | font-size: var(`--sf-text-size-2`);<br/> line-height: var(`--sf-title-height-2`);   |
| .title-3  | font-size: var(`--sf-text-size-3`);<br/> line-height: var(`--sf-title-height-3`);   |
| .title-4  | font-size: var(`--sf-text-size-4`);<br/> line-height: var(`--sf-title-height-4`);   |
| .title-5  | font-size: var(`--sf-text-size-5`);<br/> line-height: var(`--sf-title-height-5`);   |
| .title-6  | font-size: var(`--sf-text-size-6`);<br/> line-height: var(`--sf-title-height-6`);   |
| .title-7  | font-size: var(`--sf-text-size-7`);<br/> line-height: var(`--sf-title-height-7`);   |
| .title-8  | font-size: var(`--sf-text-size-8`);<br/> line-height: var(`--sf-title-height-8`);   |
| .title-9  | font-size: var(`--sf-text-size-9`);<br/> line-height: var(`--sf-title-height-9`);   |
| .title-10 | font-size: var(`--sf-text-size-10`);<br/> line-height: var(`--sf-title-height-10`); |
| .title-11 | font-size: var(`--sf-text-size-11`);<br/> line-height: var(`--sf-title-height-11`); |
| .title-12 | font-size: var(`--sf-text-size-12`);<br/> line-height: var(`--sf-title-height-12`); |
{.table}

## Пример использования

```html
<p class="title-1">Заголовок базового размера</p>
<p class="title-2">Заголовок чуть больше базового</p>
<p class="title-12">Максимально крупный заголовок</p>
```

## Адаптивность

Для установки размера заголовка начиная с определённой контрольной точки (`sm`, `md`, `lg`, `xl`) добавьте
соответствующий префикс к классу:

```html
<p class="md:title-2">На экранах md и больше будет применён title-2</p>
```

Таким образом, можно гибко управлять размерами заголовков для различных разрешений экрана.
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=typography&group=title-size"></iframe>
</div>