// The example stays in its frame: a press does what a site's page would show
// after the browser followed ?page=N, without leaving the example. An arrow
// at the edge has no address and is aria-disabled, as <sf-pagination> draws it.
document.querySelectorAll('.sf-pagination').forEach((pagination) => {
  if (pagination.dataset.exampleReady === 'true') return;
  pagination.dataset.exampleReady = 'true';
  const numbers = [...pagination.querySelectorAll('.sf-page-number[aria-label^="Страница"]')];
  const previous = pagination.querySelector('[rel="prev"]');
  const next = pagination.querySelector('[rel="next"]');
  const last = numbers.length;

  const point = (arrow, page, off) => {
    if (off) {
      arrow.removeAttribute('href');
      arrow.setAttribute('aria-disabled', 'true');
    } else {
      arrow.setAttribute('href', `?page=${page}`);
      arrow.removeAttribute('aria-disabled');
    }
  };

  const show = (page) => {
    numbers.forEach((link, index) => {
      const current = index + 1 === page;
      link.classList.toggle('selected', current);
      if (current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    point(previous, page - 1, page <= 1);
    point(next, page + 1, page >= last);
  };

  pagination.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    event.preventDefault();
    const page = Number(new URLSearchParams(link.getAttribute('href').slice(1)).get('page'));
    if (page >= 1 && page <= last) show(page);
  });
});
