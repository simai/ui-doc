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

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-gallery>` |
| Назначение | Smart-компонент Gallery из SIMAI Framework. |
| Контракт | `smart.gallery`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | — |
| `modal-id` | `string` | пусто | — | — |
| `title` | `string` | `Gallery` | — | — |
| `text` | `string` | пусто | — | — |
| `open` | `boolean` | `false` | — | — |
| `current` | `number` | `1` | — | — |
| `inline` | `boolean` | `true` | — | — |
| `lightbox` | `boolean` | `true` | — | — |
| `arrows` | `boolean` | `true` | — | — |
| `dots` | `boolean` | `false` | — | — |
| `thumbs` | `boolean` | `true` | — | — |
| `loop` | `boolean` | `false` | — | — |
| `space-between` | `number` | `12` | — | — |
| `speed` | `number` | `450` | — | — |
| `button-type` | `string` | `primary` | — | — |
| `button-size` | `string` | `1` | — | — |
| `dots-type` | `string` | `primary-dark` | — | — |
| `dots-size` | `string` | `2` | — | — |
| `thumbs-class` | `string` | пусто | — | — |
| `thumb-class` | `string` | пусто | — | — |
| `slide-class` | `string` | пусто | — | — |
| `inline-class` | `string` | пусто | — | — |
| `lightbox-class` | `string` | пусто | — | — |
| `overlay` | `boolean` | `true` | — | — |
| `show-header` | `boolean` | `true` | — | — |
| `show-close` | `boolean` | `true` | — | — |
| `close-on-esc` | `boolean` | `true` | — | — |
| `close-on-overlay` | `boolean` | `true` | — | — |
| `preserve-scroll-gap` | `boolean` | `true` | — | — |
| `position` | `string` | `center` | `center`, `left`, `right`, `top`, `bottom` | — |
| `fullscreen` | `boolean` | `false` | — | — |
| `width` | `string` | пусто | — | — |
| `height` | `string` | пусто | — | — |
| `blur` | `boolean` | `false` | — | — |
| `blur-type` | `string` | `medium` | `none`, `small`, `medium`, `large` | — |
| `overlay-class` | `string` | пусто | — | — |
| `close-class` | `string` | пусто | — | — |
| `surface-class` | `string` | пусто | — | — |
| `surface-padding` | `string` | пусто | — | — |
| `panel-class` | `string` | пусто | — | — |
| `header-class` | `string` | пусто | — | — |
| `body-class` | `string` | пусто | — | — |
| `content-class` | `string` | пусто | — | — |
| `footer-class` | `string` | пусто | — | — |

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `lightbox-class` | `root-class` | работает и предупреждает | 2026-12-01 |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `getModal()` | — | не описано | — |
| `getInlineSlider()` | — | не описано | — |
| `getLightboxSlider()` | — | не описано | — |
| `open()` | — | не описано | — |
| `close()` | — | не описано | — |
| `toggle()` | — | не описано | — |
| `goTo()` | — | не описано | — |
| `next()` | — | не описано | — |
| `prev()` | — | не описано | — |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `sf-change` | не описан | — |
| `sf-close` | не описан | — |
| `sf-open` | не описан | — |

### Доступность

- Доступное имя: рекомендуется.
- Клавиши: `Tab`.
- Фокус: Сохраняет видимый фокус на активном элементе управления.

### Минимальная разметка

```html
<sf-gallery></sf-gallery>
```

### Источник

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/gallery`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-gallery`
