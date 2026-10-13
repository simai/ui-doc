// Arabic is not shipped with the components: the page registers its words.
// Words it does not register fall back to English.
const registerArabic = () => {
  SF.language.registerAll('ar', {
    'sf-pagination': {
      pagesLabel: 'الصفحات:',
      totalLabel: 'المجموع:',
      previousLabel: 'الصفحة السابقة',
      nextLabel: 'الصفحة التالية',
      lastLabel: 'الأخيرة',
    },
    'sf-tag': {remove: 'إزالة'},
  });
};

const initializeLanguageSwitch = async () => {
  const root = document.querySelector('[data-language-demo]');
  if (!root || root.dataset.exampleReady === 'true') return;
  await Promise.all([customElements.whenDefined('sf-pagination'), customElements.whenDefined('sf-tag')]);
  root.dataset.exampleReady = 'true';
  registerArabic();

  const result = root.querySelector('[data-language-result]');
  const tag = root.querySelector('sf-tag');
  const report = () => {
    const label = tag.isConnected ? tag.closeLabel : '—';
    result.textContent = `Язык: ${SF.language.current()} · подпись кнопки удаления тега: «${label}»`;
  };

  // The switch chooses the components' language and sets the document's own
  // lang and dir: the explicit choice is stronger than the attribute, and
  // lang and dir serve assistive technology, :lang() styles and the layout.
  const switchLanguage = (code, direction) => {
    SF.language.use(code);
    document.documentElement.lang = code;
    document.documentElement.dir = direction;
    // Here the example sits in a documentation frame whose body carries its
    // own dir, so the example's root takes lang and dir too; on a page of
    // your own the document is enough.
    root.lang = code;
    root.dir = direction;
    root.querySelectorAll('[data-language]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === code));
    });
    requestAnimationFrame(report);
  };

  root.addEventListener('click', (event) => {
    const button = event.target.closest('[data-language]');
    if (button) switchLanguage(button.dataset.language, button.dataset.direction);
  });
  // A removed tag is the page's to remove: the component only asks.
  tag.addEventListener('close', () => tag.remove());
  switchLanguage('ru', 'ltr');
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLanguageSwitch, {once: true});
} else {
  initializeLanguageSwitch();
}
