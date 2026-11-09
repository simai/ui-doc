// «Показать ещё» asks sf-list-timeline-load-more; the host sets loading,
// appends the next page to items and clears has-more when there is none.
// A title link asks sf-list-timeline-navigate first; here it is cancelled.
const OLDER = [
  {id: 'php', time: '2026-10-20T15:30:00+03:00', icon: 'tune', title: 'PHP 8.3 включён для demo.test', actor: 'Анна'},
  {id: 'server', time: '2026-10-19T09:00:00+03:00', status: 'success', title: 'Сервер подключён к панели', actor: 'Установщик'},
];

const initialize = async () => {
  await customElements.whenDefined('sf-list-timeline');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const timeline = document.querySelector('#timeline-overview');
  timeline.addEventListener('sf-list-timeline-navigate', (event) => {
    event.preventDefault();
    docara.example.log('sf-list-timeline-navigate', event.detail);
  });
  timeline.addEventListener('sf-list-timeline-load-more', (event) => {
    docara.example.log('sf-list-timeline-load-more', event.detail);
    timeline.loading = true;
    setTimeout(() => {
      timeline.items = [...timeline.items, ...OLDER];
      timeline.loading = false;
      timeline.hasMore = false;
    }, 800);
  });
};

initialize();
