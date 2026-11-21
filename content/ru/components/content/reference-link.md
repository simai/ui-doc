---
title: "Справочная ссылка"
description: "Показывает ссылку вместе с путём, источником или другим коротким пояснением."
profile: reference
---

# Справочная ссылка

:badge[sf-reference-link]{variant=outline scheme=on-surface size=1/2} :badge[1.4.3]{variant=outline scheme=on-surface size=1/2}

Справочная ссылка показывает переход вместе с коротким пояснением: путём,
источником, идентификатором записи. Вся карточка — область нажатия. Для
обычной ссылки в тексте без пояснения берите
[ссылку](/ru/components/navigation/link/).

## Пример

:::example {id="components/reference-link/overview" label="Справочная ссылка с путём"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-reference-link` → `sf-reference-link__main` с иконкой
`sf-reference-link__icon` и ссылкой `sf-reference-link__link`, затем путь или
номер записи `sf-reference-link__meta`. Прежние имена частей
`sf-reference-link-left` и `sf-reference-link-text` тоже читаются.

- Ссылка — настоящий `<a href>`; её область нажатия растягивается на всю
  карточку.
- Иконка и пояснение необязательны. Иконка декоративная:
  `aria-hidden="true"`.
- У компонента нет своего JavaScript.

## Варианты

### Размер

`sf-reference-link--size-1/2` • [справочник](#классы)

Без класса размера это карточка для колонки: путь или номер записи стоит под
именем одной строкой ступени 1/2 приглушённым цветом и начинается там же, где
имя; длинное имя занимает две строки и обрезается многоточием. `sf-reference-link--size-1/2`, `--size-1`
и `--size-2` ставят ссылку и пояснение в одну строку и согласуют отступы и
текст с полями той же ступени.

:::example {id="components/reference-link/sizes" label="Размеры справочной ссылки"}
:::

### По строке текста

`sf-reference-link--line-1/2` • [справочник](#классы)

`sf-reference-link--line-1/2`, `--line-1` и `--line-2` убирают внутренние
отступы и ставят ссылку в одну строку с высотой текста той же ступени — для
ссылки среди текста или в списке.

:::example {id="components/reference-link/line" label="По строке текста"}
:::

### Без рамки

`sf-reference-link--plain` • [справочник](#классы)

`sf-reference-link--plain` убирает рамку, фон и отступы и сужает ссылку по
тексту. Берите его там, где ссылка уже стоит в своей рамке — в поле записи
или ячейке таблицы: вторая рамка читалась бы как отдельный контрол. Иконку
со стрелкой в таком месте тоже не ставьте.

:::example {id="components/reference-link/plain" label="Ссылка в рамке и без рамки"}
:::

### В тексте

`sf-reference-link--inline` • [справочник](#классы)

`sf-reference-link--inline` на корне `<span>` ставит ссылку в предложение: она
идёт с текстом, переносится вместе с ним и берёт его размер, без рамки и
отступов. Иконку и первое слово имени кладите вместе в
`sf-reference-link__start` без пробела между ними — тогда в узкой строке
иконка не остаётся одна в конце строки. Имя `sf-reference-link__label` в
тексте подчёркнуто всегда, номер `sf-reference-link__number` — приглушённый и
не переносится. В карточке и строке подчёркивание появляется только под
указателем и с клавиатуры. Посещённый цвет ссылка в тексте берёт только
внутри `data-sf-visited="on"`.

:::example {id="components/reference-link/inline" label="Справочная ссылка в тексте"}
:::

## Состояния

Наведение и нажатие карточка показывает сама: фон и рамка меняют цвет.

### Удалена или нет доступа

`sf-reference-link--gone` • [справочник](#классы)

Если запись удалена или к ней нет доступа, ссылки нет: корень получает
`sf-reference-link--gone`, иконка — `link_off`, а после имени в
`sf-reference-link__reason` стоит причина («удалена», «нет доступа»). Слова и
иконка — приглушённого цвета.

:::example {id="components/reference-link/gone" label="Удалённая запись и запись без доступа"}
:::

### Недоступна

Класс `disabled` или `aria-disabled="true"` приглушает карточку. Вместо
`<a>` поставьте неинтерактивный элемент без `href`: класс не мешает переходу
по ссылке.

:::example {id="components/reference-link/state-disabled" label="Недоступна"}
:::

### Фокус

При переходе клавишей Tab кольцо фокуса охватывает всю карточку, а не только
текст ссылки. В примере фокус показан классом `focus-visible` на ссылке,
который CSS читает наравне с `:focus-visible`.

:::example {id="components/reference-link/state-focus" label="Справочная ссылка в фокусе"}
:::

## Доступность

- Текст ссылки описывает, куда она ведёт; путь в пояснении не заменяет
  доступное имя.
- Ссылка в новую вкладку получает `rel="noopener"`, после слов — знак
  `<i class="sf-reference-link__tab sf-icon" aria-hidden="true">arrow_outward</i>`
  и скрытые для глаза слова `sf-reference-link__tab-words` «(откроется в новой
  вкладке)» для экранного диктора. Смарт-компонент пишет их сам.
- Недоступная ссылка — не ссылка: без `href` она не получает фокус.
- В режиме высокой контрастности кольцо фокуса берёт системный цвет
  выделения.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-reference-link` |
| Части | `sf-reference-link-left`, `sf-reference-link-text`, `sf-reference-link__copy`, `sf-reference-link__icon`, `sf-reference-link__label`, `sf-reference-link__link`, `sf-reference-link__main`, `sf-reference-link__meta`, `sf-reference-link__number`, `sf-reference-link__reason`, `sf-reference-link__start`, `sf-reference-link__tab`, `sf-reference-link__tab-words` |
| Модификаторы | `sf-reference-link--copy`, `sf-reference-link--gone`, `sf-reference-link--inline`, `sf-reference-link--line-1`, `sf-reference-link--line-1/2`, `sf-reference-link--line-2`, `sf-reference-link--plain` |
| Размеры | `sf-reference-link--size-1`, `sf-reference-link--size-1/2`, `sf-reference-link--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-reference-link`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-reference-link-background-color` | Заливка карточки в покое; у наведения, нажатия и выключенного состояния свои. | `transparent` |
| `--sf-reference-link-border-color` | Рамка карточки в покое; у наведения и выключенного состояния свои. | `var(--sf-outline-variant)` |
| `--sf-reference-link-radius` | Скругление углов карточки. | `var(--sf-radius--ui)` |
| `--sf-reference-link-link-color` | Цвет ссылки. | `var(--sf-link)` |
| `--sf-reference-link-padding-inline` | Отступ в начале и в конце карточки; у `plain` его нет. | `var(--sf-space-1)`; зависит от размера, line, вида |
| `--sf-reference-link-padding-block` | Отступ над и под содержимым карточки; у `plain` его нет. | `var(--sf-space-1)`; зависит от размера, line, вида |
| `--sf-reference-link-gap` | Расстояние между ссылкой и текстом после неё. | `var(--sf-space-1)`; зависит от размера, line |

```css
.sf-reference-link {
  --sf-reference-link-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-reference-link`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-reference-link--accent` | `var(--sf-primary)` | `color` |
| `--sf-reference-link--background-color` | `var(--sf-reference-link-background-color, transparent)` | `background-color` |
| `--sf-reference-link--border-color` | `var(--sf-reference-link-border-color, var(--sf-outline-variant))` | `border-color` |
| `--sf-reference-link--font-size` | не задана; задают модификаторы, например `.sf-reference-link.sf-reference-link--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-reference-link--gap` | `var(--sf-space-1)` | `gap`, `padding-inline-end` |
| `--sf-reference-link--line-height` | не задана; задают модификаторы, например `.sf-reference-link.sf-reference-link--size-1/2`: `var(--sf-text-height-1/2)` | `line-height`, `height`, `block-size`, `width`, `inline-size`, `font-size`, `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width`, `padding-inline-start` |
| `--sf-reference-link--link` | `var(--sf-link)` | `color` |
| `--sf-reference-link--main-gap` | не задана; задают модификаторы, например `.sf-reference-link.sf-reference-link--line-1/2`: `var(--sf-space-1/4)` | `gap`, `padding-inline-start` |
| `--sf-reference-link--padding-block` | `calc((var(--sf-ui-3--control-height) - var(--sf-text-height-1)) / 2 - var(--sf-px))` | `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-reference-link--padding-inline` | `var(--sf-space-1)` | `padding-inline`, `padding-inline-end`, `inset-inline-end` |

## См. также

- [Ссылка](/ru/components/navigation/link/)
- [Справочная ссылка — смарт-компонент](/ru/smart/content/reference-link/)
