// The form receives name=value of the chosen option; a disabled group is left
// out, and reset returns the value the group was written with.
const initialize = async () => {
  await customElements.whenDefined('sf-segmented');
  const form = document.querySelector('#button-group-form');
  if (!form || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';
  // The example frame is sandboxed without allow-forms, so the browser never
  // fires submit here: the example reads the press of the submit button and
  // prints what the form would send. On a page, listen for submit itself.
  form.addEventListener('click', (event) => {
    if (!event.target.closest('button[type="submit"]')) return;
    event.preventDefault();
    const data = [...new FormData(form)].map(([key, value]) => `${key}=${value}`);
    docara.example.log('submit', data.join(', ') || 'пусто');
  });
  form.addEventListener('reset', () => {
    // The group restores its value in its own reset handler: read after it.
    setTimeout(() => {
      docara.example.log('reset', `period=${form.querySelector('[name="period"]').value}`);
    });
  });
};

initialize();
