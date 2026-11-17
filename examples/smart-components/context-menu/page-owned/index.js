// The page shows and hides the menu itself and returns focus to its button.
document.querySelectorAll('[data-context-menu-demo="page-owned"]').forEach((demo) => {
  if (demo.dataset.exampleReady === 'true') return;
  demo.dataset.exampleReady = 'true';
  const opener = demo.querySelector('#file-menu-button');
  const layer = demo.querySelector('#file-menu-layer');
  const menu = layer.querySelector('sf-menu-context');
  const result = demo.querySelector('[data-menu-result]');
  const hide = (text) => {
    layer.hidden = true;
    opener.setAttribute('aria-expanded', 'false');
    opener.focus();
    result.textContent = text;
  };
  opener.addEventListener('click', async () => {
    if (!layer.hidden) return hide('Меню скрыто.');
    layer.hidden = false;
    opener.setAttribute('aria-expanded', 'true');
    result.textContent = 'Меню открыто.';
    await menu.whenRendered();
    menu.focus();
  });
  layer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hide('Меню скрыто клавишей Escape.');
  });
  layer.addEventListener('click', (event) => {
    const item = event.target.closest('sf-button');
    if (item) hide(`Выбрано: ${item.getAttribute('text')}.`);
  });
});
