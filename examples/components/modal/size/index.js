const startModalSize = (Modal) => {
  const variants = {
    'question': ['Удалить папку «Акты»?', '<p class="m-0">Окно вопроса — 28rem.</p>', {size: 'question'}],
    'form': ['Переименовать папку', '<p class="m-0">Окно по умолчанию — форма, 36rem: короткая задача, до пяти–семи полей.</p>', {}],
    'wide': ['Сравнение тарифов', '<p class="m-0">Широкое окно — 48rem: чтение, таблица, сравнение.</p>', {size: 'wide'}],
    'full': ['Договор_2026.pdf', '<p class="m-0">Документ открыт на весь экран.</p>', {size: 'full'}],
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
