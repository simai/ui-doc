const initializeSwiperExample = () => {
  const root = document.querySelector('.swiper');
  if (!root || root.classList.contains('swiper-initialized')) return;
  if (typeof window.Swiper !== 'function') {
    window.setTimeout(initializeSwiperExample, 50);
    return;
  }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  new window.Swiper(root, {
    a11y: { enabled: true },
    keyboard: { enabled: true, onlyInViewport: true },
    ...(reducedMotion ? { speed: 0 } : {}),
    pagination: {
      el: root.querySelector('.swiper-pagination'),
      clickable: true,
      bulletElement: 'button',
    },
  });
};

initializeSwiperExample();
