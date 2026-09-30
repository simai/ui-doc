---
title: "Скругление границы"
description: "Скругление границы"
tags: [border-radius, sm, md, lg, xl, xxl]
---

# Скругление границы

:badge[border-radius]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

С помощью модификаторов радиуса вы можете задавать скругление для всего элемента,
отдельных сторон и отдельных углов.

## Наглядный пример

:::example {id="utilities/border/border-radius" label="Скругление границы"}
:::

## Шкала

Шкала идёт от прямого угла к окружности. Первые три ступени одинаковы в обоих
режимах, дальше значения расходятся: на широком экране углы крупнее.

| Класс | Токен | Мобильный | Десктоп |
| :--- | :--- | ---: | ---: |
| `radius-0` | `--sf-radius-0` | 0 | 0 |
| `radius-1/3` | `--sf-radius-1\/3` | 2px | 2px |
| `radius-1/2` | `--sf-radius-1\/2` | 4px | 4px |
| `radius-1` | `--sf-radius-1` | 8px | 8px |
| `radius-2` | `--sf-radius-2` | 10px | 12px |
| `radius-3` | `--sf-radius-3` | 20px | 24px |
| `radius-rounded` | `--sf-radius-rounded` | 1000px | 1000px |

Значения приведены при `1rem = 16px`. Шкала задана в `rem`, поэтому углы
тянутся за кеглем вместе со всем остальным.

`radius-square` — то же, что `radius-0`. `radius-round` — второе имя
`radius-rounded`; новых мест ему не отдают.

## Смысловые радиусы

Их берут по назначению, а не по номеру, и значение они получают со шкалы выше.

| Класс | Токен | Значение | Куда |
| :--- | :--- | :--- | :--- |
| `radius-ui` | `--sf-radius--ui` | `radius-1/2` — 4px | мелкий контрол: поле, кнопка, флажок |
| `radius-surface` | `--sf-radius--surface` | `radius-1` — 8px | крупный блок: карточка, панель, модальное окно |

Контрол ровно вдвое мельче блока: вложенный угол должен быть меньше внешнего,
иначе вложенность не читается.

`radius-default` — прежнее имя радиуса блока, сохранено как алиас. Его значение
не менялось и осталось четырьмя пикселями, то есть радиусу блока оно больше не
равно: берите `radius-surface`.

Обычному компоненту класс радиуса не нужен: он уже стоит на своей смысловой
роли. Класс берут, когда конкретный элемент должен от этой роли отличаться.

## Базовые классы

| Класс | Значение |
| --- | --- |
| `radius-{size}` | `border-radius: var(--sf-radius-*)` |
| `radius-top-{size}` | верхние углы |
| `radius-bottom-{size}` | нижние углы |
| `radius-inline-start-{size}` | углы по стороне `inline-start` |
| `radius-inline-end-{size}` | углы по стороне `inline-end` |
| `radius-top-inline-start-{size}` | верхний `inline-start` угол |
| `radius-top-inline-end-{size}` | верхний `inline-end` угол |
| `radius-bottom-inline-start-{size}` | нижний `inline-start` угол |
| `radius-bottom-inline-end-{size}` | нижний `inline-end` угол |

## Синтаксис

- `{модификатор}` — применяет стиль для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — применяет стиль с брейкпоинта (`sm`, `md`, `lg`, `xl`, `xxl`), например: `md:radius-2`.

## Пример
