// The form sends the cleaned HTML under the field's name; change arrives
// when the focus leaves the whole field.
const initialize = async () => {
  await customElements.whenDefined('sf-input-rich');
  const form = document.querySelector('#rich-text-news');
  if (!form || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';
  const body = form.querySelector('sf-input-rich[name="body"]');
  body.addEventListener('change', () => docara.example.log('change', {value: body.value}));
  // The example frame may not submit a form, so the button checks the fields
  // and logs what the form would send.
  form.querySelector('[data-example-send]').addEventListener('click', () => {
    docara.example.log('FormData', Object.fromEntries(new FormData(form)));
  });
};

initialize();
