document.querySelectorAll('[data-scale-demo]').forEach((demo) => {
  const scale = demo.querySelector('.sf-progress-scale');

  demo.addEventListener('click', (event) => {
    const button = event.target.closest('[data-scale-step]');
    if (!button || !window.SF?.ProgressScale) return;

    const {value} = SF.ProgressScale.getState(scale);
    const next = Math.min(100, Math.max(0, value + Number(button.dataset.scaleStep)));
    SF.ProgressScale.setState(scale, {value: next, status: next === 100 ? 'success' : 'primary'});
  });
});
