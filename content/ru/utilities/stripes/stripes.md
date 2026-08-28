---
title: "Полосы"
description: "Полосы"
tags: [stripe, sm, md, lg, xl]
---

# Полосы

С помощью модификаторов `stripe-{1...4}` можно добавить к фону полосатый паттерн.

## Таблица классов

| Класс {.wrap-none} | Значение                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .stripe-1          | background: linear-gradient(90deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%);&lt;br/&gt; background-size: var(`--sf-stripe--size`) var(`--sf-stripe--size`);                                                                                                                                                                                                                      |
| .stripe-2          | background: linear-gradient(0deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%);&lt;br/&gt; background-size: var(`--sf-stripe--size`) var(`--sf-stripe--size`);                                                                                                                                                                                                                       |
| .stripe-3          | background: linear-gradient(0deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%), linear-gradient(90deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%);&lt;br/&gt; background-size: var(`--sf-stripe--size`) var(`--sf-stripe--size`); |
| .stripe-4          | background: linear-gradient(135deg, var(`--sf-stripe--color`) 1%, transparent 1%, transparent 49%, var(`--sf-stripe--color`) 49%, var(`--sf-stripe--color`) 51%, transparent 51%, transparent 99%, var(`--sf-stripe--color`) 99%);&lt;br/&gt; background-size: var(`--sf-stripe--size`) var(`--sf-stripe--size`);                                                                                                                                                                                                                     |


## Описание

Модификаторы `stripe-1`, `stripe-2`, `stripe-3`, `stripe-4` создают разные узоры полос. Сами цвета и размер полос
определяются через переменные, такие как `--sf-stripe--color` и `--sf-stripe--size`.
Данные модификаторы добавляют к фону элемента полосатый паттерн в разных конфигурациях.

## Пример использования

:::example {id="utilities/stripes/stripes" label="Результат"}
:::

