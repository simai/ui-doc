---
title: "Основа Admin Menu"
description: "Оформляет боковую навигацию административного приложения: панели, пункты, компактный режим."
profile: reference
---

# Основа Admin Menu

`sf-admin-menu` — оформление и поведение боковой навигации административного
приложения: шапка, поиск, пункты с иконками, вложенные панели, компактный
режим и показ пунктов, которые не поместились. Законченный сценарий с
поиском и настройками даёт Smart-компонент
[Admin Menu](/ru/smart-components/composite/admin-menu/); для обычной
навигации по сайту берите [меню](/ru/components/navigation/menu/).

## Пример

:::example {id="components/admin-menu/overview" label="Меню администрирования"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`<aside class="sf-admin-menu">` → панель `sf-admin-menu-panel` → шапка
`sf-admin-menu-head`, поиск `sf-admin-menu-search`, раздел
`sf-admin-menu-section sf-admin-menu-main` и подвал `sf-admin-menu-bottom`.

- Корень `sf-admin-menu` с утилитой `flex` и `aria-label`; панель — с
  утилитами `flex flex-col`. Ширину панели задаёт компонент.
- Шапка `sf-admin-menu-head` содержит `sf-admin-menu-head-container` с
  иконкой и названием.
- Раздел — `<nav>` с `aria-label`; в нём список `<ul class="p-0 m-0">`,
  пункты `<li class="sf-admin-menu-item-wrap flex flex-col">`.
- Пункт — ссылка или кнопка `sf-admin-menu-item flex items-cross-center` с
  `sf-admin-menu-item-container`: иконка `sf-icon` и подпись в `<span>`.
  После контейнера можно поставить счётчик [Badge](/ru/components/feedback/badges/).
- Подвал `sf-admin-menu-bottom` держит пункты внизу панели, например
  настройки.

## Варианты

### Вложенная панель

Вложенная панель — вторая `sf-admin-menu-panel` с классом
`sf-admin-menu-panel-sub`, разделом `sf-admin-menu-main-sub` и кнопкой
возврата `sf-admin-menu-back-button` в шапке. Закрытая панель сдвинута за
край меню, класс `open` показывает её; его ставит и снимает приложение.
Кнопка `button[data-menu="имя"]` связывает пункт с панелью
`section[data-panel="имя"]`: по нажатию скрипт переключает у панели утилиты
`inline-end-full` и `inline-end-0`.

:::example {id="components/admin-menu/submenu" label="Вложенная панель раздела"}
:::

### Компактный режим

Класс `small` на панели сужает её до колонки иконок: подписи пунктов
скрываются, шапка центрируется. Кнопка с атрибутом
`data-admin-menu-toggle` переключает режим. У пунктов компактной панели
нет видимой подписи — дайте им `aria-label`.

:::example {id="components/admin-menu/compact" label="Обычная и компактная панель"}
:::

### Ограниченная высота

Если оболочка ограничивает высоту меню, растяните корень и панель утилитой
`h-full`: скрипт оставит пункты, которые помещаются, а остальные спрячет
за пунктом «Развернуть». Нажатие показывает все пункты с прокруткой и
меняет подпись на «Свернуть». В контейнере с естественной высотой видны все
пункты.

:::example {id="components/admin-menu/overflow" label="Меню в контейнере ограниченной высоты"}
:::

## Состояния

Наведение и нажатие подсвечивают пункт; эти состояния компонент показывает
сам. Класс или атрибут `disabled` у пункта снимает подсветку при наведении,
но не приглушает его — недоступный пункт лучше убрать.

### Текущий раздел

Класс `active` подсвечивает пункт текущего раздела фоном. Добавьте ссылке
`aria-current="page"`.

:::example {id="components/admin-menu/state-current" label="Текущий раздел"}
:::

## Доступность

- Корень — `<aside>` с `aria-label`, каждый раздел — `<nav>` с
  `aria-label`.
- Текущему пункту — `aria-current="page"` вместе с классом `active`.
- Иконки скрывайте через `aria-hidden="true"`; в компактном режиме имя
  пункта даёт `aria-label`.
- Кнопка, которая открывает вложенную панель, называет раздел; кнопка
  возврата — то, куда она ведёт.
- Пункты — нативные ссылки и кнопки: Tab переходит по ним, Enter
  срабатывает.

## JavaScript

Скрипт подключается сам и обслуживает каждый `.sf-admin-menu`, в том числе
добавленный позже; корни внутри Smart-компонента `<sf-admin-menu>` он
пропускает. Он связывает пункты с вложенными панелями, переключает
компактный режим и
пересчитывает видимые пункты при изменении высоты. Событий скрипт не
отправляет.

`SF.AdminMenu.init(scope)` подключает меню внутри `scope`. Компонент
регистрирует класс `AdminMenu`: `SF.Loader` появляется к событию
`sf-loader-init` на `window`, а `SF.Loader.ready('AdminMenu', callback)`
вызывает `callback`, когда скрипт загружен.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('AdminMenu', () => {
  SF.AdminMenu.init(document.querySelector('#app-shell'));
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-admin-menu` |
| Части | `sf-admin-menu-back`, `sf-admin-menu-back-button`, `sf-admin-menu-bottom`, `sf-admin-menu-direction-icon`, `sf-admin-menu-divider`, `sf-admin-menu-head`, `sf-admin-menu-head-container`, `sf-admin-menu-item`, `sf-admin-menu-item-container`, `sf-admin-menu-item-icon`, `sf-admin-menu-item-placeholder`, `sf-admin-menu-item-segment`, `sf-admin-menu-item-settings`, `sf-admin-menu-item-wrap`, `sf-admin-menu-main`, `sf-admin-menu-main-sub`, `sf-admin-menu-panel`, `sf-admin-menu-panel-search`, `sf-admin-menu-panel-sub`, `sf-admin-menu-search`, `sf-admin-menu-search-field`, `sf-admin-menu-search-group-head`, `sf-admin-menu-search-kbd`, `sf-admin-menu-search-keys`, `sf-admin-menu-search-mark`, `sf-admin-menu-search-results`, `sf-admin-menu-search-results-area`, `sf-admin-menu-search-row`, `sf-admin-menu-search-skeleton`, `sf-admin-menu-search-toggle`, `sf-admin-menu-section` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-admin-menu`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-admin-menu-item--background-color` | не задана; задают модификаторы, например `.sf-admin-menu-item:not(:disabled):not(.disabled):hover`: `var(--sf-secondary-container-hover)` | `background-color` |
| `--sf-admin-menu-item--border-color` | не задана; задают модификаторы, например `.sf-admin-menu-item-segment:not(.disabled):hover .sf-admin-menu-item`: `var(--sf-transparent)` | `border-color` |
| `--sf-admin-menu-item--border-end-end-radius` | не задана; задают модификаторы, например `.sf-admin-menu-item.segment-start`: `0` | `border-end-end-radius` |
| `--sf-admin-menu-item--border-end-start-radius` | не задана; задают модификаторы, например `.sf-admin-menu-item.segment-middle`: `0` | `border-end-start-radius` |
| `--sf-admin-menu-item--border-start-end-radius` | не задана; задают модификаторы, например `.sf-admin-menu-item.segment-start`: `0` | `border-start-end-radius` |
| `--sf-admin-menu-item--border-start-start-radius` | не задана; задают модификаторы, например `.sf-admin-menu-item.segment-middle`: `0` | `border-start-start-radius` |
| `--sf-admin-menu-item--mask-size` | не задана; задают модификаторы, например `.sf-admin-menu-item-wrap.settings-on:hover .sf-admin-menu-item.settings-active`: `calc(var(--sf-space-7) * 2)` | `mask-image` |
| `--sf-admin-menu-item-container--color` | не задана; задают модификаторы, например `.sf-admin-menu-item:not(:disabled):not(.disabled):hover .sf-admin-menu-item-container`: `var(--sf-on-secondary-container)` | `color` |
| `--sf-admin-menu-item-segment--background-color` | не задана; задают модификаторы, например `.sf-admin-menu-item-segment:not(.disabled):hover`: `var(
                    --sf-secondary-container-hover
    )` | `background-color` |
| `--sf-admin-menu-main--padding-inline-end` | не задана; задают модификаторы, например `.sf-admin-menu-main.open`: `0` | `margin-inline-end`, `padding-inline-end` |

## См. также

- [Меню](/ru/components/navigation/menu/)
- [Admin Menu — Smart-компонент](/ru/smart-components/composite/admin-menu/)
