const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.pageLanguage and SF.pageText for two blocks with their own lang.
const WORDS = {ru: {empty: 'Корзина пока пуста'}, en: {empty: 'Your cart is empty'}};
const draw = () => {
  for (const block of document.querySelectorAll('[data-page-text]')) {
    block.textContent = window.SF.pageText(WORDS, 'empty', block, 'project-cart');
    log('SF.pageText', {lang: window.SF.pageLanguage(block), text: block.textContent});
  }
};
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  draw();
  document.getElementById('page-text-register').addEventListener('click', () => {
    SF.language.register('project-cart', 'ru', {empty: 'В корзине ничего нет'});
    draw();
  });
};

start();
