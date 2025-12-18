---
extends: _core._layouts.documentation
section: content
title: Оформление текста
description: Оформление текста
---

# Оформление текста

[https://dev.ru.simai.io/ru/ui/utility/text-decoration/text-decoration.php](https://dev.ru.simai.io/ru/ui/utility/text-decoration/text-decoration.php)

С помощью модификаторов оформления текста можно подчеркнуть, надчеркнуть или перечеркнуть текст, а также убрать
оформление.

## Таблица классов

| Класс           | Значение                       |
|:----------------|:-------------------------------|
| .underline      | text-decoration: underline;    |
| .overline       | text-decoration: overline;     |
| .line-through   | text-decoration: line-through; |
| .underline-none | text-decoration: none;         |
{.table}

## Описание

Модификаторы оформления текста при состояниях элемента позволяют  
изменять стили текста при наведении (`hover`), фокусе (`focus`) или  
активном состоянии (`active`) элемента.

## Синтаксис

Использование: `{состояние}:{модификатор}`

- Состояние *(обязательный параметр)*:

    - `hover` — при наведении курсора на элемент.
    - `focus` — при получении фокуса элементом.
    - `active` — при активном состоянии элемента (например, при нажатии).
- Модификатор *(обязательный параметр)*:

    - `underline` — подчеркнутый текст.
    - `overline` — надчеркнутый текст.
    - `line-through` — перечеркнутый текст.
    - `underline-none` — текст без оформления.

## Пример использования

```html
<!-- Подчеркивание текста при наведении -->
<p class="hover:underline">Этот текст будет подчеркнутым при наведении.</p>

<!-- Перечеркивание текста при фокусе -->
<button class="focus:line-through">Кнопка, текст будет перечеркнут при фокусе.</button>

<!-- Удаление оформления при активном состоянии -->
<a href="#" class="active:underline-none">Ссылка, оформление исчезнет при нажатии.</a>
```
