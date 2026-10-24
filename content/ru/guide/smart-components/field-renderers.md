---
title: "Поля по типу свойства"
description: "Набор SF.fieldRenderers рисует значение свойства по его типу — для просмотра, правки, ячейки таблицы и фильтра — и получает изменения через хост."
---

# Поля по типу свойства

Свойство записи — строка, число, дата, выбор из списка, ссылка на запись,
файл, цвет — показывается одинаково везде, где оно встречается: в карточке
записи, в строке таблицы, в окне фильтра. За это отвечает один набор функций
отрисовки по типу свойства, `SF.fieldRenderers`. Набор не хранит данные и не
обращается к серверу: значение и ответы на запросы даёт вызывающий его
компонент или страница — хост.

## Что входит в набор

На каждый тип свойства у набора есть до четырёх режимов:

- **просмотр** — значение в карточке записи, без правки;
- **правка** — элемент формы, который меняет значение;
- **ячейка** — значение в строке таблицы;
- **фильтр** — элемент окна фильтра по этому свойству.

Таблица `<sf-table>` берёт из набора ячейки и фильтры, карточка записи
`<sf-property-view>` — просмотр и правку. Оба компонента входят в пакет
`larena` ([Представление данных](/ru/smart-components/content/table/),
[Представление свойств](/ru/smart-components/composite/property-view/)). Страница
вызывает те же функции сама, когда рисует поле без этих компонентов.

Набор публикуется на `window.SF.fieldRenderers`:

| Член | Что это |
|:---|:---|
| `renderViewField(field, value, host, options)` | шаблон просмотра |
| `renderEditField(field, value, host, options)` | шаблон правки |
| `renderCellField(field, value, host)` | содержимое ячейки таблицы |
| `renderFilterField(field, host)` | шаблон элемента фильтра |
| `FILTER_RENDERERS` | функции фильтра по типу и по имени элемента фильтра |
| `dateTime` | чтение и запись даты со временем: `split`, `compose`, `normalizeTime` |
| `registry` | список типов свойств с вариантами, параметрами и режимами |

## Когда набор доступен

У набора нет тега, поэтому разметка страницы его не загружает. Набор
публикуют файлы `<sf-table>`, `<sf-data-view>` и `<sf-property-view>` пакета
`larena`, которые несут свою копию, и отдельный файл выпуска
`smart/field-renderers/js/field-renderers.js` в базе Smart-компонентов
`SF.Loader.smartPath`.

`SF.whenFieldRenderers()` возвращает обещание, которое разрешается набором.
Если набора на странице ещё нет, функция один раз подключает его файл из базы
Smart-компонентов, а при `SF.Loader.minified` — файл с суффиксом `.min.js`.
Набор, опубликованный любым из этих файлов, отправляет на `document` событие
`sf-field-renderers-ready`, и обещание разрешается им. Подключать скрипт руками
и проверять появление набора по таймеру не нужно:

```js
const set = await SF.whenFieldRenderers();
```

`SF.whenFieldRenderers` есть на странице после запуска Loader; скрипт, который
выполняется раньше, сначала ждёт `await SF.ready`.

## Описание поля

Первый аргумент каждой функции — описание поля `field`, обычный объект. Тип
набор берёт из первого заданного ключа: `propertyType`, затем `type`, затем
`dataType`. Фильтр сначала смотрит на `filter.control` и без типа рисует
текстовый поиск. Остальные ключи набор читает так:

| Ключ | Что делает |
|:---|:---|
| `key` | имя поля; элемент формы получает `name` вида `sf_field_<key>`, фильтр — `sf_filter_<key>` |
| `label` | подпись: `aria-label` или `label` элемента правки, подпись цвета |
| `variant` | вариант типа: `phone` и `password` у строки, `scale` у числа, `badges` у нескольких значений, `image`, `image-card`, `image-list` у файла |
| `options` | варианты выбора: `{value, label}`, вместо `label` допустим `text`; цвет метки — `color` или `scheme` (схема Framework или hex). Если `options` нет, набор берёт `filter.options`, затем `constraints.options` |
| `required` | атрибут `required` элемента правки у строки, текста, числа, даты, выбора из списка, выбора записи и кода; у логического поля — переключатель вместо пары кнопок; у цвета запрещает очистку |
| `readonly` | `true` у любого типа: `renderEditField` возвращает то же, что просмотр, а не выключенный элемент формы |
| `unit` | единица после числа в просмотре |
| `placeholder` | подсказка в пустой строке, тексте и выборе записи |
| `searchPlaceholder` | подсказка поиска в выборе записи |
| `multiple` | у файла — несколько файлов |
| `accept`, `formats`, `uploadText`, `uploadHint`, `uploadSupportingText` | ограничения и тексты зоны загрузки файла |
| `swatches` | палитра цвета: образцы в правке и варианты фильтра |
| `inheritedValue` | цвет, унаследованный от темы, пока свой не выбран |
| `trueText`, `falseText` | слова «да» и «нет» логического поля; также `labels.true` и `labels.false` |
| `badgeAppearance` | вид метки варианта в просмотре и ячейке, по умолчанию `tonal` |
| `language` | язык кода у типа `include`, атрибут `data-language` |
| `filter` | настройки фильтра: `control`, `operators`, `defaultOperator`, `options`, `searchable`, `optionRenderer` |

Из `constraints` набор читает только `constraints.options`.

## Значения по типам

Второй аргумент — значение поля. Простое значение можно передать как
`{value, text}`: `value` — данные, `text` — их запись, уже отформатированная
хостом; просмотр показывает `text`. Числу шкалы нужен сам `value`.

| Тип | Значение |
|:---|:---|
| `string`, `text`, `include` | строка; у варианта `password` — `{set: true}` или `{set: false}`, сам пароль хост не передаёт |
| `integer`, `number` | число; у варианта `scale` — от 0 до 100, иначе значение остаётся текстом |
| `date` | строка даты `ГГГГ-ММ-ДД` или даты со временем; правка меняет день и сохраняет время |
| `datetime` | дата и время ISO 8601: `2026-11-15T10:30:00`, с секундами, долями секунды и часовым поясом или без них; одна дата `ГГГГ-ММ-ДД` тоже читается |
| `boolean` | `true` или `false`; отсутствие значения — «не задано» |
| `choice` | значение одного из `options` |
| `choices` | массив значений из `options`; в ячейке варианта `badges` элемент может быть `{value, text}` |
| `user` | `{value, label, avatarText, href}` |
| `record`, `relation` | `{value, label, href}`; `href` — только когда запись можно открыть |
| `lookup` | `{value, label}`, при `multiple` — массив таких объектов; из значения ничего не открывается |
| `file` | `{label, mime, href, size}` или массив таких объектов; вместо `label` допустим `name`, вместо `mime` — `mimeType`; ячейке нужен `label` |
| `color` | строка цвета, например `#1d4ed8` |

Имена людей и записей хост передаёт уже готовыми: набор не превращает
идентификатор в название.

## Что возвращают функции

`renderViewField(field, value, host, options)` возвращает шаблон lit. Когда
показывать нечего, он возвращает `SF.nothing`, а когда у типа нет просмотра —
`null`. Аргумент `host` необязателен.

`renderEditField(field, value, host, options)` возвращает шаблон lit или
`null`: у типа нет правки или у хоста нет `setFieldValue`. Для поля с
`readonly: true` он возвращает шаблон просмотра. Выбор записи
(`user`, `record`, `relation`) возвращает `null`, пока хост не умеет отдавать
кандидатов (`getFieldOptionsPage` и `loadFieldOptions`) или ответил, что не
отдаёт их (`status: 'unsupported'`).

Шаблон рисуется в контейнер страницы функцией `SF.render(template, container)`.
`options.size` — ступень элементов: `'1/2'` или, по умолчанию, `'1'`. В
просмотре она задаёт строку (`line`) меток, ссылок и аватаров.

В просмотре поля `choices` каждое значение — метка `<sf-tag>` во всю ширину
своего текста. Если меток больше, чем помещается в строку, они переносятся на
следующие строки, а не сжимаются: поле с сотней значений остаётся читаемым в
узкой колонке. Сворачивать длинный список просмотр не умеет — в карточке
записи поле в просмотре само служит кнопкой, которая открывает правку его
группы, а кнопка не может содержать другой элемент управления.

Правка поля `choices` зависит от длины списка. До 12 вариантов это выпадающий
список с несколькими отметками; от 13 — список флажков, в две колонки там, где
поле достаточно широкое, и в одну, где нет: так выбранное видно целиком, а
длинный список не прокручивается внутри прокрутки. Вариант поля задаёт вид
явно при любой длине: `variant: 'checklist'` — флажки, `variant: 'select'` —
выпадающий список.

Дата со временем (`datetime`) правится в одной строке двумя полями: день —
`<sf-datepicker>`, время — `<sf-input>` с маской `чч:мм`. Оба поля того же
размера, что и остальные, внутри группы с именем поля; у каждого своё
доступное имя — «Начало: дата» и «Начало: время». Время можно ввести и без
маски: `930`, `9:30` и `9.30` читаются как `09:30`.

- Поле, которого не касались, ничего не передаёт.
- Новый день сохраняет прежнее время записи вместе с секундами и часовым
  поясом; новое время записывается с точностью до минуты (`чч:мм:00`) и с
  прежним поясом; новое значение — без пояса, то есть местное время хоста.
- Оба очищенных поля передают `null`; вернувшись к прежним дню и времени,
  поле передаёт `undefined` — изменения нет.
- День без времени, время без дня и время не в виде `чч:мм` — ошибка поля:
  сообщение («Укажите время», «Укажите дату») встаёт под строкой, поле, в
  котором ошибка, получает `invalid`, а когда ошибку исправят — теряет его.
  Хост получает `setFieldValue(field, undefined)`, поэтому сохранение не
  унесёт незаконченное значение, и, если умеет, `setFieldError(field,
  message)`; когда ошибку исправили — `setFieldError(field, null)`.

Хост, который рисует пару полей сам, читает и пишет значение теми же
функциями `SF.fieldRenderers.dateTime`:

| Функция | Что делает |
|:---|:---|
| `split(value)` | разбирает значение на `{date, time, rest, zone, known}`; `known: false` — значение не дата со временем |
| `compose(stored, {date, time})` | собирает значение для записи: `{value}` или `{error}` — `dateMissing`, `dateInvalid`, `timeMissing`, `timeInvalid` |
| `normalizeTime(text)` | время в виде `чч:мм`, пустая строка для пустого ввода или `null`, если это не время |

```js
const {split, compose} = SF.fieldRenderers.dateTime;
const stored = split('2026-11-15T10:30:00+03:00');
compose(stored, {date: '2026-11-16', time: '10:30'});
// {value: '2026-11-16T10:30:00+03:00'}
compose(stored, {date: '2026-11-16', time: ''});
// {error: 'timeMissing'}
```

Строка с вариантом `password` — пароль, который набор никогда не показывает.
Хост передаёт не пароль, а признак `{set: true}` или `{set: false}`; `null` и
отсутствие значения читаются как «не задан». Просмотр, ячейка и поле с
`readonly: true` показывают только «Задан» или «Не задан» на языке страницы.
Правка — пустое поле пароля (`autocomplete="new-password"`) с кнопкой
«Показать пароль», которая переключает видимость введённого текста. Если
пароль задан, подсказка в поле говорит, что новый пароль заменит его, а
`required` не действует: пустое поле оставляет заданный пароль. Набор вызывает
`setFieldValue` только когда человек вводит текст; поле, которого не касались,
ничего не передаёт, поэтому сохранение не очищает и не повторяет пароль.
Очистить заданный пароль через это поле нельзя.

```js
const set = await SF.whenFieldRenderers();
const changes = {};
const host = {
  setFieldValue(field, value) {
    // undefined: человек стёр ввод — ключ в сохранение не попадает.
    if (value === undefined) delete changes[field.key];
    else changes[field.key] = value;
  },
};
const field = {key: 'secret', label: 'Пароль хранилища', propertyType: 'string', variant: 'password'};
SF.render(set.renderEditField(field, {set: true}, host), document.querySelector('#secret'));
```

`renderCellField(field, value, host)` возвращает содержимое ячейки в том же
виде, в каком его передаёт таблице хост: строку, объект
`{component: {type, props}}` или массив таких значений; цвет и код — шаблоном
lit. `null` значит «показать значение как есть». Элементы ячейки берут строку
`1/2`, а не размер, чтобы не поднимать высоту строки таблицы.

`renderFilterField(field, host)` возвращает шаблон элемента фильтра.
`FILTER_RENDERERS` хранит те же функции по ключу: по типу свойства и по
именам элементов фильтра `range`, `date-range`, `multi-select`,
`single-select`, `entity-multi-select`, `entity-single-select`.

## Хост и изменения

Набор не отправляет своих событий. Элемент правки слушает событие `change`
своего элемента формы (у строки, текста, числа и кода — ещё `input`) и вызывает
`host.setFieldValue(field, value)`. Хост сохраняет значение и сам решает,
когда рисовать поле заново.

| Тип | Что получает `setFieldValue` |
|:---|:---|
| `string`, `text`, `include` | строку; у варианта `password` — введённый пароль или `undefined`, когда ввод стёрт |
| `integer`, `number` | число или `null`, когда поле очищено |
| `date` | строку даты; у даты со временем — с прежним временем |
| `datetime` | строку даты и времени ISO 8601, `null`, когда оба поля очищены, или `undefined`, пока ввод не закончен или вернулся к прежнему значению |
| `boolean` | `true` или `false`; необязательное поле — ещё `null` |
| `choice` | значение варианта |
| `choices` | массив значений |
| `user`, `record`, `relation` | `{value, label}` выбранной записи или `null` |
| `lookup` | `{value, label}` выбранного варианта или `null`; при `multiple` — массив |
| `file` | оставшиеся файлы после удаления: массив, один файл или `null` |
| `color` | строку цвета |

Остальные методы хоста необязательны, и каждый включает свою часть:

| Метод хоста | Для чего |
|:---|:---|
| `formatFieldValue(field, value)` | своя запись значения в просмотре и в ячейке даты и числа; строка или ничего |
| `getFieldText(key)` | свои слова набора: «Да», «Повторить», «Загрузить ещё» |
| `setFieldError(field, message)` | сообщение об ошибке поля, которое набор показал сам (дата со временем); `null` — ошибку исправили |
| `getFieldOptionsPage(field)` | страница кандидатов выбора записи: `{items, status, nextCursor}` |
| `loadFieldOptions(field, {cursor, search})` | запрос следующей страницы или поиска |
| `getFieldOptionSearch(field)`, `setFieldOptionSearch(field, text)` | строка поиска выбора записи |
| `startFieldUpload(field, items)`, `getFieldUploads(field)` | передача файлов; без обоих методов зоны загрузки нет |
| `retryFieldUpload(field, index)` | повтор загрузки файла |

Фильтр работает с другим хостом — с состоянием окна фильтра таблицы:
`getFilterControlValue(key)` и `patchTempFilterValue(key, {value, operator})`
для значения, `getFilterOperatorLabel(operator)` для слова оператора,
`getVisibleFilterOptions(field)` и `renderFilterOption(field, option)` для
списка вариантов, `getFilterOptionSearch(key)` и
`patchTempFilterOptionSearch(key, search)` для поиска по вариантам,
`getEndpointFilterPage(field)` и `loadEndpointFilterPage(field, cursor, search)`
для вариантов с сервера. `host.size` задаёт ступень элементов фильтра.

## Как вызвать

### Значение для чтения

```js
const set = await SF.whenFieldRenderers();
const field = {key: 'weight', label: 'Вес', propertyType: 'number', unit: 'кг'};
SF.render(set.renderViewField(field, 2.5), document.querySelector('#weight'));
```

### Поле для правки

```js
const values = {title: 'SIMAI: Платежи'};
const host = {
  setFieldValue(field, value) {
    values[field.key] = value;
  },
};
const field = {key: 'title', label: 'Название', propertyType: 'string', required: true};
SF.render(set.renderEditField(field, values.title, host, {size: '1/2'}), document.querySelector('#title'));
```

### Ячейка

```js
const status = {key: 'status', propertyType: 'choice', options: [
  {value: 'live', label: 'Опубликовано', color: 'success'},
]};
set.renderCellField(status, 'live');
// {component: {type: 'badge', props: {line: '1/2', text: 'Опубликовано', appearance: 'tonal', scheme: 'success'}}}
```

### Пример: просмотр, правка и ячейка

Страница получает набор через `SF.whenFieldRenderers()`, рисует четыре поля для просмотра и два для правки,
а под ними показывает, что получил хост, и содержимое ячейки:

:::example {id="guide/field-renderers/overview" label="Просмотр, правка и ячейка"}
:::

## Типы свойств

Таблица собирается из реестра выпуска — того же списка, что страница получает
в `SF.fieldRenderers.registry`: `node scripts/build-property-types-reference.mjs`.
Правка руками разойдётся с выпуском при первой же проверке.

Столбцы режимов: «Просмотр» и «Правка» — есть ли у типа своё отображение и свой
элемент правки; «Ячейка» и «Фильтр» — «своё», когда у набора есть для типа своя
функция, и «текстовый», когда её нет: ячейка показывает значение как есть, а
фильтр ищет по тексту.

| Тип | Название | Варианты | Параметры | Просмотр | Правка | Ячейка | Фильтр |
|:---|:---|:---|:---|:---|:---|:---|:---|
| `string` | Строка | `phone` — Телефон, `password` — Пароль | `placeholder`, `required`, `readonly` | есть | есть | своё | своё |
| `text` | Текст | — | `placeholder`, `required`, `readonly` | есть | есть | текстовый | своё |
| `integer` | Целое число | — | `unit`, `required`, `readonly` | есть | есть | своё | своё |
| `number` | Число | `scale` — Шкала 0–100 | `unit`, `required`, `readonly` | есть | есть | своё | своё |
| `date` | Дата | — | `required`, `readonly` | есть | есть | своё | своё |
| `datetime` | Дата и время | — | `required`, `readonly` | есть | есть | своё | своё |
| `boolean` | Да или нет | — | `trueText`, `falseText`, `required`, `readonly` | есть | есть | своё | своё |
| `choice` | Одно из списка | — | `options`, `badgeAppearance`, `required`, `readonly` | есть | есть | своё | своё |
| `choices` | Несколько из списка | `badges` — Значками, `checklist` — Флажками, `select` — Выпадающим списком | `options`, `badgeAppearance`, `required`, `readonly` | есть | есть | своё | своё |
| `user` | Пользователь | — | `placeholder`, `searchPlaceholder`, `required`, `readonly` | есть | есть | своё | своё |
| `record` | Запись | — | `placeholder`, `searchPlaceholder`, `required`, `readonly` | есть | есть | своё | своё |
| `relation` | Связь | — | `placeholder`, `searchPlaceholder`, `required`, `readonly` | есть | есть | своё | своё |
| `lookup` | Из справочника | — | `options`, `multiple`, `placeholder`, `searchPlaceholder`, `required`, `readonly` | есть | есть | своё | своё |
| `file` | Файл | `image` — Изображение, `image-card` — Изображение карточкой, `image-list` — Изображения списком | `accept`, `multiple`, `formats`, `uploadText`, `uploadSupportingText`, `uploadHint`, `readonly` | есть | есть | своё | своё |
| `color` | Цвет | — | `swatches`, `required`, `readonly` | есть | есть | своё | своё |
| `include` | Код | — | `language`, `required`, `readonly` | есть | есть | своё | текстовый |
