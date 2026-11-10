---
title: "Загрузка файлов"
description: "Даёт выбрать или перетащить файлы и показывает их список, прогресс и ошибки передачи."
---

# Загрузка файлов

:badge[sf-file-upload]{variant=tonal scheme=primary size=1/2} :badge[1.1.8]{variant=outline scheme=on-surface size=1/2}

Загрузка файлов даёт выбрать файлы в системном окне или перетащить их и
показывает список выбранных файлов с прогрессом и состоянием передачи. Сами
файлы отправляет и проверяет приложение.

То же на классах — [Загрузка файлов](/ru/components/forms/file-upload/):
`<sf-file-upload>` собирает её разметку из атрибутов.

## Пример

:::example {id="smart-components/file-upload/overview" label="Результат" preview=sandbox log="change sf-file-upload-attach sf-file-upload-attached sf-file-upload-detach sf-file-upload-rejected sf-file-upload-retry sf-file-upload-completed sf-file-upload-failed sf-file-upload-cancelled sf-file-upload-finished" log_console=true log_open=false}
:::

## Разметка

Зоне нужно доступное имя, которое называет действие:

```html
<sf-file-upload aria-label="Выбрать документы"></sf-file-upload>
```

Текст приглашения сам имени не даёт, поэтому `aria-label` задавайте всегда.
Без текстовых атрибутов компонент пишет приглашение на языке страницы.

## Варианты

### Размер

`size` • по умолчанию `1` • [справочник](#атрибуты)

`size` выбирает ступень размерной шкалы: `1/2`, `1` или `2`. Зона и строки
файлов меняются вместе.

:::example {id="components/file-upload/smart-sizes" label="Размеры 1/2, 1 и 2"}
:::

### Состав зоны

`link-text`, `text`, `supporting-text` • [справочник](#атрибуты)

`link-text` — слова ссылки в зоне («Выберите файл»), `text` — слова **после**
ссылки в той же строке («или перетащите его сюда»). `text` — не всё
приглашение и не заменяет `link-text`: заданный вместо всей фразы, он
встанет рядом со словами ссылки. `supporting-text` — строка под
приглашением; без неё компонент выводит `formats`, а без `formats` собирает
список из `accept`. Если не задано ни то ни другое, строки с форматами нет:
какие файлы принимает поле, компонент сам не знает. `icon` меняет значок
зоны; нейтральное значение по умолчанию — `upload_file`.

:::example {id="smart-components/file-upload/composition" label="Состав зоны"}
:::

### Один или несколько файлов

`accept`, `multiple` • [справочник](#атрибуты)

`accept` передаётся системному окну выбора и сужает список файлов в нём. Из
перетащенных файлов компонент оставляет те, что названы в `accept`, а
остальные сообщает событием `sf-file-upload-rejected`. Размер файла и его
содержимое проверяйте в приложении и на сервере. `multiple` разрешает выбрать
несколько файлов; без него из перетащенных берётся первый. Новый выбор
заменяет список файлов.

:::example {id="components/file-upload/smart-selection" label="PDF и Word"}
:::

### Оформление

`root-class` добавляет зоне утилиты SIMAI Framework — поверхность, отступы,
радиус — без своих стилей.

:::example {id="components/file-upload/smart-customization" label="Оформление"}
:::

## Состояния

Состояние каждого файла в списке задаёт приложение полем `state` элемента
через `setItems()`.

### Передача

`state: 'process'` показывает полосу прогресса; `progress` от 0 до 100
выводится как задано.

:::example {id="smart-components/file-upload/state-process" label="Файл в передаче"}
:::

### Передан

`state: 'done'` показывает отметку готовности.

:::example {id="smart-components/file-upload/state-done" label="Переданный файл"}
:::

### Ошибка

`state: 'error'` показывает кнопку повтора с текстом из `errorMessage`.

:::example {id="smart-components/file-upload/state-error" label="Файл с ошибкой передачи"}
:::

### Недоступна

`disabled` • [справочник](#атрибуты)

`disabled` выключает выбор и перетаскивание, убирает зону из порядка `Tab` и
выключает кнопки в строках; список при этом сохраняется.

:::example {id="components/file-upload/smart-disabled" label="Недоступная зона"}
:::

## Поведение

### Передача и состояния файлов

Выбор пользователя отправляет событие `sf-file-upload-attach` с
`event.detail.files` — массивом элементов списка — и `event.detail.source`:
`input` для системного окна, `drop` для перетаскивания. В каждом элементе
поле `file` — выбранный объект `File`, `name` и `fileSize` — подпись строки,
`progress` от 0 до 100 и `state`: `process`, `done` или `error`. `getItems()`
возвращает текущий список. Нативное событие `change` всплывает только при
выборе в системном окне, поэтому для обоих путей подписывайтесь на
`sf-file-upload-attach`.

Ход передачи приложение показывает через `setItems()`: для ошибки задайте
`state: 'error'` и текст кнопки повтора в `errorMessage`. Переход файла в
`done` отправляет `sf-file-upload-completed`, в `error` —
`sf-file-upload-failed`; когда в состоянии `done` все файлы, приходит
`sf-file-upload-finished`. События считаются по разнице с прошлым списком,
поэтому передавайте в `setItems()` новые объекты, а не изменённые старые.

:::example {id="components/file-upload/smart-states" label="Три файла в передаче"}
:::

### Элемент списка

Элемент списка — обычный объект. `getItems()` возвращает такие объекты,
`setItems()` принимает их, а каждое событие передаёт элемент в
`event.detail.item` вместе с его `index` и всем списком `items`. Из выбора
пользователя компонент сам собирает элементы этой формы и хранит в каждом
объект `File`.

| Ключ | Значение |
|:---|:---|
| `id` | Постоянный идентификатор элемента между вызовами `setItems()`: по нему смена состояния превращается в события `sf-file-upload-failed`, `sf-file-upload-completed` и `sf-file-upload-finished`. Для выбранного файла это `<имя>-<размер>-<lastModified>`. Без `id` элемент узнаётся по файлу или по имени и позиции. |
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
Компонент отправляет `sf-file-upload-detach` и `sf-file-upload-retry` с
`detail.item`, `detail.index` и `detail.items`, а повтор возвращает файл в
состояние `process` с нулевым прогрессом. Сам запрос отменяет и повторяет
приложение. `removeItem({index})` и `clear()` убирают файлы из списка из кода
без событий.

### Подписка до регистрации элемента

`onFileAdd()` и другие методы `on…()` доступны, когда загрузчик
зарегистрировал элемент. На `<sf-file-upload>`, который ещё не
зарегистрирован, вызов падает с ошибкой `… is not a function`. Два способа
работают всегда:

```js
// 1. Событие: оно не требует метода и всплывает от элемента.
upload.addEventListener('sf-file-upload-attached', (event) => add(event.detail.item));

// 2. Дождаться регистрации и затем вызывать методы.
await customElements.whenDefined('sf-file-upload');
upload.onFileAdd((event) => add(event.detail.item));
```

`sf-file-upload-attached` приходит на каждый добавленный файл, а
`sf-file-upload-attach` — один раз на весь выбор. Методам соответствуют
события `sf-file-upload-attached`, `sf-file-upload-failed`,
`sf-file-upload-completed`, `sf-file-upload-detach`,
`sf-file-upload-retry` и `sf-file-upload-finished`.

### Отправка файлов

Выбранные файлы не попадают в `FormData` формы: внутреннее поле выбора не
имеет имени и очищается после каждого выбора. Берите объекты `File` из
списка и отправляйте их своим запросом.

```js
const upload = document.querySelector('sf-file-upload');
upload.addEventListener('sf-file-upload-attach', async (event) => {
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

upload.addEventListener('sf-file-upload-attached', async (event) => {
  const item = {...event.detail.item};
  items.set(item.id, item);
  await store(item);
});

upload.addEventListener('sf-file-upload-retry', (event) => {
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

## Справочник

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `size` | строка | `1` | `1/2`, `1`, `2` | — |
| `icon` | строка | `upload_file` | — | — |
| `link-text` | строка | — | — | Пусто — текст на языке страницы (по-английски «Click to upload»). |
| `text` | строка | — | — | — |
| `formats` | строка | пусто | — | Строка форматов под действием. Если не задана, выводится из `accept`; пуста, если не задано ни то ни другое: компонент не называет форматы, которые не может знать. |
| `supporting-text` | строка | пусто | — | Вспомогательная строка; по умолчанию берётся из formats. |
| `accept` | строка | пусто | — | — |
| `multiple` | да/нет | нет | — | — |
| `disabled` | да/нет | нет | — | — |
| `aria-label` | строка | пусто | — | — |
| `items` | список | `[]` | — | Файлы и их загрузки, записанные приложением: состояние каждой записи (process, done, error) и прогресс 0–100 — это её поток. |

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
| `removeItem(args: object)` | объект | Удаляет из списка пункт с этим индексом; индекс вне списка ничего не делает. Возвращает тег. |
| `clear()` | объект | Очищает список. Возвращает тег. |
| `getItems()` | список: объект | Файлы списка в виде объектов пунктов. |
| `setItems(items: array)` | объект | Заменяет список этими пунктами (name, fileSize, state, progress, errorMessage). Возвращает тег. |
| `setState(state: object)` | объект | Применяет несколько входных параметров сразу (size, icon, linkText, text, formats, supportingText, accept, multiple, disabled, items). Возвращает тег. |
| `onFileAdd(handler: function, options?: object)` | объект | Подписывается на sf-file-upload-attached; обработчик получает событие. Возвращает тег. |
| `onFileError(handler: function, options?: object)` | объект | Подписывается на sf-file-upload-failed; обработчик получает событие. Возвращает тег. |
| `onFileComplete(handler: function, options?: object)` | объект | Подписывается на sf-file-upload-completed; обработчик получает событие. Возвращает тег. |
| `onFileRemove(handler: function, options?: object)` | объект | Подписывается на sf-file-upload-detach; обработчик получает событие. Возвращает тег. |
| `onFileRetry(handler: function, options?: object)` | объект | Подписывается на sf-file-upload-retry; обработчик получает событие. Возвращает тег. |
| `onComplete(handler: function, options?: object)` | объект | Подписывается на sf-file-upload-finished; обработчик получает событие. Возвращает тег. |

### События

События приходят на сам элемент и всплывают; глаголы в именах — из [общего словаря](/ru/guide/smart-components/names/). Общие события базового элемента — в главе [Модель компонента](/ru/guide/smart-components/model/#базовый-интерфейс).

| Событие | `detail` | Когда приходит |
|:---|:---|:---|
| `change` | `{ files: array, source: "input" \| "drop" }` | Выбраны файлы — через окно выбора или перетаскиванием (тогда в `detail` есть `files` и `source: 'drop'`); форма узнаёт об обоих случаях. |
| `sf-file-upload-attach` | `{ files: array, source: "input" \| "drop", multiple: boolean }` | Выбраны файлы для загрузки. |
| `sf-file-upload-attached` | `{ id: any, item: object, index: number, items: array, source: string, multiple: boolean }` | Файл попал в список. |
| `sf-file-upload-detach` | `{ id: any, item: object, index: number, items: array }` | Файл убран из списка. |
| `sf-file-upload-rejected` | `{ files: array, accept: string, source: string }` | Перетащенные файлы, которых нет в списке accept, пропущены — системный диалог их бы и не предложил. |
| `sf-file-upload-retry` | `{ id: any, item: object, index: number, items: array }` | Файл с ошибкой отправлен снова. |
| `sf-file-upload-begun` | `{ id: any, item: object }` | Запись перешла в process — выбрана, перетащена или отправлена снова: начался её поток загрузки. |
| `sf-file-upload-chunk` | `{ id: any, done: number, total: number, item: object }` | Приложение сдвинуло прогресс записи, пока она в process: `{id, done, total}` с total 100. |
| `sf-file-upload-completed` | `{ id: any, item: object, index: number, items: array }` | Файл загружен. |
| `sf-file-upload-failed` | `{ id: any, item: object, index: number, items: array, reason: string, message: string }` | Файл не загрузился. |
| `sf-file-upload-cancelled` | `{ id: any, item: object }` | Запись ушла, будучи в process, — её убрал человек или приложение: её поток кончился, не завершившись. |
| `sf-file-upload-finished` | `{ items: array }` | Все файлы обработаны. |

### О компоненте

| | |
|:---|:---|
| Тег | `<sf-file-upload>`, контракт `smart.file-upload` версии `1.1.8` |
| Поставка | выпуск Framework `ui-2bd5a3ab478a` |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | Пробный: может измениться в следующих выпусках; описан и проверен своим сценарием, в продуктах ещё не проверен. |
| До прихода кода | Пока грузится код, на месте компонента видна заготовка «блок» (сервер пишет `data-sf-skeleton="block"`). Подробнее — [Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода). |
| Доступность | Читается как кнопка; желательна подпись или `aria-label`; с клавиатуры: `Tab`, `Enter`, `Пробел`. |
| Источник | `simai/ui@2bd5a3ab478a46fcee24d2460e7792135b0bb864:distr/smart/file-upload` |
| Правило классов | `simai/ui@2bd5a3ab478a46fcee24d2460e7792135b0bb864:distr/rule/rule.json#name=cl-file-upload` |

## См. также

- [Поле изображения](/ru/smart/forms/image-field/) — одно изображение с миниатюрой.
- [Загрузка файлов на классах](/ru/components/forms/file-upload/) — та же зона в статической разметке.
