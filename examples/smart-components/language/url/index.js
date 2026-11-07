// A site with an address per language. The first picker has the pattern
// href="/{code}/", so a choice would open /en/; the second keeps the rest of
// the path, as a Docara site does. Both cancel change here so the example's
// frame stays where it is, and say where the site would go.

const PAGE = '/ru/docs/install/';

const initialize = async () => {
  await customElements.whenDefined('sf-language');
  const pattern = document.querySelector('#language-url');
  const path = document.querySelector('#language-url-path');
  const status = document.querySelector('#language-url-status');
  if (!pattern || !path || !status || pattern.dataset.exampleReady === 'true') return;
  pattern.dataset.exampleReady = 'true';
  pattern.addEventListener('change', (event) => {
    event.preventDefault();
    status.textContent = `Сайт перешёл бы на ${event.detail.href}`;
  });
  path.addEventListener('change', (event) => {
    event.preventDefault();
    const rest = PAGE.replace(/^\/[^/]+\//u, '/');
    status.textContent = `Со страницы ${PAGE} сайт перешёл бы на /${event.detail.value}${rest}`;
  });
};

initialize();
