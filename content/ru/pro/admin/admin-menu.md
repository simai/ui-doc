---
title: "Меню администратора"
description: "Навигация админки по ответам приложения: рейка разделов, колонка раздела, поиск, избранное, уведомления и профиль через порт навигации."
---

# Меню администратора

:badge[sf-admin-menu]{variant=outline scheme=on-surface size=1/2} :badge[1.17.2]{variant=outline scheme=on-surface size=1/2}

`<sf-admin-menu>` рисует навигацию админки по ответам приложения: рейку
разделов, колонку открытого раздела, поиск, избранное, колокол уведомлений и
профиль. Что показать и что разрешить, решает приложение через
навигационный порт `simai.admin-navigation-port`; меню только спрашивает и
рисует. Заголовок, число записей и действия страницы показывает
[Шапка страницы](/ru/smart/composite/page-header/).

**Компонент набора `admin`.** Входит в набор компонентов
[`admin`](/ru/guide/sets/) из репозитория `simai/ui-admin`, а не в выпуск
SIMAI Framework; лицензия — как у [Pro](/ru/pro/#лицензия). Полная
документация набора, каркас админки и уведомления — на сайте
[admin.simai.io](https://admin.simai.io/ru/components/admin-menu/).

## Пример

Нажмите раздел на рейке, откройте поиск лупой или клавишами `Cmd+K` /
`Ctrl+K`, отметьте строку звездой, переключите сервер в квадрате сверху,
откройте профиль внизу. Журнал под примером показывает, что меню спросило у
приложения.

:::example {id="smart-components/admin-menu/overview" label="Меню над портом" log="sf-admin-menu-navigate sf-admin-menu-query sf-admin-menu-toggle sf-admin-menu-open sf-admin-menu-save sf-admin-menu-read sf-admin-menu-sign-out sf-admin-menu-column-change"}
:::

Ответы в примерах даёт демонстрационный хост в памяти страницы; рабочая
страница отвечает со своего сервера.

## Применение

### Подключение набора

Элемент загружается, когда страница называет набор `admin` на скрипте ядра:

```html
<script src=".../distr/core/js/core.min.js" data-sf-sets="admin"></script>
```

Чтобы закрепить версию, её пишут после имени: `data-sf-sets="admin@1.2.2"`.
Свой адрес сборки задают в `SF_BOOT_CONFIG.packages.admin` до скрипта ядра.
Подробнее — в разделе [Подключение набора](/ru/guide/sets/connect/).

### Навигационный порт

Порт — объект с полями `port`, `version`, `capabilities` и методом
`raise(intent, payload)`, который возвращает ответ приложения. Меню принимает
порт `simai.admin-navigation-port` версий с `1.0.0` по `1.2.0` и получает его
действием `connectPort(port)`; другой порт оно отклоняет. Пока порта нет,
меню показывает заготовку навигации.

`capabilities` перечисляет, что приложение умеет. Управление, за которым
нет возможности, меню не рисует.

| Возможность | Что появляется | Намерения |
|:---|:---|:---|
| — | меню и переход по строкам | `navigation.load`, `item.open` |
| `site-switch` | выбор сайта, если сайтов больше одного | `site.switch`, `sites.search` |
| `search` | окно поиска [`sf-search`](/ru/smart/composite/search/) по `Cmd+K` или `Ctrl+K`: разделы, записи и команды, группы приложения как фильтры, недавние запросы, клавиши через [`sf-kbd`](/ru/components/content/kbd/) | `search.query`, `search.choose` |
| `favourites` | звезда у строк и блок избранного | `favourite.toggle` |
| `menu-profiles` | профили меню и режим настройки | `view.profile`, `view.create`, `view.rename`, `view.delete`, `view.save`, `view.reset` |
| `notifications` | колокол с числом непрочитанных | `notifications.load`, `notifications.read` |
| `preferences` | тема и язык как настройки человека; тема — строка [`sf-settings`](/ru/smart/navigation/settings/) в меню профиля | `preference.theme`, `preference.language` |
| `sign-out` | выход в меню профиля | `session.sign-out` |

Ответ на намерение — объект с полем `answer`: `applied`, `refused` или
`unavailable`. Исключение в `raise` меню считает ответом `unavailable`.
Ответ `applied` на `navigation.load` несёт всё меню: `revision`, `current`,
`items`, `favourites`, `profiles`, `rights` и `person`, а для открытого
объекта — его меню `context`. Строка в `items` — `{key, kind, level, label,
icon, href, children}`; `kind` принимает значения `root`, `section`, `page`,
`divider`, `heading`, `link`, а `level="install"` выделяет строки, общие для
всех сайтов. Счётчики в строках — только непрочитанное и ожидающее; число
записей показывает [Шапка страницы](/ru/smart/composite/page-header/).

Переход по строке меню не выполняет: оно поднимает `item.open`, и после ответа
`applied` отправляет `sf-admin-menu-navigate` с `{key, href}`. Приложение со
своим маршрутизатором переходит по этому событию. Страница, которая не готова
уйти (есть несохранённые изменения), отменяет событие `preventDefault`:
текущая строка, экран и фокус остаются на месте. Каждое намерение
дублируется событием по своему глаголу — `sf-admin-menu-open`, `-toggle`,
`-save`, `-query` и другими (список — в справочнике ниже): по нему страница
видит, что человек попросил, но отвечает только порт.

Если избранное или разделы изменились вне меню — например, звездой в шапке
страницы, — вызовите `refresh()`: меню заново запросит `navigation.load`.

```js
const menu = document.querySelector('sf-admin-menu');
await customElements.whenDefined('sf-admin-menu');
menu.connectPort({
  port: 'simai.admin-navigation-port',
  version: '1.0.0',
  capabilities: ['search', 'favourites', 'preferences'],
  raise: (intent, payload) => api.adminNavigation(intent, payload),
});

document.addEventListener('sf-admin-menu-navigate', (event) => {
  if (event.detail.href) router.push(event.detail.href);
});
```

### Меню объекта

Когда открыт объект — сервер, сайт, — приложение отвечает его меню в поле
`context`, и меню показывает его во второй колонке вместо раздела.

:::example {id="smart-components/admin-menu/object" label="Меню открытого сервера"}
:::

### Первый ответ в странице

Сервер может напечатать первый ответ на `navigation.load` в островке
`data-sf-settings` (настройка `first-answer`): меню рисует разделы сразу, без
заготовки, а порт отвечает следом. Пример ниже работает вовсе без порта.

:::example {id="smart-components/admin-menu/first-answer" label="Меню из первого ответа"}
:::

Пока ответа нет, заготовка меню на широком экране занимает столько колонок,
сколько назвал сервер в `expected-columns`: `1` — на странице без открытого
раздела, `2` — с открытым. С верным числом меню не меняет ширину после
ответа.

### Колонка раздела

Колонку раздела человек прячет и показывает сам, `Ctrl/Cmd+B` делает то же с
клавиатуры; выбор запоминается в
[персональном виде](/ru/guide/smart-components/view-preferences/) под ключом
`sf-admin-menu/main`. Странице для этого служат действия `showColumn()`,
`hideColumn()` и `toggleColumn()`, а событие `sf-admin-menu-column-change`
с `{open}` говорит, что колонка открылась или закрылась.

На узком экране меню сложено, пока страница не запишет `open`: так меню
открывает своя кнопка страницы.

## Доступность

- Меню — область `navigation`. Задайте ей имя на языке страницы через
  `aria-label`, например «Разделы администрирования»: значение по умолчанию
  английское.
- Строки — ссылки и кнопки в обычном порядке `Tab`; `Enter` и `Space`
  открывают строку или раздел.
- Контекстные меню после открытия ставят фокус на первый доступный пункт;
  `Escape` возвращает фокус на кнопку, которая открыла меню.
- `Cmd+K` или `Ctrl+K` (`search-shortcut`) открывает поиск поверх страницы, а
  `Escape` по очереди закрывает поиск, выбор сайта и меню профиля.
- «Готово», `Escape` и «Закончить настройку» закрывают режим настройки и
  возвращают фокус на кнопку, которая его открыла.

## Справочник API

Раздел собран из манифеста компонента пакета `admin` выпуска `admin-45b580402884` над выпуском Framework `ui-73df5d1b4d4c` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-admin-menu>` |
| Назначение | Навигация админки через навигационный порт приложения: полоса значков, колонка разделов, поиск, избранное, уведомления и режим настройки. |
| Контракт | `smart.admin-menu`, версия `1.17.2` |
| Поставка | пакет `admin` (`SF_BOOT_CONFIG.packages.admin`) |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `host-required` |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="menu"`; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`. Имя шаблона отрисовки; `default` — встроенный.
- `root-class` — `string`, по умолчанию пусто. Свои CSS-классы для нарисованного элемента.
- `root-style` — `string`, по умолчанию пусто. Свои стили для нарисованного элемента, например `max-width: 20rem`.
- `search-shortcut` — `string`, по умолчанию `mod+k`. Клавиша, которая открывает поиск из любого места страницы; пустое значение отключает её.
- `current` — `string`, по умолчанию пусто. Строка, на которой находится страница, по её ключу; пусто — строка, по адресу которой открыта страница.
- `expected-columns` — `integer`, по умолчанию `2`, значения: от 1; до 2. Сколько колонок у заготовки меню на широком экране, пока приложение не ответило: `1` — на странице без открытого раздела (например, панель управления), `2` — с открытым. С верным числом меню не меняет ширину после ответа; это не предел.
- `open` — `boolean`, по умолчанию `false`. Записывает страница, которая открывает меню своей кнопкой: на узком экране меню свёрнуто, пока false (`data-open`). Не записано — ничего не меняется.
- `aria-label` — `string`, по умолчанию `Admin menu`, значения: не короче 1.
- `first-answer` — `object`. Первый ответ приложения на `navigation.load`, напечатанный вместе со страницей (JSON в `data-sf-settings`): меню сразу рисуется из него, без заготовки, а порт отвечает следом.

### Свойства в документе макета

Узел типа `smart.admin-menu` в [документе макета](/ru/guide/layouts/building/smart-component/) (`simai.composition.document.v1`) принимает:

- свойства: `template`, `search-shortcut`, `current`, `expected-columns`, `open`, `aria-label`.

Значения свойств те же, что у одноимённых атрибутов, и того же типа, что в списке атрибутов: строковое значение пишется строкой (`"size": "1"`, а не `1` — число отклоняется с диагностикой `schema_enum` или `schema_type`), логическое — `true` или `false`.

### Методы

- `refresh()` — возвращает `object`. Повторно читает меню навигации у приложения после того, как что-то вне меню изменило его содержимое (звёздочка в заголовке страницы). До подключения порта ничего не делает.
- `toggle(args: object)` — возвращает `object`. Добавить строку в избранное человека или убрать из него (`favourite.toggle`). Без порта отказывает.
- `showColumn()` — возвращает `object`. Снова показать колонку разделов: меню объекта страницы или раздел, в котором лежит страница. Если колонке нечего показать, ничего не открывается. Его вызывает кнопка страницы «Показать колонку».
- `hideColumn()` — возвращает `object`. Скрыть колонку разделов: полоса значков остаётся, а колонка не оставляет пустого места.
- `toggleColumn()` — возвращает `object`. Скрыть открытую колонку или показать скрытую — как Ctrl/Cmd+B.
- `setHostPort(host: object)` — возвращает `object`. Подключает приложение, которое отвечает по порту `simai.admin-navigation-port`; после этого меню рисует навигацию из ответа вместо заготовки.
- `connectPort(port: object)` — возвращает `object`. Базовое действие SIMAI Framework `connect-port {port}`: передаёт порт навигации, он хранится как `sfPort`; отвечает исходом (`refused other-port` — для другого порта, `port-unsupported` — для версии, которую меню не принимает). То же делает `setHostPort`.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-admin-menu-query` — `detail`: `{ kind: "site" | "search", query: string, requestId?: string, intent?: string, payload?: object }`. Запрос: kind site или search.
- `sf-admin-menu-reset` — `detail`: `{ kind: any, id?: any, intent?: string, payload?: object }`. kind view.
- `sf-admin-menu-navigate` — `detail`: `{ id: any, key: string, href: string|null, region?: boolean }`. Приложение ответило, что `item.open` применён: страница теперь принадлежит этой строке. Для приложения, которое переходит своим маршрутизатором, а не по адресу из ответа. Можно отменить: страница, которая не готова уйти (есть несохранённые изменения), вызывает `preventDefault` — текущая строка, экран и фокус остаются, меню никуда не переходит, ссылка меню объекта не открывается; согласившись позже, страница переходит сама и называет строку через `current`. Если не отменено, строка становится текущей.
- `sf-admin-menu-refresh` — `detail`: `{ kind: string, intent: string, payload: object, reason?: string|null, site?: any }`. У приложения запрошено `navigation.load` или `notifications.load`.
- `sf-admin-menu-open` — `detail`: `{ kind: string, intent: string, payload: object, id: any, href?: string|null, group?: string|null }`. Запрошено `item.open`, `site.switch`, `view.profile` или `search.choose`.
- `sf-admin-menu-toggle` — `detail`: `{ kind: string, intent: string, payload: object, id: any, on: boolean }`. Запрошено `favourite.toggle`.
- `sf-admin-menu-save` — `detail`: `{ kind: string, intent: string, payload: object, values?: object, id?: any, revision?: number|null }`. Запрошено сохранение предпочтения или `view.save`.
- `sf-admin-menu-create` — `detail`: `{ kind: string, intent: string, payload: object }`. Запрошено `view.create`.
- `sf-admin-menu-rename` — `detail`: `{ kind: string, intent: string, payload: object, id: any, title: string }`. Запрошено `view.rename`.
- `sf-admin-menu-delete` — `detail`: `{ kind: string, intent: string, payload: object, ids: array }`. Запрошено `view.delete`.
- `sf-admin-menu-read` — `detail`: `{ kind: string, intent: string, payload: object, ids: array }`. Запрошено `notifications.read`: `ids` — ключи прочитанных (пусто — все); `payload` — `{keys, all}` порта.
- `sf-admin-menu-sign-out` — `detail`: `{ kind: string, intent: string, payload: object }`. Запрошено `session.sign-out`.
- `sf-admin-menu-column-change` — `detail`: `{ open: boolean }`. Человек или страница показали либо скрыли колонку разделов; `open` говорит, что именно. Запоминается для человека (`SF.Preferences` `sf-admin-menu/main` `second`).
- `sf-host-port-request` — `detail`: `{ component: object, context: object }`. При подключении спросить у страницы порт приложения. Страница, ответившая портом `simai.admin-navigation-port`, получает меню; страница, не ответившая ничем, показывает заготовку меню, пока не подключит порт. Прежний способ: страница передаёт порт через `connectPort({port})`; событие отправляется до 2026-12-01.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter`, `Space`, `Escape`.
- Фокус: Контекстные меню после отрисовки ставят фокус на первый доступный пункт. Escape возвращает фокус на кнопку, которая открыла меню; Tab и Shift+Tab закрывают меню и продолжают от этой кнопки. Фокус вне меню не трогается. «Готово», Escape и «Закончить настройку» закрывают режим настройки и возвращают фокус на кнопку, которая его открыла.

### Минимальная разметка

```html
<sf-admin-menu aria-label="Admin menu" expected-columns="2"></sf-admin-menu>
```

### Источник

- `simai/ui-admin@45b580402884bd9d7e067d95629303b8df2a2f8a:package/src/smart/admin-menu`
- `simai/ui-admin@45b580402884bd9d7e067d95629303b8df2a2f8a:package/src/smart/admin-menu/rule.js#name=cl-admin-menu`

## См. также

- [Шапка страницы](/ru/smart/composite/page-header/) — шапка страницы рядом с меню.
- [Представление свойств](/ru/pro/admin/property-view/) — карточка записи из пакета `pro`.
- [Наборы компонентов](/ru/guide/sets/) — что такое набор `admin` и как его подключают.
- [Документация набора `admin`](https://admin.simai.io/) — каркас админки, уведомления и меню.
- [Admin Menu](/ru/components/internal/admin-menu/) — классы SIMAI Framework, на которых построено меню.
