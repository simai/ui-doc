---
title: "Breadcrumbs"
description: "Показывает путь от корня сайта до текущей страницы и сворачивает длинный путь."
---

# Breadcrumbs

`<sf-breadcrumbs>` показывает, где в иерархии сайта находится страница:
ссылки на разделы выше и название текущей страницы в конце. Он собирает
разметку обычных [хлебных крошек](/ru/components/navigation/breadcrumbs/) из
строки или данных и сам сворачивает длинный путь. Берите его на страницах
глубже второго уровня, где пользователю нужно вернуться к разделу.

## Пример

:::example {id="smart-components/breadcrumbs/overview" label="Результат"}
:::

## Применение

### Пункты пути

Пункты задаёт `items`. Короткая запись — строка, где пункты разделены
символом `|`, а после `::` идут поля пункта через запятую:
`Каталог::href=/catalog|Лампы`. Поля: `href`, `icon`, `target`, `rel`,
`aria-label` и флаг `disabled`. Полная запись — массив JSON с
теми же полями и подписью в `label`. Пункты можно передать и дочерними
элементами `<sf-breadcrumbs-item>` с теми же атрибутами.

Последний пункт — текущая страница: он рисуется текстом, не ссылкой, и
получает `aria-current="page"`. Пункт с `href` становится ссылкой, пункт без
адреса — кнопкой, нажатие на которую приложение обрабатывает событием.

`separator-icon` меняет разделитель, по умолчанию `chevron_right`.
`home-label` и `home-icon` подписывают первый пункт, если у него нет своей
подписи.

### Длинный путь

Если пунктов больше `max-items` (по умолчанию 4), середина пути сворачивается
в кнопку «…»: остаются первый пункт и два последних. Скрытые пункты кнопка
передаёт в событии нажатия, в поле `item.hiddenItems`. `max-items` меньше 3
отключает сворачивание.

:::example {id="smart-components/breadcrumbs/long-path" label="Результат"}
:::

### Событие `sf-breadcrumb-click`

Нажатие на пункт отправляет всплывающее отменяемое событие
`sf-breadcrumb-click`. Его `event.detail`
содержит `item` — данные пункта (`label`, `href`, `value`, `ellipsis` и
другие поля), `index` — номер пункта среди показанных, `items` — все
показанные пункты, `originalEvent` — исходный `click`. У кнопки «…» в `item` есть
`ellipsis: true` и `hiddenItems`. Помощник `onItemClick(handler)` передаёт
обработчику данные пункта первым аргументом.

Для навигации в одностраничном приложении перехватите нажатие на ссылку:

```js
const crumbs = document.querySelector('sf-breadcrumbs');
crumbs.onItemClick((item, detail) => {
  if (!item.href) return;
  detail.originalEvent.preventDefault();
  router.navigate(item.href);
});
```

## Доступность

- Корень — ориентир `nav` с доступным именем. На русской странице имя по
  умолчанию — «Хлебные крошки»; если на странице несколько путей, назовите
  каждый в `aria-label`.
- Доступное имя кнопки «…» по умолчанию берётся на языке страницы
  (по-русски «Показать скрытые крошки»); своё имя задаёт `expand-label`.
- Ссылки и кнопка «…» — обычные остановки `Tab`. Текущая страница не
  получает фокус и отмечена `aria-current="page"`.
- Разделители и иконки скрыты от вспомогательных технологий; пункт только с
  иконкой получает имя из поля `aria-label`.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-d90198da3a2f` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-breadcrumbs>` |
| Назначение | Показывает место текущей страницы в иерархии цепочкой нативных ссылок, построенной из items, атрибута items или дочерних sf-breadcrumbs-item. У длинной цепочки середина сворачивается в кнопку-многоточие (max-items, по умолчанию 4), которая раскрывается на месте. |
| Контракт | `smart.breadcrumbs`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-d90198da3a2f` |
| [Жизненный цикл](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/connection/#готовность-компонента-к-использованию) | описан: манифест и сценарий есть, продуктовой приёмки нет |
| Заготовка до прихода кода | сервер пишет `data-sf-skeleton="line"`; своего скелетона при загрузке данных нет ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`.
- `items` — `string`, по умолчанию `[]`.
- `separator-icon` — `string`, по умолчанию `chevron_right`.
- `home-icon` — `string`, по умолчанию `home`.
- `home-label` — `string`, по умолчанию пусто.
- `root-class` — `string`, по умолчанию пусто.
- `item-class` — `string`, по умолчанию пусто.
- `link-class` — `string`, по умолчанию пусто.
- `current-class` — `string`, по умолчанию пусто.
- `separator-class` — `string`, по умолчанию пусто.
- `container-class` — `string`, по умолчанию пусто.
- `aria-label` — `string`, по умолчанию пусто. Пусто — текст на языке страницы (по-английски «Breadcrumb»).
- `expand-label` — `string`, по умолчанию пусто. Пусто — текст на языке страницы (по-английски «Show hidden breadcrumbs»).
- `expand-on-ellipsis` — `boolean`, по умолчанию `true`.
- `max-items` — `number`, по умолчанию `4`.

### Методы

- `getCapturedItems()` — возвращает `array` из `object`. Читает захваченные дочерние sf-breadcrumbs-item в простые объекты пунктов (label, href, icon, current, active, disabled, ellipsis, target, rel, itemClass, containerClass, ariaLabel, value, hiddenItems).
- `getDisplayItems(items?: array)` — возвращает `array` из `object`. Возвращает пункты в том виде, в каком они показаны: если их больше max-items (не меньше 3) и многоточие не раскрыто, середина заменяется одним пунктом-многоточием со скрытыми пунктами; все пункты переиндексируются, и текущим может быть только последний.
- `setState(nextState?: object)` — возвращает `object`. Записывает каждый ключ как атрибут хост-элемента (camelCase в kebab-case): массивы — как JSON, true — как пустой атрибут, false/null/undefined удаляют его. Возвращает элемент.
- `onItemClick(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик sf-breadcrumb-click; обработчик получает (item, detail, event). Возвращает элемент.

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

- `sf-breadcrumb-click` — `detail`: `{ component?: any, tagName?: string, template?: string, item?: object, index?: number, items?: array, originalEvent?: any }`. Нажат пункт. Всплывает, с composed: true и отменяемое: preventDefault() на пункте-многоточии оставляет его свёрнутым. У отключённых и текущих пунктов нативный переход отменяется до отправки события.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter` на ссылках, `Enter` или `Space` на кнопке с многоточием.
- Фокус: Нативные ссылки и кнопка с многоточием используют `focus-visible` только для клавиатуры; текущая страница не входит в порядок табуляции.

### Минимальная разметка

```html
<sf-breadcrumbs></sf-breadcrumbs>
```

### Источник

- `simai/ui@d90198da3a2fbad60b5a9057e8fc562bb5e08333:distr/smart/breadcrumbs`
- `simai/ui@d90198da3a2fbad60b5a9057e8fc562bb5e08333:distr/rule/rule.json#name=cl-breadcrumbs`

## См. также

- [Steps](/ru/smart-components/navigation/steps/) — этапы последовательного процесса.
- [Tree](/ru/smart-components/navigation/tree/) — вся иерархия разделов сразу.
