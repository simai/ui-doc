// In datetime mode the value is yyyy-mm-ddThh:mm; change also carries the
// mode and the time alone.
const initializeDatetime = async () => {
  const picker = document.getElementById('datepicker-datetime');
  const output = document.getElementById('datepicker-datetime-output');
  if (!picker || !output || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';

  await customElements.whenDefined('sf-input-date');
  picker.addEventListener('change', (event) => {
    if (event.target !== picker) return;
    const {value, time} = event.detail;
    output.value = value ? `Значение: ${value} (время ${time || 'не выбрано'})` : 'Значение не выбрано';
  });
};

initializeDatetime();
