# План локального переключения `ui-doc.test`

Статус: подготовлено, переключение в этом этапе не выполнялось.

## Текущее состояние

- ServBay document root: `/Users/rim/Sites/ui-doc.test`.
- Тип: symbolic link.
- Текущая цель: `/Users/rim/Sites/.ui-doc-releases/20260911-220731-form-contract-docs`.
- Проверенная новая сборка: `build_foundation_sync_20260912`.

## Безопасный порядок

1. После локального коммита создать новый неизменяемый каталог релиза в
   `/Users/rim/Sites/.ui-doc-releases/`, не изменяя текущую цель ссылки.
2. Сохранить вне document root свежий read-back: текущую цель ссылки, commit,
   контрольные суммы ключевых HTML-файлов и результаты HTTPS smoke.
3. Выполнить action gate для локального live-переключения.
4. Только при `PASS` атомарно заменить symbolic link на новый каталог.
5. Проверить `https://ui-doc.test/ru/`, `/ru/start/vision/`,
   `/ru/fundamentals/architecture/` и
   `/ru/fundamentals/adaptive-sizing-system/`.

## Откат и условия остановки

- Откат: атомарно вернуть ссылку на
  `/Users/rim/Sites/.ui-doc-releases/20260911-220731-form-contract-docs`.
- Остановиться без переключения при failed gate, отсутствии свежего backup
  read-back, ошибке копирования, несовпадении контрольных сумм, HTTP не 200,
  ошибках загрузки локальных ресурсов или битых ссылках.

Переключение отложено намеренно: исходный тред ограничил этот пакет завершением
и коммитом Foundation Documentation Sync без смешивания со следующим этапом.
