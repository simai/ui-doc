const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Textarea', () => {
  const field = document.querySelector('textarea[name="comment"]');
  const result = document.querySelector('#textarea-result');
  const hint = 'Что важно знать курьеру';

  // The page checks the text; the component shows the error in its hint.
  const check = () => {
    const short = field.value.trim().length < 10;
    SF.Textarea.setState(field, short
      ? {error: true, errorMessage: 'Добавьте не менее десяти символов'}
      : {error: false, errorMessage: hint});
    return !short;
  };

  document.querySelector('#textarea-check').addEventListener('click', () => {
    result.textContent = check() ? 'Комментарий принят.' : '';
  });
  field.addEventListener('input', () => {
    if (field.closest('.sf-textarea').classList.contains('error')) check();
  });
}));
