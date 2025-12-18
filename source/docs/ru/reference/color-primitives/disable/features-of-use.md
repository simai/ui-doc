---
extends: _core._layouts.documentation
section: content
title: Особенности использования
description: Особенности использования
---

# Особенности использования

Для роли **Disable** применяются полупрозрачные цвета, что позволяет использовать их поверх различных фонов с разным
уровнем контрастности, сохраняя при этом читаемость и чёткое восприятие.

Пример логики перехода от активных к неактивным состояниям:

* Primary → Disable
* On Primary → On Disable
* Primary Container → Disable
* On Primary Container → On Disable
* Outline Primary → Outline Disable

Такой подход сохраняет визуальную связность: если активный элемент имеет окраску Primary, его неактивное состояние будет
соответствовать Disable, а для текста на Primary автоматически используется On Disable.

![][image22]

![][image23]

Для работы с ролью Disable используются следующие переменные:

| Переменная             | Значение (light)           | Значение (dark)            |
|:-----------------------|:---------------------------|:---------------------------|
| `--sf-disable`         | `--sf-neutral-50--alfa-12` | `--sf-neutral-90--alfa-12` |
| `--sf-on-disable`      | `--sf-neutral-50--alfa-24` | `--sf-neutral-90--alfa-24` |
| `--sf-outline-disable` | `--sf-neutral-50--alfa-24` | `--sf-neutral-90--alfa-24` |
{.table}

[image22]: /assets/build/img/b64/49a66e5e4a47e2c6.png
[image23]: /assets/build/img/b64/ac48e6f24fd4805f.png
