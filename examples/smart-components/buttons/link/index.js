// With href the button draws an <a>: the example keeps the frame in place
// and prints where each link would go; the ftp: one stayed a <button>.
const initialize = async () => {
  await customElements.whenDefined('sf-button');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('click', (event) => {
    const host = event.target.closest('sf-button');
    if (!host) return;
    const link = event.target.closest('a[href]');
    if (link) {
      event.preventDefault();
      docara.example.log('<a>', link.getAttribute('href'));
    } else {
      docara.example.log('<button>', 'не ссылка: схема ftp: не подходит');
    }
  });
};

initialize();
