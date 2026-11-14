const startModalSize = (Modal) => {
  const variants = {
    'default': ['Переименовать папку', '<p class="m-0">Окно по ширине своего содержимого.</p>', {}],
    'width': ['Новый договор', '<p class="m-0">Форма договора занимает 40rem: поля не растягиваются на весь экран.</p>', {width: '40rem'}],
    'fullscreen': ['Договор_2026.pdf', '<p class="m-0">Документ открыт на весь экран.</p>', {fullscreen: true}],
  };

  Object.entries(variants).forEach(([key, [title, html, options]]) => {
    const id = `modal-size-${key}`;
    if (Modal.registry.has(id)) return;

    new Modal({
      id,
      param: {
        container: '#modal-example-box',
        title,
        html,
        ...options,
      },
    });
  });
};

if (window.SF?.Loader) {
  window.SF.Loader.ready('Modal', startModalSize);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalSize), {once: true});
}
