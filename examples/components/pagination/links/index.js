// The example stays in its frame: a press does what a site's page would show
// after the browser followed ?page=N, without leaving the example.
document.querySelectorAll('.sf-pagination').forEach((pagination) => {
  if (pagination.dataset.exampleReady === 'true') return;
  pagination.dataset.exampleReady = 'true';
  const numbers = [...pagination.querySelectorAll('.sf-page-number[aria-label^="Страница"]')];
  const previous = pagination.querySelector('.sf-page-number[aria-label="Предыдущая страница"]');
  const next = pagination.querySelector('.sf-page-number[aria-label="Следующая страница"]');
  const last = numbers.length;

  const show = (page) => {
    numbers.forEach((link, index) => {
      const current = index + 1 === page;
      link.classList.toggle('selected', current);
      if (current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    previous.setAttribute('href', `?page=${Math.max(1, page - 1)}`);
    next.setAttribute('href', `?page=${Math.min(last, page + 1)}`);
  };

  pagination.addEventListener('click', (event) => {
    const link = event.target.closest('a.sf-page-number');
    if (!link) return;
    event.preventDefault();
    const page = Number(new URLSearchParams(link.getAttribute('href').slice(1)).get('page'));
    if (page >= 1 && page <= last) show(page);
  });
});
