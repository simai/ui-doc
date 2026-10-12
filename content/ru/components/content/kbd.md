---
title: "Клавиши"
description: "Показывает клавишу или сочетание клавиш в инструкции и подсказке."
profile: reference
---

# Клавиши

Компонент оформляет клавишу или сочетание клавиш как надпись на клавише:
«нажмите `Ctrl` + `S`». Берите его в инструкциях, подсказках и справке по
горячим клавишам.

## Пример

:::example {id="components/kbd/overview" label="Клавиша в тексте"}
:::

## Разметка

Минимальную разметку показывает пример выше: семантический элемент
`<kbd>` с названием клавиши. Компонент оформляет `<kbd>` без класса; класс
`sf-kbd` даёт тот же вид другому элементу.

- Каждую клавишу сочетания кладите в отдельный `<kbd>`.
- Название клавиши пишите так, как оно напечатано на клавиатуре целевой
  платформы: `Ctrl` в Windows, `⌘` в macOS.
- Loader не находит этот компонент по разметке: подключите его CSS
  (`component/kbd/css/kbd.css`) вместе со стилями страницы.

## Варианты

### Сочетание

Сочетание записывают тремя способами. Отдельные `<kbd>` с текстом «+» между
ними — самый простой. `<kbd>`, внутри которого лежат клавиши, — так HTML
описывает ввод сочетания: внешний элемент теряет рамку и ставит клавиши в
ряд с небольшим промежутком. `sf-kbd--group` делает то же для элемента без
вложенных `<kbd>`.

:::example {id="components/kbd/group" label="Записи сочетания клавиш"}
:::

## Доступность

- `<kbd>` сообщает вспомогательным технологиям, что это ввод с клавиатуры;
  `sf-kbd` на другом элементе такого смысла не даёт.
- Символ клавиши без текста (`⌘`, `⇧`) экранный диктор может прочитать
  неточно: в инструкции добавьте название словами, например
  `aria-label="Command"` на элементе клавиши.
- Сочетание из инструкции должно работать на той платформе, для которой
  написан текст.
- В режиме высокой контрастности рамка клавиши берёт системный цвет текста.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-kbd` |
| Модификаторы | `sf-kbd--group` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-kbd`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-kbd--background` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-surface-container)` | `background` |
| `--sf-kbd--border-color` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-outline-variant)` | `border` |
| `--sf-kbd--border-width` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-px)` | `border` |
| `--sf-kbd--color` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-on-surface)` | `color` |
| `--sf-kbd--font-family` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-mono)` | `font-family` |
| `--sf-kbd--font-size` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-kbd--font-weight` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-kbd--line-height` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-text-height-1/3)` | `line-height` |
| `--sf-kbd--min-block-size` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-text-height-1/3)` | `min-height`, `min-block-size` |
| `--sf-kbd--min-inline-size` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-text-height-1/3)` | `min-width`, `min-inline-size` |
| `--sf-kbd--padding-block` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-space-1/4)` | `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-kbd--padding-inline` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-space-1/2)` | `padding-left`, `padding-right`, `padding-inline` |
| `--sf-kbd--radius` | не задана; задают модификаторы, например `:where(kbd:not(.sf-kbd--group), .sf-kbd:not(.sf-kbd--group))`: `var(--sf-radius--ui)` | `border-radius` |

## См. также

- [Подсказки](/ru/components/overlays-media/tooltip/)
