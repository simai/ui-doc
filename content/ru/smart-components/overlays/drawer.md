---
title: "Drawer"
description: "Боковая панель: модальная, немодальная или закреплённая рядом со страницей."
profile: reference
---

# Drawer

`<sf-drawer>` показывает боковую панель. По умолчанию она модальная: затемняет
страницу, удерживает фокус и возвращает его к кнопке. Немодальная панель
(`modal="false"`) оставляет страницу доступной. Закреплённая панель
(`docked`) становится колонкой рядом со страницей и сдвигает её содержимое —
так устроены панели редактора страниц.

Идентификатор: `smart.drawer`, версия 1.1.0, жизненный цикл —
экспериментальный. Код загружается по требованию, когда на странице есть
`sf-drawer`.

## Пример

:::example {id="smart-components/drawer/overview" label="Модальная панель"}
:::

Кнопка связывается с панелью через `data-drawer="toggle|open|close"` и
`aria-controls` с id панели.

## Закреплённая панель

`docked` превращает панель в немодальную колонку `role="region"` с именем: без
затемнения, блокировки прокрутки и удержания фокуса. Контейнер страницы
помечается `data-sf-drawer-dock-host`; Framework задаёт ему отступы по сумме
ширин открытых закреплённых панелей слева и справа, обе стороны одновременно.

```html
<div class="page" data-sf-drawer-dock-host>…</div>
<sf-drawer id="blocks" docked open placement="inline-start" size="small" title="Блоки">…</sf-drawer>
<sf-drawer id="properties" docked open placement="inline-end" title="Свойства">…</sf-drawer>
```

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
| `modal` | `false` — немодальная панель |
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

## Доступность

Модальная панель — `role="dialog"` с именем: фокус переходит внутрь, Tab не
выходит за её пределы, после закрытия фокус возвращается к кнопке. Немодальная
и закреплённая панели не удерживают фокус и не блокируют страницу. Положение
учитывает направление текста (LTR и RTL), анимация отключается при
`prefers-reduced-motion`.

## Теги и подключение

Custom Element: `<sf-drawer>`. Loader-правило: `cl-drawer`, статус
`registered`. Зависимости: `component.close`, `component.icon-buttons`.

Поставляемые ассеты:

- `simai/ui-smart@bda8a0a903395d26533a354bee93e842b7f528f1:smart/drawer/js/drawer.js`
- `simai/ui-smart@bda8a0a903395d26533a354bee93e842b7f528f1:smart/drawer/css/drawer.css`

Правило загрузчика: `simai/ui@44c4ecc09ba0eea059ea47a644a330773e683790:distr/rule/rule.json`.
