---
title: "Контекстное меню"
description: "Показывает короткий список действий над выбранным объектом рядом с ним."
profile: reference
---

# Контекстное меню

Контекстное меню — приподнятая панель с коротким списком действий над
выбранным объектом: строкой таблицы, файлом, карточкой. Ширина панели
подстраивается под самый длинный пункт. Для выбора значения в форме берите
[выпадающий список](/ru/components/navigation/dropdown/).

## Пример

:::example {id="components/context-menu/overview" label="Меню действий"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-context-menu` → `relative` → панель `sf-context-menu-content`.

- Корень `sf-context-menu` даёт тень.
- Промежуточная обёртка с утилитой `relative` обязательна: по ней CSS
  ограничивает размер панели.
- Панель `sf-context-menu-content` с утилитами `flex flex-col` даёт фон,
  радиус и прокрутку, если пунктов больше, чем помещается.
- Пункты — кнопки `sf-button` прямыми потомками `sf-context-menu-content`.
  Меню выравнивает их подписи по началу строки и подгоняет отступы к размеру
  кнопки; подпись пункта не переносится.
  Обычно берут вид `sf-button--link` со схемой `sf-button--on-surface`.
- Компонент — только оформление. Открыть меню у объекта, поставить его рядом,
  закрыть по Escape и вернуть фокус — задача вызывающего кода или
  Smart-компонента `<sf-context-menu>`.

## Варианты

### Размер пунктов

Размер задают сами кнопки: `sf-button--size-1/2`, `sf-button--size-1` или
`sf-button--size-2`. Меню сдвигает подписи пунктов на ту же линию, где
начинается текст поля такого же размера, поэтому меню под полем выровнено с
ним. В одном меню держите пункты одного размера.

:::example {id="components/context-menu/sizes" label="Пункты трёх размеров"}
:::

## Доступность

- Статическая разметка `sf-context-menu` не задаёт ролей. Не ставьте ей
  `role="menu"`, если не реализуете клавиатурную модель меню целиком.
- Для плоского списка действий берите Smart-компонент `<sf-context-menu>` с
  `aria-label`: он даёт прямым кнопкам и ссылкам роль `menuitem`, оставляет в
  порядке Tab один пункт и переводит фокус клавишами со стрелками вверх и
  вниз, Home и End.
- Кнопка, которая открывает меню, сообщает его состояние через
  `aria-expanded`; после закрытия фокус возвращается на неё.
- Не прячьте в контекстное меню единственный путь к основному действию.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-context-menu` |
| Части | `sf-context-menu-body`, `sf-context-menu-choice`, `sf-context-menu-choice-option`, `sf-context-menu-content`, `sf-context-menu-footer`, `sf-context-menu-head`, `sf-context-menu-header`, `sf-context-menu-header-avatar`, `sf-context-menu-header-caption`, `sf-context-menu-header-name`, `sf-context-menu-header-text`, `sf-context-menu-heading`, `sf-context-menu-item`, `sf-context-menu-item--current`, `sf-context-menu-item--danger`, `sf-context-menu-item-avatar`, `sf-context-menu-item-caption`, `sf-context-menu-item-check`, `sf-context-menu-item-chevron`, `sf-context-menu-item-icon`, `sf-context-menu-item-label`, `sf-context-menu-item-lead`, `sf-context-menu-item-shortcut`, `sf-context-menu-item-text`, `sf-context-menu-item-value`, `sf-context-menu-note`, `sf-context-menu-row`, `sf-context-menu-row-text`, `sf-context-menu-search`, `sf-context-menu-search-input`, `sf-context-menu-separator`, `sf-context-menu-tabs`, `sf-context-menu-tooltip`, `sf-context-menu-top` |
| Модификаторы | `sf-context-menu--entries`, `sf-context-menu--open`, `sf-context-menu--panel` |
| Размеры | `sf-context-menu--size-1` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-context-menu`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-context-menu--block-space` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/3)` | `padding`, `padding-bottom`, `padding-block-end` |
| `--sf-context-menu--field-space-x` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-ui-1/2--space-x)` | `padding-left`, `padding-right`, `padding-inline` |
| `--sf-context-menu--inset-end` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu--item-inset-end-1/2)` | `padding-right`, `padding-left`, `padding-inline`, `padding`, `margin-right`, `margin-left`, `margin-inline` |
| `--sf-context-menu--inset-start` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu--item-inset-start-1/2)` | `padding-left`, `padding-right`, `padding-inline`, `padding`, `margin-left`, `margin-right`, `margin-inline` |
| `--sf-context-menu--item-inset-end-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-ui-1--space-x) + var(--sf-px) - var(--sf-context-menu-content--padding-inline-end, 0px))` | `--sf-context-menu--inset-end`, `--sf-button--padding-inline-end` |
| `--sf-context-menu--item-inset-end-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-ui-2--space-x) + var(--sf-px) - var(--sf-context-menu-content--padding-inline-end, 0px))` | `--sf-button--padding-inline-end` |
| `--sf-context-menu--item-inset-start-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-ui-1--space-x) + var(--sf-px) - var(--sf-context-menu-content--padding-inline-start, 0px))` | `--sf-context-menu--inset-start`, `--sf-button--padding-inline-start` |
| `--sf-context-menu--item-inset-start-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-ui-2--space-x) + var(--sf-px) - var(--sf-context-menu-content--padding-inline-start, 0px))` | `--sf-button--padding-inline-start` |
| `--sf-context-menu--label-inset-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-context-menu--item-inset-start-1) + var(--sf-ui-1--text-space-x))` | — |
| `--sf-context-menu--label-inset-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-context-menu--item-inset-start-2) + var(--sf-ui-2--text-space-x))` | — |
| `--sf-context-menu--line` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-text-height-1/2)` | `line-height`, `--sf-icon--font-size`, `--sf-icon--width`, `--sf-icon--height`, `min-height`, `min-block-size`, `width`, `inline-size`, `height`, `block-size` |
| `--sf-context-menu--space-y` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-ui-1/2--space-y)` | `min-height`, `min-block-size`, `padding` |
| `--sf-context-menu--text-size` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-context-menu-content--background-color` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-elevation-3--surface)` | `background-color` |
| `--sf-context-menu-content--border-radius` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-radius--surface)` | `border-radius` |
| `--sf-context-menu-content--padding-bottom` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `padding-bottom`, `bottom`, `inset-block-end`, `margin-bottom`, `margin-block-end`, `padding-block-end` |
| `--sf-context-menu-content--padding-inline-end` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `padding-inline-end` |
| `--sf-context-menu-content--padding-inline-start` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `padding-inline-start` |
| `--sf-context-menu-content--padding-top` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `padding-top` |
| `--sf-context-menu-panel--inline-size` | не задана; задают модификаторы, например `.sf-context-menu.sf-context-menu--panel .sf-context-menu-content`: `calc(var(--sf-ui-1--control-height) * 8)` | `width`, `inline-size` |
| `--sf-context-menu-tail-corner-offset` | `0px` | — |
| `--sf-context-menu-tail-half` | `0px` | — |
| `--sf-context-menu-tail-size` | `0px` | — |
| `--sf-context-menu-viewport-space` | `var(--sf-space-1/2)` | — |

## См. также

- [Выпадающий список](/ru/components/navigation/dropdown/)
- [Кнопки](/ru/components/actions/buttons/)
- [Context Menu — Smart-компонент](/ru/smart-components/navigation/context-menu/)
