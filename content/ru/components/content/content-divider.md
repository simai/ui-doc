---
title: "Разделитель"
description: "Отделяет соседние части содержимого линией, при необходимости с подписью или кнопками."
profile: reference
---

# Разделитель

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

:::example {id="components/content-divider/orientation" label="Горизонтальный и вертикальный разделитель"}
:::

### Подпись

`sf-divider-content` ставит текст посередине линии. `sf-divider-content--bold`
набирает его жирным — для названия раздела; `sf-divider-content--small` —
мелким второстепенным текстом; `sf-divider-content-border` обводит подпись
рамкой, как плашку.

:::example {id="components/content-divider/content" label="Подписи на линии"}
:::

### Кнопки на линии

`sf-divider-buttons` ставит на линию обычные
[кнопки](/ru/components/actions/buttons/) `sf-button` и
[кнопки с иконкой](/ru/components/actions/icon-buttons/) `sf-icon-button` и
держит между ними промежуток. Так в редакторах вставляют блок или меняют
порядок блоков.

Классы `sf-divider-button`, `sf-divider-button--solo`,
`sf-divider-button--left`, `sf-divider-button--right`,
`sf-divider-button-square--left` и `sf-divider-button-square--right` — старые
имена кнопок на линии. Они работают для совместимости; в новой разметке
используйте `sf-button` и `sf-icon-button`.

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
| Части | `sf-divider-borders`, `sf-divider-button`, `sf-divider-button--left`, `sf-divider-button--right`, `sf-divider-button--solo`, `sf-divider-button-square--left`, `sf-divider-button-square--right`, `sf-divider-buttons`, `sf-divider-content`, `sf-divider-content--bold`, `sf-divider-content--small`, `sf-divider-content-border`, `sf-divider-horizontal`, `sf-divider-vertical` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-divider`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-divider--background-color` | `var(--sf-outline-variant)` | `background-color` |
| `--sf-divider--border-color` | `var(
      --sf-divider-borders--border-color,
      var(--sf-outline-variant)
    )` | `border-top`, `border-bottom`, `border-block` |
| `--sf-divider--gap` | `var(--sf-space-1)` | `gap` |
| `--sf-divider--length` | `var(--sf-d0)` | `min-height`, `min-block-size` |
| `--sf-divider--thickness` | `var(--sf-px)` | `height`, `block-size`, `width`, `inline-size`, `border-top`, `border-bottom`, `border-block`, `border`, `border-inline-end-width` |
| `--sf-divider-buttons--gap` | не задана; задают модификаторы, например `.sf-divider-buttons`: `var(--sf-space-1/2)` | `gap` |
| `--sf-divider-content--background-color` | `var(--sf-transparent)` | `background-color` |
| `--sf-divider-content--color` | `var(--sf-on-surface)` | `color` |
| `--sf-divider-content--font-size` | `var(--sf-text--size)` | `font-size` |
| `--sf-divider-content--line-height` | `var(--sf-text--height)` | `line-height` |
| `--sf-divider-content--padding` | `var(--sf-space-1/3) 0` | `padding` |

## См. также

- [Аккордеон](/ru/components/content/accordion/)
