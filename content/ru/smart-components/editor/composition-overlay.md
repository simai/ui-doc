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

Идентификатор: `smart.composition-overlay`, жизненный цикл —
экспериментальный. Код загружается по требованию: загрузчик Framework
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

## Теги и подключение

Custom Element: `<sf-composition-overlay>`. Loader-правило:
`cl-composition-overlay`, статус `registered`.

Поставляемые ассеты:

- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/composition-overlay/js/composition-overlay.js`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/composition-overlay/css/composition-overlay.css`

Правило загрузчика: `simai/ui@cb1cda3016487e6b2be8c36b60bba0eea062d6a1:distr/rule/rule.json`.
Связанные страницы: [Перетаскивание](/ru/smart-components/editor/sortable/),
[Inline-редактор](/ru/smart-components/editor/inline-editor/),
[руководство по редактору страниц](/ru/guide/layouts/editor/overview/).
