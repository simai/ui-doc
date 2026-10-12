document.querySelectorAll('[data-pagination-count-demo]').forEach((pagination) => {
  pagination.addEventListener('sf-count-request', (event) => {
    setTimeout(() => {
      pagination.setState({counting: false, countKnown: true, total: 1234});
      if (event.detail.reason === 'last-page') pagination.goToPage(Math.ceil(1234 / 50));
    }, 800);
  });
});
