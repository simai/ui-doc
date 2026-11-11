// The page sets the error and takes it off: after the person corrects the
// address and leaves the field, the check passes and invalid goes.
const initialize = async () => {
  await customElements.whenDefined('sf-input');
  const email = document.querySelector('sf-input[name="email"]');
  if (!email || email.dataset.exampleReady === 'true') return;
  email.dataset.exampleReady = 'true';
  email.addEventListener('change', () => {
    const valid = email.getInputElement().checkValidity();
    email.toggleAttribute('invalid', !valid);
    if (valid) email.removeAttribute('error-message');
    else email.setAttribute('error-message', 'Введите адрес целиком, например ivanov@example.com');
    docara.example.log('change', {value: email.value, invalid: !valid});
  });
};

initialize();
