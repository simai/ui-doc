---
title: "Toggle"
description: "Атрибуты, события и примеры Smart-компонента toggle."
---

# Toggle

Идентификатор: `smart.toggle`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-toggle>`.

Loader-статус: `registered`. Loader-правило: `cl-toggle`.

Поставляемые ассеты:
- `simai/ui-smart@cb409217bbc267f42051852d1ab0bbcb9d68fc68:smart/toggle/js/toggle.js`
- `simai/ui-smart@cb409217bbc267f42051852d1ab0bbcb9d68fc68:smart/toggle/template/default/index.html`
- `simai/ui-smart@cb409217bbc267f42051852d1ab0bbcb9d68fc68:smart/toggle/template/default.js`

## Зависимости

- `component.icons`
- `component.toggle`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `1`, `2` |
| `kind` | `kind` | `String` | `'simple'` | `simple`, `icon`, `short` |
| `label` | `label` | `String` | `''` | `—` |
| `icon` | `icon` | `String` | `''` | `—` |
| `checked` | `checked` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `name` | `name` | `String` | `''` | `—` |
| `value` | `value` | `String` | `''` | `—` |

Прежнее имя продолжает работать и считается устаревшим: `type` — как `kind`. В новой разметке берите имена осей.

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get checked()`, `get disabled()`, `get icon()`, `get label()`, `get name()`, `get size()`, `get state()`, `get type()`, `get value()`, `getInputElement()`, `isChecked()`, `onBlur()`, `onChange()`, `onFocus()`, `set checked()`, `set disabled()`, `set value()`, `setChecked()`, `setDisabled()`, `setState()`.

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
<sf-toggle></sf-toggle>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@cb409217bbc267f42051852d1ab0bbcb9d68fc68:smart/toggle`
- `simai/ui@3bc4d241e31337ca38f5d23366c0bd221fc99e1b:distr/rule/rule.json#name=cl-toggle`
