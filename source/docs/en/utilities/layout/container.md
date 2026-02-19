---
extends: _core._layouts.documentation
section: content
title: Контейнер (container)
description: Контейнер (container)
---

# Контейнер (container)


Контейнер используется для ограничения ширины и добавления горизонтальных отступов в зависимости от размера области
просмотра. По умолчанию ширина контейнера устанавливается в 100%, а также добавляется внутренний отступ, чтобы контент
не прилегал плотно к краям.

**Размеры и отступы контейнера зависят от контрольной точки:**

| Класс     | Контрольная точка | Значение                                                                                        |
|-----------|:-----------------:|---------------------------------------------------------------------------------------------------------------------|
| container |        нет        | width: 100%;<br/> padding-left: var(`--sf-space-1`);<br/> padding-right: var(`--sf-space-1`);                       |
|           |        sm         | width: var(`--sf-breakpoint-sm`);<br/> padding-left: var(`--sf-space-2`);<br/> padding-right: var(`--sf-space-2`);  |
|           |        md         | width: var(`--sf-breakpoint-md`);<br/> padding-left: var(`--sf-space-3`);<br/> padding-right: var(`--sf-space-3`);  |
|           |        lg         | width: var(`--sf-breakpoint-lg`);<br/> padding-left: var(`--sf-space-4`);<br/> padding-right: var(`--sf-space-4`);  |
|           |        xl         | width: var(`--sf-breakpoint-xl`);<br/> padding-left: var(`--sf-space-5`);<br/> padding-right: var(`--sf-space-5`);  |
|           |        xxl        | width: var(`--sf-breakpoint-xxl`);<br/> padding-left: var(`--sf-space-6`);<br/> padding-right: var(`--sf-space-6`); |
{.table}

Контрольные точки (`--sf-breakpoint-sm`, `--sf-breakpoint-md`, `--sf-breakpoint-lg`, `--sf-breakpoint-xl`,
`--sf-breakpoint-xxl`) определены в ядре фреймворка, а размеры отступов (`--sf-space-*`) соответствуют новой системе
размеров отступов.

## Пример использования

```html
<div class="container">
  ... ваш контент ...
</div>
```

В данном примере при любой ширине окна контейнер будет занимать 100% и иметь горизонтальные отступы равные
`var(--sf-space-1)`.

Чтобы при увеличении размера окна контейнер принимал соответствующее ограничение ширины и отступы, используйте
адаптивный модификатор, например `md:container` для включения контейнера начиная с контрольной точки
`--sf-breakpoint-md`:

```html
<div class="md:container">
  ... ваш контент ...
</div>
```

В этом случае до достижения ширины `--sf-breakpoint-md` элемент будет на всю ширину без отступов по умолчанию (или
использоваться базовый вариант container), а после `--sf-breakpoint-md` контейнер автоматически применит ограничения и
отступы для этой контрольной точки.

Для центрирования контейнера можно добавить классы отступов с отрицательными значениями или класс
`m-right-auto m-left-auto` (автоматические отступы справа и слева):

```html
<div class="container m-right-auto m-left-auto">
  ... ваш контент ...
</div>
```

Таким образом, контейнер помогает поддерживать адаптивный и аккуратный макет сайта, изменяя свои размеры и отступы в
зависимости от ширины области просмотра.
