const rows = [...document.querySelectorAll('#popover-focus-list li')];

const initialize = async () => {
  await customElements.whenDefined('sf-popover');
  const popover = document.querySelector('#popover-focus-field');
  if (!popover || popover.dataset.exampleReady === 'true') return;
  popover.dataset.exampleReady = 'true';
  const field = () => popover.querySelector('[slot="content"] input');

  const applyFilter = () => {
    const query = (field()?.value ?? '').trim().toLowerCase();
    rows.forEach((row) => { row.hidden = Boolean(query) && !row.textContent.toLowerCase().includes(query); });
  };

  // The person opened the surface to type: the field takes the focus.
  popover.addEventListener('sf-popover-opened', () => {
    field()?.focus();
  });
  // The filter applies when the surface closes.
  popover.addEventListener('sf-popover-closed', () => {
    applyFilter();
  });
};

initialize();
