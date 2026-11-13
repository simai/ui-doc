// Each series takes its colour from its own field: a product colour pressed,
// or a colour from the picker, repaints that series' bars.
document.addEventListener('input', (event) => {
  const key = event.target.closest?.('[data-series-control]')?.dataset.seriesControl;
  if (!key) return;
  for (const bar of document.querySelectorAll(`[data-series="${key}"]`)) {
    bar.style.background = event.detail?.value || '';
  }
});
