---
title: "Панель свойств письма"
description: "Заголовок с действиями, путь, вкладки, разделы и поля редактора писем, нарисованные из данных приложения."
---

# Панель свойств письма

`<sf-mail-inspector>` — правая панель редактора писем: заголовок с действиями,
путь, вкладки, разделы и все виды полей редактора. Это форма, нарисованная из
данных. Элемент не знает ни письма, ни хранилища, ни правил адресов и ничего не
проверяет: приложение передаёт всё на языке человека — значение, ошибку, подсказку
и заполнитель каждого поля, — слушает, что человек сделал, и передаёт форму обратно.

Компонент поставляется пакетом `larena` из репозитория `simai/ui-pro`
(SIMAI Pro, папка `components/`), а не выпуском Framework. Лицензия пакета —
PolyForm Small Business 1.0.0 или PolyForm Noncommercial 1.0.0, по запросу —
коммерческая лицензия SIMAI; в составе Larena — лицензия Larena. Как
подключить пакет — в разделе
[Подключение смарт-компонентов](/ru/guide/smart-components/page/#подключение-к-странице).

## Пример

:::example {id="smart-components/mail-inspector/overview" label="Кнопка: поля всех видов"}
:::

## Разметка

В разметке — только тег и атрибуты; данные передаёт скрипт свойствами на языке человека.

## Варианты

### Письмо: вкладки, поля на первой

:::example {id="smart-components/mail-inspector/letter" label="Письмо: вкладки, поля на первой"}
:::

### Элемент списка: путь и уровень выше

:::example {id="smart-components/mail-inspector/item" label="Элемент списка: путь и уровень выше"}
:::

## Применение

### Данные

```js
panel.setAttribute('heading', 'Кнопка');
panel.setAttribute('heading-icon', 'smart_button');
panel.setAttribute('form-key', 'b7');        // чья это форма: id блока
panel.headActions = ['duplicate', 'delete']; // или ['replace'] у шапки и подвала
panel.levels = [{text: 'Кнопка'}, {text: 'Расширенный'}];
panel.notice = {text: 'Причина получения и ссылка отписки — в параметрах письма.', action: 'Открыть параметры письма'};
panel.sections = [
  {key: 'button:content', title: 'Содержимое', fields: [
    {kind: 'text', path: '/text', label: 'Текст', value: 'Подробнее', required: true},
    {kind: 'link', path: '/url', label: 'Ссылка', value: 'htt', placeholder: 'https://', error: 'Нужен адрес https://'},
  ]},
  {key: 'button:look', title: 'Оформление', fields: [
    {kind: 'select', path: '/tone', label: 'Тон', value: '', options: [{value: '', text: '— нет —'}, {value: 'accent', text: 'Акцент'}]},
  ]},
];
```

Путь `path` — адрес поля, его несут события; элемент его не разбирает. Форму
передают новым массивом: так элемент узнаёт, что хост ответил.

### Поля

Общее: `kind`, `path`, `label`, `value`, `error`, `hint`, `placeholder`,
`required`, `disabled`.

| `kind` | Что это | Своё |
|:---|:---|:---|
| `text` | `sf-input` | `inputmode`, `inheritedValue`, `ariaLabel` |
| `multiline` | `sf-textarea`, растёт от двух строк до двенадцати | `inheritedValue`, `ariaLabel` |
| `link` | `sf-input` для адреса | как у `text` |
| `number` | `sf-input` с цифровой клавиатурой | как у `text`; `inputmode: 'decimal'` для цены |
| `select` | `sf-dropdown` | `options: [{value, text}]`; `value: ''` — выбор «ничего» |
| `switch` | `sf-switch` | `value` — логическое |
| `group` | поля под одним именем, цена например | `rows: [[поле, поле], [поле]]`; ряд из двух стоит парой |
| `image` | `sf-image-field` | `value: {value, label, mime, size, href}` или `null`, `accept`, `emptyText`, `ariaLabel`, `choices: [{value, text}]`, `chooseLabel`, `choosePlaceholder` |
| `items` | список на `sf-sortable` | `items: [{label, problem, fields}]`, `open`, `min`, `max` |

`hint` — настоящий текст под полем: так значение из бренда слышит и читатель
экрана. Значение из бренда у пустого поля — `inheritedValue`.

### Набранный текст

Значение элемент не проверяет: `change` несёт сырой текст. Если хост его не
принял, он передаёт в этом поле `error`, и поле хранит то, что набрал человек,
пока `error` не снят. Перерисовка не трогает поле, в котором человек печатает:
фокус и курсор остаются на месте, а поле, держащее фокус, не записывается вовсе.
Когда человек уходит из поля без ошибки, поле показывает значение хоста. Ожидать
набранное в `value` не нужно: хост, который хранит черновик дольше, чем живёт
форма (другой блок и обратно), передаёт его как `value` вместе с `error`.

`form-key` — чья это форма. Когда он меняется, форма рисуется заново, а набранное
для прежней пропадает, поэтому поле `/title` одного блока не достаётся другому.

### Разделы

Один раздел — это просто поля, без заголовка. У нескольких раскрытие — состояние
вида: элемент делает его сам, сообщает `toggle` и держит список закрытых в
`closedSections`. Память — по ключу раздела, поэтому ключ вроде `button:look`
помнит закрытие у всех кнопок; хост, который помнит дольше, передаёт список
обратно.

### Вкладки и панели хоста

`tabs: [{id, label, slot}]`, показанная — `tab`; выбор человека элемент записывает в `tab` сам и сообщает событием, а хост может назвать другую. Вкладка без `slot` показывает
форму (`sections`). Вкладка со `slot` показывает панель хоста: содержимое вкладок
«Бренд», «Картинки» и «Версии» — это не поля этого элемента, а панели редактора.

```html
<sf-mail-inspector id="panel">
  <div slot="brand" class="brand-panel">…</div>
</sf-mail-inspector>
```

Новую панель взамен передают через `panel.setSlot('brand', node)`.

### Путь и Escape

`levels` — путь сверху вниз, последний уровень — где человек сейчас. Два уровня и
больше рисуются путём; один не рисуется, у него есть заголовок. Escape в форме
просит уровень выше последнего: при одном уровне `index` равен `-1`, «выше того,
что нарисовано» (из блока — к параметрам письма). Без уровней Escape не
обрабатывается. Открытый список, меню, окно и перетаскивание забирают Escape себе.

### Изображение

Поле ничего не загружает. На `attach` хост сохраняет файл и передаёт сохранённый
`value`; если файл не подошёл — прежний `value` и `error`, и поле снова покажет
прежнее изображение. Обязательное изображение нельзя убрать: кнопка в поле есть,
поэтому элемент возвращает картинку и говорит почему, а события не шлёт.
Неподходящий формат элемент тоже объясняет сам. Выбор из `choices` — это `change`
со значением выбранного.

### События

| Событие | Когда | `detail` |
|:---|:---|:---|
| `change` | поле; `typed` — набрано с клавиатуры. Имя родное, отправляется на самом элементе; собственные `input` и `change` полей наружу не выходят | `{path, value, typed}` |
| `sf-mail-inspector-attach` | файл выбран или брошен на изображение | `{path, files}` |
| `sf-mail-inspector-detach` | «Убрать» у необязательного изображения | `{path}` |
| `sf-mail-inspector-toggle` | раздел открыт или закрыт | `{key, open}` |
| `sf-mail-inspector-level` | нажатие на пути, Escape | `{index}` |
| `sf-mail-inspector-tab` | выбрана вкладка | `{id}` |
| `sf-mail-inspector-notice-action` | кнопка сообщения | `{}` |
| `sf-mail-inspector-duplicate` | «Дублировать» у заголовка | `{}` |
| `sf-mail-inspector-delete` | «Удалить» у заголовка | `{}` |
| `sf-mail-inspector-replace` | «Сменить вариант…» у заголовка | `{}` |
| `sf-mail-inspector-item-toggle` | раскрытие элемента; хост передаёт `open` обратно | `{path, index, open}` |
| `sf-mail-inspector-item-add` | «Добавить элемент» | `{path}` |
| `sf-mail-inspector-item-move` | перетаскивание, Alt+стрелки, ⋯ | `{path, from, to}` |
| `sf-mail-inspector-item-duplicate` | «Дублировать» под ⋯ | `{path, index}` |
| `sf-mail-inspector-item-delete` | «Удалить» под ⋯ | `{path, index}` |

### Действия

| Действие | Что делает | Ответ |
|:---|:---|:---|
| `duplicate`, `delete`, `replace` | как кнопка у заголовка | `applied`; `refused unknown` |
| `level-up` | как Escape | `applied`; `refused top` |
| `go-to-level {index}` | как нажатие на пути | `applied`; `refused unknown` |
| `open-tab {id}` | просит вкладку | `applied`; `refused unknown` |
| `toggle-section {key}` | как заголовок раздела | `applied`; `refused unknown` |
| `item-toggle {path, index}` | как раскрытие элемента | `applied`; `refused unknown` |
| `item-add {path}` | как «Добавить элемент» | `applied`; `refused unknown`, `full` |
| `item-move {path, index, to}` или `{path, index, by}` | просит переместить | `applied`; `refused unknown`, `unchanged` |
| `item-duplicate {path, index}` | просит копию | `applied`; `refused unknown`, `full` |
| `item-delete {path, index}` | просит удалить | `applied`; `refused unknown`, `least` |
| `focus-item {path, index}` | ставит фокус на элемент после отрисовки | `applied`; `refused unknown` |

## Доступность

На раскрытии элемента Enter и пробел открывают его, Alt+стрелки двигают (и говорят
позицию строкой состояния), Shift+F10 открывает ⋯. После действия со списком фокус
встаёт на изменившийся элемент, когда хост передал список обратно. У ⋯ имя
«Действия с элементом: <название>», поэтому два элемента не звучат одинаково.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-7153f7a9c092` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-mail-inspector>` |
| Назначение | Правая панель SIMAI Email Editor как форма, нарисованная из данных: заголовок с действиями, путь уровней, вкладки, раскрывающиеся разделы и все поля редактора. Хост передаёт форму на языке человека, включая значение, ошибку, подсказку и заполнитель каждого поля; элемент сообщает, что сделал человек, и ничего не меняет. Набранный текст, который хост не принял, переживает перерисовку, а перерисовка никогда не уводит фокус и курсор из поля, где человек печатает. |
| Контракт | `smart.mail-inspector`, версия `1.0.0` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `heading` — `string`, по умолчанию пусто. Что редактируется, на языке человека: заголовок панели.
- `heading-icon` — `string`, по умолчанию пусто. Иконка перед заголовком.
- `form-key` — `string`, по умолчанию пусто. Чья это форма (например, id блока). Когда он меняется, форма рисуется заново, а текст, набранный для прежней, пропадает.
- `tab` — `string`, по умолчанию пусто. Показанная вкладка, по id; пусто — первая.
- `levels` — `array` из `object`, по умолчанию `[]`. Путь сверху вниз: [{text}], последний уровень — где человек сейчас. Два и больше рисуются путём. Один не рисуется, но Escape всё равно просит то, что над ним.
- `head-actions` — `array`, по умолчанию `[]`. Действия рядом с заголовком, по порядку: любые из duplicate, delete, replace.
- `notice` — `object`, по умолчанию `{}`. Строка под заголовком: {text, action}. С action у неё есть кнопка с этим названием, которая отправляет notice-action.
- `tabs` — `array` из `object`, по умолчанию `[]`. Вкладки: {id, label, slot}. Вкладка со slot показывает панель хоста из этого слота; без него — форму (sections). Пусто — форма без вкладок.
- `sections` — `array` из `object`, по умолчанию `[]`. Форма: {key, title, fields}. Одному разделу раскрытие не нужно, его поля стоят сами по себе. Поле — {kind, path, label, value, error, hint, placeholder, required, disabled, ...}; каждый вид описан в x-registry.contracts.field.
- `closed-sections` — `array`, по умолчанию `[]`. Ключи разделов, которые закрыл человек. Элемент обновляет список сам; хост, который помнит дольше, передаёт его обратно. Ключ, общий для двух форм, помнится в обеих.

### Методы

- `duplicate()` — возвращает `object`. то же, что «Дублировать»; refused unknown, если head-actions этого не предлагает
- `delete()` — возвращает `object`. то же, что «Удалить»; refused unknown, если head-actions этого не предлагает
- `replace()` — возвращает `object`. то же, что «Сменить вариант…»; refused unknown, если head-actions этого не предлагает
- `levelUp()` — возвращает `object`. то же, что Escape; refused top без уровней
- `goToLevel(index: number)` — возвращает `object`. то же, что нажатие на пути; refused unknown
- `openTab(id: any)` — возвращает `object`. просит вкладку, как нажатие: отправляет tab, хост передаёт её обратно; refused unknown
- `toggleSection(key: any)` — возвращает `object`. открывает или закрывает раздел, как его заголовок; refused unknown
- `itemToggle(path: string, index: number)` — возвращает `object`. то же, что раскрытие элемента; refused unknown
- `itemAdd(path: string)` — возвращает `object`. то же, что «Добавить элемент»; refused unknown, full
- `itemMove(path: string, index: number, to: number, by: number)` — возвращает `object`. просит переместить элемент на место или на несколько шагов; refused unknown, unchanged
- `itemDuplicate(path: string, index: number)` — возвращает `object`. то же, что «Дублировать» под ⋯; refused unknown, full
- `itemDelete(path: string, index: number)` — возвращает `object`. то же, что «Удалить» под ⋯; refused unknown, least
- `focusItem(path: string, index: number)` — возвращает `object`. ставит фокус на раскрытие элемента после отрисовки; refused unknown без path

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `change` — `detail`: `{ path: string, value: string, typed: boolean }`. Теперь в этом поле это значение: {path, value, typed}.
- `sf-mail-inspector-attach` — `detail`: `{ path: string, files: array }`. Сохранить эти файлы для этого поля: {path, files}.
- `sf-mail-inspector-detach` — `detail`: `{ path: string }`. Убрать изображение этого поля: {path}.
- `sf-mail-inspector-toggle` — `detail`: `{ key: any, open: boolean }`. Этот раздел теперь открыт или закрыт: {key, open}.
- `sf-mail-inspector-level` — `detail`: `{ index: number }`. Перейти к этому уровню пути: {index}.
- `sf-mail-inspector-tab` — `detail`: `{ id: any }`. Выбрана эта вкладка: {id}.
- `sf-mail-inspector-notice-action` — ничего не передаёт. Нажата кнопка сообщения.
- `sf-mail-inspector-duplicate` — ничего не передаёт. Сделать копию того, что редактируется.
- `sf-mail-inspector-delete` — ничего не передаёт. Удалить то, что редактируется.
- `sf-mail-inspector-replace` — ничего не передаёт. Попросили другой вариант того, что редактируется.
- `sf-mail-inspector-item-toggle` — `detail`: `{ path: string, index: number, open: boolean }`. Открыть или закрыть этот элемент: {path, index, open}.
- `sf-mail-inspector-item-add` — `detail`: `{ path: string }`. Добавить элемент в этот список: {path}.
- `sf-mail-inspector-item-move` — `detail`: `{ path: string, from: number, to: number }`. Переместить элемент внутри списка: {path, from, to}.
- `sf-mail-inspector-item-duplicate` — `detail`: `{ path: string, index: number }`. Сделать копию этого элемента: {path, index}.
- `sf-mail-inspector-item-delete` — `detail`: `{ path: string, index: number }`. Удалить этот элемент: {path, index}.

### Доступность

- Роль: форма (`form`).
- Доступное имя: внутренний.
- Клавиши: `Tab`, `Escape`, `Enter`, `Space`, `Alt+ArrowUp`, `Alt+ArrowDown`, `Shift+F10`.
- Фокус: Перерисовка оставляет фокус и курсор в поле, где человек печатает. Раскрытие элемента — единственная остановка Tab этого элемента; ⋯ называется «Действия с элементом: <название>», поэтому два элемента не звучат одинаково. После действия со списком фокус переходит на изменившийся элемент, когда хост передал список обратно.

### Минимальная разметка

```html
<sf-mail-inspector id="panel" heading="Кнопка"></sf-mail-inspector> <script>panel.sections = [{key: 'content', title: 'Содержимое', fields: [{kind: 'text', path: '/text', label: 'Текст', value: 'Подробнее'}]}];</script>
```

### Источник

- `simai/ui-pro@86a389a5e6da8417b14a96a2aae65e155bb33137:components/src/smart/mail-inspector`
- `simai/ui-pro@86a389a5e6da8417b14a96a2aae65e155bb33137:components/src/smart/mail-inspector/rule.js#name=cl-mail-inspector`
