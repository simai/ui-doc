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
- Доступное имя кнопки «…» по умолчанию английское, поэтому на русской
  странице передавайте перевод в `expand-label`, как в примере.
- Ссылки и кнопка «…» — обычные остановки `Tab`. Текущая страница не
  получает фокус и отмечена `aria-current="page"`.
- Разделители и иконки скрыты от вспомогательных технологий; пункт только с
  иконкой получает имя из поля `aria-label`.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-339e04ba0cf4` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-breadcrumbs>` |
| Назначение | Smart-компонент Breadcrumbs из SIMAI Framework. |
| Контракт | `smart.breadcrumbs`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-339e04ba0cf4` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
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
- `aria-label` — `string`, по умолчанию `Breadcrumb`.
- `expand-label` — `string`, по умолчанию `Show hidden breadcrumbs`.
- `expand-on-ellipsis` — `boolean`, по умолчанию `true`.
- `max-items` — `number`, по умолчанию `4`.

### Методы

- `getCapturedItems()`
- `getDisplayItems()`
- `setState()`
- `onItemClick()`

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `sf-breadcrumb-click` — `detail` не описан.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter on links`, `Enter or Space on the ellipsis button`.
- Фокус: Нативные ссылки и кнопка с многоточием используют `focus-visible` только для клавиатуры; текущая страница не входит в порядок табуляции.

### Минимальная разметка

```html
<sf-breadcrumbs></sf-breadcrumbs>
```

### Источник

- `simai/ui@339e04ba0cf44f6eeec97db26f782979fc5460f4:distr/smart/breadcrumbs`
- `simai/ui@339e04ba0cf44f6eeec97db26f782979fc5460f4:distr/rule/rule.json#name=cl-breadcrumbs`

## См. также

- [Steps](/ru/smart-components/navigation/steps/) — этапы последовательного процесса.
- [Tree](/ru/smart-components/navigation/tree/) — вся иерархия разделов сразу.
