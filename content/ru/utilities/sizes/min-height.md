---
title: "Минимальная высота"
description: "Не даёт элементу стать ниже высоты родителя, высоты окна или своего содержимого и снимает автоматический минимум во флекс-раскладке."
---

# Минимальная высота

Классы минимальной высоты задают свойство `min-height`: элемент может быть
выше, но не ниже заданного значения. Берите их, чтобы блок занимал хотя бы
высоту родителя или окна и при этом рос вместе с содержимым.

## Пример

### Высота родителя

Пунктирная рамка — родитель с высотой `h-e6`. `min-h-full` растягивает
элемент на высоту родителя и сильнее его собственной высоты `h-c0`.

:::example {id="utilities/sizes/min-height" label="min-h-full"}
:::

### Высота содержимого

У всех образцов высота `h-a8` — меньше, чем нужно тексту. Без минимума текст
выходит за фон; `min-h-min`, `min-h-max` и `min-h-fit` растягивают элемент
до высоты содержимого.

:::example {id="utilities/sizes/min-height-content" label="min-h-min, min-h-max и min-h-fit"}
:::

### Прокрутка во флекс-колонке

Флекс-элемент по умолчанию не становится ниже своего содержимого, поэтому
вложенный список не прокручивается и обрезается рамкой. `min-h-0` снимает
этот минимум: элемент занимает оставшееся место, а список внутри
прокручивается.

:::example {id="utilities/sizes/min-height-flex" label="min-h-0 во флекс-колонке"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `min-h-full` | `min-height: 100%` | — |
| `min-h-screen` | `min-height: 100vh` | — |
| `min-h-min` | `min-height: -webkit-min-content; min-height: -moz-min-content; min-height: min-content` | — |
| `min-h-max` | `min-height: -webkit-max-content; min-height: -moz-max-content; min-height: max-content` | — |
| `min-h-fit` | `min-height: -webkit-fit-content; min-height: -moz-fit-content; min-height: fit-content` | — |
| `min-h-0` | `min-height: 0` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:min-h-full`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать значение

- Страница или первый экран не ниже окна, но с ростом по содержимому —
  `min-h-screen`.
- Блок не ниже родителя с заданной высотой — `min-h-full`.
- Флекс- или грид-элемент, внутри которого прокручивается содержимое, —
  `min-h-0`.
- Элемент с фиксированной высотой, который не должен обрезать текст, —
  `min-h-fit`.

```html
<body class="flex flex-col min-h-screen">
  <header>…</header>
  <main class="flex-1">…</main>
  <footer>…</footer>
</body>

<div class="flex flex-col h-screen">
  <header>…</header>
  <div class="flex-1 min-h-0 flex flex-col">
    <div class="flex-1 overflow-auto">Прокручиваемая область</div>
  </div>
</div>
```

### Минимум по ширине экрана

С префиксом ширины класс действует от указанной ширины и шире.

```html
<section class="md:min-h-screen">Первый экран</section>
```

## Ограничения

- Шагов шкалы размеров у семейства нет: точную высоту задают классы
  [высоты](/ru/utilities/sizes/height/).
- `min-h-full` не действует, если высота родителя не задана.
- `min-h-screen` — высота окна (`100vh`). На мобильных браузерах она может
  быть больше видимой области, пока показана адресная строка.
- Минимальная высота сильнее высоты и максимальной высоты.
- У семейства нет префиксов состояния.

## См. также

- [Высота](/ru/utilities/sizes/height/)
- [Максимальная высота](/ru/utilities/sizes/max-height/)
- [Минимальная ширина](/ru/utilities/sizes/min-width/)
- [Переполнение элемента](/ru/utilities/layout/overflow/)
