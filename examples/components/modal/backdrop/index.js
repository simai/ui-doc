const startModalBackdrop = (Modal) => {
  const variants = {
    'default': ['Оплатить счёт № 418?', '<p class="m-0">С карты спишется 12 400 ₽.</p>', {size: 'question'}],
    'focus': ['Вход в кабинет', '<p class="m-0">Страница за окном затемнена и слегка размыта.</p>', {overlayPreset: 'focus'}],
    'none': ['Как заполнить ИНН', '<p class="m-0">ИНН организации — 10 цифр, ИП — 12 цифр.</p>', {overlay: false}],
  };

  Object.entries(variants).forEach(([key, [title, html, options]]) => {
    const id = `modal-backdrop-${key}`;
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
  window.SF.Loader.ready('Modal', startModalBackdrop);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalBackdrop), {once: true});
}
