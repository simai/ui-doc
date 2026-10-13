---
title: "Бейджи"
description: "Показывает рядом с объектом короткий статус, категорию или счётчик."
profile: reference
---

# Бейджи

Бейдж показывает короткий статус, категорию или счётчик рядом с объектом. Он
дополняет основное содержимое и не заменяет кнопку, фильтр или
[уведомление](/ru/components/feedback/alerts/); для статуса без текста
подходит [точка состояния](/ru/components/feedback/dot/).

## Пример

:::example {id="components/badges/basic" label="Бейдж статуса"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-badge` → `sf-badge-text-container` → `sf-badge-text`; иконка — `sf-icon`
в `sf-badge-icon-container`.

- На блоке `sf-badge` — один класс вида, один класс цвета и размер. Без
  классов вида и цвета бейдж залит вспомогательным цветом текста, без размера
  берёт ступень `1/3`.
- Текст — в `sf-badge-text`: он не переносится и обрезается многоточием, если
  бейджу не хватает места.
- Иконка необязательна и ставится до или после текста.

## Варианты

### Вид

Вид задаёт выраженность: `sf-badge--main` — сплошная заливка, самый заметный
акцент; `sf-badge--tonal` — спокойная тональная заливка; `sf-badge--outline` —
только граница. Вид меняет вес бейджа, а не смысл.

:::example {id="components/badges/types" label="Виды бейджа"}
:::

### Цвет

Цвет берётся из ролей темы: `sf-badge--neutral`, `sf-badge--primary`,
`sf-badge--secondary`, `sf-badge--tertiary`, `sf-badge--on-surface` и статусы
`sf-badge--info`, `sf-badge--success`, `sf-badge--warning`, `sf-badge--error`.
Статус выбирайте по смыслу, а не по желаемому цвету. У `on-surface` нет
тонального вида. `sf-badge--danger` — другое имя `error`.

:::example {id="components/badges/overview" label="Цвета бейджа в каждом виде"}
:::

### Размер

Три ступени — `sf-badge--size-1/3`, `sf-badge--size-1/2` и `sf-badge--size-1`
— меняют кегль, отступы и иконку вместе. Берите ступень окружающих элементов
управления.

:::example {id="components/badges/sizes" label="Размеры бейджа"}
:::

### В строке текста

Классы `sf-badge--line-1/2`, `sf-badge--line-1` и `sf-badge--line-2` ставят
бейдж в строку текста той же ступени: бейдж получает высоту строки, а надпись —
кегль на ступень меньше и не добавляет вертикальных отступов. Так строка
таблицы или ряд полей сохраняет свою высоту.

:::example {id="components/badges/line" label="Бейдж в строке текста"}
:::

### Иконки

Иконка в `sf-badge-icon-container` стоит в логическом начале или конце бейджа
и берёт цвет и размер бейджа. Бейдж из одной иконки и сокращённый счётчик
получают полный текст в `sr-only`.

:::example {id="components/badges/icons" label="Бейджи с иконками"}
:::

## Доступность

- Бейдж — неинтерактивный текст: он не получает фокус и не имеет роли.
- Смысл передаёт текст; цвет его только поддерживает.
- Декоративную иконку скрывайте через `aria-hidden="true"`. У бейджа из одной
  иконки или сокращения вроде «99+» полный текст лежит в `sr-only`, а видимая
  часть скрыта от экранного диктора.
- Счётчику нужен контекст: «3 новых сообщения», а не «3». Задайте его соседним
  текстом или через `sr-only`.
- Если значение меняется на глазах у пользователя, объявление задаёт
  окружающая область с `aria-live` или `role="status"`.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-badge` |
| Части | `sf-badge-icon-container`, `sf-badge-text`, `sf-badge-text-container` |
| Модификаторы | `sf-badge--error`, `sf-badge--info`, `sf-badge--line-1`, `sf-badge--line-1/2`, `sf-badge--line-2`, `sf-badge--main`, `sf-badge--neutral`, `sf-badge--on-surface`, `sf-badge--outline`, `sf-badge--primary`, `sf-badge--secondary`, `sf-badge--success`, `sf-badge--tertiary`, `sf-badge--tonal`, `sf-badge--warning` |
| Размеры | `sf-badge--size-1`, `sf-badge--size-1/2`, `sf-badge--size-1/3` |
| Устаревшие | `sf-badge--danger` → `sf-badge--error` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-badge`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-badge--background-color` | `var(--sf-on-surface-variant)` | `background-color` |
| `--sf-badge--border-bottom-width` | не задана; задают модификаторы, например `.sf-badge--outline`: `var(--sf-px)` | `border-bottom-width` |
| `--sf-badge--border-color` | не задана; задают модификаторы, например `.sf-badge.sf-badge--outline.sf-badge--neutral`: `var(--sf-outline-variant)` | `border-color` |
| `--sf-badge--border-inline-end-width` | не задана; задают модификаторы, например `.sf-badge--outline`: `var(--sf-px)` | `border-inline-end-width` |
| `--sf-badge--border-inline-start-width` | не задана; задают модификаторы, например `.sf-badge--outline`: `var(--sf-px)` | `border-inline-start-width` |
| `--sf-badge--border-style` | не задана; задают модификаторы, например `.sf-badge--outline`: `solid` | `border-style` |
| `--sf-badge--border-top-width` | не задана; задают модификаторы, например `.sf-badge--outline`: `var(--sf-px)` | `border-top-width` |
| `--sf-badge--color` | `var(--sf-on-surface-inverse)` | `color`, `--sf-icon--color`, `--sf-badge-text--color` |
| `--sf-badge--font-size` | `var(--sf-text-size-1/3)` | `font-size`, `--sf-icon--font-size`, `--sf-badge-text--font-size` |
| `--sf-badge--line-height` | `var(--sf-text-height-1/3)` | `line-height`, `--sf-badge--min-size`, `--sf-badge-text--line-height` |
| `--sf-badge--min-size` | `calc(var(--sf-badge--line-height) + 2 * var(--sf-badge--padding-block))` | `min-height`, `min-block-size`, `min-width`, `min-inline-size` |
| `--sf-badge--padding-block` | `var(--sf-ui-1/3--space-y-tightness-low)` | `padding-top`, `padding-bottom`, `padding-block`, `--sf-badge--min-size` |
| `--sf-badge--padding-inline-end` | `var(--sf-ui-1/3--text-space-x)` | `padding-inline-end` |
| `--sf-badge--padding-inline-start` | `var(--sf-ui-1/3--text-space-x)` | `padding-inline-start` |
| `--sf-badge-text--color` | не задана; задают модификаторы, например `.sf-badge.sf-badge--tonal .sf-badge-text`: `var(--sf-badge--color)` | `color` |
| `--sf-badge-text--font-size` | не задана; задают модификаторы, например `.sf-badge--size-1 .sf-badge-text`: `var(--sf-badge--font-size)` | `font-size` |
| `--sf-badge-text--line-height` | не задана; задают модификаторы, например `.sf-badge--size-1 .sf-badge-text`: `var(--sf-badge--line-height)` | `line-height` |

## См. также

- [Точка состояния](/ru/components/feedback/dot/)
- [Уведомления](/ru/components/feedback/alerts/)
- [Badges — Smart-компонент](/ru/smart-components/feedback/badges/)
