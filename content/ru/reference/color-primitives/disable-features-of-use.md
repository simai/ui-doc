---
title: "Особенности использования"
description: "Особенности использования"
---

# Особенности использования

Для роли **Disable** применяются полупрозрачные цвета, что позволяет использовать и
 повер
 различны
 фонов с разным
уровнем контрастности, со
раняя при этом читаемость и чёткое восприятие.

Пример логики пере
ода от активны
 к неактивным состояниям:

* Primary → Disable
* On Primary → On Disable
* Primary Container → Disable
* On Primary Container → On Disable
* Outline Primary → Outline Disable

Такой под
од со
раняет визуальную связность: если активный элемент имеет окраску Primary, его неактивное состояние будет
соответствовать Disable, а для текста на Primary автоматически используется On Disable.

![Примеры применения роли Disable][image22]

![Роли Disable в светлой и тёмной тема
][image23]

Для работы с ролью Disable используются следующие переменные:

| Переменная             | Значение (light)           | Значение (dark)            |
|:-----------------------|:---------------------------|:---------------------------|
| `--sf-disable`         | `--sf-neutral-50--alfa-12` | `--sf-neutral-90--alfa-12` |
| `--sf-on-disable`      | `--sf-neutral-50--alfa-24` | `--sf-neutral-90--alfa-24` |
| `--sf-outline-disable` | `--sf-neutral-50--alfa-24` | `--sf-neutral-90--alfa-24` |
{.table}

[image22]: /ru/assets/reference/image-22.png
[image23]: /ru/assets/reference/image-23.png
