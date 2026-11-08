// A collapsible group sends sf-menu-toggle with its id; a group without
// collapsible answers toggle(id) with the refusal "fixed". The links stay on
// the page: the example cancels sf-menu-navigate and logs it.
const initialize = async () => {
  await customElements.whenDefined('sf-menu');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.querySelectorAll('sf-menu').forEach((menu) => {
    menu.addEventListener('sf-menu-toggle', (event) => {
      docara.example.log('sf-menu-toggle', event.detail);
    });
    menu.addEventListener('sf-menu-navigate', (event) => {
      event.preventDefault();
      docara.example.log('sf-menu-navigate', {id: event.detail.id, href: event.detail.href});
    });
  });
  const menu = document.getElementById('groups-open');
  docara.example.log('toggle("site")', await menu.toggle('site'));
};

initialize();
