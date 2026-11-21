const root = document.querySelector('.sf-slider');
const result = document.querySelector('#slider-change-result');

// bind() returns null until the Swiper engine is loaded: ask again until
// the slider is ready (the component binds it itself meanwhile).
const whenBound = () => new Promise((resolve) => {
  const attempt = () => {
    const swiper = window.SF?.Slider?.bind(root);
    if (swiper) resolve(swiper); else setTimeout(attempt, 100);
  };
  attempt();
});

whenBound().then((swiper) => {
  const slides = root.querySelectorAll('.swiper-slide');
  swiper.on('slideChange', () => {
    const image = slides[swiper.activeIndex]?.querySelector('img');
    result.textContent = `Слайд ${swiper.realIndex + 1} из ${slides.length}: ${image?.alt ?? ''}`;
  });
});
