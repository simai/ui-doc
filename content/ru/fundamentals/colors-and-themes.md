---
title: "Цвета и темы"
description: "Полная базовая палитра, семантические цветовые роли и правила светлой и тёмной тем SIMAI Framework."
---

# Цвета и темы

Цветовая система разделена на два уровня:

1. **Примитивы** `--sf-{палитра}-{тон}` хранят конкретный цвет.
2. **Семантические роли** `--sf-primary`, `--sf-surface-0`,
   `--sf-on-surface` и другие описывают назначение цвета и меняются вместе с
   темой.

В интерфейсе используйте семантические роли. Примитивы нужны для настройки темы
и для редких случаев, когда требуется фиксированный цвет вне темы.

## Базовые цвета

| Токен | Значение | Назначение |
|:---|:---|:---|
| `--sf-transparent` | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip sf-doc-color-chip--transparent" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;rgba(255,255,255,0)&lt;/code&gt;&lt;/span&gt; | Полностью прозрачный цвет |
| `--sf-white` | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffffff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffffff&lt;/code&gt;&lt;/span&gt; | Белый |
| `--sf-black` | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #000000" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#000000&lt;/code&gt;&lt;/span&gt; | Чёрный |

Для белого и чёрного также доступны варианты `--alfa-4`, `--alfa-8`,
`--alfa-12`, `--alfa-24` и `--alfa-48`.

## Палитры

Тон `98` — самый светлый, тон `5` — самый тёмный. Полная актуальная палитра:

!Палитры Neutral, Primary, Secondary, Tertiary, Error, Warning и Success

### Основные и акцентные палитры

| Тон | Neutral | Primary | Secondary | Tertiary | Info |
|---:|:---|:---|:---|:---|:---|
| 98 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #faf9fe" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#faf9fe&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #f9f9ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#f9f9ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #f9f9ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#f9f9ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #fff7fa" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#fff7fa&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #f9f9ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#f9f9ff&lt;/code&gt;&lt;/span&gt; |
| 95 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #f1f0f6" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#f1f0f6&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #edf0ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#edf0ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #edf0ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#edf0ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffebfd" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffebfd&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #edf0ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#edf0ff&lt;/code&gt;&lt;/span&gt; |
| 90 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #e3e2e7" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#e3e2e7&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #d7e2ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#d7e2ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #d7e2ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#d7e2ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #fdd6ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#fdd6ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #d7e2ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#d7e2ff&lt;/code&gt;&lt;/span&gt; |
| 85 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #d4d4d9" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#d4d4d9&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #c2d5ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#c2d5ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #c9d4f1" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#c9d4f1&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #f9c2ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#f9c2ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #c2d5ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#c2d5ff&lt;/code&gt;&lt;/span&gt; |
| 80 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #c6c6cb" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#c6c6cb&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #acc7ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#acc7ff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #bbc6e3" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#bbc6e3&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ecb3f4" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ecb3f4&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #acc7ff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#acc7ff&lt;/code&gt;&lt;/span&gt; |
| 70 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ababb0" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ababb0&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #7eabff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#7eabff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #a0abc7" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#a0abc7&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #cf98d8" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#cf98d8&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #7eabff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#7eabff&lt;/code&gt;&lt;/span&gt; |
| 60 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #909095" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#909095&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #488fff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#488fff&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #8591ab" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#8591ab&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #b37ebb" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#b37ebb&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #488fff" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#488fff&lt;/code&gt;&lt;/span&gt; |
| 50 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #76777c" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#76777c&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #0073ed" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#0073ed&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #6c7791" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#6c7791&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #9765a0" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#9765a0&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #0073ed" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#0073ed&lt;/code&gt;&lt;/span&gt; |
| 40 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #5d5e63" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#5d5e63&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #005bbe" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#005bbe&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #535e77" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#535e77&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #7c4c86" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#7c4c86&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #005bbe" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#005bbe&lt;/code&gt;&lt;/span&gt; |
| 35 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #515257" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#515257&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #0050a7" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#0050a7&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #47526a" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#47526a&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #6f4079" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#6f4079&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #0050a7" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#0050a7&lt;/code&gt;&lt;/span&gt; |
| 30 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #45474b" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#45474b&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #004491" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#004491&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #3c475e" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#3c475e&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #63356c" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#63356c&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #004491" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#004491&lt;/code&gt;&lt;/span&gt; |
| 25 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #3a3b40" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#3a3b40&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #00397c" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#00397c&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #303b52" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#303b52&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #562960" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#562960&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #00397c" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#00397c&lt;/code&gt;&lt;/span&gt; |
| 20 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #2f3035" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#2f3035&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #002f67" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#002f67&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #253047" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#253047&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #4a1e54" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#4a1e54&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #002f67" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#002f67&lt;/code&gt;&lt;/span&gt; |
| 15 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #24262a" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#24262a&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #002453" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#002453&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #1a263b" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#1a263b&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #3e1249" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#3e1249&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #002453" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#002453&lt;/code&gt;&lt;/span&gt; |
| 10 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #1a1b1f" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#1a1b1f&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #001a40" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#001a40&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #101b31" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#101b31&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #32053e" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#32053e&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #001a40" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#001a40&lt;/code&gt;&lt;/span&gt; |
| 5 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #0f1115" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#0f1115&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #00102c" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#00102c&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #051126" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#051126&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #23002d" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#23002d&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #00102c" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#00102c&lt;/code&gt;&lt;/span&gt; |
{.table .sf-doc-color-table}

### Статусные палитры

| Тон | Error | Warning | Success |
|---:|:---|:---|:---|
| 98 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #fff8f7" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#fff8f7&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #fff8f5" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#fff8f5&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ecffe4" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ecffe4&lt;/code&gt;&lt;/span&gt; |
| 95 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffedea" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffedea&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffeee2" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffeee2&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #c9ffbe" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#c9ffbe&lt;/code&gt;&lt;/span&gt; |
| 90 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffdad6" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffdad6&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffdcc1" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffdcc1&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #8ffa88" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#8ffa88&lt;/code&gt;&lt;/span&gt; |
| 85 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffc7c0" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffc7c0&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffca9f" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffca9f&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #81ec7c" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#81ec7c&lt;/code&gt;&lt;/span&gt; |
| 80 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffb4ab" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffb4ab&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ffb779" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ffb779&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #74dd6f" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#74dd6f&lt;/code&gt;&lt;/span&gt; |
| 70 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ff897d" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ff897d&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #fa911c" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#fa911c&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #58c157" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#58c157&lt;/code&gt;&lt;/span&gt; |
| 60 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #ff5449" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#ff5449&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #d87900" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#d87900&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #3ba53f" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#3ba53f&lt;/code&gt;&lt;/span&gt; |
| 50 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #df362f" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#df362f&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #b26300" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#b26300&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #198a27" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#198a27&lt;/code&gt;&lt;/span&gt; |
| 40 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #bb1919" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#bb1919&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #8f4e00" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#8f4e00&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #006e17" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#006e17&lt;/code&gt;&lt;/span&gt; |
| 35 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #a9040e" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#a9040e&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #7d4400" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#7d4400&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #006013" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#006013&lt;/code&gt;&lt;/span&gt; |
| 30 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #93000a" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#93000a&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #6c3a00" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#6c3a00&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #00530f" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#00530f&lt;/code&gt;&lt;/span&gt; |
| 25 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #7e0007" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#7e0007&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #5c3000" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#5c3000&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #00460b" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#00460b&lt;/code&gt;&lt;/span&gt; |
| 20 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #690005" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#690005&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #4c2700" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#4c2700&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #003908" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#003908&lt;/code&gt;&lt;/span&gt; |
| 15 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #540003" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#540003&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #3d1e00" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#3d1e00&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #002d05" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#002d05&lt;/code&gt;&lt;/span&gt; |
| 10 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #410002" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#410002&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #2e1500" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#2e1500&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #002203" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#002203&lt;/code&gt;&lt;/span&gt; |
| 5 | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #2d0001" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#2d0001&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #1f0c00" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#1f0c00&lt;/code&gt;&lt;/span&gt; | &lt;span class="sf-doc-color-value"&gt;&lt;span class="sf-doc-color-chip" style="--sf-doc-color: #001501" aria-hidden="true"&gt;&lt;/span&gt;&lt;code&gt;#001501&lt;/code&gt;&lt;/span&gt; |
{.table .sf-doc-color-table}

Токен образуется из имени палитры и тона: например, `--sf-primary-40` или
`--sf-warning-90`. У тонов `90` и `50` есть полупрозрачные варианты; набор
суффиксов зависит от тона: `--alfa-4`, `8`, `10`, `12`, `15`, `16`, `20`,
`24`, `28`, `30`, `32`, `36`, `40`, `44` или `48`.

### Варианты нейтральной палитры

По умолчанию используется `grey-primary`: нейтральная палитра с лёгким
оттенком основного цвета. На корневом элементе страницы можно выбрать
`neutral-grey-blue` или `neutral-grey`. Не смешивайте разные варианты внутри
одной страницы: нейтральные роли формируют общий фон и контраст всего
интерфейса.

!Три варианта нейтральной палитры: grey-primary, grey-blue и grey

## Семантические роли

| Семейство | Основные роли |
|:---|:---|
| Акцент | `primary`, `secondary`, `tertiary`, `neutral`, `info`, `success`, `warning`, `error` |
| Состояния | `{role}-hover`, `{role}-active` |
| Контейнеры | `{role}-container`, `{role}-container-hover`, `{role}-container-active` |
| Контрастное содержимое | `on-{role}`, `on-{role}-container`, `on-{role}-container-graphic` |
| Контуры | `outline`, `outline-variant`, `outline-{role}` |
| Поверхности | `surface-0`, `surface-1`, `surface-container`, `surface-overlay`, `surface-inverse` |
| Текст на поверхности | `on-surface`, `on-surface-variant`, `on-surface-muted`, `on-surface-inverse` |
| Служебные | `link`, `link-hover`, `link-active`, `link-visited`, `focus`, `mark`, `code`, `disable`, `on-disable` |

Все имена используются с префиксом `--sf-`. Например:
`--sf-surface-container`, `--sf-on-primary` и `--sf-outline-error`.

Для основного текста на поверхности используйте `.color-on-surface`, а для
вспомогательного — `.color-on-surface-variant`. Токен
`--sf-on-surface-muted` задаёт ещё более слабый уровень, но отдельная утилита
для него сейчас не генерируется. Подробности и пример приведены на странице
[«Цвет текста»](/ru/utilities/text-formatting/text-color/).

### Живые образцы ролей

Эти образцы построены из переменных текущей версии SIMAI Framework. Переключите
светлую и тёмную тему в настройках документации: фон и контрастный текст каждой
карточки изменятся автоматически.

&lt;div class="sf-doc-color-role-grid"&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-primary); --sf-doc-role-color: var(--sf-on-primary)"&gt;
        &lt;strong&gt;Primary&lt;/strong&gt;
        &lt;code&gt;--sf-primary / --sf-on-primary&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-secondary); --sf-doc-role-color: var(--sf-on-secondary)"&gt;
        &lt;strong&gt;Secondary&lt;/strong&gt;
        &lt;code&gt;--sf-secondary / --sf-on-secondary&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-tertiary); --sf-doc-role-color: var(--sf-on-tertiary)"&gt;
        &lt;strong&gt;Tertiary&lt;/strong&gt;
        &lt;code&gt;--sf-tertiary / --sf-on-tertiary&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-info); --sf-doc-role-color: var(--sf-on-info)"&gt;
        &lt;strong&gt;Info&lt;/strong&gt;
        &lt;code&gt;--sf-info / --sf-on-info&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-success); --sf-doc-role-color: var(--sf-on-success)"&gt;
        &lt;strong&gt;Success&lt;/strong&gt;
        &lt;code&gt;--sf-success / --sf-on-success&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-warning); --sf-doc-role-color: var(--sf-on-warning)"&gt;
        &lt;strong&gt;Warning&lt;/strong&gt;
        &lt;code&gt;--sf-warning / --sf-on-warning&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-error); --sf-doc-role-color: var(--sf-on-error)"&gt;
        &lt;strong&gt;Error&lt;/strong&gt;
        &lt;code&gt;--sf-error / --sf-on-error&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-0); --sf-doc-role-color: var(--sf-on-surface)"&gt;
        &lt;strong&gt;Surface 0&lt;/strong&gt;
        &lt;code&gt;--sf-surface-0 / --sf-on-surface&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-container); --sf-doc-role-color: var(--sf-on-surface)"&gt;
        &lt;strong&gt;Surface Container&lt;/strong&gt;
        &lt;code&gt;--sf-surface-container / --sf-on-surface&lt;/code&gt;
    &lt;/div&gt;
    &lt;div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-inverse); --sf-doc-role-color: var(--sf-on-surface-inverse)"&gt;
        &lt;strong&gt;Surface Inverse&lt;/strong&gt;
        &lt;code&gt;--sf-surface-inverse / --sf-on-surface-inverse&lt;/code&gt;
    &lt;/div&gt;
&lt;/div&gt;

Палитры-примитивы в таблице выше не меняются при переключении темы.
Семантические роли меняются, поэтому в интерфейсах предпочтительно использовать
именно их.

### Как роли выглядят в интерфейсе

Иллюстрации ниже показывают назначение ролей, а не готовые компоненты.
Конкретный внешний вид компонента может отличаться, но смысл пары
«фон / содержимое на фоне» сохраняется.

#### Акцентные и статусные роли

`Primary` выделяет главное действие или выбранное состояние.

!Примеры применения роли Primary в интерфейсе

`Error`, `Warning` и `Success` обозначают соответственно ошибку,
предупреждение и успешный результат. Для текста и иконок на цветном фоне
используйте соответствующую роль `on-*`.

!Примеры применения роли Error

!Примеры применения роли Warning

!Примеры применения роли Success

#### Нейтральные и служебные роли

`Surface` формирует фон страницы, карточек и вложенных областей.

!Примеры применения ролей Surface

`Disable` снижает визуальный приоритет недоступного элемента, а `Outline`
отделяет поля, контролы и области без лишнего цветового акцента.

!Примеры применения роли Disable

!Примеры применения роли Outline

`Link`, `Focus` и `Mark` отвечают за ссылки, видимый клавиатурный фокус и
выделение фрагмента текста.

!Примеры применения роли Link

!Примеры применения ролей Focus и Mark

## Светлая и тёмная темы

Темы применяются классами `.theme-light` и `.theme-dark`. Они сохраняют имена
семантических ролей, но связывают их с разными тонами палитры.

```html
<section class="theme-light bg-surface-0 color-on-surface">
    Светлая тема
</section>

<section class="theme-dark bg-surface-0 color-on-surface">
    Тёмная тема
</section>
```

Например, `--sf-primary` использует тон `40` в светлой теме и тон `80` в
тёмной; `--sf-surface-0` переключается с белого на `neutral-5`. Поэтому
контрастные пары `primary`/`on-primary` и `surface`/`on-surface` следует
использовать вместе.

## Применение утилитами

- `color-primary` — цвет текста или иконки;
- `bg-surface-container` — фон контейнера;
- `border-warning` — цвет границы;
- `outline-error` — цвет outline.

Для проектной темы переопределяйте палитры и роли в отдельном слое CSS, не
заменяя значения непосредственно в собранном ядре.
