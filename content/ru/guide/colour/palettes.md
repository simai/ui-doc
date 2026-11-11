---
title: "Цветовые примитивы и палитры"
description: "Цветовые примитивы — это конкретные цвета палитр Framework, единственный источник цветовых значений."
---

# Цветовые примитивы и палитры

Цветовые примитивы — это конкретные цвета палитр Framework, единственный
источник цветовых значений. Через них меняется фирменный цвет: роли и
компоненты получают новые значения сами.

## Палитры и тоны

**Палитра** — набор тонов одного цвета от самого светлого до самого тёмного.
Во Framework восемь палитр:

| Группа | Палитры |
|:---|:---|
| Нейтральная | `neutral` |
| Акцентные | `primary`, `secondary`, `tertiary` |
| Статусные | `info`, `success`, `warning`, `error` — имена оттенков [статической палитры](#статусы-оттенки-статической-палитры), а не свои цвета |

Отдельно стоят три базовых цвета без тонов: `--sf-white`, `--sf-black` и
`--sf-transparent`.

Ещё шестнадцать постоянных оттенков, которые от темы не зависят, описаны в
разделе [«Статическая палитра»](#статическая-палитра).

У каждой палитры шестнадцать тонов: **98, 95, 90, 85, 80, 70, 60, 50, 40, 35,
30, 25, 20, 15, 10, 5**. **Тон** — это светлота: 98 почти белый, 5 почти
чёрный. Тона 100 и 0 заменяют белый и чёрный.

Восемь палитр по всем шестнадцати тонам. Наведите указатель на образец:
подсказка назовёт примитив.

:::example {label="Палитры и тоны"}
```html
<div class="sf-doc-ramp-grid">
    <span></span><span class="sf-doc-ramp-tone">98</span><span class="sf-doc-ramp-tone">95</span><span class="sf-doc-ramp-tone">90</span><span class="sf-doc-ramp-tone">85</span><span class="sf-doc-ramp-tone">80</span><span class="sf-doc-ramp-tone">70</span><span class="sf-doc-ramp-tone">60</span><span class="sf-doc-ramp-tone">50</span><span class="sf-doc-ramp-tone">40</span><span class="sf-doc-ramp-tone">35</span><span class="sf-doc-ramp-tone">30</span><span class="sf-doc-ramp-tone">25</span><span class="sf-doc-ramp-tone">20</span><span class="sf-doc-ramp-tone">15</span><span class="sf-doc-ramp-tone">10</span><span class="sf-doc-ramp-tone">5</span>
    <code>neutral</code><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-98)" title="--sf-neutral-98"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-95)" title="--sf-neutral-95"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-90)" title="--sf-neutral-90"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-85)" title="--sf-neutral-85"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-80)" title="--sf-neutral-80"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-70)" title="--sf-neutral-70"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-60)" title="--sf-neutral-60"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-50)" title="--sf-neutral-50"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-40)" title="--sf-neutral-40"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-35)" title="--sf-neutral-35"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-30)" title="--sf-neutral-30"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-25)" title="--sf-neutral-25"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-20)" title="--sf-neutral-20"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-15)" title="--sf-neutral-15"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-10)" title="--sf-neutral-10"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-neutral-5)" title="--sf-neutral-5"></span>
    <code>primary</code><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-98)" title="--sf-primary-98"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-95)" title="--sf-primary-95"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-90)" title="--sf-primary-90"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-85)" title="--sf-primary-85"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-80)" title="--sf-primary-80"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-70)" title="--sf-primary-70"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-60)" title="--sf-primary-60"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-50)" title="--sf-primary-50"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-40)" title="--sf-primary-40"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-35)" title="--sf-primary-35"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-30)" title="--sf-primary-30"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-25)" title="--sf-primary-25"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-20)" title="--sf-primary-20"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-15)" title="--sf-primary-15"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-10)" title="--sf-primary-10"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-primary-5)" title="--sf-primary-5"></span>
    <code>secondary</code><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-98)" title="--sf-secondary-98"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-95)" title="--sf-secondary-95"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-90)" title="--sf-secondary-90"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-85)" title="--sf-secondary-85"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-80)" title="--sf-secondary-80"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-70)" title="--sf-secondary-70"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-60)" title="--sf-secondary-60"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-50)" title="--sf-secondary-50"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-40)" title="--sf-secondary-40"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-35)" title="--sf-secondary-35"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-30)" title="--sf-secondary-30"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-25)" title="--sf-secondary-25"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-20)" title="--sf-secondary-20"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-15)" title="--sf-secondary-15"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-10)" title="--sf-secondary-10"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-secondary-5)" title="--sf-secondary-5"></span>
    <code>tertiary</code><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-98)" title="--sf-tertiary-98"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-95)" title="--sf-tertiary-95"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-90)" title="--sf-tertiary-90"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-85)" title="--sf-tertiary-85"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-80)" title="--sf-tertiary-80"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-70)" title="--sf-tertiary-70"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-60)" title="--sf-tertiary-60"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-50)" title="--sf-tertiary-50"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-40)" title="--sf-tertiary-40"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-35)" title="--sf-tertiary-35"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-30)" title="--sf-tertiary-30"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-25)" title="--sf-tertiary-25"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-20)" title="--sf-tertiary-20"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-15)" title="--sf-tertiary-15"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-10)" title="--sf-tertiary-10"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-tertiary-5)" title="--sf-tertiary-5"></span>
    <code>info</code><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-98)" title="--sf-info-98"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-95)" title="--sf-info-95"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-90)" title="--sf-info-90"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-85)" title="--sf-info-85"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-80)" title="--sf-info-80"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-70)" title="--sf-info-70"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-60)" title="--sf-info-60"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-50)" title="--sf-info-50"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-40)" title="--sf-info-40"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-35)" title="--sf-info-35"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-30)" title="--sf-info-30"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-25)" title="--sf-info-25"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-20)" title="--sf-info-20"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-15)" title="--sf-info-15"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-10)" title="--sf-info-10"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-info-5)" title="--sf-info-5"></span>
    <code>success</code><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-98)" title="--sf-success-98"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-95)" title="--sf-success-95"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-90)" title="--sf-success-90"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-85)" title="--sf-success-85"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-80)" title="--sf-success-80"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-70)" title="--sf-success-70"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-60)" title="--sf-success-60"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-50)" title="--sf-success-50"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-40)" title="--sf-success-40"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-35)" title="--sf-success-35"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-30)" title="--sf-success-30"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-25)" title="--sf-success-25"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-20)" title="--sf-success-20"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-15)" title="--sf-success-15"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-10)" title="--sf-success-10"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-success-5)" title="--sf-success-5"></span>
    <code>warning</code><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-98)" title="--sf-warning-98"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-95)" title="--sf-warning-95"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-90)" title="--sf-warning-90"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-85)" title="--sf-warning-85"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-80)" title="--sf-warning-80"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-70)" title="--sf-warning-70"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-60)" title="--sf-warning-60"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-50)" title="--sf-warning-50"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-40)" title="--sf-warning-40"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-35)" title="--sf-warning-35"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-30)" title="--sf-warning-30"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-25)" title="--sf-warning-25"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-20)" title="--sf-warning-20"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-15)" title="--sf-warning-15"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-10)" title="--sf-warning-10"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-warning-5)" title="--sf-warning-5"></span>
    <code>error</code><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-98)" title="--sf-error-98"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-95)" title="--sf-error-95"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-90)" title="--sf-error-90"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-85)" title="--sf-error-85"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-80)" title="--sf-error-80"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-70)" title="--sf-error-70"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-60)" title="--sf-error-60"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-50)" title="--sf-error-50"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-40)" title="--sf-error-40"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-35)" title="--sf-error-35"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-30)" title="--sf-error-30"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-25)" title="--sf-error-25"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-20)" title="--sf-error-20"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-15)" title="--sf-error-15"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-10)" title="--sf-error-10"></span><span class="sf-doc-ramp-swatch" style="background: var(--sf-error-5)" title="--sf-error-5"></span>
</div>
```
```css
.sf-doc-ramp-grid {
  display: grid;
  grid-template-columns: minmax(4.5rem, auto) repeat(16, minmax(0, 1fr));
  gap: var(--sf-space-1\/4);
  align-items: center;
}
.sf-doc-ramp-grid code {
  overflow-wrap: anywhere;
  padding-inline-end: var(--sf-space-1\/2);
}
.sf-doc-ramp-tone {
  text-align: center;
  font-size: var(--sf-text--size-1\/2);
  color: var(--sf-on-surface-variant);
}
.sf-doc-ramp-swatch {
  block-size: var(--sf-space-3);
  border-radius: var(--sf-radius--ui);
}
```
:::

Шаг неравномерный: у краёв (светлые фоны, тёмный текст) нужны мелкие различия,
поэтому там шаг 5; в середине, где цвет используется реже, — шаг 10.

Палитры построены по модели HCT (оттенок, насыщенность, тон): тон в имени
означает одинаковую воспринимаемую светлоту во всех палитрах. Поэтому `--sf-primary-40` и `--sf-error-40` одинаково светлы, и
пара «тон 40 на белом» даёт сопоставимый контраст в любой палитре.

Статусные палитры — не отдельные цвета: каждая из них — другое имя оттенка
[статической палитры](#статусы-оттенки-статической-палитры), поэтому за
фирменным цветом они не идут. При красном фирменном цвете «информация» не
становится красной и не читается как опасность.

Значения примитивов выбранного выпуска читаются в поставке, в
`distr/core/css/core.css`. Справочник [«Все переменные»](/ru/guide/colour/all-tokens/)
примитивы не повторяет: в нём роли и остальные токены.

## Правило имени примитива

```text
--sf-{палитра}-{тон}                 сплошной цвет
--sf-{палитра}-{тон}--alfa-{ступень}  тот же цвет с непрозрачностью {ступень} %
--sf-{white|black}--alfa-{ступень}    полупрозрачные белый и чёрный
```

Примеры: `--sf-primary-40`, `--sf-neutral-95`, `--sf-primary-50--alfa-12`,
`--sf-black--alfa-8`.

Ступень прозрачности — целое число процентов из одной общей шкалы (см. [Прозрачность](/ru/guide/colour/transparency/)), а
не доля от 0 до 1. Полупрозрачные примитивы записаны готовыми значениями,
поэтому браузеру не нужно их вычислять. Непрозрачность — целый байт,
ближайший к ступени: 12 % — это 31 из 255. В исходниках Framework такой
примитив записан восьмизначным шестнадцатеричным значением (`#0073ed1f` — тон
50 палитры primary при 12 %), в поставке `core.css` — тем же цветом в `rgba()`:
`rgba(0,115,237,0.12157)`.

Полупрозрачные ступени есть не у каждого тона, а только у тех, которыми что-то
рисуют. В основном это тон **50** (заливки и слои состояния в светлой теме) и
тон **90** (слои состояния в тёмной). Примитив, который ничто во
Framework не использует, не проходит контракт `alpha-scale`.

## Статическая палитра

Кроме восьми палитр темы, которые идут за фирменным цветом, во Framework есть
шестнадцать постоянных оттенков (решение C17): `red`, `orange`, `amber`,
`yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`,
`purple`, `pink`, `brown` и `gray`. У каждого те же шестнадцать тонов и
полупрозрачные ступени: `--sf-green-50`, `--sf-green-50--alfa-12`. Смена
фирменного цвета их не двигает. Статусы своих цветов не имеют: каждый берёт
один из этих оттенков (ниже, «Статусы — оттенки статической палитры»).

:::example {label="Оттенки"}
```html
<div class="sf-doc-palette-grid">
    <span></span><span class="sf-doc-palette-tone">95</span><span class="sf-doc-palette-tone">90</span><span class="sf-doc-palette-tone">80</span><span class="sf-doc-palette-tone">70</span><span class="sf-doc-palette-tone">60</span><span class="sf-doc-palette-tone">50</span><span class="sf-doc-palette-tone">40</span><span class="sf-doc-palette-tone">30</span><span class="sf-doc-palette-tone">20</span><span class="sf-doc-palette-tone">10</span>
    <code>red</code><span class="sf-doc-palette-swatch" style="background: var(--sf-red-95)" title="--sf-red-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-90)" title="--sf-red-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-80)" title="--sf-red-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-70)" title="--sf-red-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-60)" title="--sf-red-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-50)" title="--sf-red-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-40)" title="--sf-red-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-30)" title="--sf-red-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-20)" title="--sf-red-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-red-10)" title="--sf-red-10"></span>
    <code>orange</code><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-95)" title="--sf-orange-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-90)" title="--sf-orange-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-80)" title="--sf-orange-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-70)" title="--sf-orange-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-60)" title="--sf-orange-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-50)" title="--sf-orange-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-40)" title="--sf-orange-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-30)" title="--sf-orange-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-20)" title="--sf-orange-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-orange-10)" title="--sf-orange-10"></span>
    <code>amber</code><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-95)" title="--sf-amber-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-90)" title="--sf-amber-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-80)" title="--sf-amber-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-70)" title="--sf-amber-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-60)" title="--sf-amber-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-50)" title="--sf-amber-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-40)" title="--sf-amber-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-30)" title="--sf-amber-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-20)" title="--sf-amber-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-amber-10)" title="--sf-amber-10"></span>
    <code>yellow</code><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-95)" title="--sf-yellow-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-90)" title="--sf-yellow-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-80)" title="--sf-yellow-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-70)" title="--sf-yellow-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-60)" title="--sf-yellow-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-50)" title="--sf-yellow-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-40)" title="--sf-yellow-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-30)" title="--sf-yellow-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-20)" title="--sf-yellow-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-yellow-10)" title="--sf-yellow-10"></span>
    <code>lime</code><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-95)" title="--sf-lime-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-90)" title="--sf-lime-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-80)" title="--sf-lime-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-70)" title="--sf-lime-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-60)" title="--sf-lime-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-50)" title="--sf-lime-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-40)" title="--sf-lime-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-30)" title="--sf-lime-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-20)" title="--sf-lime-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-lime-10)" title="--sf-lime-10"></span>
    <code>green</code><span class="sf-doc-palette-swatch" style="background: var(--sf-green-95)" title="--sf-green-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-90)" title="--sf-green-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-80)" title="--sf-green-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-70)" title="--sf-green-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-60)" title="--sf-green-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-50)" title="--sf-green-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-40)" title="--sf-green-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-30)" title="--sf-green-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-20)" title="--sf-green-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-green-10)" title="--sf-green-10"></span>
    <code>teal</code><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-95)" title="--sf-teal-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-90)" title="--sf-teal-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-80)" title="--sf-teal-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-70)" title="--sf-teal-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-60)" title="--sf-teal-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-50)" title="--sf-teal-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-40)" title="--sf-teal-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-30)" title="--sf-teal-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-20)" title="--sf-teal-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-teal-10)" title="--sf-teal-10"></span>
    <code>cyan</code><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-95)" title="--sf-cyan-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-90)" title="--sf-cyan-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-80)" title="--sf-cyan-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-70)" title="--sf-cyan-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-60)" title="--sf-cyan-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-50)" title="--sf-cyan-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-40)" title="--sf-cyan-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-30)" title="--sf-cyan-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-20)" title="--sf-cyan-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-cyan-10)" title="--sf-cyan-10"></span>
    <code>sky</code><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-95)" title="--sf-sky-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-90)" title="--sf-sky-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-80)" title="--sf-sky-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-70)" title="--sf-sky-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-60)" title="--sf-sky-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-50)" title="--sf-sky-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-40)" title="--sf-sky-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-30)" title="--sf-sky-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-20)" title="--sf-sky-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-sky-10)" title="--sf-sky-10"></span>
    <code>blue</code><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-95)" title="--sf-blue-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-90)" title="--sf-blue-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-80)" title="--sf-blue-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-70)" title="--sf-blue-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-60)" title="--sf-blue-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-50)" title="--sf-blue-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-40)" title="--sf-blue-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-30)" title="--sf-blue-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-20)" title="--sf-blue-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-blue-10)" title="--sf-blue-10"></span>
    <code>indigo</code><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-95)" title="--sf-indigo-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-90)" title="--sf-indigo-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-80)" title="--sf-indigo-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-70)" title="--sf-indigo-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-60)" title="--sf-indigo-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-50)" title="--sf-indigo-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-40)" title="--sf-indigo-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-30)" title="--sf-indigo-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-20)" title="--sf-indigo-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-indigo-10)" title="--sf-indigo-10"></span>
    <code>violet</code><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-95)" title="--sf-violet-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-90)" title="--sf-violet-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-80)" title="--sf-violet-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-70)" title="--sf-violet-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-60)" title="--sf-violet-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-50)" title="--sf-violet-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-40)" title="--sf-violet-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-30)" title="--sf-violet-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-20)" title="--sf-violet-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-violet-10)" title="--sf-violet-10"></span>
    <code>purple</code><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-95)" title="--sf-purple-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-90)" title="--sf-purple-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-80)" title="--sf-purple-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-70)" title="--sf-purple-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-60)" title="--sf-purple-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-50)" title="--sf-purple-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-40)" title="--sf-purple-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-30)" title="--sf-purple-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-20)" title="--sf-purple-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-purple-10)" title="--sf-purple-10"></span>
    <code>pink</code><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-95)" title="--sf-pink-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-90)" title="--sf-pink-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-80)" title="--sf-pink-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-70)" title="--sf-pink-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-60)" title="--sf-pink-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-50)" title="--sf-pink-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-40)" title="--sf-pink-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-30)" title="--sf-pink-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-20)" title="--sf-pink-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-pink-10)" title="--sf-pink-10"></span>
    <code>brown</code><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-95)" title="--sf-brown-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-90)" title="--sf-brown-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-80)" title="--sf-brown-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-70)" title="--sf-brown-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-60)" title="--sf-brown-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-50)" title="--sf-brown-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-40)" title="--sf-brown-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-30)" title="--sf-brown-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-20)" title="--sf-brown-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-brown-10)" title="--sf-brown-10"></span>
    <code>gray</code><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-95)" title="--sf-gray-95"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-90)" title="--sf-gray-90"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-80)" title="--sf-gray-80"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-70)" title="--sf-gray-70"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-60)" title="--sf-gray-60"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-50)" title="--sf-gray-50"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-40)" title="--sf-gray-40"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-30)" title="--sf-gray-30"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-20)" title="--sf-gray-20"></span><span class="sf-doc-palette-swatch" style="background: var(--sf-gray-10)" title="--sf-gray-10"></span>
</div>
```
```css
.sf-doc-palette-grid {
  display: grid;
  grid-template-columns: minmax(3.5rem, auto) repeat(10, minmax(0, 1fr));
  gap: var(--sf-space-1\/4);
  align-items: center;
}

.sf-doc-palette-grid code {
  overflow-wrap: anywhere;
  padding-inline-end: var(--sf-space-1\/2);
}

.sf-doc-palette-tone {
  text-align: center;
  font-size: var(--sf-text--size-1\/2);
  color: var(--sf-on-surface-variant);
}

.sf-doc-palette-swatch {
  block-size: var(--sf-space-3);
  border-radius: var(--sf-radius--ui);
}
```
:::

### Статусы — оттенки статической палитры

Роль статуса (`--sf-error`, `--sf-warning`, `--sf-success`, `--sf-info` и их
`-container`, `on-…`) — имя оттенка статической палитры: её примитивы
`--sf-error-40` и другие ссылаются на тоны оттенка (`var(--sf-red-40)`). Цвет
и подложку статус берёт из тех же тонов, что и акцент: текст и сплошная
заливка — тон 40 в светлой теме и 80 в тёмной, подложка `-container` — тон 50
при 12 % в светлой и при 24 % в тёмной. В строке ниже слева — роль, справа —
тоны её оттенка: они совпадают. Переключите тему.

:::example {label="Статусы и их оттенки"}
```html
<div class="sf-doc-status-grid">
  <span class="sf-doc-status-head">Роль</span>
  <span class="sf-doc-status-head">Оттенок</span>
  <span class="sf-doc-status-head">Роль, тона 40 и 80, подложка</span>

  <code>error</code>
  <code>red</code>
  <span class="sf-doc-status-tones"><span class="sf-doc-status-swatch" style="background: var(--sf-error)" title="--sf-error"></span><span class="sf-doc-status-swatch" style="background: var(--sf-red-40)" title="--sf-red-40, светлая тема"></span><span class="sf-doc-status-swatch" style="background: var(--sf-red-80)" title="--sf-red-80, тёмная тема"></span><span class="sf-doc-status-chip" style="background: var(--sf-error-container); color: var(--sf-on-error-container)">Ошибка</span></span>

  <code>warning</code>
  <code>amber</code>
  <span class="sf-doc-status-tones"><span class="sf-doc-status-swatch" style="background: var(--sf-warning)" title="--sf-warning"></span><span class="sf-doc-status-swatch" style="background: var(--sf-amber-40)" title="--sf-amber-40, светлая тема"></span><span class="sf-doc-status-swatch" style="background: var(--sf-amber-80)" title="--sf-amber-80, тёмная тема"></span><span class="sf-doc-status-chip" style="background: var(--sf-warning-container); color: var(--sf-on-warning-container)">Внимание</span></span>

  <code>success</code>
  <code>green</code>
  <span class="sf-doc-status-tones"><span class="sf-doc-status-swatch" style="background: var(--sf-success)" title="--sf-success"></span><span class="sf-doc-status-swatch" style="background: var(--sf-green-40)" title="--sf-green-40, светлая тема"></span><span class="sf-doc-status-swatch" style="background: var(--sf-green-80)" title="--sf-green-80, тёмная тема"></span><span class="sf-doc-status-chip" style="background: var(--sf-success-container); color: var(--sf-on-success-container)">Успех</span></span>

  <code>info</code>
  <span><code>blue</code><br><span class="sf-doc-status-note"><code>sky</code> — в следующем выпуске</span></span>
  <span class="sf-doc-status-tones"><span class="sf-doc-status-swatch" style="background: var(--sf-info)" title="--sf-info"></span><span class="sf-doc-status-swatch" style="background: var(--sf-blue-40)" title="--sf-blue-40, светлая тема"></span><span class="sf-doc-status-swatch" style="background: var(--sf-blue-80)" title="--sf-blue-80, тёмная тема"></span><span class="sf-doc-status-chip" style="background: var(--sf-info-container); color: var(--sf-on-info-container)">Информация</span></span>
</div>
```
```css
.sf-doc-status-grid {
  display: grid;
  grid-template-columns: max-content max-content minmax(0, 1fr);
  gap: var(--sf-space-1\/2) var(--sf-space-1);
  align-items: center;
}

.sf-doc-status-head,
.sf-doc-status-note {
  font-size: var(--sf-text--size-1\/2);
  color: var(--sf-on-surface-variant);
}

.sf-doc-status-note {
  display: block;
  max-inline-size: var(--sf-e4);
}

.sf-doc-status-tones {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--sf-space-1\/4);
}

.sf-doc-status-swatch {
  inline-size: var(--sf-space-3);
  block-size: var(--sf-space-3);
  border-radius: var(--sf-radius--ui);
}

.sf-doc-status-chip {
  margin-inline-start: var(--sf-space-1\/2);
  padding: var(--sf-space-1\/4) var(--sf-space-1);
  border-radius: var(--sf-radius--ui);
}
```
:::

Первый образец в строке — сама роль, второй и третий — тона 40 и 80 оттенка:
в светлой теме роль совпадает со вторым, в тёмной — с третьим. Информация
сейчас берёт `blue`; в следующем выпуске Framework она переходит на `sky`.

Примитивы в стилях интерфейса не пишут. Компоненту, которому нужен свой цвет,
дают имя оттенка: класс `sf-hue-{имя}` (любой статический оттенок, а также
`primary`, `secondary` и `tertiary`) задаёт элементу роли `--sf-hue`,
`--sf-on-hue`, `--sf-hue-container` (с `-hover` и `-active`),
`--sf-on-hue-container`, `--sf-on-hue-container-graphic` и `--sf-hue-outline`
для светлой и тёмной темы. Так окрашены, например, инициалы
[аватара](/ru/smart/content/avatar/). Переключите тему: плашки ниже сменят
тон сами.

:::example {label="Роли оттенка"}
```html
<div class="sf-doc-hue-grid">
    <span class="sf-hue-red sf-doc-hue-chip">red</span>
    <span class="sf-hue-orange sf-doc-hue-chip">orange</span>
    <span class="sf-hue-amber sf-doc-hue-chip">amber</span>
    <span class="sf-hue-yellow sf-doc-hue-chip">yellow</span>
    <span class="sf-hue-lime sf-doc-hue-chip">lime</span>
    <span class="sf-hue-green sf-doc-hue-chip">green</span>
    <span class="sf-hue-teal sf-doc-hue-chip">teal</span>
    <span class="sf-hue-cyan sf-doc-hue-chip">cyan</span>
    <span class="sf-hue-sky sf-doc-hue-chip">sky</span>
    <span class="sf-hue-blue sf-doc-hue-chip">blue</span>
    <span class="sf-hue-indigo sf-doc-hue-chip">indigo</span>
    <span class="sf-hue-violet sf-doc-hue-chip">violet</span>
    <span class="sf-hue-purple sf-doc-hue-chip">purple</span>
    <span class="sf-hue-pink sf-doc-hue-chip">pink</span>
    <span class="sf-hue-brown sf-doc-hue-chip">brown</span>
    <span class="sf-hue-gray sf-doc-hue-chip">gray</span>
</div>
```
```css
.sf-doc-hue-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sf-space-1\/2);
}

.sf-doc-hue-chip {
  padding: var(--sf-space-1\/4) var(--sf-space-1);
  border-radius: var(--sf-radius--ui);
  background: var(--sf-hue-container);
  color: var(--sf-on-hue-container);
}
```
:::

## Примитивы не зависят от темы

Примитив — просто цвет. `--sf-primary-40` одинаков в светлой и тёмной теме.
Тему учитывают только роли ([Цветовые роли](/ru/guide/colour/colour-roles/)): именно роль задаёт, что в светлой теме
главный акцент — тон 40, а в тёмной — тон 80.

Поэтому примитив в стилях интерфейса — почти всегда ошибка: элемент,
окрашенный `--sf-primary-40`, в тёмной теме останется тёмно-синим на почти
чёрном фоне.

## Тона, прозрачность и роли

Роли берут цвет из трёх источников:

- **шестнадцать тонов** каждой палитры, белый и чёрный — для текста, линий и
  сплошных заливок;
- **одиннадцать ступеней [прозрачности](/ru/guide/colour/transparency/)** в
  трёх семействах: состояние 4, 8, 12; заливка 12–32; штрих 48, 64, 80 — для
  наведения, выбора, нажатия, плашек и линий;
- **оттенки [статической палитры](#статическая-палитра)** — для цветов, которые
  от темы не зависят.

Других тонов Framework не добавляет: нейтральная палитра сама берёт оттенок
темы, `gray` даёт чистый серый, `brown` — тёплый приглушённый.

### Какой тон берёт роль

| Роль | Светлая тема | Тёмная тема |
|:---|:---|:---|
| Страница `--sf-surface-page` | белый | `neutral-5` |
| Область `--sf-surface-area` | `neutral-98` | `neutral-10` |
| Карточка, поднятое, всплывающее, вложенное | белый, место отделяет тень | `neutral-15`, `neutral-20`, `neutral-25`, `neutral-30` |
| Обратная поверхность `--sf-surface-inverse` | `neutral-20` | `neutral-90` |
| Основной текст `--sf-on-surface` | `neutral-10` | `neutral-90` |
| Второстепенный текст `--sf-on-surface-variant` | `neutral-40` | `neutral-60`; на поднятом и всплывающем — 70, на вложенном — 80 |
| Акцент и статусы: текст и сплошная заливка | тон 40 | тон 80 |
| Наведение и нажатие на акценте | тона 35 и 30 | тона 85 и 90 |
| Текст на акценте `--sf-on-primary` | белый | `primary-20` |
| Подложка акцента `--sf-primary-container` | `primary-50` при 12 % | `primary-50` при 24 % |
| Текст на подложке акцента `--sf-on-primary-container` | `primary-10` | `primary-90` |
| Наведение, выбор, нажатие | `neutral-50` при 4, 8 и 12 % | `neutral-90` при 4, 8 и 12 % |
| Линия `--sf-outline` | `neutral-50` при 80 % | `neutral-90` при 48 % |
| Тонкая линия `--sf-outline-variant` | `neutral-50` при 24 % | `neutral-90` при 24 % |

Текст на основном фоне читается с запасом: основной — 17,2 : 1 в светлой
теме и 14,7 : 1 в тёмной, акцентный — около 6,5 : 1 и 11 : 1.

### Полупрозрачные подложки и состояния

Подложки, наведение, выбор и нажатие — полупрозрачный цвет, а не отдельный
тон. `neutral-50` на белом при 4, 8, 12, 16 и 20 % даёт светлоту 98, 96, 94,
92 и 91; в тёмной теме `neutral-90` на странице при 8, 12, 16 и 20 % даёт 13,
17, 21 и 25.

Полупрозрачный слой подстраивается под место, на котором лежит: на белой
карточке, на тёмной панели и на цветной шапке он остаётся «на ступеньку
темнее места». Один и тот же слой работает на любом месте.

### Где нужен сплошной цвет

- **Текст** берёт только сплошные тона. Единственные полупрозрачные чернила —
  у недоступных элементов, `--sf-on-surface-disabled`: к ним требования
  контраста не относятся.
- **Там, где под элементом движется содержимое** — липкая колонка таблицы,
  кольцо вокруг аватара или бейджа, элемент над картинкой, — полупрозрачный
  слой кладётся поверх сплошного цвета места `--sf-surface-place`. Новый тон
  для этого не нужен: каждое непрозрачное место объявляет свой цвет, и бейджи,
  аватары, флажки, переключатели и слайдеры его читают. Подробнее —
  [«Место под вырезом»](/ru/guide/colour/surfaces/#место-под-вырезом).

## Замена палитры

Проще всего сменить фирменный цвет [генератором темы](/ru/smart/forms/theme-generator/):
он строит из одного цвета все восемь палитр и отдаёт их одним правилом CSS
(`detail.css` его событий или `toCSS()`), которое проект кладёт в свой CSS.
Как строятся палитры — в [Как строятся палитры из одного цвета](#как-строятся-палитры-из-одного-цвета).

Палитру можно задать и вручную: переопределите тона палитры в слое проекта
(см. [Как переопределять правильно](/ru/guide/colour/cascade-layers/#как-переопределять-правильно)). Роли ссылаются на примитивы через `var()`, поэтому обе темы
получат новые значения сами:

```css
@layer project {
  :root {
    --sf-primary-40: #123456;
    --sf-primary-80: #9ab0c8;
  }
}
```

Пример сокращён: он показывает два тона из всех, которые нужно заменить.

Роли палитры `primary` читают такие примитивы (все — в `core.css`; компоненты
примитивы напрямую не читают, поэтому замена доходит до каждого компонента):

| Что | Примитивы |
|:---|:---|
| Тона | `--sf-primary-10`, `-20`, `-30`, `-35`, `-40`, `-50`, `-60`, `-80`, `-85`, `-90` |
| Полупрозрачные ступени тона 50 | `--sf-primary-50--alfa-4`, `-8`, `-12`, `-16`, `-20`, `-24`, `-28`, `-32` |
| Полупрозрачные ступени тона 90 | `--sf-primary-90--alfa-4`, `-8`, `-12`, `-24` |

Роли палитры `info` читают меньше ступеней:

| Что | Примитивы |
|:---|:---|
| Тона | `--sf-info-10`, `-20`, `-30`, `-35`, `-40`, `-50`, `-60`, `-80`, `-85`, `-90` |
| Полупрозрачные ступени тона 50 | `--sf-info-50--alfa-12`, `-16`, `-20`, `-24`, `-28`, `-32` |

Ступеней `--sf-info-50--alfa-4`, `-8` и полупрозрачных ступеней тона 90 у
`info` нет.

Остальные тона палитры (`-5`, `-15`, `-25`, `-70`, `-95`, `-98`) объявлены, но
ролями не читаются; заменять их можно для полноты.

### Как строятся палитры из одного цвета

Палитры Framework построены в модели цвета HCT (Google `material-color-utilities`):
у палитры есть тон (`hue`) и насыщенность (`chroma`), а шестнадцать её тонов —
светлота от 98 до 5. Генератор темы и функции `SF.ThemePalette` берут тон и
насыщенность основного цвета и строят палитры по правилам:

| Палитра | Тон | Насыщенность |
|:---|:---|:---|
| `primary` | тон цвета | насыщенность цвета |
| `secondary` | тон цвета | 20 |
| `tertiary` | тон цвета + 60 | 40 |
| `neutral` | тон цвета | 5 |
| `error` | 25 | 85 |
| `warning` | 60 | 60 |
| `success` | 145 | 65 |
| `info` | 265.1 | 58.6 |

Статусные палитры — `error`, `warning`, `success` и `info` — оттенки
статической палитры (`red`, `amber`, `green`, `blue`), их числа постоянны:
выбранный цвет двигает только `primary`, `secondary`, `tertiary` и `neutral`.
Тон и насыщенность `blue`, а с ним `info`, — собственные значения цвета `#005bbe` в HCT: тон
265.1 и насыщенность 58.5, округлённая вверх до 58.6, при которой тон 40
палитры — ровно `#005bbe`. Поэтому «информация» остаётся синей при любом
фирменном цвете. Это не то же, что прочтение цвета генератором (см. ниже): у
`primary` насыщенность `#005bbe` поднимается до 85, и на остальных тонах
палитры `primary` и `info` расходятся, хотя тон 40 у обеих — `#005bbe`.

Цвет Framework `#005bbe` читается как тон 265 и насыщенность 85, и по этим
правилам получаются ровно примитивы поставки. Насыщенность читается так:
если цвет насыщен настолько, насколько его тон позволяет при его светлоте, —
так бывает у тёмного или светлого фирменного цвета, — насыщенность палитры
берётся не ниже 85, иначе — собственная насыщенность цвета. Тон и насыщенность можно задать и
числами — поля «Тонкая настройка» генератора или `themeFromHct({hue, chroma})`.

Вместе с тонами генератор пишет полупрозрачные ступени, которые ядро
выводит из тонов (`--sf-<палитра>-<тон>--alfa-<ступень>`; список —
`SF.ThemePalette.THEME_ALPHA`): тема — тоны и полупрозрачные ступени, и заливки
`*-container`, фоны наведения и выбора следуют за новым цветом. Цвет Framework
даёт обратно и каждую полупрозрачную ступень поставки.

### Как построить палитру

Палитру можно построить и в другом инструменте, который работает с моделью
HCT, например классом `TonalPalette` из пакета
`@material/material-color-utilities`
(`TonalPalette.fromHueAndChroma(hue, chroma).tone(40)` даёт тон 40), по
такому порядку:

1. Возьмите оттенок (hue) и насыщенность (chroma) фирменного цвета.
2. Получите при них шестнадцать тонов: 98, 95, 90, 85, 80, 70, 60, 50, 40, 35,
   30, 25, 20, 15, 10, 5. Тон в HCT — та же светлота, что в имени примитива.
3. Для каждой полупрозрачной ступени, которую читают роли, допишите к
   шестнадцатеричному значению тона байт непрозрачности:
   `round(ступень × 255 / 100)` в шестнадцатеричной записи. Например, тон 50
   `#0073ed` при 12 % — `#0073ed1f` (31 = `1f`), при 4 % — `#0073ed0a`.
4. Проверьте контраст пар, которые составят роли (ниже).

### Контраст новой палитры

Роли берут из палитры одни и те же тона, поэтому новый тон обязан держать те
же пары, что и тон палитры по умолчанию. Для акцентной палитры (на примере `primary`):

| Пара | Тема | Порог |
|:---|:---|:---|
| Белый (`--sf-on-primary`) на тоне 40 (`--sf-primary`) | Светлая | 4,5 : 1 |
| Тон 40 (акцентный текст) на белом (`--sf-surface-page`) | Светлая | 4,5 : 1 |
| Тон 20 (`--sf-on-primary`) на тоне 80 (`--sf-primary`) | Тёмная | 4,5 : 1 |
| Тон 80 (акцентный текст) на `--sf-neutral-5` (`--sf-surface-page`) | Тёмная | 4,5 : 1 |
| Тон 50 (кольцо фокуса, цветная граница) на белом | Светлая | 3 : 1 |

Значения из этих пар в поставке по умолчанию:

| Примитив | Значение |
|:---|:---|
| `--sf-white` (поверхность светлой темы) | `#ffffff` |
| `--sf-neutral-5` (поверхность тёмной темы) | `#0f1115` |
| `--sf-primary-20` | `#002f67` |
| `--sf-primary-40` | `#005bbe` |
| `--sf-primary-50` | `#0073ed` |
| `--sf-primary-80` | `#acc7ff` |

У палитры по умолчанию белый на тоне 40 даёт около 6,5 : 1, тон 20 на тоне
80 — около 7,7 : 1, тон 80 на `--sf-neutral-5` — около 11 : 1. Если пара не проходит, сдвигают тон в палитре (тон 40
темнее, тон 80 светлее), а не роль. Пороги — в [Контраст](/ru/guide/colour/contrast/).

Контракты контраста (`control-boundary`, `elevation-text` и другие) — тесты
исходников Framework, в поставку они не входят. Палитру проекта проверяют
любым измерителем контраста по WCAG на тех же парах.

### Правила замены

- переопределяйте **все** тона, на которые опираются роли этой палитры, и их
  полупрозрачные ступени — иначе часть ролей останется в исходном цвете;
- рекомендуется строить палитру целиком по модели HCT, а не подбирать тона по
  одному;
- палитры независимы. `info` — оттенок статической палитры со своими
  примитивами (`--sf-info-*` ссылаются на тоны оттенка), а не производная от
  `primary`: смена `primary` её не меняет. То же верно для `secondary` и `tertiary`. Если информационный цвет
  должен следовать фирменному, переопределите и палитру `info`.

## Смотрите также

- [Цветовые роли](/ru/guide/colour/colour-roles/) — роли, которые ссылаются на примитивы;
- [Прозрачность](/ru/guide/colour/transparency/) — шкала прозрачности;
- [Контраст](/ru/guide/colour/contrast/) — пороги контраста;
- [Своя тема проекта](/ru/guide/colour/themes/#своя-тема-проекта) — роли и примитивы в CSS проекта.
