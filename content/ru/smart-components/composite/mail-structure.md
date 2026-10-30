---
title: "Структура письма"
description: "Параметры письма, строки блоков в порядке письма и способ добавить блок; письмо меняет приложение."
---

# Структура письма

`<sf-mail-structure>` — структура письма в редакторе писем: параметры письма, по
строке на блок в порядке письма и способ добавить блок. Элемент не хранит письмо
и ничего в нём не меняет: он сообщает, о чём попросил человек, а приложение
выполняет и передаёт строки обратно.

Компонент поставляется пакетом `larena` из репозитория `simai/ui-pro`
(SIMAI Pro, папка `components/`), а не выпуском Framework. Лицензия пакета —
PolyForm Small Business 1.0.0 или PolyForm Noncommercial 1.0.0, по запросу —
коммерческая лицензия SIMAI; в составе Larena — лицензия Larena. Как
подключить пакет — в разделе
[Подключение смарт-компонентов](/ru/guide/smart-components/page/#подключение-к-странице).

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

## Применение

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

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-7153f7a9c092` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-mail-structure>` |
| Назначение | Структура письма в SIMAI Email Editor: параметры письма, по строке на блок и способ добавить блок. Строка выбирает, двигает, копирует и удаляет свой блок; точка между строками просит там новый блок; шапка и подвал закреплены. Элемент не хранит письмо и не меняет его; он сообщает, о чём попросил человек. |
| Контракт | `smart.mail-structure`, версия `1.0.0` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `selected` — `string`, по умолчанию пусто. Выбранный блок; пусто — выбраны параметры письма.
- `rows` — `array` из `object`, по умолчанию `[]`. Блоки в порядке письма, по строке на блок: {id, title, summary, icon, family}. family отмечает место, которое есть в каждом письме (header, footer): оно не двигается, и за него ничего не встанет.
- `inserter-items` — `array` из `object`, по умолчанию `[]`. Виды, которые предлагает точка вставки между строками, в форме sf-sortable: {value, label, icon, caption, keywords} и {type: 'heading', label}. Пусто — точек вставки нет.

### Методы

- `select(id: any)` — возвращает `object`. Выбирает блок, как его строка; без id выбирает параметры письма; refused unknown для блока, которого нет в данных.
- `move(id: any, index: number, by: number)` — возвращает `object`. Переместить блок на index или на by шагов, оставаясь между закреплёнными местами; для места — refused pinned, unchanged, если он остался бы на месте.
- `insert(type: any, index: number)` — возвращает `object`. Просит новый блок, как точка вставки; для вида, которого нет в предложенных, — refused unknown.
- `add()` — возвращает `object`. Просит блок, как «Добавить блок».
- `duplicate(id: any)` — возвращает `object`. Просит копию блока; для места — refused pinned.
- `delete(id: any)` — возвращает `object`. Просит удалить блок: отправляет delete; для места — refused pinned.
- `replace(id: any)` — возвращает `object`. Просит другой вариант закреплённого места; для блока — refused not-pinned.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-mail-structure-select` — `detail`: `{ id: any, keyboard?: boolean }`. Выбран этот блок: {id, keyboard}. Пустой id — параметры письма.
- `sf-mail-structure-move` — `detail`: `{ id: any, index: number }`. Переместить этот блок в это место: {id, index}.
- `sf-mail-structure-insert` — `detail`: `{ type: any, index: number }`. Добавить в этом месте новый блок этого вида: {type, index}.
- `sf-mail-structure-add` — ничего не передаёт. Попросили блок; место выбирает хост.
- `sf-mail-structure-duplicate` — `detail`: `{ id: any }`. Сделать копию этого блока: {id}.
- `sf-mail-structure-delete` — `detail`: `{ ids: array, id: any }`. Удалить этот блок: {ids: [id], id}.
- `sf-mail-structure-replace` — `detail`: `{ family: any }`. Попросили другой вариант этого места: {family}.

### Доступность

- Роль: список.
- Доступное имя: внутренний.
- Клавиши: `Tab`, `Enter`, `Space`, `ArrowUp`, `ArrowDown`, `Home`, `End`, `Alt+ArrowUp`, `Alt+ArrowDown`, `Delete`, `Shift+F10`.
- Фокус: Сначала строка параметров, затем список как одна остановка Tab на выбранной строке. ⋯ называется «Действия с блоком: <название>», поэтому две строки не звучат одинаково. Выбранная строка отмечена aria-current, а не только цветом.

### Минимальная разметка

```html
<sf-mail-structure id="structure"></sf-mail-structure> <script>structure.rows = [{id: 'b1', title: 'Заголовок', icon: 'title'}];</script>
```

### Источник

- `simai/ui-pro@86a389a5e6da8417b14a96a2aae65e155bb33137:components/src/smart/mail-structure`
- `simai/ui-pro@86a389a5e6da8417b14a96a2aae65e155bb33137:components/src/smart/mail-structure/rule.js#name=cl-mail-structure`
