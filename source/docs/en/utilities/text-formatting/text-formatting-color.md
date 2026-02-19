---
extends: _core._layouts.documentation
section: content
title: Цвет оформления текста
description: Цвет оформления текста
---

# Цвет оформления текста


С помощью модификаторов цвета оформления текста можно задать цвет линии  
подчеркивания текста. Данные модификаторы также можно использовать вместе  
с состояниями элемента (`hover`, `focus`, `active`).

## Таблица классов

| Класс                   | Значение                          |
|:------------------------|:------------------------------------------------------|
| .decoration-inherit     | text-decoration-color: inherit;                       |
| .decoration-current     | text-decoration-color: currentColor;                  |
| .decoration-transparent | text-decoration-color: transparent;                   |
| .decoration-primary     | text-decoration-color: var(`--sf-outline-primary`);   |
| .decoration-secondary   | text-decoration-color: var(`--sf-outline-secondary`); |
| .decoration-tertiary    | text-decoration-color: var(`--sf-outline-tertiary`);  |
| .decoration-error       | text-decoration-color: var(`--sf-outline-error`);     |
| .decoration-warning     | text-decoration-color: var(`--sf-outline-warning`);   |
| .decoration-success     | text-decoration-color: var(`--sf-outline-success`);   |
{.table}

## Описание

Модификаторы цвета оформления текста можно использовать с состояниями  
элемента (`hover`, `focus`, `active`), чтобы изменять цвет линии  
подчеркивания при взаимодействии пользователя.

## Синтаксис

Использование: `{состояние}:{модификатор}`

- Состояние *(обязательный параметр)*:

    - `hover` — при наведении курсора на элемент.
    - `focus` — при получении фокуса элементом.
    - `active` — при активном состоянии элемента.
- Модификатор *(обязательный параметр)*: Выберите любой класс из таблицы выше, например `decoration-primary`.

## Пример использования

```html
<!-- Подчеркивание с outline-primary при наведении -->
<p class="hover:decoration-primary underline">Наведи на меня</p>

<!-- Подчеркивание с outline-warning при фокусе -->
<button class="focus:decoration-warning underline">Фокус на кнопке</button>

<!-- Подчеркивание с outline-success при активном состоянии -->
<a href="#" class="active:decoration-success underline">Активная ссылка</a>
```
