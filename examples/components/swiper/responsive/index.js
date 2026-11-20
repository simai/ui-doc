document.querySelectorAll('[data-swiper-demo="responsive"]').forEach((demo) => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const start = () => {
    if (typeof window.Swiper !== 'function') return window.setTimeout(start, 50);
    const swiper = new window.Swiper(demo.querySelector('.swiper'), {
      keyboard: true,
      speed: reducedMotion ? 0 : 300,
      spaceBetween: 12,
      slidesPerView: 1,
      breakpoints: {640: {slidesPerView: 2}, 960: {slidesPerView: 3}},
      navigation: {
        prevEl: demo.querySelector('[data-swiper-prev]'),
        nextEl: demo.querySelector('[data-swiper-next]'),
      },
    });
  };
  start();
});
