---
extends: _core._layouts.documentation
section: content
title: SIMAI Framework
description: Русская документация SIMAI Framework
---

# SIMAI Framework

SIMAI Framework помогает собирать интерфейсы из трёх разных слоёв: утилит,
обычных компонентов и Smart Components. У каждого слоя своя задача и свой
уровень абстракции: от отдельного CSS-свойства до готового интерактивного
элемента.

## Основные разделы

- [Старт](/ru/start/) — установка и первая страница.
- [Основы](/ru/fundamentals/) — модификаторы, значения, размеры, цвета и
  типографика.
- [Утилиты](/ru/utilities/) — каталог CSS-классов по свойствам.
- [Компоненты](/ru/components/) — готовые элементы интерфейса.
- [Smart Components](/ru/smart-components/) — веб-компоненты с логикой и
  состоянием.

## Текущая версия документации

Документация описывает SIMAI Framework `5.4`. При подключении к проекту
фиксируйте точный тег поставки и используйте Core, утилиты и компоненты одной
версии. Порядок обновления описан на странице [«Версии и
обновление»](/ru/start/compatibility/).

## Интерактивный пример

Playground помогает проверить классы и разметку до переноса в проект.

<a href="https://play.simai.io/embed.html?component=buttons&amp;group=tightness" target="_blank" rel="noopener noreferrer">Открыть пример кнопок в Playground</a>

```html

<div class="p-4 bg-primary color-on-primary radius-2">
    <p class="sf-body-medium">Интерактивный пример SIMAI Framework</p>
</div>
```
