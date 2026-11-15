// Each press adds a portion; the page loads it and the element counts the portions.
document.querySelectorAll('[data-pagination-more-demo]').forEach((pagination) => {
  pagination.addEventListener('sf-pagination-load-more', () => {
    pagination.setAttribute('show-more-busy', '');
    setTimeout(() => pagination.removeAttribute('show-more-busy'), 600);
  });
});
