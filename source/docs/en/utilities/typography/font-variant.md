---
extends: _core._layouts.documentation
section: content
title: "Начертание шрифта (капитель) (font-variant)"
description: "Начертание шрифта (капитель) (font-variant)"
---

# Начертание шрифта (капитель) (font-variant)

[https://dev.ru.simai.io/ru/ui/utility/typography/font-variant.php](https://dev.ru.simai.io/ru/ui/utility/typography/font-variant.php)

Модификаторы для отображения строчных символов в виде уменьшенных заглавных (капитель).

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
<p class="md:small-caps">
  На экранах Medium и больше текст будет в стиле капитель.
</p>
```
