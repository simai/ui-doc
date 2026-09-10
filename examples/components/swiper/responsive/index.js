const initializeResponsiveSwiper = () => {
  const root = document.querySelector('.swiper');
  if (!root || root.classList.contains('swiper-initialized')) return;
  if (typeof window.Swiper !== 'function') {
    window.setTimeout(initializeResponsiveSwiper, 50);
    return;
  }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  new window.Swiper(root, {
    a11y: { enabled: true },
    keyboard: { enabled: true, onlyInViewport: true },
    ...(reducedMotion ? { speed: 0 } : {}),
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 2 },
      960: { slidesPerView: 3 },
    },
  });
};

initializeResponsiveSwiper();
