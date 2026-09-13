---
title: "Steps"
description: "Атрибуты, события и примеры Smart-компонента steps."
---

# Steps

Идентификатор: `smart.steps`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — экспериментальный.

## Теги и подключение

Custom Elements: `<sf-steps>`.

Loader-статус: `registered`. Loader-правило: `cl-steps`.

Поставляемые ассеты:
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/steps/js/steps.js`
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/steps/template/default.js`

## Зависимости

- `component.icons`
- `component.step`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `—` |
| `items` | `items` | `String` | `[]` | `—` |
| `current` | `current` | `Number` | `0` | `—` |
| `error-step` | `errorStep` | `String` | `''` | `—` |
| `separator-icon` | `separatorIcon` | `String` | `'chevron_right'` | `—` |
| `aria-label` | `ariaLabel` | `String` | `'Steps'` | `—` |
| `completed-label` | `completedLabel` | `String` | `'Completed'` | `—` |
| `error-label` | `errorLabel` | `String` | `'Error'` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get computedItems()`, `get current()`, `get errorStep()`, `get items()`, `get separatorIcon()`, `get size()`, `get state()`, `goToStep()`, `onStepChange()`, `setState()`.

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
| `sf-step-change` | Компонент-специфичное событие из source-класса |

## Минимальная разметка

```html
<sf-steps
  aria-label="Этапы публикации"
  completed-label="Завершено"
  error-label="Ошибка"
  items="Черновик|Проверка|Публикация"
></sf-steps>
```

## Доступность

Корень рендерится как именованная группа, а каждый доступный шаг — как нативная
кнопка `type="button"`. Enter и Space работают нативно; отключённый шаг получает
`disabled` и исключается из Tab-порядка. Текущий шаг использует
`aria-current="step"`.

Всегда локализуйте `aria-label`, `completed-label` и `error-label`: последние
два значения добавляются к доступному имени завершённого или ошибочного шага.
Иконки и разделители декоративны и не заменяют текст состояния. Приложение
остаётся владельцем перехода, валидации и основного управления «Назад/Далее».

## Источник

- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/steps`
- `simai/ui@1e886550a147bf63d7c3a4440af5e5855aaee485:distr/rule/rule.json#name=cl-steps`
