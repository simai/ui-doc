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
выполняется до запуска Loader, ждёт событие `sf-loader-init` на `window`.

## Описание поля

Первый аргумент каждой функции — описание поля `field`, обычный объект. Тип
набор берёт из первого заданного ключа: `propertyType`, затем `type`, затем
`dataType`. Фильтр сначала смотрит на `filter.control` и без типа рисует
текстовый поиск. Остальные ключи набор читает так:

| Ключ | Что делает |
|:---|:---|
| `key` | имя поля; элемент формы получает `name` вида `sf_field_<key>`, фильтр — `sf_filter_<key>` |
| `label` | подпись: `aria-label` или `label` элемента правки, подпись цвета |
| `variant` | вариант типа: `phone` у строки, `scale` у числа, `badges` у нескольких значений, `image`, `image-card`, `image-list` у файла |
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
| `string`, `text`, `include` | строка |
| `integer`, `number` | число; у варианта `scale` — от 0 до 100, иначе значение остаётся текстом |
| `date`, `datetime` | строка даты `ГГГГ-ММ-ДД` или даты со временем; правка меняет день и сохраняет время |
| `boolean` | `true` или `false`; отсутствие значения — «не задано» |
| `choice` | значение одного из `options` |
| `choices` | массив значений из `options`; в ячейке варианта `badges` элемент может быть `{value, text}` |
| `user` | `{value, label, avatarText, href}` |
| `record`, `relation` | `{value, label, href}`; `href` — только когда запись можно открыть |
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
| `string`, `text`, `include` | строку |
| `integer`, `number` | число или `null`, когда поле очищено |
| `date`, `datetime` | строку даты; у даты со временем — с прежним временем |
| `boolean` | `true` или `false`; необязательное поле — ещё `null` |
| `choice` | значение варианта |
| `choices` | массив значений |
| `user`, `record`, `relation` | `{value, label}` выбранной записи или `null` |
| `file` | оставшиеся файлы после удаления: массив, один файл или `null` |
| `color` | строку цвета |

Остальные методы хоста необязательны, и каждый включает свою часть:

| Метод хоста | Для чего |
|:---|:---|
| `formatFieldValue(field, value)` | своя запись значения в просмотре и в ячейке даты и числа; строка или ничего |
| `getFieldText(key)` | свои слова набора: «Да», «Повторить», «Загрузить ещё» |
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
| `string` | Строка | `phone` — Телефон | `placeholder`, `required`, `readonly` | есть | есть | текстовый | своё |
| `text` | Текст | — | `placeholder`, `required`, `readonly` | есть | есть | текстовый | своё |
| `integer` | Целое число | — | `unit`, `required`, `readonly` | есть | есть | своё | своё |
| `number` | Число | `scale` — Шкала 0–100 | `unit`, `required`, `readonly` | есть | есть | своё | своё |
| `date` | Дата | — | `required`, `readonly` | есть | есть | своё | своё |
| `datetime` | Дата и время | — | `required`, `readonly` | есть | есть | своё | своё |
| `boolean` | Да или нет | — | `trueText`, `falseText`, `required`, `readonly` | есть | есть | своё | своё |
| `choice` | Одно из списка | — | `options`, `badgeAppearance`, `required`, `readonly` | есть | есть | своё | своё |
| `choices` | Несколько из списка | `badges` — Значками | `options`, `badgeAppearance`, `required`, `readonly` | есть | есть | своё | своё |
| `user` | Пользователь | — | `placeholder`, `searchPlaceholder`, `required`, `readonly` | есть | есть | своё | своё |
| `record` | Запись | — | `placeholder`, `searchPlaceholder`, `required`, `readonly` | есть | есть | своё | своё |
| `relation` | Связь | — | `placeholder`, `searchPlaceholder`, `required`, `readonly` | есть | есть | своё | своё |
| `file` | Файл | `image` — Изображение, `image-card` — Изображение карточкой, `image-list` — Изображения списком | `accept`, `multiple`, `formats`, `uploadText`, `uploadSupportingText`, `uploadHint`, `readonly` | есть | есть | своё | своё |
| `color` | Цвет | — | `swatches`, `required`, `readonly` | есть | есть | своё | своё |
| `include` | Код | — | `language`, `required`, `readonly` | есть | есть | своё | текстовый |
