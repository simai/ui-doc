---
title: "Smart-загрузка файлов"
description: "Зона выбора и перетаскивания файлов со списком выбранных файлов, прогрессом и ошибками передачи."
---

# Smart-загрузка файлов

`<sf-file-upload>` — зона, где пользователь выбирает файлы в системном окне
или перетаскивает их, и список выбранных файлов с прогрессом и состоянием
передачи. Компонент собирает разметку
[загрузки файлов](/ru/components/forms/file-upload/) из атрибутов. Сами файлы
он не отправляет: передачу и проверку выполняет приложение.

## Пример

:::example {id="smart-components/file-upload/overview" label="Результат"}
:::

## Применение

### Тексты зоны

`link-text` — выделенная часть приглашения, `text` — его продолжение.
Без них компонент пишет приглашение на языке страницы. `supporting-text` —
строка под приглашением; без неё компонент выводит `formats`, а без `formats`
собирает список из `accept`. Если не задано ни то ни другое, строки с
форматами нет: какие файлы принимает поле, компонент сам не знает. `icon`
меняет значок зоны; нейтральное значение по умолчанию — `upload_file`.

### Какие файлы и сколько

`accept` передаётся системному окну выбора и сужает список файлов в нём. Из
перетащенных файлов компонент оставляет те, что названы в `accept`, а
остальные сообщает событием `sf-file-upload:reject`. Размер файла и его
содержимое проверяйте в приложении и на сервере. `multiple` разрешает выбрать несколько
файлов; без него из перетащенных берётся первый. Новый выбор заменяет список
файлов.

:::example {id="components/file-upload/smart-selection" label="Результат"}
:::

### Размер

`size` выбирает ступень размерной шкалы: `1/2`, `1` или `2`. Зона и строки
файлов меняются вместе.

:::example {id="components/file-upload/smart-sizes" label="Результат"}
:::

### Передача и состояния файлов

Выбор пользователя отправляет событие `sf-file-upload:select` с
`event.detail.files` — массивом элементов списка — и `event.detail.source`:
`input` для системного окна, `drop` для перетаскивания. В каждом элементе
поле `file` — выбранный объект `File`, `name` и `fileSize` — подпись строки,
`progress` от 0 до 100 и `state`: `process`, `done` или `error`. `getItems()`
возвращает текущий список. Нативное событие `change` всплывает только при
выборе в системном окне, поэтому для обоих путей подписывайтесь на
`sf-file-upload:select`.

Ход передачи приложение показывает через `setItems()`: для ошибки задайте
`state: 'error'` и текст кнопки повтора в `errorMessage`. Переход файла в
`done` отправляет `sf-file-upload:file-complete`, в `error` —
`sf-file-upload:file-error`; когда в состоянии `done` все файлы, приходит
`sf-file-upload:complete`. События считаются по разнице с прошлым списком, поэтому
передавайте в `setItems()` новые объекты, а не изменённые старые.

:::example {id="components/file-upload/smart-states" label="Результат"}
:::

### Удаление и повтор

Кнопки в строке файла удаляют файл из списка и повторяют передачу с ошибкой.
Компонент отправляет `sf-file-upload:remove` и `sf-file-upload:retry` с
`detail.item`, `detail.index` и `detail.items`, а повтор возвращает файл в
состояние `process` с нулевым прогрессом. Сам запрос отменяет и повторяет
приложение. `removeItem(index)` и `clear()` убирают файлы из списка из кода
без событий.

### Недоступность и оформление

`disabled` выключает выбор и перетаскивание, убирает зону из порядка `Tab` и
выключает кнопки в строках; список при этом сохраняется. `root-class`
добавляет зоне утилиты Framework — поверхность, отступы, радиус — без своих
стилей.

:::example {id="components/file-upload/smart-disabled" label="Результат"}
:::

:::example {id="components/file-upload/smart-customization" label="Результат"}
:::

### Отправка файлов

Выбранные файлы не попадают в `FormData` формы: внутреннее поле выбора не
имеет имени и очищается после каждого выбора. Берите объекты `File` из
списка и отправляйте их своим запросом.

```js
const upload = document.querySelector('sf-file-upload');
upload.addEventListener('sf-file-upload:select', async (event) => {
  let items = event.detail.files;
  for (const [index, item] of items.entries()) {
    const body = new FormData();
    body.append('file', item.file);
    const ok = await fetch('/api/files', {method: 'POST', body}).then((response) => response.ok, () => false);
    items = items.map((entry, position) => (position === index
      ? {...entry, progress: 100, state: ok ? 'done' : 'error', errorMessage: 'Повторить'}
      : entry));
    upload.setItems(items);
  }
});
```

## Доступность

- Зона — кнопка с одной остановкой `Tab`; `Enter` или `Space` открывают
  системное окно выбора. Задайте ей `aria-label`, который называет действие,
  например «Выбрать документы»: текст приглашения сам имени не даёт.
- Кнопки удаления и повтора в строках — обычные кнопки со своими
  доступными именами; у недоступного компонента они выключены.
- Перетаскивание — не единственный способ: тот же выбор доступен с
  клавиатуры через системное окно.
- Сообщайте о завершении передачи текстом, например в области с
  `aria-live`, — смена значка в строке не объявляется.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-945c2ef505cc` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-file-upload>` |
| Назначение | Область перетаскивания, которая открывает файловый диалог платформы или принимает перетащенные файлы с фильтром по accept и показывает каждый файл с прогрессом загрузки, ошибкой с повтором и удалением. Загрузку выполняет хост; компонент показывает состояние, которое задаёт хост. |
| Контракт | `smart.file-upload`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-945c2ef505cc` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`.
- `size` — `string`, по умолчанию `1`, значения: `1/2`, `1`, `2`.
- `icon` — `string`, по умолчанию `upload_file`.
- `link-text` — `string`, по умолчанию пусто. Пусто — текст на языке страницы (по-английски «Click to upload»).
- `text` — `string`, по умолчанию `or drag and drop`.
- `formats` — `string`, по умолчанию пусто. Строка форматов под действием. Если не задана, выводится из `accept`; пуста, если не задано ни то ни другое: компонент не называет форматы, которые не может знать.
- `supporting-text` — `string`, по умолчанию пусто. Вспомогательная строка; по умолчанию берётся из formats.
- `accept` — `string`, по умолчанию пусто.
- `multiple` — `boolean`, по умолчанию `false`.
- `disabled` — `boolean`, по умолчанию `false`.
- `aria-label` — `string`, по умолчанию пусто.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `size="1/2"` | `size="1/3"` | работает и предупреждает | 2026-12-01 |
| `size="2"` | `size="3"` | работает и предупреждает | 2026-12-01 |

### Методы

- `getItems()` — возвращает `array` из `object`. Файлы списка в виде объектов пунктов.
- `setItems(items: array)` — возвращает `object`. Заменяет список этими пунктами (name, fileSize, state, progress, errorMessage). Возвращает элемент.
- `removeItem(index: number)` — возвращает `object`. Удаляет из списка пункт с этим индексом; индекс вне списка ничего не делает. Возвращает элемент.
- `clear()` — возвращает `object`. Очищает список. Возвращает элемент.
- `setState(state: object)` — возвращает `object`. Применяет несколько входных параметров сразу (size, icon, linkText, text, formats, supportingText, accept, multiple, disabled, items). Возвращает элемент.
- `onFileAdd(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload:file-add; обработчик получает событие. Возвращает элемент.
- `onFileError(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload:file-error; обработчик получает событие. Возвращает элемент.
- `onFileComplete(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload:file-complete; обработчик получает событие. Возвращает элемент.
- `onFileRemove(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload:remove; обработчик получает событие. Возвращает элемент.
- `onFileRetry(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload:retry; обработчик получает событие. Возвращает элемент.
- `onComplete(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload:complete; обработчик получает событие. Возвращает элемент.

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `change` — `detail`: `{ files?: array, source?: string }`. Выбраны файлы: при выборе — нативное событие от внутреннего поля выбора файла, при перетаскивании — CustomEvent от области (detail files и source 'drop'), поэтому форма узнаёт об обоих случаях.
- `sf-file-upload:complete` — `detail`: `{ items?: array }`. Все файлы обработаны.
- `sf-file-upload:file-add` — `detail`: `{ item?: object, index?: number, items?: array, source?: string, multiple?: boolean }`. Файл добавлен в список.
- `sf-file-upload:file-complete` — `detail`: `{ item?: object, index?: number, items?: array }`. Файл загружен.
- `sf-file-upload:file-error` — `detail`: `{ item?: object, index?: number, items?: array }`. Ошибка загрузки файла.
- `sf-file-upload:reject` — `detail`: `{ files?: array, accept?: string, source?: string }`. Перетащенные файлы, не указанные в списке accept, пропущены, как их не предложил бы и диалог платформы.
- `sf-file-upload:remove` — `detail`: `{ item?: object, index?: number, items?: array }`. Файл удалён из списка.
- `sf-file-upload:retry` — `detail`: `{ item?: object, index?: number, items?: array }`. Повторена загрузка файла с ошибкой.
- `sf-file-upload:select` — `detail`: `{ files?: array, source?: string, multiple?: boolean }`. Выбраны файлы для загрузки.

### Доступность

- Роль: кнопка (`button`).
- Доступное имя: рекомендуется.
- Клавиши: `Tab`, `Enter`, `Space`.
- Фокус: Включённая зона перетаскивания владеет фокусом выбора файлов; вложенные действия над файлами сохраняют нативную активацию. Используйте focus-visible и настоящий контур в режиме forced colors. Отключённые элементы управления выходят из порядка табуляции; повторное включение восстанавливает заданный tabindex.

### Минимальная разметка

```html
<sf-file-upload></sf-file-upload>
```

### Источник

- `simai/ui@945c2ef505cca268e423f9d67bf0eae0bc9cb7d9:distr/smart/file-upload`
- `simai/ui@945c2ef505cca268e423f9d67bf0eae0bc9cb7d9:distr/rule/rule.json#name=cl-file-upload`
