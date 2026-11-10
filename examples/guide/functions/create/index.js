const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.createAsync builds a quantity field with attributes and waits for its definition.
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const row = document.getElementById('create-row');
  document.getElementById('create-add').addEventListener('click', async () => {
    const number = row.children.length + 1;
    const field = await SF.createAsync('input-quantity', {label: `Количество ${number}`, value: 1, min: 1, max: 10, dataset: {number}});
    row.append(field);
    log('SF.createAsync', {tag: field.localName, определён: Boolean(customElements.get(field.localName)), 'data-number': field.dataset.number});
  });
};

start();
