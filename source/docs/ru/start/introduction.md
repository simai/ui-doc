---
extends: _core._layouts.documentation
section: content
title: Маршрут по документации
description: Выберите слой SIMAI Framework и начните с проверяемого compatibility lock.
---

# Маршрут по документации

Начните с [установки и версии](/ru/start/installation/): она задаёт единую
пару Core и Smart Components и не позволяет случайно получить assets из ветки.
После smoke-проверки выберите нужный слой:

- [Основы](/ru/fundamentals/) — если вы собираете интерфейс из CSS-утилит;
- [Утилиты](/ru/utilities/) — если уже знаете нужную CSS-задачу;
- [Компоненты](/ru/components/) — для presentation/interaction layer;
- [Smart Components](/ru/smart-components/) — для custom elements со state и
  зависимостями.

Загрузчик — отдельная техническая поверхность. Его страницы полезны только
после проверки API в том же release lock; начните с [границ
контракта](/ru/start/loader/), а не с предположений о backend-интеграции.
