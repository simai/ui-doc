document.querySelector('#spinner-delay-run').addEventListener('click', () => {
  document.querySelectorAll('[data-place]').forEach((place) => {
    place.innerHTML = `<div class="sf-loader-container sf-loader--size-2" data-infinite="true" data-label="" data-delay="${place.dataset.place}"></div>`;
  });
});
