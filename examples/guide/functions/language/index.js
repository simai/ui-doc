const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
// SF.language.use switches the page language; register corrects one word of sf-pager.
const start = async () => {
  const SF = await window.SF.ready;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  SF.language.onChange(() => log('SF.language.onChange', {current: SF.language.current(), known: SF.language.known('sf-pager')}));
  document.getElementById('language-ru').addEventListener('click', () => SF.language.use('ru'));
  document.getElementById('language-en').addEventListener('click', () => SF.language.use('en'));
  document.getElementById('language-word').addEventListener('click', () => SF.language.register('sf-pager', 'ru', {next: 'Вперёд'}));
};

start();
