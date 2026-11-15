// navigation="visited": the steps behind the current one are buttons; the page moves forward itself.
document.querySelector('#steps-navigation-next')?.addEventListener('click', () => {
  const steps = document.querySelector('#steps-navigation');
  const current = Number(steps.getAttribute('current')) || 0;
  if (current < 4) steps.goToStep(current + 1);
});
