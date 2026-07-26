---
extends: _core._layouts.documentation
section: content
title: Подготовка проекта
description: Организация файлов и конфигурации SIMAI Framework в веб-проекте.
---

# Подготовка проекта

SIMAI Framework не требует конкретного сборщика или backend-платформы. Браузеру
нужен публичный URL каталога `distr`, подключённые `core.css` и `core.js`.

## Рекомендуемая структура

```text
public/
└── assets/
    └── simai-framework/
        ├── ui/
        │   └── distr/
        │       ├── core/
        │       ├── utility/
        │       └── component/
        └── ui-smart/
            └── smart/
```

Для этой структуры задайте `window.sfPath` равным
`/assets/simai-framework/ui/distr`, а `window.sfSmartPath` —
`/assets/simai-framework/ui-smart`. Храните точную пару версий в lock-файле
проекта или описании релиза.

## Для production

- отдавайте CSS, JavaScript, шрифты и JSON с корректными MIME-типами;
- настройте длительное кеширование только для версионированных файлов;
- не смешивайте CDN и локальные файлы разных версий;
- проверяйте отсутствие 404 и JavaScript-ошибок после обновления;
- добавьте минимальную страницу SIMAI Framework в автоматическую
  browser-проверку проекта.

Framework можно подключать напрямую из шаблона или через ваш asset pipeline.
Сборка не должна менять внутреннюю структуру `distr`, если пути загрузчика не
перенастроены явно.
