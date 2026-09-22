---
title: "Checkbox"
description: "Атрибуты, события и примеры Smart-компонента checkbox."
---

# Checkbox

Идентификатор: `smart.checkbox`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-checkbox>`.

Loader-статус: `registered`. Loader-правило: `cl-checkbox`.

Поставляемые ассеты:
- `simai/ui-smart@121e8882d016263dfb455f5da103f618b0d4db65:smart/checkbox/css/checkbox.css`
- `simai/ui-smart@121e8882d016263dfb455f5da103f618b0d4db65:smart/checkbox/js/checkbox.js`
- `simai/ui-smart@121e8882d016263dfb455f5da103f618b0d4db65:smart/checkbox/template/default.css`
- `simai/ui-smart@121e8882d016263dfb455f5da103f618b0d4db65:smart/checkbox/template/default.js`

## Зависимости

- `component.checkbox`
- `smart.icons`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `—` |
| `label` | `label` | `String` | `''` | `—` |
| `description` | `description` | `String` | `''` | `—` |
| `help` | `help` | `String` | `''` | `—` |
| `position` | `position` | `String` | `'start'` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |
| `checked` | `checked` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `indeterminate` | `indeterminate` | `Boolean` | `false` | `—` |
| `name` | `name` | `String` | `''` | `—` |
| `value` | `value` | `String` | `''` | `—` |
| `error` | `error` | `Boolean` | `false` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get checked()`, `get description()`, `get disabled()`, `get error()`, `get help()`, `get indeterminate()`, `get label()`, `get name()`, `get size()`, `get state()`, `get stateIcon()`, `get value()`, `getInputElement()`, `isChecked()`, `onBlur()`, `onChange()`, `onFocus()`, `set checked()`, `set value()`, `setBooleanStateAttribute()`, `setChecked()`, `setDisabled()`, `setIndeterminate()`, `setState()`, `syncInputState()`.

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
<sf-checkbox></sf-checkbox>
```

## Название варианта и пояснение

`name` — машинное имя отправляемого поля, `value` — его машинное значение,
`label` — видимое название варианта, `description` — дополнительное пояснение.
`help` задаёт справочную иконку, а не заменяет название.

```html
<sf-checkbox
  name="notifications"
  value="email"
  label="Уведомления по почте"
  description="Отправлять важные изменения на рабочий адрес">
</sf-checkbox>
```

Для нескольких связанных флажков общее название вопроса задавайте снаружи
через нативные `<fieldset>` и `<legend>`. Каждый компонент при этом сохраняет
собственный `label`.

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@121e8882d016263dfb455f5da103f618b0d4db65:smart/checkbox`
- `simai/ui@1f1c9d42d964321ba97c3bdfbea66048946886f7:distr/rule/rule.json#name=cl-checkbox`
