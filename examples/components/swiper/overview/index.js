const initializeSwiperExample = () => {
  const root = document.querySelector('.swiper');
  if (!root || root.classList.contains('swiper-initialized')) return;
  if (typeof window.Swiper !== 'function') {
    window.setTimeout(initializeSwiperExample, 50);
    return;
  }
  new window.Swiper(root, {
    pagination: {
      el: root.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
};

initializeSwiperExample();
