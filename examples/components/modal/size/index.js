const startModalSize = (Modal) => {
  const variants = {
    'default': ['без width', {}],
    'width': ['width: \'40rem\'', {width: '40rem'}],
    'fullscreen': ['fullscreen: true', {fullscreen: true}],
  };

  Object.entries(variants).forEach(([key, [label, options]]) => {
    const id = `modal-size-${key}`;
    if (Modal.registry.has(id)) return;

    const modal = new Modal({
      id,
      param: {
        container: '#modal-example-box',
        title: label,
        html: '<p class="m-0">Ширину и высоту окна задают параметры.</p>',
        ...options,
      },
    });
    modal.template.querySelector('.sf-modal-close-button')?.setAttribute('aria-label', 'Закрыть окно');
  });
};

if (window.SF?.Loader) {
  window.SF.Loader.ready('Modal', startModalSize);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalSize), {once: true});
}
