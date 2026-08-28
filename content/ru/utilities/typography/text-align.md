---
title: "Выравнивание текста (text-align)"
description: "Выравнивание текста (text-align)"
tags: [text-align, sm, md, lg, xl]
---

# Выравнивание текста (text-align)

С помощью модификаторов вы можете задать выравнивание текста.

## Таблица классов

| Класс         | Значение             |
|:--------------|:---------------------|
| .text-start    | text-align: left;    |
| .text-center  | text-align: center;  |
| .text-end   | text-align: right;   |
| .text-justify | text-align: justify; |


## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `text-start` – выравнивание по левому краю
    - `text-center` – выравнивание по центру
    - `text-end` – выравнивание по правому краю
    - `text-justify` – выравнивание по ширине

## Пример использования

```html
<p class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

## Адаптивность

Для изменения выравнивания текста, начиная с определённого размера экрана, добавьте префикс контрольной точки (`sm:`,
`md:`, `lg:`, `xl:`):

```html
<p class="md:text-end">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```
## Пример
:::example {id="utilities/typography/text-align" label="Результат"}
:::

