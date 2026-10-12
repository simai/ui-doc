const startModalPositions = (Modal) => {
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

if (window.SF?.Loader) {
  window.SF.Loader.ready('Modal', startModalPositions);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalPositions), { once: true });
}
