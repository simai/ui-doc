// `change` carries the picked date twice: as shown in the field
// (formattedValue) and as YYYY-MM-DD (value), the form a server takes.
const initializeMeetingDate = async () => {
  const picker = document.getElementById('meeting-date');
  const output = document.getElementById('meeting-date-output');
  if (!picker || !output || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';

  await customElements.whenDefined('sf-datepicker');
  picker.addEventListener('change', (event) => {
    if (event.target !== picker) return;
    const {value, formattedValue} = event.detail;
    output.value = value ? `Выбрано: ${formattedValue} (${value})` : 'Дата не выбрана';
  });
};

initializeMeetingDate();
