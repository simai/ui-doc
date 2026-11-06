// Many languages go into a menu behind one button. Each entry is written in
// its own language (`lang`), and the chosen one carries the radio mark.
const languages = [
  {code: 'ru', name: 'Русский', dir: 'ltr'},
  {code: 'en', name: 'English', dir: 'ltr'},
  {code: 'ar', name: 'العربية', dir: 'rtl'},
];

const initialize = async () => {
  const root = document.querySelector('[data-solution-language="menu"]');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  await Promise.all(['sf-menu-context', 'sf-button-icon', 'sf-pagination'].map((tag) => customElements.whenDefined(tag)));
  // Arabic is not shipped with the components: the page registers its words.
  SF.language.registerAll('ar', {
    'sf-pagination': {pagesLabel: 'الصفحات:', totalLabel: 'المجموع:', previousLabel: 'الصفحة السابقة', nextLabel: 'الصفحة التالية', lastLabel: 'الأخيرة'},
  });
  const anchor = root.querySelector('[data-language-anchor]');
  const menu = root.querySelector('sf-menu-context');
  const pagination = root.querySelector('sf-pagination');
  const result = root.querySelector('[data-language-result]');
  const labels = {ru: 'Страницы заказов', en: 'Order pages', ar: 'صفحات الطلبات'};
  let current = 'ru';

  const switchLanguage = (code) => {
    const language = languages.find((item) => item.code === code);
    current = code;
    SF.language.use(code);
    document.documentElement.lang = code;
    document.documentElement.dir = language.dir;
    root.lang = code;
    root.dir = language.dir;
    pagination.setAttribute('aria-label', labels[code]);
    anchor.setAttribute('aria-label', `Язык: ${language.name}`);
    menu.entries = languages.map((item) => ({id: item.code, text: item.name, lang: item.code, kind: 'radio', checked: item.code === code}));
    result.textContent = `Язык страницы: ${SF.language.current()}`;
  };

  anchor.addEventListener('click', () => menu.toggleFor(anchor));
  menu.addEventListener('sf-menu-context-select', (event) => {
    if (event.detail.id !== current) switchLanguage(event.detail.id);
  });
  switchLanguage('ru');
};

initialize();
