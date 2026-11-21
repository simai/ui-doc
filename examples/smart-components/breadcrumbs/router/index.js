// A tiny single-page router: items with value and no href are buttons, and
// the page itself shows the section.
const sections = {home: 'Главная', catalog: 'Каталог', light: 'Освещение'};
const router = {
  navigate(value) {
    document.querySelector('#breadcrumbs-router-title').textContent = sections[value] ?? value;
    document.querySelector('#breadcrumbs-router-text').textContent = `Раздел «${sections[value] ?? value}» открыт роутером страницы, адрес документа не менялся.`;
  },
};

const initialize = async () => {
  await customElements.whenDefined('sf-breadcrumbs');
  const crumbs = document.querySelector('#breadcrumbs-router');
  if (!crumbs || crumbs.dataset.exampleReady === 'true') return;
  crumbs.dataset.exampleReady = 'true';
  crumbs.onItemClick((item) => {
    if (item.href || item.ellipsis) return;
    router.navigate(item.value);
  });
};

initialize();
