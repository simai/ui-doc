const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

// The example frame has no browser storage: the choice lasts until the
// page is reloaded. On a site it stays for every page.
const show = () => {
  const now = SF.displaySettings.current();
  document.getElementById('display-current').textContent = `textScale ${now.textScale}, scheme «${now.scheme}», textSpacing ${now.textSpacing}`;
};

const start = async () => {
  await sfReady();
  SF.displaySettings.subscribe((settings) => {
    log('subscribe', {textScale: settings.textScale, scheme: settings.scheme, textSpacing: settings.textSpacing});
    show();
  });
  show();
  const press = (id, run) => document.getElementById(id).addEventListener('click', () => { run(); show(); });
  press('display-large', () => SF.displaySettings.write({textScale: 150}));
  press('display-contrast', () => SF.displaySettings.write({scheme: 'black-on-white'}));
  press('display-wide', () => SF.displaySettings.write({textSpacing: 'wide'}));
  press('display-reset', () => SF.displaySettings.reset());
};

start();

// Only for this example: the documentation frame copies the page's root font
// size onto <html> inline, and an inline size beats the core rule that scales
// the text. While a text scale is chosen the frame lets the core rule work;
// on a site this part is not needed.
let docaraRootSize = document.documentElement.style.fontSize;
const letTextScaleWork = () => {
  const root = document.documentElement;
  const scaled = root.hasAttribute('data-sf-text-scale');
  if (!scaled && root.style.fontSize) docaraRootSize = root.style.fontSize;
  if (scaled && root.style.fontSize) root.style.removeProperty('font-size');
  else if (!scaled && docaraRootSize && root.style.fontSize !== docaraRootSize) root.style.fontSize = docaraRootSize;
};
new MutationObserver(letTextScaleWork).observe(document.documentElement, {attributes: true, attributeFilter: ['data-sf-text-scale', 'style']});
