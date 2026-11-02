document.querySelectorAll('[data-tree-selection-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-tree-selection-result]');
  demo.addEventListener('sf-tree-select', (event) => {
    result.textContent = `Выбрана папка: ${event.detail.id}`;
  });
});
