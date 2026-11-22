const initialize = async () => {
  await customElements.whenDefined('sf-gallery');
  const gallery = document.querySelector('#gallery-counter');
  const counter = document.querySelector('#gallery-counter-value');
  if (!gallery || gallery.dataset.exampleReady === 'true') return;
  gallery.dataset.exampleReady = 'true';

  // The counter follows every change: arrows, dots, the full-screen view, open().
  gallery.addEventListener('change', (event) => {
    counter.textContent = `${event.detail.current} из ${event.detail.total}`;
  });
  document.querySelector('#gallery-counter-open').addEventListener('click', () => gallery.open(3));
};

initialize();
