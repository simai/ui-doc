---
title: "Меню"
description: "Ведёт по разделам сайта: вертикально в боковой панели или строкой в шапке, с подменю."
profile: reference
---

# Меню

Меню ведёт по разделам сайта, раздела или личного кабинета и раскрывает
группы вложенных разделов. Один компонент показывается вертикально в боковой
панели, строкой в шапке или деревом документации. Для действий над
выбранным объектом берите [контекстное меню](/ru/components/navigation/context-menu/).

## Пример

:::example {id="components/menu/overview" label="Вертикальное меню"}
:::

## Разметка

Минимальную разметку показывает пример выше: список `<ul class="sf-menu">`
внутри `<nav>` с `aria-label`, пункты `<li class="sf-menu-item">`.

- Обычный пункт содержит ссылку `<a class="sf-menu-element">`.
- Ветка — пункт с вложенным `<ul class="sf-menu">` и текстом подписи прямо в
  `<li>`. Скрипт превращает подпись в кнопку раскрытия
  `sf-menu-element` со стрелкой, связывает её с подменю через
  `aria-expanded` и `aria-controls` и прячет закрытое подменю.
- Скрипт оборачивает подпись в `sf-menu-element-wrap` и
  `sf-menu-element-text` и ставит уровень `sf-menu-element--level-1` …
  `--level-4`; писать эти классы вручную не нужно.
- Атрибуты пункта: `icon="имя"` — иконка перед подписью, `trailing-icon="имя"`
  — своя иконка вместо стрелки ветки, `text="Текст"` — подпись, если её нет
  в разметке.
- Loader подключает меню по классу `sf-menu` вместе с иконками и кнопками с
  иконкой. Публичных методов и событий у компонента нет: состояние задаёт
  разметка.

## Варианты

### Вид

Без модификатора меню вертикальное — для боковой панели, каталога, настроек.
`sf-menu--horizontal` выстраивает первый уровень строкой — для основных
разделов в шапке; ставьте его только корневому списку.
`sf-menu--documentation-tree` — компактное дерево без рамок с отступом по
уровню, для навигации по документации.

:::example {id="components/menu/layouts" label="Вертикальное, горизонтальное и дерево документации"}
:::

### Подменю горизонтального меню

В горизонтальном меню подменю первого уровня открывается вниз, следующие —
в сторону; внутри все подменю вертикальные. Подменю, которое не помещается у
края экрана, сдвигается в свободную сторону. Открытие одного верхнего
раздела закрывает соседний, щелчок вне меню закрывает открытую ветку.
При письме справа налево направление раскрытия меняется само: оно задано
логическими сторонами. Пункты горизонтального меню не переносятся на вторую
строку: на узком экране показывайте те же пункты вертикальным меню в
выдвижной панели.

:::example {id="components/menu/horizontal" label="Горизонтальное меню с подменю"}
:::

### Уровни вложенности

Подменю — вложенный список `sf-menu`. Скрипт различает четыре уровня, пятый
и глубже оформляются как четвёртый; более глубокую структуру разделите на
несколько страниц или меню.

:::example {id="components/menu/nesting" label="Четыре уровня меню"}
:::

### Иконки

`icon` ставит иконку перед подписью пункта или ветки. `trailing-icon`
заменяет стрелку ветки своей иконкой.

:::example {id="components/menu/icons" label="Иконка пункта и своя иконка ветки"}
:::

### Счётчик и компактное меню

Счётчик строки — `.sf-badge` с `data-count` внутри `sf-menu-element-wrap`,
после `sf-menu-element-text`. Он стоит в конце строки, показывает `99+` после
порога, прячется при `0`, а его фраза завершает имя ссылки: «Входящие, 3
непрочитанных».

`sf-menu--compact` на корневом списке превращает меню в узкую колонку разделов
первого уровня: в строке видна только иконка или аватар, слова скрыты, но
остаются в имени ссылки. Счётчик переходит на иконку и встаёт в её верхний
угол так же, как [бейдж на якоре](/ru/components/feedback/badges/#бейдж-на-якоре)
шага `1`, с кольцом. Ветки в компактном меню не раскрываются. Компактная панель
[Admin Menu](/ru/smart-components/composite/admin-menu/) так же переносит
счётчик пункта на его иконку.

:::example {id="components/menu/compact" label="Счётчики в обычном и компактном меню"}
:::

## Состояния

### Текущий пункт

Ссылке текущей страницы добавьте `aria-current="page"`. Дерево документации
`sf-menu--documentation-tree` выделяет такой пункт фоном и начертанием;
вертикальное и горизонтальное меню его не выделяют, атрибут нужен экранному
диктору.

:::example {id="components/menu/state-current" label="Текущий пункт в дереве и в вертикальном меню"}
:::

### Открытая и недоступная ветка

Класс `open` на пункте-ветке открывает подменю при загрузке; дальше его
переключает скрипт. Атрибут или класс `disabled` на ветке запрещает её
раскрывать и приглушает подпись. Недоступную ссылку лучше убрать из
навигации.

:::example {id="components/menu/states" label="Текущий пункт, открытая и недоступная ветка"}
:::

## Доступность

- Оборачивайте меню в `<nav>` с `aria-label` или `aria-labelledby`. Не
  ставьте `role="menu"`: навигация остаётся списком ссылок.
- Ветка — кнопка с `aria-expanded` и `aria-controls`; скрипт держит их в
  актуальном состоянии.
- Текущей странице — `aria-current="page"`.

| Клавиша | Результат |
|:---|:---|
| `Enter` или `Пробел` на ветке | Открывает или закрывает подменю |
| `Escape` в горизонтальном меню | Закрывает текущую ветку и возвращает фокус на её кнопку |
| `Tab` | Переходит по ссылкам и веткам по порядку |

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-menu` |
| Части | `sf-menu-element`, `sf-menu-element--level-1`, `sf-menu-element--level-2`, `sf-menu-element--level-3`, `sf-menu-element--level-4`, `sf-menu-element-icon`, `sf-menu-element-text`, `sf-menu-element-wrap`, `sf-menu-item` |
| Модификаторы | `sf-menu--compact`, `sf-menu--documentation-tree`, `sf-menu--horizontal` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-menu`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-menu--gap` | не задана; задают модификаторы, например `.sf-menu.sf-menu--documentation-tree`: `var(--sf-space-1/4)` | `gap` |
| `--sf-menu-element--background-color` | не задана; задают модификаторы, например `.sf-menu-element`: `var(--sf-transparent)` | `background-color` |
| `--sf-menu-element--border-color` | не задана; задают модификаторы, например `.sf-menu-element`: `var(--sf-surface-container)` | `border-color` |
| `--sf-menu-element--border-width` | не задана; задают модификаторы, например `.sf-menu-element`: `var(--sf-px)` | `padding-top`, `padding-block-start`, `padding-bottom`, `padding-block-end`, `border-top-width`, `border-block-start-width`, `border-bottom-width`, `border-block-end-width`, `border-inline-start-width`, `border-inline-end-width` |
| `--sf-menu-element--color` | не задана; задают модификаторы, например `.sf-menu-element`: `var(--sf-on-surface)` | `color` |
| `--sf-menu-element--gap` | не задана; задают модификаторы, например `.sf-menu-element`: `var(--sf-space-1/3)` | `gap` |
| `--sf-menu-element--padding-bottom` | не задана; задают модификаторы, например `.sf-menu.sf-menu--documentation-tree .sf-menu-element`: `var(--sf-0)` | `padding-bottom`, `padding-block-end` |
| `--sf-menu-element--padding-inline-start` | не задана; задают модификаторы, например `.sf-menu-element--level-1`: `var(--sf-space-1)` | `padding-inline-start` |
| `--sf-menu-element--padding-right` | не задана; задают модификаторы, например `.sf-menu.sf-menu--documentation-tree .sf-menu-element`: `var(--sf-0)` | `padding-inline-end` |
| `--sf-menu-element--padding-top` | не задана; задают модификаторы, например `.sf-menu.sf-menu--documentation-tree .sf-menu-element`: `var(--sf-0)` | `padding-top`, `padding-block-start` |
| `--sf-menu-element--radius` | не задана; задают модификаторы, например `.sf-menu-element`: `var(--sf-radius--ui)` | `border-start-start-radius`, `border-start-end-radius`, `border-end-start-radius`, `border-end-end-radius` |
| `--sf-menu-item--background-color` | не задана; задают модификаторы, например `.sf-menu .sf-menu-item`: `transparent` | `background-color` |
| `--sf-menu-item--gap` | не задана; задают модификаторы, например `.sf-menu .sf-menu-item`: `var(--sf-space-1/3)` | `gap` |

## См. также

- [Контекстное меню](/ru/components/navigation/context-menu/)
- [Хлебные крошки](/ru/components/navigation/breadcrumbs/)
- [Admin Menu — Smart-компонент](/ru/smart-components/composite/admin-menu/)
