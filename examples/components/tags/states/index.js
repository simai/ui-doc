document.querySelectorAll('.sf-tag--interactive[aria-pressed]:not(:disabled)').forEach((tag) => {
  tag.addEventListener('click', () => {
    const active = tag.getAttribute('aria-pressed') !== 'true';
    tag.setAttribute('aria-pressed', String(active));
    tag.classList.toggle('active', active);
  });
});
