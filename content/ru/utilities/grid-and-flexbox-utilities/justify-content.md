---
title: "Выравнивание содержимого по основной оси"
description: "Выравнивание содержимого по основной оси (justify-content)"
tags: [justify-content, sm, md, lg, xl, xxl]
---

# Выравнивание содержимого по основной оси

:badge[justify-content]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

Этот модификатор определяет, как именно элементы внутри контейнера (флексбокса или сетки) выравниваются вдоль основной
оси. Основная ось зависит от направления (`flex-direction`). Если `row` (строка) — основная ось горизонтальная. Если
`column` (столбец) — вертикальная.

Каноническая форма — `justify-*`. Ранее опубликованные классы
`content-main-*` остаются совместимыми на протяжении линейки SF5, но в новом
коде и примерах следует использовать `justify-*`.

## Наглядный пример

:::example {id="utilities/grid-and-flexbox-utilities/justify-content" label="Выравнивание содержимого по основной оси"}
:::

## Таблица классов

| Класс                 | Значение                        |
|:----------------------|:--------------------------------|
| `justify-start` | `justify-content: flex-start;` |
| `justify-end` | `justify-content: flex-end;` |
| `justify-center` | `justify-content: center;` |
| `justify-between` | `justify-content: space-between;` |
| `justify-around` | `justify-content: space-around;` |
| `justify-evenly` | `justify-content: space-evenly;` |

Для каждой строки также доступен совместимый псевдоним, например
`content-main-center` для `justify-center`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`, `xxl`).
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `justify-start` – элементы прижаты к началу основной оси;
    - `justify-end` – элементы прижаты к концу основной оси;
    - `justify-center` – элементы выравнены по центру основной оси;
    - `justify-between` – элементы распределены равномерно с первым и последним элементом прижатыми к краям;
    - `justify-around` – элементы равномерно распределены так, что отступ от краёв вдвое меньше отступов между
      элементами;
    - `justify-evenly` – элементы распределены с равными отступами между собой и от краёв.

## Пример использования

```html
<div class="flex justify-center">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

В этом примере все элементы будут выровнены по центру основной оси.

## Адаптивность

Чтобы применить выравнивание, начиная с определённого размера экрана, добавьте контрольную точку. Например:

```html
<div class="md:justify-start">
    <!-- Начиная с md выравнивание элементов будет flex-start -->
</div>
```
