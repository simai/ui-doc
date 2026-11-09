// Two languages fit a segmented switch in the header: both are visible and
// one press changes the language. Here the switch relabels the header menu
// and sets lang on the example's root, which sits in a documentation frame.
const words = {
  ru: {catalog: 'Каталог', pricing: 'Цены', contacts: 'Контакты'},
  en: {catalog: 'Catalog', pricing: 'Pricing', contacts: 'Contacts'},
};

const initialize = async () => {
  const root = document.querySelector('[data-solution-language="segmented"]');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  await customElements.whenDefined('sf-segmented');
  const group = root.querySelector('sf-segmented');
  const switchLanguage = (code) => {
    SF.language.use(code);
    document.documentElement.lang = code;
    root.lang = code;
    root.querySelectorAll('[data-i18n]').forEach((link) => {
      link.textContent = words[code][link.dataset.i18n];
    });
    docara.example.log('язык', SF.language.current());
  };
  root.querySelectorAll('a').forEach((link) => link.addEventListener('click', (event) => event.preventDefault()));
  group.addEventListener('change', () => switchLanguage(group.value));
  switchLanguage(group.value || 'ru');
};

initialize();
