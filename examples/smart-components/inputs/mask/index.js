// The value keeps the mask's shape: +7 (900) 123-45-67.
const initialize = async () => {
  await customElements.whenDefined('sf-input');
  const phone = document.querySelector('sf-input[name="phone"]');
  if (!phone || phone.dataset.exampleReady === 'true') return;
  phone.dataset.exampleReady = 'true';
  phone.addEventListener('change', () => docara.example.log('change', {value: phone.value}));
};

initialize();
