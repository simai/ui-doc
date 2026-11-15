// Check marks are the page's: it writes the new checked state back and
// keeps the menu open, so several columns can be turned in one visit.
document.querySelectorAll('[data-context-menu-demo="select"]').forEach((demo) => {
  if (demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const anchor = demo.querySelector('[data-menu-anchor]');
  const menu = demo.querySelector('sf-menu-context');
  const result = demo.querySelector('[data-menu-result]');
  const columns = [
    {id: 'name', text: 'Название', on: true},
    {id: 'price', text: 'Цена', on: true},
    {id: 'stock', text: 'Остаток', on: false},
    {id: 'sku', text: 'Артикул', on: false},
  ];
  const render = () => {
    menu.entries = columns.map((column) => ({id: column.id, text: column.text, kind: 'check', checked: column.on, keepOpen: true}));
    result.textContent = `Видны: ${columns.filter((column) => column.on).map((column) => column.text).join(', ') || 'ничего'}.`;
  };
  render();
  anchor.addEventListener('click', () => menu.toggleFor({anchor}));
  menu.addEventListener('sf-menu-context-select', (event) => {
    const column = columns.find((item) => item.id === event.detail.id);
    if (column) column.on = event.detail.checked;
    render();
  });
});
