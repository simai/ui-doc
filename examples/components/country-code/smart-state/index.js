const saved = [];
const savePhone = (phone) => saved.push(phone);

const initialize = async () => {
  await customElements.whenDefined('sf-input-country');
  const phone = document.querySelector('sf-input-country[name="phone"]');
  const state = document.querySelector('#country-smart-state');
  if (!phone || phone.dataset.exampleReady === 'true') return;
  phone.dataset.exampleReady = 'true';

  // A typed number, a chosen country and setState() all end with change.
  phone.addEventListener('change', () => {
    const {value, iso2, dialCode} = phone.state;
    savePhone({value, iso2, dialCode});
    state.textContent = `Сохранено: ${value} (${iso2}, ${dialCode})`;
  });
  document.querySelector('#country-smart-de').addEventListener('click', () => phone.setState({iso2: 'DE'}));
  document.querySelector('#country-smart-fr').addEventListener('click', () => phone.setState({iso2: 'FR'}));
};

initialize();
