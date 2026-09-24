---
title: "Drawer"
description: "Боковая панель рабочего места: закреплённая рядом со страницей или немодальная."
profile: reference
---

# Drawer

`<sf-drawer>` — боковая панель рабочего места, рядом с которой страница
остаётся доступной. Закреплённая панель (`docked`) становится колонкой и
сдвигает содержимое страницы — так устроены панели редактора страниц.
Немодальная панель (`modal="false"`) ложится поверх страницы без затемнения и
удержания фокуса.

Для модальной боковой панели — с затемнением и удержанием фокуса — используйте
[модальное окно](/ru/smart-components/overlays/modal/) с
`position="inline-start"` или `position="inline-end"`. Модальный режим Drawer
(режим по умолчанию) сохранён только для совместимости и помечен устаревшим в
контракте 1.2.0.

Идентификатор: `smart.drawer`, жизненный цикл — экспериментальный. Код
загружается по требованию, когда на странице есть `sf-drawer`.

## Пример

:::example {id="smart-components/drawer/overview" label="Немодальная панель"}
:::

Кнопка связывается с панелью через `data-drawer="toggle|open|close"` и
`aria-controls` с id панели.

## Закреплённая панель

`docked` превращает панель в немодальную колонку `role="region"` с именем: без
затемнения, блокировки прокрутки и удержания фокуса. Контейнер страницы
помечается `data-sf-drawer-dock-host`; Framework задаёт ему отступы по сумме
ширин открытых закреплённых панелей слева и справа, обе стороны одновременно.

:::example {id="smart-components/drawer/docked" label="Закреплённые панели"}
:::

На узкой области примера (уже 48rem) панели ложатся поверх страницы; чтобы
увидеть, как страница сдвигается, откройте пример на весь экран.

Ширины публикуются как `--sf-drawer-dock-inline-start` и
`--sf-drawer-dock-inline-end`, высоту шапки над панелями задаёт
`--sf-drawer-dock-block-start`. На экранах уже 48rem страница не сужается, и
панель перекрывает её. Escape закрывает верхнюю панель, но не перехватывает
Escape, который уже обработал редактор или перетаскивание.

## Атрибуты

| Атрибут | Значения и назначение |
|---|---|
| `open` | панель открыта |
| `placement` | `inline-start`, `inline-end`; `left` и `right` — совместимые варианты |
| `size` | `small`, `medium`, `large`, `full` |
| `modal` | `false` — немодальная панель; модальный режим по умолчанию устарел |
| `docked` | закреплённая колонка рядом со страницей |
| `overlay` | затемнение модальной панели |
| `close-on-esc`, `close-on-overlay` | способы закрытия |
| `show-close`, `close-placement`, `close-label` | кнопка закрытия: `inside` или `outside` |
| `title`, `label` | заголовок и доступное имя |
| `preserve-scroll-gap` | сохраняет место полосы прокрутки при блокировке страницы |
| `width`, `z-index` | точная ширина и слой, если стандартного размера мало |
| `overlay-class`, `panel-class`, `header-class`, `body-class`, `close-class` | классы частей |

## Методы и события

Методы `open()`, `close()`, `toggle()`, `getState()`, `setState(state)`
управляют тем же экземпляром. `drawer:before-open` и `drawer:before-close`
можно отменить; `drawer:after-open` и `drawer:after-close` приходят после
завершённого перехода, `drawer:ready` и `drawer:update` — после отрисовки.

С версии 1.3.0 события `drawer:*` всплывают до `document`, как остальные
события `sf-*`. Панель, которая их отправила, указана в `event.detail.drawer`.
Помощники `onBeforeOpen()`, `onAfterOpen()`, `onBeforeClose()` и
`onAfterClose()` получают только события своей панели; обычный слушатель на
внешней панели услышит и вложенную, поэтому проверяйте `event.detail.drawer`.

## Доступность

Закреплённая и немодальная панели не удерживают фокус и не блокируют
страницу. Положение учитывает направление текста (LTR и RTL), анимация
отключается при `prefers-reduced-motion`.

## Теги и подключение

Custom Element: `<sf-drawer>`. Loader-правило: `cl-drawer`, статус
`registered`. Зависимости: `component.close`, `component.icon-buttons`.

Поставляемые ассеты:

- `simai/ui-smart@a916bbadf3aa04ef04588bc4663574658df53fe2:smart/drawer/js/drawer.js`
- `simai/ui-smart@a916bbadf3aa04ef04588bc4663574658df53fe2:smart/drawer/css/drawer.css`

Правило загрузчика: `simai/ui@d81ccde2bdd5230f20ca0811c0812d2eff1f6064:distr/rule/rule.json`.
