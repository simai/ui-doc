---
title: "Radio"
description: "Атрибуты, события и примеры Smart-компонента radio."
---

# Radio

Идентификатор: `smart.radio`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-radio>`.

Loader-статус: `registered`. Loader-правило: `cl-radio`.

Поставляемые ассеты:
- `simai/ui-smart@bda8a0a903395d26533a354bee93e842b7f528f1:smart/radio/js/radio.js`
- `simai/ui-smart@bda8a0a903395d26533a354bee93e842b7f528f1:smart/radio/template/default.js`

## Зависимости

- `component.icons`
- `component.radio`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `—` |
| `label` | `label` | `String` | `''` | `—` |
| `description` | `description` | `String` | `''` | `—` |
| `help` | `help` | `String` | `''` | `—` |
| `checked` | `checked` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
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

`get checked()`, `get description()`, `get disabled()`, `get error()`, `get help()`, `get label()`, `get name()`, `get size()`, `get state()`, `get value()`, `getInputElement()`, `isChecked()`, `onBlur()`, `onChange()`, `onFocus()`, `set checked()`, `set value()`, `setChecked()`, `setDisabled()`, `setState()`.

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
<sf-radio></sf-radio>
```

## Название варианта и группы

`name` объединяет варианты в одну машинную группу, `value` задаёт значение
варианта, `label` — его видимое название, `description` — пояснение. Общее
название вопроса не повторяйте в каждом Radio: размещайте группу внутри
`<fieldset>` с `<legend>`.

```html
<fieldset>
  <legend>Способ публикации</legend>
  <sf-radio name="publish" value="now" label="Сейчас" checked></sf-radio>
  <sf-radio name="publish" value="later" label="По расписанию"></sf-radio>
</fieldset>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@bda8a0a903395d26533a354bee93e842b7f528f1:smart/radio`
- `simai/ui@44c4ecc09ba0eea059ea47a644a330773e683790:distr/rule/rule.json#name=cl-radio`
