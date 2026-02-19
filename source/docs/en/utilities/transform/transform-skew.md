---
extends: _core._layouts.documentation
section: content
title: "Наклон (transform-skew)"
description: "Наклон (transform-skew)"
---

# Наклон (transform-skew)


С помощью модификаторов наклона `transform-skew` в SIMAI Framework вы можете наклонять элементы по осям X или Y на
заданный угол, создавая визуально интересные эффекты и анимации.

## Классы и их значения

| Класс      | Значение                 |
|:-----------|:-------------------------|
| .skew-x-0  | transform: skewX(0deg);  |
| .skew-y-0  | transform: skewY(0deg);  |
| .skew-x-1  | transform: skewX(1deg);  |
| .skew-y-1  | transform: skewY(1deg);  |
| .skew-x-2  | transform: skewX(2deg);  |
| .skew-y-2  | transform: skewY(2deg);  |
| .skew-x-3  | transform: skewX(3deg);  |
| .skew-y-3  | transform: skewY(3deg);  |
| .skew-x-5  | transform: skewX(5deg);  |
| .skew-y-5  | transform: skewY(5deg);  |
| .skew-x-15 | transform: skewX(15deg); |
| .skew-y-15 | transform: skewY(15deg); |

{.table}

## Описание

Данные модификаторы задают наклон элемента вдоль осей X или Y на указанный угол. При использовании с `hover:` можно
менять наклон при наведении курсора, создавая эффект «перекоса» элемента.

## Синтаксис

- `skew-x-{число}` – наклон по оси X на указанный угол.
- `skew-y-{число}` – наклон по оси Y на указанный угол.
- `hover:skew-x-{число}` или `hover:skew-y-{число}` – наклон при наведении.

## Пример использования

```html
<img class="skew-x-3 transition ease-in-out ..." src="image.jpg" alt="Наклон по оси X на 3 градуса">

<img class="hover:skew-y-5 transition ease-in-out ..." src="image.jpg"
     alt="Наклон по оси Y на 5 градусов при наведении">
```

## Замена с предыдущей версии

| Старый класс           | Новый класс |
|:-------------------------------------------|:------------|
| .skew-x-4                                  | .skew-x-5   |
| .skew-y-4                                  | .skew-y-5   |
| .skew-x-5, .skew-x-6, .skew-x-7, .skew-x-8 | .skew-x-15  |
| .skew-y-5, .skew-y-6, .skew-y-7, .skew-y-8 | .skew-y-15  |

{.table}
