const startModalPositions = (Modal) => {
  const variants = {
    'center': ['Удалить заказ № 418?', '<p class="m-0">Заказ и его история удалятся без возможности восстановления.</p>', {position: 'center', size: 'question'}],
    'top': ['Плановые работы', '<p class="m-0">16 ноября с 02:00 до 04:00 оплата картой недоступна.</p>', {position: 'top'}],
  };

  Object.entries(variants).forEach(([key, [title, html, options]]) => {
    const id = `modal-positions-${key}`;
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
  window.SF.Loader.ready('Modal', startModalPositions);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalPositions), {once: true});
}
