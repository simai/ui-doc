---
extends: _core._layouts.documentation
section: content
title: "Позиционирование объекта (object-position)"
description: "Утилиты object-position управляют тем, какую часть заменяемого элемента (img/video) показывать внутри контейнера."
---

# Позиционирование объекта (object-position)

!rtags[object-position sm md lg xl]


Модификаторы `object-*` задают точку привязки содержимого внутри контейнера. Утилиты используют логические направления (`inline-start/end`, `top/bottom`) — поэтому корректно работают в LTR/RTL.

## Таблица классов

| Класс                    | Значение                      |
|:-------------------------|:------------------------------|
| .object-bottom           | object-position: bottom;      |
| .object-center           | object-position: center;      |
| .object-inline-start     | object-position: left;        |
| .object-inline-start-top | object-position: left top;    |
| .object-inline-start-bottom | object-position: left bottom; |
| .object-inline-end       | object-position: right;       |
| .object-inline-end-top   | object-position: right top;   |
| .object-inline-end-bottom| object-position: right bottom;|
| .object-top              | object-position: top;         |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`.

- **Контрольная точка** *(опционально)*: `sm`, `md`, `lg`, `xl` — применяет модификатор, начиная с указанного брейкпоинта.
- **Модификатор** *(обязательно)*: один из классов таблицы выше.

Пример с брейкпоинтом: `md:object-inline-end-bottom`.

## Примеры

```html
<div class="grid grid-col-2 gap-3">
  <div class="sf-card surface p-3 radius-2 border border-outline-variant">
    <div class="text-subtitle-2 m-b-2">inline-start top</div>
    <img class="w-full h-e5 object-cover object-inline-start-top bg-surface-1 radius-2" src="...">
  </div>
  <div class="sf-card surface p-3 radius-2 border border-outline-variant">
    <div class="text-subtitle-2 m-b-2">inline-end bottom</div>
    <img class="w-full h-e5 object-cover object-inline-end-bottom bg-surface-1 radius-2" src="...">
  </div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=objects&group=object-position"></iframe>
</div>
