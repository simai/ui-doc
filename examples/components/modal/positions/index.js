let modalPositionsInitialized = false;

const initializeModalPositions = () => {
  if (modalPositionsInitialized) return;

  const registry = window.SF?.Loader?.ComponentRegistry ?? window.SF?.ComponentRegistry ?? {};
  const pending = window.SF_PENDING_COMPONENTS ?? [];
  const Modal = registry.Modal ?? pending.find(([name]) => name === 'Modal')?.[1];
  if (typeof Modal !== 'function') {
    window.setTimeout(initializeModalPositions, 50);
    return;
  }

  modalPositionsInitialized = true;
  document.querySelectorAll('[data-modal-position]').forEach((button) => {
    const position = button.dataset.modalPosition;
    const id = `modal-position-${position}`;
    const modal = new Modal({
      id,
      param: {
        position,
        title: `Положение: ${button.textContent.trim().toLowerCase()}`,
        html: '<p class="m-0">Поверхность размещена относительно выбранного края.</p>',
      },
      attrs: {},
    });
    modal.render();
    button.addEventListener('click', () => modal.open());
  });
};

window.addEventListener('Modal:ready', initializeModalPositions);
initializeModalPositions();
