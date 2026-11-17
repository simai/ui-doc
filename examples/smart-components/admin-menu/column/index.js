// While the menu is compact the shell owns the width: the handle is off.
const initializeAdminMenuColumn = async () => {
  await customElements.whenDefined('sf-admin-menu');
  const menu = document.querySelector('#admin-menu-column');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  const column = menu.closest('nav');
  const handle = column.querySelector('sf-resizer');
  menu.addEventListener('sf-admin-menu-compact-change', ({detail}) => {
    handle.toggleAttribute('disabled', detail.compact);
    column.style.inlineSize = detail.compact ? 'auto' : 'var(--menu-width, 16rem)';
  });
};

initializeAdminMenuColumn();
