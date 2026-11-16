// A language file in the shape of the standard. Kazakh is not built into the
// components: the page registers the file's words. A word the file leaves
// out (the pagination's «of 12») is said in English, the fallback language.
const pack = {
  schema: 'simai.language-pack',
  schema_version: 1,
  delivery: 'docs-example',
  lang: 'kk',
  name: 'Қазақша',
  dir: 'ltr',
  status: 'draft',
  words: {
    'sf-empty-state': {
      'nothing-found-title': 'Ештеңе табылмады',
    },
    'sf-pagination': {
      'aria-label': 'Нәтиже беттері',
      'range': '{from}–{to} / {total}',
      'page-size-text': '{size} бойынша',
      'page-field-label': 'Бет:',
      'first-label': 'Басына',
      'previous-label': 'Алдыңғы бет',
      'next-label': 'Келесі бет',
      'last-label': 'Соңғы',
    },
  },
};

const initializeLanguageFile = async () => {
  const root = document.querySelector('[data-language-file-demo]');
  if (!root || root.dataset.exampleReady === 'true') return;
  await Promise.all(['sf-segmented', 'sf-empty-state', 'sf-pagination', 'sf-checkbox'].map((tag) => customElements.whenDefined(tag)));
  root.dataset.exampleReady = 'true';

  // One call registers the whole file: words by component, then by key.
  SF.language.registerAll(pack.lang, pack.words);

  const result = root.querySelector('[data-language-file-result]');
  const choice = root.querySelector('[data-language-choice]');
  const oneWord = root.querySelector('[data-one-word]');
  const report = () => {
    const names = ['Келесі бет', 'Әрі қарай', 'Next page', 'Следующая страница'];
    const next = [...root.querySelectorAll('sf-pagination [aria-label]')].find((node) => names.includes(node.getAttribute('aria-label')));
    result.textContent = `Язык: ${SF.language.current(root)} · кнопка следующей страницы называется «${next?.getAttribute('aria-label') ?? '—'}»`;
  };

  const switchLanguage = (code) => {
    SF.language.use(code);
    // In the documentation frame the example's root carries the language too;
    // on a page of your own <html lang> is enough.
    root.lang = code;
    requestAnimationFrame(() => requestAnimationFrame(report));
  };

  choice.addEventListener('change', () => switchLanguage(choice.value));
  // One word over the file: a later registration wins, null takes it back.
  oneWord.addEventListener('change', () => {
    SF.language.register('sf-pagination', 'kk', {'next-label': oneWord.checked ? 'Әрі қарай' : pack.words['sf-pagination']['next-label']});
    requestAnimationFrame(() => requestAnimationFrame(report));
  });
  switchLanguage(choice.value || 'kk');
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLanguageFile, {once: true});
} else {
  initializeLanguageFile();
}
