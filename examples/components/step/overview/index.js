document.querySelectorAll('[data-stepper]').forEach((stepper) => {
  const items = [...stepper.querySelectorAll('[data-step-item]')];
  const errorStep = Number(stepper.dataset.errorStep ?? -1);

  const selectStep = (selectedIndex) => {
    items.forEach((item, index) => {
      item.classList.remove(
        'selected',
        'sf-step--stage-completed',
        'sf-step--stage-default',
        'sf-step--stage-error',
      );
      item.removeAttribute('aria-current');

      if (index < selectedIndex) {
        item.classList.add('sf-step--stage-completed');
      } else if (index === selectedIndex) {
        item.classList.add(errorStep === index ? 'sf-step--stage-error' : 'sf-step--stage-default', 'selected');
        item.setAttribute('aria-current', 'step');
      } else {
        item.classList.add(errorStep === index ? 'sf-step--stage-error' : 'sf-step--stage-default');
      }
    });
  };

  items.forEach((item, index) => {
    if (item.getAttribute('aria-disabled') === 'true') return;
    item.addEventListener('click', () => selectStep(index));
    item.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      selectStep(index);
    });
  });

  const initial = Math.max(0, items.findIndex((item) => item.classList.contains('selected')));
  selectStep(initial);
});
