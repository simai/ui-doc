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

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-modal>` |
| Назначение | Smart-компонент Modal из SIMAI Framework. |
| Контракт | `smart.modal`, версия `1.1.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | — |
| `modal-id` | `string` | пусто | — | — |
| `title` | `string` | `Modal` | — | — |
| `aria-label` | `string` | пусто | — | — |
| `text` | `string` | пусто | — | — |
| `open` | `boolean` | `false` | — | — |
| `autoload` | `boolean` | `false` | — | — |
| `unclose` | `boolean` | `false` | — | — |
| `hide` | `boolean` | `false` | — | — |
| `hide-modifier` | `string` | пусто | — | — |
| `minimized` | `boolean` | `false` | — | — |
| `overlay` | `boolean` | `true` | — | — |
| `show-header` | `boolean` | `true` | — | — |
| `show-close` | `boolean` | `true` | — | — |
| `show-footer` | `boolean` | `true` | — | — |
| `close-on-esc` | `boolean` | `true` | — | — |
| `close-on-overlay` | `boolean` | `true` | — | — |
| `preserve-scroll-gap` | `boolean` | `true` | — | — |
| `position` | `string` | `center` | `center`, `left`, `right`, `inline-start`, `inline-end`, `top`, `bottom` | — |
| `mode` | `string` | `inline` | `inline`, `ajax`, `iframe` | — |
| `display` | `string` | `modal` | `modal`, `inline` | — |
| `src` | `string` | пусто | — | — |
| `root-class` | `string` | пусто | — | — |
| `preload` | `boolean` | `true` | — | — |
| `fullscreen` | `boolean` | `false` | — | — |
| `width` | `string` | пусто | — | — |
| `height` | `string` | пусто | — | — |
| `blur` | `string` | пусто | — | — |
| `blur-type` | `string` | `medium` | `none`, `small`, `medium`, `large` | — |
| `overlay-preset` | `string` | `default` | `default`, `focus` | — |
| `overlay-class` | `string` | пусто | — | — |
| `close-class` | `string` | пусто | — | — |
| `surface-class` | `string` | пусто | — | — |
| `surface-padding` | `string` | пусто | — | — |
| `panel-class` | `string` | пусто | — | — |
| `header-class` | `string` | пусто | — | — |
| `body-class` | `string` | пусто | — | — |
| `content-class` | `string` | пусто | — | — |
| `footer-class` | `string` | пусто | — | — |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `getSlotHtml()` | — | не описано | — |
| `open()` | — | не описано | — |
| `close()` | — | не описано | — |
| `hide()` | — | не описано | — |
| `show()` | — | не описано | — |
| `toggle()` | — | не описано | — |
| `setSrc()` | — | не описано | — |
| `getModalRoot()` | — | не описано | — |
| `onKeyDown()` | — | не описано | — |
| `resetRemoteContent()` | — | не описано | — |
| `clearPortal()` | — | не описано | — |
| `onBeforeOpen()` | — | не описано | — |
| `onAfterOpen()` | — | не описано | — |
| `onBeforeClose()` | — | не описано | — |
| `onAfterClose()` | — | не описано | — |
| `onBeforeHide()` | — | не описано | — |
| `onAfterHide()` | — | не описано | — |
| `onBeforeShow()` | — | не описано | — |
| `onAfterShow()` | — | не описано | — |
| `onModalReady()` | — | не описано | — |
| `onModalUpdate()` | — | не описано | — |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `modal:ready` | не описан | Событие среды выполнения modal:ready. Всплывает и является composed; detail.modal — модальное окно, отправившее событие. |
| `modal:update` | не описан | Событие среды выполнения modal:update. Всплывает и является composed; detail.modal — модальное окно, отправившее событие. |
| `sf-after-render` | не описан | — |
| `sf-before-render` | не описан | — |

### Доступность

- Доступное имя: рекомендуется.
- Клавиши: `Tab`.
- Фокус: Сохраняет видимый фокус на активном элементе управления.

### Минимальная разметка

```html
<sf-modal></sf-modal>
```

### Источник

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/modal`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-modal`
