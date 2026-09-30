---
title: "Toggle"
description: "Компактный двоичный переключатель в нескольких формах."
profile: reference
---

# Toggle

**Заменён переключателем.** Оба компонента рисовали один и тот же контрол:
нативный checkbox с `role="switch"`, дорожка и бегунок. Отличались только
обвязкой — у переключателя было описание, у Toggle нет — и геометрией, которая
успела разойтись, вплоть до имён размеров на разных ступенях лестницы.
Переключатель теперь несёт обе подачи и оба варианта Toggle, поэтому Toggle
оставлен для уже написанной разметки и уедет в следующей мажорной версии.

## Как перенести на переключатель

| Toggle | Переключатель |
| :--- | :--- |
| `sf-toggle` | `sf-switch` |
| `sf-toggle--size-1` | `sf-switch--size-1` |
| `sf-toggle--size-2` | `sf-switch--size-2` |
| `sf-toggle--simple` | без класса: это обычный переключатель |
| `sf-toggle--icon` | `sf-switch--icon` |
| `sf-toggle--short` | `sf-switch--short` |
| `sf-toggle-control` | `sf-switch-toggler` |
| `sf-toggle-container` и `sf-toggle-inner-wrap` | не нужны: бегунок лежит прямо в дорожке |
| `sf-toggle-inner` | `sf-switch-inner` |
| `sf-toggle-text` | `sf-switch-text` внутри `sf-switch-container-wrap` |

Размеры меняются не один в один. Собственные размеры Toggle стояли между
ступенями лестницы: его `size-1` рисовал дорожку 40×20, а `size-2` — 56×32. На
лестнице это становится 48×24 и 56×28 в десктопном режиме.

Фактическое значение хранится в нативном checkbox с `role="switch"`.

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
