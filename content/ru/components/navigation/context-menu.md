---
title: "Контекстное меню"
description: "Показывает короткий список действий над выбранным объектом рядом с ним."
profile: reference
---

# Контекстное меню

Контекстное меню — приподнятая панель с коротким списком действий над
выбранным объектом: строкой таблицы, файлом, карточкой. Хвост указывает на
объект, к которому относятся действия. Для выбора значения в форме берите
[выпадающий список](/ru/components/navigation/dropdown/).

## Пример

:::example {id="components/context-menu/overview" label="Меню действий с хвостом"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-context-menu` → `relative` → хвост `sf-context-menu-tooltip` и панель
`sf-context-menu-content`.

- Корень `sf-context-menu` даёт тень; модификатор
  `sf-context-menu--position-{положение}` ставит хвост.
- Промежуточная обёртка с утилитой `relative` обязательна: от неё хвост
  отсчитывает своё положение, и CSS ограничивает по ней размер панели.
- Хвост `sf-context-menu-tooltip` с `aria-hidden="true"` идёт перед панелью.
  Он нужен только вместе с модификатором положения: без него хвост встаёт в
  поток квадратом над панелью.
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

### Положение хвоста

Модификатор `sf-context-menu--position-{сторона}-{край}` называет сторону
панели, на которой стоит хвост, и место на ней. Хвост на верхней стороне —
для меню, открытого под объектом; в начале строки — для меню справа от
объекта при письме слева направо. Логические стороны `inline-start` и
`inline-end` отражаются при письме справа налево.

Те же положения есть под физическими именами: `left` и `right` — синонимы
`inline-start` и `inline-end` и отражаются так же, `top-center` и
`bottom-center` — синонимы `top` и `bottom`. В разметке пишите логические
имена из примера.

:::example {id="components/context-menu/positions" label="Двенадцать положений хвоста"}
:::

### Без хвоста

Без модификатора положения и без `sf-context-menu-tooltip` меню — отдельная
панель с тем же радиусом и тенью. Так его ставят, когда связь с конкретной
точкой не нужна, например в выпадающей панели под кнопкой.

:::example {id="components/context-menu/no-tail" label="Меню без хвоста"}
:::

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
- Хвост декоративный и получает `aria-hidden="true"`.
- Кнопка, которая открывает меню, сообщает его состояние через
  `aria-expanded`; после закрытия фокус возвращается на неё.
- Не прячьте в контекстное меню единственный путь к основному действию.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-context-menu` |
| Части | `sf-context-menu-choice`, `sf-context-menu-choice-option`, `sf-context-menu-content`, `sf-context-menu-header`, `sf-context-menu-header-avatar`, `sf-context-menu-header-caption`, `sf-context-menu-header-name`, `sf-context-menu-header-text`, `sf-context-menu-heading`, `sf-context-menu-item`, `sf-context-menu-item--current`, `sf-context-menu-item--danger`, `sf-context-menu-item-caption`, `sf-context-menu-item-check`, `sf-context-menu-item-chevron`, `sf-context-menu-item-icon`, `sf-context-menu-item-label`, `sf-context-menu-item-lead`, `sf-context-menu-item-shortcut`, `sf-context-menu-item-text`, `sf-context-menu-item-value`, `sf-context-menu-note`, `sf-context-menu-search`, `sf-context-menu-search-input`, `sf-context-menu-separator`, `sf-context-menu-tooltip` |
| Модификаторы | `sf-context-menu--entries`, `sf-context-menu--open`, `sf-context-menu--position-bottom`, `sf-context-menu--position-bottom-center`, `sf-context-menu--position-bottom-inline-end`, `sf-context-menu--position-bottom-inline-start`, `sf-context-menu--position-bottom-left`, `sf-context-menu--position-bottom-right`, `sf-context-menu--position-inline-end`, `sf-context-menu--position-inline-end-bottom`, `sf-context-menu--position-inline-end-top`, `sf-context-menu--position-inline-start`, `sf-context-menu--position-inline-start-bottom`, `sf-context-menu--position-inline-start-top`, `sf-context-menu--position-left`, `sf-context-menu--position-left-bottom`, `sf-context-menu--position-left-top`, `sf-context-menu--position-right`, `sf-context-menu--position-right-bottom`, `sf-context-menu--position-right-top`, `sf-context-menu--position-top`, `sf-context-menu--position-top-center`, `sf-context-menu--position-top-inline-end`, `sf-context-menu--position-top-inline-start`, `sf-context-menu--position-top-left`, `sf-context-menu--position-top-right` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-context-menu`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-context-menu--item-inset-end-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-ui-1--space-x) + var(--sf-px) - var(--sf-context-menu-content--padding-inline-end, 0px))` | `--sf-button--padding-inline-end`, `padding-inline`, `padding`, `margin-inline` |
| `--sf-context-menu--item-inset-end-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-ui-2--space-x) + var(--sf-px) - var(--sf-context-menu-content--padding-inline-end, 0px))` | `--sf-button--padding-inline-end` |
| `--sf-context-menu--item-inset-start-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-ui-1--space-x) + var(--sf-px) - var(--sf-context-menu-content--padding-inline-start, 0px))` | `--sf-button--padding-inline-start`, `padding-inline`, `padding`, `margin-inline` |
| `--sf-context-menu--item-inset-start-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-ui-2--space-x) + var(--sf-px) - var(--sf-context-menu-content--padding-inline-start, 0px))` | `--sf-button--padding-inline-start` |
| `--sf-context-menu--label-inset-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-context-menu--item-inset-start-1) + var(--sf-ui-1--text-space-x))` | — |
| `--sf-context-menu--label-inset-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-context-menu--item-inset-start-2) + var(--sf-ui-2--text-space-x))` | — |
| `--sf-context-menu-content--background-color` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-elevation-3--surface)` | `background-color` |
| `--sf-context-menu-content--border-radius` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-radius--surface)` | `border-radius` |
| `--sf-context-menu-content--padding-bottom` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `padding-bottom` |
| `--sf-context-menu-content--padding-inline-end` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `padding-inline-end` |
| `--sf-context-menu-content--padding-inline-start` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `padding-inline-start` |
| `--sf-context-menu-content--padding-top` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `padding-top` |
| `--sf-context-menu-tail-corner-offset` | `var(--sf-space-1/2)` | `top`, `inset-block-start`, `bottom`, `inset-block-end`, `inset-inline-start`, `inset-inline-end` |
| `--sf-context-menu-tail-half` | `calc(var(--sf-context-menu-tail-size) / 2)` | `inset-inline-start`, `top`, `inset-block-start`, `inset-inline-end`, `bottom`, `inset-block-end` |
| `--sf-context-menu-tail-size` | `var(--sf-b2)` | `--sf-context-menu-tail-half`, `width`, `height` |
| `--sf-context-menu-viewport-space` | `var(--sf-space-1/2)` | — |

## См. также

- [Выпадающий список](/ru/components/navigation/dropdown/)
- [Кнопки](/ru/components/actions/buttons/)
- [Context Menu — Smart-компонент](/ru/smart-components/navigation/context-menu/)
