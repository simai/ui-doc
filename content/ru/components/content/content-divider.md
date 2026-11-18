---
title: "Разделитель"
description: "Отделяет соседние части содержимого линией, при необходимости с подписью или кнопками."
profile: reference
---

# Разделитель

:badge[sf-divider]{variant=outline scheme=on-surface size=1/2} :badge[1.3.0]{variant=outline scheme=on-surface size=1/2}

Разделитель отделяет соседние части содержимого или действий линией. Для
простой границы между разделами достаточно `<hr>`; компонент нужен, когда
на линии стоит подпись («или», название раздела) или кнопка, либо когда
граница вертикальная.

## Пример

:::example {id="components/content-divider/overview" label="Горизонтальный разделитель"}
:::

## Разметка

Минимальную разметку показывает пример выше:
`<hr class="sf-divider sf-divider-horizontal">`.

- `sf-divider` задаёт цвет и толщину линии, класс ориентации
  (`sf-divider-horizontal` или `sf-divider-vertical`) — её направление.
- Пустой горизонтальный разделитель — сплошная линия. Если внутри есть
  подпись или кнопки, линия рисуется слева и справа от них.
- У компонента нет своего JavaScript.

## Варианты

### Ориентация

`sf-divider-horizontal` — линия на всю ширину между блоками.
`sf-divider-vertical` — вертикальная линия между элементами одной строки:
она растягивается на высоту строки. Вертикальному разделителю задайте
`role="separator"` и `aria-orientation="vertical"`.

:::example {id="components/content-divider/orientation" label="Ориентация"}
:::

### Подпись

`sf-divider-content--bold`, `sf-divider-content--small` • [справочник](#классы)

`sf-divider-content` ставит текст посередине линии: мелкий приглушённый текст
14/20 (на телефоне и в компактной области 12/16), без рамки.
`sf-divider-content--bold` набирает его жирным — для названия раздела.
Прежние имена `sf-divider-content--small` и `sf-divider-content-border`
рисуют ту же обычную подпись: рамки у подписи больше нет. Они работают до
2027-01-01 и отмечаются в `SF.deprecations`.

:::example {id="components/content-divider/content" label="Подписи на линии"}
:::

### Кнопки на линии

`sf-divider-buttons` • [справочник](#классы)

`sf-divider-buttons` ставит на линию обычные
[кнопки](/ru/components/actions/buttons/) `sf-button` и
[кнопки с иконкой](/ru/components/actions/icon-buttons/) `sf-icon-button`
размера 1/2 с видом `outline` и держит между ними промежуток 8 px (в
компактной области 4). Прежние кнопки `sf-divider-button` (с `--left`,
`--right` и `--solo`) работают до 2027-01-01 и отмечаются в
`SF.deprecations`; пишите `sf-button`. Так в редакторах вставляют блок или меняют
порядок блоков.

:::example {id="components/content-divider/buttons" label="Кнопки на линии"}
:::

### Рамка блока

`sf-divider sf-divider-borders` рисует линии сверху и снизу блока поверх его
содержимого — чтобы выделить полосу, не меняя её размеров.

:::example {id="components/content-divider/borders" label="Блок с линиями сверху и снизу"}
:::

## Состояния

### Фокус

Кнопка на линии при переходе клавишей Tab получает кольцо фокуса по
`:focus-visible` поверх соседней кнопки. В примере фокус показан классом
`focus-visible`, который CSS читает наравне с `:focus-visible`.

:::example {id="components/content-divider/state-focus" label="Кнопка на линии в фокусе"}
:::

## Доступность

- `<hr>` сообщает о смене темы сам. Разделитель на другом элементе получает
  `role="separator"`, если граница несёт смысл; декоративную линию роль не
  требует.
- Подпись на линии, которая повторяет очевидное («или»), можно скрыть
  (`aria-hidden="true"`) и передать разделителю через `aria-label`.
- Кнопке на линии без текста нужен `aria-label`; паре кнопок — общая группа
  с именем.
- В режиме высокой контрастности линия и рамки рисуются системным цветом
  текста, кольцо фокуса — цветом выделения.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-divider` |
| Части | `sf-divider-borders`, `sf-divider-button--left`, `sf-divider-button--right`, `sf-divider-button--solo`, `sf-divider-button-square--left`, `sf-divider-button-square--right`, `sf-divider-buttons`, `sf-divider-content`, `sf-divider-content--bold`, `sf-divider-horizontal`, `sf-divider-vertical` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид смарт-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-divider`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-divider--background-color` | `var(--sf-outline-variant)` | `background-color` |
| `--sf-divider--border-color` | `var(
      --sf-divider-borders--border-color,
      var(--sf-outline-variant)
    )` | `border-top-color`, `border-bottom-color`, `border-block-color` |
| `--sf-divider--gap` | `var(--sf-space-1/2)` | `gap` |
| `--sf-divider--length` | `var(--sf-text-height-1)` | `min-height`, `min-block-size` |
| `--sf-divider--thickness` | `var(--sf-px)` | `height`, `block-size`, `width`, `inline-size`, `border-top-width`, `border-bottom-width`, `border-block-width`, `border-width`, `border-inline-end-width` |
| `--sf-divider-buttons--gap` | не задана; задают модификаторы, например `.sf-divider-buttons`: `var(--sf-gap--actions)` | `gap` |
| `--sf-divider-content--background-color` | `var(--sf-transparent)` | `background-color` |
| `--sf-divider-content--color` | `var(--sf-on-surface-variant)` | `color` |
| `--sf-divider-content--font-size` | `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-divider-content--line-height` | `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-divider-content--padding` | `var(--sf-0)` | `padding` |

## См. также

- [Аккордеон](/ru/components/content/accordion/)
