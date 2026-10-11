---
title: "Оверлей редактора"
description: "Рамки, подписи, панель действий, места вставки и дерево структуры поверх отрисованного Composition Document."
profile: reference
---

# Оверлей редактора

`<sf-composition-overlay>` рисует интерфейс редактора поверх страницы, собранной
из Composition Document: рамку при наведении и выборе, подпись и бейджи узла,
панель действий, места вставки и дерево структуры для клавиатуры. HTML холста
не меняется, поэтому опубликованная страница и её digest одинаковы с открытым и
закрытым редактором.

Код загружается по требованию: загрузчик Framework
подключает его только на странице с тегом `sf-composition-overlay`.

## Пример

:::example {id="smart-components/composition-overlay/overview" label="Выбор блока и действия"}
:::

## Особенности применения

Поставьте оверлей перед холстом, дождитесь загрузки и передайте ему холст,
Document и действия. `describe(node)` возвращает подпись и бейджи, например
«Общий» для блока, который используется на нескольких страницах.

```js
await customElements.whenDefined('sf-composition-overlay');
overlay.attach(canvas);
overlay.setDocument(document, {describe: (node) => ({label: titleOf(node), badges: node.shared ? ['Общий'] : []})});
overlay.setActions([{id: 'move-up', label: 'Выше'}, {id: 'remove', label: 'Удалить'}]);
overlay.setDropFilter((place, item) => place.slot === 'default');
```

События сообщают только намерение. Приложение меняет Document, сохраняет его с
ожидаемой ревизией, проверяет и перерисовывает страницу. `setDropFilter`
только скрывает места, которые приложение отклонит; окончательную проверку
выполняет Document.

## Атрибуты, методы и события

| Атрибут | Назначение |
|---|---|
| `for` | id холста с HTML из `SF.Composition.render` |
| `accepts` | группы `sf-sortable`, элементы которых можно бросить на места вставки |
| `label` | имя дерева структуры |

Методы: `attach(canvas)`, `setDocument(document, {describe})`,
`setActions(actions)`, `setMessages(messages)`, `setDropFilter(filter)`,
`setInsertionTarget(target)`, `select(id)`. Действие — только `{id, label}`,
id по шаблону `^[a-z][a-z0-9-]{0,63}$`, не больше 16 действий.

| Событие | Данные |
|---|---|
| `sf-composition-overlay-select` | `{node_id}` |
| `sf-composition-overlay-action` | `{action_id, node_id}` |
| `sf-composition-overlay-insert` | `{parent_id, slot, index}`, из библиотеки ещё `{item, from, mode}` |
| `sf-composition-overlay-move` | `{node_id, parent_id, slot, index}` |

После загрузки `SF.CompositionOverlay` даёт `OVERLAY_EVENTS`,
`overlayNodes(document)` и `checkOverlayActions(actions)`.

## Доступность

Дерево структуры (`role="tree"`): стрелки вверх и вниз идут по порядку
документа, влево — к родителю, вправо — к первому вложенному узлу, Home и End —
к краям, Enter открывает панель действий, Escape возвращает назад. Пробел
начинает перенос, стрелки выбирают место, Enter кладёт, Escape отменяет. Выбор и
перенос объявляются. Слой лежит ниже drawer и modal, цвета берутся из токенов
темы, анимация отключается при `prefers-reduced-motion`.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-composition-overlay>` |
| Назначение | Интерфейс редактора поверх отрисованного Composition Document: рамки, подписи, значки, панель действий, места вставки, перемещение перетаскиванием и с клавиатуры и дерево для клавиатуры — без изменения HTML холста. |
| Контракт | `smart.composition-overlay`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | работает в сценарии студии, продуктовой приёмки нет |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `for` | `string` | пусто | — | id элемента canvas, в котором находится вывод SF.Composition.render |
| `accepts` | `string` | пусто | — | группы sf-sortable, элементы которых можно отпускать в местах вставки |
| `label` | `string` | пусто | — | — |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `attach()` | `canvas: Element` | не описано | Привязывает оверлей к элементу холста. |
| `setDocument()` | `document: object, options: object` | не описано | Задаёт Document и describe(node) → {label, badges}. |
| `setActions()` | `actions: array` | не описано | Задаёт действия панели инструментов {id, label}. |
| `setMessages()` | `messages: object` | не описано | Переопределяет тексты интерфейса. |
| `setDropFilter()` | `filter: function` | не описано | Скрывает места вставки, которые хост отклонил бы: `(place, item) => boolean`. |
| `setInsertionTarget()` | `target: object\|null` | не описано | Отмечает место вставки или сбрасывает его значением `null`. |
| `select()` | `id: string\|null, options: object` | не описано | Выбирает узел по id. |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `sf-composition-overlay-select` | `{ node_id?: string\|null }` | Выбран узел. |
| `sf-composition-overlay-action` | `{ action_id: string, node_id: string }` | Выбрано действие панели инструментов. |
| `sf-composition-overlay-insert` | `{ parent_id: string, slot: string, index: integer, item?: string, from?: string, mode?: any }` | Запрошена вставка в место, при необходимости с элементом библиотеки. |
| `sf-composition-overlay-move` | `{ node_id: string, parent_id: string, slot: string, index: integer }` | Узел холста перемещён в место. |

### Доступность

- Роль: дерево (`tree`).
- Доступное имя: рекомендуется.
- Клавиши: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`, `Enter`, `Space`, `Escape`.
- Фокус: У дерева по одному treeitem на узел; стрелки перемещают в порядке документа и между родителем и потомком, Enter открывает панель инструментов, Escape возвращает или сбрасывает. Space начинает перемещение с клавиатуры, стрелки выбирают место, Enter отпускает, Escape отменяет. Выбор и перемещения озвучиваются.

### Минимальная разметка

```html
<sf-composition-overlay id="overlay" for="canvas" accepts="blocks"></sf-composition-overlay><div id="canvas"></div>
```

### Источник

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/composition-overlay`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-composition-overlay`
