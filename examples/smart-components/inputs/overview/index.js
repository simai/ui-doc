// The page checks the form on submit: a field that does not pass gets
// invalid and its message; once the person corrects it and leaves the field,
// the page takes the error off again.
const MESSAGES = {
  name: 'Напишите имя и фамилию',
  email: 'Введите адрес целиком, например ivanov@company.ru',
};

const check = (field) => {
  const input = field.getInputElement();
  const valid = input ? input.checkValidity() : true;
  field.toggleAttribute('invalid', !valid);
  field.setAttribute('error-message', valid ? '' : (MESSAGES[field.getAttribute('name')] ?? 'Проверьте значение'));
  return valid;
};

const initialize = async () => {
  await customElements.whenDefined('sf-input');
  const form = document.querySelector('#inputs-signup');
  if (!form || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';
  const fields = [...form.querySelectorAll('sf-input')];
  form.addEventListener('change', (event) => {
    const field = event.target.closest('sf-input');
    if (!field) return;
    docara.example.log('change', {name: field.getAttribute('name'), value: field.value});
    if (field.hasAttribute('invalid')) check(field);
  });
  // The example frame may not submit a form, so the button checks the fields
  // and logs what the form would send.
  form.querySelector('[data-example-send]').addEventListener('click', () => {
    const valid = fields.map(check).every(Boolean);
    docara.example.log('FormData', valid ? Object.fromEntries(new FormData(form)) : {valid: false});
    if (!valid) fields.find((field) => field.hasAttribute('invalid'))?.focus();
  });
};

initialize();
