---
title: "Модальное окно"
description: "Фокусированная задача в отдельном Smart-слое с управлением фокусом, стеком и содержимым."
profile: reference
---

# Модальное окно

`<sf-modal>` показывает одну ограниченную задачу поверх страницы. Компонент
управляет верхним слоем, клавиатурной границей, блокировкой страницы и возвратом
фокуса; приложение отвечает за смысл действий и данные внутри.

## Пример

Открывающее действие связывается с окном через короткий
`data-sf-modal-open`. Кнопки внутри закрывают конкретный экземпляр через
`data-sf-modal-close`.

:::example {id="components/modal/smart-overview" label="Результат"}
:::

## Особенности применения

Используйте Modal для подтверждения, короткой формы или подробностей, после
которых пользователь возвращается к прежнему контексту. Самостоятельный долгий
процесс лучше открыть отдельной страницей. Заголовок либо `aria-label` обязан
давать окну доступное имя.

По умолчанию окно закрывается по Escape, клику по затемнению и кнопке Close.
`unclose` отключает эти пути для обязательного решения; в таком сценарии внутри
всегда должны оставаться понятные доступные действия. При нескольких окнах
только верхнее владеет Escape, Tab и блокировкой страницы.

Поверхность использует системный радиус крупных блоков
`--sf-radius-default`. Close и Minimize — компактные Icon Button и наследуют
отдельный `--sf-radius--ui`. Отступы, размеры и движение меняйте токенами либо
предусмотренными Framework utilities.

## Положение

`center`, `inline-start`, `inline-end`, `top` и `bottom` меняют положение, но
не поведение окна. Положения `inline-start` и `inline-end` — это модальная
боковая панель; для неё используйте Modal, а не модальный Drawer. Панели,
рядом с которыми страница остаётся доступной, делает
[Drawer](/ru/smart-components/overlays/drawer/). Логические направления
автоматически учитывают LTR и RTL; физические `left` и `right` остаются только
совместимыми aliases.

:::example {id="components/modal/smart-positions" label="Результат"}
:::

## Затемнение и полноэкранный режим

`overlay-preset="default"` сохраняет стабильное затемнение. Вариант `focus`
добавляет размытие фона, не заменяя scrim. `fullscreen` используйте только для
ограниченной задачи, которой действительно нужна вся область просмотра.

:::example {id="components/modal/smart-overlay" label="Результат"}
:::

## Inline-вариант

`display="inline"` оставляет поверхность в обычном потоке. Она не создаёт
portal, не блокирует страницу, не захватывает и не возвращает фокус.

:::example {id="components/modal/smart-inline" label="Результат"}
:::

## Сворачивание и восстановление

`hide="true"` добавляет действие сворачивания. Свёрнутое окно остаётся открытым
экземпляром, но перестаёт быть видимым интерактивным слоем. Для восстановления
нужна внешняя кнопка с `data-sf-modal-show`, потому что содержимое свёрнутого
окна недоступно.

:::example {id="components/modal/smart-minimized" label="Результат"}
:::

## Источник содержимого

Обычный `mode="inline"` использует слоты `header`, `content` и `footer`.
`mode="ajax"` принимает URL либо локальный DOM-селектор; `mode="iframe"`
создаёт отдельный документ. Для локального селектора сетевой запрос не нужен.

:::example {id="components/modal/smart-local-content" label="Результат"}
:::

Для удалённых источников приложение определяет разрешения, CSP, обработку
ошибки и доверие к содержимому. Встроенный документ является одной нативной
Tab-границей; Modal не читает чужой document и сохраняет доступную родительскую
кнопку закрытия.

## Настройка поверхности

`show-header`, `show-close`, `show-footer`, `close-on-esc`,
`close-on-overlay`, `overlay`, `position`, `fullscreen`, `width` и `height`
меняют независимые части контракта. Для внешнего оформления используйте
`root-class`, `overlay-class`, `surface-class`, `panel-class`, `header-class`,
`body-class`, `content-class` и `footer-class`. Значения геометрии задавайте
через токены Framework, а не абсолютные размеры.

Публичные методы `open()`, `close()`, `toggle()`, `hide()`, `show()`,
`setSrc()` и `reloadContent()` возвращают управление тому же экземпляру.
События `modal:before-*` можно отменить; соответствующее `modal:after-*`
возникает только после принятого и завершённого перехода.

С версии 1.1.0 события `modal:*` всплывают до `document`, как у базового
компонента modal и у `sf-drawer`; окно-источник указано в `event.detail.modal`.
Помощники `onBeforeOpen()`, `onAfterOpen()` и остальные, а также обработчики,
переданные в `SF.create`, получают только события своего окна. Обычный
слушатель на внешнем окне услышит и вложенное, поэтому проверяйте
`event.detail.modal`.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-257f66def2b8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-modal>` |
| Назначение | Smart-компонент Modal из SIMAI Framework. |
| Контракт | `smart.modal`, версия `1.1.0` |
| Поставка | выпуск Framework `ui-257f66def2b8` |
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

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

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

- `simai/ui@257f66def2b88e315931db8b4e887979ea284b3e:distr/smart/modal`
- `simai/ui@257f66def2b88e315931db8b4e887979ea284b3e:distr/rule/rule.json#name=cl-modal`
