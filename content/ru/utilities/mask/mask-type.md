---
title: "Тип маски"
description: "Задаёт, как элемент mask в SVG скрывает содержимое: по яркости или по прозрачности."
---

# Тип маски

Классы `mask-type-*` задают `mask-type` у элемента `<mask>` в SVG. Берите
`mask-type-alpha`, когда маска нарисована прозрачностью и цвет её фигур не
должен влиять на результат.

## Пример

### Типы

Маска из двух непрозрачных кругов — белого и чёрного — поверх прямоугольника `fill-primary`.

:::example {id="utilities/mask/mask-type" label="Типы маски SVG"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `mask-type-luminance` | `mask-type: luminance` | — |
| `mask-type-alpha` | `mask-type: alpha` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Какой тип выбрать

| Класс | Содержимое видно там, где маска |
| :--- | :--- |
| `mask-type-luminance` | светлая; чёрный скрывает, белый показывает — значение по умолчанию |
| `mask-type-alpha` | непрозрачна, независимо от цвета |

Класс ставится на сам элемент `<mask>`:

```html
<svg viewBox="0 0 240 120">
  <mask id="shape" class="mask-type-alpha">
    <circle cx="120" cy="60" r="45" fill="black"></circle>
  </mask>
  <rect class="fill-primary" width="240" height="120" mask="url(#shape)"></rect>
</svg>
```

## Ограничения

- Классы действуют только на элемент `<mask>` в SVG. Для маски, заданной
  через `mask-image` в CSS, режим задают классы
  [режима маски](/ru/utilities/mask/mask-mode/); `mask-alpha` и
  `mask-luminance` на элементе с маской главнее типа маски.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Область маски](/ru/utilities/mask/mask-clip/)
- [Вложение маски](/ru/utilities/mask/mask-origin/)
- [Положение маски](/ru/utilities/mask/mask-position/)
- [Повтор маски](/ru/utilities/mask/mask-repeat/)
- [Размер маски](/ru/utilities/mask/mask-size/)
- [Композиция маски](/ru/utilities/mask/mask-composite/)
- [Режим маски](/ru/utilities/mask/mask-mode/)
