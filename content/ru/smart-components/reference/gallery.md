---
title: "Gallery"
description: "API и runtime-контракт Smart-компонента gallery в SIMAI Framework 5.4.0 candidate."
---

# Gallery

Идентификатор: `smart.gallery`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-gallery>`.

Loader-статус: `registered`. Loader-правило: `cl-gallery`.

Поставляемые ассеты:
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/gallery/js/gallery.js`
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/gallery/template/default.js`

## Зависимости

- `smart.modal`
- `smart.slider`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `modal-id` | `modalId` | `String` | `''` | `—` |
| `title` | `title` | `String` | `'Gallery'` | `—` |
| `text` | `text` | `String` | `''` | `—` |
| `open` | `open` | `Boolean` | `false` | `—` |
| `current` | `current` | `Number` | `1` | `—` |
| `inline` | `inline` | `Boolean` | `true` | `—` |
| `lightbox` | `lightbox` | `Boolean` | `true` | `—` |
| `arrows` | `arrows` | `Boolean` | `true` | `—` |
| `dots` | `dots` | `Boolean` | `false` | `—` |
| `thumbs` | `thumbs` | `Boolean` | `true` | `—` |
| `loop` | `loop` | `Boolean` | `false` | `—` |
| `space-between` | `spaceBetween` | `Number` | `12` | `—` |
| `speed` | `speed` | `Number` | `450` | `—` |
| `button-type` | `buttonType` | `String` | `'primary'` | `—` |
| `button-size` | `buttonSize` | `String` | `'1'` | `—` |
| `dots-type` | `dotsType` | `String` | `'primary-dark'` | `—` |
| `dots-size` | `dotsSize` | `String` | `'2'` | `—` |
| `thumbs-class` | `thumbsClass` | `String` | `''` | `—` |
| `thumb-class` | `thumbClass` | `String` | `''` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |
| `slide-class` | `slideClass` | `String` | `''` | `—` |
| `inline-class` | `inlineClass` | `String` | `''` | `—` |
| `lightbox-class` | `lightboxClass` | `String` | `''` | `—` |
| `overlay` | `overlay` | `Boolean` | `true` | `—` |
| `show-header` | `showHeader` | `Boolean` | `true` | `—` |
| `show-close` | `showClose` | `Boolean` | `true` | `—` |
| `close-on-esc` | `closeOnEsc` | `Boolean` | `true` | `—` |
| `close-on-overlay` | `closeOnOverlay` | `Boolean` | `true` | `—` |
| `preserve-scroll-gap` | `preserveScrollGap` | `Boolean` | `true` | `—` |
| `position` | `position` | `String` | `'center'` | `['center', 'left', 'right', 'top', 'bottom']` |
| `fullscreen` | `fullscreen` | `Boolean` | `false` | `—` |
| `width` | `width` | `String` | `''` | `—` |
| `height` | `height` | `String` | `''` | `—` |
| `blur` | `blur` | `Boolean` | `false` | `—` |
| `blur-type` | `blurType` | `String` | `'medium'` | `['none', 'small', 'medium', 'large']` |
| `overlay-class` | `overlayClass` | `String` | `''` | `—` |
| `close-class` | `closeClass` | `String` | `''` | `—` |
| `surface-class` | `surfaceClass` | `String` | `''` | `—` |
| `surface-padding` | `surfacePadding` | `String` | `''` | `—` |
| `panel-class` | `panelClass` | `String` | `''` | `—` |
| `header-class` | `headerClass` | `String` | `''` | `—` |
| `body-class` | `bodyClass` | `String` | `''` | `—` |
| `content-class` | `contentClass` | `String` | `''` | `—` |
| `footer-class` | `footerClass` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`close()`, `connectedCallback()`, `disconnectedCallback()`, `get current()`, `get modalId()`, `get openState()`, `get slidesTotal()`, `get state()`, `getInlineSlider()`, `getLightboxSlider()`, `getModal()`, `goTo()`, `next()`, `open()`, `prev()`, `toggle()`, `updateDom()`.

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
| `sf-change` | Компонент-специфичное событие из source-класса |
| `sf-close` | Компонент-специфичное событие из source-класса |
| `sf-open` | Компонент-специфичное событие из source-класса |

## Минимальная разметка

```html
<sf-gallery></sf-gallery>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/gallery`
- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=cl-gallery`
