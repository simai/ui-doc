// Two languages fit a segmented switch in the header. The switch chooses the
// components' language and sets lang on the document (and here on the
// example's root, which sits in a documentation frame).
const initialize = async () => {
  const root = document.querySelector('[data-solution-language="segmented"]');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  await Promise.all(['sf-button-group', 'sf-pagination'].map((tag) => customElements.whenDefined(tag)));
  const group = root.querySelector('sf-button-group');
  const pagination = root.querySelector('sf-pagination');
  const labels = {ru: 'Страницы заказов', en: 'Order pages'};
  const switchLanguage = (code) => {
    SF.language.use(code);
    document.documentElement.lang = code;
    root.lang = code;
    // A label passed as an attribute is stronger than the dictionary.
    pagination.setAttribute('aria-label', labels[code]);
    docara.example.log('язык', SF.language.current());
  };
  group.addEventListener('change', () => switchLanguage(group.value));
  switchLanguage(group.value || 'ru');
};

initialize();
