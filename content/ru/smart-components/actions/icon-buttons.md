---
title: "Icon Buttons"
description: "Атрибуты, события и примеры Smart-компонента icon-buttons."
---

# Icon Buttons

Идентификатор: `smart.icon-buttons`. Smart-компонент готов к использованию; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-icon-button>`.

Loader-статус: `registered`. Loader-правило: `cl-icon-buttons`.

Поставляемые ассеты:
- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/icon-buttons/css/icon-buttons.css`
- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/icon-buttons/js/icon-buttons.js`
- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/icon-buttons/template/default.css`
- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/icon-buttons/template/default.js`

## Зависимости

- `component.icon-buttons`
- `smart.icons`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `appearance` | `appearance` | `String` | `'default'` | `default`, `tonal`, `outline`, `link`, `surface`, `ghost` |
| `size` | `size` | `String` | `'1'` | `1/3`, `1/2`, `1`, `2`, `3` |
| `kind` | `kind` | `String` | `'icon'` | `icon`, `close` |
| `scheme` | `scheme` | `String` | `'primary'` | `—` |
| `segment` | `segment` | `String` | `''` | `—` |
| `icon` | `icon` | `String` | `'add'` | `—` |
| `filled` | `filled` | `Boolean` | `false` | `—` |
| `spacing` | `spacing` | `String` | `'normal'` | `['compact', 'normal', 'comfortable', 'spacious']` |
| `radius` | `radius` | `String` | `''` | `['', 'default', 'square', 'rounded']` |
| `root-class` | `rootClass` | `String` | `''` | `—` |
| `loading` | `loading` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `native-type` | `nativeType` | `String` | `'button'` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |

Прежние имена продолжают работать и считаются устаревшими: `type` — как `appearance`, `variant` — как `kind`. В новой разметке берите имена осей.

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get ariaLabel()`, `get disabled()`, `get icon()`, `get loading()`, `get nativeType()`, `get radius()`, `get rootClass()`, `get scheme()`, `get size()`, `get spacing()`, `get templateName()`, `get type()`, `get value()`, `get variant()`, `onBlur()`, `onClick()`, `onFocus()`, `onMouseEnter()`, `onMouseLeave()`, `set value()`, `setButtonAttributes()`, `setDisabled()`, `updateDom()`.

`tightness` остаётся совместимым именем для старой разметки. В новом коде
используйте `spacing`.

## События

Все события всплывают (`bubbles`) и проходят границу Shadow DOM (`composed`).

| Событие | Когда возникает |
|:---|:---|
| `sf-connected` | Элемент подключён к DOM |
| `sf-disconnected` | Элемент отключён от DOM |
| `sf-before-render` | Начало цикла отрисовки |
| `sf-after-render` | Цикл отрисовки завершён |
| `sf-updated` | Свойства или разметка обновлены |
| `sf-props-change` | Изменились наблюдаемые свойства |

## Минимальная разметка

```html
<sf-icon-button></sf-icon-button>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/icon-buttons`
- `simai/ui@d7844bb368bc327df699dbd100601f4eb7a53f77:distr/rule/rule.json#name=cl-icon-buttons`
