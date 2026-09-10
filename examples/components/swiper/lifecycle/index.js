const initializeLifecycleSwiper = () => {
  const root = document.querySelector('.swiper');
  if (!root || root.classList.contains('swiper-initialized')) return;
  if (typeof window.Swiper !== 'function') {
    window.setTimeout(initializeLifecycleSwiper, 50);
    return;
  }

  const wrapper = root.querySelector('.swiper-wrapper');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const instance = new window.Swiper(root, {
    a11y: { enabled: true },
    keyboard: { enabled: true, onlyInViewport: true },
    ...(reducedMotion ? { speed: 0 } : {}),
    pagination: {
      el: root.querySelector('.swiper-pagination'),
      clickable: true,
      bulletElement: 'button',
    },
  });

  document.querySelector('[data-action="add"]')?.addEventListener('click', () => {
    const slide = document.createElement('article');
    slide.className = 'swiper-slide p-inline-1 p-bottom-2';
    const surface = document.createElement('div');
    surface.className = 'bg-surface-container color-on-surface border border-outline-variant p-3 radius-default';
    surface.textContent = `Слайд ${wrapper.children.length + 1}`;
    slide.append(surface);
    wrapper.append(slide);
    instance.update();
    instance.pagination?.render();
    instance.pagination?.update();
  });

  document.querySelector('[data-action="remove"]')?.addEventListener('click', () => {
    if (wrapper.children.length <= 1) return;
    wrapper.lastElementChild?.remove();
    instance.update();
    instance.pagination?.render();
    instance.pagination?.update();
  });
};

initializeLifecycleSwiper();
