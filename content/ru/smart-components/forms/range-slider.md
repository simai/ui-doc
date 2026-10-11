---
title: "Range Slider"
description: "Атрибуты, события и примеры Smart-компонента range-slider."
---

# Range Slider

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-range-slider>` |
| Назначение | Smart-компонент Range Slider из SIMAI Framework. |
| Контракт | `smart.range-slider`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | — |
| `min` | `string` | `0` | — | — |
| `max` | `string` | `100` | — | — |
| `start` | `string` | пусто | — | — |
| `value` | `string` | пусто | — | — |
| `multiple` | `boolean` | `false` | — | — |
| `step` | `string` | пусто | — | — |
| `margin` | `string` | пусто | — | — |
| `connect` | `string` | пусто | — | — |
| `keyboard` | `boolean` | `true` | — | — |
| `label` | `string` | `none` | — | — |
| `prefix` | `string` | пусто | — | — |
| `suffix` | `string` | пусто | — | — |
| `lower-label` | `string` | пусто | — | — |
| `upper-label` | `string` | пусто | — | — |
| `decimals` | `string` | пусто | — | — |
| `tooltip-position` | `string` | пусто | — | — |
| `text-position` | `string` | пусто | — | — |
| `label-position` | `string` | пусто | — | — |
| `disabled` | `boolean` | `false` | — | — |
| `root-class` | `string` | пусто | — | — |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `getSliderRoot()` | — | не описано | — |
| `getValue()` | — | не описано | — |
| `setValue()` | — | не описано | — |
| `setDisabled()` | — | не описано | — |
| `setState()` | — | не описано | — |
| `onUpdateValue()` | — | не описано | — |
| `onSliderUpdate()` | — | не описано | — |
| `onChange()` | — | не описано | — |
| `onSliderChange()` | — | не описано | — |
| `onSet()` | — | не описано | — |
| `onSliderSet()` | — | не описано | — |
| `onStart()` | — | не описано | — |
| `onSliderStart()` | — | не описано | — |
| `onEnd()` | — | не описано | — |
| `onSliderEnd()` | — | не описано | — |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `change` | не описан | Пользователь зафиксировал значение (конец перетаскивания, щелчок, клавиша); всплывает от корня слайдера с `values`, `value`, `handleCount` и `handle`. Значение, установленное из кода, не является изменением. Имя для привязки. |
| `sf-range-slider-change` | не описан | Прежнее имя `change`: приходит с тем же `detail`, подписывайтесь на `change` |
| `onSliderChange` | не описан | Прежнее имя `change`: приходит с тем же `detail`, подписывайтесь на `change` |

### Доступность

- Доступное имя: рекомендуется.
- Клавиши: `Tab`.
- Фокус: Сохраняет видимый фокус на активном элементе управления.

### Минимальная разметка

```html
<sf-range-slider></sf-range-slider>
```

### Источник

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/range-slider`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-range-slider`
