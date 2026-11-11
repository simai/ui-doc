// The page checks the request on submit and takes an error off once the
// person corrects the text and leaves the field.
const MESSAGES = {
  subject: 'Напишите тему: по ней мы найдём обращение',
  details: 'Опишите, что случилось, хотя бы в 20 символах',
};

const check = (field) => {
  const native = field.querySelector('input, textarea');
  const valid = native ? native.checkValidity() : true;
  field.toggleAttribute('invalid', !valid);
  field.setAttribute('error-message', valid ? '' : MESSAGES[field.getAttribute('name')]);
  return valid;
};

const initialize = async () => {
  await Promise.all([customElements.whenDefined('sf-input'), customElements.whenDefined('sf-input-textarea')]);
  const form = document.querySelector('#textarea-support');
  if (!form || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';
  const fields = [...form.querySelectorAll('sf-input, sf-input-textarea')];
  form.addEventListener('change', (event) => {
    const field = event.target.closest('sf-input, sf-input-textarea');
    if (!field) return;
    docara.example.log('change', {name: field.getAttribute('name'), length: field.value.length});
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
