---
extends: _core._layouts.documentation
section: content
title: "Загрузчик: границы контракта"
description: Отделите публичный клиентский runtime от исторических и непроверенных server-материалов.
---

# Загрузчик: границы контракта

Загрузчик относится к клиентскому runtime SIMAI Framework. Его точный API,
события, пути assets и зависимости должны проверяться по тому же release lock,
что и Core/Smart Components.

В старом разделе сохранились frontend- и backend-описания, для которых в
текущем source inventory нет единого owner-approved контракта. Они не должны
быть основанием для новой интеграции, пока не подтверждены release schema и
исполняемым примером.

## Безопасный порядок работы

1. Сначала задайте pinned `window.sfPath` до загрузки Core.
2. Убедитесь, что release lock явно включает нужный loader surface.
3. Используйте только symbols и события, указанные в public schema этого lock.
4. Для server, cache и asset-generation кода запросите отдельный owner source;
   не переносите PHP-примеры из исторической документации как текущий API.

После появления source-backed API здесь будут опубликованы отдельные страницы
по методам, событиям, зависимостям и failure states.
