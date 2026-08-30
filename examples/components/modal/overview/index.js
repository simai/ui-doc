let modalExampleInitialized = false;

const initializeModalExample = () => {
  if (modalExampleInitialized) return;

  const registry = window.SF?.Loader?.ComponentRegistry ?? window.SF?.ComponentRegistry ?? {};
  const pending = window.SF_PENDING_COMPONENTS ?? [];
  const Modal = registry.Modal ?? pending.find(([name]) => name === 'Modal')?.[1];
  if (typeof Modal !== 'function') {
    window.setTimeout(initializeModalExample, 50);
    return;
  }

  modalExampleInitialized = true;
  const modal = new Modal({
    id: 'modal-example',
    param: {
      title: 'Опубликовать изменения?',
      html: `
        <div class="flex flex-col gap-2">
          <p class="m-0">Новая версия станет доступна участникам проекта.</p>
          <div class="flex flex-wrap gap-2">
            <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1" data-sf-modal-close="modal-example">
              <span class="sf-button-text-container">Опубликовать</span>
            </button>
            <button type="button" class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1" data-sf-modal-close="modal-example">
              <span class="sf-button-text-container">Отмена</span>
            </button>
          </div>
        </div>
      `,
    },
    attrs: {},
  });

  modal.render();
  document.querySelector('#modal-example-open')?.addEventListener('click', () => modal.open());
};

window.addEventListener('Modal:ready', initializeModalExample);
initializeModalExample();
