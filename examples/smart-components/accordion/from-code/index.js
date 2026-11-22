// On a site the open section goes into the address with
// history.replaceState(null, '', `#${id}`). Only for this example: the
// documentation frame has no address of its own (about:srcdoc), the browser
// refuses replaceState there, so the line under the accordion shows the
// address instead.
const showAddress = (id, source) => {
  document.querySelector('#accordion-from-code-state').textContent = `Адрес секции: #${id} (${source})`;
};

const initialize = async () => {
  await customElements.whenDefined('sf-accordion');
  const faq = document.querySelector('#accordion-from-code');
  if (!faq || faq.dataset.exampleReady === 'true') return;
  faq.dataset.exampleReady = 'true';

  faq.addEventListener('sf-accordion-toggle', (event) => {
    if (event.detail.open) showAddress(event.detail.id, event.detail.source);
  });
  document.querySelector('#accordion-open-price').addEventListener('click', () => faq.open('price'));
  document.querySelector('#accordion-toggle-stock').addEventListener('click', () => faq.toggle('stock'));
};

initialize();
