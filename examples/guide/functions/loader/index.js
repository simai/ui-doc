const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.Loader.ensure: an element the markup does not have, and a tag with no rule.
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.getElementById('loader-ensure').addEventListener('click', async () => {
    const answer = await SF.Loader.ensure(['input-quantity', 'project-unknown'], {timeout: 2000});
    log('SF.Loader.ensure', answer);
    const slot = document.getElementById('loader-slot');
    if (answer.ready.includes('sf-input-quantity') && !slot.children.length) {
      slot.append(SF.create('input-quantity', {label: 'Количество', value: 1, min: 1, max: 10}));
    }
  });
};

start();
