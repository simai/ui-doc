---
title: "Устройство Framework"
description: "Из каких частей состоит SIMAI Framework: ядро, утилиты, компоненты, Smart-компоненты, блоки и макеты — и что их связывает."
---

# Устройство Framework

Части фреймворка и границы между ними: что лежит в ядре, что делают утилиты,
чем компонент отличается от Smart-компонента и где проходит граница между
фреймворком и проектом.

## Когда применять

Когда выбираете, на каком уровне решать задачу: утилитой, компонентом,
Smart-компонентом или блоком макета. И когда нужно понять, что фреймворк
берёт на себя, а что остаётся проекту.

## Пример

Одна и та же кнопка существует на двух уровнях:

```html
<!-- на классах: разметку пишет проект -->
<button class="sf-button sf-button--size-1">Сохранить</button>

<!-- Smart-компонентом: разметку строит он сам -->
<sf-button size="1" text="Сохранить"></sf-button>
```

## Страницы раздела

- [Общая схема](/ru/guide/architecture/overview/) — все части разом.
- [Core](/ru/guide/architecture/core/) — темы, примитивы, роли и шкалы.
- [Утилиты](/ru/guide/architecture/utilities/) — классы на одно правило.
- [Имена настроек компонента](/ru/guide/architecture/component-setting-names/) —
  как называются параметры.
- [Компоненты](/ru/guide/architecture/components/) — готовые части на классах.
- [Smart-компоненты](/ru/guide/architecture/smart-components/) — компоненты как
  собственные теги.
- [Составные смарт-компоненты](/ru/guide/architecture/composite-smart-components/) —
  собранные из других.
- [Блоки](/ru/guide/architecture/blocks/) — части страницы.
- [Макеты](/ru/guide/architecture/layouts/) — структура страницы целиком.
- [Framework и проект](/ru/guide/architecture/framework-and-project/) — где
  проходит граница.
- [Стандарты](/ru/guide/architecture/standards/) — что обязано быть правдой.
