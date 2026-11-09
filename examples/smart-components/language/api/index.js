// select({value}) chooses as a press does (reason "api") and answers what it
// did: applied, or refused with unknown, unchanged, disabled or prevented.
// toggleMenu() opens the menu of the menu and search looks.

const initialize = async () => {
  await customElements.whenDefined('sf-language');
  const picker = document.querySelector('#language-api');
  if (!picker || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';
  for (const button of document.querySelectorAll('sf-button[data-language]')) {
    button.addEventListener('click', () => {
      const result = picker.select({value: button.dataset.language});
      docara.example.log(`select({value: "${button.dataset.language}"})`, result);
    });
  }
  document.querySelector('sf-button[data-toggle]')?.addEventListener('click', (event) => {
    event.stopPropagation();
    picker.toggleMenu();
  });
};

initialize();
