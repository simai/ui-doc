---
extends: _core._layouts.documentation
section: content
title: Градиент фона
description: Градиент фона
---

# Градиент фона

!rtags[gradient-color]



С помощью модификаторов цвета градиента можно задать цвета для градиентного фона элемента. В сочетании с модификаторами
вида градиента (`gr-line-2`, `gr-line-3`, `gr-radial-2`, `gr-radial-3`, `gr-conic-2`, `gr-conic-3`) эти классы
определяют цвета, используемые в градиенте.

## Таблица классов

Используйте префикс `gr1-` или `gr2-` (для градиентов из двух цветов) либо `gr3-` (для градиентов из трех цветов) для
указания цвета каждого шага градиента.

| Класс цвета                                              | Переменная                   | Значение цвета                  |
|:-----------------------------------------------------------------------------|:-----------------------------|:--------------------------------|
| .gr1-transparent, .gr2-transparent, .gr3-transparent                         | `--sf-gradient--color-1/2/3` | var(`--sf-transparent`)         |
| .gr1-current, .gr2-current, .gr3-current                                     | `--sf-gradient--color-1/2/3` | currentColor                    |
| .gr1-inherit, .gr2-inherit, .gr3-inherit                                     | `--sf-gradient--color-1/2/3` | inherit                         |
| .gr1-surface-0, .gr2-surface-0, .gr3-surface-0                               | `--sf-gradient--color-1/2/3` | var(`--sf-surface-0`)           |
| .gr1-surface-1, .gr2-surface-1, .gr3-surface-1                               | `--sf-gradient--color-1/2/3` | var(`--sf-surface-1`)           |
| .gr1-surface-2, .gr2-surface-2, .gr3-surface-2                               | `--sf-gradient--color-1/2/3` | var(`--sf-surface-2`)           |
| .gr1-on-surface, .gr2-on-surface, .gr3-on-surface                            | `--sf-gradient--color-1/2/3` | var(`--sf-on-surface`)          |
| .gr1-primary, .gr2-primary, .gr3-primary                                     | `--sf-gradient--color-1/2/3` | var(`--sf-primary`)             |
| .gr1-primary-container, .gr2-primary-container, .gr3-primary-container       | `--sf-gradient--color-1/2/3` | var(`--sf-primary-container`)   |
| .gr1-secondary, .gr2-secondary, .gr3-secondary                               | `--sf-gradient--color-1/2/3` | var(`--sf-secondary`)           |
| .gr1-secondary-container, .gr2-secondary-container, .gr3-secondary-container | `--sf-gradient--color-1/2/3` | var(`--sf-secondary-container`) |
| .gr1-tertiary, .gr2-tertiary, .gr3-tertiary                                  | `--sf-gradient--color-1/2/3` | var(`--sf-tertiary`)            |
| .gr1-tertiary-container, .gr2-tertiary-container, .gr3-tertiary-container    | `--sf-gradient--color-1/2/3` | var(`--sf-tertiary-container`)  |
| .gr1-success, .gr2-success, .gr3-success                                     | `--sf-gradient--color-1/2/3` | var(`--sf-success`)             |
| .gr1-warning, .gr2-warning, .gr3-warning                                     | `--sf-gradient--color-1/2/3` | var(`--sf-warning`)             |
{.table}

*(Прежние классы цветов заменяются по аналогии с заменой для цвета фона. Например, вместо `gr1-blue-4`
использовать `gr1-primary`, вместо `gr1-gray-6` использовать `gr1-surface-inverse`, и т.д.)*

## Описание

Данные модификаторы задают значения переменных `--sf-gradient--color-1`, `--sf-gradient--color-2` и при необходимости
`--sf-gradient--color-3`, которые затем используются вместе с модификаторами вида градиента.

По умолчанию угол градиента `--sf-gradient--angle` равен `90deg`.

## Пример использования

```html
<!-- Линейный градиент из двух цветов: первичный и контейнер первичного -->
<div class="gr-line-2 gr1-primary gr2-primary-container ..."></div>
```

```html
<!-- Радиальный градиент из трех цветов: поверхность-0, прозрачный и текущий -->
<div class="gr-radial-3 gr1-surface-0 gr2-transparent gr3-current ..."></div>
```

```html
<!-- Конический градиент из двух цветов: on-surface и tertiary-container -->
<div class="gr-conic-2 gr1-on-surface gr2-tertiary-container ..."></div>
```

Используйте подходящие классы для каждого шага градиента и модификатор вида градиента для создания нужного визуального
эффекта.
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=background&group=background-gradient-background"></iframe>
</div>
