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

Раздел собран из манифеста компонента выпуска `ui-e2cff39223f1` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-composition-overlay>` |
| Назначение | Слой редактора над отрисованным документом композиции: рамки наведения и выбора, панель действий узла, места вставки, перенос указателем и клавиатурой и дерево структуры; холст никогда не меняется, каждое изменение выполняет хост. |
| Контракт | `smart.composition-overlay`, версия `1.2.4` |
| Поставка | выпуск Framework `ui-e2cff39223f1` |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | работает в сценарии студии, продуктовой приёмки нет |
| Заготовка до прихода кода | нет: атрибут `data-sf-skeleton` не пишется; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `for` — `string`, по умолчанию пусто. id элемента-холста, поверх которого рисует слой
- `frame` — `string`, по умолчанию пусто. id холста в iframe того же источника (режим во фрейме, его питает `setNodes`)
- `accepts` — `string`, по умолчанию пусто. Группы `sf-sortable`, элементы которых можно сбросить на холст, через пробел
- `label` — `string`, по умолчанию пусто. Имя дерева структуры; иначе — `runtime.tree` из языкового файла
- `actions` — `array`, по умолчанию `[]`. Действия выбранного узла: до 16 `{id, label}`; записываются через ту же проверку, что и `setActions`
- `messages` — `object`, по умолчанию `{}`. Собственные слова хоста поверх языкового файла; записываются через `setMessages`
- `insertion-target` — `object`, по умолчанию `{}`. Место вставки, которое хост держит отмеченным `{parent_id, slot, index}`; записывается через `setInsertionTarget`

### Методы

- `attach(canvas: object)` — Рисует поверх элемента-холста; холст никогда не меняется
- `attachFrame(iframe: object)` — Рисует поверх холста в iframe того же источника, который питает `set-nodes`
- `setDocument(document: object, options: object)` — Читает узлы документа композиции
- `setNodes(nodes: array, options: object)` — Читает плоский список узлов (режим во фрейме)
- `setDropFilter(filter: object)` — `filter({parent_id, slot, index}, item)` скрывает места, куда сбрасывать нельзя
- `setActions(actions: array)` — Записывает действия выбранного узла (настройка actions)
- `setMessages(messages: object)` — Записывает собственные слова хоста (настройка messages)
- `setInsertionTarget(target: object|null)` — Записывает отмеченное место вставки (настройка insertion-target)
- `select(id: any, options: object)` — Выбирает узел; `{focus, emit}`
- `edit(id: string)` — возвращает `boolean`. Начинает правку простой строки в редактируемом узле
- `refresh()` — Заново измеряет холст

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-composition-overlay-select` — `detail`: `{ ids: array, id: any, node_id: any }`. Узел выбран (или выбор снят): словарь 1.1.5 §5 select; в detail остаётся `node_id` для хоста композиции
- `sf-composition-overlay-apply` — `detail`: `{ action: string, scope: any, ids: array }`. Для выбранного узла выбрано действие панели инструментов: собственное действие записи (словарь §5 apply, стандарт §18.3)
- `sf-composition-overlay-insert` — `detail`: `{ parent: any, slot: string, index: integer, item?: string, from?: string, mode?: any, parent_id: any }`. Выбрано место вставки или элемент библиотеки сброшен на холст: место `{parent, slot, index}` и элемент, если его перетаскивали; в detail остаётся `parent_id` для хоста композиции
- `sf-composition-overlay-move` — `detail`: `{ ids: array, id: any, parent: any, position: number, slot: string, node_id: any, parent_id: any, index: integer }`. Узел перенесён указателем или клавиатурой: один ручной перенос (словарь §5 move, `{id, parent, position}`); в detail остаются `node_id`, `parent_id` и `index` для хоста композиции
- `sf-composition-overlay-change` — `detail`: `{ id: any, value: string, previous: string }`. Правка простой строки принята; при отмене текст показывает то, что было до неё
- `sf-composition-overlay-action` — устаревший псевдоним события `sf-composition-overlay-apply`: приходит с тем же `detail`, подписывайтесь на `sf-composition-overlay-apply`.
- `sf-composition-overlay-edit` — устаревший псевдоним события `sf-composition-overlay-change`: приходит с тем же `detail`, подписывайтесь на `sf-composition-overlay-change`.

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

- `simai/ui@e2cff39223f1a4b004dafe332f081e5178fad2f3:distr/smart/composition-overlay`
- `simai/ui@e2cff39223f1a4b004dafe332f081e5178fad2f3:distr/rule/rule.json#name=cl-composition-overlay`

## См. также

- [Перетаскивание](/ru/smart-components/editor/sortable/) — библиотека блоков, из которой элементы попадают на холст.
- [Inline-редактор](/ru/smart-components/editor/inline-editor/) — правка текста выбранного узла.
- [Как устроен редактор страниц](/ru/guide/layouts/editor/overview/#принцип-намерения-а-не-правка) — как части редактора работают вместе.
