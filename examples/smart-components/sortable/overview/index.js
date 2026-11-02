// sf-sortable only reports intent; the page moves its own items.
document.querySelectorAll('[data-sortable-demo]').forEach((demo) => {
  const status = demo.querySelector('[data-sortable-status]');
  demo.addEventListener('sf-sortable-move', (event) => {
    const { item, to, index } = event.detail;
    const list = demo.querySelector(`#${to}`);
    const element = demo.querySelector(`[data-sf-sortable-item="${item}"]`);
    if (!list || !element) return;
    element.remove();
    const items = [...list.querySelectorAll('[data-sf-sortable-item]')];
    list.insertBefore(element, items[index] || null);
    const label = [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join('').trim();
    if (status) status.textContent = `«${label}» — позиция ${index + 1} в списке «${list.getAttribute('label')}».`;
  });
});
