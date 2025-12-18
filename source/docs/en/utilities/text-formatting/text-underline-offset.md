---
extends: _core._layouts.documentation
section: content
title: Смещение подчеркивания текста
description: Смещение подчеркивания текста
---

# Смещение подчеркивания текста

[https://dev.ru.simai.io/ru/ui/utility/text-decoration/text-decoration-offset.php](https://dev.ru.simai.io/ru/ui/utility/text-decoration/text-decoration-offset.php)

С помощью модификаторов смещения подчеркивания можно изменить отступ между  
текстом и линией подчеркивания.

## Таблица классов

| Класс                   | Значение           |
|:------------------------|:---------------------------------------|
| .decoration-offset-auto | text-underline-offset: auto;           |
| .decoration-offset-0    | text-underline-offset: var(`--sf-a0`); |
| .decoration-offset-1    | text-underline-offset: var(`--sf-a1`); |
| .decoration-offset-2    | text-underline-offset: var(`--sf-a2`); |
| .decoration-offset-3    | text-underline-offset: var(`--sf-a3`); |
| .decoration-offset-4    | text-underline-offset: var(`--sf-a4`); |
{.table}

## Описание

Модификаторы смещения подчеркивания текста определяют вертикальный отступ  
между текстом и линией подчеркивания. Можно использовать как автоматический  
отступ, так и фиксированные значения, определённые системными переменными.

## Синтаксис

Использование: `{модификатор}`

- Модификатор *(обязательный параметр)*:
    - `decoration-offset-auto` — автоматический отступ.
    - `decoration-offset-0` ... `decoration-offset-4` — отступ задан системными переменными.

## Пример использования

```html
<p class="underline decoration-offset-auto">
  Этот текст будет подчеркнут с автоматическим отступом линии.
</p>

<p class="underline decoration-offset-2">
  Этот текст будет подчеркнут с отступом линии, заданным через переменную.
</p>
