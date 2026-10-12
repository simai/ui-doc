document.querySelectorAll('[data-swiper-demo="overview"]').forEach((demo) => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const start = () => {
    if (typeof window.Swiper !== 'function') return window.setTimeout(start, 50);
    new window.Swiper(demo.querySelector('.swiper'), {
      keyboard: true,
      speed: reducedMotion ? 0 : 300,
      navigation: {
        prevEl: demo.querySelector('[data-swiper-prev]'),
        nextEl: demo.querySelector('[data-swiper-next]'),
      },
    });
  };
  start();
});
