---
title: "Сообщение чата"
description: "Одно сообщение чата: ответ помощника с разметкой, источниками и оценкой, вопрос человека с файлами и сообщение разговора людей."
---

# Сообщение чата

`<sf-chat-message>` рисует одно сообщение чата: ответ помощника с разметкой,
источниками, отметкой проверки и оценкой, вопрос человека с файлами, а по
шаблону `person` — сообщение разговора людей. Сообщение ничего не отправляет
на сервер и ничего не решает: каждое действие — событие, а смысл ему даёт
хост.

Компонент поставляется пакетом `larena` из репозитория `simai/ui-pro`, а не
выпуском SIMAI Framework. Как подключить пакет — в разделе
[Подключение смарт-компонентов](/ru/guide/smart-components/page/#подключение-к-странице).

## Пример

:::example {id="smart-components/chat-message/overview" label="Ответ с разметкой, источниками и оценкой"}
:::

## Разметка

В разметке — один тег `<sf-chat-message>`; сообщение, `display` и `features`
передаёт хост свойствами или JSON-островом настроек.

- `message` — само сообщение; без него элемент пуст. Новая установка, даже
  того же объекта, перерисовывает сообщение.
- `display` — то, что знает хост, а сервер нет: ожидание, занятость, оценка,
  повтор, открытые источники, черновики; для шаблона `person` — своё ли это
  сообщение, первое и последнее в группе, правка и вопрос об удалении.
- `features` — что предлагает поверхность: оценка, предложения изменений,
  память, уточнение задачи.
- Разметку ответа сервера элемент чистит ещё раз в браузере: абзацы, списки,
  цитаты, код, таблицы, заголовки трёх размеров и ссылки только `http`,
  `https`, `mailto` и корневые.

## Варианты

### Разговор людей

Шаблон `person` рисует сообщение разговора людей: автор, группировка с
соседями, своё — справа, время, пометка «изменено», файлы, правка и удаление.

:::example {id="smart-components/chat-message/person" label="Сообщение собеседника и своё"}
:::

## Состояния

### Ответ пишется

Пока ответ готовится, сообщение показывает строку этапа — «Ищу в базе
знаний», «Пишу ответ». При остановленном или задержанном ожидании и без связи
рядом появляется «Обновить».

:::example {id="smart-components/chat-message/waiting" label="Строка этапа"}
:::

### Ответа не будет

Отказ, закрытый разговор, ошибка и предел запросов показываются словами
хоста. У ошибки есть «Повторить», пока не повторили; у предела — время
обновления второй строкой.

:::example {id="smart-components/chat-message/failed" label="Ошибка и предел запросов"}
:::

## Применение

### Одно сообщение на странице

```html
<sf-chat-message></sf-chat-message>
<script type="module">
  const message = document.querySelector('sf-chat-message');
  message.message = {id: 'msg_03', role: 'assistant', status: 'completed',
                     text: 'Ежегодный отпуск — 28 календарных дней.'};
  message.addEventListener('sf-chat-message-rate', (event) => rate(event.detail.id, event.detail.value));
</script>
```

### Сообщение в ленте

Окно чата ставит сообщение в [Ленту сообщений](/ru/smart-components/composite/message-log/)
через её `renderMessage`; сама лента о чате ничего не знает. Странице, которой
нужно одно сообщение — например, для предпросмотра, — элемент ставят сами.

```js
log.renderMessage = (message, {view}) => {
  const node = document.createElement('sf-chat-message');
  node.features = features;
  node.display = view ?? {};
  node.message = message;
  return node;
};
```

### Источники и оценка

Сноски `[n]` в тексте становятся кнопками там, где источник есть, и не внутри
кода; «Источники · N» в строке действий открывает список, а сноска открывает
его на своём источнике. Отрывок длиннее 160 знаков свёрнут до двух строк.
Оценка «Полезно» и «Не полезно» спрашивает «Что не так с ответом?» —
причину и комментарий — и уходит событиями `rate`, `cancel` и `drafted`.

### Среди людей

Всё включается полями и `display`, которые даёт хост; без них сообщение прежнее.

| Поле или настройка | Что это |
|:---|:---|
| `message.reactions` | `[{emoji, count, mine}]`, оба шаблона: пилюли под сообщением, нажатие — событие `react {id, emoji, on}`. Сообщение само счётчик не меняет. |
| `message.reply_to` | `{id, author: {name}, text, is_deleted?}`, оба шаблона: цитата вверху, нажатие — `open {id, kind: quote, target}`. |
| `message.speaker` | `{kind: assistant\|agent\|bot, name}`, шаблон `default`: кто говорит. |
| `message.asked_by` | `{name}`: «по просьбе …», имя как дано (хост даёт падеж: «Анны»). |
| `display.document` | документ без пузыря на всю колонку, копирование и оценка видны всегда. `display.showAuthor: false` — без знака и имени (один на один). |
| `display.canReact`, `canReply` | кнопки «Реакция» и «Ответить»; у `person` «Изменить» и «Удалить» тогда уходят в «⋯». Без обоих — прежние две кнопки. |
| `display.reacting` | эмодзи в пути: пилюля ждёт, второго нажатия нет. |
| `display.picker` | открыт выбор из шести; закрытие и открытие — `toggle {kind: react, open, quiet?}`. |
| `display.replyLoaded: false`, `replyDeleted` | оригинала нет в ленте: подсказка, ничего не двигается; он удалён: «Сообщение удалено». |
| `display.canStop` | «Остановить ответ» в ожидании документа, событие `stop {id}`. |
| `display.fold_open` | длинный текст раскрыт; `toggle {kind: fold, open}`. |

Длинный текст документа сворачивается, если в нём больше примерно 14 строк (и ещё две
в запас), считая по высоте строки в колонке; таблица не считается и остаётся на виду,
предложение стоит вне текста. Аватар человека — `sf-avatar` (`inert`, не точка табуляции
в ленте; не загрузилась картинка — инициалы); знак не человека — разметка `avatars` со
`sf-icon`: настройки значка у `sf-avatar` нет. Слово рядом с именем — `sf-badge`. Вид без
рантайма (виджет, пилот) рисует прежние буквы и значок, у него нет `ctx.avatar`.

### Внешний вид

Открытые переменные читаются, но не задаются компонентом:
`--sf-chat-message-width` (ширина колонки чтения),
`--sf-chat-message-text-color`, `--sf-chat-message-muted-color`,
`--sf-chat-message-bubble-color` и `--sf-chat-message-border-color`.

## Доступность

- Сообщение — `article` со своим именем: «Помощник», «Вы», а у шаблона
  `person` — автор. Ожидающий ответ несёт `aria-busy="true"`.
- Кнопки копирования, оценки, источников и сносок названы; результат
  копирования и оценки сообщает вежливая живая область, а ошибка и обрыв
  связи — `role="alert"`.
- В вопросе «Что не так» Enter отправляет, Escape убирает; в редакторе
  шаблона `person` Enter сохраняет, Shift+Enter переносит строку, Escape
  отменяет, а вопрос об удалении ставит фокус на «Отмена».

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-7153f7a9c092` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-chat-message>` |
| Назначение | Одно сообщение чата: ответ помощника с разметкой, источниками, отметкой проверки, заметками, предложением изменения, оценкой и уточнением задачи — или его ожидание; вопрос человека с файлами; а по шаблону `person` — сообщение разговора людей. Сообщение сообщает, что сделал человек; что это значит, решает хост. |
| Контракт | `smart.chat-message`, версия `1.4.0` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |

### Атрибуты

- `template` — `string`, по умолчанию `default`. `default` — ответ помощника или вопрос человека (API.md Message); `person` — сообщение разговора людей.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `view` — `string`, по умолчанию `{}`. Псевдоним с датой для `display` до 2026-12-01.
- `message` — `object`. Сообщение: свойство или JSON-остров; текст выводится как текст, html очищается. Между людьми (1.4.0): reactions, reply_to; для автора-документа — asked_by.
- `display` — `object`, по умолчанию `{}`. То, что знает хост, но не сервер (вид 0.3): wait, busy, feedback, retried, note, code, sources_open, steps_open, brief, brief_draft; для person — own, first, last, showName, editing, askDelete, conflict (1.2.0); divider (1.2.0); day, editLimit (1.3.0). Между людьми (1.4.0): canReact, canReply, reacting, picker, replyLoaded, replyDeleted; document, showAuthor, canStop, askDelete, fold_open.
- `features` — `object`, по умолчанию `{"feedback":true,"proposals":true,"memory":true,"brief":false}`. Что предлагает поверхность: оценку, предложения изменений, заметки памяти, уточнение задачи.

### Методы

- `focus(options?: object)` — возвращает `null`. Фокус базового элемента.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-chat-message-retry` — `detail`: `{ id?: any, key?: string, kind?: string }`. «Повторить» (словарь §5 retry): неудавшийся ответ `{id}`; неотправленное сообщение человека `{key}` (его клиентский код); неудавшийся файл человека `{id, key, kind: file}`. Имя 0.3 `sf-chat-action {action: retry, id}` отправляется после него до 2026-12-01.
- `sf-chat-message-check` — `detail`: `{ id: any }`. «Обновить» при остановленном, задержанном или потерянном ожидании: спросить хост, пришёл ли ответ (собственный глагол чата `check`, словарь 1.1.3 §5.1). Имя 0.3 `sf-chat-action {action: check}` отправляется после него до 2026-12-01.
- `sf-chat-message-rate` — `detail`: `{ id: any, value: string, reason?: string|null, note?: string }`. «Полезно» или «Не полезно» `{id, value: up|down}` (словарь §5 rate); «Отправить» в карточке «Что не так» `{id, value: down, reason, note}`. Кнопки показывают оценку сразу; хост держит её в `display.feedback`. Имена 0.3 `sf-chat-action {action: feedback / feedback-send}` отправляются после него до 2026-12-01.
- `sf-chat-message-cancel` — `detail`: `{ id: any, kind: string }`. «Не сейчас» или Escape в карточке «Что не так» `{id, kind: rate}` (словарь §5 cancel): простое «не полезно» остаётся. Имя 0.3 `sf-chat-action {action: feedback-skip}` отправляется после него до 2026-12-01.
- `sf-chat-message-drafted` — `detail`: `{ id: any, reason: string|null, note: string }`. В карточке «Что не так» изменился выбор или комментарий `{id, reason, note}` (факт; черновик хост держит и в `display.feedback.draft`). Имя 0.3 `sf-chat-action {action: feedback-draft}` отправляется после него до 2026-12-01.
- `sf-chat-message-toggle` — `detail`: `{ id: any, kind: string, open: boolean, quiet?: boolean }`. Открылась или закрылась локальная часть (словарь §5 toggle): список источников {kind: sources} (хост запоминает его как display.sources_open), шаги ответа {kind: steps} (display.steps_open, 1.1.0); в шаблоне person — редактор {kind: edit} и вопрос об удалении {kind: delete}, которые хост держит как display.editing и display.askDelete. Прежнее sf-chat-action {action: sources} идёт следом до 2026-12-01. Между людьми (1.4.0): выбор реакции {kind: react} и сворачивание длинного текста {kind: fold}.
- `sf-chat-message-open` — `detail`: `{ id: any, kind: any, source?: object, target?: any }`. Источник или файл ответа просит предпросмотр: {id, kind: preview, source}. Хост, который его показывает, отменяет событие; иначе сноска открывает список источников (файл — новую вкладку). Нажатие на цитату: {id, kind: quote, target}.
- `sf-chat-message-copied` — `detail`: `{ id: any, done: boolean }`. Ответ скопирован вместе со списком источников `{id, done}`; строка действий говорит об этом вежливо. Имя 0.3 `sf-chat-action {action: copy}` отправляется после него до 2026-12-01.
- `sf-chat-message-submit` — `detail`: `{ id: any, text: string }`. Ответ на уточнение задачи уходит сообщением (словарь §5 submit; API.md v1.2): вариант, свои слова человека, несколько ответов через «; » с «—» для пропущенного или «Да» на карточке. Имя 0.3 `sf-chat-action {action: brief-answer}` отправляется после него до 2026-12-01.
- `sf-chat-message-save` — `detail`: `{ id: any, values: object }`. Шаблон `person`: изменённое сообщение `{id, values: {body}}` (словарь §5 save, порт `message.edit`). Неизменённый или пустой текст даёт вместо этого `toggle {kind: edit, open: false}`.
- `sf-chat-message-delete` — `detail`: `{ ids: array }`. Шаблон `person`: «Удалить» подтверждено `{ids: [id]}` (словарь §5 delete, порт `message.delete`).
- `sf-chat-message-react` — `detail`: `{ id: any, emoji: string, on: boolean }`. Плашка реакции или выбор реакции: {id, emoji, on}. Счётчик ведёт хост; display.reacting говорит, что реакция в пути.
- `sf-chat-message-reply` — `detail`: `{ id: any }`. «Ответить»: {id}. Хост решает, на что отвечает поле.
- `sf-chat-message-stop` — `detail`: `{ id: any }`. Остановка на ожидании документа, где это разрешает display.canStop: {id}.
- `sf-chat-action` — устаревший псевдоним события `sf-chat-message-retry`: приходит с тем же `detail`, подписывайтесь на `sf-chat-message-retry`.

### Доступность

- Роль: статья (`article`).
- Доступное имя: внутренний.
- Клавиши: `Tab`, `Enter`, `Escape`, `Shift+Enter`.
- Фокус: Сообщение — `article` с именем «Помощник» или «Вы» (у шаблона `person` — автор или «Вы»); ожидающий ответ несёт `aria-busy`. Копирование, оценка, источники и сноски — обычные кнопки с именами; сноска открывает список источников на своём источнике и переводит на него фокус; результат копирования и оценки сообщает вежливая область в строке действий; ошибка и обрыв связи — `role=alert`. В карточке «Что не так» Enter отправляет, Escape убирает; в уточнении задачи Enter в «Своём варианте» отвечает; в редакторе шаблона `person` Enter сохраняет, Shift+Enter переносит строку, Escape отменяет; вопрос об удалении ставит фокус на «Отмена».

### Минимальная разметка

```html
<sf-chat-message></sf-chat-message> with element.message = {id: 'msg_03', role: 'assistant', status: 'completed', text: 'Ежегодный отпуск — 28 календарных дней.'}
```

### Источник

- `simai/ui-pro@86a389a5e6da8417b14a96a2aae65e155bb33137:components/src/smart/chat-message`
- `simai/ui-pro@86a389a5e6da8417b14a96a2aae65e155bb33137:components/src/smart/chat-message/rule.js#name=cl-chat-message`

## См. также

- [Лента сообщений](/ru/smart-components/composite/message-log/) — лента, в которую встаёт сообщение.
- [Поле чата](/ru/smart-components/composite/chat-composer/) — поле вопроса и файлов.
- [Подтверждение изменения](/ru/smart-components/composite/change-confirm/) — карточка предложения внутри ответа.
