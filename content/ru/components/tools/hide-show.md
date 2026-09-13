---
title: "Показ и скрытие"
description: "Переключение видимости связанного содержимого."
profile: reference
---

# Показ и скрытие

Компонент меняет видимость связанного содержимого. Корень обозначается
`sf-hide-show`, действие — коротким `data-action`, а содержимое — `data-content`.

## Пример

:::example {id="components/hide-show/overview" label="Результат"}
:::

## Особенности применения

Кнопки и управляемое содержимое размещайте внутри одного `sf-hide-show`.
Исходно скрытое содержимое использует нативный `hidden`; текущее состояние
зеркалируется в `data-state`.
Для простого раскрываемого блока с нативной семантикой сначала рассмотрите
`details` и `summary`.

## Исходно скрытое содержимое

:::example {id="components/hide-show/initial-hidden" label="Результат"}
:::

## Одна переключающая кнопка

`data-action="toggle"` показывает и скрывает содержимое одной кнопкой.

:::example {id="components/hide-show/toggle" label="Результат"}
:::

## Отмена изменения

Событие `sf-hide-show:change` можно отменить через `preventDefault()` до
изменения видимости.

:::example {id="components/hide-show/cancel" label="Результат"}
:::
