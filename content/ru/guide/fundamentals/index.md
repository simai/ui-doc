---
title: "Основы оформления"
description: "Как читать классы и выбирать размеры, интервалы, цвета, токены и типографику SIMAI Framework."
---

# Основы оформления

Здесь описан общий язык оформления SIMAI Framework. Раздел объясняет правила выбора, а точные классы по CSS-свойствам находятся в каталоге утилит.

## Когда применять

Пройдите основы перед системной вёрсткой или когда нужно понять незнакомый класс. Начните с синтаксиса, затем выберите подходящую шкалу и семантическую роль.

## Пример

В классе `md:p-4` условие `md:` включает правило на соответствующей ширине, `p` означает внутренний отступ, а `4` выбирает значение общей шкалы. Для цвета `color-on-surface-variant` роль сразу описывает вспомогательный текст и автоматически учитывает тему.

:::example {id="guide/utility-panel"}
:::

## Страницы раздела

Порядок — от языка классов к величинам и дальше к оформлению. Там, где у
правила есть числа, они лежат подстраницами под ним.

**Язык разметки**

- [Модификаторы](/ru/guide/fundamentals/modifiers/) — из чего состоит класс.
- [Условия действия](/ru/guide/fundamentals/conditions/) — когда правило включается.
- [Направление текста](/ru/guide/fundamentals/directions/) — LTR и RTL.
- [Язык интерфейса](/ru/guide/fundamentals/language/) — что меняется вместе с языком.
- [Классы раскладки](/ru/guide/fundamentals/layout-classes/) — сетка и потоки.

**Величины**

- [Значения и шкалы](/ru/guide/fundamentals/values-and-scales/) — откуда берутся числа.
- [Система размеров](/ru/guide/fundamentals/sizes/) — размер как роль, а не как пиксели.
- [Шкала размеров](/ru/guide/fundamentals/size-scale/) — ступени и их шаг, с [переводом в пиксели](/ru/guide/fundamentals/size-scale/pixels/).
- [Интервалы](/ru/guide/fundamentals/spacing/) — отступы между частями, со [значениями ступеней](/ru/guide/fundamentals/spacing/scale/).
- [Адаптивные размеры](/ru/guide/fundamentals/adaptive-sizing/) — мобильная и настольная пара, со [значениями](/ru/guide/fundamentals/adaptive-sizing/vertical-sizing/).

**Оформление**

- [Цвета и темы](/ru/guide/fundamentals/colors-and-themes/) — как устроен цвет.
- [Палитры](/ru/guide/fundamentals/colour-palettes/) — девять палитр по тонам.
- [Роли цвета](/ru/guide/fundamentals/colour-roles/) — что какая роль означает.
- [Прозрачность](/ru/guide/fundamentals/transparency/) — одна шкала на три семейства.
- [Границы](/ru/guide/fundamentals/borders/) — две роли и работа каждой.
- [Фокус](/ru/guide/fundamentals/focus/) — кольцо и его токены.
- [Типографика](/ru/guide/fundamentals/typography/) — роли текста.
- [Токены оформления](/ru/guide/fundamentals/design-tokens/) — как устроены имена.
