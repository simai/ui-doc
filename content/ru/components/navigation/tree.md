---
title: "Дерево"
description: "Показывает иерархию разделов, папок или категорий с раскрытием веток."
profile: reference
---

# Дерево

:badge[sf-tree]{variant=outline scheme=on-surface size=1/2} :badge[1.6.0]{variant=outline scheme=on-surface size=1/2}

Дерево показывает вложенную иерархию — папки, разделы, категории — и даёт
раскрывать и сворачивать ветви. Для навигации по страницам сайта с
подменю берите [меню](/ru/components/navigation/menu/), для двух уровней
вложенности обычно хватает [списка](/ru/smart/content/list-item/).

## Пример

:::example {id="components/tree/overview" label="Дерево файлов"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-tree` → узлы `sf-tree-item` → строка `sf-tree-item-container` и группа
дочерних узлов `sf-tree-group`.

- Корень `sf-tree` с `aria-label`. Корень и узлы сами стоят столбцом: строки
  в 4 px друг от друга, и ветка в 4 px от своей группы. Роль `tree` ставит
  скрипт.
- Узел `sf-tree-item` — прямой потомок корня или группы. Его строка
  `sf-tree-item-container` с утилитами `flex items-cross-center` содержит
  переключатель, значок типа `sf-tree-node-icon` и подпись
  `sf-tree-item-name`.
- Дочерние узлы лежат в `sf-tree-group` внутри родителя: группа даёт отступ
  уровня и `role="group"`. Узлы, записанные прямо внутри родителя, скрипт
  сам собирает в группу.
- Переключатель ветви — первый элемент строки: кнопка `sf-icon-button` или
  стрелка `sf-tree-chevron` со стрелкой `chevron_right` или
  `keyboard_arrow_down`; у листа на его месте — `sf-tree-toggle-spacer`.
- Подпись может быть ссылкой `<a href>`: тогда Enter на узле переходит по
  ней.

### Узел дерева

Узел `sf-tree-item` — одна строка дерева: переключатель ветви, иконка и
подпись, а у ветви — группа дочерних узлов `sf-tree-group` сразу после
строки. Отдельно от дерева узел не используют: раскрытие, роли и клавиатуру
даёт корень `sf-tree`.

Атрибуты узла: `open` — ветвь раскрыта, `data-value` — значение для событий
дерева, `data-open-icon` и `data-closed-icon` — значки типа открытой и
закрытой ветви (по умолчанию `folder_open` и `folder`),
`aria-disabled="true"` — узел недоступен.

:::example {id="components/tree-item/overview" label="Ветвь и лист"}
:::

#### Иконка узла

Значок типа `sf-icon sf-tree-node-icon` стоит после переключателя и перед
подписью: у ветви — папка, у листа — значок по типу записи (страница, файл,
картинка). Значок приглушённый, под указателем и в выбранной строке берёт
цвет подписи; другой цвет задаёт переменная `--sf-tree-item-icon-color`
([переменные](#переменные)). Если значков типа в дереве нет, строку
начинает одна стрелка.

:::example {id="components/tree-item/icon" label="Узлы с иконками"}
:::

#### Подпись-ссылка

Если узел ведёт на страницу, подпись — ссылка `<a class="sf-tree-item-name">`:
Enter на узле переходит по ней. Уберите ссылку из порядка `Tab`
(`tabindex="-1"`): фокус получает сам узел.

:::example {id="components/tree-item/link" label="Подписи-ссылки"}
:::

## Варианты

### Переключатель ветви

Переключатель — шеврон: скрипт пишет в кнопку `sf-icon-button` или в стрелку
`sf-tree-chevron` значок `keyboard_arrow_down` у открытой ветви и
`chevron_right` у закрытой. Нажатие на любой из них раскрывает и сворачивает
ветвь; нажатие на остальную строку переводит на неё фокус, а в дереве без
выбора раскрывает ветвь или открывает лист. Значок типа ветви скрипт меняет
вместе с ней: `folder_open` у открытой, `folder` у закрытой. Выбор флажками
рисует [смарт-дерево](/ru/smart/navigation/tree/).

:::example {id="components/tree/toggle" label="Кнопка и стрелка"}
:::

### Размер

`sf-tree--size-1/2`, `sf-tree--size-2` • [справочник](#классы)

Строка дерева — ступень лестницы элементов управления: высота строки,
колонка шеврона и значка и текст подписи берутся из одной ступени. Размер 1
— по умолчанию (строка 40 px, на телефоне 36), `sf-tree--size-1/2` — для
узкой панели, `sf-tree--size-2` — крупнее. Каждый следующий уровень
сдвинут на колонку шеврона и промежуток: значок ребёнка стоит под подписью
родителя.

:::example {id="components/tree/sizes" label="Размеры 1/2, 1 и 2"}
:::

### Статичное дерево

`sf-tree--static` • [справочник](#классы)

`sf-tree--static` показывает структуру в тексте — файлы проекта, разделы
документации. Это список `ul`/`li` из групп `sf-tree-group`: без шевронов,
без нажатий, без остановки Tab и без подсветки. Строки — строки текста,
подписи набраны моноширинным шрифтом, пояснение `sf-tree-item-note` после
подписи переносится под неё в узкой строке. Скрипт такое дерево не трогает.

:::example {id="components/tree/static" label="Структура проекта"}
:::

### Выравнивание листьев

`sf-tree-toggle-spacer` занимает у листа место переключателя, и подписи
листьев и ветвей встают на одну линию. Если ни один узел дерева не
раскрывается, атрибут `data-sf-tree-flat="true"` на корне убирает эти
отступы.

:::example {id="components/tree/alignment" label="Выравнивание листьев"}
:::

## Состояния

Наведение подсвечивает только строку под указателем цветом
`--sf-surface-container-hover`, родитель при этом не подсвечивается; это
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
выбирается пробелом или нажатием на строку; выбранный получает
`aria-selected="true"` и класс `active` и подсвечивается мягким основным
цветом `--sf-primary-container`. Под указателем выбранная строка остаётся в
своём цвете, на ступень темнее. Без
`data-selection` пробел только активирует узел, как Enter лист.

:::example {id="components/tree/state-selected" label="Выбранный узел"}
:::

### Текущая страница

Если дерево служит навигацией по страницам, текущей странице дайте
`aria-current="page"`: строка залита основным цветом, подпись полужирная,
шеврон и значок — цвета подписи. Свёрнутая ветка, в которой лежит текущая
страница, отмечена полужирной подписью без заливки, поэтому видно, где
человек находится, даже когда ветка закрыта.

:::example {id="components/tree/current" label="Текущая страница и свёрнутая ветка с ней"}
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

События всплывают; их имена те же, что у смарт-компонента `<sf-tree>`:

| Событие | Где и когда | `event.detail` |
|:---|:---|:---|
| `sf-tree-toggle` | на узле: ветвь раскрыта или свёрнута | `id`, `open`, `value` |
| `sf-tree-open` | на узле: Enter на листе, подпись которого не ссылка | `id`, `value` |
| `sf-tree-select` | на корне: выбор изменён | `ids`, `id`, `selected` |

`id` и `value` — атрибут `data-value` узла. `detail` несёт
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

**`sf-tree`**

| Что | Классы |
|:---|:---|
| Блок | `sf-tree` |
| Части | `sf-tree-check`, `sf-tree-chevron`, `sf-tree-group`, `sf-tree-node-icon`, `sf-tree-toggle-spacer` |
| Модификаторы | `sf-tree--static` |
| Размеры | `sf-tree--size-1/2`, `sf-tree--size-2` |

**`sf-tree-item`**

| Что | Классы |
|:---|:---|
| Блок | `sf-tree-item` |
| Части | `sf-tree-item-container`, `sf-tree-item-name`, `sf-tree-item-note`, `sf-tree-item-retry`, `sf-tree-item-spinner` |
| Модификаторы | `sf-tree-item--error`, `sf-tree-item--hidden`, `sf-tree-item--holds-current`, `sf-tree-item--loading`, `sf-tree-item--mark`, `sf-tree-item--more` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`sf-tree-item, .sf-tree-item`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-tree-item-gap` | Промежуток между шевроном, флажком, значком и именем; шаг уровня sf-tree следует за ним. | `var(--sf-space-1\/2)` |
| `--sf-tree-item-name-color` | Цвет имени вне дерева; внутри дерева имя берёт цвет своей строки. | `var(--sf-primary)` |
| `--sf-tree-item-icon-color` | Цвет шеврона и значка. | `currentColor` |
| `--sf-tree-item-drop-background-color` | Заливка узла, на который упадёт перетаскиваемое. | `var(--sf-primary-container)` |
| `--sf-tree-item-drop-outline-color` | Пунктирное кольцо узла, на который упадёт перетаскиваемое. | `var(--sf-primary)` |

```css
sf-tree-item, .sf-tree-item {
  --sf-tree-item-gap: var(--sf-space-1\/2);
}
```

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`sf-tree, .sf-tree`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-tree-gap` | Промежуток между строками: 4, как в колонке меню. | `var(--sf-space-1\/4)` |
| `--sf-tree-padding-inline` | Отступ внутри дерева по обе стороны от строк. | `var(--sf-space-1)` |
| `--sf-tree-indent` | Насколько каждый уровень отступает от предыдущего. По умолчанию — первая колонка и промежуток в строке, так что первая колонка ребёнка стоит под второй колонкой родителя. | `calc(var(--sf-icon-size-3) + var(--sf-tree-item-gap))` |
| `--sf-tree-radius` | Скругление углов строки. | `var(--sf-radius--ui)` |
| `--sf-tree-color` | Цвет текста строки. | `var(--sf-on-surface)` |
| `--sf-tree-selected-background-color` | Заливка выбранной или текущей строки. | `var(--sf-primary-container)` |

```css
sf-tree, .sf-tree {
  --sf-tree-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-tree`, `.sf-tree-item`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-tree--code-size` | `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-tree--column` | `var(--sf-icon-size-3)` | `--sf-tree--indent`, `padding-top`, `padding-bottom`, `padding-block`, `flex`, `width`, `inline-size`, `height`, `block-size`, `--sf-icon--font-size`, `--sf-icon--width`, `--sf-icon--height`, `font-size`, `--sf-loader-svg-width`, `--sf-loader-svg-height` |
| `--sf-tree--indent` | `var(--sf-tree-indent, var(--sf-tree-item--nested-padding-inline-start, calc(var(--sf-tree--column) + var(--sf-tree--part-gap))))` | `margin-inline-start`, `padding-inline-start` |
| `--sf-tree--inset` | `var(--sf-space-1)` | `padding-left`, `padding-right`, `padding-inline` |
| `--sf-tree--part-gap` | `var(--sf-tree-item-gap, var(--sf-space-1/2))` | `--sf-tree--indent`, `-moz-column-gap`, `column-gap` |
| `--sf-tree--row` | `var(--sf-ui-1--control-height)` | `min-height`, `min-block-size`, `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-tree--text-height` | `var(--sf-text-height-1)` | `line-height`, `min-height`, `min-block-size`, `--sf-icon--height` |
| `--sf-tree--text-size` | `var(--sf-text-size-1)` | `font-size` |
| `--sf-tree-item-icon--color` | не задана; задают модификаторы, например `.sf-tree:not(.sf-tree--static) .sf-tree-item:not([aria-disabled=true]):not([aria-current=page]):not(.active):not([aria-selected=true]) > .sf-tree-item-container:hover`: `currentColor` | — |

## См. также

- [Меню](/ru/components/navigation/menu/)
- [Дерево — смарт-компонент](/ru/smart/navigation/tree/)
