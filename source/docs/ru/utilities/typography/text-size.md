---
extends: _core._layouts.documentation
section: content
title: "Размер текста (text-size)"
description: "Размер текста (text-size)"
---

# Размер текста (text-size)

!rtags[font-size-ext sm md lg xl]



Количество поддерживаемых размеров шрифта уменьшилось с 13 до 12, а также обновлены соответствующие переменные и классы.
Данные модификаторы изменяют размер шрифта и высоту строки одновременно.

## Таблица классов

| Класс     | Свойства                                                           |
|:----------|:---------------------------------------------------------------------------------------|
| .text-1/4 | font-size: var(`--sf-text-size-1/4`);<br/> line-height: var(`--sf-text-height-1/4`); |
| .text-1/3 | font-size: var(`--sf-text-size-1/3`);<br/> line-height: var(`--sf-text-height-1/3`); |
| .text-1/2 | font-size: var(`--sf-text-size-1/2`);<br/> line-height: var(`--sf-text-height-1/2`); |
| .text-1   | font-size: var(`--sf-text-size-1`);<br/> line-height: var(`--sf-text-height-1`);     |
| .text-2   | font-size: var(`--sf-text-size-2`);<br/> line-height: var(`--sf-text-height-2`);     |
| .text-3   | font-size: var(`--sf-text-size-3`);<br/> line-height: var(`--sf-text-height-3`);     |
| .text-4   | font-size: var(`--sf-text-size-4`);<br/> line-height: var(`--sf-text-height-4`);     |
| .text-5   | font-size: var(`--sf-text-size-5`);<br/> line-height: var(`--sf-text-height-5`);     |
| .text-6   | font-size: var(`--sf-text-size-6`);<br/> line-height: var(`--sf-text-height-6`);     |
| .text-7   | font-size: var(`--sf-text-size-7`);<br/> line-height: var(`--sf-text-height-7`);     |
| .text-8   | font-size: var(`--sf-text-size-8`);<br/> line-height: var(`--sf-text-height-8`);     |
| .text-9   | font-size: var(`--sf-text-size-9`);<br/> line-height: var(`--sf-text-height-9`);     |
| .text-10  | font-size: var(`--sf-text-size-10`);<br/> line-height: var(`--sf-text-height-10`);   |
| .text-11  | font-size: var(`--sf-text-size-11`);<br/> line-height: var(`--sf-text-height-11`);   |
| .text-12  | font-size: var(`--sf-text-size-12`);<br/> line-height: var(`--sf-text-height-12`);   |
{.table}

**Примечание:** Ранее существовал класс `text-13`, но теперь максимально доступный размер — `text-12`.

## Пример использования

### Текст меньше базового размера:

```html
<p class="text-1/4">Очень мелкий текст</p>
<p class="text-1/3">Меньше базового</p>
<p class="text-1/2">Почти базовый</p>
```

### Базовый размер текста:

```html
<p class="text-1">Базовый размер текста</p>
```

### Текст больше базового размера:

```html
<p class="text-2">Чуть больше базового</p>
<p class="text-3">Ещё крупнее</p>
<p class="text-12">Максимальный размер текста</p>
```

## Адаптивность

Для установки размера шрифта начиная с определённой контрольной точки (`sm`, `md`, `lg`, `xl`) добавьте префикс.
Например:

```html
<p class="md:text-2">Этот текст станет размером text-2 начиная с размера экрана md</p>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=typography&group=text-size"></iframe>
</div>
