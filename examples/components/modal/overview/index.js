const startModalExample = (Modal) => {
  if (Modal.registry.has('modal-example')) return;

  const modal = new Modal({
    id: 'modal-example',
    param: {
      container: '#modal-example-box',
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
  });

  modal.template.querySelector('.sf-modal-close-button')?.setAttribute('aria-label', 'Закрыть окно');
};

if (window.SF?.Loader) {
  window.SF.Loader.ready('Modal', startModalExample);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalExample), {once: true});
}
