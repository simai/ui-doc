// The field is a form control: required blocks the send while it is empty,
// and the form carries the cleaned HTML under the field's name.
const form = document.querySelector('#rich-text-form');
const result = document.querySelector('#rich-text-form-result');
if (form && form.dataset.exampleReady !== 'true') {
  form.dataset.exampleReady = 'true';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const body = new FormData(form).get('body');
    if (result) result.textContent = `Отправлено: ${body}`;
  });
}
