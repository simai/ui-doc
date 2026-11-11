document.querySelectorAll('[data-tree-selection-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-tree-selection-result]');
  demo.addEventListener('sf-tree-select', (event) => {
    const item = demo.querySelector(`sf-tree-item[value="${CSS.escape(String(event.detail.id))}"]`);
    const name = item ? item.getAttribute('label') : event.detail.id;
    result.textContent = `Выбрана папка: ${name}`;
  });
});
