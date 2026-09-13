---
title: "Модификаторы ролей текста"
description: "Модификаторы ролей текста"
tags: [title]
---

# Модификаторы ролей текста

:badge[title]{type=main scheme=on-surface size=1}

Модификаторы ролей текста применяются для одновременной настройки размера и высоты строки. Они могут быть применены как
к тегам (например, `h1`), так и к классам (например, `.sf-h-1`), при этом один и тот же результат можно получить через
разные варианты селекторов.

## Наглядный пример

:::example {id="utilities/typography/text-role-modifiers" label="Модификаторы ролей текста"}
:::

**Важно**: данные роли не зависят от условий показа (нет адаптивных или интерактивных вариаций).

## Таблица соответствия модификаторов ролей текста

| Селектор             | Свойства                                                                   |
|:---------------------|:-----------------------------------------------------------------------------------------------|
| `label-small` | `font-size: var(--sf-label-small--size);` `line-height: var(--sf-label-small--height);` |
| `label, label-medium` | `font-size: var(--sf-label-medium--size);` `line-height: var(--sf-label-medium--height);` |
| `label-large` | `font-size: var(--sf-label-large--size);` `line-height: var(--sf-label-large--height);` |
| `text-small` | `font-size: var(--sf-text-small--size);` `line-height: var(--sf-text-small--height);` |
| `text, text-medium` | `font-size: var(--sf-text-medium--size);` `line-height: var(--sf-text-medium--height);` |
| `text-large` | `font-size: var(--sf-text-large--size);` `line-height: var(--sf-text-large--height);` |
| `h1, sf-h-1` | `font-size: var(--sf-text-size-6);` `line-height: var(--sf-title-height-6);` |
| `h2, sf-h-2` | `font-size: var(--sf-text-size-5);` `line-height: var(--sf-title-height-5);` |
| `h3, sf-h-3` | `font-size: var(--sf-text-size-4);` `line-height: var(--sf-title-height-4);` |
| `h4, sf-h-4` | `font-size: var(--sf-text-size-3);` `line-height: var(--sf-title-height-3);` |
| `h5, sf-h-5` | `font-size: var(--sf-text-size-2);` `line-height: var(--sf-title-height-2);` |
| `h6, sf-h-6` | `font-size: var(--sf-text-size-1);` `line-height: var(--sf-title-height-1);` |
| `sf-display-1, d1, display1` | `font-size: var(--sf-display-1--size);` `line-height: var(--sf-title-height-12);` |
| `sf-display-2, d2, display2` | `font-size: var(--sf-display-2--size);` `line-height: var(--sf-title-height-11);` |
| `sf-display-3, d3, display3` | `font-size: var(--sf-display-3--size);` `line-height: var(--sf-title-height-10);` |
| `sf-display-4, d4, display4` | `font-size: var(--sf-display-4--size);` `line-height: var(--sf-title-height-9);` |
| `sf-display-5, d5, display5` | `font-size: var(--sf-display-5--size);` `line-height: var(--sf-title-height-8);` |
| `sf-display-6, d6, display6` | `font-size: var(--sf-display-6--size);` `line-height: var(--sf-title-height-7);` |

## Пример использования

Используя данные модификаторы, вы можете легко и быстро применять готовые роли текста для оформления заголовков,
текстовых блоков, меток и прочих элементов типографики.
