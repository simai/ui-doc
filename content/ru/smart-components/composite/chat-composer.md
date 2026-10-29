---
title: "Поле чата"
description: "Поле вопроса и файлов чата: Enter отправляет, счётчик знаков, чипы файлов с ходом загрузки и отказами."
---

# Поле чата

`<sf-chat-composer>` — поле вопроса и файлов чата: текст растёт до восьми
строк, Enter отправляет, Shift+Enter переносит строку. Файлы поле только
проверяет и сообщает о них: загружает их хост и возвращает чипы настройкой
`files`, поэтому принят ли файл, решает сервер.

Компонент поставляется пакетом `larena` из репозитория `simai/ui-pro`, а не
выпуском SIMAI Framework. Как подключить пакет — в разделе
[Подключение Smart-компонентов](/ru/guide/smart-components/page/#подключение-к-странице).

## Пример

:::example {id="smart-components/chat-composer/overview" label="Пустое поле с файлами"}
:::

## Разметка

В разметке — тег с пределами: `maxlength`, `attachments`, `accept`,
`max-files` и `max-bytes`. Текст и чипы передаёт хост свойствами.

- `placeholder` — подсказка в пустом поле, `maxlength` — предел длины.
- `attachments` разрешает файлы, `accept` перечисляет расширения через
  запятую, `max-files` и `max-bytes` ограничивают число и размер.
- `value` — текст поля: атрибут задаёт начальный, свойство читает и пишет
  его, как будто текст набрали.
- `files` — чипы: `[{id, localId, name, bytes, progress, error}]`, где
  `progress` от 0 до 1 во время загрузки, а `error` — отказ сервера.

## Варианты

### Файлы

Файлы добавляют кнопкой, перетаскиванием или вставкой. Поле проверяет
расширение по `accept`, размер по `max-bytes` и число по `max-files` за
вычетом уже добавленных; отказы перечисляются под полем, принятые уходят в
событие `attach`. Чип показывает имя, размер, ход загрузки, отказ сервера
второй строкой и кнопку «Убрать файл».

:::example {id="smart-components/chat-composer/files" label="Файл готов, файл загружается, файл отклонён"}
:::

## Состояния

### Ждём ответ

Пока ждётся ответ, `busy` превращает «Отправить» в «Остановить ожидание»:
Enter с текстом ничего не отправляет, а подсказка под полем объясняет почему.
«Остановить ожидание» возвращает фокус в поле.

:::example {id="smart-components/chat-composer/busy" label="Ответ пишется"}
:::

### Писать нельзя

`disabled` закрывает ввод — например, пока нет согласия. Кнопка отправки
тихая и тогда, когда поле пустое, пока файл загружается и когда текст длиннее
`maxlength`.

:::example {id="smart-components/chat-composer/disabled" label="Поле закрыто"}
:::

## Применение

### Подключение

```html
<sf-chat-composer maxlength="4000" attachments accept=".pdf,.docx" max-files="5" max-bytes="10485760"></sf-chat-composer>
```

### Отправка и очистка

Поле ничего не загружает и само себя после отправки не очищает: хост
вызывает `clear()`, когда принял сообщение. Действие `setFiles(files)` делает
то же, что свойство `files`.

```js
const composer = document.querySelector('sf-chat-composer');
composer.addEventListener('sf-chat-composer-submit', async (event) => {
  event.preventDefault();
  if (await send(event.detail.text, event.detail['attachment-ids'])) composer.clear();
});
composer.addEventListener('sf-chat-composer-attach', (event) => upload(event.detail.files));
composer.addEventListener('sf-chat-composer-detach', (event) => remove(event.detail.id));
composer.files = [{id: 'att_1', name: 'Договор.pdf', bytes: 48213}];
```

### Счётчик знаков

После 80 % от `maxlength` под полем появляется счётчик знаков; сверх предела
рамка и счётчик красные, а отправка закрыта.

### Внешний вид

Открытые переменные: `--sf-chat-composer-background-color`,
`--sf-chat-composer-border-color`, `--sf-chat-composer-hint-color` и
`--sf-chat-composer-height`. Чипы файлов рисуются классами семейства
`sf-chat-attachment…`.

## Доступность

- Корень — `form`; у поля есть имя «Сообщение», а описывает его счётчик
  знаков. Живая область говорит о переходе порога, а не о каждой клавише.
- Отказ по файлам и отказ сервера в чипе — `role="alert"`; подсказка под
  полем — вежливая живая область.
- Кольцо фокуса рисует коробка поля и только для клавиатуры. На сенсорном
  экране кнопки — 44 px, а подсказка про Enter скрыта.
- Enter внутри набора иероглифов (IME) не отправляет.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-bc1fb36ec8f1` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-chat-composer>` |
| Назначение | Где пишут вопрос и добавляют файлы: Enter отправляет, Shift+Enter переносит строку, набор иероглифов (IME) никогда не обрывается, кнопка отправки становится «Остановить ожидание», пока ждётся ответ, а файлы только сообщаются — загружает их хост, и их чипы возвращаются настройкой `files`. |
| Контракт | `smart.chat-composer`, версия `1.0.1` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `placeholder` — `string`, по умолчанию пусто. Пусто — поле берёт своё слово «Спросите что-нибудь».
- `maxlength` — `integer`, по умолчанию `4000`, значения: от 1. `bootstrap.limits.message_chars`.
- `max-files` — `integer`, по умолчанию `5`, значения: от 1.
- `max-bytes` — `integer`, по умолчанию `0`, значения: от 0. 0 — размер не проверяется.
- `accept` — `string`, по умолчанию пусто. Расширения через запятую, например `.pdf,.docx`.
- `attachments` — `boolean`, по умолчанию `false`. Можно добавлять файлы.
- `busy` — `boolean`, по умолчанию `false`. Ждётся ответ: «Отправить» становится «Остановить ожидание».
- `disabled` — `boolean`, по умолчанию `false`. Писать нельзя, например пока нет согласия.
- `value` — `string`, по умолчанию пусто. Текст в поле (черновик): атрибут задаёт первый текст, свойство читает и пишет поле; запись — как будто набрали.
- `files` — `array` из `object`, по умолчанию `[]`. Чипы в том виде, в каком их знает хост: свойство, действие `set-files` или JSON-остров.

### Методы

- `setFiles(files: array)` — возвращает `object`. Чипы, как свойство `files` (действие `set-files`).
- `clear()` — возвращает `object`. Очищает поле и предупреждение (действие `clear`).
- `focus(options?: object)` — возвращает `null`. Переводит фокус в поле (фокус базового элемента, передан полю).

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-chat-composer-submit` — `detail`: `{ text: string, attachment-ids: array }`. Отправка: обрезанный текст и коды готовых файлов. Отмена оставляет предупреждение. Имя 0.3 `sf-chat-send {text, attachmentIds}` отправляется после него до 2026-12-01.
- `sf-chat-composer-stop` — `detail` не описан. Нажали «Остановить ожидание». Имя 0.3 `sf-chat-stop` отправляется после него до 2026-12-01.
- `sf-chat-composer-attach` — `detail`: `{ files: array, rejected: array }`. Файлы предложены кнопкой, перетаскиванием или вставкой; отклонённые — по типу, размеру или числу, каждый со своей причиной. Имя 0.3 `sf-chat-files` отправляется после него до 2026-12-01.
- `sf-chat-composer-detach` — `detail`: `{ id: string, name?: string }`. Нажали «Убрать файл» на чипе. Имя 0.3 `sf-chat-action {action: remove-attachment, id, name}` отправляется после него до 2026-12-01.

### Доступность

- Роль: форма (`form`).
- Доступное имя: внутренний.
- Клавиши: `Enter`, `Shift+Enter`, `Tab`.
- Фокус: У поля есть имя, а описывает его счётчик знаков, который появляется после 80 % предела; вежливая строка говорит только о переходе порога. Отклонённый файл — предупреждение `role=alert`. Enter, пока ждётся ответ, объясняет, почему ничего не отправлено. «Остановить ожидание» возвращает фокус в поле.

### Минимальная разметка

```html
<sf-chat-composer maxlength="4000" attachments accept=".pdf,.docx" max-files="5"></sf-chat-composer>
```

### Источник

- `simai/ui-pro@ae62d3e35076f0e25f2cde042c82ce929620b3db:components/src/smart/chat-composer`
- `simai/ui-pro@ae62d3e35076f0e25f2cde042c82ce929620b3db:components/src/smart/chat-composer/rule.js#name=cl-chat-composer`

## См. также

- [Сообщение чата](/ru/smart-components/composite/chat-message/) — одно сообщение ленты.
- [Окно чата](/ru/smart-components/composite/chat-window/) — окно целиком на порте хоста.
- [Лента сообщений](/ru/smart-components/composite/message-log/) — лента, в которую встаёт сообщение.
