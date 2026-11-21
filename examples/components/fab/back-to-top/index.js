// Only for this example: the documentation frame cannot scroll as a page,
// so the block with the report plays the page. The window's scroll position,
// its scrolling and its scroll event come from the block. On a site this
// part is not needed: Fab follows the page itself.
const page = document.querySelector('#fab-example-page');
Object.defineProperty(window, 'scrollY', {get: () => page.scrollTop});
window.scrollTo = (options) => page.scrollTo(options);
page.addEventListener('scroll', () => window.dispatchEvent(new Event('scroll')));

// The button itself: shown after 200 px of scrolling, back to the top on press.
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Fab', (Fab) => {
  if (document.querySelector('.sf-fab')) return;
  const fab = new Fab({attrs: {'aria-label': 'Наверх'}});
  document.body.append(fab.render());
}));
