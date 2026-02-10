---
extends: _core._layouts.documentation
section: content
title: "Стиль маркера списка (list-style-type)"
description: "Стиль маркера списка (list-style-type)"
---

# Стиль маркера списка (list-style-type)

[https://dev.ru.simai.io/ru/ui/utility/typography/list-style-type.php](https://dev.ru.simai.io/ru/ui/utility/typography/list-style-type.php)

С помощью модификаторов можно изменить вид маркера списка.

## Таблица классов

| Класс         | Значение                  |
|:--------------|:--------------------------|
| .list-none    | list-style-type: none;    |
| .list-disc    | list-style-type: disc;    |
| .list-decimal | list-style-type: decimal; |
{.table}


## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `list-none` – убирает маркеры у списка
    - `list-disc` – маркер в виде диска (по умолчанию)
    - `list-decimal` – нумерованный список с числовыми маркерами

## Пример использования

```html
<ul class="list-none">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>

<ul class="list-disc">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>

<ul class="list-decimal">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=typography&group=list-style-type"></iframe>
</div>