---
title: "Switch"
description: "Атрибуты, события и примеры Smart-компонента switch."
---

# Switch

Идентификатор: `smart.switch`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-switch>`.

Loader-статус: `registered`. Loader-правило: `cl-switch`.

Поставляемые ассеты:
- `simai/ui-smart@a8c44c8e30d07836df80b3f54630cae32f52b9ba:smart/switch/js/switch.js`
- `simai/ui-smart@a8c44c8e30d07836df80b3f54630cae32f52b9ba:smart/switch/template/default.js`

## Зависимости

- `component.icons`
- `component.switch`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `1/2`, `1`, `2` |
| `label` | `label` | `String` | `''` | `—` |
| `description` | `description` | `String` | `''` | `—` |
| `help` | `help` | `String` | `''` | `—` |
| `checked` | `checked` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `name` | `name` | `String` | `''` | `—` |
| `value` | `value` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get checked()`, `get description()`, `get disabled()`, `get help()`, `get label()`, `get name()`, `get size()`, `get state()`, `get value()`, `getInputElement()`, `isChecked()`, `onBlur()`, `onChange()`, `onFocus()`, `set checked()`, `set disabled()`, `set value()`, `setChecked()`, `setDisabled()`, `setState()`.

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
<sf-switch></sf-switch>
```

## Название настройки и пояснение

`name` — машинное имя настройки, `value` — отправляемое значение, `label` —
видимое название управляемой настройки, `description` — дополнительное
пояснение. Подпись должна называть состояние или возможность, а не повторять
команды «включить» и «выключить».

```html
<sf-switch
  name="notifications"
  value="enabled"
  label="Уведомления"
  description="Сообщать о завершении фоновых задач">
</sf-switch>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@a8c44c8e30d07836df80b3f54630cae32f52b9ba:smart/switch`
- `simai/ui@6f9137222dbd72b4e23752139f79502c26d29675:distr/rule/rule.json#name=cl-switch`
