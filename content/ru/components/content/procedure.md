---
title: "Шаги инструкции"
description: "Нумерованная последовательность шагов сверху вниз; в каждом шаге может быть любое содержимое."
profile: reference
---

# Шаги инструкции

:badge[sf-procedure]{variant=outline scheme=on-surface size=1/2} :badge[1.3.1]{variant=outline scheme=on-surface size=1/2}

Шаги инструкции показывают нумерованную последовательность действий, которую
читают сверху вниз: установку, настройку, перенос. В каждом шаге может быть
любое содержимое: абзацы, списки, код.
Номер стоит в круглом маркере на первой строке шага, от маркера к следующему
идёт линия. Своего JavaScript нет: номера — счётчик CSS, линия —
псевдоэлемент.

## Пример

:::example {id="components/procedure/overview" label="Шаги с выполненным"}
:::

## Разметка

Минимальную разметку показывает пример выше: `<ol class="sf-procedure">`, в нём по `<li class="sf-procedure-step">` на шаг с `sf-procedure-title` и `sf-procedure-content`.

- `.sf-procedure` — список на родном `ol`. Свои маркеры списка убираются,
  шаги нумеруются с 1.
- `.sf-procedure-step` — шаг на родном `li`: маркер в первой колонке,
  заголовок и содержимое во второй.
- `.sf-procedure-title` — короткий заголовок шага по центру маркера. Он
  необязателен: без него рядом с маркером стоит первая строка содержимого.
- `.sf-procedure-content` — блоки шага одной колонкой с промежутком текста;
  их внешние отступы снимаются.

Линия кончается там, где начинается следующий шаг, поэтому маркеры шагов любой
высоты остаются соединены.

Индикатор того, на каком экране процесса находится человек, — другой
компонент, `sf-steps`; шаги инструкции — это читаемое содержимое.

Блок содержимого `content.steps` рисуется этим компонентом: `props.current`
отмечает шаги до него выполненными, а его — текущим; `props.layout` —
`timeline` или `list`. См. [Блоки содержимого](/ru/guide/layouts/content-and-data/content-types/).

## Варианты

### Без линии

`sf-procedure--list` • [справочник](#классы)

`sf-procedure--list` убирает линию — для короткого списка.

:::example {id="components/procedure/list" label="Короткий список шагов"}
:::

## Состояния

Инструкция, по которой человек идёт, может показывать, где он сейчас:
`sf-procedure-step--complete` заливает маркер выполненного шага основной
ролью, `sf-procedure-step--current` обводит текущий. Без этих классов все
маркеры нейтральные.

:::example {id="components/procedure/states" label="Выполненный, текущий и следующий шаг"}
:::

## Доступность

Текущий шаг отмечайте ещё и `aria-current="step"`: цвет сам по себе ничего
не скажет программе чтения с экрана. В режиме принудительных цветов края
маркеров и линия рисуются цветом `CanvasText`.
## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-procedure` |
| Части | `sf-procedure-content`, `sf-procedure-step`, `sf-procedure-step--complete`, `sf-procedure-step--current`, `sf-procedure-title` |
| Модификаторы | `sf-procedure--list` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-procedure`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-procedure-marker-background-color` | Заливка отметки шага; по умолчанию нет — пустой круг, как отметка `sf-steps` (C194); завершённый или текущий шаг рисует свою. Прежнее имя `--sf-procedure-marker-background` до 2027-01-01 ещё читается — после этого (именование C16, `src/core/contracts/token-aliases.v1.json`). | `transparent` |
| `--sf-procedure-marker-color` | Номер в отметке шага впереди; цвет пояснения, как у отметки `sf-steps`. Завершённый шаг рисует галочку, текущий — свой номер цветом `on-primary`. | `var(--sf-on-surface-variant)` |
| `--sf-procedure-line-color` | Цвет линии от маркера к следующему. | `var(--sf-outline-variant)` |
| `--sf-procedure-line-width` | Толщина линии между маркерами. | `var(--sf-px)` |
| `--sf-procedure-gap` | Промежуток между шагами. | `var(--sf-content--space-related)` |
| `--sf-procedure-indent` | Промежуток между отметкой и содержимым шага: 12 при любой ширине и плотности, как от отметки до подписи у `sf-steps`. | `calc(var(--sf-a8) + var(--sf-procedure--ring) * 2)` |

```css
.sf-procedure {
  --sf-procedure-marker-background-color: transparent;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-procedure`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-procedure--check` | `var(--sf-px)` | `background-image` |
| `--sf-procedure--gap` | `var(--sf-procedure-gap, var(--sf-content--space-related))` | `gap`, `bottom`, `inset-block-end` |
| `--sf-procedure--line-width` | `var(--sf-procedure-line-width, var(--sf-px))` | `inset-inline-start`, `width`, `inline-size` |
| `--sf-procedure--marker-size` | `var(--sf-text-height-1)` | `grid-template-columns`, `width`, `inline-size`, `height`, `block-size`, `top`, `inset-block-start`, `inset-inline-start`, `min-height`, `min-block-size`, `padding-top`, `padding-block-start` |
| `--sf-procedure--ring` | `calc(var(--sf-px) * 2)` | `grid-column-gap`, `-moz-column-gap`, `column-gap`, `outline`, `outline-offset`, `top`, `inset-block-start`, `bottom`, `inset-block-end` |
