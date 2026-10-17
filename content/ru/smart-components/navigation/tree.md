---
title: "Tree"
description: "Показывает иерархию папок или разделов с раскрытием ветвей, выбором и управлением с клавиатуры."
---

# Tree

`<sf-tree>` показывает вложенный список: папки и файлы, разделы сайта,
категории каталога. Ветви раскрываются и сворачиваются, пункты выбираются
мышью и клавиатурой. Каждый пункт — [Tree Item](/ru/smart-components/navigation/tree-item/);
оформление совпадает с обычным [деревом](/ru/components/navigation/tree/).
Для короткого плоского списка берите обычный список, для пути к текущей
странице — [Breadcrumbs](/ru/smart-components/navigation/breadcrumbs/).

## Пример

:::example {id="smart-components/tree/overview" label="Результат"}
:::

## Применение

### Пункты из разметки

Пункты — дочерние `<sf-tree-item>`, вложенные друг в друга так же, как ветви
дерева. Дерево читает их при подключении и рисует заново; пункты, добавленные
в `<sf-tree>` позже, дописываются в конец. Подпись, ссылку, тип и состояние
пункта задают его атрибуты — они описаны на странице
[Tree Item](/ru/smart-components/navigation/tree-item/).

### Пункты данными

Свойство `items` принимает массив пунктов. Поля пункта: `label`, `href`,
`target`, `rel`, `type` (`folder` или `file`), `value`, `open`, `selected`,
`active`, `disabled`, `openIcon`, `closedIcon`, `icon`, `openLabel`,
`closeLabel` и `children` — массив вложенных пунктов. Новый массив
перерисовывает дерево целиком; так передают дерево, которое строит шаблон или
приходит с сервера. Задавайте `items` после регистрации тега.

:::example {id="smart-components/tree/files" label="Результат"}
:::

### Выбор

`selection` задаёт, что делает нажатие на пункт. `none` (по умолчанию) —
нажатие открывает ссылку пункта или отправляет `sf-tree-item-click`.
`single` выбирает один пункт, `multiple` переключает выбор каждого пункта
отдельно. Выбранный пункт отмечен атрибутом `selected`; изначальный выбор
задают тем же атрибутом в разметке.

:::example {id="smart-components/tree/selection" label="Результат"}
:::

### События

| Событие | Когда | Поля `event.detail` |
|:---|:---|:---|
| `sf-tree-selection-change` | пункт выбран или выбор снят | `item` — элемент пункта, `selected`, `value` |
| `sf-tree-item-toggle` | ветвь раскрыта или свёрнута | `item`, `open`, `value` |
| `sf-tree-item-click` | нажата подпись пункта или `Enter` на пункте без вложенных | `item`, `value`, `originalEvent` |

События всплывают от пунктов, поэтому их удобно слушать на `<sf-tree>`.
`onToggle(handler)` передаёт обработчику элемент пункта первым аргументом.

```js
const tree = document.querySelector('sf-tree[selection="single"]');

tree.addEventListener('sf-tree-selection-change', (event) => {
  saveTarget(event.detail.value);
});

tree.onToggle((item, detail) => {
  if (detail.open) loadChildren(detail.value);
});

await customElements.whenDefined('sf-tree');
tree.items = await fetchFolders();
```

### Перетаскивание на узел

Дерево может принимать на узел то, что на него перетащили, — например, в
файловом менеджере. Само оно ничего не перемещает и не загружает: оно
сообщает, что и куда отпустили, а дальше действует приложение. Узел, над
которым сейчас перетаскивают, подсвечивается.

- `accept-records` — узел принимает записи, перетащенные из списка, например
  строки [таблицы](/ru/smart-components/content/table/) с `drag-rows`. После
  отпускания приходит `sf-tree-records-drop` с `{value, ids, source}`: `value` —
  узел, `ids` — записи, `source` — откуда их взяли.
- `accept-files` — узел принимает файлы с компьютера; приходит
  `sf-tree-files-drop` с `{value, files}`.

## Доступность

- Дереву нужно доступное имя: `aria-label` на `<sf-tree>`.
- Дерево — одна остановка `Tab`. Стрелки вверх и вниз переходят по видимым
  пунктам, `Home` и `End` — к первому и последнему. Стрелка вправо раскрывает
  ветвь, а у раскрытой переходит к первому вложенному пункту; стрелка влево
  сворачивает ветвь или переходит к родителю. Набор букв переводит фокус к
  пункту, подпись которого с них начинается.
- `Enter` раскрывает и сворачивает ветвь, а на пункте без вложенных
  открывает его ссылку; `Space` выбирает пункт при `selection="single"` или
  `multiple`. Фокус и
  выбор независимы: стрелки двигают фокус, не меняя выбор.
- Кнопка раскрытия ветви по умолчанию подписана по-английски. На русской
  странице задавайте пунктам с вложенными `open-label` и `close-label`, как
  в примерах.
- При выборе пункты сообщают `aria-selected`, а при `selection="multiple"`
  дерево сообщает и `aria-multiselectable`.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-5f1d2e9e5529` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-tree>` |
| Назначение | Доступный иерархический составной компонент с перемещаемым фокусом (roving focus), раскрытием ветвей и выбором, которым управляет элемент. |
| Контракт | `smart.tree`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-5f1d2e9e5529` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="menu"`; своего скелетона при загрузке данных нет ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`.
- `root-class` — `string`, по умолчанию пусто.
- `aria-label` — `string`, по умолчанию пусто.
- `role` — `string`, по умолчанию `tree`, значения: `tree`.
- `selection` — `string`, по умолчанию `none`, значения: `none`, `single`, `multiple`.
- `items` — `array` из `object`, по умолчанию `[]`. Пункты, заданные данными вместо дочерних sf-tree-item (задаётся как свойство, а не атрибут): [{label, href?, target?, rel?, kind?, value?, open?, selected?, active?, disabled?, icon?, openIcon?, closedIcon?, chevronOpenIcon?, chevronClosedIcon?, openLabel?, closeLabel?, children?}]. text или title заменяют label. Установка заменяет пункты и перерисовывает дерево; дочерние sf-tree-item читаются один раз и удаляются, поэтому родитель, который перерисовывает изменённые пункты, передаёт их этим способом.
- `accept-records` — `boolean`, по умолчанию `false`. Узел принимает записи, перетащенные из списка (application/x-sf-records+json), и сообщает об этом событием sf-tree-records-drop.
- `accept-files` — `boolean`, по умолчанию `false`. Узел принимает файлы, перетащенные с компьютера, и сообщает об этом событием sf-tree-files-drop.

### Методы

- `onToggle(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик sf-tree-item-toggle от любого пункта дерева; обработчик вызывается с (item, detail, event).

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

- `sf-tree-selection-change` — `detail`: `{ component: object, tagName: string, template: string, item: object, selected: boolean, value: string }`. Запрошен или изменён выбор элемента дерева.
- `sf-tree-records-drop` — `detail` не описан. На узел отпустили записи, перетащенные из списка: {value, ids, source}. Дерево ничего не перемещает.
- `sf-tree-files-drop` — `detail` не описан. На узел отпустили файлы с компьютера: {value, files}. Дерево ничего не загружает.

### Доступность

- Роль: дерево (`tree`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`, `Enter`, `Space`, `typeahead`.
- Фокус: В порядке табуляции страницы находится один видимый элемент дерева; стрелки перемещают перемещаемый фокус независимо от выделения.

### Минимальная разметка

```html
<sf-tree></sf-tree>
```

### Источник

- `simai/ui@5f1d2e9e5529e8a80d5fcf497dd8d1ff2ab9c864:distr/smart/tree`
- `simai/ui@5f1d2e9e5529e8a80d5fcf497dd8d1ff2ab9c864:distr/rule/rule.json#name=cl-tree`

## См. также

- [Tree Item](/ru/smart-components/navigation/tree-item/) — атрибуты одного пункта.
- [Breadcrumbs](/ru/smart-components/navigation/breadcrumbs/) — путь к текущей странице.
