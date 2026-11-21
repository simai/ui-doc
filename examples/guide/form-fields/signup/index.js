const form = document.querySelector('#signup-form');
const messages = {
  name: 'Укажите имя',
  email: 'Укажите адрес целиком, например ivan@example.com',
  password: 'Пароль должен быть не короче восьми символов',
};

const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Inputs', () => {
  const fields = [...form.querySelectorAll('.sf-input input')];
  const hintOf = (input) => {
    const field = input.closest('.sf-input');
    return field.dataset.hint ?? field.querySelector('.sf-input-hint-text-wrap')?.textContent ?? '';
  };
  const hints = new Map(fields.map((input) => [input, hintOf(input)]));

  const check = (input) => {
    const valid = input.checkValidity();
    SF.Input.setState(input, valid
      ? {invalid: false, errorMessage: hints.get(input)}
      : {invalid: true, errorMessage: messages[input.name]});
    return valid;
  };

  fields.forEach((input) => input.addEventListener('blur', () => check(input)));

  form.addEventListener('submit', (event) => {
    const invalid = fields.filter((input) => !check(input));
    // In this example the form goes nowhere: it says what would be sent.
    event.preventDefault();
    const result = form.querySelector('#signup-result');
    if (invalid.length) {
      result.textContent = '';
      invalid[0].focus();
      return;
    }
    result.textContent = `Все поля заполнены верно: форма ушла бы на сервер для ${form.elements.email.value}.`;
  });
}));

// Only for this example: the documentation frame may not send forms, and a
// browser then does not even report the submit. The button's press asks the
// form for it, as the browser does on a site. On a site this part is not needed.
form.querySelector('[type="submit"]').addEventListener('click', (event) => {
  event.preventDefault();
  form.dispatchEvent(new Event('submit', {cancelable: true}));
});
