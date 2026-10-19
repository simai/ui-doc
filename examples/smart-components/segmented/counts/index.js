// Число варианта приходит в event.detail.item вместе с подписью.
document.querySelectorAll('[data-filter-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-filter-result]');
  demo.addEventListener('change', (event) => {
    if (event.target.localName !== 'sf-button-group') return;
    result.textContent = `Показано тем: ${event.detail.item?.count ?? 0}`;
  });
});
