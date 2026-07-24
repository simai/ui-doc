---
extends: _core._layouts.documentation
section: content
title: Адаптивная система размеров
description: Архитектура вертикальных размеров Simai Framework.
---

# Адаптивная система размеров

Simai Framework использует одну primitive scale A–I и semantic-роли, которые
переключают значения между mobile и desktop. Разработчик выбирает роль, а не
пишет отдельные пиксели для каждого экрана.

## Три независимые оси

1. **Viewport mode** — mobile или desktop. Единственная граница режима:
   `960px`.
2. **Semantic size** — роль `1/3`, `1/2`, `1`, `2`, `3` и другие роли
   типографики или интервалов.
3. **Tightness** — `low`, `default`, `high`, `highest`; меняет только
   вертикальную плотность control.

Не используйте tightness как замену размеру и не добавляйте второй media query
в компоненте. Компонент должен читать semantic variables.

## Root и rem

`1rem` сохраняет пользовательский browser default. Framework не уменьшает
корневой размер шрифта на мобильном viewport. Адаптивность задаётся парами
semantic variables, поэтому повторного масштабирования через `html` нет.

Основная типографическая роль назначается на `body` или application shell.

## Typography pair

Размер шрифта и высота строки — разные variables. Они используют одну роль, но
могут ссылаться на разные primitive values. Например, исправление `text-12`
связывает `fontSize` с size variable, а `lineHeight` — с отдельной
line-height variable.

## Высота control

Для Button, IconButton, Input, текстового Select и однострочного Textarea
действует формула:

```text
control-height = line-height + 2 × block-padding
```

Рамка учитывается внутри итоговой высоты. При одинаковых size и tightness
допустимое расхождение между representative controls — не более `0.5 CSS px`.

## Что система не обещает

Вертикальный контракт не выравнивает между разными компонентами:

- menu nesting и отступ следующего уровня;
- icon/label slots;
- inline padding и horizontal gap;
- container width и gutters.

Эти значения можно выбирать из той же primitive scale, но их совпадение не
является системным invariant.

## Куда идти дальше

- Точные значения: `/ru/reference/adaptive-sizing/generated-contract/`.
- Правила обновления: `/ru/migration/adaptive-sizing-v1/`.
- Совместимость версий: `/ru/start/version-matrix/`.
