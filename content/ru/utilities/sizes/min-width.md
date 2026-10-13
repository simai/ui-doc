---
title: "Минимальная ширина"
description: "Не даёт элементу стать уже родителя или своего содержимого и снимает автоматический минимум во флекс-раскладке."
---

# Минимальная ширина

Классы минимальной ширины задают свойство `min-width`: элемент может быть
шире, но не уже заданного значения. Чаще всего нужен `min-w-0`: он позволяет
флекс-элементу сжиматься, чтобы длинный текст сокращался многоточием.

## Пример

### Сокращение текста во флекс-ряду

Флекс-элемент по умолчанию не становится уже своего содержимого: длинное имя
файла не сокращается и выталкивает метку за край. С `min-w-0` элемент
сжимается, и текст сокращается многоточием.

:::example {id="utilities/sizes/min-width" label="min-w-0 во флекс-ряду"}
:::

### Ширина содержимого и родителя

Пунктирная рамка — родитель. У всех образцов ширина `w-0`, и минимум задаёт
их ширину: `min-w-min` — по самому длинному слову, `min-w-max` — по всей
строке, даже если она шире родителя, `min-w-fit` — по строке, но не шире
родителя, `min-w-full` — по ширине родителя.

:::example {id="utilities/sizes/min-width-content" label="min-w-min, min-w-max, min-w-fit и min-w-full"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `min-w-min` | `min-width: -webkit-min-content; min-width: -moz-min-content; min-width: min-content` | — |
| `min-w-max` | `min-width: -webkit-max-content; min-width: -moz-max-content; min-width: max-content` | — |
| `min-w-fit` | `min-width: -webkit-fit-content; min-width: -moz-fit-content; min-width: fit-content` | — |
| `min-w-full` | `min-width: 100%` | — |
| `min-w-0` | `min-width: 0` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:min-w-min`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать значение

- Флекс- или грид-элемент с текстом, который должен сокращаться или
  переноситься, — `min-w-0`.
- Кнопка или метка, текст которой не должен переноситься, — `min-w-max`.
- Элемент не уже родителя, например таблица в прокручиваемой обёртке, —
  `min-w-full`.

```html
<div class="flex items-center gap-2">
  <img class="w-c0 h-c0" src="file.svg" alt="">
  <div class="flex-1 min-w-0">
    <p class="truncate">Очень длинное имя файла.pdf</p>
  </div>
  <span>PDF</span>
</div>

<div class="overflow-x-auto">
  <table class="min-w-full">…</table>
</div>
```

### Минимум по ширине экрана

С префиксом ширины класс действует от указанной ширины и шире.

```html
<div class="min-w-0 md:min-w-max">…</div>
```

## Ограничения

- Шагов шкалы размеров у семейства нет: точную ширину задают классы
  [ширины](/ru/utilities/sizes/width/).
- Минимальная ширина сильнее ширины и максимальной ширины.
- `min-w-max` и `min-w-full` могут вывести элемент за родителя; на узком
  экране это даёт горизонтальную прокрутку.
- У семейства нет префиксов состояния.

## См. также

- [Ширина](/ru/utilities/sizes/width/)
- [Максимальная ширина](/ru/utilities/sizes/max-width/)
- [Минимальная высота](/ru/utilities/sizes/min-height/)
- [Обрезка текста](/ru/utilities/typography/text-overflow/)
- [Гибкость элементов](/ru/utilities/flex/flexibility/)
