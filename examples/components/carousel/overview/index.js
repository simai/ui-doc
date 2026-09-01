const initializeCarouselExample = () => {
  const root = document.querySelector('.sf-carousel .swiper');
  if (!root || root.classList.contains('swiper-initialized')) return;
  if (typeof window.Swiper !== 'function') {
    window.setTimeout(initializeCarouselExample, 50);
    return;
  }
  new window.Swiper(root, {
    navigation: {
      nextEl: root.querySelector('.sf-carousel-switch--right'),
      prevEl: root.querySelector('.sf-carousel-switch--left'),
    },
    pagination: {
      el: document.querySelector('.sf-carousel-pagination'),
    },
  });
};

initializeCarouselExample();
