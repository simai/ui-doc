---
extends: _core._layouts.documentation
section: content
title: Полосы
description: Полосы
---

# Полосы

!rtags[stripes]



С помощью модификаторов `stripe-{1...4}` можно добавить к фону полосатый паттерн.

## Таблица классов

| Класс {.wrap-none} | Значение                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .stripe-1          | background: linear-gradient(90deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%);<br/> background-size: var(`--sf-stripe--size`) var(`--sf-stripe--size`);                                                                                                                                                                                                                      |
| .stripe-2          | background: linear-gradient(0deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%);<br/> background-size: var(`--sf-stripe--size`) var(`--sf-stripe--size`);                                                                                                                                                                                                                       |
| .stripe-3          | background: linear-gradient(0deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%), linear-gradient(90deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%);<br/> background-size: var(`--sf-stripe--size`) var(`--sf-stripe--size`); |
| .stripe-4          | background: linear-gradient(135deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%);<br/> background-size: var(`--sf-stripe--size`) var(`--sf-stripe--size`);                                                                                                                                                                                                                     |

{.table}

## Описание

Модификаторы `stripe-1`, `stripe-2`, `stripe-3`, `stripe-4` создают разные узоры полос. Сами цвета и размер полос
определяются через переменные, такие как `--sf-stripe--color` и `--sf-stripe--size`.  
Данные модификаторы добавляют к фону элемента полосатый паттерн в разных конфигурациях.

## Пример использования

```html 

<div class="stripe-1 p-3">Полосы в стиле stripe-1</div>
<div class="stripe-2 p-3">Полосы в стиле stripe-2</div>
<div class="stripe-3 p-3">Полосы в стиле stripe-3</div>
<div class="stripe-4 p-3">Полосы в стиле stripe-4</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=stripes&group=stripes"></iframe>
</div>
