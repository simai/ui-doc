document.querySelectorAll('[data-swiper-demo="lifecycle"]').forEach((demo) => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const start = () => {
    if (typeof window.Swiper !== 'function') return window.setTimeout(start, 50);
    const root = demo.querySelector('.swiper');
    const wrapper = root.querySelector('.swiper-wrapper');
    const swiper = new window.Swiper(root, {
      keyboard: true,
      speed: reducedMotion ? 0 : 300,
      navigation: {
        prevEl: demo.querySelector('[data-swiper-prev]'),
        nextEl: demo.querySelector('[data-swiper-next]'),
      },
    });

    demo.querySelector('[data-swiper-add]').addEventListener('click', () => {
      const slide = wrapper.firstElementChild.cloneNode(true);
      const titles = ['Пять идей для маленькой кухни', 'Свет в спальне: три сценария', 'Рабочее место у окна', 'Хранение в прихожей'];
      slide.querySelector('div').textContent = titles[(wrapper.children.length - 2) % titles.length] ?? `Статья ${wrapper.children.length + 1}`;
      wrapper.append(slide);
      swiper.update();
      swiper.slideTo(wrapper.children.length - 1);
    });

    demo.querySelector('[data-swiper-remove]').addEventListener('click', () => {
      if (wrapper.children.length <= 1) return;
      wrapper.lastElementChild.remove();
      swiper.update();
    });
  };
  start();
});
