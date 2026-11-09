// On a settings page the language is a form field: a dropdown with search
// holds any number of languages. The page saves the choice and applies it.
const initialize = async () => {
  const root = document.querySelector('[data-solution-language="dropdown"]');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  await customElements.whenDefined('sf-dropdown');
  const picker = root.querySelector('sf-dropdown');
  const result = root.querySelector('[data-language-result]');
  picker.addEventListener('change', (event) => {
    if (event.target !== picker || !picker.value) return;
    SF.language.use(picker.value);
    root.lang = picker.value;
    result.textContent = `Язык страницы: ${SF.language.current()} (${picker.triggerText})`;
  });
};

initialize();
