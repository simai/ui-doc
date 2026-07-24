# Workflow: визуальный справочник цветов SIMAI Framework

Дата: 2026-07-24
Статус: completed

## Goal

Дополнить страницу «Цвета и темы» живой демонстрацией палитр и семантических
ролей, сохранив точные коды цветов и удобство справочного поиска.

## Done When

- рядом со всеми 130 HEX-значениями отображается соответствующий цветной
  образец;
- прозрачный цвет показан шахматным фоном;
- основные семантические роли представлены живыми карточками;
- карточки используют реальные CSS-переменные Framework и меняются вместе с
  темой документации;
- значения остаются доступны текстом и не кодируются только цветом;
- таблица, светлая и тёмная темы проверены в браузере;
- production build, ссылки и ассеты проходят проверки;
- локальный `ui-doc.test` обновлён, GitHub и удалённый production не меняются.

## Current batch

- целевая страница:
  `source/docs/ru/fundamentals/colors-and-themes.md`;
- общие стили документации:
  `source/_core/_layouts/documentation.blade.php`;
- публикация: только локальный preview.

## Ownership

- content owner: `$docs`;
- build owner: `$docara`;
- technical facts: актуальные переменные репозитория `ui`;
- acceptance: статическая проверка и browser smoke;
- federation route выбрал Figma-oriented designer flow, но Figma target в
  задаче отсутствует; применён raw-source fallback к владельцам docs/Docara.
- текущий `ui/main` (`dcb47477…`) содержит несовместимые runtime/chunk IDs:
  `core.js` ожидает chunk `66700837013363`, а опубликованный
  `core-loader.js` регистрирует chunk `394`; для локального visual smoke
  применяется ранее проверенный immutable commit `ecd8e3af…`, без присвоения
  ему статуса approved release.

## Batches

| Batch | Result | Status |
| --- | --- | --- |
| 1 | CSS-контракт образцов и живых карточек | completed |
| 2 | Образцы для всех HEX-значений | completed |
| 3 | Build, links, light/dark visual smoke | completed |
| 4 | Локальный preview и commit | completed |

## Evidence

- production build: `Site built successfully`;
- rendered links: 366 HTML-файлов, 60 475 внутренних ссылок, 0 битых;
- browser DOM: 131 образец (130 HEX и прозрачный цвет), 0 расхождений между
  образцом и подписанным значением, 10 живых карточек ролей;
- таблицы: две группы по 16 тонов, без переполнения страницы; на узком экране
  таблицы получают независимую горизонтальную прокрутку;
- тема: `Primary` меняется с `rgb(0, 91, 190)` / белого текста в светлой теме
  на `rgb(172, 199, 255)` / `rgb(0, 47, 103)` в тёмной;
- loader скрыт, локальная страница открывается штатно;
- локальная сборка опубликована в
  `/Users/rim/Documents/GitHub/ui-doc/build_production`;
- integrity check сохраняет один известный release-level blocker:
  `unpinned_runtime_ref` в `source/_core/_layouts/core.blade.php`; локальный
  smoke выполнен с immutable compatibility pin `ecd8e3af…`.

## Constraints

- не заменять HEX-коды цветными блоками;
- не дублировать значения вручную вне source-backed таблицы;
- не изменять токены Framework;
- не выдавать локальный compatibility pin за release lock 5.4;
- не выполнять push, merge или удалённый deploy.
