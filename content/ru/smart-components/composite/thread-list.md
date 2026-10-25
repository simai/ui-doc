---
title: "Список разговоров"
description: "Разговоры человека, новые сверху: группы по дням, открытый разговор, переименование, архив и подгрузка."
---

# Список разговоров

`<sf-thread-list>` — разговоры человека, новые сверху: с ассистентом или
между людьми. Он группирует их по дню последнего изменения, отмечает
открытый, даёт переименовать разговор на месте, отправить его в архив и
просит следующую страницу, когда показался конец списка. Сам список ничего не
загружает: разговоры передаёт приложение.

Компонент поставляется пакетом `larena` из репозитория `simai/ui-pro`
(SIMAI Pro, папка `components/`), а не выпуском Framework. Лицензия пакета —
PolyForm Small Business 1.0.0 или PolyForm Noncommercial 1.0.0, по запросу —
коммерческая лицензия SIMAI; в составе Larena — лицензия Larena. Как
подключить пакет — в разделе
[Подключение Smart-компонентов](/ru/guide/smart-components/connection/#подключение-к-странице).

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
const list = document.querySelector('sf-thread-list');
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

## Доступность

- Список — навигация с одной остановкой `Tab`: `↑`, `↓`, `Home` и `End`
  переходят между разговорами, `Enter` и `Space` открывают.
- Открытый разговор отмечен `aria-current="page"`.
- `F2` переименовывает (`Enter` сохраняет, `Escape` отменяет),
  `Shift+F10` или клавиша меню открывает действия строки.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-357568a20a7e` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-thread-list>` |
| Назначение | Разговоры человека, новые сверху: по дням, открытый отмечен, переименование на месте, архив и действия через меню Framework, одна остановка Tab, следующая страница — по достижении конца. |
| Контракт | `smart.thread-list`, версия `1.0.0` |
| Поставка | пакет `larena` (`SF_BOOT_CONFIG.packages.larena`) |
| [Жизненный цикл](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | `host-required` |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="rows"`; пока ждёт данные, рисует свой скелетон ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `selected` — `string`, по умолчанию пусто. id открытого разговора.
- `has-more` — `boolean`, по умолчанию `false`. Есть следующая страница: когда показался конец, список её просит.
- `archived` — `boolean`, по умолчанию `false`. Показывает архив: переход обратно, «Вернуть» вместо «В архив», без нового разговора.
- `no-create` — `boolean`, по умолчанию `false`. Без кнопки «Новый разговор».
- `no-manage` — `boolean`, по умолчанию `false`. Без действий строки: нет меню и F2.
- `no-archive` — `boolean`, по умолчанию `false`. Без архива: нет перехода в него и нет «В архив» среди действий строки.
- `group-by` — —, по умолчанию `day`, значения: `day`, `none`. day: «Сегодня», «Вчера», «Раньше» по updated_at в часовом поясе читателя. none: один список.
- `label` — `string`, по умолчанию пусто. Доступное имя навигации; пусто — «Разговоры» или «Архив» на языке страницы.

### Методы

- `setThreads(threads: array, options?: object)` — возвращает `null`. Заменяет список; остаются только разговоры показанного вида (в архиве или нет).
- `appendThreads(threads: array, options?: object)` — возвращает `null`. Следующая страница после показанных; разговор, который уже есть в списке, не повторяется.
- `upsert(thread: object)` — возвращает `null`. Новый или изменившийся разговор; встаёт на место по своей дате.
- `removeThread(id: string|number)` — возвращает `null`. Убирает один разговор из списка.
- `setLoading(loading: boolean)` — возвращает `null`. Пока загружается первая страница: форма списка, и список занят.
- `setStatus(message: string)` — возвращает `null`. Фраза вместо списка (ошибка); пустая строка её убирает.
- `moreFailed()` — возвращает `null`. Следующую страницу загрузить не удалось: достижение конца попросит снова.
- `rename(id: string|number)` — возвращает `null`. Начинает переименование разговора на месте, как F2.
- `openMenu(id: string, anchor: object)` — возвращает `null`. Открывает действия разговора, как «⋯» в строке и Shift+F10.

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

- `sf-thread-list-create` — `detail`: `{  }`. Нажали «Новый разговор».
- `sf-thread-list-select` — `detail`: `{ id: string }`. Разговор открыли. Список сам не меняет selected — его задаёт хост.
- `sf-thread-list-rename` — `detail`: `{ id: string, title: string }`. Разговор переименовали на месте; новое название видно сразу. Хост, который не может его сохранить, возвращает прежнее название через upsert.
- `sf-thread-list-archive` — `detail`: `{ id: string }`. Для разговора выбрали «В архив».
- `sf-thread-list-unarchive` — `detail`: `{ id: string }`. Для разговора в архиве выбрали «Вернуть».
- `sf-thread-list-action` — `detail`: `{ id: string, action: string }`. Выбрано одно из собственных действий строки, которые задал хост.
- `sf-thread-list-load-more` — `detail`: `{  }`. Конец списка показался при has-more: нужна следующая страница. moreFailed() позволяет попросить снова.
- `sf-thread-list-view` — `detail`: `{ archived: boolean }`. Нажали переход в архив или обратно.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: внутренний.
- Клавиши: `Tab`, `ArrowUp`, `ArrowDown`, `Home`, `End`, `Enter`, `Space`, `F2`, `Shift+F10`, `ContextMenu`, `Escape`.
- Фокус: Одна остановка Tab на список (подвижный tabindex: строка, к которой перешли последней, иначе открытая, иначе первая). Открытая строка несёт aria-current=page и средний вес шрифта, а в режиме принудительных цветов — системную подсветку. F2 переименовывает на месте (Enter сохраняет, Escape отменяет и не доходит до окружающей панели, уход из поля сохраняет); фокус возвращается на строку. Shift+F10 или клавиша меню открывает действия строки; «⋯» не является остановкой Tab.

### Минимальная разметка

```html
<sf-thread-list selected="t1"></sf-thread-list>
```

### Источник

- `simai/ui-pro@9cbe0610b74b781c86721de77273819a046adda0:components/src/smart/thread-list`
- `simai/ui-pro@9cbe0610b74b781c86721de77273819a046adda0:components/src/smart/thread-list/rule.js#name=cl-thread-list`
