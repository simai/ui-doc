---
title: "Аватары"
description: "Показывает человека, организацию или объект фотографией, инициалами или значком."
profile: reference
---

# Аватары

Аватар помогает быстро узнать человека, организацию или системный объект по
фотографии, инициалам или значку. Он представляет идентичность, а не
действие: кликабельным его делает только обёртка-ссылка или кнопка.

## Пример

:::example {id="components/avatars/overview" label="Аватары рядом с именами"}
:::

## Разметка

Минимальную разметку показывает пример выше: элемент с классами блока
`sf-avatar`, вида содержимого и размера (`sf-avatar--size-1`).

- Содержимое — одно из трёх: фотография `<img class="sf-avatar-image">`,
  инициалы с модификатором `sf-avatar--text` или значок `sf-icon` с
  модификатором `sf-avatar--placeholder`.
- Компонент задаёт размер, форму и цвета, но не раскладку: центрирование
  содержимого задают утилиты `flex items-cross-center content-main-center`.
- Аватар рядом с видимым именем скрывайте от вспомогательных технологий
  (`aria-hidden="true"` на аватаре, `alt=""` у фотографии).
- Ссылку или кнопку делайте из аватара только для настоящего перехода или
  действия, например открытия профиля: `<a class="sf-avatar">` или
  `<button class="sf-avatar">`.

## Варианты

### Содержимое

Фотография — лучший способ узнать человека. Инициалы (`sf-avatar--text`)
подходят, когда фотографии нет, но имя известно; значок
(`sf-avatar--placeholder`) — для гостя или неизвестного объекта. Инициалы и
значок стоят на нейтральной заливке.

:::example {id="components/avatars/content" label="Фотография, инициалы и значок"}
:::

### Размер

Шкала `1/4`, `1/3`, `1/2`, `1`, `2` и `3` согласует аватар с высотой
контролов той же ступени. Размер выбирают по плотности интерфейса: в списке
и таблице — `1/2` или `1`, в карточке профиля — `2` или `3`.

:::example {id="components/avatars/sizes" label="Размеры аватара"}
:::

### Размер по строке текста

`sf-avatar--line-1/2`, `sf-avatar--line-1` и `sf-avatar--line-2` делают
аватар высотой со строку текста той же ступени — для аватара внутри
предложения, комментария или ячейки. Ставьте их вместо класса размера.

:::example {id="components/avatars/line" label="Аватар по высоте строки"}
:::

### Форма

Круг — форма аватара человека. `sf-avatar--square` скругляет углы радиусом
контролов: так показывают организации, приложения и другие объекты, для
которых круглая «фотография» была бы неверной метафорой.

:::example {id="components/avatars/shapes" label="Круглый и квадратный аватар"}
:::

### Статус

Индикатор `sf-online-indicator` в углу аватара показывает доступность:
`sf-online-indicator--online` — в сети, `sf-online-indicator--offline` — не
в сети. Бейдж `sf-avatar-badge sf-avatar-badge--company` показывает связанную
организацию. Размер индикатора и бейджа (`--size-1/4` … `--size-3`) берите
равным размеру аватара; положение в углу задают утилиты `relative` на
аватаре и `absolute bottom-0 inline-end-0` на индикаторе. Индикатор
различается только цветом, а аватар скрыт от вспомогательных технологий,
поэтому доступность пишите текстом рядом: «Анна Белова — в сети».

:::example {id="components/avatars/status" label="Индикаторы доступности и бейдж"}
:::

### Подпись

`sf-avatar-label-group` ставит рядом с аватаром имя
(`sf-avatar-label-group-title`) и вторую строку
(`sf-avatar-label-group-text`) внутри `sf-avatar-label-group-container`.
Размер группы `sf-avatar-label-group--size-*` берите равным размеру
аватара: он согласует текст и промежуток.

:::example {id="components/avatars/label" label="Аватар с подписью"}
:::

### Группа

`sf-avatar-group` показывает участников стопкой: аватары лежат в
`sf-avatar-group-avatars` и заходят друг на друга. Насколько — задают
`sf-avatar-group--size-xs`, `--size-sm` и `--size-md`. Обёртка
`sf-add-button` с кнопкой с иконкой завершает группу действием «Добавить»;
кнопка получает пунктирную границу.

:::example {id="components/avatars/group" label="Группы аватаров"}
:::

### Карточка

`sf-avatar-card` показывает фотографию крупно с именем
(`sf-avatar-card-title`) и строкой (`sf-avatar-card-row`) под ней.
`sf-avatar-card--square` даёт изображению пропорции 1:1,
`sf-avatar-card--portrait` — 9:16. Поверхность и отступы карточки задают
утилиты.

:::example {id="components/avatars/cards" label="Квадратная и портретная карточка"}
:::

## Состояния

### Фокус

Аватар-ссылка `a.sf-avatar` и аватар-кнопка `button.sf-avatar` при наведении
получают тонкую рамку акцентного цвета, а при переходе клавишей Tab — кольцо
фокуса по `:focus-visible`. В примере фокус показан классом `focus-visible`,
который CSS читает наравне с `:focus-visible`.

:::example {id="components/avatars/state-focus" label="Аватар-ссылка в фокусе"}
:::

## Доступность

- Фотография, которая несёт смысл сама, получает осмысленный `alt`; если
  имя написано рядом — `alt=""`.
- Инициалы, значок, индикатор и бейдж скрывайте от вспомогательных
  технологий, когда их смысл уже выражен соседним текстом.
- Статус не передавайте только цветом индикатора: повторите его текстом,
  например «в сети», или в доступном имени ссылки.
- Аватар-ссылка получает имя через `aria-label` или видимый текст:
  «Профиль: Анна Белова».
- В группе давайте каждому участнику текстовое имя (`sr-only`), а
  контейнеру — роль списка и название.
- Индикатор, бейдж и стопка группы стоят на логических сторонах и
  зеркалятся при письме справа налево.

## Классы

**`sf-avatar`**

| Что | Классы |
|:---|:---|
| Блок | `sf-avatar` |
| Части | `sf-avatar-badge`, `sf-avatar-badge--company`, `sf-avatar-badge--size-1`, `sf-avatar-badge--size-1/2`, `sf-avatar-badge--size-1/3`, `sf-avatar-badge--size-1/4`, `sf-avatar-badge--size-2`, `sf-avatar-badge--size-3`, `sf-avatar-card`, `sf-avatar-card--portrait`, `sf-avatar-card--square`, `sf-avatar-card-content`, `sf-avatar-card-image`, `sf-avatar-card-portrait`, `sf-avatar-card-row`, `sf-avatar-card-square`, `sf-avatar-card-title`, `sf-avatar-group`, `sf-avatar-group--size-md`, `sf-avatar-group--size-sm`, `sf-avatar-group--size-xs`, `sf-avatar-group-avatars`, `sf-avatar-image`, `sf-avatar-label-group`, `sf-avatar-label-group--size-1`, `sf-avatar-label-group--size-1/2`, `sf-avatar-label-group--size-1/3`, `sf-avatar-label-group--size-1/4`, `sf-avatar-label-group--size-2`, `sf-avatar-label-group--size-3`, `sf-avatar-label-group--status-icon-company`, `sf-avatar-label-group-container`, `sf-avatar-label-group-text`, `sf-avatar-label-group-title` |
| Модификаторы | `sf-avatar--line-1`, `sf-avatar--line-1/2`, `sf-avatar--line-2`, `sf-avatar--placeholder`, `sf-avatar--square`, `sf-avatar--text` |
| Размеры | `sf-avatar--size-1`, `sf-avatar--size-1/2`, `sf-avatar--size-1/3`, `sf-avatar--size-1/4`, `sf-avatar--size-2`, `sf-avatar--size-3` |

**`sf-online-indicator`**

| Что | Классы |
|:---|:---|
| Блок | `sf-online-indicator` |
| Модификаторы | `sf-online-indicator--offline`, `sf-online-indicator--online` |
| Размеры | `sf-online-indicator--size-1`, `sf-online-indicator--size-1/2`, `sf-online-indicator--size-1/3`, `sf-online-indicator--size-1/4`, `sf-online-indicator--size-2`, `sf-online-indicator--size-3` |

**`sf-add-button`**

| Что | Классы |
|:---|:---|
| Блок | `sf-add-button` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-avatar`, `.sf-online-indicator`, `.sf-add-button`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-avatar--background-color` | `transparent` | `background-color` |
| `--sf-avatar--border-bottom-left-radius` | не задана; задают модификаторы, например `.sf-avatar--square`: `var(--sf-radius--ui)` | `border-end-start-radius` |
| `--sf-avatar--border-bottom-right-radius` | не задана; задают модификаторы, например `.sf-avatar--square`: `var(--sf-radius--ui)` | `border-end-end-radius` |
| `--sf-avatar--border-bottom-width` | `var(--sf-px)` | `border-bottom-width` |
| `--sf-avatar--border-color` | не задана; задают модификаторы, например `.disabled .sf-avatar`: `transparent` | `border-color` |
| `--sf-avatar--border-inline-end-width` | `var(--sf-px)` | `border-inline-end-width` |
| `--sf-avatar--border-inline-start-width` | `var(--sf-px)` | `border-inline-start-width` |
| `--sf-avatar--border-style` | не задана; задают модификаторы, например `button.sf-avatar:not(:disabled):not(.disabled):hover`: `solid` | `border-style` |
| `--sf-avatar--border-top-left-radius` | не задана; задают модификаторы, например `.sf-avatar--square`: `var(--sf-radius--ui)` | `border-start-start-radius` |
| `--sf-avatar--border-top-right-radius` | не задана; задают модификаторы, например `.sf-avatar--square`: `var(--sf-radius--ui)` | `border-start-end-radius` |
| `--sf-avatar--border-top-width` | `var(--sf-px)` | `border-top-width` |
| `--sf-avatar--border-width` | не задана; задают модификаторы, например `button.sf-avatar:not(:disabled):not(.disabled):hover`: `var(--sf-px)` | `border-width` |
| `--sf-avatar--font-size` | не задана; задают модификаторы, например `.sf-avatar--size-1`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-avatar--height` | не задана; задают модификаторы, например `.sf-avatar--size-1`: `var(--sf-ui-1--control-height)` | `height` |
| `--sf-avatar--line-height` | не задана; задают модификаторы, например `.sf-avatar--size-1`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-avatar--width` | не задана; задают модификаторы, например `.sf-avatar--size-1`: `var(--sf-ui-1--control-height)` | `width` |
| `--sf-avatar-badge--border` | не задана; задают модификаторы, например `.sf-avatar .sf-avatar-badge.sf-avatar-badge--company`: `var(--sf-px) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius`, `border-style`, `border-width` |
| `--sf-avatar-badge--border-color` | не задана; задают модификаторы, например `.sf-avatar .sf-avatar-badge.sf-avatar-badge--company`: `var(--sf-surface-0)` | `border-color` |
| `--sf-avatar-badge--border-end-end-radius` | не задана; задают модификаторы, например `.sf-avatar .sf-avatar-badge.sf-avatar-badge--company`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-avatar-badge--border-end-start-radius` | не задана; задают модификаторы, например `.sf-avatar .sf-avatar-badge.sf-avatar-badge--company`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-avatar-badge--border-start-end-radius` | не задана; задают модификаторы, например `.sf-avatar .sf-avatar-badge.sf-avatar-badge--company`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-avatar-badge--border-start-start-radius` | не задана; задают модификаторы, например `.sf-avatar .sf-avatar-badge.sf-avatar-badge--company`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-avatar-badge--border-style` | не задана; задают модификаторы, например `.sf-avatar .sf-avatar-badge.sf-avatar-badge--company`: `solid` | `border-style` |
| `--sf-avatar-badge--border-width` | не задана; задают модификаторы, например `.sf-avatar .sf-avatar-badge.sf-avatar-badge--company`: `var(--sf-px)` | `border-width` |
| `--sf-avatar-badge--width` | не задана; задают модификаторы, например `.sf-avatar-badge--size-1`: `var(--sf-text-size-1/2)` | `width` |
| `--sf-avatar-label-group--gap` | не задана; задают модификаторы, например `.sf-avatar-label-group--size-1`: `var(--sf-space-1/2)` | `gap` |
| `--sf-avatar-label-group-text--font-size` | не задана; задают модификаторы, например `.sf-avatar-label-group.sf-avatar-label-group--size-2.sf-avatar-label-group--status-icon-company .sf-avatar-label-group-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-avatar-label-group-text--line-height` | не задана; задают модификаторы, например `.sf-avatar-label-group.sf-avatar-label-group--size-2.sf-avatar-label-group--status-icon-company .sf-avatar-label-group-text`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-avatar-label-group-title--font-size` | не задана; задают модификаторы, например `.sf-avatar-label-group--size-1 .sf-avatar-label-group-title`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-avatar-label-group-title--line-height` | не задана; задают модификаторы, например `.sf-avatar-label-group--size-1 .sf-avatar-label-group-title`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-online-indicator--background-color` | не задана; задают модификаторы, например `.sf-online-indicator--offline`: `var(--sf-on-surface-muted)` | `background-color` |
| `--sf-online-indicator--height` | `var(--sf-b6)` | `height` |
| `--sf-online-indicator--width` | `var(--sf-b6)` | `width` |

## См. также

- [Avatar — Smart-компонент](/ru/smart-components/content/avatar/)
- [Avatars — Smart-компонент](/ru/smart-components/content/avatars/)
- [Теги](/ru/components/content/tags/)
