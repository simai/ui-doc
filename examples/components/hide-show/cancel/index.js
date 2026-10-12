document.querySelectorAll('[data-hide-show-cancel-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-hide-show-cancel-result]');

  demo.addEventListener('sf-hide-show:change', (event) => {
    if (!event.detail.hidden) return;
    event.preventDefault();
    result.textContent = 'Скрытие отменено: сначала сохраните изменения.';
  });
});
