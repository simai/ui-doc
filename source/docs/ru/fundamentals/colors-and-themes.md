---
extends: _core._layouts.documentation
section: content
title: Цвета и темы
description: "Полная базовая палитра, семантические цветовые роли и правила светлой и тёмной тем SIMAI Framework."
---

# Цвета и темы

Цветовая система разделена на два уровня:

1. **Примитивы** `--sf-{палитра}-{тон}` хранят конкретный цвет.
2. **Семантические роли** `--sf-primary`, `--sf-surface-0`,
   `--sf-on-surface` и другие описывают назначение цвета и меняются вместе с
   темой.

В интерфейсе используйте семантические роли. Примитивы нужны для настройки темы
и для редких случаев, когда требуется фиксированный цвет вне темы.

## Базовые цвета

| Токен | Значение | Назначение |
|:---|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` | Полностью прозрачный цвет |
| `--sf-white` | `#ffffff` | Белый |
| `--sf-black` | `#000000` | Чёрный |
{.table}

Для белого и чёрного также доступны варианты `--alfa-4`, `--alfa-8`,
`--alfa-12`, `--alfa-24` и `--alfa-48`.

## Палитры

Тон `98` — самый светлый, тон `5` — самый тёмный. Полная актуальная палитра:

![Палитры Neutral, Primary, Secondary, Tertiary, Error, Warning и Success](/ru/fundamentals/assets/color-palette.png)

| Тон | Neutral | Primary | Secondary | Tertiary | Info | Error | Warning | Success |
|---:|:---|:---|:---|:---|:---|:---|:---|:---|
| 98 | `#faf9fe` | `#f9f9ff` | `#f9f9ff` | `#fff7fa` | `#f9f9ff` | `#fff8f7` | `#fff8f5` | `#ecffe4` |
| 95 | `#f1f0f6` | `#edf0ff` | `#edf0ff` | `#ffebfd` | `#edf0ff` | `#ffedea` | `#ffeee2` | `#c9ffbe` |
| 90 | `#e3e2e7` | `#d7e2ff` | `#d7e2ff` | `#fdd6ff` | `#d7e2ff` | `#ffdad6` | `#ffdcc1` | `#8ffa88` |
| 85 | `#d4d4d9` | `#c2d5ff` | `#c9d4f1` | `#f9c2ff` | `#c2d5ff` | `#ffc7c0` | `#ffca9f` | `#81ec7c` |
| 80 | `#c6c6cb` | `#acc7ff` | `#bbc6e3` | `#ecb3f4` | `#acc7ff` | `#ffb4ab` | `#ffb779` | `#74dd6f` |
| 70 | `#ababb0` | `#7eabff` | `#a0abc7` | `#cf98d8` | `#7eabff` | `#ff897d` | `#fa911c` | `#58c157` |
| 60 | `#909095` | `#488fff` | `#8591ab` | `#b37ebb` | `#488fff` | `#ff5449` | `#d87900` | `#3ba53f` |
| 50 | `#76777c` | `#0073ed` | `#6c7791` | `#9765a0` | `#0073ed` | `#df362f` | `#b26300` | `#198a27` |
| 40 | `#5d5e63` | `#005bbe` | `#535e77` | `#7c4c86` | `#005bbe` | `#bb1919` | `#8f4e00` | `#006e17` |
| 35 | `#515257` | `#0050a7` | `#47526a` | `#6f4079` | `#0050a7` | `#a9040e` | `#7d4400` | `#006013` |
| 30 | `#45474b` | `#004491` | `#3c475e` | `#63356c` | `#004491` | `#93000a` | `#6c3a00` | `#00530f` |
| 25 | `#3a3b40` | `#00397c` | `#303b52` | `#562960` | `#00397c` | `#7e0007` | `#5c3000` | `#00460b` |
| 20 | `#2f3035` | `#002f67` | `#253047` | `#4a1e54` | `#002f67` | `#690005` | `#4c2700` | `#003908` |
| 15 | `#24262a` | `#002453` | `#1a263b` | `#3e1249` | `#002453` | `#540003` | `#3d1e00` | `#002d05` |
| 10 | `#1a1b1f` | `#001a40` | `#101b31` | `#32053e` | `#001a40` | `#410002` | `#2e1500` | `#002203` |
| 5 | `#0f1115` | `#00102c` | `#051126` | `#23002d` | `#00102c` | `#2d0001` | `#1f0c00` | `#001501` |
{.table}

Токен образуется из имени палитры и тона: например, `--sf-primary-40` или
`--sf-warning-90`. У тонов `90` и `50` есть полупрозрачные варианты; набор
суффиксов зависит от тона: `--alfa-4`, `8`, `10`, `12`, `15`, `16`, `20`,
`24`, `28`, `30`, `32`, `36`, `40`, `44` или `48`.

### Варианты нейтральной палитры

По умолчанию используется `grey-primary`: нейтральная палитра с лёгким
оттенком основного цвета. На корневом элементе страницы можно выбрать
`neutral-grey-blue` или `neutral-grey`. Не смешивайте разные варианты внутри
одной страницы: нейтральные роли формируют общий фон и контраст всего
интерфейса.

![Три варианта нейтральной палитры: grey-primary, grey-blue и grey](/ru/fundamentals/assets/neutral-palettes.png)

## Семантические роли

| Семейство | Основные роли |
|:---|:---|
| Акцент | `primary`, `secondary`, `tertiary`, `neutral`, `info`, `success`, `warning`, `error` |
| Состояния | `{role}-hover`, `{role}-active` |
| Контейнеры | `{role}-container`, `{role}-container-hover`, `{role}-container-active` |
| Контрастное содержимое | `on-{role}`, `on-{role}-container`, `on-{role}-container-graphic` |
| Контуры | `outline`, `outline-variant`, `outline-{role}` |
| Поверхности | `surface-0`, `surface-1`, `surface-container`, `surface-overlay`, `surface-inverse` |
| Текст на поверхности | `on-surface`, `on-surface-variant`, `on-surface-muted`, `on-surface-inverse` |
| Служебные | `link`, `link-hover`, `link-active`, `link-visited`, `focus`, `mark`, `code`, `disable`, `on-disable` |
{.table}

Все имена используются с префиксом `--sf-`. Например:
`--sf-surface-container`, `--sf-on-primary` и `--sf-outline-error`.

### Как роли выглядят в интерфейсе

Иллюстрации ниже показывают назначение ролей, а не готовые компоненты.
Конкретный внешний вид компонента может отличаться, но смысл пары
«фон / содержимое на фоне» сохраняется.

#### Акцентные и статусные роли

`Primary` выделяет главное действие или выбранное состояние.

![Примеры применения роли Primary в интерфейсе](/ru/fundamentals/assets/role-primary-usage.png)

`Error`, `Warning` и `Success` обозначают соответственно ошибку,
предупреждение и успешный результат. Для текста и иконок на цветном фоне
используйте соответствующую роль `on-*`.

![Примеры применения роли Error](/ru/fundamentals/assets/role-error-usage.png)

![Примеры применения роли Warning](/ru/fundamentals/assets/role-warning-usage.png)

![Примеры применения роли Success](/ru/fundamentals/assets/role-success-usage.png)

#### Нейтральные и служебные роли

`Surface` формирует фон страницы, карточек и вложенных областей.

![Примеры применения ролей Surface](/ru/fundamentals/assets/role-surface-usage.png)

`Disable` снижает визуальный приоритет недоступного элемента, а `Outline`
отделяет поля, контролы и области без лишнего цветового акцента.

![Примеры применения роли Disable](/ru/fundamentals/assets/role-disable-usage.png)

![Примеры применения роли Outline](/ru/fundamentals/assets/role-outline-usage.png)

`Link`, `Focus` и `Mark` отвечают за ссылки, видимый клавиатурный фокус и
выделение фрагмента текста.

![Примеры применения роли Link](/ru/fundamentals/assets/role-link-usage.png)

![Примеры применения ролей Focus и Mark](/ru/fundamentals/assets/role-focus-mark-usage.png)

## Светлая и тёмная темы

Темы применяются классами `.theme-light` и `.theme-dark`. Они сохраняют имена
семантических ролей, но связывают их с разными тонами палитры.

```html
<section class="theme-light bg-surface-0 color-on-surface">
    Светлая тема
</section>

<section class="theme-dark bg-surface-0 color-on-surface">
    Тёмная тема
</section>
```

Например, `--sf-primary` использует тон `40` в светлой теме и тон `80` в
тёмной; `--sf-surface-0` переключается с белого на `neutral-5`. Поэтому
контрастные пары `primary`/`on-primary` и `surface`/`on-surface` следует
использовать вместе.

## Применение утилитами

- `color-primary` — цвет текста или иконки;
- `bg-surface-container` — фон контейнера;
- `border-warning` — цвет границы;
- `outline-error` — цвет outline.

Для проектной темы переопределяйте палитры и роли в отдельном слое CSS, не
заменяя значения непосредственно в собранном ядре.
