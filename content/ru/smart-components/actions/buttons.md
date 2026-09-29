---
title: "Buttons"
description: "Атрибуты, события и примеры Smart-компонента buttons."
---

# Buttons

Идентификатор: `smart.buttons`. Smart-компонент готов к использованию; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-button>`.

Loader-статус: `registered`. Loader-правило: `cl-buttons`.

Поставляемые ассеты:
- `simai/ui-smart@fff46ec6a0dcf8b6fbc071eef86f689b2baeb9ef:smart/buttons/js/buttons.js`
- `simai/ui-smart@fff46ec6a0dcf8b6fbc071eef86f689b2baeb9ef:smart/buttons/template/default.js`

## Зависимости

- `component.buttons`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `"default"` | `—` |
| `size` | `size` | `String` | `"1"` | `1/3`, `1/2`, `1`, `2`, `3` |
| `appearance` | `appearance` | `String` | `'default'` | `default`, `tonal`, `outline`, `link`, `surface`, `ghost` |
| `scheme` | `scheme` | `String` | `"primary"` | `—` |
| `text-position` | `textPosition` | `String` | `'center'` | `—` |
| `text` | `text` | `String` | `""` | `—` |
| `segment` | `segment` | `String` | `""` | `—` |
| `icon` | `icon` | `String` | `""` | `—` |
| `icon-start` | `iconStart` | `String` | `""` | `—` |
| `icon-end` | `iconEnd` | `String` | `""` | `—` |
| `icon-position` | `iconPosition` | `String` | `"start"` | `—` |
| `spacing` | `spacing` | `String` | `"normal"` | `["compact", "normal", "comfortable", "spacious"]` |
| `radius` | `radius` | `String` | `""` | `["", "default", "square", "rounded"]` |
| `root-class` | `rootClass` | `String` | `""` | `—` |
| `loading` | `loading` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `native-type` | `nativeType` | `String` | `"button"` | `—` |
| `aria-label` | `ariaLabel` | `String` | `""` | `—` |

Прежнее имя продолжает работать и считается устаревшим: `type` — как `appearance`. В новой разметке берите имена осей.

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`createIcon()`, `get ariaLabel()`, `get disabled()`, `get icon()`, `get iconStart()`, `get iconEnd()`, `get iconPosition()`, `get loading()`, `get nativeType()`, `get radius()`, `get rootClass()`, `get scheme()`, `get size()`, `get spacing()`, `get templateName()`, `get text()`, `get type()`, `get value()`, `onBlur()`, `onClick()`, `onFocus()`, `onMouseEnter()`, `onMouseLeave()`, `set value()`, `setDisabled()`.

Для новой разметки используйте логические имена `icon-start`, `icon-end` и
`spacing`. Они корректно работают в LTR и RTL. Прежние `icon-left`,
`icon-right` и `tightness` поддерживаются для совместимости.

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
<sf-button></sf-button>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@fff46ec6a0dcf8b6fbc071eef86f689b2baeb9ef:smart/buttons`
- `simai/ui@0a8566182f3865bb3f8081332f2deb6755a54b54:distr/rule/rule.json#name=cl-buttons`
