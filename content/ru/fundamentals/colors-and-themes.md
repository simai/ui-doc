---
title: "Цвета и темы"
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

Для белого и чёрного также доступны варианты `--alfa-4`, `--alfa-8`,
`--alfa-12`, `--alfa-24` и `--alfa-48`.

## Палитры

Тон `98` — самый светлый, тон `5` — самый тёмный. Полная актуальная палитра:

![Палитры Neutral, Primary, Secondary, Tertiary, Error, Warning и Success](/ru/assets/reference/image-02.png){ratio=auto fit=contain}

### Основные и акцентные палитры

| Тон | Neutral | Primary | Secondary | Tertiary | Info |
|---:|:---|:---|:---|:---|:---|
| 98 | `#faf9fe` | `#f9f9ff` | `#f9f9ff` | `#fff7fa` | `#f9f9ff` |
| 95 | `#f1f0f6` | `#edf0ff` | `#edf0ff` | `#ffebfd` | `#edf0ff` |
| 90 | `#e3e2e7` | `#d7e2ff` | `#d7e2ff` | `#fdd6ff` | `#d7e2ff` |
| 85 | `#d4d4d9` | `#c2d5ff` | `#c9d4f1` | `#f9c2ff` | `#c2d5ff` |
| 80 | `#c6c6cb` | `#acc7ff` | `#bbc6e3` | `#ecb3f4` | `#acc7ff` |
| 70 | `#ababb0` | `#7eabff` | `#a0abc7` | `#cf98d8` | `#7eabff` |
| 60 | `#909095` | `#488fff` | `#8591ab` | `#b37ebb` | `#488fff` |
| 50 | `#76777c` | `#0073ed` | `#6c7791` | `#9765a0` | `#0073ed` |
| 40 | `#5d5e63` | `#005bbe` | `#535e77` | `#7c4c86` | `#005bbe` |
| 35 | `#515257` | `#0050a7` | `#47526a` | `#6f4079` | `#0050a7` |
| 30 | `#45474b` | `#004491` | `#3c475e` | `#63356c` | `#004491` |
| 25 | `#3a3b40` | `#00397c` | `#303b52` | `#562960` | `#00397c` |
| 20 | `#2f3035` | `#002f67` | `#253047` | `#4a1e54` | `#002f67` |
| 15 | `#24262a` | `#002453` | `#1a263b` | `#3e1249` | `#002453` |
| 10 | `#1a1b1f` | `#001a40` | `#101b31` | `#32053e` | `#001a40` |
| 5 | `#0f1115` | `#00102c` | `#051126` | `#23002d` | `#00102c` |

### Статусные палитры

| Тон | Error | Warning | Success |
|---:|:---|:---|:---|
| 98 | `#fff8f7` | `#fff8f5` | `#ecffe4` |
| 95 | `#ffedea` | `#ffeee2` | `#c9ffbe` |
| 90 | `#ffdad6` | `#ffdcc1` | `#8ffa88` |
| 85 | `#ffc7c0` | `#ffca9f` | `#81ec7c` |
| 80 | `#ffb4ab` | `#ffb779` | `#74dd6f` |
| 70 | `#ff897d` | `#fa911c` | `#58c157` |
| 60 | `#ff5449` | `#d87900` | `#3ba53f` |
| 50 | `#df362f` | `#b26300` | `#198a27` |
| 40 | `#bb1919` | `#8f4e00` | `#006e17` |
| 35 | `#a9040e` | `#7d4400` | `#006013` |
| 30 | `#93000a` | `#6c3a00` | `#00530f` |
| 25 | `#7e0007` | `#5c3000` | `#00460b` |
| 20 | `#690005` | `#4c2700` | `#003908` |
| 15 | `#540003` | `#3d1e00` | `#002d05` |
| 10 | `#410002` | `#2e1500` | `#002203` |
| 5 | `#2d0001` | `#1f0c00` | `#001501` |

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

![Три варианта нейтральной палитры: grey-primary, grey-blue и grey](/ru/assets/reference/image-03.png){ratio=auto fit=contain}

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

Все имена используются с префиксом `--sf-`. Например:
`--sf-surface-container`, `--sf-on-primary` и `--sf-outline-error`.

Для основного текста на поверхности используйте `.color-on-surface`, а для
вспомогательного — `.color-on-surface-variant`. Токен
`--sf-on-surface-muted` задаёт ещё более слабый уровень, но отдельная утилита
для него сейчас не генерируется. Подробности и пример приведены на странице
[«Цвет текста»](/ru/utilities/text-formatting/text-color/).

### Живые образцы ролей

Эти образцы построены из переменных текущей версии SIMAI Framework. Переключите
светлую и тёмную тему в настройках документации: фон и контрастный текст каждой
карточки изменятся автоматически.

:::example {label="Результат"}
```html
<div class="sf-doc-color-role-grid">
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-primary); --sf-doc-role-color: var(--sf-on-primary)">
        <strong>Primary</strong>
        <code>--sf-primary / --sf-on-primary</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-secondary); --sf-doc-role-color: var(--sf-on-secondary)">
        <strong>Secondary</strong>
        <code>--sf-secondary / --sf-on-secondary</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-tertiary); --sf-doc-role-color: var(--sf-on-tertiary)">
        <strong>Tertiary</strong>
        <code>--sf-tertiary / --sf-on-tertiary</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-info); --sf-doc-role-color: var(--sf-on-info)">
        <strong>Info</strong>
        <code>--sf-info / --sf-on-info</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-success); --sf-doc-role-color: var(--sf-on-success)">
        <strong>Success</strong>
        <code>--sf-success / --sf-on-success</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-warning); --sf-doc-role-color: var(--sf-on-warning)">
        <strong>Warning</strong>
        <code>--sf-warning / --sf-on-warning</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-error); --sf-doc-role-color: var(--sf-on-error)">
        <strong>Error</strong>
        <code>--sf-error / --sf-on-error</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-0); --sf-doc-role-color: var(--sf-on-surface)">
        <strong>Surface 0</strong>
        <code>--sf-surface-0 / --sf-on-surface</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-container); --sf-doc-role-color: var(--sf-on-surface)">
        <strong>Surface Container</strong>
        <code>--sf-surface-container / --sf-on-surface</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-inverse); --sf-doc-role-color: var(--sf-on-surface-inverse)">
        <strong>Surface Inverse</strong>
        <code>--sf-surface-inverse / --sf-on-surface-inverse</code>
    </div>
</div>
```
```css
.sf-doc-color-role-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 1rem;
}

.sf-doc-color-role {
  display: grid;
  gap: .5rem;
  padding: 1.25rem;
  border-radius: 1rem;
  color: var(--sf-doc-role-color);
  background: var(--sf-doc-role-background);
}

.sf-doc-color-role code {
  color: inherit;
  overflow-wrap: anywhere;
}
```
:::

Палитры-примитивы в таблице выше не меняются при переключении темы.
Семантические роли меняются, поэтому в интерфейсах предпочтительно использовать
именно их.

### Как роли выглядят в интерфейсе

Иллюстрации ниже показывают назначение ролей, а не готовые компоненты.
Конкретный внешний вид компонента может отличаться, но смысл пары
«фон / содержимое на фоне» сохраняется.

#### Акцентные и статусные роли

`Primary` выделяет главное действие или выбранное состояние.

![Примеры применения роли Primary в интерфейсе](/ru/assets/reference/image-05.png){ratio=auto fit=contain}

`Error`, `Warning` и `Success` обозначают соответственно ошибку,
предупреждение и успешный результат. Для текста и иконок на цветном фоне
используйте соответствующую роль `on-*`.

![Примеры применения роли Error](/ru/assets/reference/image-13.png){ratio=auto fit=contain}

![Примеры применения роли Warning](/ru/assets/reference/image-15.png){ratio=auto fit=contain}

![Примеры применения роли Success](/ru/assets/reference/image-18.png){ratio=auto fit=contain}

#### Нейтральные и служебные роли

`Surface` формирует фон страницы, карточек и вложенных областей.

![Примеры применения ролей Surface](/ru/assets/reference/image-20.png){ratio=auto fit=contain}

`Disable` снижает визуальный приоритет недоступного элемента, а `Outline`
отделяет поля, контролы и области без лишнего цветового акцента.

![Примеры применения роли Disable](/ru/assets/reference/image-24.png){ratio=auto fit=contain}

![Примеры применения роли Outline](/ru/assets/reference/image-26.png){ratio=auto fit=contain}

`Link`, `Focus` и `Mark` отвечают за ссылки, видимый клавиатурный фокус и
выделение фрагмента текста.

![Примеры применения роли Link](/ru/assets/reference/image-28.png){ratio=auto fit=contain}

![Примеры применения ролей Focus и Mark](/ru/assets/reference/image-29.png){ratio=auto fit=contain}

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
