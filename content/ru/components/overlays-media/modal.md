---
title: "Модальное окно"
description: "Переводит пользователя к одной задаче поверх страницы и возвращает обратно после её завершения."
profile: reference
---

# Модальное окно

Модальное окно переводит пользователя к одной важной задаче поверх страницы:
подтвердить действие, заполнить короткую форму. Страница за окном недоступна,
пока оно открыто. Для длинного самостоятельного процесса берите отдельную
страницу, для сообщения без выбора —
[всплывающее сообщение](/ru/components/feedback/toast/).

## Пример

:::example {id="components/modal/overview" label="Окно подтверждения"}
:::

## Разметка

Окно собирает скрипт компонента из параметров — в разметке страницы остаётся
только кнопка, которая его открывает. Код примера — во вкладке JavaScript.

- Кнопка с атрибутом `data-sf-modal-open="<id>"` открывает окно с этим `id`,
  кнопка с `data-sf-modal-close="<id>"` внутри окна закрывает его.
- Окно состоит из блока `sf-modal` с ролью `dialog`, затемнения фона, панели
  и поверхности; в поверхности — шапка `sf-modal-header` с заголовком
  `sf-modal-header-content` и кнопкой закрытия `sf-modal-close-button`, затем
  тело `sf-modal-body` с прокручиваемой областью.
- Содержимое передают параметром `html` или `text`, узлами `contentNodes`,
  а кнопки внизу — узлами `footerNodes`.

## Варианты

### Положение

Параметр `position` задаёт, где стоит окно: `center` (по умолчанию), `top`,
`bottom`, `left`, `right`, `inline-start` и `inline-end`. Боковое окно у края
подходит для настроек и подробностей объекта. `inline-start` и `inline-end`
следуют направлению письма и зеркалятся при письме справа налево; `left` и
`right` — физические стороны, берите их, только когда сторона экрана не
зависит от языка.

:::example {id="components/modal/positions" label="Положения окна"}
:::

### Фон

По умолчанию фон за окном затемнён. `blur: true` заменяет затемнение
полупрозрачной поверхностью, `blur: 'small'`, `'medium'` или `'large'`
размывает страницу за окном с выбранной силой. `overlay: false` убирает фон:
страница видна как есть, но по-прежнему недоступна.

:::example {id="components/modal/backdrop" label="Фон за окном"}
:::

### Размер

Без параметров окно занимает ширину своего содержимого в пределах экрана.
`width` и `height` задают размеры панели любой длиной CSS, `fullscreen: true`
раскрывает окно на весь экран.

:::example {id="components/modal/size" label="Ширина и полноэкранный режим"}
:::

## Доступность

- Окно получает `role="dialog"` и `aria-modal="true"`, а имя — из заголовка
  `title` через `aria-labelledby`. Заголовок называет задачу.
- При открытии фокус переходит в окно, Tab и Shift+Tab не выходят за его
  пределы, а `aria-modal="true"` сообщает экранному диктору, что страница за
  окном недоступна. После закрытия фокус возвращается на элемент, который
  открыл окно.
- Окно закрывается по Escape, щелчку по фону и кнопке закрытия. Escape
  закрывает только верхнее окно, если открыто несколько.
- Кнопка закрытия получает английское имя «Close modal». Переименуйте её после
  создания: `modal.template.querySelector('.sf-modal-close-button').setAttribute('aria-label', 'Закрыть окно')`.
- `unclose: true` отключает все три способа закрытия — только для
  обязательного решения, и тогда внутри окна нужны кнопки, которые завершают
  сценарий.
- Пока окно открыто, страница не прокручивается; место полосы прокрутки
  сохраняется, и содержимое не сдвигается.

## JavaScript

Компонент регистрирует класс `Modal`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('Modal', callback)` передаёт
класс, когда он зарегистрирован. Конструктор сразу добавляет окно в конец
`body` и регистрирует его по `id`, после чего работают триггеры
`data-sf-modal-open`.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Modal', (Modal) => {
  const modal = new Modal({
    id: 'delete-project',
    param: {title: 'Удалить проект?', text: 'Действие нельзя отменить.', position: 'center'},
  });
  document.querySelector('#delete').addEventListener('click', () => modal.open());
}));
```

Параметры (`param`):

| Параметр | Что задаёт |
|:---|:---|
| `title`, `text`, `html` | заголовок и содержимое |
| `contentNodes`, `headerNodes`, `footerNodes` | узлы DOM для тела, шапки и нижней панели |
| `position`, `width`, `height`, `fullscreen` | положение и размер |
| `overlay`, `blur` | фон за окном |
| `unclose`, `showClose`, `closeOnEsc`, `closeOnOverlay` | способы закрытия |
| `open` | открыть окно сразу после создания |
| `mode`, `src`, `preload` | `mode: 'ajax'` или `'iframe'` загружает содержимое по адресу `src` |
| `display: 'inline'` | окно в потоке страницы с ролью `region`, без затемнения, захвата фокуса и блокировки прокрутки; вставляется в элемент `root` |
| `beforeOpen`, `afterOpen`, `beforeClose`, `afterClose` | функции обратного вызова; `false` из `before…` отменяет переход |

Методы экземпляра: `open({animate})`, `close()`, `toggle()`, `setSrc(url)` и
`reloadContent()` для загружаемого содержимого, `setOverlay(value)`,
`destroy()`. Экземпляр по `id` находится в `Modal.registry`.

События возникают на блоке окна, всплывают и дублируются на `window`:
`modal:before-open` и `modal:before-close` — до перехода, их отменяет
`preventDefault()` на блоке; `modal:after-open` и `modal:after-close` — после;
`modal:before-content-upload` и `modal:after-content-upload` — вокруг загрузки
содержимого. `detail` несёт `modal`, `id` и `isOpen`. События
`SFModalBeforeOpenWindow`, `SFModalAfterOpenWindow`,
`SFModalBeforeCloseWindow` и `SFModalAfterCloseWindow` — другие имена тех же
событий.

```js
document.addEventListener('modal:before-close', (event) => {
  if (event.detail.id === 'edit-profile' && formHasChanges()) event.preventDefault();
});
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-modal` |
| Части | `sf-modal-close-button`, `sf-modal-close-button--inline-end`, `sf-modal-focus-guard`, `sf-modal-header`, `sf-modal-header-action`, `sf-modal-header-content`, `sf-modal-hide-button`, `sf-modal-hide-button--inline-end`, `sf-modal-hide-icon`, `sf-modal-surface`, `sf-modal-surface--elevated` |
| Устаревшие | `sf-modal--positon-bottom` → `sf-modal--position-bottom`, `sf-modal--positon-center` → `sf-modal--position-center`, `sf-modal--positon-inline-end` → `sf-modal--position-inline-end`, `sf-modal--positon-inline-start` → `sf-modal--position-inline-start`, `sf-modal--positon-left` → `sf-modal--position-left`, `sf-modal--positon-right` → `sf-modal--position-right`, `sf-modal--positon-top` → `sf-modal--position-top` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-modal-surface`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-modal-background-color` | Заливка панели; у затемнения фона — своя. | `var(--sf-surface-1, #fff)`; зависит от вида |
| `--sf-modal-border-color` | Цвет рамки панели. | `var(--sf-outline-variant, transparent)` |
| `--sf-modal-border-width` | Толщина рамки панели со всех сторон. | `var(--sf-border-width, var(--sf-px))` |
| `--sf-modal-radius` | Скругление углов панели; панель во весь экран остаётся прямоугольной. | `var(--sf-radius--surface)` |
| `--sf-modal-padding-inline` | Отступ внутри панели до и после содержимого; атрибут `surface-padding` окна важнее. | `var(--sf-space-2)` |
| `--sf-modal-padding-block` | Отступ внутри панели сверху и снизу от содержимого; атрибут `surface-padding` окна важнее. | `var(--sf-space-2)` |
| `--sf-modal-gap` | Промежуток между шапкой, телом и подвалом. | `var(--sf-space-1)` |

```css
.sf-modal-surface {
  --sf-modal-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-modal`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-modal-close-right` | не задана; задают модификаторы, например `.sf-modal-close-button`: `var(--sf-space-1/3)` | `inset-inline-end` |
| `--sf-modal-close-top` | не задана; задают модификаторы, например `.sf-modal-close-button`: `var(--sf-space-1/3)` | `top` |
| `--sf-modal-header-gap` | не задана; задают модификаторы, например `.sf-modal-header`: `var(--sf-space-1)` | `gap` |
| `--sf-modal-hide-right` | не задана; задают модификаторы, например `.sf-modal-hide-button`: `var(--sf-space-2)` | `inset-inline-end` |
| `--sf-modal-hide-top` | не задана; задают модификаторы, например `.sf-modal-hide-button`: `var(--sf-space-1/3)` | `top` |
| `--sf-modal-iframe-min-height` | `var(--sf-g2)` | — |
| `--sf-modal-overlay-background` | `var(--sf-black, #000)` | `background-color` |
| `--sf-modal-overlay-opacity` | `var(--sf-opacity-60, 0.6)` | `opacity` |
| `--sf-modal-surface-bg` | не задана; задают модификаторы, например `.sf-modal-surface`: `var(--sf-modal-background-color, var(--sf-surface-1, #fff))` | `background-color` |
| `--sf-modal-surface-border-color` | не задана; задают модификаторы, например `.sf-modal-surface`: `var(--sf-modal-border-color, var(--sf-outline-variant, transparent))` | `border` |
| `--sf-modal-surface-border-style` | не задана; задают модификаторы, например `.sf-modal-surface`: `solid` | `border` |
| `--sf-modal-surface-border-width` | не задана; задают модификаторы, например `.sf-modal-surface`: `var(--sf-modal-border-width, var(--sf-border-width, var(--sf-px)))` | `border` |
| `--sf-modal-surface-gap` | не задана; задают модификаторы, например `.sf-modal-surface`: `var(--sf-modal-gap, var(--sf-space-1))` | `gap` |
| `--sf-modal-surface-padding` | не задана; задают модификаторы, например `.sf-modal-surface`: `var(--sf-modal-padding-block, var(--sf-space-2)) var(--sf-modal-padding-inline, var(--sf-space-2))` | `padding` |
| `--sf-modal-surface-radius` | не задана; задают модификаторы, например `.sf-modal-surface`: `var(--sf-modal-radius, var(--sf-radius--surface))` | `border-radius` |
| `--sf-modal-surface-shadow` | не задана; задают модификаторы, например `.sf-modal-surface`: `none` | `box-shadow` |

## См. также

- [Модальное окно — Smart-компонент](/ru/smart-components/overlays/modal/)
- [Всплывающие сообщения](/ru/components/feedback/toast/)
