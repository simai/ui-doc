---
title: "Дерево"
description: "Показывает иерархию разделов, папок или категорий с раскрытием веток."
profile: reference
---

# Дерево

Дерево показывает вложенную иерархию — папки, разделы, категории — и даёт
раскрывать и сворачивать ветви. Для навигации по страницам сайта с
подменю берите [меню](/ru/components/navigation/menu/), для двух уровней
вложенности обычно хватает [списка](/ru/smart-components/content/list-item/).

## Пример

:::example {id="components/tree/overview" label="Дерево файлов"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-tree` → узлы `sf-tree-item` → строка `sf-tree-item-container` и группа
дочерних узлов `sf-tree-group`.

- Корень `sf-tree` с утилитами `flex flex-col` и `aria-label`. Роль `tree`
  ставит скрипт.
- Узел `sf-tree-item` — прямой потомок корня или группы. Его строка
  `sf-tree-item-container` с утилитами `flex items-cross-center` содержит
  переключатель и подпись `sf-tree-item-name`.
- Дочерние узлы лежат в `sf-tree-group` внутри родителя: группа даёт отступ
  уровня и `role="group"`. Узлы, записанные прямо внутри родителя, скрипт
  сам собирает в группу.
- Переключатель ветви — первый элемент строки: кнопка `sf-icon-button` или
  стрелка `sf-tree-chevron`; у листа на его месте — `sf-tree-toggle-spacer`.
- Подпись может быть ссылкой `<a href>`: тогда Enter на узле переходит по
  ней.

## Варианты

### Переключатель ветви

Кнопка `sf-icon-button` раскрывает ветвь щелчком; скрипт пишет в её иконку
`folder_open` или `folder`, другие имена задают атрибуты `data-open-icon` и
`data-closed-icon` на узле. Стрелка `sf-tree-chevron` только показывает
состояние (`keyboard_arrow_down` или `chevron_right`): щелчка по ней скрипт
не обрабатывает, ветвь раскрывается с клавиатуры. Для дерева, которым
пользуются мышью, берите кнопку.

:::example {id="components/tree/toggle" label="Кнопка и стрелка"}
:::

### Выравнивание листьев

`sf-tree-toggle-spacer` занимает у листа место переключателя, и подписи
листьев и ветвей встают на одну линию. Если ни один узел дерева не
раскрывается, атрибут `data-sf-tree-flat="true"` на корне убирает эти
отступы.

:::example {id="components/tree/alignment" label="Отступ под переключатель и плоское дерево"}
:::

## Состояния

Наведение подсвечивает строку цветом `--sf-surface-container-hover`; это
состояние компонент показывает сам.

### Раскрыт

Класс или атрибут `open` на узле показывает его группу. Скрипт держит их
согласованными, ставит ветви `aria-expanded` и обновляет иконку
переключателя; у листа `open` снимается.

:::example {id="components/tree/states" label="Закрытая и открытая ветвь"}
:::

### Выбран

Атрибут `data-selection` на корне включает выбор: `single` — один узел,
`multiple` — несколько (корень получает `aria-multiselectable`). Узел
выбирается пробелом; выбранный получает `aria-selected="true"` и класс
`active` и подсвечивается цветом `--sf-surface-container-active`. Без
`data-selection` пробел только активирует узел, как Enter лист.

:::example {id="components/tree/state-selected" label="Выбранный узел"}
:::

### Недоступен

`aria-disabled="true"` приглушает узел и снимает подсветку при наведении;
Enter не активирует такой лист.

:::example {id="components/tree/state-disabled" label="Недоступный узел"}
:::

### Фокус

Узел в фокусе получает кольцо внутри строки по `:focus-visible`. В примере
фокус показан классом `focus-visible`, который CSS компонента читает наравне
с псевдоклассом.

:::example {id="components/tree/state-focus" label="Узел в фокусе"}
:::

## Доступность

Скрипт ставит корню `role="tree"`, узлам — `role="treeitem"`, группам —
`role="group"`, ветвям — `aria-expanded`, и оставляет в порядке Tab один
узел. Автор задаёт корню `aria-label` или `aria-labelledby`.

Клавиши: стрелки вверх и вниз — соседний видимый узел, Home и End — первый и
последний; стрелка вправо раскрывает ветвь, а у открытой переходит к первому
дочернему узлу; стрелка влево сворачивает ветвь или переходит к родителю;
Enter раскрывает ветвь или активирует лист; пробел выбирает узел; ввод букв
переводит фокус к узлу, подпись которого с них начинается.

Кнопка раскрытия дублирует стрелки для мыши, а состояние ветви уже
сообщает `aria-expanded` узла. Поэтому кнопке ставят `tabindex="-1"` и
`aria-hidden="true"`: Tab не останавливается на каждой ветви, а её подпись
не повторяется в имени узла.

## JavaScript

Скрипт подключается сам и обслуживает каждый `.sf-tree`, в том числе
добавленный позже. Корни внутри смарт-компонента `<sf-tree>` он пропускает.

| Функция | Что делает |
|:---|:---|
| `SF.Tree.init(target)` | подключает деревья внутри `target` |
| `SF.Tree.sync(root)` | пересчитывает роли, группы и иконки после изменения разметки |
| `SF.Tree.open(item)`, `SF.Tree.close(item)`, `SF.Tree.toggle(item)` | раскрывает, сворачивает или переключает ветвь; для листа возвращают `false` |

События всплывают. С выпуска `ui-363de49bdfa8` классовое дерево шлёт те же
имена, что и смарт-компонент `<sf-tree>`, а следом за каждым — прежнее имя
с прежним `detail`, до 2026-12-01:

| Событие | Где и когда | `event.detail` | Прежнее имя |
|:---|:---|:---|:---|
| `sf-tree-toggle` | на узле: ветвь раскрыта или свёрнута | `id`, `open`, `value` | `sf-tree:toggle` с `item`, `open` |
| `sf-tree-open` | на узле: Enter на листе, подпись которого не ссылка | `id`, `value` | `sf-tree:activate` с `item`, `value` |
| `sf-tree-select` | на корне: выбор изменён | `ids`, `id`, `selected` | `sf-tree:selection-change` с `item`, `selected`, `value` |

`id` и `value` — атрибут `data-value` узла. В новых событиях `detail` несёт
только данные; сам узел — `event.target` (у `sf-tree-select` — корень,
узел ищите по `id`). Выбор по-прежнему включает `data-selection` со
значениями `single` и `multiple`.

Компонент регистрирует класс `Tree`: `SF.Loader` появляется к событию
`sf-loader-init` на `window`, а `SF.Loader.ready('Tree', callback)` вызывает
`callback`, когда скрипт загружен.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Tree', () => {
  const tree = document.querySelector('#files');
  tree.addEventListener('sf-tree-open', (event) => console.log(event.detail.value));
  SF.Tree.open(tree.querySelector('.sf-tree-item'));
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-tree` |
| Части | `sf-tree-chevron`, `sf-tree-group`, `sf-tree-item`, `sf-tree-item-container`, `sf-tree-item-name`, `sf-tree-toggle-spacer` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`sf-tree, .sf-tree`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-tree-gap` | Расстояние между строками. | `var(--sf-space-1\/3)` |
| `--sf-tree-padding-inline` | Отступ внутри дерева по обе стороны от строк. | `var(--sf-space-1)` |
| `--sf-tree-indent` | Насколько каждый уровень смещён относительно уровня выше. | `var(--sf-space-3)` |
| `--sf-tree-radius` | Скругление углов строки. | `var(--sf-radius--ui)` |
| `--sf-tree-color` | Цвет текста строки. | `var(--sf-on-surface)` |
| `--sf-tree-selected-background-color` | Заливка выбранной или текущей строки. | `var(--sf-surface-container-active)` |

```css
sf-tree, .sf-tree {
  --sf-tree-radius: 0;
}
```

## См. также

- [Элемент дерева](/ru/components/navigation/tree-item/)
- [Меню](/ru/components/navigation/menu/)
- [Дерево — смарт-компонент](/ru/smart-components/navigation/tree/)
