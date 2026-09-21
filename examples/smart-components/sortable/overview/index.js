// sf-sortable only reports intent; the page moves its own items.
document.addEventListener('sf-sortable-intent', (event) => {
  const { item, to, index } = event.detail;
  const list = document.getElementById(to);
  const element = document.querySelector(`[data-sf-sortable-item="${item}"]`);
  if (!list || !element) return;
  element.remove();
  const items = [...list.querySelectorAll('[data-sf-sortable-item]')];
  list.insertBefore(element, items[index] || null);
  const label = [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join('').trim();
  document.querySelector('#sortable-status').textContent = `«${label}» — позиция ${index + 1} в списке «${list.getAttribute('label')}».`;
});
