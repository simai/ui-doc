---
title: "Единое событие change"
description: "Как перейти с прежних имён событий изменения значения на change."
---

# Единое событие change

## Что изменилось

Каждое поле значения сообщает о зафиксированном изменении событием `change`
на своём элементе — один раз на каждое изменение, сделанное пользователем.
Раньше приходилось выбирать между `change`, `sf-button-group-change`,
`sf-datepicker-change`, `sf-dropdown:change` и `sf-range-slider-change`, а
Button Group и Range Slider события `change` не отправляли вовсе.

Правило действует для `sf-button-group`, `sf-checkbox`, `sf-country-code`,
`sf-datepicker`, `sf-dropdown`, `sf-file-upload`, `sf-input`, `sf-radio`,
`sf-range-slider`, `sf-switch`, `sf-tag` с `kind="checkbox"`, `sf-textarea` и
`sf-toggle`.

## Прежние имена

Прежние имена продолжают приходить с тем же `detail`, поэтому существующий код
работает без изменений.

| Компонент | Прежнее имя | Подписывайтесь на |
|:---|:---|:---|
| `sf-button-group` | `sf-button-group-change` | `change` |
| `sf-datepicker` | `sf-datepicker-change`, `sf-change` | `change` |
| `sf-dropdown` | `sf-dropdown:change` | `change` |
| `sf-range-slider` | `sf-range-slider-change`, `onSliderChange` | `change` |

В манифесте компонента у `change` стоит `canonical: true`, у каждого прежнего
имени — `alias_of: "change"`. Полная таблица находится в
`contracts/public-api-axes.json`, раздел `change_event`.

## Как перейти

1. Замените подписки на прежние имена подпиской на `change`.
2. Если обработчик реагирует только на действие пользователя, ничего больше
   менять не нужно.
3. Range Slider: `change` не приходит, когда значение задано из кода
   (`setValue()` или атрибут `value`), как у нативного поля.
   `sf-range-slider-change` в этом случае по-прежнему приходит. Если код
   полагался на событие после программной установки значения, оставьте
   прежнее имя или вызовите обработчик сами.
4. Button Group: методы `select()` и `clear()` отправляют `change`, как и
   прежнее имя.

## Обратная совместимость

Прежние имена не удаляются до мажорной версии. Новый код должен подписываться
только на `change`.
