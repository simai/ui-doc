---
extends: _core._layouts.documentation
section: content
title: Переход на вертикальный sizing contract
description: Миграция root, typography и controls без горизонтального rebaseline.
---

# Переход на вертикальный sizing contract

## До обновления

Зафиксируйте exact Core/Smart pair, contract hash и browser baseline. Не
обновляйте только Core или только Smart и не используйте `main`/`latest` как
совместимость.

## Последовательность

1. Уберите локальное изменение `font-size` у `html`, если оно повторяет
   mobile scaling Framework.
2. Проверьте, что default typography назначена на `body` или application
   shell.
3. Для парной типографики используйте одновременно `text-size-*` и
   `text-height-*`.
4. Удалите компенсации высоты у Button, IconButton, Input, Select и
   однострочного Textarea, если они заменены общим control-height.
5. Проверьте каждую size × tightness группу на mobile и desktop.
6. Сравните console, overflow и text clipping с baseline.

## Важное изменение

Старый код мог рассчитывать, что mobile `rem` меньше desktop `rem`. Теперь
корневой размер стабилен, а responsive difference находится в semantic
variables. Прямые `rem`-значения в продуктовых стилях поэтому нужно проверить
отдельно.

## Не менять в этой миграции

Не пытайтесь одновременно выровнять menu indentation, inline padding,
icon-to-label distance или container gutters. Горизонтальные отношения
исключены из vertical contract и требуют отдельного продуктового решения.

## Rollback

Возвращайте exact compatibility tuple целиком. Не смешивайте прежний Core с
новым Smart или наоборот. Figma variables первой волны при rollback
deprecate, а не удаляются из опубликованной библиотеки.
