const result = document.querySelector('#clipboard-events-result');

// The button reports the result; the page decides what to do with it.
document.addEventListener('sf:copy-success', (event) => {
  result.textContent = `Скопировано: ${event.detail.text}`;
});
document.addEventListener('sf:copy-error', (event) => {
  result.textContent = `Не скопировано, код ошибки: ${event.detail.code}`;
});
