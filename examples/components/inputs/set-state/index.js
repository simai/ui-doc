const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Inputs', () => {
  const field = document.querySelector('input[name="email"]');
  const hint = 'На этот адрес придёт приглашение';

  // The page checks the value; the component only shows the state.
  const check = () => {
    const personal = /@(gmail|mail|yandex)\./.test(field.value);
    SF.Input.setState(field, personal
      ? {invalid: true, errorMessage: 'Укажите рабочую почту'}
      : {invalid: false, errorMessage: hint});
  };

  document.querySelector('#inputs-check').addEventListener('click', check);
  // value from code: the field gets the input event, like after typing.
  document.querySelector('#inputs-fix').addEventListener('click', () => {
    SF.Input.setState(field, {value: 'ivan@company.ru'});
    check();
  });
}));
