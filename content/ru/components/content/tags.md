---
title: "Теги"
description: "Компактно показывает категорию, выбранное значение, фильтр или статус."
profile: reference
---

# Теги

Тег компактно показывает категорию, выбранное значение, фильтр или статус.
Сам по себе тег — надпись, а не действие: кнопкой становится только тег, который
действительно можно выбрать, а удаляемое значение получает отдельную кнопку
удаления. Для числа или статуса в углу другого элемента есть
[бейдж](/ru/components/feedback/badges/).

## Пример

:::example {id="components/tags/overview" label="Теги"}
:::

## Разметка

Минимальную разметку показывает пример выше: элемент с классами блока
`sf-tag`, содержимого (`sf-tag--default`) и размера (`sf-tag--size-1`), внутри —
подпись `<span class="sf-tag-container">`.

- Раскладку задают утилиты `inline-flex flex-row flex-nowrap items-center`.
- Статичный тег — `<div>` или `<span>` без роли и без точки Tab.
- Выбираемый фильтр — нативный `<button type="button">` с
  `sf-tag--interactive` и `aria-pressed`.
- Удаляемое значение — статичный тег с `sf-tag--removable` и одной кнопкой
  удаления внутри. Выбор и удаление в одном теге не совмещайте.
- Иконку, цветную метку, аватар и отметку скрывайте (`aria-hidden="true"`),
  когда подпись уже передаёт их смысл.
- У компонента нет своего JavaScript: выбор и удаление обрабатывает
  приложение.

## Варианты

### Содержимое

Модификатор содержимого добавляет маркер перед подписью: `sf-tag--default` —
только текст; `sf-tag--checkbox` — отметка `sf-tag-check` для выбираемого
фильтра; `sf-tag--icon` — иконка `sf-icon`; `sf-tag--color` — цветная метка
`sf-tag-color-icon` (цвет задаёт утилита фона); `sf-tag--avatar` — аватар
размера `1/4`.

:::example {id="components/tags/types" label="Содержимое тега"}
:::

### Статус

`sf-tag--success`, `sf-tag--warning` и `sf-tag--error` окрашивают тег цветом
статуса, точка [`sf-dot`](/ru/components/feedback/dot/) перед подписью
повторяет его. Нейтральный статус — `sf-tag--default`. Статус не передавайте
только цветом: подпись называет его словами.

:::example {id="components/tags/statuses" label="Статусы тега"}
:::

### Вид

Вид — отдельная ось. Без класса тег стоит на нейтральной заливке.
`sf-tag--appearance-surface` берёт слабую заливку и контур на ступень сильнее
из [нейтральной шкалы](/ru/guide/fundamentals/colors-and-themes/) — для тега на
цветном фоне или изображении. `sf-tag--appearance-ghost` прозрачен; у выбираемого
тега фон появляется при наведении. Вид берут нейтральные теги (`default`,
`icon`, `color`, `avatar`, `checkbox`); статусные теги вид не берут, чтобы не
вымывать цвет статуса. Контур `surface` — внутренняя тень, а не рамка: тег не
становится выше соседних.

:::example {id="components/tags/appearance" label="Виды тега"}
:::

### Размер

Размеры `1/3`, `1/2`, `1`, `2` и `3` согласуют текст и отступы тега со
ступенями текста; скругление у всех размеров одно — радиус контролов
`--sf-radius--ui`. Тег берёт размер на ступень меньше текста или поля, рядом
с которыми стоит.

:::example {id="components/tags/sizes" label="Размеры тега"}
:::

### Плотность

Плотность меняет только отступы сверху и снизу, как у кнопок:
`spacing-compact`, без класса — обычная, `spacing-comfortable` и
`spacing-spacious`.

:::example {id="components/tags/spacing" label="Плотность тега"}
:::

### Счётчик и удаление

`sf-tag-count` после подписи показывает вспомогательное число, например
количество задач. `sf-tag--removable` готовит тег к кнопке удаления: внутри
стоит [кнопка закрытия](/ru/components/actions/close/) размера `1/3`, её
доступное имя называет удаляемое значение.

:::example {id="components/tags/actions" label="Тег со счётчиком и удаляемый тег"}
:::

### В строке

`sf-tag--inline` ставит тег на строку другого элемента — текста, ячейки,
поля выпадающего списка: убирает отступы сверху и снизу и делает кнопку
удаления высотой в строку. В строке текста тег обычно на ступень меньше
текста вокруг. Высоту строки задают `sf-tag--line-1/2`, `--line-1` и
`--line-2` или переменная `--sf-tag--line` на элементе. Вместе с
`spacing-compact` тег в строке становится компактной плашкой своего размера —
так поле выпадающего списка показывает выбранные значения.

:::example {id="components/tags/inline" label="Теги в строке текста"}
:::

### Длинный текст

Тег не шире доступной области и переносит длинную подпись, не создавая
горизонтальной прокрутки. Переносы и промежутки между тегами группы задают
утилиты контейнера.

:::example {id="components/tags/wrapping" label="Группа тегов с длинной подписью"}
:::

## Состояния

Наведение и нажатие выбираемый тег показывает сам.

### Выбран

Класс `active` вместе с `aria-pressed="true"` отмечает выбранный фильтр:
отметка `sf-tag-check` заполняется. Состояние сообщает `aria-pressed`, а не
класс.

:::example {id="components/tags/state-active" label="Невыбранный и выбранный фильтр"}
:::

### Недоступен

Класс `disabled` даёт тегу серую заливку и приглушает подпись. Кнопке-фильтру
добавьте и нативный `disabled`: только он снимает фокус и нажатие.

:::example {id="components/tags/state-disabled" label="Недоступные теги"}
:::

### Фокус

Выбираемый тег и кнопка удаления при переходе клавишей Tab получают кольцо
фокуса по `:focus-visible`; оно остаётся видимым и в режиме высокой
контрастности. В примере фокус показан классом `focus-visible`, который CSS
читает наравне с `:focus-visible`.

:::example {id="components/tags/state-focus" label="Теги в фокусе"}
:::

## Доступность

- Статичный тег не получает роль и точку Tab.
- Выбираемый фильтр — `<button>` с `aria-pressed`; группу фильтров
  оборачивайте в элемент с `role="group"` и общим доступным именем.
- Кнопка удаления называет значение: «Удалить тег Важное». После удаления
  переведите фокус на соседний тег или на поле ввода.
- Статус передавайте словами в подписи, а не только цветом.
- Маркеры перед подписью и кнопка удаления стоят на логических сторонах и
  зеркалятся при письме справа налево.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-tag` |
| Части | `sf-tag-check`, `sf-tag-color-icon`, `sf-tag-container`, `sf-tag-count` |
| Модификаторы | `sf-tag--appearance-ghost`, `sf-tag--appearance-surface`, `sf-tag--avatar`, `sf-tag--checkbox`, `sf-tag--color`, `sf-tag--default`, `sf-tag--error`, `sf-tag--icon`, `sf-tag--inline`, `sf-tag--interactive`, `sf-tag--line-1`, `sf-tag--line-1/2`, `sf-tag--line-2`, `sf-tag--removable`, `sf-tag--success`, `sf-tag--warning` |
| Размеры | `sf-tag--size-1`, `sf-tag--size-1/2`, `sf-tag--size-1/3`, `sf-tag--size-2`, `sf-tag--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-tag`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-tag--background-color` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color`: `var(--sf-surface-container)` | `background-color` |
| `--sf-tag--block` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1/3`: `var(--sf-ui-1/3--space-y-tightness-default)` | `padding-top`, `padding-bottom` |
| `--sf-tag--box-shadow` | не задана; задают модификаторы, например `.sf-tag.sf-tag--appearance-surface.sf-tag--color`: `inset 0 0 0 var(--sf-px) var(--sf-alpha-8)` | `box-shadow` |
| `--sf-tag--font-size` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1/3`: `var(--sf-text-size-1/3)` | `font-size`, `--sf-close-icon--height`, `--sf-close-icon--width` |
| `--sf-tag--gap` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1/3`: `0` | `gap` |
| `--sf-tag--inline-end` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1/3`: `var(--sf-ui-1/3--space-x)` | `padding-inline-end` |
| `--sf-tag--inline-line` | не задана; задают модификаторы, например `.sf-tag.sf-tag--inline.sf-tag--inline`: `var(--sf-tag--line)` | `line-height` |
| `--sf-tag--inline-start` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1/3`: `var(--sf-ui-1/3--space-x)` | `padding-inline-start` |
| `--sf-tag--label-end` | не задана; задают модификаторы, например `.sf-tag.sf-tag--inline.sf-tag--inline`: `0` | `padding-inline-end` |
| `--sf-tag--label-start` | не задана; задают модификаторы, например `.sf-tag.sf-tag--inline.sf-tag--inline`: `0` | `padding-inline-start` |
| `--sf-tag--line` | не задана; задают модификаторы, например `.sf-tag.sf-tag--line-1/2`: `var(--sf-text-height-1/2)` | `line-height`, `--sf-tag--inline-line`, `min-height`, `min-block-size`, `height`, `block-size`, `width`, `inline-size` |
| `--sf-tag--line-height` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1/3`: `var(--sf-text-height-1/3)` | `line-height`, `min-height`, `min-block-size`, `height`, `block-size`, `width`, `inline-size` |
| `--sf-tag--padding-bottom` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-bottom` |
| `--sf-tag--padding-inline-end` | не задана; задают модификаторы, например `.sf-tag--size-1`: `var(--sf-ui-1--space-x)` | `padding-inline-end` |
| `--sf-tag--padding-inline-start` | не задана; задают модификаторы, например `.sf-tag--size-1`: `var(--sf-ui-1--space-x)` | `padding-inline-start`, `--sf-tag-container--padding-inline-start` |
| `--sf-tag--padding-top` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-top` |
| `--sf-tag-color-icon--border-radius` | не задана; задают модификаторы, например `.sf-tag.sf-tag--color .sf-tag-color-icon`: `var(--sf-radius-circle)` | `border-radius` |
| `--sf-tag-color-icon--height` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1 .sf-tag-color-icon`: `var(--sf-text-height-1)` | `height` |
| `--sf-tag-color-icon--opacity` | не задана; задают модификаторы, например `.sf-tag.sf-tag--color.disabled .sf-tag-color-icon`: `var(--sf-opacity-30)` | `opacity` |
| `--sf-tag-color-icon--width` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1 .sf-tag-color-icon`: `var(--sf-text-height-1)` | `width` |
| `--sf-tag-container--background-color` | не задана; задают модификаторы, например `.sf-tag .sf-tag-container`: `transparent` | `background-color` |
| `--sf-tag-container--color` | не задана; задают модификаторы, например `.sf-tag.sf-tag--color .sf-tag-container`: `var(--sf-on-surface)` | `color` |
| `--sf-tag-container--font-family` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color .sf-tag-container`: `var(--sf-text--family)` | `font-family` |
| `--sf-tag-container--font-size` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color .sf-tag-container`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-tag-container--font-weight` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color .sf-tag-container`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-tag-container--line-height` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color .sf-tag-container`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-tag-container--padding-inline-end` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color .sf-tag-container`: `var(--sf-ui-1--space-x)` | `padding-inline-end` |
| `--sf-tag-container--padding-inline-start` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--color .sf-tag-container`: `var(--sf-ui-1--space-x)` | `padding-inline-start` |
| `--sf-tag-count--background-color` | не задана; задают модификаторы, например `.sf-tag.sf-tag--default .sf-tag-count`: `transparent` | `background-color` |
| `--sf-tag-count--color` | не задана; задают модификаторы, например `.sf-tag.sf-tag--default .sf-tag-count`: `var(--sf-on-surface)` | `color` |
| `--sf-tag-count--font-family` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--default .sf-tag-count`: `var(--sf-text--family)` | `font-family` |
| `--sf-tag-count--font-size` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--default .sf-tag-count`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-tag-count--font-weight` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--default .sf-tag-count`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-tag-count--line-height` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1.sf-tag--default .sf-tag-count`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-tag-count--padding-inline-end` | не задана; задают модификаторы, например `.sf-tag.sf-tag--size-1 .sf-tag-count`: `var(--sf-space-1/3)` | `padding-inline-end` |

## См. также

- [Бейджи](/ru/components/feedback/badges/)
- [Аватары](/ru/components/content/avatars/)
- [Tags — Smart-компонент](/ru/smart-components/content/tags/)
