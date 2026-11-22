---
title: "Хлебные крошки"
description: "Показывает, где в иерархии сайта находится страница, и ведёт к родительским разделам."
profile: reference
---

# Хлебные крошки

:badge[sf-breadcrumbs]{variant=outline scheme=on-surface size=1/2} :badge[1.3.7]{variant=outline scheme=on-surface size=1/2}

Хлебные крошки показывают путь от главной страницы до текущей и дают перейти
на любой родительский уровень. Это вторичная навигация: она дополняет
[меню](/ru/components/navigation/menu/), а не заменяет его, и описывает
структуру сайта, а не историю переходов.

## Пример

:::example {id="components/breadcrumbs/overview" label="Путь до текущей страницы"}
:::

## Разметка

Минимальную разметку показывает пример выше; форма списком — в разделе
[Список](#список). Части:

1. Корень `<nav class="sf-breadcrumbs flex items-cross-center">` с
   `aria-label`. CSS блока не задаёт `display`: раскладку даёт утилита
   `flex`, перенос и отступы — сам блок.
2. Пункты `sf-breadcrumbs-item` — прямые потомки корня: скрипт сворачивает
   только их. Родительские уровни — ссылки `<a>` с модификатором
   `sf-breadcrumbs-item--link`, текущая страница — `<span>` с
   `aria-current="page"`.
3. Внутри каждого пункта — `sf-breadcrumbs-item-container` с подписью и
   иконкой; утилиты `flex items-cross-center` выстраивают их в строку.
4. Между пунктами — разделитель `sf-breadcrumbs-item--separator` с иконкой
   `chevron_right` и `aria-hidden="true"`.

## Варианты

### Список

Основная разметка пути — список: `nav.sf-breadcrumbs > ol > li`, по `li` на
крошку, разделитель стоит в `li` перед крошкой (в первом его нет). Диктор
тогда слышит «список, 3 пункта». Плоская форма из примера выше тоже
читается: стили и скрипт понимают обе. Название крошки лежит в `<span>`
внутри `sf-breadcrumbs-item-container`; голое название скрипт оборачивает
сам. Утилиты раскладки списку не нужны.

:::example {id="components/breadcrumbs/list" label="Путь списком"}
:::

### Путь над заголовком

Над заголовком страницы путь состоит из одних родителей: текущую страницу
называет сам заголовок, повторять её в пути не нужно.

:::example {id="components/breadcrumbs/above-heading" label="Родители над заголовком"}
:::

### Вид пункта

`sf-breadcrumbs-item--link` • [справочник](#классы)

Ссылка (`sf-breadcrumbs-item--link`) — серая, приглушённым цветом текста;
под указателем она темнеет до основного цвета текста. Пункт без модификатора —
такой же приглушённый текст, но не ссылка: так показывают уровень, у которого
нет своей страницы. Текущая страница с `aria-current="page"` набрана основным
цветом текста и средним начертанием. Разделитель `sf-breadcrumbs-item--separator`
стоит между пунктами, никогда в начале строки, и отражается при письме справа
налево.

:::example {id="components/breadcrumbs/items" label="Вид пункта"}
:::

### Иконка

Иконка ставится в `sf-breadcrumbs-item-container` перед подписью и берёт
высоту строки пункта. Главную часто показывают одной иконкой `home`; у такой
ссылки обязателен `aria-label`.

:::example {id="components/breadcrumbs/icon" label="Иконка"}
:::

### Длинный путь

Путь стоит в одну строку и сворачивается, только когда ему не хватает места,
на любой ширине: середина уходит в кнопку «…», затем первая крошка. Родитель и
текущая страница остаются, а за «…» прячутся хотя бы две крошки. Если и тогда
название обрезано короче трёх букв, в «…» уходит и родитель. Путь, который
помещается, остаётся целым и на телефоне.

`data-max-items="4"` добавляет предел по числу пунктов; по умолчанию предела
нет. `data-expand-label` задаёт доступное имя кнопки «…» (без него — «Показать
скрытые крошки»). Нажатие на «…» открывает меню со скрытыми крошками: Framework
подгружает [контекстное меню](/ru/components/navigation/context-menu/), когда
путь впервые свернулся. Только на странице без загрузчика и без этого меню
путь раскрывается на месте, а фокус переходит на первую открывшуюся крошку.

:::example {id="components/breadcrumbs/long-path" label="Свёрнутая середина пути"}
:::

### Длинные подписи

Текущая страница занимает остаток строки и переносится по словам, а предки
сжимаются и обрезаются многоточием; полное название обрезанного предка видно
в подсказке. На телефоне (уже 60rem) путь не переносится: что не помещается и
после свёртки, обрезается многоточием, сначала более длинное из двух названий.

:::example {id="components/breadcrumbs/long-labels" label="Длинные названия"}
:::

## Состояния

Наведение и нажатие окрашивают ссылку и её иконку основным цветом текста
`--sf-on-surface`; эти состояния компонент показывает сам.

### Фокус

При переходе клавишей Tab ссылка получает кольцо фокуса по `:focus-visible`.
В примере фокус показан классом `focus-visible`, который CSS компонента
читает наравне с псевдоклассом.

:::example {id="components/breadcrumbs/state-focus" label="Ссылка в фокусе"}
:::

## Доступность

- Корень — `<nav>` с локализованным `aria-label`, например «Хлебные крошки»:
  так область попадает в список ориентиров.
- Родительские уровни — нативные ссылки, текущая страница — текст с
  `aria-current="page"`, не ссылка.
- Ссылка-иконка получает `aria-label`; разделители и иконки — `aria-hidden="true"`.
- Кнопка с многоточием — нативный `<button>` с `aria-expanded="false"` и
  именем из `data-expand-label`; задайте его на языке страницы.
- Пункты переходят по Tab в порядке пути; кольцо фокуса рисует компонент.

## JavaScript

Скрипт компонента подключается сам и обслуживает каждый `.sf-breadcrumbs`
на странице, в том числе добавленный позже. Он сворачивает длинный путь и
пересчитывает его, когда пункты добавляют или удаляют или меняются атрибуты
`data-max-items` и `data-expand-label`; после такого изменения раскрытый путь
снова сворачивается.

Нажатие кнопки с многоточием отправляет на корне событие
`sf-breadcrumb-click` (всплывает, отменяемое). В `detail` — `root`, `index`
(`'ellipsis'`), `items` (пункты пути без разделителей), `originalEvent` и
`item` с полями `label`, `ellipsis: true` и `hiddenItems` — скрытые пункты.
`preventDefault()` оставляет путь свёрнутым, например чтобы показать скрытые
уровни в своём меню.

:::example {id="components/breadcrumbs/hidden-items" label="Скрытые уровни" preview=sandbox log="sf-breadcrumb-click" log_open=true}
:::

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-breadcrumbs` |
| Части | `sf-breadcrumbs-item`, `sf-breadcrumbs-item--link`, `sf-breadcrumbs-item--separator`, `sf-breadcrumbs-item-container` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-breadcrumbs`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-breadcrumbs-gap` | Расстояние между крошками и разделителями. | `var(--sf-space-1/3)` |
| `--sf-breadcrumbs-color` | Крошка, которая не ссылка и не текущая страница. | `var(--sf-on-surface-variant)` |
| `--sf-breadcrumbs-link-color` | Крошка-ссылка на свою страницу в покое (серая). | `var(--sf-on-surface-variant)` |
| `--sf-breadcrumbs-link-hover-color` | Крошка-ссылка под указателем или при нажатии. | `var(--sf-on-surface)` |
| `--sf-breadcrumbs-current-color` | Крошка текущей страницы. | `var(--sf-on-surface)` |
| `--sf-breadcrumbs-separator-color` | Значок-разделитель между двумя крошками. | `var(--sf-on-surface-variant)` |

```css
.sf-breadcrumbs {
  --sf-breadcrumbs-gap: var(--sf-space-1/3);
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-breadcrumbs`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-breadcrumbs--target` | `var(--sf-ui-1/3--control-height)` | `min-height`, `min-block-size`, `min-width`, `min-inline-size`, `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-breadcrumbs--text-height` | `var(--sf-text-height-1)` | `--sf-breadcrumbs-item-container--line-height`, `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width`, `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-breadcrumbs--text-size` | `var(--sf-text-size-1)` | `--sf-breadcrumbs-item-container--font-size` |
| `--sf-breadcrumbs-item--background-color` | не задана; задают модификаторы, например `.sf-breadcrumbs-item`: `transparent` | `background-color` |
| `--sf-breadcrumbs-item--box-shadow` | не задана; задают модификаторы, например `.sf-breadcrumbs-item`: `none` | `box-shadow` |
| `--sf-breadcrumbs-item-container--background-color` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `transparent` | `background-color` |
| `--sf-breadcrumbs-item-container--color` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-breadcrumbs-color, var(--sf-on-surface-variant))` | `color` |
| `--sf-breadcrumbs-item-container--font-family` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-text--family)` | `font-family` |
| `--sf-breadcrumbs-item-container--font-size` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-breadcrumbs--text-size, var(--sf-text-size-1/2))` | `font-size` |
| `--sf-breadcrumbs-item-container--font-weight` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-breadcrumbs-item-container--gap` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-space-1/4)` | `gap` |
| `--sf-breadcrumbs-item-container--line-height` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-breadcrumbs--text-height, var(--sf-text-height-1/2))` | `line-height` |

## См. также

- [Меню](/ru/components/navigation/menu/)
- [Ссылка](/ru/components/navigation/link/)
- [Хлебные крошки — смарт-компонент](/ru/smart/navigation/breadcrumbs/)
