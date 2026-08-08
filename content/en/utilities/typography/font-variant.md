---
title: "Начертание шрифта (капитель) (font-variant)"
description: "Начертание шрифта (капитель) (font-variant)"
---

# Начертание шрифта (капитель) (font-variant)


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
<p class="md:small-caps">
  На экрана
 Medium и больше текст будет в стиле капитель.
</p>
```
