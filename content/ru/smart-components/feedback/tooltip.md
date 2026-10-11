---
title: "Tooltip"
description: "Атрибуты, события и примеры Smart-компонента tooltip."
---

# Tooltip

`<sf-tooltip>` создаёт поверхность подсказки. Самостоятельно она остаётся
видимой и не управляет триггером — это сохраняет совместимость с Range Slider и
другими владельцами позиционирования. Для обычного hover/focus-сценария
поместите Smart surface рядом с нативным триггером в
`.sf-tooltip-anchor` и свяжите коротким `data-tooltip`.

## Минимальная разметка

```html
<span class="sf-tooltip-anchor">
  <button type="button" data-tooltip="help-tooltip"
    aria-describedby="help-tooltip">Справка</button>
  <sf-tooltip id="help-tooltip" text="Короткое пояснение"
    type="dark" arrow="bottom-center" hidden></sf-tooltip>
</span>
```

## Доступность

Поверхность получает `role="tooltip"`, а Framework сохраняет и дополняет
`aria-describedby` триггера. Tooltip не получает фокус, не использует
`aria-expanded` или `aria-haspopup`, открывается при hover/focus и
закрывается по Escape без переноса фокуса. Интерактивное содержимое требует
диалога или popover.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-tooltip>` |
| Назначение | Поверхность подсказки, которая может участвовать в обычной композиции триггера data-tooltip. |
| Контракт | `smart.tooltip`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | `released` |
| Готовность | принят в продукт |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | Имя шаблона. |
| `appearance` | `string` | `light` | `light`, `dark` | Вид подсказки: светлый текст на тёмной поверхности или наоборот. |
| `size` | `string` | `1` | `1/3`, `1/2`, `1`, `2`, `3` | Шкала типографики и отступов Framework. |
| `arrow` | `string` | `none` | `none`, `top-center`, `bottom-center`, `inline-start`, `inline-end`, `bottom-inline-start`, `bottom-inline-end` | Логическое расположение хвоста. |
| `text` | `string` | пусто | — | Короткое основное описание. |
| `supporting-text` | `string` | пусто | — | Необязательное дополнительное описание. |
| `root-class` | `string` | пусто | — | Утилитарные классы Framework для видимого корня поверхности. |

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

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/tooltip`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-tooltip`
