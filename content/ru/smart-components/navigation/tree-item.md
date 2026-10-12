---
title: "Tree Item"
description: "Задаёт один пункт дерева: подпись, ссылку, тип, вложенные пункты и состояние."
---

# Tree Item

`<sf-tree-item>` — один пункт [дерева](/ru/smart-components/navigation/tree/):
папка с вложенными пунктами, файл или ссылка на раздел. Пункты ставят внутрь
`<sf-tree>`: дерево даёт им общий порядок фокуса, клавиатуру и выбор.
Оформление совпадает с обычным [пунктом дерева](/ru/components/navigation/tree-item/).

## Пример

:::example {id="smart-components/tree-item/overview" label="Результат"}
:::

## Применение

### Подпись и ссылка

`label` — подпись пункта; без неё подписью служит текст внутри
`<sf-tree-item>`. `href` делает подпись ссылкой, `target` и `rel` переходят
на неё. `value` — машинное значение, которое приходит в событиях дерева.

### Папка или файл

`kind` — `folder` (по умолчанию) или `file`. Папка с вложенными
`<sf-tree-item>` получает кнопку раскрытия и иконку открытой или закрытой
папки, файл — иконку документа и никогда не раскрывается. Вложенный пункт
из разметки может потерять `kind`, когда `<sf-tree>` перерисовывает его,
поэтому дерево с файлами передавайте данными, как в
[примере Tree](/ru/smart-components/navigation/tree/).

`open-icon` и `closed-icon` заменяют иконки папки, `chevron-open-icon` и
`chevron-closed-icon` — стрелку раскрытия. `icon="false"` убирает иконку
пункта: так выглядит дерево разделов, а не файлов, как в примере.

### Состояние

`open` раскрывает ветвь. `selected` отмечает выбранный пункт, если дерево
разрешает выбор. `active` выделяет пункт текущей страницы и ставит ему
`aria-current="page"`. `disabled` выключает пункт: он не раскрывается, его
ссылка не рисуется, а нажатие ничего не делает.

### Методы и события

`open()`, `close()`, `toggle()` и `setOpen(bool)` раскрывают и сворачивают
ветвь и отправляют `sf-tree-item-toggle` с `detail.open`, `detail.item` и
`detail.value`; пункт без вложенных не раскрывается. `onToggle(handler)`
передаёт обработчику новое состояние первым аргументом. `activate()`
открывает ссылку пункта или, если её нет, отправляет `sf-tree-item-click`.
`focusItem()` переводит фокус на пункт.

```js
const section = document.querySelector('sf-tree-item[value="reports"]');
section.onToggle((open) => {
  if (open) loadReports();
});
section.open();
```

## Доступность

- Пункт — элемент дерева (`treeitem`), его доступное имя — подпись.
- Фокус между пунктами переводит дерево стрелками; на странице `Tab`
  останавливается на одном пункте дерева. Кнопка раскрытия и ссылка внутри
  пункта не получают отдельной остановки `Tab`.
- Кнопка раскрытия сообщает `aria-expanded`. Её доступное имя по умолчанию
  английское: на русской странице задавайте `open-label` и `close-label`,
  как в примере.
- Недоступный пункт сообщает `aria-disabled="true"`, пункт текущей страницы —
  `aria-current="page"`.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-e26fc47c16d6` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-tree-item>` |
| Назначение | Один доступный узел иерархии Smart Tree. |
| Контракт | `smart.tree-item`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-e26fc47c16d6` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `label` — `string`, по умолчанию пусто.
- `text` — `string`, по умолчанию пусто.
- `href` — `string`, по умолчанию пусто.
- `target` — `string`, по умолчанию пусто.
- `rel` — `string`, по умолчанию пусто.
- `kind` — `string`, по умолчанию `folder`, значения: `folder`, `file`. Тип элемента дерева: папка или файл.
- `value` — `string`, по умолчанию пусто.
- `open` — `boolean`, по умолчанию `false`.
- `selected` — `boolean`, по умолчанию `false`.
- `active` — `boolean`, по умолчанию `false`.
- `disabled` — `boolean`, по умолчанию `false`.
- `items-data` — `array`, по умолчанию `[]`.
- `open-icon` — `string`, по умолчанию `folder_open`.
- `closed-icon` — `string`, по умолчанию `folder`.
- `icon` — `boolean`, по умолчанию `true`.
- `chevron-open-icon` — `string`, по умолчанию `keyboard_arrow_down`.
- `chevron-closed-icon` — `string`, по умолчанию `chevron_right`.
- `open-label` — `string`, по умолчанию `Open item`.
- `close-label` — `string`, по умолчанию `Close item`.
- `root-class` — `string`, по умолчанию пусто.
- `item-class` — `string`, по умолчанию пусто.
- `container-class` — `string`, по умолчанию пусто.
- `name-class` — `string`, по умолчанию пусто.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает и предупреждает | 2026-12-01 |

### Методы

- `setOpen()`
- `open()`
- `close()`
- `focusItem()` — возвращает `object`. Переносит фокус DOM на этот элемент дерева.
- `activate()` — возвращает `object`. Активирует ссылку элемента или генерирует событие щелчка по элементу.
- `toggle()`
- `onToggle()`

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `sf-tree-item-click` — `detail` не описан.
- `sf-tree-item-toggle` — `detail` не описан.

### Доступность

- Роль: элемент дерева (`treeitem`).
- Доступное имя: обязательно.
- Клавиши: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`, `Enter`, `Space`.
- Фокус: Дерево управляет перемещаемым фокусом (roving focus); раскрытие, фокус и выбор независимы.

### Минимальная разметка

```html
<sf-tree-item></sf-tree-item>
```

### Источник

- `simai/ui@e26fc47c16d6d3e20746b3d519d08ec84d5b5168:distr/smart/tree-item`
- `simai/ui@e26fc47c16d6d3e20746b3d519d08ec84d5b5168:distr/rule/rule.json#name=cl-tree-item`

## См. также

- [Tree](/ru/smart-components/navigation/tree/) — дерево, клавиатура и выбор.
