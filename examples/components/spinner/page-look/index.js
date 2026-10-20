// The switch writes the look on html, as a site does once for all its pages.
// Every spinner without its own look follows at once, the ones inside the
// buttons too; the block with its own data-sf-spinner and the spinner with its
// own look keep theirs.
const initializeSpinnerPageLook = () => {
  const root = document.querySelector('[data-spinner-page-demo]');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  const result = root.querySelector('[data-spinner-page-result]');
  const use = (look) => {
    document.documentElement.setAttribute('data-sf-spinner', look);
    root.querySelectorAll('[data-look]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.look === look));
    });
    result.textContent = `<html data-sf-spinner="${look}">`;
  };
  root.addEventListener('click', (event) => {
    const button = event.target.closest('[data-look]');
    if (button) use(button.dataset.look);
  });
  use(document.documentElement.getAttribute('data-sf-spinner') || 'arc');
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSpinnerPageLook, {once: true});
} else {
  initializeSpinnerPageLook();
}
