---
extends: _core._layouts.documentation
section: content
title: История изменений
description: Статус публикации истории изменений SIMAI Framework.
---

# История изменений

Публичные release notes SIMAI Framework публикуются только вместе с
проверяемой парой версий Core и Smart Components, immutable refs и
утверждённым compatibility lock.

## Baseline 5.4.0

В текущем source inventory нет owner-approved immutable compatibility lock
для `5.4.0`. Поэтому документация не заявляет какие-либо изменения как уже
вошедшие в эту версию.

Материалы, которые ранее были помечены как «изменения 5.4.0», являются
проектными предложениями, а не опубликованным API или changelog. Они могут
быть реализованы в следующем релизе (`5.5.0` или выше) только после проверки
владельцами Core и Smart Components.

## Как будет оформлена запись о релизе

После утверждения release lock эта страница будет содержать:

- точную пару версий и immutable refs;
- границы совместимости и известные ограничения;
- подтверждённые изменения Utilities, Components и Smart Components;
- migration notes и обновлённые примеры для затронутых API.

Пока используйте [раздел совместимости](/ru/start/compatibility/) и не
подключайте зависимости через `main` или `latest`.
