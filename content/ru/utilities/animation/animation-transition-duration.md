---
title: "Продолжительность перехода"
description: "Задаёт, сколько длится плавный переход между состояниями элемента: быстро, обычно или медленно."
---

# Продолжительность перехода

Классы `duration-*` задают `transition-duration` по одному из трёх токенов
времени. Берите их, когда элемент должен плавно менять вид при наведении,
фокусе или смене класса, и скорость этого изменения важна.

## Пример

Наведите указатель на дорожку или перейдите на неё клавишей Tab: точка
проходит одинаковый путь, меняется только длительность. Подпись — класс на
точке.

:::example {id="utilities/animation/animation-transition-duration" label="Три длительности перехода"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `duration-fast` | `transition-duration: var(--sf-duration-fast)` | — |
| `duration-normal` | `transition-duration: var(--sf-duration-normal)` | — |
| `duration-slow` | `transition-duration: var(--sf-duration-slow)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-duration-fast` | `0.1S` |
| `--sf-duration-normal` | `0.3S` |
| `--sf-duration-slow` | `0.5S` |

## Применение

### Выбор длительности

| Класс | Токен | Значение |
| :--- | :--- | :--- |
| `duration-fast` | `--sf-duration-fast` | 0,1 с |
| `duration-normal` | `--sf-duration-normal` | 0,3 с |
| `duration-slow` | `--sf-duration-slow` | 0,5 с |

Быстрый переход подходит для отклика на наведение и нажатие, обычный — для
смены цвета и тени, медленный — для крупных перемещений.

### Сочетание с функцией времени и задержкой

Без класса `transition-*` переход охватывает все свойства (значение
`transition-property` по умолчанию — `all`). Кривую и задержку добавляют
классы `ease-*` и `delay-*`:

```html
<a class="duration-fast ease-out hover:color-primary" href="#">Ссылка</a>
```

### Длительность у классов transition-*

Классы [свойства перехода](/ru/utilities/animation/animation-transition-property/)
сами задают длительность — токен `--sf-duration-normal`. Чтобы изменить её
для такого элемента, переопределите токен на нём или на его предке:

```css
.my-panel {
  --sf-duration-normal: var(--sf-duration-slow);
}
```

## Ограничения

- `duration-*` и классы `transition-*` задают одно свойство с одинаковой
  специфичностью. Какой класс победит, решает порядок таблиц стилей, поэтому
  не ставьте их на один элемент — используйте токен, как показано выше.
- Классы не учитывают системную настройку уменьшения движения
  (`prefers-reduced-motion`).
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Общее свойство перехода](/ru/utilities/animation/animation-transition-property/)
- [Функция времени перехода](/ru/utilities/animation/animation-transition-timing-function/)
- [Задержка перехода](/ru/utilities/animation/animation-transition-delay/)
- [Продолжительность анимации](/ru/utilities/animation/animation-duration/)
