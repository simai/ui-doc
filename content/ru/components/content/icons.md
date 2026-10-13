---
title: "Иконки"
description: "Выводит символ Material Symbols и согласует его размер, начертание и цвет со шкалами Framework."
profile: reference
---

# Иконки

Иконка выводит символ шрифта Material Symbols по его имени и согласует
размер, начертание и форму со шкалами Framework. Берите её, чтобы подкрепить
подпись или узнаваемо обозначить действие; на цветной подложке её
выделяет [акцентная иконка](/ru/components/content/featured-icon/).

## Пример

:::example {id="components/icons/overview" label="Декоративная и значимая иконка"}
:::

## Разметка

Минимальную разметку показывает пример выше:
`<i class="sf-icon" aria-hidden="true">favorite</i>` — элемент с классом
`sf-icon` и именем символа внутри.

- Имя символа — из каталога Material Symbols, латиницей через `_`:
  `arrow_upward`, `check_circle`.
- Без класса размера иконка берёт ступень `3`; внутри кнопок, полей и
  других компонентов размер задаёт компонент.
- Цвет иконка наследует от текста (`currentColor`); утилиты цвета на самой
  иконке или на родителе меняют его.
- Имена с одним дефисом (`sf-icon-bold`, `sf-icon-filled`, `sf-icon-solid`,
  `sf-icon-rounded`, `sf-icon-shape` и другие) работают так же, как
  модификаторы `sf-icon--weight-bold`, `sf-icon--filled`,
  `sf-icon--rounded` и `sf-icon--sharp`; в разметке пишите модификаторы.
- Класс `sf-icon-loaded` ставит загрузчик иконок Framework, когда шрифт
  готов; до этого иконка не видна, и вместо символа не мелькает его имя.
  Этот класс не пишите в разметке вручную.

## Варианты

### Семейство

Без класса иконка рисуется семейством Outlined. `sf-icon--rounded` берёт
Rounded со скруглёнными концами, `sf-icon--sharp` — Sharp с острыми углами.
Держите одно семейство во всём интерфейсе.

:::example {id="components/icons/families" label="Семейства иконок"}
:::

### Начертание

Толщину линии задают `sf-icon--weight-thin`, `-extra-light`, `-light`,
`-regular` (по умолчанию), `-medium`, `-semi-bold` и `-bold`. Берите
начертание, близкое к начертанию соседнего текста.

:::example {id="components/icons/weights" label="Начертания иконки"}
:::

### Заливка

`sf-icon--filled` заливает символ. Заливкой показывают выбранное состояние
рядом с невыбранным контуром, например отмеченное избранное.

:::example {id="components/icons/fill" label="Контурная и залитая иконка"}
:::

### Размер

Размеры `1/4`, `1/3`, `1/2` и `1`–`7` следуют шкале иконок Framework. Для
иконки в строке текста берите ступень текста этой строки.

:::example {id="components/icons/sizes" label="Размеры иконки"}
:::

### Цвет

Иконка красится утилитами цвета: `color-on-surface` — основной,
`color-on-surface-variant` — второстепенный, `color-primary` — акцент,
`color-success`, `color-warning` и `color-error` — статусы.

:::example {id="components/icons/color" label="Цвета иконки"}
:::

### Поворот

`sf-icon--rotate-45` … `sf-icon--rotate-315` поворачивают символ с шагом 45°
вокруг центра: одна стрелка служит любым направлением.

:::example {id="components/icons/rotation" label="Повороты иконки"}
:::

## Доступность

- Иконку рядом с текстом скрывайте: `aria-hidden="true"`.
- Значимая иконка без подписи получает `role="img"` и короткий
  `aria-label`; иконка внутри кнопки остаётся скрытой, а имя получает
  кнопка.
- Статус не передавайте только цветом иконки: нужен текст рядом или
  доступное имя.
- Стрелки направления на странице с письмом справа налево поворачивайте
  классом поворота: шрифт сам их не зеркалит.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-icon` |
| Части | `sf-icon-bold`, `sf-icon-extra-light`, `sf-icon-filled`, `sf-icon-light`, `sf-icon-medium`, `sf-icon-regular`, `sf-icon-rounded`, `sf-icon-semi-bold`, `sf-icon-shape`, `sf-icon-solid`, `sf-icon-thin` |
| Модификаторы | `sf-icon--filled`, `sf-icon--rotate-135`, `sf-icon--rotate-180`, `sf-icon--rotate-225`, `sf-icon--rotate-270`, `sf-icon--rotate-315`, `sf-icon--rotate-45`, `sf-icon--rotate-90`, `sf-icon--rounded`, `sf-icon--sharp`, `sf-icon--weight-bold`, `sf-icon--weight-extra-light`, `sf-icon--weight-light`, `sf-icon--weight-medium`, `sf-icon--weight-regular`, `sf-icon--weight-semi-bold`, `sf-icon--weight-thin` |
| Размеры | `sf-icon--size-1`, `sf-icon--size-1/2`, `sf-icon--size-1/3`, `sf-icon--size-1/4`, `sf-icon--size-2`, `sf-icon--size-3`, `sf-icon--size-4`, `sf-icon--size-5`, `sf-icon--size-6`, `sf-icon--size-7` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-icon`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-icon--fill` | `0` | `font-variation-settings` |
| `--sf-icon--font-family` | не задана; задают модификаторы, например `:root[data-sf-icons=subset-pending] .sf-icon`: `"Material Symbols Outlined Subset"` | `font-family` |
| `--sf-icon--font-size` | не задана; задают модификаторы, например `.sf-icon--size-1/4`: `var(--sf-icon-size-1/4)` | `font-size` |
| `--sf-icon--grade` | `0` | `font-variation-settings` |
| `--sf-icon--height` | не задана; задают модификаторы, например `.sf-icon--size-1/4`: `var(--sf-icon-size-1/4)` | `height` |
| `--sf-icon--line-height` | `1` | `line-height` |
| `--sf-icon--optical-size` | `24` | `font-variation-settings` |
| `--sf-icon--weight` | `var(--sf-weight--regular)` | `font-variation-settings`, `font-weight` |
| `--sf-icon--width` | не задана; задают модификаторы, например `.sf-icon--size-1/4`: `var(--sf-icon-size-1/4)` | `width` |

## См. также

- [Акцентная иконка](/ru/components/content/featured-icon/)
- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
- [Icons — Smart-компонент](/ru/smart-components/content/icons/)
