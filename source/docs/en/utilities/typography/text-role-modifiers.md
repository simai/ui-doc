---
extends: _core._layouts.documentation
section: content
title: Модификаторы ролей текста
description: Модификаторы ролей текста
---

# Модификаторы ролей текста


Модификаторы ролей текста применяются для одновременной настройки размера и высоты строки. Они могут быть применены как
к тегам (например, `h1`), так и к классам (например, `.h1`), при этом один и тот же результат можно получить через
разные варианты селекторов.

**Важно**: данные роли не зависят от условий показа (нет адаптивных или интерактивных вариаций).

## Таблица соответствия модификаторов ролей текста

| Селектор             | Свойства                                                                   |
|:---------------------|:-----------------------------------------------------------------------------------------------|
| .label-small         | font-size: var(`--sf-label-small--size`);<br/> line-height: var(`--sf-label-small--height`);   |
| .label, label-medium | font-size: var(`--sf-label-medium--size`);<br/> line-height: var(`--sf-label-medium--height`); |
| .label-large         | font-size: var(`--sf-label-large--size`);<br/> line-height: var(`--sf-label-large--height`);   |
| .text-small          | font-size: var(`--sf-text-small--size`);<br/> line-height: var(`--sf-text-small--height`);     |
| .text, text-medium   | font-size: var(`--sf-text-medium--size`);<br/> line-height: var(`--sf-text-medium--height`);   |
| .text-large          | font-size: var(`--sf-text-large--size`);<br/> line-height: var(`--sf-text-large--height`);     |
| h1, .h1, .heading-1  | font-size: var(`--sf-heading-1--size`);<br/> line-height: var(`--sf-heading-1--height`);       |
| h2, .h2, .heading-2  | font-size: var(`--sf-heading-2--size`);<br/> line-height: var(`--sf-heading-2--height`);       |
| h3, .h3, .heading-3  | font-size: var(`--sf-heading-3--size`);<br/> line-height: var(`--sf-heading-3--height`);       |
| h4, .h4, .heading-4  | font-size: var(`--sf-heading-4--size`);<br/> line-height: var(`--sf-heading-4--height`);       |
| h5, .h5, .heading-5  | font-size: var(`--sf-heading-5--size`);<br/> line-height: var(`--sf-heading-5--height`);       |
| h6, .h6, .heading-6  | font-size: var(`--sf-heading-6--siz`e);<br/> line-height: var(`--sf-heading-6--height`);       |
| .d1, .display-1      | font-size: var(`--sf-display-1--size`);<br/> line-height: var(`--sf-display-1--height`);       |
| .d2, .display-2      | font-size: var(`--sf-display-2--size`);<br/> line-height: var(`--sf-display-2--height`);       |
| .d3, .display-3      | font-size: var(`--sf-display-3--size`);<br/> line-height: var(`--sf-display-3--height`);       |
| .d4, .display-4      | font-size: var(`--sf-display-4--size`);<br/> line-height: var(`--sf-display-4--height`);       |
| .d5, .display-5      | font-size: var(`--sf-display-5--size`);<br/> line-height: var(`--sf-display-5--height`);       |
| .d6, .display-6      | font-size: var(`--sf-display-6--size`);<br/> line-height: var(`--sf-display-6--height`);       |
{.table}

## Пример использования

```css
h1, .h1, .heading-1 {
  font-size: var(--sf-heading-1--size);
  line-height: var(--sf-heading-1--height);
}

.text-medium {
  font-size: var(--sf-text-medium--size);
  line-height: var(--sf-text-medium--height);
}
  
.label-large {
  font-size: var(--sf-label-large--size);
  line-height: var(--sf-label-large--height);
}
```

Используя данные модификаторы, вы можете легко и быстро применять готовые роли текста для оформления заголовков,
текстовых блоков, меток и прочих элементов типографики.
