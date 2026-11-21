const initialize = async () => {
  await customElements.whenDefined('sf-slider');
  const slider = document.querySelector('#slider-from-code');
  const counter = document.querySelector('#slider-from-code-counter');
  if (!slider || slider.dataset.exampleReady === 'true') return;
  slider.dataset.exampleReady = 'true';

  slider.addEventListener('change', (event) => {
    counter.textContent = `${event.detail.realIndex + 1} из 3`;
  });
  document.querySelector('#slider-from-code-next').addEventListener('click', () => slider.slideNext());
  document.querySelector('#slider-from-code-prev').addEventListener('click', () => slider.slidePrev());
};

initialize();
