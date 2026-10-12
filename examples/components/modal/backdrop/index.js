const startModalBackdrop = (Modal) => {
  const variants = {
    'default': ['overlay: true', {}],
    'blur': ['blur: true', {blur: true}],
    'blur-large': ['blur: \'large\'', {blur: 'large'}],
    'none': ['overlay: false', {overlay: false}],
  };

  Object.entries(variants).forEach(([key, [label, options]]) => {
    const id = `modal-backdrop-${key}`;
    if (Modal.registry.has(id)) return;

    const modal = new Modal({
      id,
      param: {
        title: label,
        html: '<p class="m-0">Фон за окном отделяет его от страницы.</p>',
        ...options,
      },
    });
    modal.template.querySelector('.sf-modal-close-button')?.setAttribute('aria-label', 'Закрыть окно');
  });
};

if (window.SF?.Loader) {
  window.SF.Loader.ready('Modal', startModalBackdrop);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalBackdrop), {once: true});
}
