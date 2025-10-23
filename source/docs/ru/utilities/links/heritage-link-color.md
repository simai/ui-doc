---
extends: _core._layouts.documentation
section: content
title: Наследственный цвет ссылок
description: Наследственный цвет ссылок
---

# Наследственный цвет ссылок

[https://dev.ru.simai.io/ru/ui/utility/link/link-color-inherit.php](https://dev.ru.simai.io/ru/ui/utility/link/link-color-inherit.php)

С помощью модификаторов наследования цвета в SIMAI Framework вы можете  
сделать цвет ссылок таким же, как у обычного текста, что упрощает  
встраивание ссылок в контекстные блоки без изменения цветовой схемы.

## Таблица классов

| Класс              | Значение                                           |
|:-------------------|:-----------------------------------------------------------------------|
| .link-inherit      | text-decoration-color: currentColor;<br/> color: currentColor;         |
| .link-inherit-link | a { color: inherit; }<br/> a:hover { color: var(`--sf-color--link`); } |
{.table}

## Описание

Модификаторы наследуют цвет текста для ссылок, что позволяет создать более  
гармоничное оформление при интеграции ссылок в существующий контент.  
Это особенно полезно, когда ссылки должны выглядеть неотличимо от  
другого текста, но сохранять возможность реакции на наведение.

## Синтаксис

Использование: `{модификатор}`

- Модификатор *(обязательный параметр)*:
    - `link-inherit` — цвет ссылки наследует значение цвета текста.
    - `link-inherit-link` — ссылки наследуют цвет от родителя, при наведении используют основной цвет ссылки.

## Пример использования

```html
<!-- Ссылка, наследующая цвет текста -->
<p>Lorem ipsum dolor sit amet, <a href="#" class="link-inherit">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<!-- Ссылка, наследующая цвет текста, но при наведении возвращающаяся к основному цвету ссылки -->
<p>Lorem ipsum dolor sit amet, <a href="#" class="link-inherit-link">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

## Наследование

Если применить модификатор к родительскому блоку, все вложенные ссылки  
унаследуют заданный цвет.

```html
<div class="link-inherit color-warning">
  <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>

<div class="link-inherit-link color-warning">
  <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```
