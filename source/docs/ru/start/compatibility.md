---
extends: _core._layouts.documentation
section: content
title: Совместимость и обновление
description: Что должно входить в immutable compatibility lock SIMAI Framework.
---

# Совместимость и обновление

Публичная версия документации — `5.4.0`, но сама надпись о версии не является
доказательством совместимости. Для подключения в проект требуется approved
immutable compatibility lock: единый машиночитаемый и проверяемый источник для
Core, Components, Smart Components и примеров.

## Что фиксирует lock

- immutable tag и commit Core;
- immutable tag и commit Smart Components, если они используются;
- профиль поставки и пути release-артефактов;
- хэши или другой способ проверить полученные артефакты;
- revision release catalog с contract ID и статусом каждой записи;
- версию или revision примеров, проверенных на той же pair;
- дату browser smoke и известные ограничения.

Не заменяйте эти поля названием ветки, записью `latest`, случайным commit или
успешным запуском playground. Все четыре источника могут описывать разное
состояние runtime.

## Статус baseline 5.4.0

Для `5.4.0` в текущем source inventory отсутствует owner-approved immutable
pair Core и Smart Components. Поэтому здесь нельзя публиковать готовый CDN URL,
commit, список доступных элементов или гарантию совместимости. После выпуска
lock эта страница должна получить ссылку на него и точную дату проверки.

## Безопасное обновление

1. Прочитайте новый lock и его статус, включая ограничения.
2. Обновите Core, Smart Components и assets как одну согласованную поставку.
3. Сверьте contract ID используемых утилит и компонентов с новым catalog.
4. Запустите Network/Console/browser smoke на минимальном approved example.
5. Только после успешной проверки обновляйте production-конфигурацию.

Если lock отмечает поставку как bounded или experimental, не называйте её
production-ready: ограничения должны быть видны рядом с инструкцией
подключения.
