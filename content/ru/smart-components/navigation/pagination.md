---
title: "Pagination"
description: "Навигация по страницам с source-driven состоянием и событиями приложения."
---

# Pagination

Идентификатор: `smart.pagination`. Жизненный цикл — экспериментальный.

Компонент отображает именованную навигацию по страницам, но не загружает данные и
не придумывает URL. Приложение передаёт `current`, `total` и `page-size`, слушает
события и обновляет свой источник данных.

## Теги и подключение

Custom Elements: `<sf-pagination>`.

Loader-статус: `registered`. Loader-правило: `cl-pagination`.

Поставляемые ассеты:
- `simai/ui-smart@548c11cd6ec071d171ca8da4fb5bc66c6d9552c0:smart/pagination/js/pagination.js`
- `simai/ui-smart@548c11cd6ec071d171ca8da4fb5bc66c6d9552c0:smart/pagination/template/default.js`

## Зависимости

- `component.pagination`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `"default"` | `—` |
| `top` | `top` | `Boolean` | `true` | `—` |
| `middle` | `middle` | `Boolean` | `true` | `—` |
| `bottom` | `bottom` | `Boolean` | `true` | `—` |
| `top-class` | `topClass` | `String` | `""` | `—` |
| `main-class` | `mainClass` | `String` | `""` | `—` |
| `bottom-class` | `bottomClass` | `String` | `""` | `—` |
| `aria-label` | `ariaLabel` | `String` | `"Страницы результатов"` | `—` |
| `pages-label` | `pagesLabel` | `String` | `"Страницы:"` | `—` |
| `page-label` | `pageLabel` | `String` | `"Страница"` | `—` |
| `previous-label` | `previousLabel` | `String` | `"Предыдущая страница"` | `—` |
| `next-label` | `nextLabel` | `String` | `"Следующая страница"` | `—` |
| `last-label` | `lastLabel` | `String` | `"Последняя"` | `—` |
| `total-label` | `totalLabel` | `String` | `"Всего:"` | `—` |
| `selected-label` | `selectedLabel` | `String` | `"Отмечено:"` | `—` |
| `selected-count` | `selectedCount` | `Number` | `0` | целое число от 0 до `total` |
| `show-more-text` | `showMoreText` | `String` | `"Показать ещё"` | `—` |
| `current` | `current` | `Number` | `1` | `—` |
| `total` | `total` | `Number` | `10` | `—` |
| `page-size` | `pageSize` | `Number` | `10` | `—` |
| `page-sizes` | `pageSizes` | `String` | `"10,20,30,40"` | положительные числа через запятую |
| `show-page-size` | `showPageSize` | `Boolean` | `true` | `—` |
| `page-size-label` | `pageSizeLabel` | `String` | `"На странице:"` | `—` |
| `show-actions` | `showActions` | `Boolean` | `true` | `—` |
| `actions` | `actions` | `String` | `[]` | `—` |
| `action` | `action` | `String` | `""` | `—` |
| `action-apply-text` | `actionApplyText` | `String` | `"Применить"` | `—` |
| `show-action-for-all` | `showActionForAll` | `Boolean` | `false` | `—` |
| `action-for-all` | `actionForAll` | `Boolean` | `false` | `—` |
| `action-for-all-label` | `actionForAllLabel` | `String` | `"Для всех"` | `—` |
| `actions-label` | `actionsLabel` | `String` | `"Действие с выбранными элементами"` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`applyAction()`, `get action()`, `get actionApplyText()`, `get actionForAll()`,
`get actionForAllLabel()`, `get actions()`, `get actionsLabel()`, `get ariaLabel()`,
`get bottom()`, `get bottomClass()`, `get current()`, `get lastLabel()`,
`get mainClass()`, `get middle()`, `get nextLabel()`, `get pageCount()`,
`get pageItems()`, `get pageLabel()`, `get pageSize()`, `get pageSizeLabel()`,
`get pageSizes()`, `get pagesLabel()`, `get previousLabel()`,
`get selectedCount()`, `get selectedLabel()`, `get showActionForAll()`,
`get showActions()`, `get showMoreText()`, `get showPageSize()`, `get state()`,
`get top()`, `get topClass()`, `get total()`, `get totalLabel()`,
`getBottomSection()`, `getMainSection()`, `getTopSection()`, `goToPage()`,
`lastPage()`, `onPageChange()`, `onShowMore()`, `setAction()`,
`setActionForAll()`, `setPageSize()`, `setState()`, `showMore()`.

## События

Все события всплывают (`bubbles`) и проходят границу Shadow DOM (`composed`).

| Событие | Когда возникает |
|:---|:---|
| `sf-connected` | Элемент подключён к DOM |
| `sf-disconnected` | Элемент отключён от DOM |
| `sf-before-render` | Начало цикла отрисовки |
| `sf-after-render` | Цикл отрисовки завершён |
| `sf-updated` | Свойства или разметка обновлены |
| `sf-props-change` | Изменились наблюдаемые свойства |
| `sf-action-apply` | Компонент-специфичное событие из source-класса |
| `sf-action-change` | Компонент-специфичное событие из source-класса |
| `sf-action-for-all-change` | Компонент-специфичное событие из source-класса |
| `sf-page-change` | Компонент-специфичное событие из source-класса |
| `sf-page-size-change` | Компонент-специфичное событие из source-класса |
| `sf-show-more` | Компонент-специфичное событие из source-класса |

## Минимальная разметка

```html
<sf-pagination
  aria-label="Страницы результатов поиска"
  current="2"
  total="96"
  page-size="10"
  top="false"
  bottom="false"
  show-page-size="false"
></sf-pagination>
```

## Доступность

Видимый корень — `nav` с доступным именем. Номера образуют список, текущая
страница одна и получает `aria-current="page"`. Многоточие не является кнопкой.
Tab достигает только доступных действий, а общий `focus-visible` контракт
Framework показывает фокус при клавиатурной навигации и в forced-colors.

## Границы композиции

Верхнее «Показать ещё», выбор размера страницы и нижние пакетные действия
сохранены для совместимости и включаются отдельными параметрами. Они не входят в
минимальный контракт пагинации. Количество выбранных строк всегда передаёт
приложение через `selected-count`; компонент не читает состояние соседней таблицы.

## Источник

- `simai/ui-smart@548c11cd6ec071d171ca8da4fb5bc66c6d9552c0:smart/pagination`
- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=cl-pagination`
