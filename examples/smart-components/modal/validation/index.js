// The modal shows a copy of the slot form, so both listeners sit on document
// and take the field from the event: they reach whichever copy is shown.
// SF.Input.setState works on that copy like on any other field.
const HINT = 'Приглашение придёт на этот адрес';

const checkEmail = (input) => {
  let message = '';
  if (input.validity.valueMissing) message = 'Укажите почту';
  else if (input.validity.typeMismatch) message = 'Адрес должен быть вида name@example.com';

  SF.Input.setState(input, message
    ? { invalid: true, errorMessage: message }
    : { invalid: false, errorMessage: HINT });
  return !message;
};

// Leaving the field checks it once something is typed, or when it already
// shows an error, so a person who only opened the window is not scolded.
document.addEventListener('focusout', (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.closest('[data-modal-form="invite"]')) return;
  if (!input.value && !input.classList.contains('error')) return;
  checkEmail(input);
});

document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!form.matches('[data-modal-form="invite"]')) return;
  event.preventDefault();

  const input = form.elements.email;
  if (!checkEmail(input)) {
    input.focus();
    return;
  }

  document.querySelector('#smart-modal-validation-result').textContent =
    `Приглашение отправлено на ${input.value}`;
  form.reset();
  SF.Input.setState(input, { invalid: false, errorMessage: HINT });
  // close() returns focus to the button that opened the window.
  document.querySelector('sf-modal[modal-id="smart-modal-validation"]').close();
});
