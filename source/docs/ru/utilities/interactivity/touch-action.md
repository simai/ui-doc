---
extends: _core._layouts.documentation
section: content
title: "Сенсорное действие (touch-action)"
description: "Сенсорное действие (touch-action)"
---

# Сенсорное действие (touch-action)

[https://dev.ru.simai.io/ru/ui/utility/interactivity/touch-action.php](https://dev.ru.simai.io/ru/ui/utility/interactivity/touch-action.php)

С помощью данных модификаторов вы можете управлять поведением прокрутки и масштабирования элемента на сенсорных экранах.
Это может оказаться полезным, если вы хотите ограничить или изменить направление прокрутки, либо отключить определённые
жесты, такие как сдвиг или масштабирование.

## Классы и их значения

| Класс               | Значение                    |
|:--------------------|:----------------------------|
| .touch-auto         | touch-action: auto;         |
| .touch-none         | touch-action: none;         |
| .touch-pan-x        | touch-action: pan-x;        |
| .touch-pan-left     | touch-action: pan-left;     |
| .touch-pan-right    | touch-action: pan-right;    |
| .touch-pan-y        | touch-action: pan-y;        |
| .touch-pan-up       | touch-action: pan-up;       |
| .touch-pan-down     | touch-action: pan-down;     |
| .touch-pinch-zoom   | touch-action: pinch-zoom;   |
| .touch-manipulation | touch-action: manipulation; |
{.table}

## Описание

Данные модификаторы задают параметры сенсорных жестов для элементов. Вы можете ограничить прокрутку по одной оси,
запретить масштабирование или разрешить определённые жесты, что особенно актуально для приложений, оптимизированных под
сенсорные экраны.

## Синтаксис

- `touch-{action}` – задает действие на сенсорный ввод, например `touch-none`, `touch-pan-x`.

## Пример использования

```html
<div class="w-full h-f1 overflow-auto touch-auto ...">
    <img class="h-auto w-150" src="./picture.svg">
</div>

<div class="w-full h-f1 overflow-auto touch-none ...">
    <img class="h-auto w-150" src="./picture.svg">
</div>

<div class="w-full h-f1 overflow-auto touch-pan-x ...">
    <img class="h-auto w-150" src="./picture.svg">
</div>

<div class="w-full h-f1 overflow-auto touch-pan-y ...">
    <img class="h-auto w-150" src="./picture.svg">
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=interactivity&group=touch-action"></iframe>
</div>