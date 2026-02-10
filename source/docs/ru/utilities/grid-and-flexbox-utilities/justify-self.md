---
extends: _core._layouts.documentation
section: content
title: "Выравнивание отдельного элемента в ячейке по основной оси (justify-self)"
description: "Выравнивание отдельного элемента в ячейке по основной оси (justify-self)"
---

# Выравнивание отдельного элемента в ячейке по основной оси (justify-self)

[https://dev.ru.simai.io/ru/ui/utility/grid-flex/justify-self.php](https://dev.ru.simai.io/ru/ui/utility/grid-flex/justify-self.php)

Данные модификаторы определяют, как отдельный элемент будет выравниваться по основной оси внутри своей ячейки сетки или
флекс-контейнера.

## Таблица классов

| Класс              | Значение               |
|:-------------------|:-----------------------|
| .self-main-auto    | justify-self: auto;    |
| .self-main-start   | justify-self: start;   |
| .self-main-end     | justify-self: end;     |
| .self-main-center  | justify-self: center;  |
| .self-main-stretch | justify-self: stretch; |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `self-main-auto` – элемент будет выравниваться на основе общей настройки justify-items;
    - `self-main-start` – элемент прижимается к началу ячейки по основной оси;
    - `self-main-end` – элемент прижимается к концу ячейки по основной оси;
    - `self-main-center` – элемент выравнивается по центру ячейки по основной оси;
    - `self-main-stretch` – элемент растягивается на всю доступную длину ячейки по основной оси.

## Пример использования

```html
<div class="grid grid-col-3">
  <div></div>
  <div class="self-main-center">Элемент по центру ячейки</div>
  <div></div>
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=grid-and-flexbox-utilities&group=justify-self"></iframe>
</div>