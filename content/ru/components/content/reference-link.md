---
title: "Справочная ссылка"
description: "Показывает ссылку вместе с путём, источником или другим коротким пояснением."
profile: reference
---

# Справочная ссылка

Справочная ссылка показывает переход вместе с коротким пояснением: путём,
источником, идентификатором записи. Вся карточка — область нажатия. Для
обычной ссылки в тексте без пояснения берите
[ссылку](/ru/components/navigation/link/).

## Пример

:::example {id="components/reference-link/overview" label="Справочная ссылка с путём"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-reference-link` → `sf-reference-link-left` с иконкой `sf-icon` и ссылкой
`<a>`, затем пояснение `sf-reference-link-text`.

- Ссылка — настоящий `<a href>`; её область нажатия растягивается на всю
  карточку.
- Иконка и пояснение необязательны. Иконка декоративная:
  `aria-hidden="true"`.
- Имена `sf-reference-link__main`, `sf-reference-link__link`,
  `sf-reference-link__icon` и `sf-reference-link__meta` работают так же, как
  части выше; в разметке пишите `sf-reference-link-left` и
  `sf-reference-link-text`.
- У компонента нет своего JavaScript.

## Варианты

### Размер

Без класса размера пояснение стоит под ссылкой, с отступом на ширину
иконки, — для карточки в колонке. `sf-reference-link--size-1/2`, `--size-1`
и `--size-2` ставят ссылку и пояснение в одну строку и согласуют отступы и
текст с полями той же ступени.

:::example {id="components/reference-link/sizes" label="Размеры справочной ссылки"}
:::

### По строке текста

`sf-reference-link--line-1/2`, `--line-1` и `--line-2` убирают внутренние
отступы и ставят ссылку в одну строку с высотой текста той же ступени — для
ссылки среди текста или в списке.

:::example {id="components/reference-link/line" label="Справочная ссылка по высоте строки"}
:::

### Без рамки

`sf-reference-link--plain` убирает рамку, фон и отступы и сужает ссылку по
тексту. Берите его там, где ссылка уже стоит в своей рамке — в поле записи
или ячейке таблицы: вторая рамка читалась бы как отдельный контрол. Иконку
со стрелкой в таком месте тоже не ставьте.

:::example {id="components/reference-link/plain" label="Ссылка в рамке и без рамки"}
:::

## Состояния

Наведение и нажатие карточка показывает сама: фон и рамка меняют цвет.

### Недоступна

Класс `disabled` или `aria-disabled="true"` приглушает карточку. Вместо
`<a>` поставьте неинтерактивный элемент без `href`: класс не мешает переходу
по ссылке.

:::example {id="components/reference-link/state-disabled" label="Доступная и недоступная справочная ссылка"}
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
- Ссылка в новой вкладке сообщает об этом в тексте или доступном имени и
  получает `rel="noopener"`.
- Недоступная ссылка — не ссылка: без `href` она не получает фокус.
- В режиме высокой контрастности кольцо фокуса берёт системный цвет
  выделения.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-reference-link` |
| Части | `sf-reference-link-left`, `sf-reference-link-text`, `sf-reference-link__icon`, `sf-reference-link__link`, `sf-reference-link__main`, `sf-reference-link__meta` |
| Модификаторы | `sf-reference-link--line-1`, `sf-reference-link--line-1/2`, `sf-reference-link--line-2`, `sf-reference-link--plain` |
| Размеры | `sf-reference-link--size-1`, `sf-reference-link--size-1/2`, `sf-reference-link--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-reference-link`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-reference-link--background-color` | `transparent` | `background-color` |
| `--sf-reference-link--border-color` | `var(--sf-outline-variant)` | `border` |
| `--sf-reference-link--font-size` | не задана; задают модификаторы, например `.sf-reference-link.sf-reference-link--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-reference-link--gap` | `var(--sf-space-1)` | `gap` |
| `--sf-reference-link--line-height` | не задана; задают модификаторы, например `.sf-reference-link.sf-reference-link--size-1/2`: `var(--sf-text-height-1/2)` | `line-height`, `height`, `block-size`, `width`, `inline-size`, `font-size`, `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width` |
| `--sf-reference-link--main-gap` | не задана; задают модификаторы, например `.sf-reference-link.sf-reference-link--size-1/2`: `var(--sf-ui-1/2--text-space-x)` | `gap` |
| `--sf-reference-link--padding-block` | `var(--sf-space-1)` | `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-reference-link--padding-inline` | `var(--sf-space-1)` | `padding-left`, `padding-right`, `padding-inline` |

## См. также

- [Ссылка](/ru/components/navigation/link/)
- [Reference Link — Smart-компонент](/ru/smart-components/content/reference-link/)
