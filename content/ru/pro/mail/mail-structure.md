---
title: "Структура письма"
description: "Параметры письма, строки блоков в порядке письма и способ добавить блок; письмо меняет приложение."
---

# Структура письма

:badge[sf-mail-structure]{variant=outline scheme=on-surface size=1/2} :badge[1.0.6]{variant=outline scheme=on-surface size=1/2}

Структура показывает письмо в редакторе писем списком: параметры письма, по
строке на блок в порядке письма и способ добавить блок. Структура
`<sf-mail-structure>` не хранит письмо
и ничего в нём не меняет: он сообщает, о чём попросил человек, а приложение
выполняет и передаёт строки обратно.

**Компонент Pro.** Входит в [SIMAI Pro](/ru/pro/), а не в выпуск SIMAI
Framework: поставляется пакетом `pro` из репозитория `simai/ui-pro`.
Лицензия и подключение — на странице [Pro](/ru/pro/#лицензия).

## Пример

:::example {id="smart-components/mail-structure/overview" label="Выбран заголовок"}
:::

## Разметка

В разметке — только тег и атрибуты; данные передаёт скрипт свойствами на языке человека.

## Варианты

### Выбраны параметры письма

:::example {id="smart-components/mail-structure/settings" label="Выбраны параметры письма"}
:::

## Состояния

### Письмо без блоков

:::example {id="smart-components/mail-structure/empty" label="Письмо без блоков"}
:::

## Поведение

### Данные

```js
structure.rows = [
  {id: 'b1', title: 'Шапка · Логотип', icon: 'image', family: 'header'},
  {id: 'b2', title: 'Заголовок', summary: 'Осенняя рассылка', icon: 'title'},
  {id: 'b5', title: 'Подвал · Простой', icon: 'view_agenda', family: 'footer'},
];
structure.setAttribute('selected', 'b2');
structure.inserterItems = [{type: 'heading', label: 'Основа'}, {value: 'text', label: 'Текст', icon: 'notes'}];
```

`selected` пуст — выбраны параметры письма. Без `inserterItems` точек вставки
между строками нет.

### Шапка и подвал

Строка с `family` закреплена: у неё булавка вместо ручки, она не двигается, не
копируется и не удаляется, а действие отвечает `refused pinned` и говорит об
этом строкой состояния. Ничего не встаёт перед шапкой и после подвала: если
перетаскивание или вставка целятся туда, `index` в событии — ближайшее
разрешённое место. Если других блоков нет, карточка «Добавьте первый блок» стоит
перед подвалом, а отдельной строки «Добавить блок» нет.

### События

| Событие | Когда | `detail` |
|:---|:---|:---|
| `sf-mail-structure-select` | строка или параметры письма; пустой `id` — параметры, `keyboard` — выбрали клавишей | `{id, keyboard}` |
| `sf-mail-structure-move` | перетаскивание, Alt+стрелки, ⋯ | `{id, index}` |
| `sf-mail-structure-insert` | точка вставки между строками | `{type, index}` |
| `sf-mail-structure-add` | «Добавить блок»; место выбирает хост | `{}` |
| `sf-mail-structure-duplicate` | «Дублировать» под ⋯ | `{id}` |
| `sf-mail-structure-delete` | «Удалить» под ⋯, клавиша Delete | `{ids: [id], id}` |
| `sf-mail-structure-replace` | «Сменить вариант…» под ⋯ шапки или подвала | `{family}` |

### Действия

| Действие | Что делает | Ответ |
|:---|:---|:---|
| `select {id}` | выбирает, как строка | `applied`; `refused unknown` |
| `move {id, index}` или `{id, by}` | просит переместить | `applied`; `refused unknown`, `pinned`, `unchanged` |
| `insert {type, index}` | просит новый блок | `applied`; `refused unknown` |
| `add` | как «Добавить блок» | `applied` |
| `duplicate {id}` | просит копию | `applied`; `refused unknown`, `pinned` |
| `delete {id}` | просит удалить | `applied`; `refused unknown`, `pinned` |
| `replace {id}` | просит другой вариант места | `applied`; `refused unknown`, `not-pinned` |

## Доступность

Сначала строка параметров, затем список — одна остановка Tab на выбранной
строке. Стрелки, Home и End ходят по строкам; Enter и пробел выбирают; Alt+стрелки
двигают; Delete удаляет; Shift+F10 открывает ⋯. У ⋯ имя «Действия с блоком:
<название>», поэтому две строки не звучат одинаково. Выбранная строка отмечена
`aria-current`, а не только цветом.

## Справочник

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `selected` | строка | пусто | — | Выбранный блок; пусто — выбраны параметры письма. |
| `rows` | список: объект | `[]` | — | Блоки в порядке письма, по строке на блок: {id, title, summary, icon, family}. family отмечает место, которое есть в каждом письме (header, footer): оно не двигается, и за него ничего не встанет. |
| `inserter-items` | список: объект | `[]` | — | Виды, которые предлагает точка вставки между строками, в форме sf-sortable: {value, label, icon, caption, keywords} и {type: 'heading', label}. Пусто — точек вставки нет. |

#### Общие для всех компонентов

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `template` | строка | `default` | — | Имя шаблона отрисовки; `default` — встроенный. |
| `root-class` | строка | пусто | — | Свои CSS-классы для нарисованного элемента. |
| `root-style` | строка | пусто | — | Свои стили для нарисованного элемента, например `max-width: 20rem`. |

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `icon-start` — `iconStart`. Свойство атрибута `template` называется `templateName`.

### Методы

| Метод | Возвращает | Что делает |
|:---|:---|:---|
| `select(id: any)` | объект | Выбирает блок, как его строка; без id выбирает параметры письма; refused unknown для блока, которого нет в данных. |
| `move(id: any, index: number, by: number)` | объект | Переместить блок на index или на by шагов, оставаясь между закреплёнными местами; для места — refused pinned, unchanged, если он остался бы на месте. |
| `insert(type: any, index: number)` | объект | Просит новый блок, как точка вставки; для вида, которого нет в предложенных, — refused unknown. |
| `add()` | объект | Просит блок, как «Добавить блок». |
| `duplicate(id: any)` | объект | Просит копию блока; для места — refused pinned. |
| `delete(id: any)` | объект | Просит удалить блок: отправляет delete; для места — refused pinned. |
| `replace(id: any)` | объект | Просит другой вариант закреплённого места; для блока — refused not-pinned. |

### События

События приходят на сам элемент и всплывают; глаголы в именах — из [общего словаря](/ru/guide/smart-components/names/). Общие события базового элемента — в главе [Модель компонента](/ru/guide/smart-components/model/#базовый-интерфейс).

| Событие | `detail` | Когда приходит |
|:---|:---|:---|
| `sf-mail-structure-select` | `{ id: any, keyboard?: boolean }` | Выбран этот блок: {id, keyboard}. Пустой id — параметры письма. |
| `sf-mail-structure-move` | `{ id: any, index: number }` | Переместить этот блок в это место: {id, index}. |
| `sf-mail-structure-insert` | `{ type: any, index: number }` | Добавить в этом месте новый блок этого вида: {type, index}. |
| `sf-mail-structure-add` | пустой объект | Попросили блок; место выбирает приложение. |
| `sf-mail-structure-duplicate` | `{ id: any }` | Сделать копию этого блока: {id}. |
| `sf-mail-structure-delete` | `{ ids: array, id: any }` | Удалить этот блок: {ids: [id], id}. |
| `sf-mail-structure-replace` | `{ family: any }` | Попросили другой вариант этого места: {family}. |

### О компоненте

| | |
|:---|:---|
| Тег | `<sf-mail-structure>`, контракт `smart.mail-structure` версии `1.0.6` |
| Поставка | пакет `pro` (`SF_BOOT_CONFIG.packages.pro`) |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | Пробный: может измениться в следующих выпусках; работает только с приложением, подключённым через порт. |
| Доступность | Читается как список; название компонент ставит сам; с клавиатуры: `Tab`, `Enter`, `Пробел`, `↑`, `↓`, `Home`, `End`, `Alt+ArrowUp`, `Alt+ArrowDown`, `Delete`, `Shift+F10`. |
| Источник | `simai/ui-pro@2ba35fabb343d85550dde2fdd7964bd801cb1fdf:components/src/smart/mail-structure` |
| Правило классов | `simai/ui-pro@2ba35fabb343d85550dde2fdd7964bd801cb1fdf:components/src/smart/mail-structure/rule.js#name=cl-mail-structure` |
