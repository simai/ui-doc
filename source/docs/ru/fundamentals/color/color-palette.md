---
extends: _core._layouts.documentation
section: content
title: Цветовая палитра
description: Цветовая палитра
---

# Цветовая палитра

Цветовая палитра включает следующие основные группы цветов: **Primary**, **Secondary**, **Tertiary**, **Error**, *
*Success**, а также три дополнительных цвета без тонов — прозрачный, белый и чёрный.

Система формирования палитры основана на цветовой схеме HCT (Hue, Chroma, Tone), используемой в Material Design 3\.
Подход к генерации тонов схож с документацией Material Design 3 (
подробности: [Material Design Color System](https://m3.material.io/styles/color/system/overview)). Для каждого цвета
используется набор из 16 тонов: 98, 95, 90, 85, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5\. Тона 100 и 0 заменяются
белым и чёрным соответственно.
