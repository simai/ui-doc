---
title: "Tooltip"
description: "Рисует поверхность короткой подсказки с текстом, пояснением и стрелкой для компонентов, которые сами управляют её показом."
---

# Tooltip

`<sf-tooltip>` рисует поверхность подсказки: короткий текст, необязательное
пояснение и стрелку. Элемент всегда виден и сам не следит за триггером —
его показывает и располагает владелец, например
[Range Slider](/ru/smart-components/forms/range-slider/). Подсказку,
которая открывается при наведении и фокусе на кнопке или поле, собирайте на
классах компонента [Подсказка](/ru/components/overlays-media/tooltip/).

## Пример

:::example {id="smart-components/tooltip/overview" label="Поверхности подсказки"}
:::

## Применение

### Текст

`text` — основной текст, `supporting-text` — пояснение или сочетание клавиш.
Держите подсказку короткой: одно-два коротких предложения. Слоты `text` и
`supporting-text` заменяют строки разметкой, слот `content` — всё
содержимое, слот `tail` — стрелку.

### Вид, размер и стрелка

`appearance` выбирает вид: `dark` — контрастная тёмная поверхность, заметная
на любом фоне; `light` (по умолчанию) — светлая поверхность без границы, она
читается на затемнённом или цветном фоне и теряется на светлом. `size` —
ступень `1/3`, `1/2`, `1`, `2` или `3`; берите ступень элемента, к которому
относится подсказка.

`arrow` ставит стрелку и тем самым показывает, с какой стороны стоит
элемент: `bottom-center`, `bottom-inline-start`, `bottom-inline-end` — внизу
поверхности, `top-center` — вверху, `inline-start` и `inline-end` — у
начала или конца строки. `none` (по умолчанию) убирает стрелку.

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
  [Popover](/ru/smart-components/overlays/popover/) или диалог.
- Не задавайте триггеру `aria-expanded` и `aria-haspopup`: подсказка не
  управляемое всплывающее окно.
- Стрелка декоративна и скрыта от экранного диктора.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-6d2bf151e3c8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-tooltip>` |
| Назначение | Поверхность подсказки, которая может участвовать в обычной композиции триггера data-tooltip. |
| Контракт | `smart.tooltip`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-6d2bf151e3c8` |
| Жизненный цикл | `released` |
| Готовность | принят в продукт |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`. Имя шаблона.
- `appearance` — `string`, по умолчанию `light`, значения: `light`, `dark`. Вид подсказки: светлый текст на тёмной поверхности или наоборот.
- `size` — `string`, по умолчанию `1`, значения: `1/3`, `1/2`, `1`, `2`, `3`. Шкала типографики и отступов Framework.
- `arrow` — `string`, по умолчанию `none`, значения: `none`, `top-center`, `bottom-center`, `inline-start`, `inline-end`, `bottom-inline-start`, `bottom-inline-end`. Логическое расположение хвоста.
- `text` — `string`, по умолчанию пусто. Короткое основное описание.
- `supporting-text` — `string`, по умолчанию пусто. Необязательное дополнительное описание.
- `root-class` — `string`, по умолчанию пусто. Утилитарные классы Framework для видимого корня поверхности.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | работает и предупреждает | 2026-12-01 |

### Методы

Публичных методов нет.

### События

Своих событий нет; общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

### Доступность

- Роль: `tooltip`, если связан обычным контроллером data-tooltip.
- Доступное имя: внутренний.
- Клавиши: `Escape dismisses a linked open tooltip without moving trigger focus`.
- Фокус: Поверхность никогда не получает фокус. Фокусом и aria-describedby владеет связанный нативный триггер.

### Минимальная разметка

```html
<sf-tooltip text="Hint"></sf-tooltip>
```

### Источник

- `simai/ui@6d2bf151e3c8ba14d210e97227a8d0dd1b493170:distr/smart/tooltip`
- `simai/ui@6d2bf151e3c8ba14d210e97227a8d0dd1b493170:distr/rule/rule.json#name=cl-tooltip`

## См. также

- [Подсказка](/ru/components/overlays-media/tooltip/) — подсказка при наведении и фокусе на классах.
- [Popover](/ru/smart-components/overlays/popover/) — всплывающая панель с интерактивным содержимым.
