const initialize = async () => {
  await customElements.whenDefined('sf-progress-scale');
  const scale = document.querySelector('#progress-scale-steps');
  const state = document.querySelector('#progress-scale-steps-state');
  if (!scale || scale.dataset.exampleReady === 'true') return;
  scale.dataset.exampleReady = 'true';
  let completedSteps = 1;

  const show = () => {
    scale.setAttribute('value', String(completedSteps * 20));
    state.textContent = completedSteps === 5 ? 'Профиль заполнен' : `Выполнено шагов: ${completedSteps} из 5`;
  };
  document.querySelector('#progress-scale-steps-next').addEventListener('click', () => {
    completedSteps = Math.min(5, completedSteps + 1);
    show();
  });
  document.querySelector('#progress-scale-steps-reset').addEventListener('click', () => {
    completedSteps = 0;
    show();
  });
};

initialize();
