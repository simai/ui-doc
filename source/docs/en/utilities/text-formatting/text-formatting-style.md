---
extends: _core._layouts.documentation
section: content
title: Стиль оформления текста
description: Стиль оформления текста
---

# Стиль оформления текста


С помощью модификаторов стиля оформления текста можно изменить стиль линии  
подчеркивания текста.

## Таблица классов

| Класс              | Значение                       |
|:-------------------|:-------------------------------|
| .decoration-solid  | text-decoration-style: solid;  |
| .decoration-double | text-decoration-style: double; |
| .decoration-dotted | text-decoration-style: dotted; |
| .decoration-dashed | text-decoration-style: dashed; |
| .decoration-wavy   | text-decoration-style: wavy;   |
{.table}

## Описание

Модификаторы стиля оформления текста изменяют вид линии подчеркивания.  
Это может быть сплошная линия, двойная, точечная, штриховая или волнистая линия.

Данные модификаторы не являются адаптивными и не используют состояния (hover, focus, active).  
Они просто определяют стиль линии, используемой для оформления текста.

## Синтаксис

Использование: `{модификатор}`

- Модификатор *(обязательный параметр)*:

    - `decoration-solid` — сплошная линия.
    - `decoration-double` — двойная линия.
    - `decoration-dotted` — точечная линия.
    - `decoration-dashed` — штриховая линия.
    - `decoration-wavy` — волнистая линия.

## Пример использования

```html
<p class="decoration-solid underline">
  Этот текст будет подчеркнут сплошной линией.
</p>

<p class="decoration-double underline">
  Этот текст будет подчеркнут двойной линией.
</p>

<p class="decoration-dotted underline">
  Этот текст будет подчеркнут точечной линией.
</p>

<p class="decoration-dashed underline">
  Этот текст будет подчеркнут штриховой линией.
</p>

<p class="decoration-wavy underline">
  Этот текст будет подчеркнут волнистой линией.
</p>
```
