---
title: "Range Slider"
description: "Атрибуты, события и примеры Smart-компонента range-slider."
---

# Range Slider

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-257f66def2b8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-range-slider>` |
| Назначение | Smart-компонент Range Slider из SIMAI Framework. |
| Контракт | `smart.range-slider`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-257f66def2b8` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `min` — `string`, по умолчанию `0`.
- `max` — `string`, по умолчанию `100`.
- `start` — `string`, по умолчанию пусто.
- `value` — `string`, по умолчанию пусто.
- `multiple` — `boolean`, по умолчанию `false`.
- `step` — `string`, по умолчанию пусто.
- `margin` — `string`, по умолчанию пусто.
- `connect` — `string`, по умолчанию пусто.
- `keyboard` — `boolean`, по умолчанию `true`.
- `label` — `string`, по умолчанию `none`.
- `prefix` — `string`, по умолчанию пусто.
- `suffix` — `string`, по умолчанию пусто.
- `lower-label` — `string`, по умолчанию пусто.
- `upper-label` — `string`, по умолчанию пусто.
- `decimals` — `string`, по умолчанию пусто.
- `tooltip-position` — `string`, по умолчанию пусто.
- `text-position` — `string`, по умолчанию пусто.
- `label-position` — `string`, по умолчанию пусто.
- `disabled` — `boolean`, по умолчанию `false`.
- `root-class` — `string`, по умолчанию пусто.

### Методы

- `getSliderRoot()`
- `getValue()`
- `setValue()`
- `setDisabled()`
- `setState()`
- `onUpdateValue()`
- `onSliderUpdate()`
- `onChange()`
- `onSliderChange()`
- `onSet()`
- `onSliderSet()`
- `onStart()`
- `onSliderStart()`
- `onEnd()`
- `onSliderEnd()`

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `change` — `detail` не описан. Пользователь зафиксировал значение (конец перетаскивания, щелчок, клавиша); всплывает от корня слайдера с `values`, `value`, `handleCount` и `handle`. Значение, установленное из кода, не является изменением. Имя для привязки.
- `sf-range-slider-change` — прежнее имя `change`, приходит с тем же `detail`; подписывайтесь на `change`.
- `onSliderChange` — прежнее имя `change`, приходит с тем же `detail`; подписывайтесь на `change`.

### Доступность

- Доступное имя: рекомендуется.
- Клавиши: `Tab`.
- Фокус: Сохраняет видимый фокус на активном элементе управления.

### Минимальная разметка

```html
<sf-range-slider></sf-range-slider>
```

### Источник

- `simai/ui@257f66def2b88e315931db8b4e887979ea284b3e:distr/smart/range-slider`
- `simai/ui@257f66def2b88e315931db8b4e887979ea284b3e:distr/rule/rule.json#name=cl-range-slider`
