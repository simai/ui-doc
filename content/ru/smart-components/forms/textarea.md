---
title: "Textarea"
description: "Атрибуты, события и примеры Smart-компонента textarea."
---

# Textarea

Идентификатор: `smart.textarea`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-textarea>`.

Loader-статус: `registered`. Loader-правило: `cl-textarea`.

Поставляемые ассеты:
- `simai/ui-smart@c184f5944ae60d68f3f34d54773c051b35b3d9f8:smart/textarea/js/textarea.js`
- `simai/ui-smart@c184f5944ae60d68f3f34d54773c051b35b3d9f8:smart/textarea/template/default.js`

## Зависимости

- `component.textarea`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `1/3`, `1/2`, `1`, `2`, `3` |
| `appearance` | `appearance` | `String` | `'bordered'` | `bordered`, `filled` |
| `label` | `label` | `String` | `''` | `—` |
| `required` | `required` | `Boolean` | `false` | `—` |
| `placeholder` | `placeholder` | `String` | `''` | `—` |
| `hint` | `hint` | `String` | `''` | `—` |
| `value` | `value` | `String` | `''` | `—` |
| `name` | `name` | `String` | `''` | `—` |
| `rows` | `rows` | `Number` | `3` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `error` | `error` | `Boolean` | `false` | `—` |
| `mask` | `mask` | `Boolean` | `false` | `—` |
| `mask-pattern` | `maskPattern` | `String` | `''` | `—` |
| `mask-options` | `maskOptions` | `String` | `''` | `—` |

Прежнее имя продолжает работать и считается устаревшим: `type` — как `appearance`. В новой разметке берите имена осей.

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get disabled()`, `get error()`, `get hint()`, `get label()`, `get mask()`, `get maskOptions()`, `get maskPattern()`, `get name()`, `get placeholder()`, `get required()`, `get rows()`, `get size()`, `get state()`, `get type()`, `get value()`, `set value()`, `setState()`.

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
<sf-textarea></sf-textarea>
```

## Имя, подпись и пояснение

`name` — машинное имя поля, `label` — его видимая подпись, `placeholder` —
пример ожидаемого ввода, а `hint` — постоянное пояснение под полем. Placeholder
исчезает после начала ввода и не заменяет подпись.

```html
<sf-textarea
  name="comment"
  label="Комментарий"
  placeholder="Опишите задачу"
  hint="До 500 символов"
  rows="4">
</sf-textarea>
```

В обычной форме оставляйте подпись видимой. Если продуктовая композиция
скрывает её в компактной панели, текст должен оставаться доступным экранному
диктору; отдельный вызов компонента для этого не нужен.

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление
клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает
source-контракт, но не заменяет сценарную проверку доступности.

## Источник

- `simai/ui-smart@c184f5944ae60d68f3f34d54773c051b35b3d9f8:smart/textarea`
- `simai/ui@75cbee9193be4d59d85f5d635203932bd236dae4:distr/rule/rule.json#name=cl-textarea`
