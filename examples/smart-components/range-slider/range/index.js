// `change` arrives once a handle is released or moved by a key, not while it
// is dragged, so the filter reloads once per decision.
const initializePriceRange = async () => {
  const slider = document.getElementById('price-range');
  const output = document.getElementById('price-range-output');
  if (!slider || !output || slider.dataset.exampleReady === 'true') return;
  slider.dataset.exampleReady = 'true';

  await customElements.whenDefined('sf-range-slider');
  slider.addEventListener('change', (event) => {
    const [from, to] = event.detail.values;
    output.value = `Цена: ${from}–${to} ₽`;
  });
};

initializePriceRange();
