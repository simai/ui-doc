---
title: "Иконки"
description: "Системные символы действий, объектов и состояний."
profile: reference
---

# Иконки

Компонент выводит Material Symbols и согласует их размер, начертание и форму с
токенами Framework.

## Пример

:::example {id="components/icons/overview" label="Результат"}
:::

## Особенности применения

Декоративную иконку скрывайте через `aria-hidden="true"`. Иконка без видимой
подписи получает `role="img"` и короткий `aria-label` либо находится внутри
элемента с доступным именем. `sf-icon-loaded` — внутреннее состояние Loader, его
не добавляют вручную.

## Семейства

По умолчанию используется outlined. Классы `sf-icon--rounded` и `sf-icon--sharp`
выбирают Rounded и Sharp.

:::example {id="components/icons/families" label="Результат"}
:::

## Начертание и заливка

Доступны thin, extra light, light, regular, medium, semi bold и bold.
`sf-icon--filled` включает заливку символа.

:::example {id="components/icons/weights" label="Результат"}
:::

## Размеры

Размеры `1/4`, `1/3`, `1/2` и `1`–`7` следуют шкале Framework.

:::example {id="components/icons/sizes" label="Результат"}
:::

## Цвет

Иконка наследует `currentColor`; применяйте смысловые цветовые утилиты к ней
или родительскому элементу.

:::example {id="components/icons/color" label="Результат"}
:::

## Поворот

Иконку можно повернуть с шагом 45° от `45` до `315`.

:::example {id="components/icons/rotation" label="Результат"}
:::
