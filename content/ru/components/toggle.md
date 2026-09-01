---
title: "Toggle"
description: "Компактный двоичный переключатель в нескольких формах."
profile: reference
---

# Toggle

Toggle меняет двоичное состояние и остаётся компактнее обычного Switch.
Фактическое значение хранится в нативном checkbox.

## Пример

:::example {id="components/toggle/overview" label="Результат"}
:::

## Особенности применения

Подпись должна объяснять управляемое состояние. Используйте Toggle там, где
компактная форма действительно важна; для настройки с пояснением обычно понятнее
Switch.

## Варианты

`simple` показывает обычный индикатор, `icon` — смысловую иконку, `short` —
укороченную форму.

:::example {id="components/toggle/variants" label="Результат"}
:::

## Размеры

Компонент поддерживает размеры `1` и `2`.

:::example {id="components/toggle/sizes" label="Результат"}
:::

## Состояния

Используйте нативные `checked` и `disabled`; Framework синхронизирует классы
`active` и `disabled`.

:::example {id="components/toggle/states" label="Результат"}
:::
