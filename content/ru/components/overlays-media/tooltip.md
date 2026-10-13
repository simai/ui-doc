---
title: "Подсказка"
description: "Показывает короткое пояснение к элементу при наведении указателя или фокусе."
profile: reference
---

# Подсказка

Подсказка показывает короткое пояснение к элементу при наведении указателя
или фокусе с клавиатуры. Не переносите в неё сведения, без которых нельзя
выполнить действие: на сенсорном экране подсказка не открывается.

## Пример

Наведите указатель на кнопку или перейдите к ней клавишей Tab. Подсказка
остаётся видимой, пока указатель над ней, и закрывается по Escape без переноса
фокуса.

:::example {id="components/tooltip/overview" label="Подсказка у кнопки"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так: обёртка
`sf-tooltip-anchor` → элемент-триггер и поверхность `sf-tooltip` →
`sf-tooltip-content` → `sf-tooltip-wrap` с `sf-tooltip-text` и
`sf-tooltip-supporting-text`, затем хвост `sf-tooltip-tail`.

- Триггер — фокусируемый элемент: кнопка, ссылка, поле. Атрибут
  `data-tooltip` на нём хранит `id` поверхности; пустой `data-tooltip` берёт
  поверхность из той же обёртки.
- На поверхности — вид, размер и положение стрелки. Атрибут `hidden` скрывает
  её до первого показа.
- `sf-tooltip-text` — основной текст, `sf-tooltip-supporting-text` — пояснение
  или сочетание клавиш. Хвост `sf-tooltip-tail` скрыт от экранного диктора.
- Поверхность без обёртки и триггера не скрывается и не позиционируется: так
  её используют компоненты, которые сами управляют видимостью, например
  [слайдер диапазона](/ru/components/forms/range-slider/).

## Варианты

### Вид

`sf-tooltip--dark` — контрастная тёмная поверхность, заметная на любом фоне.
`sf-tooltip--light` — светлая поверхность без границы; она читается на
затемнённом или цветном фоне и теряется на светлом. Класс вида обязателен:
без него у поверхности нет фона.

:::example {id="components/tooltip/appearances" label="Виды подсказки"}
:::

### Размер

Пять ступеней — `sf-tooltip--size-1/3`, `sf-tooltip--size-1/2`,
`sf-tooltip--size-1`, `sf-tooltip--size-2` и `sf-tooltip--size-3` — меняют
кегль и отступы. Берите ступень триггера.

:::example {id="components/tooltip/sizes" label="Размеры подсказки"}
:::

### Положение стрелки

Класс стрелки задаёт и сторону, на которой открывается подсказка: стрелка
снизу (`sf-tooltip--arrow-bottom-*`) ставит подсказку над триггером, стрелка
сверху (`sf-tooltip--arrow-top-*`) — под ним, `sf-tooltip--arrow-inline-end`
— перед триггером, `sf-tooltip--arrow-inline-start` — после него. Окончания
`center`, `inline-start` и `inline-end` выравнивают подсказку по центру, началу
или концу триггера с учётом направления письма.
`sf-tooltip--arrow-none` убирает стрелку. Если со своей стороны подсказке не
хватает места, она открывается с противоположной и переворачивает стрелку.
Классы `left`, `right`, `top-left`, `top-right`, `bottom-left` и
`bottom-right` — физические варианты тех же положений, они не зеркалятся.

:::example {id="components/tooltip/arrows" label="Положения стрелки"}
:::

### Длинный текст

Короткая подсказка занимает ширину своего текста. Длинный текст ограничен
шириной `--sf-tooltip--max-inline-size` и переносится без обрезания, в том
числе длинные слова.

:::example {id="components/tooltip/wrapping" label="Подсказка с длинным текстом"}
:::

## Доступность

- Скрипт ставит поверхности `role="tooltip"`, а триггеру добавляет её `id` в
  `aria-describedby`, сохраняя уже заданные описания. Подсказка дополняет имя
  триггера и не заменяет его: у кнопки-иконки имя задаёт `aria-label`.
- Подсказка открывается при наведении и фокусе, остаётся открытой, пока
  указатель над ней, и закрывается по Escape — фокус остаётся на триггере.
- Не кладите в подсказку ссылки, кнопки и поля: для интерактивного
  содержимого нужен диалог или всплывающая панель.
- Не задавайте триггеру `aria-expanded` и `aria-haspopup`: подсказка не
  является управляемым всплывающим окном.

## JavaScript

Скрипт компонента находит триггеры `[data-tooltip]` при загрузке страницы и
в добавленной позже разметке, поэтому подсказка в новой разметке работает без
вызовов. Подсказку располагает общий модуль позиционирования Framework: она
следует за триггером при прокрутке и смене размера окна. Событий компонент не
отправляет.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-tooltip` |
| Части | `sf-tooltip-anchor`, `sf-tooltip-content`, `sf-tooltip-supporting-text`, `sf-tooltip-tail`, `sf-tooltip-text`, `sf-tooltip-wrap` |
| Модификаторы | `sf-tooltip--arrow-bottom-center`, `sf-tooltip--arrow-bottom-inline-end`, `sf-tooltip--arrow-bottom-inline-start`, `sf-tooltip--arrow-bottom-left`, `sf-tooltip--arrow-bottom-right`, `sf-tooltip--arrow-inline-end`, `sf-tooltip--arrow-inline-start`, `sf-tooltip--arrow-left`, `sf-tooltip--arrow-none`, `sf-tooltip--arrow-right`, `sf-tooltip--arrow-top-center`, `sf-tooltip--arrow-top-inline-end`, `sf-tooltip--arrow-top-inline-start`, `sf-tooltip--arrow-top-left`, `sf-tooltip--arrow-top-right`, `sf-tooltip--dark`, `sf-tooltip--light` |
| Размеры | `sf-tooltip--size-1`, `sf-tooltip--size-1/2`, `sf-tooltip--size-1/3`, `sf-tooltip--size-2`, `sf-tooltip--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-tooltip`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-tooltip-content--background-color` | не задана; задают модификаторы, например `.sf-tooltip--dark .sf-tooltip-content`: `var(--sf-surface-inverse-fixed)` | `background-color` |
| `--sf-tooltip-content--border-end-end-radius` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-content`: `var(--sf-radius--ui)` | `border-end-end-radius` |
| `--sf-tooltip-content--border-end-start-radius` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-content`: `var(--sf-radius--ui)` | `border-end-start-radius` |
| `--sf-tooltip-content--border-start-end-radius` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-content`: `var(--sf-radius--ui)` | `border-start-end-radius` |
| `--sf-tooltip-content--border-start-start-radius` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-content`: `var(--sf-radius--ui)` | `border-start-start-radius` |
| `--sf-tooltip-content--padding-bottom` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--size-1 .sf-tooltip-content`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-bottom` |
| `--sf-tooltip-content--padding-inline-end` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--size-1 .sf-tooltip-content`: `var(--sf-ui-1--space-x)` | `padding-inline-end` |
| `--sf-tooltip-content--padding-inline-start` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--size-1 .sf-tooltip-content`: `var(--sf-ui-1--space-x)` | `padding-inline-start` |
| `--sf-tooltip-content--padding-top` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--size-1 .sf-tooltip-content`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-top` |
| `--sf-tooltip-supporting-text--color` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark .sf-tooltip-supporting-text`: `var(--sf-on-surface-inverse-fixed)` | `color` |
| `--sf-tooltip-supporting-text--font-family` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-supporting-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-tooltip-supporting-text--font-size` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark.sf-tooltip--size-1 .sf-tooltip-supporting-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-tooltip-supporting-text--font-weight` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-supporting-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-tooltip-supporting-text--line-height` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark.sf-tooltip--size-1 .sf-tooltip-supporting-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-tooltip-tail--background-color` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark .sf-tooltip-tail`: `var(--sf-surface-inverse-fixed)` | `background-color` |
| `--sf-tooltip-tail--color` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark.sf-tooltip--arrow-bottom-left.sf-tooltip--size-1 .sf-tooltip-tail`: `var(--sf-on-surface-inverse-fixed)` | `color` |
| `--sf-tooltip-tail--font-family` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark.sf-tooltip--arrow-bottom-left.sf-tooltip--size-1 .sf-tooltip-tail`: `var(--sf-text--family)` | `font-family` |
| `--sf-tooltip-tail--font-size` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark.sf-tooltip--arrow-bottom-left.sf-tooltip--size-1 .sf-tooltip-tail`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-tooltip-tail--font-weight` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark.sf-tooltip--arrow-bottom-left.sf-tooltip--size-1 .sf-tooltip-tail`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-tooltip-tail--line-height` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--dark.sf-tooltip--arrow-bottom-left.sf-tooltip--size-1 .sf-tooltip-tail`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-tooltip-tail-corner-offset` | `var(--sf-b6)` | `inset-inline-start`, `inset-inline-end` |
| `--sf-tooltip-tail-half` | `calc(var(--sf-tooltip-tail-size) / 2)` | `bottom`, `inset-block-end`, `top`, `inset-block-start`, `inset-inline-end`, `inset-inline-start` |
| `--sf-tooltip-tail-size` | `var(--sf-b2)` | `--sf-tooltip-tail-half`, `width`, `height` |
| `--sf-tooltip-text--color` | не задана; задают модификаторы, например `.sf-tooltip--dark .sf-tooltip-text`: `var(--sf-on-surface-inverse-fixed)` | `color` |
| `--sf-tooltip-text--font-family` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-tooltip-text--font-size` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--size-1 .sf-tooltip-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-tooltip-text--font-weight` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-text`: `var(--sf-font-weight-bold)` | `font-weight` |
| `--sf-tooltip-text--line-height` | не задана; задают модификаторы, например `.sf-tooltip.sf-tooltip--size-1 .sf-tooltip-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-tooltip-wrap--background-color` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-wrap`: `transparent` | `background-color` |
| `--sf-tooltip-wrap--gap` | не задана; задают модификаторы, например `.sf-tooltip .sf-tooltip-wrap`: `var(--sf-space-1/4)` | `gap` |

## См. также

- [Tooltip — Smart-компонент](/ru/smart-components/feedback/tooltip/)
