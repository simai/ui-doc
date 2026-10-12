---
title: "Галерея"
description: "Единая коллекция материалов с просмотром в строке и в модальном окне."
profile: reference
---

# Галерея

`<sf-gallery>` связывает встроенный Smart Slider с модальным просмотром и
хранит одно текущее положение для обоих представлений.

## Пример

:::example {id="components/gallery/overview" label="Результат"}
:::

## Особенности применения

Каждый значимый элемент `slot="slide"` становится одним материалом. Для
Составной карточки используйте один корневой `figure` или другой элемент.
Текущее положение нумеруется с единицы и доступно через `current`, `goTo()`,
`next()` и `prev()`. Открытие и закрытие модального окна не создаёт второе
независимое состояние и не сбрасывает встроенный Slider.

Галерея наследует токены расстояний, движение, reduced motion и защиту фокуса
обычного Slider. Подпись и альтернативный текст принадлежат содержимому;
компонент не придумывает их по имени файла.

## Только встроенный просмотр

`lightbox="false"` оставляет галерею в потоке страницы. Этот вариант подходит,
когда увеличение не нужно или содержимое уже находится в крупной области.

:::example {id="components/gallery/inline" label="Результат"}
:::

## Просмотр по группе ссылок

Одинаковое значение `data-sf-gallery` объединяет существующие ссылки в одну
галерею. Такой режим удобен для готовой сетки миниатюр: Loader создаёт один
скрытый Smart-компонент, а исходная разметка остаётся ссылками.

:::example {id="components/gallery/delegated" label="Результат"}
:::

## Настройка просмотра

`inline`, `lightbox`, `thumbs`, `dots`, `arrows` и `loop` меняют способ
просмотра, не меняя состав коллекции. Параметры Modal — заголовок, закрытие,
позиция и размеры — задаются атрибутами Gallery. Внешнее оформление передавайте
через `root-class`, `inline-class`, `lightbox-class` и другие предусмотренные
классовые проекции, используя только токены и утилиты Framework.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-257f66def2b8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-gallery>` |
| Назначение | Smart-компонент Gallery из SIMAI Framework. |
| Контракт | `smart.gallery`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-257f66def2b8` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `modal-id` — `string`, по умолчанию пусто.
- `title` — `string`, по умолчанию `Gallery`.
- `text` — `string`, по умолчанию пусто.
- `open` — `boolean`, по умолчанию `false`.
- `current` — `number`, по умолчанию `1`.
- `inline` — `boolean`, по умолчанию `true`.
- `lightbox` — `boolean`, по умолчанию `true`.
- `arrows` — `boolean`, по умолчанию `true`.
- `dots` — `boolean`, по умолчанию `false`.
- `thumbs` — `boolean`, по умолчанию `true`.
- `loop` — `boolean`, по умолчанию `false`.
- `space-between` — `number`, по умолчанию `12`.
- `speed` — `number`, по умолчанию `450`.
- `button-type` — `string`, по умолчанию `primary`.
- `button-size` — `string`, по умолчанию `1`.
- `dots-type` — `string`, по умолчанию `primary-dark`.
- `dots-size` — `string`, по умолчанию `2`.
- `thumbs-class` — `string`, по умолчанию пусто.
- `thumb-class` — `string`, по умолчанию пусто.
- `slide-class` — `string`, по умолчанию пусто.
- `inline-class` — `string`, по умолчанию пусто.
- `lightbox-class` — `string`, по умолчанию пусто.
- `overlay` — `boolean`, по умолчанию `true`.
- `show-header` — `boolean`, по умолчанию `true`.
- `show-close` — `boolean`, по умолчанию `true`.
- `close-on-esc` — `boolean`, по умолчанию `true`.
- `close-on-overlay` — `boolean`, по умолчанию `true`.
- `preserve-scroll-gap` — `boolean`, по умолчанию `true`.
- `position` — `string`, по умолчанию `center`, значения: `center`, `left`, `right`, `top`, `bottom`.
- `fullscreen` — `boolean`, по умолчанию `false`.
- `width` — `string`, по умолчанию пусто.
- `height` — `string`, по умолчанию пусто.
- `blur` — `boolean`, по умолчанию `false`.
- `blur-type` — `string`, по умолчанию `medium`, значения: `none`, `small`, `medium`, `large`.
- `overlay-class` — `string`, по умолчанию пусто.
- `close-class` — `string`, по умолчанию пусто.
- `surface-class` — `string`, по умолчанию пусто.
- `surface-padding` — `string`, по умолчанию пусто.
- `panel-class` — `string`, по умолчанию пусто.
- `header-class` — `string`, по умолчанию пусто.
- `body-class` — `string`, по умолчанию пусто.
- `content-class` — `string`, по умолчанию пусто.
- `footer-class` — `string`, по умолчанию пусто.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `lightbox-class` | `root-class` | работает и предупреждает | 2026-12-01 |

### Методы

- `getModal()`
- `getInlineSlider()`
- `getLightboxSlider()`
- `open()`
- `close()`
- `toggle()`
- `goTo()`
- `next()`
- `prev()`

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `sf-change` — `detail` не описан.
- `sf-close` — `detail` не описан.
- `sf-open` — `detail` не описан.

### Доступность

- Доступное имя: рекомендуется.
- Клавиши: `Tab`.
- Фокус: Сохраняет видимый фокус на активном элементе управления.

### Минимальная разметка

```html
<sf-gallery></sf-gallery>
```

### Источник

- `simai/ui@257f66def2b88e315931db8b4e887979ea284b3e:distr/smart/gallery`
- `simai/ui@257f66def2b88e315931db8b4e887979ea284b3e:distr/rule/rule.json#name=cl-gallery`
