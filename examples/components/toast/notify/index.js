const demo = document.querySelector('[data-notify-demo]');
const log = demo.querySelector('[data-notify-log]');
const messages = {
  success: {status: 'success', title: 'Изменения сохранены', key: 'demo:saved'},
  error: {status: 'error', title: 'Оплата не прошла', text: 'Проверьте данные карты.', action: {label: 'Повторить', onSelect: () => {}}},
};

// Every message is announced on the document before it shows: a notification
// centre would record it here.
document.addEventListener('sf-notification', (event) => {
  log.textContent = `Записано: ${event.detail.title} (${event.detail.status}). В истории: ${SF.notifications.history().length + 1}.`;
});

demo.addEventListener('click', (event) => {
  const button = event.target.closest('[data-notify]');
  if (button) SF.notify(messages[button.dataset.notify]);
});
