---
title: "Функция времени перехода"
description: "Задаёт, как переход набирает и сбрасывает скорость: равномерно, с разгоном, с торможением или с тем и другим."
---

# Функция времени перехода

Классы `ease-*` задают `transition-timing-function` — кривую, по которой
переход распределяет изменение во времени. Берите их, когда движение должно
начинаться мягко, останавливаться мягко или идти равномерно.

## Пример

Наведите указатель на дорожку или перейдите на неё клавишей Tab. Все точки
идут 0,5 с (`duration-slow`); подпись — класс кривой.

:::example {id="utilities/animation/animation-transition-timing-function" label="Четыре кривые перехода"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `ease-linear` | `transition-timing-function: linear` | — |
| `ease-in` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1)` | — |
| `ease-out` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1)` | — |
| `ease-in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Выбор кривой

| Класс | Когда брать |
| :--- | :--- |
| `ease-linear` | равномерное изменение: индикатор хода, вращение |
| `ease-in` | элемент уходит: разгон без торможения |
| `ease-out` | элемент приходит: быстрый старт, мягкая остановка |
| `ease-in-out` | перемещение на месте: мягко в начале и в конце |

```html
<div class="duration-normal ease-out hover:shadow-3">Карточка</div>
```

### Кривые темы

Классы `transition-*` и класс `animation` используют кривые темы, а не эти
классы: `--sf-ease-move` и `--sf-animation`. Для своих правил тема даёт ещё
`--sf-ease-enter` (появление) и `--sf-ease-exit` (исчезновение); классов для
них нет, их подключают в CSS проекта.

```css
.my-drawer {
  transition: transform var(--sf-duration-normal) var(--sf-ease-enter);
}
```

## Ограничения

- `ease-*` и классы `transition-*` задают одно свойство с одинаковой
  специфичностью; итог зависит от порядка таблиц стилей. Не ставьте их на один
  элемент.
- Кривая действует только на переходы. На CSS-анимацию класса `animation` она
  не влияет.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Продолжительность перехода](/ru/utilities/animation/animation-transition-duration/)
- [Задержка перехода](/ru/utilities/animation/animation-transition-delay/)
- [Общее свойство перехода](/ru/utilities/animation/animation-transition-property/)
