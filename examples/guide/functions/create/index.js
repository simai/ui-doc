const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.createAsync builds a tag element with attributes and waits for its definition.
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const row = document.getElementById('create-row');
  document.getElementById('create-add').addEventListener('click', async () => {
    const number = row.children.length + 1;
    const tag = await SF.createAsync('tag', {text: `Метка ${number}`, dataset: {number}});
    row.append(tag);
    log('SF.createAsync', {tag: tag.localName, определён: Boolean(customElements.get(tag.localName)), 'data-number': tag.dataset.number});
  });
};

start();
