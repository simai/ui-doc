---
extends: _core._layouts.documentation
section: content
title: Правила именования цветовых примитивов
description: Правила именования цветовых примитивов
---

# Правила именования цветовых примитивов

**Основная схема:**

```css
--sf-{color-name}-{tone}
```

Где:

* **color-name** — название цвета из набора: primary, secondary, tertiary, neutral, error, success.

* **tone** — число, обозначающее тон (от 0 до 100).

**Примеры:**

```css
--sf-primary-40
--sf-neutral-94
--sf-secondary-5
```

**Для полупрозрачных цветов:**

```
--sf-{color-name}-{tone}--alfa-{alfa-value}
```

Где:

* **alfa-value** — величина прозрачности от 0 до 1\.

**Примеры:**

```css
--sf-white--alfa-4
--sf-primary-50--alfa-8
```

Прозрачность рассчитывается с помощью функции color-mix. Пример использования:

```css
--sf-primary-90--alfa-4: var(color-mix(in srgb, var(--sf-transparent), var(--sf-primary-90) 4%));
```

Функция color-mix поддерживается современными браузерами с 2023 года. Если возникнут проблемы с поддержкой, можно
использовать дополнительные цвета (белый и чёрный) для корректного расчёта полупрозрачных оттенков:

```css
--sf-primary-90--alfa-4: var(color-mix(in srgb, var(--sf-transparent), var(--sf-primary-90) 4%), --sf-white--alfa-4);
```

Важно, чтобы цвета для чёрного, белого и прозрачного были объявлены первыми в коде, что обеспечит их доступность при
вычислении других цветовых переменных.
