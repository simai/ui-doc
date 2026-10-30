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
`content` и `footer`; заголовок по умолчанию задаёт `title`. Действия в
подвале стоят в конце строки, на одной средней линии; расстояние между ними
задаёт `--sf-modal-footer-gap` (по умолчанию `--sf-space-1/2`). Утилита в
`footer-class`, например `content-main-between`, сильнее этого порядка.

По умолчанию окно закрывается по `Escape`, нажатию на затемнение и кнопке
закрытия. `unclose` отключает эти пути для обязательного решения; в таком
окне всегда оставляйте понятные действия. При нескольких открытых окнах
`Escape`, `Tab` и блокировкой страницы владеет только верхнее.

### Положение

`center`, `inline-start`, `inline-end`, `top` и `bottom` меняют положение, но
не поведение окна. Положения `inline-start` и `inline-end` — модальная
боковая панель; панели, рядом с которыми страница остаётся доступной, делает
[Боковая панель](/ru/smart-components/overlays/drawer/). Логические направления
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

Окно в потоке показывается сразу, атрибут `open` для этого не нужен.
`close()` убирает его со страницы, а `open()` возвращает на место; `toggle()`
переключает эти два состояния. Так же окно закрывает и его собственная кнопка
закрытия, если она показана. Пример ниже написан без `open`.

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
отдельный документ. Для селектора сетевой запрос не нужен. Пока содержимое
загружается, окно показывает спиннер ступени 3 в
[виде страницы](/ru/smart-components/feedback/spinner/#вид-страницы), заданном
`data-sf-spinner`, и под ним подпись на языке страницы: «Загрузка…» на
русской, «Loading…» на английской. Блок загрузки — область `role="status"`
с этой подписью в `aria-label`, поэтому экранный диктор объявляет ожидание.
Окно, открытое, пока содержимое ещё загружается заранее (`preload`), тоже
показывает это состояние.

Если запрос не удался, окно показывает текст ошибки запроса, а без него —
«Не удалось загрузить содержимое»; для встроенного документа —
«Не удалось загрузить встроенную страницу». Эти слова, как и остальные слова
окна, следуют [языку страницы](/ru/guide/size-and-type/language/), и продукт
добавляет свой язык через `SF.language.register('sf-modal', …)`.

:::example {id="components/modal/smart-local-content" label="Результат"}
:::

Разметка внутри `<sf-modal>` без атрибута `slot` тоже становится содержимым
окна: она идёт после того, что передано в слот `content`, — так же, как у
`sf-drawer`: `<sf-modal modal-id="about" title="О проекте"><p>…</p></sf-modal>`
показывает абзац в окне.

Для удалённых источников приложение определяет разрешения, CSP, обработку
ошибки и доверие к содержимому. Встроенный документ — одна остановка `Tab`;
окно не читает чужой документ и сохраняет свою кнопку закрытия.

### Слоты показываются копиями

При подключении `<sf-modal>` забирает элементы со `slot` и содержимое без
слота из своей разметки и показывает их копии. Обычное окно рисует копии в отдельном контейнере
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

### Окно внутри блока

Обычно окно выводится в конце `body` и закрывает всё окно браузера. Если
`<sf-modal>` находится внутри элемента с атрибутом `data-sf-overlay-container`,
затемнение и поверхность окна выводятся внутри этого элемента и закрывают
только его: элемент получает `contain: layout`, а прокрутка страницы не
блокируется. Так область редактора или пример документации держат своё окно;
примеры с формой, источником содержимого и проверкой формы на этой странице
устроены так. Тот же атрибут держит внутри блока и
[Боковая панель](/ru/smart-components/overlays/drawer/#панель-внутри-блока).

```html
<div data-sf-overlay-container class="h-e6">
  <sf-modal modal-id="preview" title="Пример">…</sf-modal>
</div>
```

Высоту блока задаёт страница: окно стоит по его границам.

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
поэтому проверяйте `event.detail.modal`. Второй аргумент помощника —
параметры `addEventListener`: `modal.onAfterClose(handler, {once: true})`
сработает на ближайшее закрытие этого окна и снимется.

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
  фокус возвращается на элемент, который открыл окно. Первое поле формы в
  окне человек получает первым нажатием `Tab`.
- `Escape` закрывает верхнее окно, если не задан `unclose` или
  `close-on-esc="false"`. Пока внутри открыта всплывающая панель
  (`sf-popover`), `Escape` закрывает сначала её. Одно нажатие `Escape`
  закрывает только самый внутренний открытый слой: календарь, список или
  подсказку в окне — без окна. В окне с `unclose` оставьте видимые действия,
  которыми задачу можно завершить.
- Кнопки закрытия и сворачивания на русской странице называются «Закрыть» и
  «Свернуть».
- Окно в потоке (`display="inline"`) — область `region` без удержания
  фокуса.
- Кнопке, которая открывает окно через `data-sf-modal-open`, Framework ARIA не
  ставит: ни `aria-haspopup`, ни `aria-expanded`, ни `aria-controls`. Нужное
  пишите на кнопке сами, например `aria-haspopup="dialog"`.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-68cbd8d1b560` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-modal>` |
| Назначение | Диалоговое окно поверх страницы в общем стеке модальных окон: по центру или у боковой, верхней или нижней границы, со слотами заголовка, содержимого и подвала, ловушкой фокуса, блокировкой прокрутки и возвратом фокуса. Окно также можно свернуть, загрузить его содержимое через Ajax или в iframe либо отрисовать встроенным в поток страницы. |
| Контракт | `smart.modal`, версия `1.4.3` |
| Поставка | выпуск Framework `ui-68cbd8d1b560` |
| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | экспериментальный: API может меняться между выпусками |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | описан: манифест и сценарий есть, продуктовой приёмки нет |
| Заготовка до прихода кода | нет: атрибут `data-sf-skeleton` не пишется; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `root-class` — `string`, по умолчанию пусто.
- `root-style` — `string`, по умолчанию пусто.
- `modal-id` — `string`, по умолчанию пусто.
- `heading` — `string`.
- `text` — `string`, по умолчанию пусто.
- `autoload` — `boolean`, по умолчанию `false`.
- `minimizable` — `boolean`, по умолчанию `false`.
- `hide-modifier` — `string`, по умолчанию пусто.
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
- `preload` — `boolean`, по умолчанию `true`.
- `fullscreen` — `boolean`, по умолчанию `false`.
- `width` — `string`, по умолчанию пусто.
- `height` — `string`, по умолчанию пусто.
- `backdrop-blur` — `string`, по умолчанию пусто.
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
- `footer-class` — `string`, по умолчанию пусто. Классы подвала. Его действия стоят в конце, между ними --sf-modal-footer-gap (space-1/2); эти значения лежат под утилитами, поэтому утилита здесь всё равно побеждает.
- `unsaved` — `boolean`, по умолчанию `false`.
- `dismissible` — `boolean`, по умолчанию `true`.
- `open` — `boolean`, по умолчанию `false`.
- `minimized` — `boolean`, по умолчанию `false`.
- `aria-label` — `string`, по умолчанию пусто.
- `title` — `string`. Пусто — текст на языке страницы (по-английски «Dialog»).
- `blur` — `string`, по умолчанию пусто. Псевдоним с датой для `backdrop-blur` до 2026-12-01.
- `hide` — `boolean`, по умолчанию `false`. Псевдоним с датой для `minimizable` до 2026-12-01.
- `unclose` — `boolean`, по умолчанию `false`. Псевдоним с датой для `dismissible` до 2026-12-01, с обратным значением.

### Методы

- `open(animate: boolean)` — возвращает `object`. Открывает окно или выводит его на передний план, если оно уже открыто. Отправляет sf-modal-open (отменяемое), затем sf-modal-opened после проецирования; загружает удалённое содержимое, если задан src. options.animate (или логическое значение) управляет анимацией открытия. Возвращает элемент.
- `close(reason: any)` — возвращает `object`. Закрывает окно после sf-modal-close (отменяемое), проигрывает переход закрытия, возвращает фокус и отправляет sf-modal-closed. options.reason говорит почему (close, escape, outside, cancelled, api; по умолчанию api), его несут оба события. Возвращает элемент.
- `minimize()` — возвращает `object`. Действие minimize.
- `expand()` — возвращает `object`. Действие expand.
- `toggle()` — возвращает `object`. Вызывает close(), если открыто, иначе open(). Возвращает элемент.
- `reloadContent()` — возвращает `object`. Сбрасывает удалённое содержимое и снова загружает src, даже если окно закрыто и preload выключен. Возвращает элемент.
- `confirm(value: object)` — возвращает `object`. Действие confirm.
- `getSlotHtml(name: string)` — возвращает `string`. Возвращает HTML захваченного содержимого именованного слота — для чтения. Окно не рисует по нему: оно ставит на место собственные узлы страницы (стандарт 1.3.8 §4.5).
- `hide()` — возвращает `object`. Сворачивает открытое накладываемое окно после sf-modal-minimize (отменяемое) и отправляет sf-modal-minimized. Во встроенном режиме ничего не делает. Возвращает элемент.
- `show()` — возвращает `object`. Восстанавливает свёрнутое окно после sf-modal-expand (отменяемое) и отправляет sf-modal-expanded. Возвращает элемент.
- `setSrc(src: string)` — возвращает `object`. Устанавливает атрибут src, прерывает и сбрасывает текущее удалённое содержимое и загружает новый источник, если загрузка сейчас разрешена. Возвращает элемент.
- `getModalRoot()` — возвращает `object` | `null`. Возвращает отрисованный элемент .sf-modal или null до отрисовки.
- `onKeyDown(event: KeyboardEvent)` — возвращает `null`. Обработчик keydown документа, который модальное окно привязывает само: Escape закрывает верхнее открытое окно, если это разрешает close-on-esc, Tab удерживается внутри него. Не предназначен для вызова хостом.
- `resetRemoteContent()` — возвращает `null`. Очищает загруженный удалённый HTML, ошибку и состояние загрузки и прерывает выполняющийся запрос.
- `clearPortal()` — возвращает `null`. Снимает отрисовку и удаляет корень портала, в который проецировалось окно, если он есть.
- `onBeforeOpen(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост обработчик sf-modal-open, который срабатывает только на события этого модального окна. Возвращает элемент.
- `onAfterOpen(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост обработчик sf-modal-opened, который срабатывает только на события этого модального окна. Возвращает элемент.
- `onBeforeClose(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост обработчик sf-modal-close, который срабатывает только на события этого модального окна. Возвращает элемент.
- `onAfterClose(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост обработчик sf-modal-closed, который срабатывает только на события этого модального окна. Возвращает элемент.
- `onBeforeHide(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост обработчик sf-modal-minimize, который срабатывает только на события этого модального окна. Возвращает элемент.
- `onAfterHide(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост обработчик sf-modal-minimized, который срабатывает только на события этого модального окна. Возвращает элемент.
- `onBeforeShow(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост обработчик sf-modal-expand, который срабатывает только на события этого модального окна. Возвращает элемент.
- `onAfterShow(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост обработчик sf-modal-expanded, который срабатывает только на события этого модального окна. Возвращает элемент.
- `onModalReady(handler: function, options?: object|boolean)` — возвращает `object`. Сразу вызывает обработчик с событием modal:ready, если модальное окно уже отрисовано, иначе добавляет обработчик его собственного modal:ready. Возвращает элемент.
- `onModalUpdate(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет на хост-элементе обработчик modal:update, который срабатывает только на собственные события этого модального окна. Возвращает элемент.

### События

Все события приходят на сам элемент и всплывают. Что означает глагол в имени события, говорит общий словарь: [Имена и общие слова](/ru/guide/smart-components/names/). Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).

- `sf-modal-open` — `detail`: `{ modalId: string, phase: string }`.
- `sf-modal-opened` — `detail`: `{ modalId: string, phase: string }`.
- `sf-modal-close` — `detail`: `{ modalId: string, phase: string, reason: any, unsaved: boolean }`.
- `sf-modal-closed` — `detail`: `{ modalId: string, phase: string, reason: any, accepted: boolean }`.
- `sf-modal-minimize` — `detail`: `{ modalId: string, phase: string }`.
- `sf-modal-minimized` — `detail`: `{ modalId: string, phase: string }`.
- `sf-modal-expand` — `detail`: `{ modalId: string, phase: string }`.
- `sf-modal-expanded` — `detail`: `{ modalId: string, phase: string }`.
- `sf-modal-content-upload` — `detail`: `{ modalId: string, src: string, remote: object }`.
- `sf-modal-content-uploaded` — `detail`: `{ modalId: string, src: string, remote: object }`.
- `modal:after-close` — устаревший псевдоним события `sf-modal-closed`: приходит с тем же `detail`, подписывайтесь на `sf-modal-closed`.
- `modal:after-hide` — устаревший псевдоним события `sf-modal-minimized`: приходит с тем же `detail`, подписывайтесь на `sf-modal-minimized`.
- `modal:after-open` — устаревший псевдоним события `sf-modal-opened`: приходит с тем же `detail`, подписывайтесь на `sf-modal-opened`.
- `modal:after-show` — устаревший псевдоним события `sf-modal-expanded`: приходит с тем же `detail`, подписывайтесь на `sf-modal-expanded`.
- `modal:before-close` — устаревший псевдоним события `sf-modal-close`: приходит с тем же `detail`, подписывайтесь на `sf-modal-close`.
- `modal:before-hide` — устаревший псевдоним события `sf-modal-minimize`: приходит с тем же `detail`, подписывайтесь на `sf-modal-minimize`.
- `modal:before-open` — устаревший псевдоним события `sf-modal-open`: приходит с тем же `detail`, подписывайтесь на `sf-modal-open`.
- `modal:before-show` — устаревший псевдоним события `sf-modal-expand`: приходит с тем же `detail`, подписывайтесь на `sf-modal-expand`.
- `modal:ready` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any }`. Окно отрисовано впервые. Всплывает и с composed: true; detail.modal — sf-modal, отправивший событие.
- `modal:update` — `detail`: `{ component?: any, modal?: any, modalId?: string, root?: any }`. Окно отрисовано повторно после первой отрисовки. Всплывает и с composed: true; detail.modal — sf-modal, отправивший событие.
- `modal:before-content-upload` — устаревший псевдоним события `sf-modal-content-upload`: приходит с тем же `detail`, подписывайтесь на `sf-modal-content-upload`.
- `modal:after-content-upload` — устаревший псевдоним события `sf-modal-content-uploaded`: приходит с тем же `detail`, подписывайтесь на `sf-modal-content-uploaded`.

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

- `simai/ui@68cbd8d1b560baf853aa1263b6f3515d2c76ca04:distr/smart/modal`
- `simai/ui@68cbd8d1b560baf853aa1263b6f3515d2c76ca04:distr/rule/rule.json#name=cl-modal`

## См. также

- [Боковая панель](/ru/smart-components/overlays/drawer/) — немодальная и закреплённая боковые панели.
- [Всплывающая панель](/ru/smart-components/overlays/popover/) — небольшая панель у кнопки.
