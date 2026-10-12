---
title: "Выравнивание текста"
description: "Выравнивает текст по началу строки, по центру, по концу или по ширине."
---

# Выравнивание текста

Классы задают выравнивание строк текста внутри блока. `text-start` и
`text-end` следуют направлению письма: в документе справа налево начало
строки справа. Берите их вместо выравнивания по левому и правому краю.

## Пример

### Значения

Подпись над образцом — класс, который на нём стоит.

:::example {id="utilities/typography/text-align" label="text-start, text-center, text-end, text-justify"}
:::

### Направление письма

Один и тот же класс в блоке слева направо и справа налево.

:::example {id="utilities/typography/text-align-direction" label="text-start и text-end при dir=ltr и dir=rtl"}
:::

### Ширина экрана

Меняйте ширину окна просмотра: начиная с ширины `md` текст выравнивается по
началу строки.

:::example {id="utilities/typography/text-align-responsive" label="text-center md:text-start"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `text-start` | `text-align: start` | — |
| `text-center` | `text-align: center` | — |
| `text-end` | `text-align: end` | — |
| `text-justify` | `text-align: justify` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:text-start`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Выравнивание действует на строчное содержимое блока: текст, ссылки, значки,
строчные блоки. Сам блок оно не двигает — для этого есть флекс и отступы.

```html
<td class="text-end num-tabular">1 204,50</td>
<p class="text-center md:text-start">Подпись под карточкой</p>
```

Цифры в таблице выравнивайте по концу вместе с `num-tabular`, чтобы разряды
стояли друг под другом.

## Ограничения

- `text-justify` растягивает пробелы между словами. В узких колонках и без
  переносов слов (`hyphens`) появляются заметные просветы.
- Длинный текст по центру читать трудно: оставьте `text-center` для
  заголовков и коротких подписей.

## См. также

- [Направление письма](/ru/guide/fundamentals/directions/)
- [Начертание цифр](/ru/utilities/typography/font-variant-numeric/)
