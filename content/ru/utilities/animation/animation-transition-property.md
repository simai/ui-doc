---
title: "Общее свойство перехода"
description: "Включает плавный переход для выбранной группы свойств — цвета, тени, трансформации, размеров — с длительностью и кривой темы."
---

# Общее свойство перехода

Классы `transition-*` выбирают, какие свойства элемента меняются плавно, и
сразу задают переходу длительность и кривую темы. Берите их, когда элемент
меняет цвет, тень, трансформацию или размер при наведении, фокусе или смене
класса.

## Пример

### Группы свойств

Наведите указатель на образцы: у всех при наведении меняются цвет текста,
рамка, тень и масштаб. Подпись — класс; плавно меняется только то, что он
включает, остальное — скачком.

:::example {id="utilities/animation/animation-transition-property" label="Какие свойства меняются плавно"}
:::

### Размеры

Наведите указатель на полосу или перейдите на неё клавишей Tab: она растёт в
ширину и в высоту. Плавно меняется только размер, который назван в классе.

:::example {id="utilities/animation/animation-transition-property-size" label="Переход ширины и высоты"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте
ширину окна просмотра: на узком экране цвет меняется скачком, начиная с
ширины `md` — плавно.

:::example {id="utilities/animation/animation-transition-property-responsive" label="Переход по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `transition-none` | `transition-property: none` | — |
| `transition-all` | `transition-property: all; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition` | `transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, -webkit-text-decoration-color, -webkit-transform, -webkit-filter, -webkit-backdrop-filter; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-transform, -webkit-filter, -webkit-backdrop-filter; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-colors` | `transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-opacity` | `transition-property: opacity; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-shadow` | `transition-property: box-shadow; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-transform` | `transition-property: -webkit-transform; transition-property: transform; transition-property: transform, -webkit-transform; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-width` | `transition-property: width; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-height` | `transition-property: height; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-size` | `transition-property: width, height; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-max-width` | `transition-property: max-width; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-max-height` | `transition-property: max-height; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-max-size` | `transition-property: max-width, max-height; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-flex` | `transition-property: flex, flex-basis; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-flex-basis` | `transition-property: flex-basis; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |
| `transition-layout` | `transition-property: flex-grow, flex-shrink, flex-basis, width, min-width, max-width; transition-timing-function: var(--sf-ease-move); transition-duration: var(--sf-duration-normal)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:transition-none`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-ease-move` | `cubic-bezier(.65, 0, .35, 1)` |
| `--sf-duration-normal` | `0.3S` |

## Применение

### Выбор группы

Кроме `transition-none`, каждый класс задаёт длительность
`--sf-duration-normal` (0,3 с) и кривую `--sf-ease-move`.

| Класс | Что меняется плавно |
| :--- | :--- |
| `transition` | цвета, прозрачность, тень, трансформация и фильтры |
| `transition-colors` | цвет текста, фона, рамки, подчёркивания, заливки и обводки |
| `transition-opacity` | прозрачность |
| `transition-shadow` | тень |
| `transition-transform` | трансформация |
| `transition-all` | все свойства |
| `transition-none` | ничего: отключает переход |

Узкая группа дешевле для браузера и предсказуемее, чем `transition-all`:
плавно меняется только то, что задумано.

```html
<button type="button" class="transition-colors hover:color-primary">Кнопка</button>
<div class="transition hover:shadow-3 hover:scale-2">Карточка</div>
```

### Размеры и флекс

| Класс | Что меняется плавно |
| :--- | :--- |
| `transition-width`, `transition-height`, `transition-size` | ширина, высота, обе |
| `transition-max-width`, `transition-max-height`, `transition-max-size` | ограничения `max-*` |
| `transition-flex`, `transition-flex-basis` | `flex` и `flex-basis` |
| `transition-layout` | `flex-grow`, `flex-shrink`, `flex-basis`, `width`, `min-width`, `max-width` |

`transition-layout` подходит панелям, которые переключаются между
фиксированной шириной и `flex-1`.

### Другая длительность

Длительность и кривую класса задают токены. Чтобы изменить их для одного
блока, переопределите токен на нём:

```css
.my-panel {
  --sf-duration-normal: var(--sf-duration-slow);
}
```

## Ограничения

- Классы `duration-*` и `ease-*` задают те же свойства, что и `transition-*`,
  с одинаковой специфичностью; итог зависит от порядка таблиц стилей. На
  одном элементе с `transition-*` меняйте длительность и кривую токенами.
- Плавный переход нужен числам на обоих концах. Переход к `auto`,
  `fit-content`, `max-content` и обратно идёт скачком.
- Классы не учитывают системную настройку уменьшения движения
  (`prefers-reduced-motion`).
- Префиксов состояния у семейства нет.

## См. также

- [Продолжительность перехода](/ru/utilities/animation/animation-transition-duration/)
- [Функция времени перехода](/ru/utilities/animation/animation-transition-timing-function/)
- [Задержка перехода](/ru/utilities/animation/animation-transition-delay/)
- [Масштабирование](/ru/utilities/transform/transform-scale/)
