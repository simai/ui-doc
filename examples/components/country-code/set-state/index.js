const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('CountryCode', () => {
  const field = document.querySelector('input[name="phone"]');
  const state = document.querySelector('#country-code-state');

  document.querySelectorAll('[data-iso2]:not(.sf-country-code)').forEach((button) => {
    button.addEventListener('click', () => SF.CountryCode.setState(field, {iso2: button.dataset.iso2}));
  });

  // The new country changes the value and fires input and change.
  field.addEventListener('change', () => {
    state.textContent = `Значение: ${field.value}`;
  });
}));
