---
title: "Кольцо прогресса"
description: "Показывает долю выполненного кольцом в габарите элемента управления — классами, без скрипта."
profile: reference
---

# Кольцо прогресса

:badge[sf-progress-ring]{variant=outline scheme=on-surface size=1/2} :badge[1.7.1]{variant=outline scheme=on-surface size=1/2}

Кольцо прогресса показывает значение от 0 до 100 кольцом размером с
элемент управления: в панели инструментов, в строке списка, вокруг аватара.
Компонент — только стили: значение задаёт переменная на блоке, скрипт не
нужен. Кольцо, значение которого меняется по ходу работы, проще взять
смарт-компонентом [Кольцо прогресса](/ru/smart/feedback/progress-ring/): он
пишет эту же разметку и сам держит значение, роль и имя. Длинной задаче в
теле страницы подходит [Прогресс](/ru/components/feedback/progress-bar/).

## Пример

:::example {id="components/progress-ring/basic" label="Кольцо с процентом"}
:::

## Разметка

```html
<div class="sf-progress-ring sf-progress-ring--size-2" style="--sf-progress-ring--value: 62">
  <span class="sf-progress-ring-indicator" role="progressbar" aria-label="Загрузка файлов"
        aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"></span>
  <span class="sf-progress-ring-content" aria-hidden="true">62&nbsp;%</span>
</div>
```

- `sf-progress-ring` — рамка кольца. Значение — переменная
  `--sf-progress-ring--value`, число от 0 до 100.
- `sf-progress-ring-indicator` — само кольцо: дорожка и заполненная часть.
  На нём роль, значение и имя для экранного диктора.
- `sf-progress-ring-content` — середина: процент или картинка. Процент
  скрыт от диктора: значение уже говорит кольцо. Число пишут с неразрывным
  пробелом перед «%»: «62 %».
- Четырёхзначное значение («100 %») отметьте
  `sf-progress-ring-content--long`: оно берёт ступень текста на одну меньше.
- Значение меняет страница: и переменную, и `aria-valuenow`.

## Варианты

### Размер

`sf-progress-ring--size-1/4` … `sf-progress-ring--size-3` • [справочник](#классы)

Ступени лестницы аватара: на каждой кольцо занимает рамку аватара того же
размера, поэтому стоит в одной строке с ним и с кнопкой со значком.
Процент в середине виден с размера `2`; на меньших ступенях середина
остаётся пустой, а значение говорит имя кольца.

:::example {id="components/progress-ring/sizes" label="Шесть ступеней размера"}
:::

### Статус

`sf-progress-ring--neutral`, `--info`, `--success`, `--warning`, `--error` • [справочник](#классы)

Статус красит заполненную часть цветом из общего словаря статусов; без
статуса она основного цвета темы. Кольцо не выводит статус из значения:
порог «с 80 % — предупреждение» ставит страница.

:::example {id="components/progress-ring/status" label="Без статуса и пять статусов"}
:::

## Состояния

### Значение неизвестно

`sf-progress-ring--indeterminate` • [справочник](#классы)

Пока доля неизвестна, по дорожке бежит дуга спиннера. Уберите
`aria-valuenow` и процент из середины. При системной настройке уменьшения
движения дуга не бежит: кольцо стоит ровной подкрашенной дорожкой.

:::example {id="components/progress-ring/indeterminate" label="Готовим отчёт"}
:::

## Применение

### Аватар в середине

Кольцо вокруг аватара показывает занятую квоту или заполненный профиль, не
сдвигая картинку. Аватар на ступень меньше кольца (`sf-avatar--size-1` в
кольце `2`) заполняет середину точно, с зазором 2 px до линии. Величину в
известных границах — занятое место, а не ход задачи — называйте ролью
`meter` вместо `progressbar`.

:::example {id="components/progress-ring/avatar" label="Аватар и занятое место"}
:::

## Доступность

- На `sf-progress-ring-indicator` — роль `progressbar` (ход задачи) или
  `meter` (величина в границах), `aria-valuemin="0"`, `aria-valuemax="100"`
  и текущее `aria-valuenow`. Пока значение неизвестно, `aria-valuenow` нет.
- Имя — ваша часть: `aria-label` («Загрузка файлов») или `aria-labelledby`
  на видимую подпись. Значение словами («3 из 5 файлов») задаёт
  `aria-valuetext`.
- Процент в середине скрыт от диктора (`aria-hidden="true"`), чтобы
  значение не звучало дважды.
- Об окончании или ошибке сообщите отдельно, текстом с `role="status"`:
  диктор не объявляет каждое изменение значения.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-progress-ring` |
| Части | `sf-progress-ring-content`, `sf-progress-ring-content--long`, `sf-progress-ring-indicator` |
| Модификаторы | `sf-progress-ring--error`, `sf-progress-ring--indeterminate`, `sf-progress-ring--info`, `sf-progress-ring--neutral`, `sf-progress-ring--success`, `sf-progress-ring--warning` |
| Размеры | `sf-progress-ring--size-1`, `sf-progress-ring--size-1/2`, `sf-progress-ring--size-1/3`, `sf-progress-ring--size-1/4`, `sf-progress-ring--size-2`, `sf-progress-ring--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-progress-ring`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-progress-ring-size` | Рамка кольца: высота элемента управления его размера, если переменная не задана. | `var(--sf-ui-1--control-height)`; зависит от размера |
| `--sf-progress-ring-line-width` | Толщина линии; можно задать и голый 0. | `var(--sf-a2)` |
| `--sf-progress-ring-gap` | Зазор между линией и тем, что стоит в середине; можно задать и голый 0. | `var(--sf-a2)` |
| `--sf-progress-ring-fill-color` | Заполненная часть; статус задаёт свой цвет, если эта переменная не задана. | `var(--sf-primary)`; зависит от статуса |
| `--sf-progress-ring-track-color` | Дорожка под заполненной частью. | `var(--sf-surface-container)` |
| `--sf-progress-ring-color` | Процент в середине. | `var(--sf-on-surface)` |

```css
.sf-progress-ring {
  --sf-progress-ring-size: var(--sf-ui-1--control-height);
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-progress-ring`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-progress-ring--content-size` | не задана; задают модификаторы, например `.sf-progress-ring .sf-progress-ring-content`: `calc(var(--sf-progress-ring--size) - 2 * (var(--sf-progress-ring--line-width) + var(--sf-progress-ring--gap)))` | `width`, `inline-size`, `height`, `block-size`, `font-size`, `line-height`, `max-width`, `max-inline-size` |
| `--sf-progress-ring--fill` | `var(--sf-progress-ring-fill-color, var(--sf-primary))` | `background` |
| `--sf-progress-ring--font-size` | `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-progress-ring--gap` | `var(--sf-progress-ring-gap, var(--sf-a2))` | `--sf-progress-ring--content-size`, `--sf-progress-ring--point-inset` |
| `--sf-progress-ring--line-width` | `var(--sf-progress-ring-line-width, var(--sf-progress-ring--step-line-width))` | `mask`, `--sf-progress-ring--content-size`, `--sf-progress-ring--point-inset` |
| `--sf-progress-ring--point-inset` | не задана; задают модификаторы, например `.sf-progress-ring .sf-progress-ring-content > sf-avatar .sf-online-indicator`: `calc(
      (var(--sf-progress-ring--size) / 2 - var(--sf-progress-ring--line-width) - var(--sf-progress-ring--gap))
      - (var(--sf-progress-ring--size) / 2 - var(--sf-progress-ring--line-width) / 2) * sin(45deg)
      - var(--sf-online-indicator--width) / 2
    )` | `bottom`, `inset-block-end`, `inset-inline-end` |
| `--sf-progress-ring--size` | `var(--sf-progress-ring-size, var(--sf-progress-ring--step-size))` | `width`, `inline-size`, `height`, `block-size`, `--sf-progress-ring--content-size`, `--sf-progress-ring--point-inset` |
| `--sf-progress-ring--step-line-width` | `var(--sf-a2)` | `--sf-progress-ring--line-width` |
| `--sf-progress-ring--step-size` | `var(--sf-ui-1--control-height)` | `--sf-progress-ring--size` |
| `--sf-progress-ring--track` | `var(--sf-progress-ring-track-color, var(--sf-surface-container))` | `background` |

## См. также

- [Кольцо прогресса — смарт-компонент](/ru/smart/feedback/progress-ring/)
- [Прогресс](/ru/components/feedback/progress-bar/)
- [Спиннер](/ru/components/feedback/spinner/)
- [Аватары](/ru/components/content/avatars/)
