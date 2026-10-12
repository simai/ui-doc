document.querySelectorAll('[data-pagination-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-pagination-result]');
  demo.addEventListener('sf-page-change', (event) => {
    result.textContent = `Открыта страница ${event.detail.current}.`;
  });
  demo.addEventListener('sf-page-size-change', (event) => {
    result.textContent = `На странице ${event.detail.pageSize} записей, открыта страница ${event.detail.current}.`;
  });
});
