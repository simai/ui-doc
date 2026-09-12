# Modal exact-pair rebind verification

Статус узкого этапа: `PASS`.

- Canonical release lock: `5de65ca80b405ff285a3770a21042e9f2b99d11c:contracts/releases/ui-e2e5d0fec53d-smart-839ca74ae47e.lock.json`.
- Runtime: Core `e2e5d0fec53dbd40d298299c8c3be0f038c3deb5`, Smart `839ca74ae47e50b69ddde46b8995c48031303bae`.
- Materialization: `php scripts/materialize-framework-runtime.php /Users/rim/Documents/GitHub/ui /Users/rim/Documents/GitHub/ui-smart`, exit 0.
- Build: `php -d memory_limit=2G vendor/bin/docara build components_reference_rebind_20260912`, 917 страниц, exit 0.
- Static verification: `php -d memory_limit=2G vendor/bin/docara verify-static build_components_reference_rebind_20260912`, 1 804 HTML, 376 747 локальных ссылок, 0 broken, exit 0.
- Example quality audit: 502 общих примера, 0 blockers; два прежних advisories находятся вне батча.
- Component reference audit: 4 выбранных компонента, 26 примеров, 63 registry components, 59 остальных компонентов классифицированы, 0 blockers, 0 source defects.
- Documentation acceptance: `component.buttons`, `component.inputs`, `component.checkbox` и `component.modal` имеют статус `current` для нового source contract.
- Browser smoke: четыре страницы и 26 iframe-примеров доступны без горизонтального переполнения и console errors.
- Обычный и Smart Modal проверены для `inline-start`/`inline-end`: LTR даёт start=left/end=right, RTL — start=right/end=left.
- Опубликованные в сборку Core Modal CSS/JS и Smart Modal JS побайтно совпали с точными Git-объектами.

## Контракт и границы

- Богатый Smart-контракт сохранён: суммарно 200 атрибутов до и после rebind; у `sf-modal` осталось 41 поле и прежние loader relations.
- Новый `smart/alert/css/alert.css` добавлен в статическую проекцию, потому что этот файл появился в точном Smart runtime и входит в фактическое замыкание Docara.
- `pair_id` имеет обязательный для Docara формат `sf-v5.7.0-e2e5d0fe-839ca74a`, а профиль остаётся `verified-commit-candidate-v1`; связь с bounded-парой задаёт canonical release lock, а не опубликованный tag.
- Исходники Core/Smart, generated `ui`/`ui-smart`, production, release и remote Git не изменялись.

## ИКР / simplicity receipt

- Outcome: документация использует одну принятую точную пару, а логические позиции Modal демонстрируются и объясняются без временного предупреждения о нормализации в center.
- Reuse: материализация вызывает штатные детерминированные Docara sync-команды и не добавляет второй генератор runtime.
- Changed surface: lock/registry projection, одна страница Modal, два позиционных примера, узкий audit и evidence.
- Removal review: удалено устаревшее ограничение предыдущего кандидата; историческое evidence прежнего этапа сохранено.
- Protected complexity: неизменными остались 200 Smart attributes, loader relations, typography/icon projections и все страницы вне Modal.
