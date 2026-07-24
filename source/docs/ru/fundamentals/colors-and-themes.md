---
extends: _core._layouts.documentation
section: content
title: Цвета и темы
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
| `--sf-transparent` | <span class="sf-doc-color-value"><span class="sf-doc-color-chip sf-doc-color-chip--transparent" aria-hidden="true"></span><code>rgba(255,255,255,0)</code></span> | Полностью прозрачный цвет |
| `--sf-white` | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffffff" aria-hidden="true"></span><code>#ffffff</code></span> | Белый |
| `--sf-black` | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #000000" aria-hidden="true"></span><code>#000000</code></span> | Чёрный |
{.table}

Для белого и чёрного также доступны варианты `--alfa-4`, `--alfa-8`,
`--alfa-12`, `--alfa-24` и `--alfa-48`.

## Палитры

Тон `98` — самый светлый, тон `5` — самый тёмный. Полная актуальная палитра:

![Палитры Neutral, Primary, Secondary, Tertiary, Error, Warning и Success](/ru/fundamentals/assets/color-palette.png)

### Основные и акцентные палитры

| Тон | Neutral | Primary | Secondary | Tertiary | Info |
|---:|:---|:---|:---|:---|:---|
| 98 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #faf9fe" aria-hidden="true"></span><code>#faf9fe</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #f9f9ff" aria-hidden="true"></span><code>#f9f9ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #f9f9ff" aria-hidden="true"></span><code>#f9f9ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #fff7fa" aria-hidden="true"></span><code>#fff7fa</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #f9f9ff" aria-hidden="true"></span><code>#f9f9ff</code></span> |
| 95 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #f1f0f6" aria-hidden="true"></span><code>#f1f0f6</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #edf0ff" aria-hidden="true"></span><code>#edf0ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #edf0ff" aria-hidden="true"></span><code>#edf0ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffebfd" aria-hidden="true"></span><code>#ffebfd</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #edf0ff" aria-hidden="true"></span><code>#edf0ff</code></span> |
| 90 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #e3e2e7" aria-hidden="true"></span><code>#e3e2e7</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #d7e2ff" aria-hidden="true"></span><code>#d7e2ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #d7e2ff" aria-hidden="true"></span><code>#d7e2ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #fdd6ff" aria-hidden="true"></span><code>#fdd6ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #d7e2ff" aria-hidden="true"></span><code>#d7e2ff</code></span> |
| 85 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #d4d4d9" aria-hidden="true"></span><code>#d4d4d9</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #c2d5ff" aria-hidden="true"></span><code>#c2d5ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #c9d4f1" aria-hidden="true"></span><code>#c9d4f1</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #f9c2ff" aria-hidden="true"></span><code>#f9c2ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #c2d5ff" aria-hidden="true"></span><code>#c2d5ff</code></span> |
| 80 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #c6c6cb" aria-hidden="true"></span><code>#c6c6cb</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #acc7ff" aria-hidden="true"></span><code>#acc7ff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #bbc6e3" aria-hidden="true"></span><code>#bbc6e3</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ecb3f4" aria-hidden="true"></span><code>#ecb3f4</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #acc7ff" aria-hidden="true"></span><code>#acc7ff</code></span> |
| 70 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ababb0" aria-hidden="true"></span><code>#ababb0</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #7eabff" aria-hidden="true"></span><code>#7eabff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #a0abc7" aria-hidden="true"></span><code>#a0abc7</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #cf98d8" aria-hidden="true"></span><code>#cf98d8</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #7eabff" aria-hidden="true"></span><code>#7eabff</code></span> |
| 60 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #909095" aria-hidden="true"></span><code>#909095</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #488fff" aria-hidden="true"></span><code>#488fff</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #8591ab" aria-hidden="true"></span><code>#8591ab</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #b37ebb" aria-hidden="true"></span><code>#b37ebb</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #488fff" aria-hidden="true"></span><code>#488fff</code></span> |
| 50 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #76777c" aria-hidden="true"></span><code>#76777c</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #0073ed" aria-hidden="true"></span><code>#0073ed</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #6c7791" aria-hidden="true"></span><code>#6c7791</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #9765a0" aria-hidden="true"></span><code>#9765a0</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #0073ed" aria-hidden="true"></span><code>#0073ed</code></span> |
| 40 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #5d5e63" aria-hidden="true"></span><code>#5d5e63</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #005bbe" aria-hidden="true"></span><code>#005bbe</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #535e77" aria-hidden="true"></span><code>#535e77</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #7c4c86" aria-hidden="true"></span><code>#7c4c86</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #005bbe" aria-hidden="true"></span><code>#005bbe</code></span> |
| 35 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #515257" aria-hidden="true"></span><code>#515257</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #0050a7" aria-hidden="true"></span><code>#0050a7</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #47526a" aria-hidden="true"></span><code>#47526a</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #6f4079" aria-hidden="true"></span><code>#6f4079</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #0050a7" aria-hidden="true"></span><code>#0050a7</code></span> |
| 30 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #45474b" aria-hidden="true"></span><code>#45474b</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #004491" aria-hidden="true"></span><code>#004491</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #3c475e" aria-hidden="true"></span><code>#3c475e</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #63356c" aria-hidden="true"></span><code>#63356c</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #004491" aria-hidden="true"></span><code>#004491</code></span> |
| 25 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #3a3b40" aria-hidden="true"></span><code>#3a3b40</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #00397c" aria-hidden="true"></span><code>#00397c</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #303b52" aria-hidden="true"></span><code>#303b52</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #562960" aria-hidden="true"></span><code>#562960</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #00397c" aria-hidden="true"></span><code>#00397c</code></span> |
| 20 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #2f3035" aria-hidden="true"></span><code>#2f3035</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #002f67" aria-hidden="true"></span><code>#002f67</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #253047" aria-hidden="true"></span><code>#253047</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #4a1e54" aria-hidden="true"></span><code>#4a1e54</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #002f67" aria-hidden="true"></span><code>#002f67</code></span> |
| 15 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #24262a" aria-hidden="true"></span><code>#24262a</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #002453" aria-hidden="true"></span><code>#002453</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #1a263b" aria-hidden="true"></span><code>#1a263b</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #3e1249" aria-hidden="true"></span><code>#3e1249</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #002453" aria-hidden="true"></span><code>#002453</code></span> |
| 10 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #1a1b1f" aria-hidden="true"></span><code>#1a1b1f</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #001a40" aria-hidden="true"></span><code>#001a40</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #101b31" aria-hidden="true"></span><code>#101b31</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #32053e" aria-hidden="true"></span><code>#32053e</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #001a40" aria-hidden="true"></span><code>#001a40</code></span> |
| 5 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #0f1115" aria-hidden="true"></span><code>#0f1115</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #00102c" aria-hidden="true"></span><code>#00102c</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #051126" aria-hidden="true"></span><code>#051126</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #23002d" aria-hidden="true"></span><code>#23002d</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #00102c" aria-hidden="true"></span><code>#00102c</code></span> |
{.table .sf-doc-color-table}

### Статусные палитры

| Тон | Error | Warning | Success |
|---:|:---|:---|:---|
| 98 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #fff8f7" aria-hidden="true"></span><code>#fff8f7</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #fff8f5" aria-hidden="true"></span><code>#fff8f5</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ecffe4" aria-hidden="true"></span><code>#ecffe4</code></span> |
| 95 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffedea" aria-hidden="true"></span><code>#ffedea</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffeee2" aria-hidden="true"></span><code>#ffeee2</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #c9ffbe" aria-hidden="true"></span><code>#c9ffbe</code></span> |
| 90 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffdad6" aria-hidden="true"></span><code>#ffdad6</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffdcc1" aria-hidden="true"></span><code>#ffdcc1</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #8ffa88" aria-hidden="true"></span><code>#8ffa88</code></span> |
| 85 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffc7c0" aria-hidden="true"></span><code>#ffc7c0</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffca9f" aria-hidden="true"></span><code>#ffca9f</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #81ec7c" aria-hidden="true"></span><code>#81ec7c</code></span> |
| 80 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffb4ab" aria-hidden="true"></span><code>#ffb4ab</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ffb779" aria-hidden="true"></span><code>#ffb779</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #74dd6f" aria-hidden="true"></span><code>#74dd6f</code></span> |
| 70 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ff897d" aria-hidden="true"></span><code>#ff897d</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #fa911c" aria-hidden="true"></span><code>#fa911c</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #58c157" aria-hidden="true"></span><code>#58c157</code></span> |
| 60 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #ff5449" aria-hidden="true"></span><code>#ff5449</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #d87900" aria-hidden="true"></span><code>#d87900</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #3ba53f" aria-hidden="true"></span><code>#3ba53f</code></span> |
| 50 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #df362f" aria-hidden="true"></span><code>#df362f</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #b26300" aria-hidden="true"></span><code>#b26300</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #198a27" aria-hidden="true"></span><code>#198a27</code></span> |
| 40 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #bb1919" aria-hidden="true"></span><code>#bb1919</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #8f4e00" aria-hidden="true"></span><code>#8f4e00</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #006e17" aria-hidden="true"></span><code>#006e17</code></span> |
| 35 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #a9040e" aria-hidden="true"></span><code>#a9040e</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #7d4400" aria-hidden="true"></span><code>#7d4400</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #006013" aria-hidden="true"></span><code>#006013</code></span> |
| 30 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #93000a" aria-hidden="true"></span><code>#93000a</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #6c3a00" aria-hidden="true"></span><code>#6c3a00</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #00530f" aria-hidden="true"></span><code>#00530f</code></span> |
| 25 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #7e0007" aria-hidden="true"></span><code>#7e0007</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #5c3000" aria-hidden="true"></span><code>#5c3000</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #00460b" aria-hidden="true"></span><code>#00460b</code></span> |
| 20 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #690005" aria-hidden="true"></span><code>#690005</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #4c2700" aria-hidden="true"></span><code>#4c2700</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #003908" aria-hidden="true"></span><code>#003908</code></span> |
| 15 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #540003" aria-hidden="true"></span><code>#540003</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #3d1e00" aria-hidden="true"></span><code>#3d1e00</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #002d05" aria-hidden="true"></span><code>#002d05</code></span> |
| 10 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #410002" aria-hidden="true"></span><code>#410002</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #2e1500" aria-hidden="true"></span><code>#2e1500</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #002203" aria-hidden="true"></span><code>#002203</code></span> |
| 5 | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #2d0001" aria-hidden="true"></span><code>#2d0001</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #1f0c00" aria-hidden="true"></span><code>#1f0c00</code></span> | <span class="sf-doc-color-value"><span class="sf-doc-color-chip" style="--sf-doc-color: #001501" aria-hidden="true"></span><code>#001501</code></span> |
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

![Три варианта нейтральной палитры: grey-primary, grey-blue и grey](/ru/fundamentals/assets/neutral-palettes.png)

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
{.table}

Все имена используются с префиксом `--sf-`. Например:
`--sf-surface-container`, `--sf-on-primary` и `--sf-outline-error`.

### Живые образцы ролей

Эти образцы построены из переменных текущей версии SIMAI Framework. Переключите
светлую и тёмную тему в настройках документации: фон и контрастный текст каждой
карточки изменятся автоматически.

<div class="sf-doc-color-role-grid">
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-primary); --sf-doc-role-color: var(--sf-on-primary)">
        <strong>Primary</strong>
        <code>--sf-primary / --sf-on-primary</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-secondary); --sf-doc-role-color: var(--sf-on-secondary)">
        <strong>Secondary</strong>
        <code>--sf-secondary / --sf-on-secondary</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-tertiary); --sf-doc-role-color: var(--sf-on-tertiary)">
        <strong>Tertiary</strong>
        <code>--sf-tertiary / --sf-on-tertiary</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-info); --sf-doc-role-color: var(--sf-on-info)">
        <strong>Info</strong>
        <code>--sf-info / --sf-on-info</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-success); --sf-doc-role-color: var(--sf-on-success)">
        <strong>Success</strong>
        <code>--sf-success / --sf-on-success</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-warning); --sf-doc-role-color: var(--sf-on-warning)">
        <strong>Warning</strong>
        <code>--sf-warning / --sf-on-warning</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-error); --sf-doc-role-color: var(--sf-on-error)">
        <strong>Error</strong>
        <code>--sf-error / --sf-on-error</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-0); --sf-doc-role-color: var(--sf-on-surface)">
        <strong>Surface 0</strong>
        <code>--sf-surface-0 / --sf-on-surface</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-container); --sf-doc-role-color: var(--sf-on-surface)">
        <strong>Surface Container</strong>
        <code>--sf-surface-container / --sf-on-surface</code>
    </div>
    <div class="sf-doc-color-role" style="--sf-doc-role-background: var(--sf-surface-inverse); --sf-doc-role-color: var(--sf-on-surface-inverse)">
        <strong>Surface Inverse</strong>
        <code>--sf-surface-inverse / --sf-on-surface-inverse</code>
    </div>
</div>

Палитры-примитивы в таблице выше не меняются при переключении темы.
Семантические роли меняются, поэтому в интерфейсах предпочтительно использовать
именно их.

### Как роли выглядят в интерфейсе

Иллюстрации ниже показывают назначение ролей, а не готовые компоненты.
Конкретный внешний вид компонента может отличаться, но смысл пары
«фон / содержимое на фоне» сохраняется.

#### Акцентные и статусные роли

`Primary` выделяет главное действие или выбранное состояние.

![Примеры применения роли Primary в интерфейсе](/ru/fundamentals/assets/role-primary-usage.png)

`Error`, `Warning` и `Success` обозначают соответственно ошибку,
предупреждение и успешный результат. Для текста и иконок на цветном фоне
используйте соответствующую роль `on-*`.

![Примеры применения роли Error](/ru/fundamentals/assets/role-error-usage.png)

![Примеры применения роли Warning](/ru/fundamentals/assets/role-warning-usage.png)

![Примеры применения роли Success](/ru/fundamentals/assets/role-success-usage.png)

#### Нейтральные и служебные роли

`Surface` формирует фон страницы, карточек и вложенных областей.

![Примеры применения ролей Surface](/ru/fundamentals/assets/role-surface-usage.png)

`Disable` снижает визуальный приоритет недоступного элемента, а `Outline`
отделяет поля, контролы и области без лишнего цветового акцента.

![Примеры применения роли Disable](/ru/fundamentals/assets/role-disable-usage.png)

![Примеры применения роли Outline](/ru/fundamentals/assets/role-outline-usage.png)

`Link`, `Focus` и `Mark` отвечают за ссылки, видимый клавиатурный фокус и
выделение фрагмента текста.

![Примеры применения роли Link](/ru/fundamentals/assets/role-link-usage.png)

![Примеры применения ролей Focus и Mark](/ru/fundamentals/assets/role-focus-mark-usage.png)

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
