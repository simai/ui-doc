---
title: "Параметры по умолчанию"
description: "Параметры по умолчанию"
---

# Параметры по умолчанию

!rtags[divider-width]


Базовые классы включают или выключают разделители между соседними элементами контейнера.

`divider` задает общий `border` для всех соседних элементов (`> * + *`).
Если нужен классический "разделитель-линией" только по одной оси, используйте `divider-y-*` или `divider-x-*`.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.divider` | `> :not([hidden]) ~ :not([hidden]) { border: var(--sf-px) var(--sf-outline-variant) solid; }` |
| `.divider-none` | `> :not([hidden]) ~ :not([hidden]) { border-width: var(--sf-0); }` |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификаторы: `divider`, `divider-none`.

## Пример

:::example {id="utilities/divider/divider-default-parameters" label="Результат"}
:::

