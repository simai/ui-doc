document.querySelectorAll('[data-pagination-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-pagination-result]');
  demo.addEventListener('sf-pagination-change', (event) => {
    result.textContent = `Открыта страница ${event.detail.current}.`;
  });
});
