---
title: "File Preview"
description: "Показывает выбранный или прикреплённый файл строкой с именем, размером, превью и кнопками скачивания и удаления."
---

# File Preview

`<sf-file-preview>` показывает один уже выбранный или прикреплённый файл:
значок или миниатюру, имя, размер и две кнопки — скачать и удалить. Элемент
строится на классах компонента
[Предпросмотр файла](/ru/components/content/file-preview/). Выбирает и загружает
файлы [Smart-загрузка файлов](/ru/smart-components/forms/file-upload/).

## Пример

:::example {id="smart-components/file-preview/overview" label="Файлы в списке"}
:::

## Применение

### Имя, размер и превью

`file-name` — видимое имя файла, `file-size` — размер готовым текстом
(«1,2 МБ»); компонент его не вычисляет. Слева показывается значок из `icon`
(по умолчанию `description`) или миниатюра. `kind` решает, что именно:

- `auto` — миниатюра, если `mime-type` начинается с `image/` или адрес
  (`image-url`, затем `href`, затем имя файла) оканчивается расширением
  изображения; иначе значок;
- `image` — всегда миниатюра из `image-url`, а без него — из `href`;
- `icon` — всегда значок.

Для адреса без расширения, например `data:` или адреса хранилища, задайте
`kind="image"` явно, как во второй строке примера. `surface` добавляет строке
фон — для файла, который стоит отдельно, а не в списке.

### Действия

`download-action="false"` и `remove-action="false"` убирают одну кнопку,
`actions="false"` — обе. `disabled` выключает кнопки.

Нажатие на кнопку отправляет всплывающее событие с возможностью отмены:
`sf-file-preview:download` или `sf-file-preview:remove`. В `event.detail`:

| Поле | Содержимое |
|:---|:---|
| `action` | `download` или `remove` |
| `value` | данные файла: `fileName`, `fileSize`, `icon`, `href`, `type`, `mimeType`, `imageUrl`, `target` |

Если событие скачивания не отменено и задан `href`, компонент сам переходит
по адресу: при `download` (по умолчанию) браузер сохраняет файл под именем из
`file-name`, при `download="false"` открывает его в окне из `target`
(по умолчанию `_blank`). Удаление — только намерение: строку убирает
приложение, когда удаление подтверждено.

```js
const file = document.querySelector('sf-file-preview');
file.onRemove(async (event) => {
  if (await api.deleteAttachment(event.detail.value.href)) file.remove();
});
file.onDownload((event) => {
  event.preventDefault();
  api.downloadAttachment(event.detail.value);
});
```

`getValue()` возвращает те же данные, что приходят в `event.detail.value`.

## Доступность

- Пока у строки есть кнопки, она — группа (`role="group"`), названная именем
  файла; `aria-label` заменяет это имя.
- Кнопки названы «Скачать файл» и «Удалить файл» на русской странице и
  «Download file», «Remove file» на остальных. В списке из нескольких файлов
  такие имена одинаковы: передайте в `download-label` и `remove-label` имя с
  названием файла, как в примере.
- Значок и миниатюра декоративны; файл называет видимый текст.
- После удаления строки верните фокус на соседний файл или на поле выбора
  файлов: удалённая кнопка фокуса не сохранит.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-d985d7cc2e2d` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-file-preview>` |
| Назначение | Доступная Smart-проекция обычной строки File Preview. |
| Контракт | `smart.file-preview`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-d985d7cc2e2d` |
| [Жизненный цикл](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | описан: манифест и сценарий есть, продуктовой приёмки нет |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="block"`; своего скелетона при загрузке данных нет ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`.
- `name` — `string`, по умолчанию `File`.
- `file-name` — `string`, по умолчанию `File`.
- `file-size` — `string`, по умолчанию пусто. Размер файла в виде текста, например 12 KB.
- `icon` — `string`, по умолчанию `description`.
- `href` — `string`, по умолчанию пусто.
- `kind` — `string`, по умолчанию `auto`, значения: `auto`, `icon`, `image`. Что показывает превью: иконку, само изображение или то, что подходит файлу.
- `mime-type` — `string`, по умолчанию пусто.
- `image-url` — `string`, по умолчанию пусто.
- `avatar-size` — `string`, по умолчанию пусто.
- `open` — `boolean`, по умолчанию `false`.
- `surface` — `boolean`, по умолчанию `false`.
- `download` — `boolean`, по умолчанию `true`.
- `target` — `string`, по умолчанию `_blank`.
- `actions` — `boolean`, по умолчанию `true`.
- `download-action` — `boolean`, по умолчанию `true`.
- `remove-action` — `boolean`, по умолчанию `true`.
- `disabled` — `boolean`, по умолчанию `false`.
- `compact` — `boolean`, по умолчанию `false`. Только ведущий значок высотой со строку списка: изображение или расширение файла в плитке. Для файла в ячейке таблицы.
- `aria-label` — `string`, по умолчанию пусто. Пусто — текст на языке страницы (по-английски «File»).
- `download-label` — `string`, по умолчанию пусто. Пусто — текст на языке страницы (по-английски «Download file»).
- `remove-label` — `string`, по умолчанию пусто. Пусто — текст на языке страницы (по-английски «Remove file»).

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `file-size` | `size` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `kind="auto"` | `kind="default"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

### Методы

- `getValue()` — возвращает `object`. Возвращает текущий идентификатор файла и значение для отображения.
- `setOpen()` — возвращает `object`. Сеттер для совместимости; действия остаются видимыми.
- `toggleOpen()` — возвращает `object`. Переключатель для совместимости; действия остаются видимыми.
- `onDownload()` — возвращает `object`. Регистрирует обработчик события скачивания.
- `onRemove()` — возвращает `object`. Регистрирует обработчик события удаления.

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

- `sf-file-preview:download` — `detail`: `{ action?: any, value?: object }`. Запрошено действие скачивания. Всплывает, с composed: true и отменяемое: preventDefault() останавливает встроенный переход по href.
- `sf-file-preview:remove` — `detail`: `{ action?: any, value?: object }`. Запрошено действие удаления. Всплывает, с composed: true и отменяемое; компонент сам ничего не удаляет.

### Доступность

- Роль: группа (`group`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter`, `Space`.
- Фокус: Нативные действия с файлами сами отвечают за отображение `focus-visible`.

### Минимальная разметка

```html
<sf-file-preview file-name="File.pdf"></sf-file-preview>
```

### Источник

- `simai/ui@d985d7cc2e2d2529f4e18e211f05f8c66ac3a655:distr/smart/file-preview`
- `simai/ui@d985d7cc2e2d2529f4e18e211f05f8c66ac3a655:distr/rule/rule.json#name=cl-file-preview`

## См. также

- [Предпросмотр файла](/ru/components/content/file-preview/) — та же строка на классах.
- [Smart-загрузка файлов](/ru/smart-components/forms/file-upload/) — выбор и загрузка файлов.
