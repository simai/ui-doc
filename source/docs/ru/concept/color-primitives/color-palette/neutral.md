---
extends: _core._layouts.documentation
section: content
title: Neutral
description: Neutral
---

# Neutral

Цвет neutral в SIMAI Framework предназначен для поверхностей и нейтральных элементов интерфейса. В Google Material для
этого используется оттенок, основанный на цвете Primary с уменьшенной хромой (по умолчанию 4), что даёт серый цвет с
оттенком основного цвета.

Однако, на практике такой подход не всегда удобен. Поэтому во фреймворке SIMAI используются три варианта цвета neutral (
серого цвета):

1. **grey-primary** — серый, сформированный на основе цвета primary.
2. **grey-blue** — серый с голубоватым оттенком.
3. **grey** — чистый нейтральный серый цвет без дополнительных оттенков.

По умолчанию neutral \= grey-primary.

![][image3]

**Изменение серого цвета**

Для переключения на другой оттенок серого необходимо использовать соответствующий модификатор на теге `html` или `body`:

- `neutral-grey` — для чистого серого цвета (grey).
- `neutral-grey-blue` — для серого с голубым оттенком (grey-blue).
- `neutral-grey-primary` — для серого, основанного на primary (grey-primary).

Важно применять модификаторы к тегам `html` или `body`, чтобы избежать смешения разных серых оттенков на одной странице.
Пример использования:

```css
html.neutral-grey {
  /* применяем чистый серый */
}

body.neutral-grey-blue {
  /* применяем серый с голубым оттенком */
}
```

**Значения по умолчанию (grey-primary)**

По умолчанию для neutral используется цвет grey-primary, получаемый из генератора с настройками по умолчанию. Он даёт
следующий набор значений тонов (пример):

| Переменная                 | Значение                                             |
|----------------------------|--------------------------------------------------------------------------|
| `--sf-neutral-98`          | #faf9fe                                                                  |
| `--sf-neutral-95`          | #f1f0f6                                                                  |
| `--sf-neutral-90`          | #e3e2e7                                                                  |
| `--sf-neutral-90--alfa-4`  | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-90`) 4%);  |
| `--sf-neutral-90--alfa-8`  | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-90`) 8%);  |
| `--sf-neutral-90--alfa-12` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-90`) 12%); |
| `--sf-neutral-90--alfa-24` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-90`) 24%); |
| `--sf-neutral-85`          | #d4d4d9                                                                  |
| `--sf-neutral-80`          | #c6c6cb                                                                  |
| `--sf-neutral-70`          | #ababb0                                                                  |
| `--sf-neutral-60`          | #909095                                                                  |
| `--sf-neutral-50`          | #76777c                                                                  |
| `--sf-neutral-50--alfa-4`  | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-50`) 4%);  |
| `--sf-neutral-50--alfa-8`  | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-50`) 8%);  |
| `--sf-neutral-50--alfa-12` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-50`) 12%); |
| `--sf-neutral-50--alfa-24` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-50`) 24%); |
| `--sf-neutral-40`          | #5d5e63                                                                  |
| `--sf-neutral-35`          | #515257                                                                  |
| `--sf-neutral-30`          | #45474b                                                                  |
| `--sf-neutral-25`          | #3a3b40                                                                  |
| `--sf-neutral-20`          | #2f3035                                                                  |
| `--sf-neutral-15`          | #24262a                                                                  |
| `--sf-neutral-10`          | #1a1b1f                                                                  |
| `--sf-neutral-5`           | #0f1115                                                                  |
{.table}

Данный набор значений может меняться с помощью генератора цветов. Остальные два вида серого задаются статично и
подменяют цвет с помощью модификаторов.

При использовании модификатора **neutral-grey-blue** основной набор значений заменяется следующим набором значений:

| Переменная        | Значение |
|-------------------|----------|
| `--sf-neutral-98` | #f5faff  |
| `--sf-neutral-95` | #e8f2fa  |
| `--sf-neutral-90` | #dae4ec  |
| `--sf-neutral-85` | #ccd6de  |
| `--sf-neutral-80` | #bec8d0  |
| `--sf-neutral-70` | #a3adb4  |
| `--sf-neutral-60` | #88929a  |
| `--sf-neutral-50` | #6f7880  |
| `--sf-neutral-40` | #566067  |
| `--sf-neutral-35` | #4a545b  |
| `--sf-neutral-30` | #3e484f  |
| `--sf-neutral-25` | #333d43  |
| `--sf-neutral-20` | #283238  |
| `--sf-neutral-15` | #1e272d  |
| `--sf-neutral-10` | #131d23  |
| `--sf-neutral-5`  | #091218  |
{.table}

При использовании модификатора **neutral-grey** основной набор значений заменяется следующим набором значений:

| Переменная        | Значение |
|-------------------|----------|
| `--sf-neutral-98` | #f9f9f9  |
| `--sf-neutral-95` | #f1f1f1  |
| `--sf-neutral-90` | #e2e2e2  |
| `--sf-neutral-85` | #d4d4d4  |
| `--sf-neutral-80` | #c6c6c6  |
| `--sf-neutral-70` | #ababab  |
| `--sf-neutral-60` | #919191  |
| `--sf-neutral-50` | #777777  |
| `--sf-neutral-40` | #5e5e5e  |
| `--sf-neutral-35` | #525252  |
| `--sf-neutral-30` | #474747  |
| `--sf-neutral-25` | #3b3b3b  |
| `--sf-neutral-20` | #303030  |
| `--sf-neutral-15` | #262626  |
| `--sf-neutral-10` | #1b1b1b  |
| `--sf-neutral-5`  | #111111  |
{.table}

[image3]: /assets/build/img/b64/1b0bbe09c5de338b.png
