---
extends: _core._layouts.documentation
section: content
title: Быстрый старт
description: Минимальная страница на SIMAI Framework.
---

# Быстрый старт

После [подключения Core](/ru/start/installation/) добавьте в `body` карточку:

```html
<main class="p-4">
    <article class="p-4 bg-surface-container radius-2">
        <h1 class="sf-h-2 m-bottom-2">SIMAI Framework</h1>
        <p class="sf-body-medium color-on-surface">
            Первая страница готова.
        </p>
    </article>
</main>
```

В примере:

- `p-4` задаёт внутренний отступ;
- `m-bottom-2` добавляет нижний внешний отступ;
- `bg-surface-container` и `color-on-surface` используют цвета текущей темы;
- `radius-2` задаёт радиус;
- `sf-h-2` и `sf-body-medium` применяют типографические роли.

## Добавьте адаптивность и состояние

Префиксы условий ставятся перед утилитой:

```html
<div class="flex-column md:flex-row gap-2 md:gap-4">
    <button class="p-2 bg-primary color-on-primary hover:bg-primary">
        Действие
    </button>
</div>
```

`md:` применяет правило начиная с контрольной точки `md`, а `hover:` — при
наведении. Полный синтаксис описан в [Основах](/ru/fundamentals/), все классы
сгруппированы в [каталоге утилит](/ru/utilities/).
