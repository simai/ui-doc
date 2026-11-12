---
title: "Лента сообщений"
description: "Прежнее имя ленты SIMAI Framework sf-list-feed в пакете Pro: переписка прокручиваемой колонкой, которая отвечает на прежние имена до 2027-01-01."
---

# Лента сообщений

:badge[sf-message-log]{variant=tonal scheme=primary size=1/2} :badge[2.0.2]{variant=outline scheme=on-surface size=1/2}

`<sf-message-log>` — устаревшее имя [Ленты](/ru/smart/content/list-feed/)
(`sf-list-feed`) SIMAI Framework, которое работает до 2027-01-01. Поведение
ленты — положение чтения, серии одного автора, растущие записи, перерисовка на
месте, объявления и клавиатура — принадлежит `sf-list-feed`: элемент под
прежним тегом — её наследник, он рисует ту же разметку, отправляет её события
и отвечает на прежние имена. В новом коде пишите `<sf-list-feed>`.

**Компонент Pro.** Входит в [SIMAI Pro](/ru/pro/), а не в выпуск SIMAI
Framework: поставляется пакетом `pro` из репозитория `simai/ui-pro`.
Лицензия и подключение — на странице [Pro](/ru/pro/#лицензия).

## Пример

:::example {id="smart-components/message-log/overview" label="Переписка с ранней историей"}
:::

## Разметка

В разметке — только тег; высоту ему даёт контейнер. Сам тег —
`display: contents`, а колонка растягивается во flex-контейнере и
прокручивается внутри. Правило `cl-message-log` связано с `cl-list-feed`:
Loader загружает ленту вместе с элементом, а элемент определяется, как только
определена лента.

- Сообщения передаёт скрипт: `setMessages()`, `prependMessages()`,
  `upsert()`, или JSON-блок `data-sf-settings` с `messages`.
- Сообщение — обычные данные. Компонент читает `id` (обязательный
  постоянный ключ), `author`, `own`, `growing`, а без своей функции
  отрисовки — ещё `author-name` и `text`. Остальные поля — для функции
  отрисовки приложения.
- Слот `empty` показывается вместо колонки, пока сообщений нет.

## Варианты

### Своя отрисовка сообщения

Свойство `renderMessage(message, context)` возвращает узел, строку (она
выводится как текст) или `null`; в `context` — те же поля, что у
`renderItem` ленты. Без функции лента выводит имя автора над первым
сообщением серии и текст — только текст, никогда разметку.

:::example {id="smart-components/message-log/custom-render" label="Сообщения человека и ассистента"}
:::

## Состояния

### Пусто

Пока сообщений нет, вместо колонки виден слот `empty`.

:::example {id="smart-components/message-log/state-empty" label="Переписки ещё нет"}
:::

## Применение

### Прежние имена

Каждое прежнее имя работает до 2027-01-01 и записывается в
`SF.deprecations`; первый `<sf-message-log>` на странице один раз
называется в консоли.

| Прежнее имя | Имя ленты |
|:---|:---|
| `<sf-message-log>` | `<sf-list-feed>` |
| `messages` | `items` |
| `setMessages(messages, {hasMore})` | `setItems(items, {hasMore})` |
| `prependMessages(messages, {hasMore})` | `prependItems(items, {hasMore})` |
| `renderMessage(message, context)` | `renderItem(entry, context)`; в `context` вместо `log` — `feed` |
| `announceMessage(message, context)` | `announceItem(entry, context)` |
| `sf-message-log-load-more`, `-begun`, `-chunk`, `-completed`, `-failed`, `-cancelled` | `sf-list-feed-load-more`, `-begun`, `-chunk`, `-completed`, `-failed`, `-cancelled` |
| `setHasMore(value)` | настройка `has-more` (`hasMore`) |
| `isNearBottom()` | `isAtLatest()` |
| `cl-message-log` | `cl-list-feed` |
| `--sf-message-log-column-width`, `-inset`, `-run-gap`, `-turn-gap`, `-fade-size` | `--sf-list-feed-column-width`, `-inset`, `-run-gap`, `-turn-gap`, `-fade-size` |

Каждое событие ленты уходит и под прежним именем с тем же `detail`; один
`preventDefault()` отменяет оба. До 2026-12-01 действуют ещё более ранние
имена: событие `sf-message-log-load-earlier` (теперь `-load-more`), поля
сообщения `pending` (теперь `growing`) и `author_name` (теперь
`author-name`), а `remove(id)` — это `detach(id)`; `remove()` без `id` —
браузерный.

Разметка и внутренние переменные — ленты: стили страницы для
`.sf-message-log`, `.sf-message-log__*` и `--sf-message-log--*` переносятся
на `.sf-list-feed`, `.sf-list-feed__*` и `--sf-list-feed--*`. Публичные
переменные `--sf-message-log-*` продолжают работать.

### Ранняя история

При `has-more` вверху есть кнопка «Показать предыдущие сообщения», а верх колонки один раз
просит предыдущие сообщения: приходит `sf-message-log-load-more` (и
`sf-list-feed-load-more`) с `{direction: 'before', before}`, где `before` —
`id` первого показанного сообщения. Ответ передайте `prependMessages()`; если
загрузить не удалось, вызовите `earlierFailed()`.

### Новые и изменившиеся сообщения

`upsert({item: message})` добавляет сообщение в конец или обновляет его на
месте; `upsert({item: saved, options: {replaces: localKey}})` заменяет отправленное
сообщение с местным ключом ответом сервера, не меняя его места.
`scrollToLatest()` возвращает вниз, `isAtLatest()` отвечает, виден ли конец.

```js
const log = document.querySelector('sf-message-log');
log.setMessages(await api.messages(threadId), {hasMore: true});
log.addEventListener('sf-message-log-load-more', async (event) => {
  const page = await api.messages(threadId, {before: event.detail.before});
  log.prependMessages(page.items, {hasMore: page.hasMore});
});
```

## Доступность

- Колонка — названная область (по умолчанию «Переписка»), которая получает
  фокус и прокручивается обычными клавишами.
- Законченное сообщение другого участника объявляется один раз вежливо
  (`live="polite"`); `live="off"` оставляет объявления приложению — метод
  `announce()`.
- Кнопка «К последнему сообщению» переносит туда фокус. Из сообщения в фокусе
  `↑` и `↓` переходят к соседнему, `Home` и `End` — к первому и
  последнему, `↑` на первом просит раннюю историю.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-2bd5a3ab478a` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-message-log>` |
| Назначение | Та же лента, что `sf-list-feed`, под другим тегом; отвечает и на имена `messages`, `setMessages`, `prependMessages`, `renderMessage`, `announceMessage` и события `sf-message-log-*`. |
| Контракт | `smart.message-log`, версия `2.0.2` |
| Поставка | пакет `pro` (`SF_BOOT_CONFIG.packages.pro`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |
| Заготовка до прихода кода | нет: атрибут `data-sf-skeleton` не пишется; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`. Имя шаблона отрисовки; `default` — встроенный.
- `root-class` — `string`, по умолчанию пусто. Свои CSS-классы для нарисованного элемента.
- `root-style` — `string`, по умолчанию пусто. Свои стили для нарисованного элемента, например `max-width: 20rem`.
- `changes` — `string`, по умолчанию `content`, значения: `content`, `revision`. Как сравниваются две записи одного сообщения.
- `has-more` — `boolean`, по умолчанию `false`. Есть ранняя история: видна кнопка «Раньше», а достижение верха её просит.
- `label` — `string`. Доступное имя области; пусто — «Переписка» на языке страницы.
- `live` — `string`, по умолчанию `polite`, значения: `polite`, `off`. polite: законченное сообщение другого участника объявляется один раз. off: объявляет приложение через announce(), или ничего не объявляется.
- `messages` — `array` из `object`, по умолчанию `[]`.

### Методы

- `setMessages(args: object|list)` — возвращает `object`. Заменяет весь разговор и показывает его конец. Содержимое не объявляется.
- `prependMessages(args: object|list)` — возвращает `object`. Ранняя история сверху, без сдвига читаемого; завершает запрос ранней истории.
- `upsert(args: object)` — возвращает `object`. Добавляет сообщение в конец или обновляет его на месте; перерисовывает, только если изменилось то, что оно показывает.
- `setView(args: object)` — возвращает `object`. Дополняет вид уже показанного сообщения.
- `detach(args: object|string)` — возвращает `object`. Убрать одно сообщение; если это был поток, он кончается как отменённый. `remove(id)` читается до 2026-12-01.
- `cancel(args: object|string)` — возвращает `object`. Сразу прекратить рисовать растущее сообщение; поток кончается как отменённый.
- `redraw(args?: object|string)` — возвращает `object`. Перерисовывает одно сообщение или все, после того как изменились собственные входные данные функции отрисовки.
- `requestEarlier()` — возвращает `object`. Просит раннюю историю, как кнопка и достижение верха; пока запрос не завершён — ничего.
- `earlierFailed()` — возвращает `object`. Приложение не смогло загрузить раннюю историю: кнопку снова можно нажать.
- `scrollToLatest(args?: object)` — возвращает `object`. Прокручивает к последнему сообщению; с focus фокус переходит на него.
- `announce(args: object|string)` — возвращает `object`. Один раз произносит текст через вежливую живую область ленты (обрезается до 240 символов).
- `setHasMore(value: boolean)` — возвращает `null`. Есть ли ранняя история.
- `isAtLatest()` — возвращает `boolean`. Виден ли конец разговора.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-message-log-load-more` — `detail`: `{ direction?: any, before: any }`. Запрошена более ранняя история: `{direction: before, before}`. Отменить запрос — `earlierFailed()`.
- `sf-message-log-begun` — `detail`: `{ id: any }`. Пришло растущее сообщение.
- `sf-message-log-chunk` — `detail`: `{ id: any, revision?: string }`. Растущее сообщение изменилось и нарисовано заново на том же месте.
- `sf-message-log-completed` — `detail`: `{ id: any }`. Сообщение перестало расти целиком.
- `sf-message-log-failed` — `detail`: `{ id: any, reason: string, message: string }`. Сообщение перестало расти с ошибкой: `{id, reason, message}`.
- `sf-message-log-cancelled` — `detail`: `{ id: any }`. Поток остановлен: cancel, ожидание прервано, сообщение убрано, беседа заменена.
- `sf-message-log-load-earlier` — `detail` не описан. То же, что `sf-list-feed-load-more`.

### Доступность

- Роль: область (`region`).
- Доступное имя: внутренний.
- Клавиши: `Tab`, `Enter`, `Space`, `ArrowUp`, `ArrowDown`, `Home`, `End`.
- Фокус: Прокручиваемая колонка — названная область с фокусом, внутри — лог с aria-live off; один вежливый диктор объявляет новое один раз. «К последнему сообщению» переносит фокус на последнее сообщение (article приложения, иначе элемент списка). Из сообщения в фокусе ArrowUp/ArrowDown переходят к соседнему, Home/End — к первому и последнему загруженному; ArrowUp на первом просит раннюю историю. Плавная прокрутка учитывает prefers-reduced-motion.

### Минимальная разметка

```html
<sf-message-log label="Переписка"></sf-message-log>
```

### Источник

- `simai/ui-pro@9fcf81535f75d3a0eb0dbc31983c55e7346ada3d:components/src/smart/message-log`
- `simai/ui-pro@9fcf81535f75d3a0eb0dbc31983c55e7346ada3d:components/src/smart/message-log/rule.js#name=cl-message-log`
