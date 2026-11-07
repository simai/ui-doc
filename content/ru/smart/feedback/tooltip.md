---
title: "Подсказка"
description: "Рисует поверхность короткой подсказки с текстом, пояснением и стрелкой для компонентов, которые сами управляют её показом."
---

# Подсказка

:badge[sf-tooltip]{type=tonal scheme=primary size=1/2} :badge[1.1.3]{type=outline scheme=on-surface size=1/2}

Подсказка — это сама плашка с коротким текстом, необязательным пояснением и
стрелкой. Она всегда видна и сама не следит, на что навели: показывает и
ставит её на место другой компонент, например [Слайдер
диапазона](/ru/smart/forms/range-slider/).

То же на классах — [Подсказка](/ru/components/overlays-media/tooltip/):
подсказку, которая открывается при наведении и фокусе на кнопке или поле,
собирайте на классах этого компонента.

## Пример

:::example {id="smart-components/tooltip/overview" label="Поверхности подсказки"}
:::

## Разметка

Поверхности нужен текст:

```html
<sf-tooltip appearance="dark" arrow="bottom-center" text="Сохранить изменения"
  supporting-text="Ctrl + S"></sf-tooltip>
```

`text` — основной текст, `supporting-text` — пояснение или сочетание клавиш.
Держите подсказку короткой: одно-два коротких предложения. Слоты `text` и
`supporting-text` заменяют строки разметкой, слот `content` — всё
содержимое, слот `tail` — стрелку.

## Варианты

### Вид

`appearance` выбирает вид: `dark` — контрастная тёмная поверхность, заметная
на любом фоне; `light` (по умолчанию) — светлая поверхность без границы, она
читается на затемнённом или цветном фоне и теряется на светлом.

:::example {id="smart-components/tooltip/appearance" label="Светлая и тёмная поверхность"}
:::

### Размер

`size` — ступень `1/3`, `1/2`, `1`, `2` или `3`; берите ступень элемента, к
которому относится подсказка.

:::example {id="smart-components/tooltip/sizes" label="Размеры подсказки"}
:::

### Положение стрелки

`arrow` ставит стрелку и тем самым показывает, с какой стороны стоит
элемент: `bottom-center`, `bottom-inline-start`, `bottom-inline-end` — внизу
поверхности, `top-center` — вверху, `inline-start` и `inline-end` — у
начала или конца строки. `none` (по умолчанию) убирает стрелку.

:::example {id="smart-components/tooltip/arrow" label="Положения стрелки"}
:::

## Поведение

### Подсказка у триггера

Связка `data-tooltip` с `<sf-tooltip>` не работает: контроллер подсказки
показывает и располагает сам элемент `<sf-tooltip>`, у которого нет
собственного блока, и поверхность остаётся под триггером шириной в него.
Для подсказки при наведении и фокусе пишите поверхность классами
`sf-tooltip`, как на странице [Подсказка](/ru/components/overlays-media/tooltip/).

```html
<span class="sf-tooltip-anchor">
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1"
    data-tooltip="save-tooltip" aria-describedby="save-tooltip">
    <span class="sf-button-text-container">Сохранить</span>
  </button>
  <span id="save-tooltip" class="sf-tooltip sf-tooltip--dark sf-tooltip--size-1 sf-tooltip--arrow-bottom-center" hidden>
    <span class="sf-tooltip-content flex flex-col">
      <span class="sf-tooltip-wrap flex flex-col">
        <span class="sf-tooltip-text">Сохранить изменения</span>
      </span>
      <span class="sf-tooltip-tail" aria-hidden="true"></span>
    </span>
  </span>
</span>
```

## Доступность

- Подсказка дополняет имя элемента, а не заменяет его: у кнопки-иконки имя
  задаёт `aria-label`, подсказка — пояснение через `aria-describedby`.
- Владелец, который показывает поверхность, отвечает за связь с элементом:
  `role="tooltip"` на поверхности и её `id` в `aria-describedby` элемента.
- Поверхность не получает фокус. Не кладите в неё ссылки, кнопки и поля:
  интерактивному содержимому нужен
  [Всплывающая панель](/ru/smart/overlays/popover/) или диалог.
- Не задавайте триггеру `aria-expanded` и `aria-haspopup`: подсказка не
  управляемое всплывающее окно.
- Стрелка декоративна и скрыта от экранного диктора.

## Справочник

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `appearance` | строка | `light` | `light`, `dark` | Вид подсказки: светлый текст на тёмной поверхности или наоборот. |
| `size` | строка | `1` | `1/3`, `1/2`, `1`, `2`, `3` | Шкала типографики и отступов Framework. |
| `arrow` | строка | `none` | `none`, `top-center`, `bottom-center`, `inline-start`, `inline-end`, `bottom-inline-start`, `bottom-inline-end` | Логическое расположение хвоста. |
| `text` | строка | пусто | — | Короткое основное описание. |
| `supporting-text` | строка | пусто | — | Необязательное дополнительное описание. |

#### Общие для всех компонентов

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `template` | строка | `default` | — | Имя шаблона. |
| `root-class` | строка | пусто | — | Утилитарные классы Framework для видимого корня поверхности. |
| `root-style` | строка | пусто | — | Объявления стиля, которые ставятся корневому элементу, нарисованному компонентом, в том числе пользовательские свойства. |

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `icon-start` — `iconStart`. Свойство атрибута `template` называется `templateName`.

### Методы

Публичных методов нет.

### События

Своих событий нет. Общие события базового элемента — в главе [Модель компонента](/ru/guide/smart-components/model/#базовый-интерфейс).

### О компоненте

| | |
|:---|:---|
| Тег | `<sf-tooltip>`, контракт `smart.tooltip` версии `1.1.3` |
| Поставка | выпуск Framework `ui-579db8035fa9` |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | `released`; принят в продукт |
| До прихода кода | нет: атрибут `data-sf-skeleton` не пишется; своего скелетона при загрузке данных нет ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода)) |
| Доступность | роль подсказка (`tooltip`); доступное имя внутренний; клавиши `Escape` закрывает открытую связанную подсказку, не уводя фокус с элемента |
| Источник | `simai/ui@579db8035fa9cc7889218eb6a42149def0c30854:distr/smart/tooltip` |
| Правило классов | `simai/ui@579db8035fa9cc7889218eb6a42149def0c30854:distr/rule/rule.json#name=cl-tooltip` |

## См. также

- [Подсказка](/ru/components/overlays-media/tooltip/) — подсказка при наведении и фокусе на классах.
- [Всплывающая панель](/ru/smart/overlays/popover/) — всплывающая панель с интерактивным содержимым.
