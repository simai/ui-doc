// The host runs the step's action: the wizard sends sf-wizard-submit, the
// host cancels it, marks the step running and writes the outcome. The first
// run fails so the example shows «Повторить»; the second one succeeds.
const initialize = async () => {
  await customElements.whenDefined('sf-wizard');
  const wizard = document.querySelector('#wizard-import');
  if (!wizard || wizard.dataset.exampleReady === 'true') return;
  wizard.dataset.exampleReady = 'true';
  let attempts = 0;
  wizard.addEventListener('sf-wizard-submit', (event) => {
    docara.example.log('sf-wizard-submit', {step: event.detail.step, action: event.detail.action});
    if (event.detail.action !== 'run' && event.detail.action !== 'retry') return;
    event.preventDefault();
    const step = wizard.querySelector('sf-wizard-step[name="run"]');
    step.setAttribute('state', 'running');
    step.setAttribute('message', 'Добавляем контакты…');
    attempts += 1;
    setTimeout(() => {
      if (attempts === 1) {
        step.setAttribute('message', 'Сервер не ответил. Попробуйте ещё раз.');
        step.setAttribute('state', 'error');
      } else {
        step.setAttribute('message', 'Добавлено 124 контакта.');
        step.setAttribute('state', 'done');
      }
    }, 1500);
  });
};

initialize();
