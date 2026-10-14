const failed = document.querySelector('#empty-state-error');
const log = document.querySelector('#empty-state-log');
failed?.addEventListener('sf-empty-state-action', (event) => {
  if (event.detail.id === 'retry') log.textContent = 'Приложение повторяет загрузку';
});
