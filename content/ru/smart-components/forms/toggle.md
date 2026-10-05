---
title: "Toggle"
description: "Атрибуты, события и примеры Smart-компонента toggle."
---

# Toggle

**Заменён переключателем.** Карта переноса — на странице
[Toggle](/ru/components/forms/toggle/). Компонент остаётся рабочим
для уже написанной разметки и уедет в следующей мажорной версии.

Идентификатор: `smart.toggle`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-toggle>`.

Loader-статус: `registered`. Loader-правило: `cl-toggle`.

Поставляемые ассеты:
- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/toggle/js/toggle.js`
- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/toggle/template/default/index.html`
- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/toggle/template/default.js`

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

- `simai/ui-smart@72bfb352642fc2d66471761755c5cd670d336a32:smart/toggle`
- `simai/ui@d7844bb368bc327df699dbd100601f4eb7a53f77:distr/rule/rule.json#name=cl-toggle`
