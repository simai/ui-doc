---
title: "Прозрачность placeholder"
description: "Делает текст-подсказку в пустом поле прозрачнее или плотнее, не меняя его цвета."
---

# Прозрачность placeholder

Классы `placeholder-opacity-*` задают непрозрачность текста-подсказки
(`::placeholder`) по шкале от `0` до `full`. Берите их, чтобы приглушить
подсказку или скрыть её в состоянии, сохранив цвет роли.

## Пример

### Шкала

Подсказка одного цвета `placeholder-primary` с разной непрозрачностью. Под
каждым полем — класс.

:::example {id="utilities/forms/placeholder-opacity" label="Шкала прозрачности подсказки"}
:::

### Наведение и фокус

Наведите указатель на первое поле — подсказка станет плотной. Щёлкните во
второе — подсказка побледнеет.

:::example {id="utilities/forms/placeholder-opacity-states" label="hover:placeholder-opacity-* и focus:placeholder-opacity-*"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `placeholder-opacity-1` | `.placeholder-opacity-1::-webkit-input-placeholder { opacity: 0.1; opacity: var(--sf-opacity-10, 0.1) }; .placeholder-opacity-1::-moz-placeholder { opacity: 0.1; opacity: var(--sf-opacity-10, 0.1) }; .placeholder-opacity-1:-ms-input-placeholder { opacity: 0.1; opacity: var(--sf-opacity-10, 0.1) }; .placeholder-opacity-1::-ms-input-placeholder { opacity: 0.1; opacity: var(--sf-opacity-10, 0.1) }; .placeholder-opacity-1::placeholder { opacity: 0.1; opacity: var(--sf-opacity-10, 0.1) }` | — |
| `placeholder-opacity-2` | `.placeholder-opacity-2::-webkit-input-placeholder { opacity: 0.2; opacity: var(--sf-opacity-20, 0.2) }; .placeholder-opacity-2::-moz-placeholder { opacity: 0.2; opacity: var(--sf-opacity-20, 0.2) }; .placeholder-opacity-2:-ms-input-placeholder { opacity: 0.2; opacity: var(--sf-opacity-20, 0.2) }; .placeholder-opacity-2::-ms-input-placeholder { opacity: 0.2; opacity: var(--sf-opacity-20, 0.2) }; .placeholder-opacity-2::placeholder { opacity: 0.2; opacity: var(--sf-opacity-20, 0.2) }` | — |
| `placeholder-opacity-3` | `.placeholder-opacity-3::-webkit-input-placeholder { opacity: 0.3; opacity: var(--sf-opacity-30, 0.3) }; .placeholder-opacity-3::-moz-placeholder { opacity: 0.3; opacity: var(--sf-opacity-30, 0.3) }; .placeholder-opacity-3:-ms-input-placeholder { opacity: 0.3; opacity: var(--sf-opacity-30, 0.3) }; .placeholder-opacity-3::-ms-input-placeholder { opacity: 0.3; opacity: var(--sf-opacity-30, 0.3) }; .placeholder-opacity-3::placeholder { opacity: 0.3; opacity: var(--sf-opacity-30, 0.3) }` | — |
| `placeholder-opacity-4` | `.placeholder-opacity-4::-webkit-input-placeholder { opacity: 0.4; opacity: var(--sf-opacity-40, 0.4) }; .placeholder-opacity-4::-moz-placeholder { opacity: 0.4; opacity: var(--sf-opacity-40, 0.4) }; .placeholder-opacity-4:-ms-input-placeholder { opacity: 0.4; opacity: var(--sf-opacity-40, 0.4) }; .placeholder-opacity-4::-ms-input-placeholder { opacity: 0.4; opacity: var(--sf-opacity-40, 0.4) }; .placeholder-opacity-4::placeholder { opacity: 0.4; opacity: var(--sf-opacity-40, 0.4) }` | — |
| `placeholder-opacity-5` | `.placeholder-opacity-5::-webkit-input-placeholder { opacity: 0.5; opacity: var(--sf-opacity-50, 0.5) }; .placeholder-opacity-5::-moz-placeholder { opacity: 0.5; opacity: var(--sf-opacity-50, 0.5) }; .placeholder-opacity-5:-ms-input-placeholder { opacity: 0.5; opacity: var(--sf-opacity-50, 0.5) }; .placeholder-opacity-5::-ms-input-placeholder { opacity: 0.5; opacity: var(--sf-opacity-50, 0.5) }; .placeholder-opacity-5::placeholder { opacity: 0.5; opacity: var(--sf-opacity-50, 0.5) }` | — |
| `placeholder-opacity-6` | `.placeholder-opacity-6::-webkit-input-placeholder { opacity: 0.6; opacity: var(--sf-opacity-60, 0.6) }; .placeholder-opacity-6::-moz-placeholder { opacity: 0.6; opacity: var(--sf-opacity-60, 0.6) }; .placeholder-opacity-6:-ms-input-placeholder { opacity: 0.6; opacity: var(--sf-opacity-60, 0.6) }; .placeholder-opacity-6::-ms-input-placeholder { opacity: 0.6; opacity: var(--sf-opacity-60, 0.6) }; .placeholder-opacity-6::placeholder { opacity: 0.6; opacity: var(--sf-opacity-60, 0.6) }` | — |
| `placeholder-opacity-7` | `.placeholder-opacity-7::-webkit-input-placeholder { opacity: 0.7; opacity: var(--sf-opacity-70, 0.7) }; .placeholder-opacity-7::-moz-placeholder { opacity: 0.7; opacity: var(--sf-opacity-70, 0.7) }; .placeholder-opacity-7:-ms-input-placeholder { opacity: 0.7; opacity: var(--sf-opacity-70, 0.7) }; .placeholder-opacity-7::-ms-input-placeholder { opacity: 0.7; opacity: var(--sf-opacity-70, 0.7) }; .placeholder-opacity-7::placeholder { opacity: 0.7; opacity: var(--sf-opacity-70, 0.7) }` | — |
| `placeholder-opacity-8` | `.placeholder-opacity-8::-webkit-input-placeholder { opacity: 0.8; opacity: var(--sf-opacity-80, 0.8) }; .placeholder-opacity-8::-moz-placeholder { opacity: 0.8; opacity: var(--sf-opacity-80, 0.8) }; .placeholder-opacity-8:-ms-input-placeholder { opacity: 0.8; opacity: var(--sf-opacity-80, 0.8) }; .placeholder-opacity-8::-ms-input-placeholder { opacity: 0.8; opacity: var(--sf-opacity-80, 0.8) }; .placeholder-opacity-8::placeholder { opacity: 0.8; opacity: var(--sf-opacity-80, 0.8) }` | — |
| `placeholder-opacity-9` | `.placeholder-opacity-9::-webkit-input-placeholder { opacity: 0.9; opacity: var(--sf-opacity-90, 0.9) }; .placeholder-opacity-9::-moz-placeholder { opacity: 0.9; opacity: var(--sf-opacity-90, 0.9) }; .placeholder-opacity-9:-ms-input-placeholder { opacity: 0.9; opacity: var(--sf-opacity-90, 0.9) }; .placeholder-opacity-9::-ms-input-placeholder { opacity: 0.9; opacity: var(--sf-opacity-90, 0.9) }; .placeholder-opacity-9::placeholder { opacity: 0.9; opacity: var(--sf-opacity-90, 0.9) }` | — |
| `placeholder-opacity-full` | `.placeholder-opacity-full::-webkit-input-placeholder { opacity: 1 }; .placeholder-opacity-full::-moz-placeholder { opacity: 1 }; .placeholder-opacity-full:-ms-input-placeholder { opacity: 1 }; .placeholder-opacity-full::-ms-input-placeholder { opacity: 1 }; .placeholder-opacity-full::placeholder { opacity: 1 }` | — |
| `placeholder-opacity-0` | `.placeholder-opacity-0::-webkit-input-placeholder { opacity: 0 }; .placeholder-opacity-0::-moz-placeholder { opacity: 0 }; .placeholder-opacity-0:-ms-input-placeholder { opacity: 0 }; .placeholder-opacity-0::-ms-input-placeholder { opacity: 0 }; .placeholder-opacity-0::placeholder { opacity: 0 }` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `focus:`, `hover:`. Например: `focus:placeholder-opacity-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-opacity-10` | `10%` |
| `--sf-opacity-20` | `20%` |
| `--sf-opacity-30` | `30%` |
| `--sf-opacity-40` | `40%` |
| `--sf-opacity-50` | `50%` |
| `--sf-opacity-60` | `60%` |
| `--sf-opacity-70` | `70%` |
| `--sf-opacity-80` | `80%` |
| `--sf-opacity-90` | `90%` |

## Применение

Ступень `placeholder-opacity-{n}` даёт непрозрачность `n × 10%`: `3` — 30%,
`6` — 60%. `placeholder-opacity-full` — 100%, `placeholder-opacity-0` скрывает
подсказку.

```html
<input class="placeholder-primary placeholder-opacity-6 focus:placeholder-opacity-3"
       placeholder="Поиск по каталогу">
```

Цвет подсказки задают классы
[`placeholder-*`](/ru/utilities/forms/placeholder-color/); прозрачность
накладывается на него.

## Ограничения

- Браузеры рисуют подсказку со своей прозрачностью по умолчанию; класс
  заменяет её, поэтому `placeholder-opacity-full` может дать подсказку
  плотнее, чем без класса.
- Низкая непрозрачность снижает контраст: подсказка на ступенях ниже `6`
  легко теряется на фоне.
- Префиксов ширины экрана у семейства нет.

## См. также

- [Цвет placeholder](/ru/utilities/forms/placeholder-color/)
- [Прозрачность](/ru/utilities/filters/opacity/)
