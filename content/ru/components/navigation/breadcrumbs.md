---
title: "Хлебные крошки"
description: "Показывает, где в иерархии сайта находится страница, и ведёт к родительским разделам."
profile: reference
---

# Хлебные крошки

Хлебные крошки показывают путь от главной страницы до текущей и дают перейти
на любой родительский уровень. Это вторичная навигация: она дополняет
[меню](/ru/components/navigation/menu/), а не заменяет его, и описывает
структуру сайта, а не историю переходов.

## Пример

:::example {id="components/breadcrumbs/overview" label="Путь до текущей страницы"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части:

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

### Вид пункта

Ссылка (`sf-breadcrumbs-item--link`) окрашена основным цветом. Пункт без
модификатора — приглушённый текст: так показывают уровень, у которого нет
своей страницы. Текущая страница с `aria-current="page"` набрана основным
цветом текста и средним начертанием. Разделитель отражается при письме справа
налево.

:::example {id="components/breadcrumbs/items" label="Ссылка, текст, текущая страница и разделитель"}
:::

### Иконка

Иконка ставится в `sf-breadcrumbs-item-container` перед подписью и берёт
высоту строки пункта. Главную часто показывают одной иконкой `home`; у такой
ссылки обязателен `aria-label`.

:::example {id="components/breadcrumbs/icon" label="Иконка без подписи и с подписью"}
:::

### Длинный путь

Если пунктов больше `data-max-items` (по умолчанию 4), скрипт сворачивает
середину пути в кнопку с многоточием; `data-expand-label` задаёт её
доступное имя (без него — английское «Show hidden breadcrumbs»). Нажатие
раскрывает весь путь. Значения меньше 3 выключают сворачивание.

:::example {id="components/breadcrumbs/long-path" label="Свёрнутая середина пути"}
:::

### Длинные подписи

Когда путь нельзя сокращать, задайте `data-max-items="0"`. Пункты переносятся
на следующую строку, длинная подпись переносится внутри пункта, и страница не
получает горизонтальной прокрутки.

:::example {id="components/breadcrumbs/long-labels" label="Перенос длинного пути"}
:::

## Состояния

Наведение и нажатие окрашивают ссылку и её иконку цветами `--sf-primary-hover`
и `--sf-primary-active`; эти состояния компонент показывает сам.

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

```js
document.querySelector('.sf-breadcrumbs').addEventListener('sf-breadcrumb-click', (event) => {
  console.log(event.detail.item.hiddenItems.map((item) => item.textContent.trim()));
});
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-breadcrumbs` |
| Части | `sf-breadcrumbs-item`, `sf-breadcrumbs-item--link`, `sf-breadcrumbs-item--separator`, `sf-breadcrumbs-item-container` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-breadcrumbs`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-breadcrumbs-item--background-color` | не задана; задают модификаторы, например `.sf-breadcrumbs-item`: `transparent` | `background-color` |
| `--sf-breadcrumbs-item--box-shadow` | не задана; задают модификаторы, например `.sf-breadcrumbs-item`: `none` | `box-shadow` |
| `--sf-breadcrumbs-item-container--background-color` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `transparent` | `background-color` |
| `--sf-breadcrumbs-item-container--color` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-breadcrumbs-item-container--font-family` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-text--family)` | `font-family` |
| `--sf-breadcrumbs-item-container--font-size` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-breadcrumbs-item-container--font-weight` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-breadcrumbs-item-container--gap` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-space-1/4)` | `gap` |
| `--sf-breadcrumbs-item-container--line-height` | не задана; задают модификаторы, например `.sf-breadcrumbs-item .sf-breadcrumbs-item-container`: `var(--sf-text-height-1/2)` | `line-height` |

## См. также

- [Меню](/ru/components/navigation/menu/)
- [Ссылка](/ru/components/navigation/link/)
- [Breadcrumbs — Smart-компонент](/ru/smart-components/navigation/breadcrumbs/)
