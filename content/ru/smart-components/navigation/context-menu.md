---
title: "Context Menu"
description: "Показывает короткий список действий над объектом с клавиатурной моделью меню."
---

# Context Menu

`<sf-context-menu>` — панель с коротким списком действий над объектом:
строкой таблицы, файлом, карточкой. Он оформлен как обычное
[контекстное меню](/ru/components/navigation/context-menu/) и даёт пунктам
роль меню и управление стрелками. Открыть меню у объекта и закрыть его —
задача страницы; для выбора значения в форме берите
[Dropdown](/ru/smart-components/navigation/dropdown/).

## Пример

:::example {id="smart-components/context-menu/overview" label="Результат"}
:::

## Применение

### Пункты

Пункты — кнопки и ссылки, переданные со `slot="content"`: `<sf-button>`,
нативные `<button>` и `<a href>`. Обычно берут `<sf-button>` вида `link` со
схемой `on-surface` и размером `1/2`; держите в одном меню пункты одного
размера. Меню выравнивает подписи по началу строки.

Пункты можно передать и данными в свойстве `items`: каждый элемент массива —
`{component, props}`. Для `component: 'sf-button'` в `props` читаются
`text`, `type` (вид кнопки), `scheme`, `size`, `iconLeft`, `iconRight`,
`ariaLabel`, `disabled` и обработчик `'@click'`. `text` без пунктов
показывает в меню простой текст.

### Хвост

`position` ставит хвост на сторону панели, обращённую к объекту, например
`top-inline-start` — хвост сверху у начала строки, для меню под объектом.
Логические стороны `inline-start` и `inline-end` отражаются при письме
справа налево. Без `position` меню рисуется без хвоста; `tooltip="false"`
убирает хвост при заданной стороне. Свою разметку хвоста передаёт слот
`tooltip`.

### Открытие и закрытие

Меню не открывается и не закрывается само: оно рисуется там, где стоит в
разметке. Показывает его страница — по нажатию кнопки или правой кнопке мыши
— и после показа переводит в него фокус методом `focus()`, дождавшись
отрисовки. По `Escape` и после выбора пункта страница скрывает меню и
возвращает фокус на кнопку, которая его открыла. Действие пункта — обычный
`click` на кнопке. Скрывайте обёртку меню: сам `<sf-context-menu>` не
занимает места в раскладке, и атрибут `hidden` на нём не действует.

```js
const layer = document.querySelector('#file-menu-layer');
const menu = layer.querySelector('sf-context-menu');
const opener = document.querySelector('#file-menu-button');

opener.addEventListener('click', async () => {
  layer.hidden = false;
  opener.setAttribute('aria-expanded', 'true');
  await menu.whenRendered();
  menu.focus();
});

layer.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  layer.hidden = true;
  opener.setAttribute('aria-expanded', 'false');
  opener.focus();
});
```

## Доступность

- Меню нужно доступное имя: `aria-label` на `<sf-context-menu>`.
- Прямые пункты получают роль `menuitem`; в порядке `Tab` остаётся один
  пункт. Стрелки вверх и вниз переходят по пунктам по кругу, `Home` и `End`
  — к первому и последнему, `Enter` и `Space` нажимают пункт. Недоступные и
  скрытые пункты пропускаются.
- Кнопка, которая открывает меню, сообщает его состояние через
  `aria-expanded`, а после закрытия получает фокус обратно.
- Хвост декоративен и скрыт от вспомогательных технологий.
- Атрибут `role` со значением, отличным от `menu`, отключает клавиатурную
  модель меню: задавайте его, только если пункты — не команды.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-6d2bf151e3c8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-context-menu>` |
| Назначение | Презентационная поверхность меню действий с логическими позициями в конце и нативной работой с пунктами с клавиатуры. |
| Контракт | `smart.context-menu`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-6d2bf151e3c8` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `position` — `string`, по умолчанию пусто, значения: пусто, `inline-start`, `inline-start-top`, `inline-start-bottom`, `inline-end`, `inline-end-top`, `inline-end-bottom`, `top`, `top-inline-start`, `top-inline-end`, `bottom`, `bottom-inline-start`, `bottom-inline-end`, `start`, `end`, `top-start`, `top-end`, `bottom-start`, `bottom-end`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left-start`, `left-end`, `right-start`, `right-end`, `inline-start-start`, `inline-start-end`, `inline-end-start`, `inline-end-end`.
- `tooltip` — `boolean`, по умолчанию `true`.
- `text` — `string`, по умолчанию пусто.
- `aria-label` — `string`, по умолчанию пусто.
- `items` — `array` из `object`, по умолчанию `[]`.
- `role` — `string`, по умолчанию `menu`.
- `content-class` — `string`, по умолчанию пусто.
- `root-class` — `string`, по умолчанию пусто.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `position="inline-start"` | `position="start"` | работает и предупреждает | 2026-12-01 |
| `position="inline-end"` | `position="end"` | работает и предупреждает | 2026-12-01 |
| `position="top-inline-start"` | `position="top-start"` | работает и предупреждает | 2026-12-01 |
| `position="top-inline-end"` | `position="top-end"` | работает и предупреждает | 2026-12-01 |
| `position="bottom-inline-start"` | `position="bottom-start"` | работает и предупреждает | 2026-12-01 |
| `position="bottom-inline-end"` | `position="bottom-end"` | работает и предупреждает | 2026-12-01 |
| `position="left-top"` | `position="left-start"` | работает и предупреждает | 2026-12-01 |
| `position="left-bottom"` | `position="left-end"` | работает и предупреждает | 2026-12-01 |
| `position="right-top"` | `position="right-start"` | работает и предупреждает | 2026-12-01 |
| `position="right-bottom"` | `position="right-end"` | работает и предупреждает | 2026-12-01 |
| `position="inline-start-top"` | `position="inline-start-start"` | работает и предупреждает | 2026-12-01 |
| `position="inline-start-bottom"` | `position="inline-start-end"` | работает и предупреждает | 2026-12-01 |
| `position="inline-end-top"` | `position="inline-end-start"` | работает и предупреждает | 2026-12-01 |
| `position="inline-end-bottom"` | `position="inline-end-end"` | работает и предупреждает | 2026-12-01 |

### Методы

- `focus(options?: object)` — возвращает `null`. Переносит фокус на текущий доступный нативный пункт в отрисованном меню по умолчанию. Вызывающий код должен дождаться отрисовки и сам управляет открытием и закрытием.

### События

Своих событий нет; общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

### Доступность

- Роль: меню (`menu`).
- Доступное имя: обязательно.
- Клавиши: `ArrowDown`, `ArrowUp`, `Home`, `End`, `Enter`, `Space`, `Tab`.
- Фокус: Меню по умолчанию: прямые нативные кнопки и ссылки, а также нативные элементы управления прямых дочерних `sf-button` получают роль `menuitem` и одну перемещаемую точку табуляции. Нативно отключённые и скрытые/инертные пункты пропускаются. Фокусом при открытии, закрытием по Escape/Tab и возвратом фокуса управляет хост. Произвольные виджеты и шаблоны, не являющиеся меню или пользовательские, не обрабатываются.

### Минимальная разметка

```html
<sf-context-menu aria-label="Действия с документом"><sf-button slot="content" type="link" scheme="on-surface" text="Переименовать"></sf-button><sf-button slot="content" type="link" scheme="on-surface" text="Создать копию"></sf-button></sf-context-menu>
```

### Источник

- `simai/ui@6d2bf151e3c8ba14d210e97227a8d0dd1b493170:distr/smart/context-menu`
- `simai/ui@6d2bf151e3c8ba14d210e97227a8d0dd1b493170:distr/rule/rule.json#name=cl-context-menu`

## См. также

- [Popover](/ru/smart-components/overlays/popover/) — поверхность у кнопки с открытием, закрытием и возвратом фокуса.
- [Dropdown](/ru/smart-components/navigation/dropdown/) — выбор значения из списка.
