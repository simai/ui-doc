---
title: "Основы"
description: "Базовые понятия и справочные системы SIMAI Framework: модификаторы, размеры, цвета, дизайн-токены, адаптивность и типографика."
---

# Основы

Этот раздел объясняет язык утилит и дизайн-систему SIMAI Framework: как
составляются модификаторы, какие значения они принимают и на какие токены
опираются размеры, цвета, адаптивность и типографика.

## С чего начать

1. Изучите [модификаторы](/ru/fundamentals/modifiers/), [условия действия](/ru/fundamentals/conditions/) и [параметры модификаторов](/ru/fundamentals/modifier-parameters/modifier-parameters/).
2. Разберитесь со [значениями и шкалами](/ru/fundamentals/values-and-scales/), затем используйте полный справочник [размеров](/ru/fundamentals/sizes/sizes/) и [цветов](/ru/fundamentals/colors-and-themes/).
3. Для системной настройки проекта перейдите к [дизайн-токенам](/ru/fundamentals/design-tokens/), [контрольным точкам](/ru/fundamentals/breakpoints/) и [типографике](/ru/fundamentals/typography-system/).

## Разделы

- [Модификаторы](/ru/fundamentals/modifiers/) — состав и назначение модификаторов.
- [Сокращения свойств](/ru/fundamentals/abbreviations-of-properties/abbreviations-of-properties/) — короткие имена часто используемы
 свойств.
- [Условия действия](/ru/fundamentals/conditions/) — адаптивные условия и условия состояния.
- [Условия состояния](/ru/fundamentals/states/) — состояния `hover`, `focus` и `active`.
- [Параметры модификаторов](/ru/fundamentals/modifier-parameters/modifier-parameters/) — оси, стороны и углы.
- [Направления](/ru/fundamentals/directions/directions/) и [выравнивание](/ru/fundamentals/alignment/alignment/) — физические и логические направления.
- [Значения и шкалы](/ru/fundamentals/values-and-scales/) — типы значений и правила выбора.
- [Размеры](/ru/fundamentals/sizes/sizes/) — полная шкала из 90 размерны
 примитивов и интервалы.
- [Цвета и темы](/ru/fundamentals/colors-and-themes/) — палитры, семантические роли и светлая/тёмная темы.
- [Дизайн-токены](/ru/fundamentals/design-tokens/) — интервалы, радиусы, тени, иконки, контейнеры и слои.
- [Контрольные точки](/ru/fundamentals/breakpoints/) — основа адаптивного поведения.
- [Типографика](/ru/fundamentals/typography-system/) — семейства, веса, размеры и высоты строк.
- [Ограничения модификаторов](/ru/fundamentals/best-practices/) — минимальные и максимальные значения свойств.

## Примитивы, токены и утилиты

Эти понятия относятся к разным уровням:

1. **Примитив** 
ранит ис
одное значение: например, `--sf-c2` равно `24px`.
2. **Семантический токен** выражает назначение: например, `--sf-space-4` или `--sf-primary`.
3. **Утилита** применяет значение к CSS-свойству: например, `p-4`, `color-primary` или `bg-surface-0`.

В прикладном коде предпочтительны семантические токены и утилиты. Примитивы
нужны для точной настройки и для создания проектны
 токенов.
