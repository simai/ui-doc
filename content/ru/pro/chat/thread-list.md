---
title: "Список разговоров"
description: "Разговоры человека, новые сверху: группы по дням, открытый разговор, переименование, архив и подгрузка."
---

# Список разговоров

:badge[sf-chat-threads]{variant=tonal scheme=primary size=1/2} :badge[2.0.3]{variant=outline scheme=on-surface size=1/2}

`<sf-chat-threads>` — разговоры человека, новые сверху: с ассистентом или
между людьми. Он группирует их по дню последнего изменения, отмечает
открытый, даёт переименовать разговор на месте, отправить его в архив и
просит следующую страницу, когда показался конец списка. Сам список ничего не
загружает: разговоры передаёт приложение.

**Компонент Pro.** Входит в [SIMAI Pro](/ru/pro/), а не в выпуск SIMAI
Framework: поставляется пакетом `pro` из репозитория `simai/ui-pro`.
Лицензия и подключение — на странице [Pro](/ru/pro/#лицензия).

## Пример

:::example {id="smart-components/thread-list/overview" label="Разговоры по дням, открыт второй"}
:::

## Разметка

В разметке — только тег; разговоры передаёт скрипт методом `setThreads()`.

- Разговор — `{id, title, updated_at, archived, caption, unread, avatar}`:
  `caption` — строка под названием (с кем разговор или последнее сообщение),
  `unread` — число непрочитанных, `avatar` — `{image_url, text}`.
- `selected` называет открытый разговор. Список сам его не меняет: после
  `sf-thread-list-select` приложение открывает разговор и задаёт
  `selected`.
- Слот `footer` — место под списком.

## Варианты

### Без групп

`group-by="none"` показывает один список без «Сегодня», «Вчера» и «Раньше» —
для чатов людей, где важнее последнее сообщение. `no-archive` убирает архив,
`no-create` — кнопку нового разговора, `no-manage` — действия строки.

:::example {id="smart-components/thread-list/ungrouped" label="Чаты одним списком, без архива"}
:::

## Состояния

### Загрузка

Пока загружается первая страница, `setLoading(true)` показывает форму списка
и отмечает его занятым.

:::example {id="smart-components/thread-list/state-loading" label="Первая страница загружается"}
:::

### Пусто

Если разговоров нет, список говорит об этом и предлагает начать новый.

:::example {id="smart-components/thread-list/state-empty" label="Разговоров ещё нет"}
:::

## Применение

### Данные и события

Методы `setThreads()`, `appendThreads()`, `upsert()` и `removeThread()`
меняют список; `setStatus()` показывает фразу вместо списка — например,
ошибку. Всё, что делает человек, приходит событиями:

- `sf-thread-list-select` — `{id}`, разговор открыли;
- `sf-thread-list-create` — новый разговор;
- `sf-thread-list-rename` — `{id, title}`, разговор переименовали на месте;
- `sf-thread-list-archive` и `sf-thread-list-unarchive` — `{id}`;
- `sf-thread-list-action` — `{id, action}`, одно из своих действий
  приложения из свойства `actions`;
- `sf-thread-list-load-more` — показался конец списка при `has-more`;
  если страница не загрузилась, вызовите `moreFailed()`;
- `sf-thread-list-view` — `{archived}`, переход в архив и обратно.

```js
const list = document.querySelector('sf-chat-threads');
list.setThreads(await api.threads(), {hasMore: true});
list.addEventListener('sf-thread-list-select', (event) => {
  openConversation(event.detail.id);
  list.selected = event.detail.id;
});
list.addEventListener('sf-thread-list-load-more', async () => {
  try {
    const page = await api.threads({after: cursor});
    list.appendThreads(page.items, {hasMore: page.hasMore});
  } catch {
    list.moreFailed();
  }
});
```

### Аватар строки

`avatar`: `shape` — `circle` (по умолчанию, один человек) или `square` (группа,
канал); `icon` — знак вместо инициалов (канал, агент, бот; имя значка Framework),
картинка `image-url` важнее знака. Нет `avatar` — нет и колонки под него: в списке
только с ИИ-разговорами пустого места слева не остаётся. Инициалы рисуются
приглушённым цветом по названию разговора (`sf-avatar` `hue="auto"`, см.
[Цвет инициалов](/ru/smart/content/avatar/#цвет-инициалов)): у одного
названия цвет всегда один.
`activity` (`running`, `waiting`, `done`, `stopped`, `failed`) is where the work in the
conversation is: a compact `sf-badge` in the row, its word the accessible name.
A pinned conversation (`pinned: true`, Mirai24 API v1.1) leads the list under its own
heading «Закреплённые» (`pinned`) and carries a quiet «Закреплён» line
(`pinned-text`); without groups (`group-by="none"`) the pinned ones simply lead.
Pinning and unpinning are the host's row actions: it offers them in `actions`
(`{id: "pin", text: "Закрепить"}`), hears them as `sf-thread-list-apply` and
gives the list the entry with `pinned` changed.
The list keeps only the conversations of the shown view: with `archived` the
archived ones, without it the rest. A title is cut at 120 characters when renamed.
The 1.0 spellings `updated_at` and `avatar.image_url` are read until 2026-12-01 and
noted in `SF.deprecations`.

## Доступность

- Список — навигация с одной остановкой `Tab`: `↑`, `↓`, `Home` и `End`
  переходят между разговорами, `Enter` и `Space` открывают.
- Открытый разговор отмечен `aria-current="page"`.
- `F2` переименовывает (`Enter` сохраняет, `Escape` отменяет),
  `Shift+F10` или клавиша меню открывает действия строки.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-2bd5a3ab478a` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-chat-threads>` |
| Назначение | Разговоры человека, новые сверху: по дням, открытый отмечен, переименование на месте, архив и действия через меню Framework, одна остановка Tab, следующая страница — по достижении конца. |
| Контракт | `smart.chat-threads`, версия `2.0.3` |
| Поставка | пакет `pro` (`SF_BOOT_CONFIG.packages.pro`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="rows"`; пока ждёт данные, рисует свой скелетон ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`. Имя шаблона отрисовки; `default` — встроенный.
- `root-class` — `string`, по умолчанию пусто. Свои CSS-классы для нарисованного элемента.
- `root-style` — `string`, по умолчанию пусто. Свои стили для нарисованного элемента, например `max-width: 20rem`.
- `has-more` — `boolean`, по умолчанию `false`. Есть следующая страница: когда показался конец, список её просит.
- `archived` — `boolean`, по умолчанию `false`. Показывает архив: переход обратно, «Вернуть» вместо «В архив», без нового разговора.
- `no-create` — `boolean`, по умолчанию `false`. Без кнопки «Новый разговор».
- `no-manage` — `boolean`, по умолчанию `false`. Без действий строки: нет меню и F2.
- `no-archive` — `boolean`, по умолчанию `false`. Без архива: нет перехода в него и нет «В архив» среди действий строки.
- `group-by` — `string`, по умолчанию `day`, значения: `day`, `none`. `day` — группы «Сегодня», «Вчера», день недели, дата по `updated-at` в часовом поясе читателя (как в `sf-list`). `none` — один список.
- `label` — `string`. Доступное имя навигации; пусто — «Разговоры» или «Архив» на языке страницы.
- `loading` — `boolean`, по умолчанию `false`. Форма списка, пока загружается первая страница.
- `status` — `string`, по умолчанию пусто. Фраза вместо списка (ошибка); пустая строка её убирает.
- `selected` — `string`, по умолчанию пусто. открытый разговор; нажатие просит о нём через open {id}, а приложение записывает его обратно.
- `threads` — `array` из `object`, по умолчанию `[]`.
- `create-commands` — `array` из `object`, по умолчанию `[]`. Команды в шапке вместо «Нового разговора»: [{id, text, icon?}], свойство. Нажатая команда сообщает create {kind: id}. Если список пуст, остаётся один «Новый разговор», как раньше; no-create и архив убирают и команды.
- `actions` — `array`, по умолчанию `[]`.

### Методы

- `setThreads(args: object|list)` — возвращает `object`. Заменяет список; остаются только разговоры показанного вида (в архиве или нет).
- `appendThreads(args: object|list)` — возвращает `object`. Следующая страница после показанных; разговор, который уже есть в списке, не повторяется.
- `upsert(args: object)` — возвращает `object`. Новый или изменившийся разговор; встаёт на место по своей дате.
- `removeThread(args: object|string)` — возвращает `object`. Убирает один разговор из списка.
- `moreFailed()` — возвращает `object`. Следующую страницу загрузить не удалось: достижение конца попросит снова.
- `rename(args: object|string)` — возвращает `object`. Начинает переименование разговора на месте, как F2.
- `openMenu(args: object|string)` — возвращает `object`. Открывает действия разговора, как «⋯» в строке и Shift+F10.
- `setLoading(loading: boolean)` — возвращает `null`. Пока загружается первая страница: форма списка и занятость списка.
- `setStatus(message: string)` — возвращает `null`. Фраза вместо списка (ошибка); пусто — убирает её.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-chat-threads-create` — `detail`: `{ kind?: string }`. Нажали «Новый разговор» или команду создания (`kind` — её `id`).
- `sf-chat-threads-open` — `detail`: `{ id: any }`. Человек просит открыть беседу; приложение записывает `selected` обратно.
- `sf-chat-threads-rename` — `detail`: `{ id: any, title: string }`. Разговор переименовали на месте; новое название видно сразу. Приложение, которое не может его сохранить, возвращает прежнее название через upsert.
- `sf-chat-threads-archive` — `detail`: `{ ids?: array, id: any }`. Архивировать `{ids, id}` (id остаётся для слушателей версии 1.0).
- `sf-chat-threads-restore` — `detail`: `{ ids?: array, id: any }`. Восстановить `{ids, id}`.
- `sf-chat-threads-apply` — `detail`: `{ action: string, scope?: any, ids?: array, id: any }`. Одно из действий приложения над строкой: `{action, scope: entry, ids, id}`.
- `sf-chat-threads-load-more` — `detail`: `{ direction: any }`. Конец списка показался на экране, пока `has-more`: `{direction: after}`.
- `sf-chat-threads-toggle` — `detail`: `{ archived: boolean }`. Архив или путь обратно.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: внутренний.
- Клавиши: `Tab`, `ArrowUp`, `ArrowDown`, `Home`, `End`, `Enter`, `Space`, `F2`, `Shift+F10`, `ContextMenu`, `Escape`.
- Фокус: Одна остановка Tab на список (подвижный tabindex: строка, к которой перешли последней, иначе открытая, иначе первая). Открытая строка несёт aria-current=page и средний вес шрифта, а в режиме принудительных цветов — системную подсветку. F2 переименовывает на месте (Enter сохраняет, Escape отменяет и не доходит до окружающей панели, уход из поля сохраняет); фокус возвращается на строку. Shift+F10 или клавиша меню открывает действия строки; «⋯» не является остановкой Tab.

### Минимальная разметка

```html
<sf-chat-threads selected="t1"></sf-chat-threads>
```

### Источник

- `simai/ui-pro@dc13c0f724009847add06c25bf98a6c033c037db:components/src/smart/chat-threads`
- `simai/ui-pro@dc13c0f724009847add06c25bf98a6c033c037db:components/src/smart/chat-threads/rule.js#name=cl-chat-threads`
