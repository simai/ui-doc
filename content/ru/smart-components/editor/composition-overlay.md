---
title: "Оверлей редактора"
description: "Рисует поверх отрисованной страницы рамки, подписи, панель действий, места вставки и дерево структуры для редактора страниц."
---

# Оверлей редактора

`<sf-composition-overlay>` — часть редактора страниц: рисует поверх страницы,
собранной из Composition Document, рамку при наведении и выборе, подпись и
значки узла, панель действий, места вставки и дерево структуры для
клавиатуры. HTML холста оверлей не меняет, поэтому опубликованная страница
одинакова с открытым и закрытым редактором. Берите его, когда страницу нужно
править в контексте, а не в отдельной форме.

## Пример

:::example {id="smart-components/composition-overlay/overview" label="Выбор блока и действия"}
:::

## Применение

### Подключение к холсту

Холст — элемент с HTML из `SF.Composition.render`; каждый узел Document
отмечен в нём атрибутом `data-sf-composition-id`. Атрибут `for` называет `id`
холста, метод `attach(canvas)` передаёт его явно. Код оверлея загрузчик
Framework подключает по требованию — только на странице с тегом
`sf-composition-overlay`, поэтому перед вызовом методов дождитесь
`customElements.whenDefined('sf-composition-overlay')`.

`setDocument(document, {describe})` передаёт Document. `describe(node)`
возвращает подпись и значки узла: `{label, badges}`, например
`{label: 'Шапка', badges: ['Общий']}` для блока, который используется на
нескольких страницах. Без подписи оверлей показывает `id` узла; значков —
не больше четырёх.

### Действия

`setActions(actions)` задаёт кнопки панели действий выбранного узла.
Действие — только `{id, label}`: `id` по шаблону `^[a-z][a-z0-9-]{0,63}$`,
действий не больше 16. Нажатие отправляет `sf-composition-overlay-action` с
`{action_id, node_id}`; что сделать с узлом, решает приложение.

### Выбор узла

Выбор мышью, клавишей или методом `select(id)` отправляет
`sf-composition-overlay-select` с `{node_id}`; `null` означает, что выбор
снят. `select(id, {emit: false})` выбирает узел без события — например, когда
выбор пришёл из боковой панели приложения.

### Вставка и перенос

Места вставки — промежутки в слотах узлов. Выбор места отправляет
`sf-composition-overlay-insert` с `{parent_id, slot, index}`; при перетаскивании
из библиотеки событие ещё несёт `{item, from, mode}` — какой элемент, из какого
списка и в каком режиме. Атрибут `accepts` перечисляет группы
[`sf-sortable`](/ru/smart-components/editor/sortable/), элементы которых можно
бросить на холст. Перенос узла холста отправляет
`sf-composition-overlay-move` с `{node_id, parent_id, slot, index}`.

`setDropFilter((place, item) => boolean)` скрывает места, которые приложение
отклонит; окончательную проверку выполняет Document.
`setInsertionTarget({parent_id, slot, index})` отмечает на холсте место, куда
приложение вставит блок, а значение `null` снимает отметку.

### Холст во фрейме

Если холст редактора — фрейм того же источника, укажите его `id` в атрибуте
`frame` (вместо `for`) или вызовите `attachFrame(iframe)`. Документ во фрейме
слой не читает: приложение передаёт плоский список узлов методом
`setNodes(nodes, {describe})`, где `describe(node)` возвращает подпись и
бейджи узла. Рамки, панель действий, места вставки и дерево для клавиатуры
рисуются над фреймом так же, как над обычным холстом; у списка верхнего
уровня `parent_id` в `sf-composition-overlay-insert` пустой, а `slot` —
`default`.

Узел, помеченный как редактируемый, можно править на месте: `Enter` в
дереве или метод `edit(id)`. Это правка обычной
строки — `Enter` сохраняет, `Escape` отменяет. Сохранённое значение
приходит событием `sf-composition-overlay-edit` с `node_id`, `value` и
`previous`; если отменить событие, вернётся прежний текст.

### Изменения делает приложение

События сообщают только намерение. Приложение меняет Document, сохраняет его с
ожидаемой ревизией, проверяет и перерисовывает холст, а затем снова передаёт
Document оверлею.

После загрузки `SF.CompositionOverlay` даёт `OVERLAY_EVENTS` — имена событий,
`overlayNodes(document)` — узлы Document в порядке документа и
`checkOverlayActions(actions)` — проверку действий до передачи в оверлей.

### Подписи

Подписи дерева, панели и объявлений оверлей берёт на языке страницы (русском
или английском). `setMessages(messages)` заменяет их своими.

```js
await customElements.whenDefined('sf-composition-overlay');
overlay.attach(canvas);
overlay.setDocument(document, {
  describe: (node) => ({label: titleOf(node), badges: node.shared ? ['Общий'] : []}),
});
overlay.setActions([{id: 'move-up', label: 'Выше'}, {id: 'remove', label: 'Удалить'}]);
overlay.setDropFilter((place, item) => place.slot === 'default');
overlay.addEventListener('sf-composition-overlay-action', (event) => {
  applyAction(event.detail.action_id, event.detail.node_id);
});
```

## Доступность

- Дерево структуры (`role="tree"`) — способ работать с холстом с клавиатуры.
  Задайте ему имя атрибутом `label`, например «Структура страницы».
- Стрелки вверх и вниз идут по узлам в порядке документа, влево — к
  родителю, вправо — к первому вложенному узлу, `Home` и `End` — к краям.
  `Enter` открывает панель действий, `Escape` возвращает назад или снимает
  выбор.
- `Space` начинает перенос выбранного узла, стрелки выбирают место, `Enter`
  кладёт, `Escape` отменяет. Выбор и каждый шаг переноса объявляются.
- Слой оверлея лежит ниже выдвижных панелей и модальных окон, цвета берёт из
  токенов темы, а при `prefers-reduced-motion` отключает анимацию.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-357568a20a7e` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-composition-overlay>` |
| Назначение | Оболочка редактора поверх отрисованного документа композиции: рамки, подписи, бейджи, панель действий, места вставки, перенос мышью и с клавиатуры и дерево для клавиатуры — HTML холста не меняется. В режиме фрейма та же оболочка рисуется над фреймом того же источника по плоскому списку узлов, с правкой обычных строк на месте. |
| Контракт | `smart.composition-overlay`, версия `1.1.0` |
| Поставка | выпуск Framework `ui-357568a20a7e` |
| [Жизненный цикл](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | работает в сценарии студии, продуктовой приёмки нет |
| Заготовка до прихода кода | нет: атрибут `data-sf-skeleton` не пишется; своего скелетона при загрузке данных нет ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

- `for` — `string`, по умолчанию пусто. id элемента canvas, в котором находится вывод SF.Composition.render
- `accepts` — `string`, по умолчанию пусто. группы sf-sortable, элементы которых можно отпускать в местах вставки
- `label` — `string`, по умолчанию пусто.
- `frame` — `string`, по умолчанию пусто. id холста во фрейме того же источника (режим фрейма, данные — через setNodes); используется вместо for

### Методы

- `attach(canvas: Element)` — Привязывает оверлей к элементу холста.
- `attachFrame(iframe: Element)` — Привязывает слой к холсту во фрейме того же источника (режим фрейма).
- `setDocument(document: object, options: object)` — Задаёт Document и describe(node) → {label, badges}.
- `setNodes(nodes: array, options: object)` — Задаёт плоский список узлов холста во фрейме и необязательную функцию describe(node) → {label, badges}.
- `setActions(actions: array)` — Задаёт действия панели инструментов {id, label}.
- `setMessages(messages: object)` — Переопределяет тексты интерфейса.
- `setDropFilter(filter: function)` — Скрывает места вставки, которые хост отклонил бы: `(place, item) => boolean`.
- `setInsertionTarget(target: object|null)` — Отмечает место вставки или сбрасывает его значением `null`.
- `select(id: string|null, options: object)` — Выбирает узел по id.
- `edit(id: string)` — возвращает `boolean`. Начинает правку обычной строки на месте у редактируемого узла во фрейме; возвращает, началась ли правка.
- `refresh()` — Измеряет заново на следующем кадре — после изменения, о котором не сообщает ни один наблюдатель (трансформация у предка).

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

- `sf-composition-overlay-select` — `detail`: `{ node_id?: string|null }`. Выбран узел.
- `sf-composition-overlay-action` — `detail`: `{ action_id: string, node_id: string }`. Выбрано действие панели инструментов.
- `sf-composition-overlay-insert` — `detail`: `{ parent_id: string, slot: string, index: integer, item?: string, from?: string, mode?: any }`. Запрошена вставка в место, при необходимости с элементом библиотеки. В режиме фрейма у списка верхнего уровня parent_id равен "", а slot — "default".
- `sf-composition-overlay-move` — `detail`: `{ node_id: string, parent_id: string, slot: string, index: integer }`. Узел холста перемещён в место.
- `sf-composition-overlay-edit` — `detail`: `{ node_id: string, value: string, previous: string }`. Правка обычной строки на месте сохранена с изменённым значением (режим фрейма). Событие можно отменить: preventDefault возвращает прежний текст.

### Доступность

- Роль: дерево (`tree`).
- Доступное имя: рекомендуется.
- Клавиши: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`, `Enter`, `Space`, `Escape`.
- Фокус: В дереве по одному treeitem на узел; стрелки двигают в порядке документа и между родителем и потомком, Enter открывает панель действий, Escape возвращает или снимает выбор. Space начинает перенос с клавиатуры, стрелки выбирают место, Enter опускает, Escape отменяет. Выбор и переносы объявляются. В режиме фрейма дерево следует порядку списка узлов, указатель и клавиши внутри фрейма тоже выбирают, Enter на редактируемом узле начинает правку текста во фрейме (Enter сохраняет, Escape отменяет, фокус возвращается в дерево), а Escape уступает открытой внутри поверхности.

### Минимальная разметка

```html
<sf-composition-overlay id="overlay" for="canvas" accepts="blocks"></sf-composition-overlay><div id="canvas"></div>
```

### Источник

- `simai/ui@357568a20a7ef6c6825217b7346c1f08870003a2:distr/smart/composition-overlay`
- `simai/ui@357568a20a7ef6c6825217b7346c1f08870003a2:distr/rule/rule.json#name=cl-composition-overlay`

## См. также

- [Перетаскивание](/ru/smart-components/editor/sortable/) — библиотека блоков, из которой элементы попадают на холст.
- [Inline-редактор](/ru/smart-components/editor/inline-editor/) — правка текста выбранного узла.
- [Как устроен редактор страниц](/ru/guide/layouts/editor/overview/#принцип-намерения-а-не-правка) — как части редактора работают вместе.
