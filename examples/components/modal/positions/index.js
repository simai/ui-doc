const startModalPositions = (Modal) => {
  const variants = {
    'center': ['position: \'center\'', {position: 'center'}],
    'left': ['position: \'left\'', {position: 'left'}],
    'right': ['position: \'right\'', {position: 'right'}],
    'inline-start': ['position: \'inline-start\'', {position: 'inline-start'}],
    'inline-end': ['position: \'inline-end\'', {position: 'inline-end'}],
    'top': ['position: \'top\'', {position: 'top'}],
    'bottom': ['position: \'bottom\'', {position: 'bottom'}],
  };

  Object.entries(variants).forEach(([key, [label, options]]) => {
    const id = `modal-positions-${key}`;
    if (Modal.registry.has(id)) return;

    const modal = new Modal({
      id,
      param: {
        container: '#modal-example-box',
        title: label,
        html: '<p class="m-0">Окно стоит у выбранного края экрана.</p>',
        ...options,
      },
    });
    modal.template.querySelector('.sf-modal-close-button')?.setAttribute('aria-label', 'Закрыть окно');
  });
};

if (window.SF?.Loader) {
  window.SF.Loader.ready('Modal', startModalPositions);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalPositions), {once: true});
}
