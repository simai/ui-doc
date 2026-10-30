---
title: "Окно чата"
description: "Окно чата целиком на порте хоста: список разговоров, открытый разговор, поле ввода, выбор собеседника и «Мои файлы»."
---

# Окно чата

`<sf-chat-window>` — окно чата целиком: список разговоров, открытый разговор,
поле ввода, выбор собеседника и «Мои файлы». Окно собрано из частей —
[Список разговоров](/ru/smart-components/composite/thread-list/),
[Лента сообщений](/ru/smart-components/composite/message-log/),
[Поле чата](/ru/smart-components/composite/chat-composer/),
[Выбор собеседника](/ru/smart-components/composite/chat-interlocutor/) и
[Сообщение чата](/ru/smart-components/composite/chat-message/), — и загрузчик
приносит их сам.

Окно в сеть не ходит: данные даёт хост, он же отвечает на намерения окна.
Права, деньги, память и доставка остаются у хоста. Окно держит у себя только
то, что видно одной странице: набранный текст по разговорам, какой неудачный
ответ уже спросили заново, куда уходит фокус.

Компонент поставляется пакетом `larena` из репозитория `simai/ui-pro`, а не
выпуском SIMAI Framework. Как подключить пакет — в разделе
[Подключение смарт-компонентов](/ru/guide/smart-components/page/#подключение-к-странице).

## Пример

:::example {id="smart-components/chat-window/overview" label="Разговор, список и поле ввода" preview=sandbox}
:::

## Разметка

В разметке — тег с перечнем возможностей: `<sf-chat-window capabilities="…">`.
Порт и данные передаёт страница (см. [Порт и намерения](#порт-и-намерения)).

- `capabilities` — части порта, которые поддерживает хост (`assistant`,
  `people`, `files`, `edit`, `delete`, `feedback`, `proposals`,
  `conversation-create`, `conversation-manage`, `interlocutors`, `read`), и
  свои возможности окна, через пробел. Чего нет, того окно не предлагает и на
  его намерение само отвечает «нет возможности».
- `landmark` и `heading-level` ставят окно в чужую страницу: `section` и
  уровень заголовков `2`.
- Данные порта — тоже настройки: `me`, `conversations`, `conversation`,
  `messages`, `history`, `feed-state`, `limits`, `interlocutors`, `notice`.
  Несколько сразу — действие `set-data {data}`.

## Варианты

### Встроенное окно

`embedded` встраивает окно в страницу: высота берётся от контейнера, у окна
своя рамка.

:::example {id="smart-components/chat-window/embedded" label="Окно внутри страницы" preview=sandbox}
:::

## Состояния

### Разговор не открыт

Пока разговор не открыт, посередине стоит приветствие, а поле ввода ждёт
первый вопрос.

:::example {id="smart-components/chat-window/greeting" label="Приветствие без разговора" preview=sandbox}
:::

## Применение

### Порт и намерения

```html
<sf-chat-window capabilities="assistant feedback proposals conversation-create"></sf-chat-window>
<script type="module">
  const chat = document.querySelector('sf-chat-window');
  chat.connectPort({
    port: 'simai.chat-port', version: '1.0.0', capabilities: ['conversation-manage'],
    raise: (intent, payload) => host.answer(intent, payload), // {answer, reason, data}
  });
  chat.setData({me, conversations, conversation: null, messages: [], history: {has_older: false}, feed_state: 'ready'});
</script>
```

Порт передаётся базовым действием `connect-port {port}`. Порт — объект
`{port, version, capabilities, raise}`, где `raise` отвечает на намерение
`{answer, reason, text, data}`; `answer` — `applied`, `conflict`, `refused`
или `unavailable`. Данные применённого ответа окно применяет как данные.

Каждое намерение сначала приходит событием окна `sf-chat-window-<глагол>` с
`detail` `{request-id, intent, kind, payload}`. Событие отменяемое: страница,
отменившая его, отказывает намерению, и порт не спрашивается. Хост без порта
слушает эти события и отвечает действием `settle {request-id, result}`.

```js
chat.addEventListener('sf-chat-window-open', (event) => {
  if (event.detail.kind === 'conversation') history.pushState({}, '', `/chat/${event.detail.payload.conversation_id}`);
});
```

### Свои возможности окна

Сверх порта окно умеет своё, и хост объявляет это в `capabilities`:
`x-archive-view` — архив отдельным списком, `x-conversations-paging` —
следующая страница списка, `x-conversations-search` — поиск по заголовку,
`x-conversation-pin` — «Закрепить», `x-early-upload` — загрузка файла сразу
при выборе, `x-my-files` — «Мои файлы» на месте разговора, `x-brief` —
уточнение задачи в ответе.

### Раскладка и мебель страницы

Окно приносит раскладку своих узлов: список сбоку и разговор в колонке
чтения, поиск над списком, заголовок, поле внизу, «Мои файлы» на месте
разговора, на телефоне — выезжающая панель. Мебель страницы — ссылка
пропуска, затемнение под панелью, кнопки, расход, окно истёкшей сессии —
остаётся у страницы: её узлы страница добавляет в `parts` до подключения
окна. Открытые переменные: `--sf-chat-window-side-width`,
`--sf-chat-window-side-color`, `--sf-chat-window-width`,
`--sf-chat-window-text-color`, `--sf-chat-window-muted-color` и
`--sf-chat-window-border-color`.

## Доступность

- Части сохраняют свою клавиатуру: у списка — переход стрелками, у поля —
  Enter.
- Фокус уходит в поле после нового разговора, смены собеседника и последнего
  дождавшегося ответа; если исчезло то, что держало фокус, — на «Вернуть» над
  полем, а не на страницу.
- «Мои файлы»: при открытии фокус на заголовке вида, «Назад» и Escape
  возвращают в поле; «Удалить» спрашивает в строке и ставит фокус на
  «Отмена», а после удаления — на строку, вставшую на место удалённой.
- Строка над полем — вежливая живая область и не уходит из-под указателя или
  фокуса; ошибка — `role="alert"` с «Повторить».

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-766822bf90e2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-chat-window>` |
| Назначение | Окно чата целиком на порту хоста simai.chat-port 1.0.0: разговоры (архив, постраничная загрузка, поиск, закрепление), открытый разговор с сообщениями, предложениями, оценками и описаниями задач, поле ввода с файлами и вопросами в очереди, пока ждётся ответ, поиск по разговору, собеседник и «Мои файлы». С сервером не говорит: данные даёт хост, он же отвечает на каждое намерение — через порт или действие settle. |
| Контракт | `smart.chat-window`, версия `1.2.0` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `capabilities` — `string`, по умолчанию пусто. Возможности порта, которые предлагает хост, через пробел (`assistant`, `people`, `files`, `edit`, `delete`, `feedback`, `proposals`, `conversation-create`, `conversation-manage`, `interlocutors`, `read`), и свои возможности окна (`x-archive-view`, `x-conversations-paging`, `x-conversations-search`, `x-conversation-pin`, `x-early-upload`, `x-my-files`, `x-brief`). Что не объявлено, то не предлагается, а его намерение получает ответ `unavailable` без события. Свойство принимает и массив.
- `landmark` — `string`, по умолчанию `main`, значения: `main`, `section`. `main`, когда окно и есть страница; `section` внутри страницы со своим `main`.
- `heading-level` — `integer`, по умолчанию `1`, значения: от 1; до 2. Уровень собственных заголовков окна (разговор, приветствие): `2` внутри чужой страницы.
- `embedded` — `boolean`, по умолчанию `false`. Встроено в страницу хоста: окно берёт высоту контейнера и рисует свою рамку.
- `no-queue` — `boolean`, по умолчанию `false`. Выключает очередь: пока ждётся ответ, поле ничего не отправляет и объясняет почему, как до 1.1.0.
- `feed-state` — `string`, по умолчанию `ready`, значения: `ready`, `loading`, `revoked`. данные порта `feed_state`: `loading` рисует колонку заново, `revoked` очищает ленту, черновик и всё неотправленное; задаётся свойством (`feedState` или `feed_state` порта)
- `me` — `object`. данные порта `me {id, name}`: кто читает
- `conversations` — `array`, по умолчанию `[]`. данные порта `conversations` `[{id, title, type, interlocutor, unread_count, updated_at, archived, pinned}]`, новые сверху; `pinned` — от `x-conversation-pin`
- `conversation` — `object`. данные порта `conversation`: открытый разговор `{id, title, interlocutor, can_send, archived, revoked}`, `null`, если ни один не открыт
- `messages` — `array`, по умолчанию `[]`. данные порта `messages` — сообщения открытого разговора, старые сверху (`kind person|assistant`, `body`, `html`, `files`, `status`, `stage`, `wait`, `sources`, `verification`, `notices`, `proposal`, `feedback`, `summary`, `limit_resets_at`, `brief`, `local`)
- `history` — `object`, по умолчанию `{"has_older":false}`. данные порта `history {has_older}`
- `limits` — `object`, по умолчанию `{}`. данные порта `limits {body_chars, files_per_message, file_bytes, file_types}`
- `interlocutors` — `array`, по умолчанию `[]`. данные порта `interlocutors` `[{id, title, greeting, suggestions, capabilities {attachments, proposals, memory}}]`: первый — обычный
- `notice` — `object`. данные порта `notice {kind: info|error, text, retry}`: строка над полем, ошибка с «Повторить», когда `retry` — функция
- `conversation-list` — `object`, по умолчанию `{"archived":false,"has_more":false,"loading":false}`. данные окна (`x-archive-view`, `x-conversations-paging`, `x-conversations-search`) `{archived, has_more, loading, query}`: какой список показан, есть ли следующая страница, идёт ли загрузка и что искали
- `composer-files` — `array`, по умолчанию `[]`. данные окна (`x-early-upload`): чипы поля в файловой форме порта `{key, id, name, size, state: uploading|ready|failed, progress, reason}`
- `my-files` — `object`. данные окна (`x-my-files`) `{files [{id, name, size, type, created_at, saved_to_base, download_url}], used_bytes, quota_bytes}`; `download_url` — адрес хоста, окно его не составляет

### Свойства в документе макета

Узел типа `smart.chat-window` в [документе макета](/ru/guide/layouts/building/smart-component/) (`simai.composition.document.v1`) принимает:

- свойства: `template`, `capabilities`, `landmark`, `heading-level`, `embedded`, `no-queue`, `feed-state`.

Значения свойств те же, что у одноимённых атрибутов, и того же типа, что в списке атрибутов: строковое значение пишется строкой (`"size": "1"`, а не `1` — число отклоняется с диагностикой `schema_enum` или `schema_type`), логическое — `true` или `false`.

### Методы

- `setData(data: object)` — возвращает `object`. несколько данных порта сразу, по именам порта или по именам настроек; неизвестные ключи пропускаются (метод 0.3 `applyData(partial)` сохранён) (действие `set-data`; отвечает исходом)
- `settle(requestId: string, result: object)` — возвращает `object`. хост без порта отвечает на намерение: `result {answer, reason, text, data, current}`; отказ `unknown-request`, если под этим кодом ничего не ждёт (метод 0.3 `answer(request_id, result)` сохранён) (действие `settle`; отвечает исходом)
- `startConversation()` — возвращает `object`. «Новый разговор» с собственной кнопки страницы (порт `conversation.create`); отвечает, когда ответил хост (действие `start-conversation`; отвечает исходом)
- `openConversation(id: any)` — возвращает `object`. открыть разговор (порт `conversation.open`) (действие `open-conversation`; отвечает исходом)
- `focusComposer()` — возвращает `object`. поле (ссылка пропуска страницы); из «Моих файлов» — путь обратно (действие `focus-composer`; отвечает исходом)
- `openFiles()` — возвращает `object`. «Мои файлы» на месте разговора (`x-my-files`); без этой возможности — отказ `capability-not-provided` (действие `open-files`; отвечает исходом)
- `closeFiles(focus: boolean)` — возвращает `object`. обратно к разговору; `focus` false оставляет фокус на месте (действие `close-files`; отвечает исходом)
- `setListFooter(node: object|null)` — возвращает `object`. что страница показывает под списком разговоров, после «Моих файлов» (у Mirai24 — расход); `null` убирает это (действие `set-list-footer`; отвечает исходом)
- `openFind(query: string)` — возвращает `object`. Открыть поиск по разговору с фокусом в его поле; query сразу запускает поиск (действие open-find; отвечает исходом).
- `closeFind(focus: boolean)` — возвращает `object`. Закрыть поиск по разговору; фокус возвращается туда, откуда поиск открыли (действие close-find; отвечает исходом).
- `openPreview(source: object)` — возвращает `object`. Открыть предпросмотр источника рядом с разговором (действие `open-preview`; отвечает итогом).
- `closePreview(focus: boolean)` — возвращает `object`. Закрыть предпросмотр источника; фокус возвращается туда, откуда его открыли (действие `close-preview`; отвечает итогом).
- `focus(options?: object)` — возвращает `null`. Фокус базового элемента.
- `applyData(partial: object)` — возвращает `object`. Задаёт несколько данных порта сразу (и свои данные окна); неизвестные ключи пропускаются. Каждое данное — ещё и свойство со своим именем. Осталось от 0.3; действие `set-data` — его вид в манифесте.
- `answer(request_id: string, result: object)` — возвращает `boolean`. Ответ хоста на намерение: `{answer, reason, text, data, current}`. Данные применённого ответа применяются как данные. Возвращает `false` для неизвестного `request_id`. Осталось от 0.3 для хоста без порта; действие `settle` — его вид в манифесте.
- `request(intent: string, payload?: object)` — возвращает `object`. Поднимает намерение по имени порта: событие `sf-chat-window-<глагол>`, затем `raise` порта или `settle` хоста; выполняется ответом. Необъявленная возможность отвечает `unavailable` без события, отменённое событие — `refused` с причиной `prevented`.
- `connectPort(port: object)` — возвращает `object`. Базовое действие `connect-port {port}` (§4.1, §4.9; `setHostPort` — его псевдоним): адаптер `{port: 'simai.chat-port', version, capabilities, raise(intent, payload)}`, который отвечает на каждое намерение.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-chat-window-open` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Разговор открыт из списка (порт `conversation.open {conversation_id}`, kind `conversation`), показан архив или текущий список (`x-archive-view`, `conversations.view {archived}`, kind `list`), запрошены «Мои файлы» (`x-my-files`, `files.list`, kind `files`) либо рядом с разговором вот-вот откроется предпросмотр источника (1.2.0: kind `preview`, intent `preview.open`, payload `{source}`; это действие самого окна, хосту ничего не передаётся; отмените событие, чтобы предпросмотр не открылся, — тогда сноска открывает список источников). Было `chat-port:open`, `chat-window:view`, `chat-window:files`. Имена 0.3 `chat-port:open`, `chat-window:view`, `chat-window:files {request_id, ...payload}` отправляются после него до 2026-12-01.
- `sf-chat-window-load-more` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Более ранние сообщения (порт `history.older {conversation_id, before_id}`, kind `history`) или следующая страница списка (`x-conversations-paging`, `conversations.more {archived}`, kind `conversations`). Было `chat-port:older`, `chat-window:more`. Имена 0.3 `chat-port:older`, `chat-window:more {request_id, ...payload}` отправляются после него до 2026-12-01.
- `sf-chat-window-submit` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Сообщение отправлено (порт `message.send {conversation_id, body, files, client_key, interlocutor}`): из поля, подсказкой, ответом на уточнение задачи или повторным вопросом. Было `chat-port:send`. Имя 0.3 `chat-port:send {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-retry` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. То же сообщение заново по его `client_key` (порт `message.retry`, kind `message`) или неудавшийся файл сообщения (порт `file.retry {conversation_id, message_id, file_key}`, kind `file`). Было `chat-port:retry`, `chat-port:file-retry`. Имена 0.3 `chat-port:retry`, `chat-port:file-retry {request_id, ...payload}` отправляются после него до 2026-12-01.
- `sf-chat-window-save` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Сообщение изменено по своей версии (порт `message.edit`). Было `chat-port:edit`. Имя 0.3 `chat-port:edit {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-delete` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Сообщение удалено по своей версии (порт `message.delete`, kind `message`) или удалён сохранённый файл (`x-my-files`, `files.remove {file_id}`, kind `file`). Было `chat-port:delete`, `chat-window:file-remove`. Имена 0.3 `chat-port:delete`, `chat-window:file-remove {request_id, ...payload}` отправляются после него до 2026-12-01.
- `sf-chat-window-read` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Последнее действительно увиденное сообщение (порт `message.read`). Было `chat-port:read`. Имя 0.3 `chat-port:read {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-rate` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Ответ оценён (порт `message.rate {message_id, value, reason, note}`). Было `chat-port:rate`. Имя 0.3 `chat-port:rate {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-answer` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Ответ на предложение изменения: хост отправляет ровно его команду (порт `proposal.decide {message_id, code, decision: confirm|cancel}`). Было `chat-port:decide`. Имя 0.3 `chat-port:decide {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-check` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Пришёл ли остановленный или задержанный ответ (порт `wait.check {message_id}`). Было `chat-port:check`. Имя 0.3 `chat-port:check {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-stop` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Остановить ожидание ответа (порт `wait.stop {conversation_id}`). Было `chat-port:stop`. Имя 0.3 `chat-port:stop {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-create` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Новый разговор (порт `conversation.create {interlocutor}`). Было `chat-port:create`. Имя 0.3 `chat-port:create {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-rename` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Разговор переименован (порт `conversation.rename {conversation_id, title}`). Было `chat-port:rename`. Имя 0.3 `chat-port:rename {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-archive` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Разговор отправлен в архив (порт `conversation.archive {conversation_id, archived: true}`). Было `chat-port:archive`. Имя 0.3 `chat-port:archive {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-restore` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Разговор возвращён из архива (порт `conversation.archive {conversation_id, archived: false}`). Было `chat-port:archive`. Имя 0.3 `chat-port:archive {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-select` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Выбран другой собеседник; выбор начинает новый разговор (порт `interlocutor.choose {interlocutor}`). Было `chat-port:interlocutor`. Имя 0.3 `chat-port:interlocutor {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-query` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Список найден по заголовку (`x-conversations-search`, `conversations.search {query}`) — после паузы в наборе, по Enter или очищен Escape. Было `chat-window:search`. Имя 0.3 `chat-window:search {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-pin` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Разговор закреплён или откреплён из действий строки (`x-conversation-pin`, `conversation.pin {conversation_id, pinned}`); собственный глагол чата (словарь §5.1), его слово — `events.pin.label`. Было `chat-window:pin`. Имя 0.3 `chat-window:pin {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-attach` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Файлы выбраны, перетащены или вставлены, чтобы загрузить их сразу (`x-early-upload`, `file.attach {files, conversation_id, interlocutor}`). Было `chat-window:attach`. Имя 0.3 `chat-window:attach {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-detach` — `detail`: `{ requestId: string, intent: string, kind?: string, payload: object }`. Чип убран из поля (`x-early-upload`, `file.detach {key}`). Было `chat-window:detach`. Имя 0.3 `chat-window:detach {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-settled` — `detail`: `{ requestId: string, intent: string, payload: object, answer: any, reason?: string|null }`. Факт ответа хоста — от порта или от `settle`: `{request-id, intent, payload, answer, reason}`; сообщается после того, как данные ответа применены, и до того, как окно само на него отреагирует (фокус). Было `sf-chat-window-answer`. Имя 0.3 `sf-chat-window-answer {request_id, ...payload}` отправляется после него до 2026-12-01.
- `sf-chat-window-toggle` — `detail`: `{ kind: any, open: boolean }`. Поиск по разговору или предпросмотр источника открыт или закрыт: `{kind: find|preview, open}`. То же говорят состояния хоста `data-find-open` и `data-preview-open`.
- `chat-port:open` — устаревший псевдоним события `sf-chat-window-open`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-open`.
- `chat-port:older` — устаревший псевдоним события `sf-chat-window-load-more`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-load-more`.
- `chat-port:send` — устаревший псевдоним события `sf-chat-window-submit`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-submit`.
- `chat-port:retry` — устаревший псевдоним события `sf-chat-window-retry`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-retry`.
- `chat-port:edit` — устаревший псевдоним события `sf-chat-window-save`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-save`.
- `chat-port:delete` — устаревший псевдоним события `sf-chat-window-delete`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-delete`.
- `chat-port:read` — устаревший псевдоним события `sf-chat-window-read`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-read`.
- `chat-port:rate` — устаревший псевдоним события `sf-chat-window-rate`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-rate`.
- `chat-port:file-retry` — устаревший псевдоним события `sf-chat-window-retry`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-retry`.
- `chat-port:decide` — устаревший псевдоним события `sf-chat-window-answer`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-answer`.
- `chat-port:check` — устаревший псевдоним события `sf-chat-window-check`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-check`.
- `chat-port:stop` — устаревший псевдоним события `sf-chat-window-stop`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-stop`.
- `chat-port:create` — устаревший псевдоним события `sf-chat-window-create`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-create`.
- `chat-port:rename` — устаревший псевдоним события `sf-chat-window-rename`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-rename`.
- `chat-port:archive` — устаревший псевдоним события `sf-chat-window-archive`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-archive`.
- `chat-port:interlocutor` — устаревший псевдоним события `sf-chat-window-select`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-select`.
- `chat-window:view` — устаревший псевдоним события `sf-chat-window-open`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-open`.
- `chat-window:more` — устаревший псевдоним события `sf-chat-window-load-more`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-load-more`.
- `chat-window:search` — устаревший псевдоним события `sf-chat-window-query`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-query`.
- `chat-window:pin` — устаревший псевдоним события `sf-chat-window-pin`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-pin`.
- `chat-window:attach` — устаревший псевдоним события `sf-chat-window-attach`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-attach`.
- `chat-window:detach` — устаревший псевдоним события `sf-chat-window-detach`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-detach`.
- `chat-window:files` — устаревший псевдоним события `sf-chat-window-open`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-open`.
- `chat-window:file-remove` — устаревший псевдоним события `sf-chat-window-delete`: приходит с тем же `detail`, подписывайтесь на `sf-chat-window-delete`.

### Доступность

- Роль: область (`region`).
- Доступное имя: внутренний.
- Клавиши: `Tab`, `Enter`, `Shift+Enter`, `Escape`, `ArrowUp`, `ArrowDown`, `Home`, `End`, `F2`, `Shift+F10`, `Mod+F`.
- Фокус: Части сохраняют свою клавиатуру (перемещаемый фокус списка, Enter в поле). После нового разговора или другого собеседника фокус уходит в поле; когда заканчивается последний ожидаемый ответ разговора, он возвращается туда без прокрутки. Если то, что держало фокус, исчезло (строка ушла в архив), фокус берёт путь назад над полем, но никогда не страница. Проходящая строка уходит, только когда на ней нет ни указателя, ни фокуса, и возвращает фокус в поле. «Изменить» в очереди возвращает вопрос в поле вместе с фокусом; «Убрать» переводит фокус на карточку на его месте, иначе в поле. Поиск по разговору при открытии забирает фокус и при закрытии возвращает его туда, откуда его открыли.

### Минимальная разметка

```html
<sf-chat-window capabilities="assistant feedback proposals conversation-create conversation-manage"></sf-chat-window> with element.connectPort({port: 'simai.chat-port', version: '1.0.0', capabilities: [], raise: (intent, payload) => host.answer(intent, payload)}) and element.setData({me, conversations, conversation: null, messages: []})
```

### Источник

- `simai/ui-pro@9c0b7286e4410a3b06f8e09902bd4e02ff45712d:components/src/smart/chat-window`
- `simai/ui-pro@9c0b7286e4410a3b06f8e09902bd4e02ff45712d:components/src/smart/chat-window/rule.js#name=cl-chat-window`

## См. также

- [Список разговоров](/ru/smart-components/composite/thread-list/) — часть окна слева.
- [Лента сообщений](/ru/smart-components/composite/message-log/) — лента разговора.
- [Поле чата](/ru/smart-components/composite/chat-composer/) — поле вопроса и файлов.
