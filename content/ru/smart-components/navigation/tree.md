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

Раздел собран из манифеста компонента выпуска `ui-e26fc47c16d6` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-tree>` |
| Назначение | Доступный иерархический составной компонент с перемещаемым фокусом (roving focus), раскрытием ветвей и выбором, которым управляет элемент. |
| Контракт | `smart.tree`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-e26fc47c16d6` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `root-class` — `string`, по умолчанию пусто.
- `aria-label` — `string`, по умолчанию пусто.
- `role` — `string`, по умолчанию `tree`, значения: `tree`.
- `selection` — `string`, по умолчанию `none`, значения: `none`, `single`, `multiple`.

### Методы

- `onToggle()`

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `sf-tree-selection-change` — `detail` не описан. Запрошен или изменён выбор элемента дерева.

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

- `simai/ui@e26fc47c16d6d3e20746b3d519d08ec84d5b5168:distr/smart/tree`
- `simai/ui@e26fc47c16d6d3e20746b3d519d08ec84d5b5168:distr/rule/rule.json#name=cl-tree`

## См. также

- [Tree Item](/ru/smart-components/navigation/tree-item/) — атрибуты одного пункта.
- [Breadcrumbs](/ru/smart-components/navigation/breadcrumbs/) — путь к текущей странице.
