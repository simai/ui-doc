---
title: "Смещение"
description: "Сдвигает элемент по горизонтали и вертикали — на шаг шкалы, на половину или на весь свой размер — не меняя раскладку."
---

# Смещение

Классы `translate-x-*` и `translate-y-*` сдвигают элемент по горизонтали и по
вертикали, не трогая соседей. Берите их для центрирования абсолютно
позиционированных элементов, выезжающих панелей и небольшого отклика на
наведение.

## Пример

### Основная шкала

Пунктир — место элемента без смещения. Подпись — класс; шкала мелкая — от
1px до 1rem.

:::example {id="utilities/transform/transform-translate" label="Смещение по основной шкале"}
:::

### Половина и весь размер

`*-half` сдвигает элемент на половину его собственной ширины или высоты,
`*-full` — на всю.

:::example {id="utilities/transform/transform-translate-half" label="Смещение на половину и на весь размер"}
:::

### Расширенная шкала

Классы с размерным токеном в имени (`b6`, `c6`, `d0` …) сдвигают на точную
величину токена.

:::example {id="utilities/transform/transform-translate-ext" label="Смещение по расширенной шкале"}
:::

### При наведении

Префикс `hover:` сдвигает элемент, пока над ним указатель; отрицательный сдвиг
при наведении пишется `-hover:translate-*`. Наведите указатель на образцы;
плавность даёт класс `transition-transform`.

:::example {id="utilities/transform/transform-translate-hover" label="Смещение при наведении"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `translate-x-0` | `--sf-translate-x: var(--sf-a0); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-0` | `--sf-translate-y: var(--sf-a0); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-0` | `--sf-translate-x: calc(0rem - var(--sf-a0)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-0` | `--sf-translate-y: calc(0rem - var(--sf-a0)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-1` | `--sf-translate-x: var(--sf-px); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-1` | `--sf-translate-y: var(--sf-px); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-1` | `--sf-translate-x: calc(0rem - var(--sf-px)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-1` | `--sf-translate-y: calc(0rem - var(--sf-px)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-2` | `--sf-translate-x: var(--sf-a2); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-2` | `--sf-translate-y: var(--sf-a2); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-2` | `--sf-translate-x: calc(0rem - var(--sf-a2)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-2` | `--sf-translate-y: calc(0rem - var(--sf-a2)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-3` | `--sf-translate-x: var(--sf-a4); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-3` | `--sf-translate-y: var(--sf-a4); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-3` | `--sf-translate-x: calc(0rem - var(--sf-a4)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-3` | `--sf-translate-y: calc(0rem - var(--sf-a4)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-4` | `--sf-translate-x: var(--sf-a6); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-4` | `--sf-translate-y: var(--sf-a6); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-4` | `--sf-translate-x: calc(0rem - var(--sf-a6)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-4` | `--sf-translate-y: calc(0rem - var(--sf-a6)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-5` | `--sf-translate-x: var(--sf-a8); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-5` | `--sf-translate-y: var(--sf-a8); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-5` | `--sf-translate-x: calc(0rem - var(--sf-a8)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-5` | `--sf-translate-y: calc(0rem - var(--sf-a8)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-6` | `--sf-translate-x: var(--sf-b0); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-6` | `--sf-translate-y: var(--sf-b0); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-6` | `--sf-translate-x: calc(0rem - var(--sf-b0)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-6` | `--sf-translate-y: calc(0rem - var(--sf-b0)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-7` | `--sf-translate-x: var(--sf-b2); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-7` | `--sf-translate-y: var(--sf-b2); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-7` | `--sf-translate-x: calc(0rem - var(--sf-b2)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-7` | `--sf-translate-y: calc(0rem - var(--sf-b2)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-8` | `--sf-translate-x: var(--sf-b4); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-8` | `--sf-translate-y: var(--sf-b4); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-8` | `--sf-translate-x: calc(0rem - var(--sf-b4)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-8` | `--sf-translate-y: calc(0rem - var(--sf-b4)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-9` | `--sf-translate-x: var(--sf-b6); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-9` | `--sf-translate-y: var(--sf-b6); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-9` | `--sf-translate-x: calc(0rem - var(--sf-b6)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-9` | `--sf-translate-y: calc(0rem - var(--sf-b6)); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-half` | `--sf-translate-x: 50%; transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-half` | `--sf-translate-y: 50%; transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-half` | `--sf-translate-x: -50%; transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-half` | `--sf-translate-y: -50%; transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-full` | `--sf-translate-x: 100%; transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-y-full` | `--sf-translate-y: 100%; transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-x-full` | `--sf-translate-x: -100%; transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `-translate-y-full` | `--sf-translate-y: -100%; transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | — |
| `translate-x-{значение}` | `--sf-translate-x: var(--sf-{значение}); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `translate-y-{значение}` | `--sf-translate-y: var(--sf-{значение}); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `-translate-x-{значение}` | `--sf-translate-x: calc(0rem - var(--sf-{значение})); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |
| `-translate-y-{значение}` | `--sf-translate-y: calc(0rem - var(--sf-{значение})); transform: translate(0, 0); transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))` | `a0`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a8`, `a9`, `b0`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `c0`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `d0`, `d1`, `d2`, `d3`, `d4`, `d5`, `d6`, `d7`, `d8`, `d9`, `e0`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `f0`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `g0`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `g7`, `g8`, `g9`, `h0`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `i0`, `i1`, `i2`, `i3`, `i4`, `i5`, `i6`, `i7`, `i8`, `i9` |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:translate-x-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-a0` | `0rem` |
| `--sf-px` | `1px` |
| `--sf-a2` | `0.125rem` |
| `--sf-a4` | `0.25rem` |
| `--sf-a6` | `0.375rem` |
| `--sf-a8` | `0.5rem` |
| `--sf-b0` | `0.625rem` |
| `--sf-b2` | `0.75rem` |
| `--sf-b4` | `0.875rem` |
| `--sf-b6` | `1rem` |
| `--sf-a1` | `0.0625rem` |
| `--sf-a3` | `0.1875rem` |
| `--sf-a5` | `0.3125rem` |
| `--sf-a7` | `0.4375rem` |
| `--sf-a9` | `0.5625rem` |
| `--sf-b1` | `0.6875rem` |
| `--sf-b3` | `0.8125rem` |
| `--sf-b5` | `0.9375rem` |
| `--sf-b7` | `1.0625rem` |
| `--sf-b8` | `1.125rem` |
| `--sf-b9` | `1.1875rem` |
| `--sf-c0` | `1.25rem` |
| `--sf-c1` | `1.375rem` |
| `--sf-c2` | `1.5rem` |
| `--sf-c3` | `1.625rem` |
| `--sf-c4` | `1.75rem` |
| `--sf-c5` | `1.875rem` |
| `--sf-c6` | `2rem` |
| `--sf-c7` | `2.125rem` |
| `--sf-c8` | `2.25rem` |
| `--sf-c9` | `2.375rem` |
| `--sf-d0` | `2.5rem` |
| `--sf-d1` | `2.75rem` |
| `--sf-d2` | `3rem` |
| `--sf-d3` | `3.25rem` |
| `--sf-d4` | `3.5rem` |
| `--sf-d5` | `3.75rem` |
| `--sf-d6` | `4rem` |
| `--sf-d7` | `4.25rem` |
| `--sf-d8` | `4.5rem` |
| `--sf-d9` | `4.75rem` |
| `--sf-e0` | `5rem` |
| `--sf-e1` | `5.5rem` |
| `--sf-e2` | `6rem` |
| `--sf-e3` | `6.5rem` |
| `--sf-e4` | `7rem` |
| `--sf-e5` | `7.5rem` |
| `--sf-e6` | `8rem` |
| `--sf-e7` | `8.5rem` |
| `--sf-e8` | `9rem` |
| `--sf-e9` | `9.5rem` |
| `--sf-f0` | `10rem` |
| `--sf-f1` | `11rem` |
| `--sf-f2` | `12rem` |
| `--sf-f3` | `13rem` |
| `--sf-f4` | `14rem` |
| `--sf-f5` | `15rem` |
| `--sf-f6` | `16rem` |
| `--sf-f7` | `17rem` |
| `--sf-f8` | `18rem` |
| `--sf-f9` | `19rem` |
| `--sf-g0` | `20rem` |
| `--sf-g1` | `22rem` |
| `--sf-g2` | `24rem` |
| `--sf-g3` | `26rem` |
| `--sf-g4` | `28rem` |
| `--sf-g5` | `30rem` |
| `--sf-g6` | `32rem` |
| `--sf-g7` | `34rem` |
| `--sf-g8` | `36rem` |
| `--sf-g9` | `38rem` |
| `--sf-h0` | `40rem` |
| `--sf-h1` | `44rem` |
| `--sf-h2` | `48rem` |
| `--sf-h3` | `52rem` |
| `--sf-h4` | `56rem` |
| `--sf-h5` | `60rem` |
| `--sf-h6` | `64rem` |
| `--sf-h7` | `68rem` |
| `--sf-h8` | `72rem` |
| `--sf-h9` | `76rem` |
| `--sf-i0` | `80rem` |
| `--sf-i1` | `88rem` |
| `--sf-i2` | `96rem` |
| `--sf-i3` | `104rem` |
| `--sf-i4` | `112rem` |
| `--sf-i5` | `120rem` |
| `--sf-i6` | `128rem` |
| `--sf-i7` | `136rem` |
| `--sf-i8` | `144rem` |
| `--sf-i9` | `152rem` |

## Применение

### Шкалы

| Значение | Сдвиг |
| :--- | :--- |
| `0` … `9` | `0`, 1px, 2px, 4px, 6px, 8px, 10px, 12px, 14px, 16px |
| `half` | 50% собственного размера |
| `full` | 100% собственного размера |
| `a0` … `i9` | величина размерного токена `--sf-<значение>` |

Значения в пикселях приведены при `1rem = 16px`. Положительный класс сдвигает
вправо или вниз, класс с минусом впереди — влево или вверх: `-translate-x-4`.

### Сдвиг по двум осям

Классы `x` и `y` сочетаются: каждый задаёт свою переменную
(`--sf-translate-x`, `--sf-translate-y`), а `transform` собирается из обеих.

```html
<div class="absolute inset-center -translate-x-half -translate-y-half">
  По центру родителя
</div>
```

### Выезжающая панель

`-translate-x-full` уводит панель за левый край её места; класс снимают, и
панель возвращается:

```html
<aside class="fixed top-0 inline-start-0 h-full transition-transform -translate-x-full">…</aside>
```

## Ограничения

- Смещение задаёт `transform` целиком: на одном элементе с `rotate-*`,
  `scale-*` или `skew-*` действует только один из классов.
- Трансформация не меняет раскладку: место элемента остаётся за ним, а
  сдвинутый элемент может перекрыть соседей.
- Направление физическое: `translate-x-*` сдвигает вправо и при письме справа
  налево, а логические классы положения (`inset-center`, `inline-start-0`)
  при таком письме отсчитывают от правого края. Центрирование и выезжающая
  панель из примеров выше рассчитаны на письмо слева направо.
- Из префиксов есть только `hover:` (и `-hover:` для отрицательных значений);
  префиксов ширины экрана нет.

## См. также

- [Позиционирование элемента](/ru/utilities/layout/element-position/)
- [Вращение](/ru/utilities/transform/transform-rotate/)
- [Общее свойство перехода](/ru/utilities/animation/animation-transition-property/)
