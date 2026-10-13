// `change` names the picked item; the element itself answers what is selected
// now: `value` is the machine value, `triggerText` the label the field shows.
// Only the dropdown's own event is read: a listener on an ancestor would
// also hear native events from fields inside it.
const initializeViewPicker = async () => {
  const picker = document.getElementById('view-picker');
  const output = document.getElementById('view-picker-output');
  if (!picker || !output || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';

  await customElements.whenDefined('sf-dropdown');
  picker.addEventListener('change', (event) => {
    if (event.target !== picker) return;
    output.value = picker.value
      ? `Представление: ${picker.triggerText} (${picker.value})`
      : 'Представление не выбрано';
  });
};

initializeViewPicker();
