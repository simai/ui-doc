---
extends: _core._layouts.documentation
section: content
title: "Выравнивание текста (text-align)"
description: "Выравнивание текста (text-align)"
---

# Выравнивание текста (text-align)


С помощью модификаторов вы можете задать выравнивание текста.

## Таблица классов

| Класс         | Значение             |
|:--------------|:---------------------|
| .text-left    | text-align: left;    |
| .text-center  | text-align: center;  |
| .text-right   | text-align: right;   |
| .text-justify | text-align: justify; |
{.table}


## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `text-left` – выравнивание по левому краю
    - `text-center` – выравнивание по центру
    - `text-right` – выравнивание по правому краю
    - `text-justify` – выравнивание по ширине

## Пример использования

```html
<p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

## Адаптивность

Для изменения выравнивания текста, начиная с определённого размера экрана, добавьте префикс контрольной точки (`sm:`,
`md:`, `lg:`, `xl:`):

```html
<p class="md:text-right">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```
