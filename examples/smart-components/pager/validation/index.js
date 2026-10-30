// The page decides whether a step is valid: it cancels the request until it is.
const initialize = async () => {
  await customElements.whenDefined('sf-pager');
  const pager = document.querySelector('#pager-validation');
  if (!pager || pager.dataset.exampleReady === 'true') return;
  pager.dataset.exampleReady = 'true';
  pager.items = [{"id": "source", "title": "Источник"}, {"id": "fields", "title": "Поля"}, {"id": "check", "title": "Проверка"}, {"id": "import", "title": "Импорт"}];
  const ready = document.querySelector('#pager-validation-ready');
  const status = document.querySelector('#pager-validation-status');
  pager.addEventListener('sf-pager-navigate', (event) => {
    if (event.detail.direction === 'next' && !ready.checked) {
      event.preventDefault();
      status.textContent = 'Шаг не готов: сопоставьте поля.';
    }
  });
  pager.addEventListener('sf-pager-change', ({detail}) => {
    status.textContent = detail.complete ? 'Импорт запущен.' : `Открыт шаг: ${detail.item?.title ?? '—'}.`;
  });
};

initialize();
