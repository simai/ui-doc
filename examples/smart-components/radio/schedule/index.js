const field = document.querySelector('#radio-schedule-field');
const showSchedule = (visible) => { field.hidden = !visible; };

// The person's choice sends change, heard on the fieldset.
document.querySelector('#radio-schedule-group').addEventListener('change', (event) => {
  showSchedule(event.target.value === 'later');
});

// setChecked() sends no change, so the page updates its own field.
document.querySelector('#radio-schedule-draft').addEventListener('click', async () => {
  await customElements.whenDefined('sf-radio');
  document.querySelector('sf-radio[value="draft"]').setChecked(true);
  showSchedule(false);
});
