---
title: "Core"
description: "Базовый слой SIMAI Framework: общие стили, токены, темы и загрузчик."
---

# Core

Core — обязательная основа Framework. Он задаёт базовые стили, дизайн-токены и темы, а также запускает Loader для остальных доступных модулей.

## Когда применять

Core подключается на каждой странице, где используется SIMAI Framework. Без него утилиты и компоненты не получают общей среды и согласованных значений.

## Пример

```html
<link rel="stylesheet" href="/simai-framework/distr/core/css/core.css">
<script>window.sfPath = '/simai-framework/distr/';</script>
<script src="/simai-framework/distr/core/js/core.js"></script>
```

## Что дальше

Посмотрите, [как работает Loader](/ru/guide/connection/loader/), затем выберите между [утилитами](/ru/guide/architecture/utilities/) и [компонентами](/ru/guide/architecture/components/).
