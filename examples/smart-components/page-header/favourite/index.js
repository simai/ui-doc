// The star shows only what the "server" saved: the page cancels the toggle,
// waits for the answer and sets star itself. Here the server is a pause.
const saveFavourite = (on) => new Promise((resolve) => setTimeout(() => resolve(on), 500));

const initialize = async () => {
  await customElements.whenDefined('sf-header-page');
  const header = document.querySelector('#page-header-favourite');
  const state = document.querySelector('#page-header-favourite-state');
  if (!header || header.dataset.exampleReady === 'true') return;
  header.dataset.exampleReady = 'true';

  header.addEventListener('sf-header-page-toggle', async (event) => {
    event.preventDefault();
    state.textContent = 'Сохраняем…';
    const saved = await saveFavourite(event.detail.on);
    header.setAttribute('star', saved ? 'on' : 'off');
    state.textContent = saved ? 'Сервер сохранил: страница в избранном.' : 'Сервер сохранил: страница убрана из избранного.';
  });
};

initialize();
