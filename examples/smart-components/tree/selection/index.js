document.querySelectorAll('[data-tree-selection-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-tree-selection-result]');
  demo.addEventListener('sf-tree-selection-change', (event) => {
    result.textContent = `Выбрана папка: ${event.detail.value}`;
  });
});
