---
title: "Внутренний отступ"
description: "Внутренний отступ (padding)"
tags: [padding, sm, md, lg, xl, xxl]
---

# Внутренний отступ

:badge[padding]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

`padding` управляет расстоянием от контента до границ элемента. Базовая шкала
использует `--sf-space-*`, а расширенная фиксированная шкала — токены
`--sf-a0` … `--sf-i9`.

## Наглядный пример

:::example {id="utilities/indents/padding" label="Внутренний отступ"}
:::

## Таблица классов

| Класс               | Значение                                   |
|:--------------------|:-------------------------------------------|
| `p-{n}` | `padding: var(--sf-space-{n});` |
| `p-top-{n}` | `padding-top: var(--sf-space-{n});` |
| `p-bottom-{n}` | `padding-bottom: var(--sf-space-{n});` |
| `p-inline-start-{n}` | `padding-inline-start: var(--sf-space-{n});` |
| `p-inline-end-{n}` | `padding-inline-end: var(--sf-space-{n});` |
| `p-x-{n}` | `padding-inline: var(--sf-space-{n});` |
| `p-y-{n}` | `padding-block: var(--sf-space-{n});` |

Где `{n}` ∈ `0, 1/4, 1/3, 1/2, 1, 2, 3, 4, 5, 6, 7, 8`. Логические стороны (`inline-start/end`) используются вместо left/right.

### Фиксированная шкала размеров

| Класс | Значение |
|:---|:---|
| `p-{token}` | `padding: var(--sf-{token});` |
| `p-top-{token}` / `p-bottom-{token}` | Padding по физической вертикальной стороне |
| `p-inline-start-{token}` / `p-inline-end-{token}` | Padding по логической inline-стороне |

`{token}` — значение от `a0` до `i9`, например `p-a4` или
`p-inline-start-e2`. Сокращения `p-x-*` и `p-y-*` доступны только для базовой
шкалы `--sf-space-*`.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: `sm`, `md`, `lg`, `xl`, `xxl` — применяют модификатор с заданного брейкпоинта.
- Модификатор *(обязательный параметр)*: любой из классов таблицы.

## Пример использования

```html
<div class="p-1">Базовый padding</div>
<div class="p-x-2 p-y-3">Горизонтальный и вертикальный padding</div>
<div class="p-top-4 p-inline-end-1/2">Раздельные стороны</div>
<div class="p-e2">Фиксированный padding по токену --sf-e2</div>
```

## Адаптивность

```html
<div class="p-2 md:p-4">
  <!-- Начиная с md padding увеличится до var(--sf-space-4) -->
</div>
```

## Направление, варианты и ограничения

- `inline-start` и `inline-end` автоматически меняют физическую сторону в
  LTR/RTL; `top` и `bottom` от направления письма не зависят.
- В принятой версии Core есть известное ограничение: если локальный контейнер
  `dir="rtl"` вложен в страницу с `dir="ltr"` (или наоборот), физические
  селекторы совместимости могут применить обе inline-стороны. Для направления всей страницы
  логические классы работают ожидаемо; дефект вложенного направления передан в
  Core и не скрывается обходным примером.
- У семей `padding` и `padding-ext` есть responsive-варианты `sm`, `md`, `lg`
  и `xl`. Варианты состояния и отрицательные значения не поддерживаются.
- Публичных псевдонимов у классов нет.
