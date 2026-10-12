document.querySelectorAll('[data-progress-demo]').forEach((demo) => {
  const bar = demo.querySelector('.sf-progress-bar');

  demo.addEventListener('click', (event) => {
    const button = event.target.closest('[data-progress-step]');
    if (!button || !window.SF?.ProgressBar) return;

    const {value} = SF.ProgressBar.getState(bar);
    const next = Math.min(100, Math.max(0, value + Number(button.dataset.progressStep)));
    SF.ProgressBar.setState(bar, {value: next, status: next === 100 ? 'success' : 'primary'});
  });
});
