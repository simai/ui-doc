---
title: "Модальное окно"
description: "Показывает одну задачу поверх страницы и возвращает пользователя к ней после закрытия."
profile: reference
---

# Модальное окно

`<sf-modal>` показывает одну ограниченную задачу поверх страницы:
подтверждение, короткую форму, подробности. Компонент управляет верхним
слоем, клавиатурной границей, блокировкой страницы и возвратом фокуса;
приложение отвечает за смысл действий и данные внутри. Самостоятельный
долгий процесс лучше открыть отдельной страницей.

## Пример

:::example {id="components/modal/smart-overview" label="Результат"}
:::

## Применение

### Открытие и закрытие

Открывающее действие связывается с окном атрибутом `data-sf-modal-open` со
значением `modal-id` окна. Кнопки внутри закрывают конкретный экземпляр
через `data-sf-modal-close`. Содержимое окна передают слоты `header`,
`content` и `footer`; заголовок по умолчанию задаёт `title`.

По умолчанию окно закрывается по `Escape`, нажатию на затемнение и кнопке
закрытия. `unclose` отключает эти пути для обязательного решения; в таком
окне всегда оставляйте понятные действия. При нескольких открытых окнах
`Escape`, `Tab` и блокировкой страницы владеет только верхнее.

### Положение

`center`, `inline-start`, `inline-end`, `top` и `bottom` меняют положение, но
не поведение окна. Положения `inline-start` и `inline-end` — модальная
боковая панель; панели, рядом с которыми страница остаётся доступной, делает
[Drawer](/ru/smart-components/overlays/drawer/). Логические направления
учитывают письмо справа налево; физические `left` и `right` — их синонимы
для совместимости.

:::example {id="components/modal/smart-positions" label="Результат"}
:::

### Затемнение и полноэкранный режим

`overlay-preset="default"` даёт стабильное затемнение. Вариант `focus`
добавляет размытие фона, не заменяя затемнение. `fullscreen` берите только
для ограниченной задачи, которой действительно нужна вся область просмотра.

:::example {id="components/modal/smart-overlay" label="Результат"}
:::

### Окно в потоке страницы

`display="inline"` оставляет поверхность в обычном потоке. Она не выносится
в отдельный слой, не блокирует страницу, не захватывает и не возвращает
фокус.

:::example {id="components/modal/smart-inline" label="Результат"}
:::

### Сворачивание и восстановление

`hide="true"` добавляет действие сворачивания. Свёрнутое окно остаётся
открытым экземпляром, но перестаёт быть видимым интерактивным слоем. Для
восстановления нужна внешняя кнопка с `data-sf-modal-show`, потому что
содержимое свёрнутого окна недоступно.

:::example {id="components/modal/smart-minimized" label="Результат"}
:::

### Источник содержимого

Обычный `mode="inline"` берёт содержимое из слотов. `mode="ajax"` принимает
в `src` адрес или селектор узла на странице; `mode="iframe"` создаёт
отдельный документ. Для селектора сетевой запрос не нужен.

:::example {id="components/modal/smart-local-content" label="Результат"}
:::

Для удалённых источников приложение определяет разрешения, CSP, обработку
ошибки и доверие к содержимому. Встроенный документ — одна остановка `Tab`;
окно не читает чужой документ и сохраняет свою кнопку закрытия.

### Слоты показываются копиями

При подключении `<sf-modal>` забирает элементы со `slot` из своей разметки и
показывает их копии. Обычное окно рисует копии в отдельном контейнере
`[data-sf-modal-portal]` в конце `body`, окно в потоке — внутри самого
элемента. Повторная отрисовка может заменить копии новыми. Поэтому ссылка на
элемент слота, полученная до отрисовки, указывает на узел вне документа, а
обработчик `addEventListener` на нём не сработает.

Обрабатывайте события внутри окна делегированием: слушайте `submit` или
`click` на `document` и проверяйте `event.target`. Если нужен сам элемент,
найдите его после `await modal.whenRendered()`.

:::example {id="components/modal/smart-form" label="Результат"}
:::

### Настройка поверхности

`show-header`, `show-close`, `show-footer`, `close-on-esc`,
`close-on-overlay`, `overlay`, `position`, `fullscreen`, `width` и `height`
меняют независимые части окна. Для внешнего оформления используйте
`root-class`, `overlay-class`, `surface-class`, `panel-class`, `header-class`,
`body-class`, `content-class` и `footer-class`. Значения геометрии задавайте
токенами Framework, а не абсолютными размерами. Поверхность берёт радиус
крупных блоков `--sf-radius-default`; кнопки закрытия и сворачивания —
компактные кнопки-иконки со своим радиусом.

### Методы и события

`open()`, `close()`, `toggle()`, `hide()`, `show()`, `setSrc()` и
`reloadContent()` управляют тем же экземпляром. События `modal:before-open`,
`modal:before-close`, `modal:before-hide` и `modal:before-show` можно
отменить; соответствующее `modal:after-*` приходит только после принятого и
завершённого перехода.

События `modal:*` всплывают до `document`, как у `sf-drawer`; окно-источник
указано в `event.detail.modal`. Помощники `onBeforeOpen()`, `onAfterOpen()`
и остальные, а также обработчики, переданные в `SF.create`, получают только
события своего окна. Обычный слушатель на внешнем окне услышит и вложенное,
поэтому проверяйте `event.detail.modal`.

```js
const modal = await SF.createAsync('modal', {
  modalId: 'confirm-delete',
  title: 'Удалить проект?',
  html: '<p slot="content">Проект и его файлы удаляются без возможности восстановления.</p>',
  onAfterClose: () => refreshList(),
});
document.body.append(modal);
await modal.whenRendered();
modal.open();
```

## Доступность

- Окну нужно доступное имя: видимый `title` или `aria-label`. Без них окно
  называется английским словом «Modal».
- Открытое окно — `dialog` с `aria-modal="true"`. Фокус переходит на саму
  панель окна, а не на первое поле; `Tab` и `Shift+Tab` не выходят за его границы, остальная страница
  недоступна. После закрытия фокус возвращается на элемент, который открыл
  окно.
- `Escape` закрывает верхнее окно, если не задан `unclose` или
  `close-on-esc="false"`. В окне с `unclose` оставьте видимые действия,
  которыми задачу можно завершить.
- Кнопки закрытия и сворачивания на русской странице называются «Закрыть» и
  «Свернуть».
- Окно в потоке (`display="inline"`) — область `region` без удержания
  фокуса.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-e26fc47c16d6` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-modal>` |
| Назначение | Smart-компонент Modal из SIMAI Framework. |
| Контракт | `smart.modal`, версия `1.1.0` |
| Поставка | выпуск Framework `ui-e26fc47c16d6` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `modal-id` — `string`, по умолчанию пусто.
- `title` — `string`, по умолчанию `Modal`.
- `aria-label` — `string`, по умолчанию пусто.
- `text` — `string`, по умолчанию пусто.
- `open` — `boolean`, по умолчанию `false`.
- `autoload` — `boolean`, по умолчанию `false`.
- `unclose` — `boolean`, по умолчанию `false`.
- `hide` — `boolean`, по умолчанию `false`.
- `hide-modifier` — `string`, по умолчанию пусто.
- `minimized` — `boolean`, по умолчанию `false`.
- `overlay` — `boolean`, по умолчанию `true`.
- `show-header` — `boolean`, по умолчанию `true`.
- `show-close` — `boolean`, по умолчанию `true`.
- `show-footer` — `boolean`, по умолчанию `true`.
- `close-on-esc` — `boolean`, по умолчанию `true`.
- `close-on-overlay` — `boolean`, по умолчанию `true`.
- `preserve-scroll-gap` — `boolean`, по умолчанию `true`.
- `position` — `string`, по умолчанию `center`, значения: `center`, `left`, `right`, `inline-start`, `inline-end`, `top`, `bottom`.
- `mode` — `string`, по умолчанию `inline`, значения: `inline`, `ajax`, `iframe`.
- `display` — `string`, по умолчанию `modal`, значения: `modal`, `inline`.
- `src` — `string`, по умолчанию пусто.
- `root-class` — `string`, по умолчанию пусто.
- `preload` — `boolean`, по умолчанию `true`.
- `fullscreen` — `boolean`, по умолчанию `false`.
- `width` — `string`, по умолчанию пусто.
- `height` — `string`, по умолчанию пусто.
- `blur` — `string`, по умолчанию пусто.
- `blur-type` — `string`, по умолчанию `medium`, значения: `none`, `small`, `medium`, `large`.
- `overlay-preset` — `string`, по умолчанию `default`, значения: `default`, `focus`.
- `overlay-class` — `string`, по умолчанию пусто.
- `close-class` — `string`, по умолчанию пусто.
- `surface-class` — `string`, по умолчанию пусто.
- `surface-padding` — `string`, по умолчанию пусто.
- `panel-class` — `string`, по умолчанию пусто.
- `header-class` — `string`, по умолчанию пусто.
- `body-class` — `string`, по умолчанию пусто.
- `content-class` — `string`, по умолчанию пусто.
- `footer-class` — `string`, по умолчанию пусто.

### Методы

- `getSlotHtml()`
- `open()`
- `close()`
- `hide()`
- `show()`
- `toggle()`
- `setSrc()`
- `getModalRoot()`
- `onKeyDown()`
- `resetRemoteContent()`
- `clearPortal()`
- `onBeforeOpen()`
- `onAfterOpen()`
- `onBeforeClose()`
- `onAfterClose()`
- `onBeforeHide()`
- `onAfterHide()`
- `onBeforeShow()`
- `onAfterShow()`
- `onModalReady()`
- `onModalUpdate()`

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `modal:ready` — `detail` не описан. Событие среды выполнения modal:ready. Всплывает и является composed; detail.modal — модальное окно, отправившее событие.
- `modal:update` — `detail` не описан. Событие среды выполнения modal:update. Всплывает и является composed; detail.modal — модальное окно, отправившее событие.
- `sf-after-render` — `detail` не описан.
- `sf-before-render` — `detail` не описан.

### Доступность

- Доступное имя: рекомендуется.
- Клавиши: `Tab`.
- Фокус: Сохраняет видимый фокус на активном элементе управления.

### Минимальная разметка

```html
<sf-modal></sf-modal>
```

### Источник

- `simai/ui@e26fc47c16d6d3e20746b3d519d08ec84d5b5168:distr/smart/modal`
- `simai/ui@e26fc47c16d6d3e20746b3d519d08ec84d5b5168:distr/rule/rule.json#name=cl-modal`

## См. также

- [Drawer](/ru/smart-components/overlays/drawer/) — немодальная и закреплённая боковые панели.
- [Popover](/ru/smart-components/overlays/popover/) — небольшая панель у кнопки.
