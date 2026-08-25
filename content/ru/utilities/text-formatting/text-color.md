---
title: "Цвет текста"
description: "Цвет текста"
---

# Цвет текста

!rtags[text-color hover focus active]

Цвет текста задаётся классами `color-*`, связанными с семантическими токенами
темы. Для обычного текста на поверхности используйте следующую иерархию:

- `.color-on-surface` — основной текст;
- `.color-on-surface-variant` — вспомогательный текст: пояснения, подписи,
  метаданные и второстепенная информация;
- `.color-on-surface-inverse` — текст на инверсной поверхности.

Не используйте `.color-secondary` как замену вспомогательному цвету текста:
`secondary` — акцентная цветовая роль, а не уровень важности текста.

## Таблица классов

| Класс | Токен | Назначение |
|:--|:--|:--|
| `.color-on-surface` | `--sf-on-surface` | Основной текст на поверхности |
| `.color-on-surface-variant` | `--sf-on-surface-variant` | Вспомогательный текст и метаданные |
| `.color-on-surface-fixed` | `--sf-on-surface-fixed` | Фиксированный цвет, не переключаемый вместе с темой |
| `.color-on-surface-inverse` | `--sf-on-surface-inverse` | Текст на инверсной поверхности |
| `.color-on-surface-inverse-fixed` | `--sf-on-surface-inverse-fixed` | Фиксированный текст на инверсной поверхности |
| `.color-primary` | `--sf-primary` | Основной акцентный цвет |
| `.color-warning` | `--sf-warning` | Предупреждение |
| `.color-success` | `--sf-success` | Успешный результат |

## Пример

```html
<article class="bg-surface-0">
    <h2 class="color-on-surface">Заголовок и основной текст</h2>
    <p class="color-on-surface-variant">
        Вспомогательное описание или метаданные
    </p>
</article>
```

## Приглушённый текст

В ядре также существует токен `--sf-on-surface-muted`. Он слабее
`--sf-on-surface-variant` и предназначен только для необязательных, визуально
приглушённых подписей. Готовый класс `.color-on-surface-muted` в текущем наборе
утилит не генерируется.

Если такой уровень действительно нужен, добавьте проектный класс и отдельно
проверьте контраст на светлой и тёмной теме:

```css
.color-on-surface-muted {
    color: var(--sf-on-surface-muted);
}
```

Для обычного вспомогательного текста предпочтителен штатный класс
`.color-on-surface-variant`.

## Пример
:::example {id="utilities/text-formatting/text-color" label="Результат"}
:::

