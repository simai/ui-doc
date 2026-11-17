// The cards lead to real docs pages; in the example a press stays here. The
// request is cancelled, as a page with its own router cancels it.
document.querySelectorAll('sf-pager').forEach((pager) => {
  if (pager.dataset.exampleReady === 'true') return;
  pager.dataset.exampleReady = 'true';
  pager.addEventListener('sf-pager-navigate', (event) => event.preventDefault());
});
