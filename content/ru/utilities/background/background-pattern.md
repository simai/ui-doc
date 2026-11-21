---
title: "Паттерн фона"
description: "Заполняет фон элемента мелким узором из встроенного изображения — без отдельных файлов."
---

# Паттерн фона

Классы `pattern-1` … `pattern-9` заполняют фон элемента мелким узором:
полосками, клеткой или точками. Узор встроен в CSS и не требует файлов. Берите
эти классы для фактуры подложки, заглушки или декоративной полосы.

## Пример

### Узоры

Девять узоров на светлой подложке. Под каждым образцом — класс узора.

:::example {id="utilities/background/background-pattern" label="pattern-1 … pattern-9"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: узор меняется с ширины `md` и с ширины `xl`.

:::example {id="utilities/background/background-pattern-responsive" label="Узор по ширине экрана"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `pattern-dots` | `--sf-pattern--color-8: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-pattern--color-12: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-pattern--color-16: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-pattern--color-24: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-pattern--color: var(--sf-pattern--color-12); --sf-pattern--clear: 66% 66%; --sf-pattern--glow: light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-24)); --sf-pattern--glow-weak: light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-50--alfa-16)); :where(.pattern-dots, .pattern-grid, .pattern-cross, .pattern-grain, .pattern-hatch, .pattern-checker) { position: relative; isolation: isolate }; от ширины lg: --sf-pattern--clear: 48% 42%; --sf-pattern--tile: radial-gradient(circle at center, #000 0 var(--sf-px), transparent calc(var(--sf-px) * 1.6)); --sf-pattern--size: var(--sf-space-1); --sf-pattern--fade: radial-gradient(ellipse var(--sf-pattern--clear) at 50% 46%, transparent 0,transparent 45%, #000 100%); --sf-pattern--fade: radial-gradient(ellipse var(--sf-pattern--clear) at 50% 46%, transparent 0 45%, #000 100%); :is(.pattern-dots, .pattern-grid, .pattern-cross, .pattern-grain, .pattern-hatch, .pattern-checker)::before { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; inset: 0; z-index: -1; pointer-events: none; border-radius: inherit }; :is(.pattern-dots, .pattern-grid, .pattern-cross, .pattern-hatch, .pattern-checker)::before { background-color: var(--sf-pattern--color); mask-image: var(--sf-pattern--tile), var(--sf-pattern--fade); mask-size: var(--sf-pattern--size) var(--sf-pattern--size), 100% 100%; mask-repeat: repeat, no-repeat; mask-position: center, 0 0; mask-composite: intersect }` | — |
| `pattern-grid` | `--sf-pattern--color-8: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-pattern--color-12: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-pattern--color-16: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-pattern--color-24: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-pattern--color: var(--sf-pattern--color-12); --sf-pattern--clear: 66% 66%; --sf-pattern--glow: light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-24)); --sf-pattern--glow-weak: light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-50--alfa-16)); от ширины lg: --sf-pattern--clear: 48% 42%; --sf-pattern--tile: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M0 8H16M8 0V16%27 stroke=%27%23000%27 stroke-width=%271%27 vector-effect=%27non-scaling-stroke%27 shape-rendering=%27crispEdges%27 fill=%27none%27/%3E%3C/svg%3E"); --sf-pattern--size: var(--sf-space-4); --sf-pattern--fade: radial-gradient(ellipse var(--sf-pattern--clear) at 50% 46%, transparent 0,transparent 45%, #000 100%); --sf-pattern--fade: radial-gradient(ellipse var(--sf-pattern--clear) at 50% 46%, transparent 0 45%, #000 100%)` | — |
| `pattern-cross` | `--sf-pattern--color-8: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-pattern--color-12: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-pattern--color-16: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-pattern--color-24: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-pattern--color: var(--sf-pattern--color-12); --sf-pattern--clear: 66% 66%; --sf-pattern--glow: light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-24)); --sf-pattern--glow-weak: light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-50--alfa-16)); от ширины lg: --sf-pattern--clear: 48% 42%; --sf-pattern--tile: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M5 8H11M8 5V11%27 stroke=%27%23000%27 stroke-width=%271%27 vector-effect=%27non-scaling-stroke%27 shape-rendering=%27crispEdges%27 fill=%27none%27/%3E%3C/svg%3E"); --sf-pattern--size: var(--sf-space-5); --sf-pattern--fade: radial-gradient(ellipse var(--sf-pattern--clear) at 50% 46%, transparent 0,transparent 45%, #000 100%); --sf-pattern--fade: radial-gradient(ellipse var(--sf-pattern--clear) at 50% 46%, transparent 0 45%, #000 100%)` | — |
| `pattern-grain` | `--sf-pattern--color-8: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-pattern--color-12: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-pattern--color-16: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-pattern--color-24: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-pattern--color: var(--sf-pattern--color-12); --sf-pattern--clear: 66% 66%; --sf-pattern--glow: light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-24)); --sf-pattern--glow-weak: light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-50--alfa-16)); от ширины lg: --sf-pattern--clear: 48% 42%; --sf-pattern--tile: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27180%27 height=%27180%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.9%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix values=%270 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2.2 -0.9%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url%28%23n%29%27/%3E%3C/svg%3E"); --sf-pattern--size: auto; --sf-pattern--fade: linear-gradient(#000, #000); .pattern-grain::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; inset: 0; z-index: -1; pointer-events: none; border-radius: inherit }; .pattern-grain::after { background-color: var(--sf-pattern--color); mask-image: var(--sf-pattern--tile), var(--sf-pattern--fade); mask-size: var(--sf-pattern--size) var(--sf-pattern--size), 100% 100%; mask-repeat: repeat, no-repeat; mask-position: center, 0 0; mask-composite: intersect }; .pattern-grain::before { background-image: radial-gradient(120% 90% at 15% 0%, var(--sf-pattern--glow), transparent 60%), radial-gradient(90% 80% at 100% 100%, var(--sf-pattern--glow-weak), transparent 55%); mask-image: var(--sf-pattern--fade) }` | — |
| `pattern-hatch` | `--sf-pattern--color-8: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-pattern--color-12: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-pattern--color-16: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-pattern--color-24: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-pattern--color: var(--sf-pattern--color-12); --sf-pattern--clear: 66% 66%; --sf-pattern--glow: light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-24)); --sf-pattern--glow-weak: light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-50--alfa-16)); от ширины lg: --sf-pattern--clear: 48% 42%; --sf-pattern--tile: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M-1 1L1 -1M0 8L8 0M7 9L9 7%27 stroke=%27%23000%27 stroke-width=%271.25%27 vector-effect=%27non-scaling-stroke%27 stroke-linecap=%27square%27 fill=%27none%27/%3E%3C/svg%3E"); --sf-pattern--size: var(--sf-space-1/2); --sf-pattern--fade: linear-gradient(#000, #000)` | — |
| `pattern-checker` | `--sf-pattern--color-8: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-pattern--color-12: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-pattern--color-16: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-pattern--color-24: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)); --sf-pattern--color: var(--sf-pattern--color-12); --sf-pattern--clear: 66% 66%; --sf-pattern--glow: light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-24)); --sf-pattern--glow-weak: light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-50--alfa-16)); от ширины lg: --sf-pattern--clear: 48% 42%; --sf-pattern--tile: conic-gradient(#000 0,#000 25%, transparent 0,transparent 50%, #000 0,#000 75%, transparent 0); --sf-pattern--size: var(--sf-space-2); --sf-pattern--fade: linear-gradient(#000, #000); --sf-pattern--tile: conic-gradient(#000 0 25%, transparent 0 50%, #000 0 75%, transparent 0)` | — |
| `pattern-color-neutral` | `--sf-pattern--color-8: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-pattern--color-12: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-pattern--color-16: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-pattern--color-24: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` | — |
| `pattern-color-{значение}` | `--sf-pattern--color-8: light-dark(var(--sf-{значение}-50--alfa-8), var(--sf-{значение}-50--alfa-16)); --sf-pattern--color-12: light-dark(var(--sf-{значение}-50--alfa-12), var(--sf-{значение}-50--alfa-20)); --sf-pattern--color-16: light-dark(var(--sf-{значение}-50--alfa-16), var(--sf-{значение}-50--alfa-24)); --sf-pattern--color-24: light-dark(var(--sf-{значение}-50--alfa-24), var(--sf-{значение}-50--alfa-32)); --sf-pattern--glow: light-dark(var(--sf-{значение}-50--alfa-16), var(--sf-{значение}-50--alfa-24)); --sf-pattern--glow-weak: light-dark(var(--sf-{значение}-50--alfa-8), var(--sf-{значение}-50--alfa-16))` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `brown`, `gray` |
| `pattern-strength-{значение}` | `--sf-pattern--color: var(--sf-pattern--color-{значение})` | `8`, `12`, `16`, `24` |
| `pattern-size-{значение}` | `--sf-pattern--size: var(--sf-space-{значение})` | `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `pattern-fade-none` | `--sf-pattern--fade: linear-gradient(#000, #000)` | — |
| `pattern-fade-spot` | `--sf-pattern--fade: radial-gradient(ellipse 70% 70% at 50% 40%, #000 0%, transparent 75%)` | — |
| `pattern-fade-clear` | `--sf-pattern--fade: radial-gradient(ellipse var(--sf-pattern--clear) at 50% 46%, transparent 0,transparent 45%, #000 100%); --sf-pattern--fade: radial-gradient(ellipse var(--sf-pattern--clear) at 50% 46%, transparent 0 45%, #000 100%)` | — |
| `pattern-fade-down` | `--sf-pattern--fade: linear-gradient(to bottom, #000 0%, transparent 85%)` | — |

Прежние имена классов этого модуля и что писать вместо них — в руководстве [Как обновить проект](/ru/guide/connection/updating/#прежние-имена-классов).

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:pattern-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-neutral-50--alfa-8` | `rgba(118,119,124,0.07843)` |
| `--sf-neutral-90--alfa-8` | `rgba(227,226,231,0.07843)` |
| `--sf-neutral-50--alfa-12` | `rgba(118,119,124,0.12157)` |
| `--sf-neutral-90--alfa-12` | `rgba(227,226,231,0.12157)` |
| `--sf-neutral-50--alfa-16` | `rgba(118,119,124,0.16078)` |
| `--sf-neutral-90--alfa-16` | `rgba(227,226,231,0.16078)` |
| `--sf-neutral-50--alfa-24` | `rgba(118,119,124,0.23922)` |
| `--sf-neutral-90--alfa-24` | `rgba(227,226,231,0.23922)` |
| `--sf-primary-50--alfa-16` | `rgba(0,115,237,0.16078)` |
| `--sf-primary-50--alfa-24` | `rgba(0,115,237,0.23922)` |
| `--sf-primary-50--alfa-8` | `rgba(0,115,237,0.07843)` |
| `--sf-px` | `1px` |
| `--sf-space-1` | `var(--sf-b2); от ширины lg: var(--sf-b6)` |
| `--sf-space-4` | `var(--sf-c2); от ширины lg: var(--sf-c6)` |
| `--sf-space-5` | `var(--sf-c6); от ширины lg: var(--sf-d0)` |
| `--sf-space-1/2` | `0.5rem; от ширины lg: 0.75rem` |
| `--sf-space-2` | `var(--sf-b6); от ширины lg: var(--sf-c0)` |
| `--sf-primary-50--alfa-12` | `rgba(0,115,237,0.12157)` |
| `--sf-primary-50--alfa-20` | `rgba(0,115,237,0.2)` |
| `--sf-primary-50--alfa-32` | `rgba(0,115,237,0.32157)` |
| `--sf-secondary-50--alfa-8` | `rgba(108,119,145,0.07843)` |
| `--sf-secondary-50--alfa-16` | `rgba(108,119,145,0.16078)` |
| `--sf-secondary-50--alfa-12` | `rgba(108,119,145,0.12157)` |
| `--sf-secondary-50--alfa-20` | `rgba(108,119,145,0.2)` |
| `--sf-secondary-50--alfa-24` | `rgba(108,119,145,0.23922)` |
| `--sf-secondary-50--alfa-32` | `rgba(108,119,145,0.32157)` |
| `--sf-tertiary-50--alfa-8` | `rgba(151,101,160,0.07843)` |
| `--sf-tertiary-50--alfa-16` | `rgba(151,101,160,0.16078)` |
| `--sf-tertiary-50--alfa-12` | `rgba(151,101,160,0.12157)` |
| `--sf-tertiary-50--alfa-20` | `rgba(151,101,160,0.2)` |
| `--sf-tertiary-50--alfa-24` | `rgba(151,101,160,0.23922)` |
| `--sf-tertiary-50--alfa-32` | `rgba(151,101,160,0.32157)` |
| `--sf-error-50--alfa-8` | `var(--sf-red-50--alfa-8)` |
| `--sf-error-50--alfa-16` | `var(--sf-red-50--alfa-16)` |
| `--sf-error-50--alfa-12` | `var(--sf-red-50--alfa-12)` |
| `--sf-error-50--alfa-20` | `var(--sf-red-50--alfa-20)` |
| `--sf-error-50--alfa-24` | `var(--sf-red-50--alfa-24)` |
| `--sf-error-50--alfa-32` | `var(--sf-red-50--alfa-32)` |
| `--sf-warning-50--alfa-8` | `var(--sf-amber-50--alfa-8)` |
| `--sf-warning-50--alfa-16` | `var(--sf-amber-50--alfa-16)` |
| `--sf-warning-50--alfa-12` | `var(--sf-amber-50--alfa-12)` |
| `--sf-warning-50--alfa-20` | `var(--sf-amber-50--alfa-20)` |
| `--sf-warning-50--alfa-24` | `var(--sf-amber-50--alfa-24)` |
| `--sf-warning-50--alfa-32` | `var(--sf-amber-50--alfa-32)` |
| `--sf-success-50--alfa-8` | `var(--sf-green-50--alfa-8)` |
| `--sf-success-50--alfa-16` | `var(--sf-green-50--alfa-16)` |
| `--sf-success-50--alfa-12` | `var(--sf-green-50--alfa-12)` |
| `--sf-success-50--alfa-20` | `var(--sf-green-50--alfa-20)` |
| `--sf-success-50--alfa-24` | `var(--sf-green-50--alfa-24)` |
| `--sf-success-50--alfa-32` | `var(--sf-green-50--alfa-32)` |
| `--sf-info-50--alfa-8` | `var(--sf-blue-50--alfa-8)` |
| `--sf-info-50--alfa-16` | `var(--sf-blue-50--alfa-16)` |
| `--sf-info-50--alfa-12` | `var(--sf-blue-50--alfa-12)` |
| `--sf-info-50--alfa-20` | `var(--sf-blue-50--alfa-20)` |
| `--sf-info-50--alfa-24` | `var(--sf-blue-50--alfa-24)` |
| `--sf-info-50--alfa-32` | `var(--sf-blue-50--alfa-32)` |
| `--sf-red-50--alfa-8` | `rgba(223,54,47,0.07843)` |
| `--sf-red-50--alfa-16` | `rgba(223,54,47,0.16078)` |
| `--sf-red-50--alfa-12` | `rgba(223,54,47,0.12157)` |
| `--sf-red-50--alfa-20` | `rgba(223,54,47,0.2)` |
| `--sf-red-50--alfa-24` | `rgba(223,54,47,0.23922)` |
| `--sf-red-50--alfa-32` | `rgba(223,54,47,0.32157)` |
| `--sf-orange-50--alfa-8` | `rgba(194,87,19,0.07843)` |
| `--sf-orange-50--alfa-16` | `rgba(194,87,19,0.16078)` |
| `--sf-orange-50--alfa-12` | `rgba(194,87,19,0.12157)` |
| `--sf-orange-50--alfa-20` | `rgba(194,87,19,0.2)` |
| `--sf-orange-50--alfa-24` | `rgba(194,87,19,0.23922)` |
| `--sf-orange-50--alfa-32` | `rgba(194,87,19,0.32157)` |
| `--sf-amber-50--alfa-8` | `rgba(178,99,0,0.07843)` |
| `--sf-amber-50--alfa-16` | `rgba(178,99,0,0.16078)` |
| `--sf-amber-50--alfa-12` | `rgba(178,99,0,0.12157)` |
| `--sf-amber-50--alfa-20` | `rgba(178,99,0,0.2)` |
| `--sf-amber-50--alfa-24` | `rgba(178,99,0,0.23922)` |
| `--sf-amber-50--alfa-32` | `rgba(178,99,0,0.32157)` |
| `--sf-yellow-50--alfa-8` | `rgba(147,115,0,0.07843)` |
| `--sf-yellow-50--alfa-16` | `rgba(147,115,0,0.16078)` |
| `--sf-yellow-50--alfa-12` | `rgba(147,115,0,0.12157)` |
| `--sf-yellow-50--alfa-20` | `rgba(147,115,0,0.2)` |
| `--sf-yellow-50--alfa-24` | `rgba(147,115,0,0.23922)` |
| `--sf-yellow-50--alfa-32` | `rgba(147,115,0,0.32157)` |
| `--sf-lime-50--alfa-8` | `rgba(109,127,0,0.07843)` |
| `--sf-lime-50--alfa-16` | `rgba(109,127,0,0.16078)` |
| `--sf-lime-50--alfa-12` | `rgba(109,127,0,0.12157)` |
| `--sf-lime-50--alfa-20` | `rgba(109,127,0,0.2)` |
| `--sf-lime-50--alfa-24` | `rgba(109,127,0,0.23922)` |
| `--sf-lime-50--alfa-32` | `rgba(109,127,0,0.32157)` |
| `--sf-green-50--alfa-8` | `rgba(25,138,39,0.07843)` |
| `--sf-green-50--alfa-16` | `rgba(25,138,39,0.16078)` |
| `--sf-green-50--alfa-12` | `rgba(25,138,39,0.12157)` |
| `--sf-green-50--alfa-20` | `rgba(25,138,39,0.2)` |
| `--sf-green-50--alfa-24` | `rgba(25,138,39,0.23922)` |
| `--sf-green-50--alfa-32` | `rgba(25,138,39,0.32157)` |
| `--sf-teal-50--alfa-8` | `rgba(0,135,109,0.07843)` |
| `--sf-teal-50--alfa-16` | `rgba(0,135,109,0.16078)` |
| `--sf-teal-50--alfa-12` | `rgba(0,135,109,0.12157)` |
| `--sf-teal-50--alfa-20` | `rgba(0,135,109,0.2)` |
| `--sf-teal-50--alfa-24` | `rgba(0,135,109,0.23922)` |
| `--sf-teal-50--alfa-32` | `rgba(0,135,109,0.32157)` |
| `--sf-cyan-50--alfa-8` | `rgba(0,132,141,0.07843)` |
| `--sf-cyan-50--alfa-16` | `rgba(0,132,141,0.16078)` |
| `--sf-cyan-50--alfa-12` | `rgba(0,132,141,0.12157)` |
| `--sf-cyan-50--alfa-20` | `rgba(0,132,141,0.2)` |
| `--sf-cyan-50--alfa-24` | `rgba(0,132,141,0.23922)` |
| `--sf-cyan-50--alfa-32` | `rgba(0,132,141,0.32157)` |
| `--sf-sky-50--alfa-8` | `rgba(0,128,173,0.07843)` |
| `--sf-sky-50--alfa-16` | `rgba(0,128,173,0.16078)` |
| `--sf-sky-50--alfa-12` | `rgba(0,128,173,0.12157)` |
| `--sf-sky-50--alfa-20` | `rgba(0,128,173,0.2)` |
| `--sf-sky-50--alfa-24` | `rgba(0,128,173,0.23922)` |
| `--sf-sky-50--alfa-32` | `rgba(0,128,173,0.32157)` |
| `--sf-blue-50--alfa-8` | `rgba(51,117,217,0.07843)` |
| `--sf-blue-50--alfa-16` | `rgba(51,117,217,0.16078)` |
| `--sf-blue-50--alfa-12` | `rgba(51,117,217,0.12157)` |
| `--sf-blue-50--alfa-20` | `rgba(51,117,217,0.2)` |
| `--sf-blue-50--alfa-24` | `rgba(51,117,217,0.23922)` |
| `--sf-blue-50--alfa-32` | `rgba(51,117,217,0.32157)` |
| `--sf-indigo-50--alfa-8` | `rgba(104,106,222,0.07843)` |
| `--sf-indigo-50--alfa-16` | `rgba(104,106,222,0.16078)` |
| `--sf-indigo-50--alfa-12` | `rgba(104,106,222,0.12157)` |
| `--sf-indigo-50--alfa-20` | `rgba(104,106,222,0.2)` |
| `--sf-indigo-50--alfa-24` | `rgba(104,106,222,0.23922)` |
| `--sf-indigo-50--alfa-32` | `rgba(104,106,222,0.32157)` |
| `--sf-violet-50--alfa-8` | `rgba(140,95,210,0.07843)` |
| `--sf-violet-50--alfa-16` | `rgba(140,95,210,0.16078)` |
| `--sf-violet-50--alfa-12` | `rgba(140,95,210,0.12157)` |
| `--sf-violet-50--alfa-20` | `rgba(140,95,210,0.2)` |
| `--sf-violet-50--alfa-24` | `rgba(140,95,210,0.23922)` |
| `--sf-violet-50--alfa-32` | `rgba(140,95,210,0.32157)` |
| `--sf-purple-50--alfa-8` | `rgba(168,86,186,0.07843)` |
| `--sf-purple-50--alfa-16` | `rgba(168,86,186,0.16078)` |
| `--sf-purple-50--alfa-12` | `rgba(168,86,186,0.12157)` |
| `--sf-purple-50--alfa-20` | `rgba(168,86,186,0.2)` |
| `--sf-purple-50--alfa-24` | `rgba(168,86,186,0.23922)` |
| `--sf-purple-50--alfa-32` | `rgba(168,86,186,0.32157)` |
| `--sf-pink-50--alfa-8` | `rgba(190,78,143,0.07843)` |
| `--sf-pink-50--alfa-16` | `rgba(190,78,143,0.16078)` |
| `--sf-pink-50--alfa-12` | `rgba(190,78,143,0.12157)` |
| `--sf-pink-50--alfa-20` | `rgba(190,78,143,0.2)` |
| `--sf-pink-50--alfa-24` | `rgba(190,78,143,0.23922)` |
| `--sf-pink-50--alfa-32` | `rgba(190,78,143,0.32157)` |
| `--sf-brown-50--alfa-8` | `rgba(162,106,71,0.07843)` |
| `--sf-brown-50--alfa-16` | `rgba(162,106,71,0.16078)` |
| `--sf-brown-50--alfa-12` | `rgba(162,106,71,0.12157)` |
| `--sf-brown-50--alfa-20` | `rgba(162,106,71,0.2)` |
| `--sf-brown-50--alfa-24` | `rgba(162,106,71,0.23922)` |
| `--sf-brown-50--alfa-32` | `rgba(162,106,71,0.32157)` |
| `--sf-gray-50--alfa-8` | `rgba(119,119,119,0.07843)` |
| `--sf-gray-50--alfa-16` | `rgba(119,119,119,0.16078)` |
| `--sf-gray-50--alfa-12` | `rgba(119,119,119,0.12157)` |
| `--sf-gray-50--alfa-20` | `rgba(119,119,119,0.2)` |
| `--sf-gray-50--alfa-24` | `rgba(119,119,119,0.23922)` |
| `--sf-gray-50--alfa-32` | `rgba(119,119,119,0.32157)` |
| `--sf-space-1/4` | `0.25rem; от ширины lg: var(--sf-a4)` |
| `--sf-space-1/3` | `0.5rem; от ширины lg: var(--sf-a8)` |
| `--sf-space-3` | `var(--sf-b6); от ширины lg: var(--sf-c2)` |
| `--sf-space-6` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-space-7` | `var(--sf-d0); от ширины lg: var(--sf-d6)` |
| `--sf-space-8` | `var(--sf-d2); от ширины lg: var(--sf-e0)` |

В CSS косую черту в имени экранируют: `var(--sf-space-1\/2)`.

## Применение

| Класс | Узор |
| :--- | :--- |
| `pattern-1` | вертикальные полоски через пиксель |
| `pattern-2` | горизонтальные полоски через пиксель |
| `pattern-3` | точки с шагом 2 пикселя |
| `pattern-4` | шахматная клетка в пиксель |
| `pattern-5` | шесть точек в плитке 4×4 пикселя |
| `pattern-6` | редкие точки с шагом 4 пикселя |
| `pattern-7` | квадраты 2×2 с шагом 4 пикселя |
| `pattern-8` | фигуры 3×3 из линий с шагом 4 пикселя |
| `pattern-9` | квадраты 3×3 с шагом 4 пикселя |

Узор рисуется чёрным поверх того, что лежит под элементом. Подложку задавайте
на родителе: класс узора сбрасывает цвет фона своего элемента.

```html
<div class="bg-surface-card radius-1 overflow-hidden">
  <div class="pattern-4 h-e0"></div>
</div>
```

## Ограничения

- Цвет узора не настраивается и не меняется с темой; на тёмной подложке узор
  не виден.
- Класс задаёт свойство `background` целиком, поэтому цвет фона того же
  элемента не виден.
- У семейства нет префиксов состояния.

## См. также

- [Полосы](/ru/utilities/stripes/stripes/)
- [Повтор фона](/ru/utilities/background/background-repeat/)
