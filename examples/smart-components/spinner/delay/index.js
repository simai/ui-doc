// Each press puts two fresh spinners in place for three seconds: the default
// one waits a second before it shows, delay="0" shows at once.
document.querySelector('#spinner-delay-run')?.addEventListener('click', () => {
  document.querySelectorAll('#spinner-delay-places [data-place]').forEach((place) => {
    const spinner = document.createElement('sf-spinner');
    spinner.setAttribute('infinite', '');
    spinner.setAttribute('label-hidden', '');
    spinner.setAttribute('label', 'Загружаем');
    if (place.dataset.place === '0') spinner.setAttribute('delay', '0');
    place.replaceChildren(spinner);
    setTimeout(() => spinner.remove(), 3000);
  });
});
