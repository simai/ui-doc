const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const items = [
  {src: 'assets/place-01-16x9-label.svg', alt: 'Холмы и солнце над долиной', caption: 'План участка'},
  {src: 'assets/place-02-16x9-label.svg', alt: 'Город у подножия холмов', caption: 'Фасад'},
  {src: 'assets/place-03-16x9-label.svg', alt: 'Озеро между холмами', caption: 'Вид на озеро'},
];

const start = async () => {
  const SF = await sfReady();
  const state = document.querySelector('#gallery-viewer-state');
  document.querySelector('#gallery-viewer-files').addEventListener('click', async (event) => {
    const link = event.target.closest('a[data-index]');
    if (!link) return;
    event.preventDefault();
    // The viewer script comes with the gallery: ask the loader for it first.
    await SF.Loader.ensure(['sf-gallery']);
    const viewer = SF.Gallery.view(items, {start: Number(link.dataset.index), opener: link});
    state.textContent = `Открыт просмотр: ${viewer.current} из ${viewer.total}`;
  });
};

start();
