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
[Подключение Smart-компонентов](/ru/guide/smart-components/connection/#подключение-к-странице).

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

Раздел собран из манифеста компонента выпуска `ui-0c8735b2dc5b` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-chat-message>` |
| Назначение | Одно сообщение чата: ответ помощника с разметкой, источниками, отметкой проверки, заметками, предложением изменения, оценкой и уточнением задачи — или его ожидание; вопрос человека с файлами; а по шаблону `person` — сообщение разговора людей. Сообщение сообщает, что сделал человек; что это значит, решает хост. |
| Контракт | `smart.chat-message`, версия `1.0.2` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | `host-required` |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`, `person`. `default` — ответ помощника или вопрос человека (API.md Message); `person` — сообщение разговора людей.
- `message` — `object` | `null`, по умолчанию `null`. Сообщение: свойство или JSON-остров; тексты рисуются текстом, `html` очищается.
- `display` — `object`, по умолчанию `{}`. Что знает хост, а сервер нет (в 0.3 — `view`): `wait`, `busy`, `feedback`, `retried`, `note`, `code`, `sources_open`, `brief`, `brief_draft`; для `person` — `own`, `first`, `last`, `showName`, `editing`, `askDelete`.
- `features` — `object`, по умолчанию `{"feedback":true,"proposals":true,"memory":true,"brief":false}`. Что предлагает поверхность: оценку, предложения изменений, заметки памяти, уточнение задачи.

### Методы

- `focus(options?: object)` — возвращает `null`. Фокус базового элемента.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components-2/names/). Общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

- `sf-chat-message-retry` — `detail`: `{ id?: string|number, key?: string, kind?: string }`. «Повторить» (словарь §5 retry): неудавшийся ответ `{id}`; неотправленное сообщение человека `{key}` (его клиентский код); неудавшийся файл человека `{id, key, kind: file}`. Имя 0.3 `sf-chat-action {action: retry, id}` отправляется после него до 2026-12-01.
- `sf-chat-message-check` — `detail`: `{ id: string|number }`. «Обновить» при остановленном, задержанном или потерянном ожидании: спросить хост, пришёл ли ответ (собственный глагол чата `check`, словарь 1.1.3 §5.1). Имя 0.3 `sf-chat-action {action: check}` отправляется после него до 2026-12-01.
- `sf-chat-message-rate` — `detail`: `{ id: string|number, value: string, reason?: string|null, note?: string }`. «Полезно» или «Не полезно» `{id, value: up|down}` (словарь §5 rate); «Отправить» в карточке «Что не так» `{id, value: down, reason, note}`. Кнопки показывают оценку сразу; хост держит её в `display.feedback`. Имена 0.3 `sf-chat-action {action: feedback / feedback-send}` отправляются после него до 2026-12-01.
- `sf-chat-message-cancel` — `detail`: `{ id: string|number, kind: string }`. «Не сейчас» или Escape в карточке «Что не так» `{id, kind: rate}` (словарь §5 cancel): простое «не полезно» остаётся. Имя 0.3 `sf-chat-action {action: feedback-skip}` отправляется после него до 2026-12-01.
- `sf-chat-message-drafted` — `detail`: `{ id: string|number, reason: string|null, note: string }`. В карточке «Что не так» изменился выбор или комментарий `{id, reason, note}` (факт; черновик хост держит и в `display.feedback.draft`). Имя 0.3 `sf-chat-action {action: feedback-draft}` отправляется после него до 2026-12-01.
- `sf-chat-message-toggle` — `detail`: `{ id: string|number, kind: string, open: boolean }`. Местная часть открылась или закрылась (словарь §5 toggle): список источников `{kind: sources}` (хост помнит это как `display.sources_open`); у шаблона `person` — редактор `{kind: edit}` и вопрос об удалении `{kind: delete}`, которые хост держит в `display.editing` и `display.askDelete`. Имя 0.3 `sf-chat-action {action: sources}` отправляется после него до 2026-12-01.
- `sf-chat-message-copied` — `detail`: `{ id: string|number, done: boolean }`. Ответ скопирован вместе со списком источников `{id, done}`; строка действий говорит об этом вежливо. Имя 0.3 `sf-chat-action {action: copy}` отправляется после него до 2026-12-01.
- `sf-chat-message-submit` — `detail`: `{ id: string|number, text: string }`. Ответ на уточнение задачи уходит сообщением (словарь §5 submit; API.md v1.2): вариант, свои слова человека, несколько ответов через «; » с «—» для пропущенного или «Да» на карточке. Имя 0.3 `sf-chat-action {action: brief-answer}` отправляется после него до 2026-12-01.
- `sf-chat-message-save` — `detail`: `{ id: string|number, values: object }`. Шаблон `person`: изменённое сообщение `{id, values: {body}}` (словарь §5 save, порт `message.edit`). Неизменённый или пустой текст даёт вместо этого `toggle {kind: edit, open: false}`.
- `sf-chat-message-delete` — `detail`: `{ ids: array }`. Шаблон `person`: «Удалить» подтверждено `{ids: [id]}` (словарь §5 delete, порт `message.delete`).

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

- `simai/ui-pro@7c06d3c6600996b17a3d221250b7389ff4d33629:components/src/smart/chat-message`
- `simai/ui-pro@7c06d3c6600996b17a3d221250b7389ff4d33629:components/src/smart/chat-message/rule.js#name=cl-chat-message`

## См. также

- [Лента сообщений](/ru/smart-components/composite/message-log/) — лента, в которую встаёт сообщение.
- [Поле чата](/ru/smart-components/composite/chat-composer/) — поле вопроса и файлов.
- [Подтверждение изменения](/ru/smart-components/composite/change-confirm/) — карточка предложения внутри ответа.
