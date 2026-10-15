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

Проверка полей в окне строится так же: `focusout` и `submit` слушают на
`document`, а поле берут из события. `SF.Input.setState` меняет состояние
той копии поля, которую показывает окно. После `close()` из обработчика
фокус возвращается на элемент, который открыл окно.

### Пример: проверка формы в окне

:::example {id="smart-components/modal/validation" label="Результат"}
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
  называется общим словом на языке страницы — «Окно», по-английски «Dialog».
- Открытое окно — `dialog` с `aria-modal="true"`. Фокус переходит на саму
  панель окна, а не на первое поле; `Tab` и `Shift+Tab` не выходят за его границы, остальная страница
  недоступна. После закрытия — кнопкой, `Escape` или методом `close()` —
  фокус возвращается на элемент, который открыл окно.
- `Escape` закрывает верхнее окно, если не задан `unclose` или
  `close-on-esc="false"`. Пока внутри открыта всплывающая панель
  (`sf-popover`), `Escape` закрывает сначала её. В окне с `unclose` оставьте видимые действия,
  которыми задачу можно завершить.
- Кнопки закрытия и сворачивания на русской странице называются «Закрыть» и
  «Свернуть».
- Окно в потоке (`display="inline"`) — область `region` без удержания
  фокуса.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-c95d35179e84` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-modal>` |
| Назначение | Диалоговое окно поверх страницы в общем стеке модальных окон: по центру или у боковой, верхней или нижней границы, со слотами заголовка, содержимого и подвала, ловушкой фокуса, блокировкой прокрутки и возвратом фокуса. Окно также можно свернуть, загрузить его содержимое через Ajax или в iframe либо отрисовать встроенным в поток страницы. |
| Контракт | `smart.modal`, версия `1.1.0` |
| Поставка | выпуск Framework `ui-c95d35179e84` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`.
- `modal-id` — `string`, по умолчанию пусто.
- `title` — `string`, по умолчанию пусто. Пусто — текст на языке страницы (по-английски «Dialog»).
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

- `getSlotHtml(name: string)` — возвращает `string`. Возвращает HTML захваченного содержимого для именованного слота с перенесёнными данными времени выполнения и идентификаторами событий.
- `open(options?: object|boolean)` — возвращает `object`. Открывает окно или выводит его на передний план, если оно уже открыто. Отправляет modal:before-open (отменяемое), затем modal:after-open после проецирования; загружает удалённое содержимое, если задан src. options.animate (или логическое значение) управляет анимацией открытия. Возвращает элемент.
- `close()` — возвращает `object`. Закрывает окно после modal:before-close (отменяемое), выполняет анимацию закрытия, возвращает фокус и отправляет modal:after-close. Возвращает элемент.
- `hide()` — возвращает `object`. Сворачивает открытое накладываемое окно после modal:before-hide (отменяемое) и отправляет modal:after-hide. Во встроенном режиме ничего не делает. Возвращает элемент.
- `show()` — возвращает `object`. Восстанавливает свёрнутое окно после modal:before-show (отменяемое) и отправляет modal:after-show. Возвращает элемент.
- `toggle()` — возвращает `object`. Вызывает close(), если открыто, иначе open(). Возвращает элемент.
- `setSrc(src: string)` — возвращает `object`. Устанавливает атрибут src, прерывает и сбрасывает текущее удалённое содержимое и загружает новый источник, если загрузка сейчас разрешена. Возвращает элемент.
- `getModalRoot()` — возвращает `object` | `null`. Возвращает отрисованный элемент .sf-modal или null до отрисовки.
- `onKeyDown(event: KeyboardEvent)` — возвращает `null`. Обработчик keydown документа, который модальное окно привязывает само: Escape закрывает верхнее открытое окно, если это разрешает close-on-esc, Tab удерживается внутри него. Не предназначен для вызова хостом.
- `resetRemoteContent()` — возвращает `null`. Очищает загруженный удалённый HTML, ошибку и состояние загрузки и прерывает выполняющийся запрос.
- `clearPortal()` — возвращает `null`. Снимает отрисовку и удаляет корень портала, в который проецировалось окно, если он есть.
- `onBeforeOpen(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:before-open, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `onAfterOpen(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:after-open, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `onBeforeClose(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:before-close, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `onAfterClose(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:after-close, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `onBeforeHide(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:before-hide, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `onAfterHide(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:after-hide, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `onBeforeShow(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:before-show, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `onAfterShow(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:after-show, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `onModalReady(handler: function, options?: object|boolean)` — возвращает `object`. Сразу вызывает обработчик с событием modal:ready, если модальное окно уже отрисовано, иначе добавляет обработчик его собственного modal:ready. Возвращает элемент.
- `onModalUpdate(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:update, который срабатывает только на собственные события этого модального окна. Возвращает элемент.
- `reloadContent()` — возвращает `object`. Сбрасывает удалённое содержимое и снова загружает src, даже если окно закрыто и preload выключен. Возвращает элемент.

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `modal:after-close` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any, phase?: string }`. После закрытия окна. Всплывает.
- `modal:after-hide` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any, phase?: string }`. После сворачивания окна. Всплывает.
- `modal:after-open` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any, phase?: string }`. После открытия окна. Всплывает.
- `modal:after-show` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any, phase?: string }`. После того как свёрнутое окно снова показано. Всплывает.
- `modal:before-close` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any, phase?: string }`. Перед закрытием окна; отменяемое — preventDefault() оставляет окно как есть. Всплывает.
- `modal:before-hide` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any, phase?: string }`. Перед сворачиванием окна; отменяемое — preventDefault() оставляет окно как есть. Всплывает.
- `modal:before-open` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any, phase?: string }`. Перед открытием окна; отменяемое — preventDefault() оставляет окно как есть. Всплывает.
- `modal:before-show` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any, phase?: string }`. Перед тем как свёрнутое окно снова показано; отменяемое — preventDefault() оставляет окно как есть. Всплывает.
- `modal:ready` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any }`. Окно отрисовано впервые. Всплывает и с composed: true; detail.modal — sf-modal, отправивший событие.
- `modal:update` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any }`. Окно отрисовано повторно после первой отрисовки. Всплывает и с composed: true; detail.modal — sf-modal, отправивший событие.
- `sf-after-render` — `detail`: `{ component?: any, tagName?: string, template?: string, changedAttributes?: array }`. Базовое событие жизненного цикла после каждой отрисовки. Всплывает и с composed: true.
- `sf-before-render` — `detail`: `{ component?: any, tagName?: string, template?: string, changedAttributes?: array }`. Базовое событие жизненного цикла перед каждой отрисовкой. Всплывает и с composed: true.
- `modal:before-content-upload` — `detail`: `{ component?: any, modal?: any, modalId?: string, src?: string, remote?: object }`. Начинается Ajax-запрос содержимого (mode=ajax). Всплывает и с composed: true.
- `modal:after-content-upload` — `detail`: `{ component?: any, modal?: any, modalId?: string, src?: string, remote?: object }`. Удалённое содержимое загружено, с success или error в detail.remote; прерванный запрос его не отправляет. Также отправляется при загрузке iframe. Всплывает и с composed: true.

### Доступность

- Роль: диалог (`dialog`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Shift+Tab`, `Escape`.
- Фокус: При открытии фокус переходит на панель верхнего окна; Tab и Shift+Tab удерживаются внутри неё, а Escape закрывает её, если это разрешает close-on-esc. При закрытии фокус возвращается элементу, который открыл окно. Заголовок по умолчанию задаёт доступное имя диалога через aria-labelledby; для пользовательского заголовка или окна без заголовка укажите aria-label. display=inline сохраняет обычную навигацию по документу. С display=inline окно является областью (region) на странице, а не диалогом.

### Минимальная разметка

```html
<sf-modal></sf-modal>
```

### Источник

- `simai/ui@c95d35179e847b720f59de0b40c2830bb3682a9b:distr/smart/modal`
- `simai/ui@c95d35179e847b720f59de0b40c2830bb3682a9b:distr/rule/rule.json#name=cl-modal`

## См. также

- [Drawer](/ru/smart-components/overlays/drawer/) — немодальная и закреплённая боковые панели.
- [Popover](/ru/smart-components/overlays/popover/) — небольшая панель у кнопки.
