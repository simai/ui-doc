document.getElementById('list-item-rows').addEventListener('sf-list-item-open', (event) => {
  document.querySelector('[data-list-item-status]').textContent = `Выбрана строка: ${event.detail.id}`;
});
