---
title: "Загрузка файлов"
description: "Зона выбора и перетаскивания файлов со списком выбранных файлов, прогрессом и ошибками передачи."
---

# Загрузка файлов

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

`link-text` — слова ссылки в зоне («Выберите файл»), `text` — слова **после**
ссылки в той же строке («или перетащите его сюда»). `text` — не всё
приглашение и не заменяет `link-text`: заданный вместо всей фразы, он
встанет рядом со словами ссылки. Без этих атрибутов компонент пишет
приглашение на языке страницы. `supporting-text` —
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

### Элемент списка

Элемент списка — обычный объект. `getItems()` возвращает такие объекты,
`setItems()` принимает их, а каждое событие передаёт элемент в
`event.detail.item` вместе с его `index` и всем списком `items`. Из выбора
пользователя компонент сам собирает элементы этой формы и хранит в каждом
объект `File`.

| Ключ | Значение |
|:---|:---|
| `id` | Постоянный идентификатор элемента между вызовами `setItems()`: по нему смена состояния превращается в события `file-error`, `file-complete` и `complete`. Для выбранного файла это `<имя>-<размер>-<lastModified>`. Без `id` элемент узнаётся по файлу или по имени и позиции. |
| `name` (или `fileName`) | Имя файла в строке. Без обоих выводится `File`. |
| `fileSize` (или `sizeText`) | Размер уже готовым текстом, например `348KB`. Число компонент здесь не форматирует. |
| `progress` | От 0 до 100, выводится как задано: 100 не переводит элемент в `done`. |
| `state` (или `status`) | `process` — полоса прогресса, `done` — отметка готовности, `error` — кнопка повтора. |
| `errorMessage` (или `retryText`) | Подпись кнопки повтора у элемента в `error`. Без неё — «Повторить» или «Try again» по языку страницы. |
| `icon` | Значок строки; по умолчанию `cloud_upload`. |
| `file` | Сам объект `File` для передачи приложением. Компонент его не читает. |

Задавайте `state` и `progress` явно в каждом элементе, который передаёте в
`setItems()`. Передача, прогресс и проверка на сервере остаются за
приложением: оно меняет `progress` и `state` через `setItems()` по ходу своей
передачи.

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

### Подписка до регистрации элемента

`onFileAdd()` и другие методы `on…()` появляются, когда загрузчик
зарегистрировал элемент. На `<sf-file-upload>`, который ещё не
зарегистрирован, вызов падает с ошибкой `… is not a function`. Два способа
работают всегда:

```js
// 1. Событие: оно не требует метода и всплывает от элемента.
upload.addEventListener('sf-file-upload:file-add', (event) => add(event.detail.item));

// 2. Дождаться регистрации и затем вызывать методы.
await customElements.whenDefined('sf-file-upload');
upload.onFileAdd((event) => add(event.detail.item));
```

`sf-file-upload:file-add` приходит на каждый добавленный файл, а
`sf-file-upload:select` — один раз на весь выбор. Методам соответствуют
события `sf-file-upload:file-add`, `sf-file-upload:file-error`,
`sf-file-upload:file-complete`, `sf-file-upload:remove`,
`sf-file-upload:retry` и `sf-file-upload:complete`.

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

### Импорт в браузере без сервера

Файлы сохраняются в IndexedDB, а компонент показывает, что с каждым
произошло: выбор, проверка, сохранение и повтор после ошибки.

```js
const upload = document.querySelector('sf-file-upload');
const items = new Map(); // id → элемент

upload.addEventListener('sf-file-upload:file-add', async (event) => {
  const item = {...event.detail.item};
  items.set(item.id, item);
  await store(item);
});

upload.addEventListener('sf-file-upload:retry', (event) => {
  const item = items.get(event.detail.item.id);
  if (item) store({...item, state: 'process', progress: 0});
});

async function store(item) {
  const next = {...item, state: 'process', progress: 10};
  items.set(item.id, next);
  upload.setItems([...items.values()]); // полоса двигается
  try {
    if (item.file.size > 5 * 1024 * 1024) throw new Error('Файл больше 5 МБ');
    await put(item.id, item.file); // запись в IndexedDB
    items.set(item.id, {...next, state: 'done', progress: 100});
  } catch (error) {
    items.set(item.id, {...next, state: 'error', errorMessage: error.message});
  }
  upload.setItems([...items.values()]);
}
```

Кнопка повтора несёт текст `errorMessage`, поэтому причина и действие — один
элемент: человек читает, почему не получилось, и нажимает, чтобы повторить.

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

Раздел собран из манифеста компонента выпуска `ui-d6292bd6fc34` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-file-upload>` |
| Назначение | Область перетаскивания, которая открывает файловый диалог платформы или принимает перетащенные файлы с фильтром по accept и показывает каждый файл с прогрессом загрузки, ошибкой с повтором и удалением. Загрузку выполняет хост; компонент показывает состояние, которое задаёт хост. |
| Контракт | `smart.file-upload`, версия `1.1.5` |
| Поставка | выпуск Framework `ui-d6292bd6fc34` |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | описан: манифест и сценарий есть, продуктовой приёмки нет |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="block"`; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `size` — `string`, по умолчанию `1`, значения: `1/2`, `1`, `2`.
- `icon` — `string`, по умолчанию `upload_file`.
- `link-text` — `string`. Пусто — текст на языке страницы (по-английски «Click to upload»).
- `text` — `string`.
- `formats` — `string`, по умолчанию пусто. Строка форматов под действием. Если не задана, выводится из `accept`; пуста, если не задано ни то ни другое: компонент не называет форматы, которые не может знать.
- `supporting-text` — `string`, по умолчанию пусто. Вспомогательная строка; по умолчанию берётся из formats.
- `accept` — `string`, по умолчанию пусто.
- `multiple` — `boolean`, по умолчанию `false`.
- `disabled` — `boolean`, по умолчанию `false`.
- `aria-label` — `string`, по умолчанию пусто.
- `items` — `array`, по умолчанию `[]`. Файлы и их загрузки, записанные хостом: состояние каждой записи (process, done, error) и прогресс 0–100 — это её поток (§10.8)

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `size="1/2"` | `size="1/3"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `size="2"` | `size="3"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

### Методы

- `removeItem(index: number)` — возвращает `object`. Удаляет из списка пункт с этим индексом; индекс вне списка ничего не делает. Возвращает элемент.
- `clear()` — возвращает `object`. Очищает список. Возвращает элемент.
- `getItems()` — возвращает `array` из `object`. Файлы списка в виде объектов пунктов.
- `setItems(items: array)` — возвращает `object`. Заменяет список этими пунктами (name, fileSize, state, progress, errorMessage). Возвращает элемент.
- `setState(state: object)` — возвращает `object`. Применяет несколько входных параметров сразу (size, icon, linkText, text, formats, supportingText, accept, multiple, disabled, items). Возвращает элемент.
- `onFileAdd(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload-attached; обработчик получает событие. Возвращает элемент.
- `onFileError(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload-failed; обработчик получает событие. Возвращает элемент.
- `onFileComplete(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload-completed; обработчик получает событие. Возвращает элемент.
- `onFileRemove(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload-detach; обработчик получает событие. Возвращает элемент.
- `onFileRetry(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload-retry; обработчик получает событие. Возвращает элемент.
- `onComplete(handler: function, options?: object)` — возвращает `object`. Подписывается на sf-file-upload-finished; обработчик получает событие. Возвращает элемент.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `change` — `detail`: `{ files: array, source: any }`. Выбраны файлы: при выборе — нативное событие от внутреннего поля выбора файла, при перетаскивании — CustomEvent от области (detail files и source 'drop'), поэтому форма узнаёт об обоих случаях.
- `sf-file-upload-attach` — `detail`: `{ files: array, source: any, multiple: boolean }`. Выбраны файлы для загрузки. Имя по стандарту simai.smart-component 1.3.8 (словарь 1.1.5 §9.1); `sf-file-upload:select` отправляется после него с тем же detail до 2026-12-01 (aliases.json).
- `sf-file-upload-attached` — `detail`: `{ id: any, item: object, index: number, items: array, source: string, multiple: boolean }`. Файл попал в список. Имя по стандарту simai.smart-component 1.3.8 (словарь 1.1.5 §9.1); `sf-file-upload:file-add` отправляется после него с тем же detail до 2026-12-01 (aliases.json).
- `sf-file-upload-detach` — `detail`: `{ id: any, item: object, index: number, items: array }`. Файл убран из списка. Имя по стандарту simai.smart-component 1.3.8 (словарь 1.1.5 §9.1); `sf-file-upload:remove` отправляется после него с тем же detail до 2026-12-01 (aliases.json).
- `sf-file-upload-rejected` — `detail`: `{ files: array, accept: string, source: string }`. Перетащенные файлы, которых нет в списке accept, пропущены — системный диалог их бы и не предложил. Имя по стандарту simai.smart-component 1.3.8 (словарь 1.1.5 §9.1); `sf-file-upload:reject` отправляется после него с тем же detail до 2026-12-01 (aliases.json).
- `sf-file-upload-retry` — `detail`: `{ id: any, item: object, index: number, items: array }`. Файл с ошибкой отправлен снова. Имя по стандарту simai.smart-component 1.3.8 (словарь 1.1.5 §9.1); `sf-file-upload:retry` отправляется после него с тем же detail до 2026-12-01 (aliases.json).
- `sf-file-upload-begun` — `detail`: `{ id: any, item: object }`. Запись перешла в process — выбрана, перетащена или отправлена снова: начался её поток загрузки (стандарт simai.smart-component 1.3.8 §10.8, словарь 1.1.5 §5.2).
- `sf-file-upload-chunk` — `detail`: `{ id: any, done: number, total: number, item: object }`. Хост сдвинул прогресс записи, пока она в process: `{id, done, total}` с total 100 (§10.8).
- `sf-file-upload-completed` — `detail`: `{ id: any, item: object, index: number, items: array }`. Файл загружен. Имя по стандарту simai.smart-component 1.3.8 (словарь 1.1.5 §9.1); `sf-file-upload:file-complete` отправляется после него с тем же detail до 2026-12-01 (aliases.json).
- `sf-file-upload-failed` — `detail`: `{ id: any, item: object, index: number, items: array, reason: string, message: string }`. Файл не загрузился. Имя по стандарту simai.smart-component 1.3.8 (словарь 1.1.5 §9.1); `sf-file-upload:file-error` отправляется после него с тем же detail до 2026-12-01 (aliases.json).
- `sf-file-upload-cancelled` — `detail`: `{ id: any, item: object }`. Запись ушла, будучи в process, — её убрал человек или хост: её поток кончился, не завершившись (§10.8).
- `sf-file-upload-finished` — `detail`: `{ items: array }`. Все файлы обработаны. Имя по стандарту simai.smart-component 1.3.8 (словарь 1.1.5 §9.1); `sf-file-upload:complete` отправляется после него с тем же detail до 2026-12-01 (aliases.json).
- `sf-file-upload:complete` — устаревший псевдоним события `sf-file-upload-finished`: приходит с тем же `detail`, подписывайтесь на `sf-file-upload-finished`.
- `sf-file-upload:file-add` — устаревший псевдоним события `sf-file-upload-attached`: приходит с тем же `detail`, подписывайтесь на `sf-file-upload-attached`.
- `sf-file-upload:file-complete` — устаревший псевдоним события `sf-file-upload-completed`: приходит с тем же `detail`, подписывайтесь на `sf-file-upload-completed`.
- `sf-file-upload:file-error` — устаревший псевдоним события `sf-file-upload-failed`: приходит с тем же `detail`, подписывайтесь на `sf-file-upload-failed`.
- `sf-file-upload:reject` — устаревший псевдоним события `sf-file-upload-rejected`: приходит с тем же `detail`, подписывайтесь на `sf-file-upload-rejected`.
- `sf-file-upload:remove` — устаревший псевдоним события `sf-file-upload-detach`: приходит с тем же `detail`, подписывайтесь на `sf-file-upload-detach`.
- `sf-file-upload:retry` — устаревший псевдоним события `sf-file-upload-retry`: приходит с тем же `detail`, подписывайтесь на `sf-file-upload-retry`.
- `sf-file-upload:select` — устаревший псевдоним события `sf-file-upload-attach`: приходит с тем же `detail`, подписывайтесь на `sf-file-upload-attach`.

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

- `simai/ui@d6292bd6fc34b6bab3cc2c21ee04ee321a7b5ee2:distr/smart/file-upload`
- `simai/ui@d6292bd6fc34b6bab3cc2c21ee04ee321a7b5ee2:distr/rule/rule.json#name=cl-file-upload`
