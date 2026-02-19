---
extends: _core._layouts.documentation
section: content
title: "Положение маркера списка (list-style-position)"
description: "Положение маркера списка (list-style-position)"
---

# Положение маркера списка (list-style-position)


С помощью модификаторов можно изменить положение маркера списка.

## Таблица классов

| Класс         | Значение                      |
|:--------------|:------------------------------|
| .list-inside  | list-style-position: inside;  |
| .list-outside | list-style-position: outside; |
{.table}


## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `list-inside` – маркер располагается внутри области содержимого списка.
    - `list-outside` – маркер располагается снаружи области содержимого списка.

## Пример использования

```html
<ul class="list-inside">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
</ul>

<ul class="list-outside">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
</ul>
```
