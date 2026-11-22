const initialize = async () => {
  await customElements.whenDefined('sf-tabs');
  const tabs = document.querySelector('#tabs-go-to');
  const state = document.querySelector('#tabs-go-to-state');
  if (!tabs || tabs.dataset.exampleReady === 'true') return;
  tabs.dataset.exampleReady = 'true';

  // A person's switch: the handler gets the number of the new tab.
  tabs.onTabChange((current) => { state.textContent = `Человек открыл вкладку ${current}`; });
  // goTo() answers with an outcome and sends no event.
  document.querySelector('#tabs-go-to-history').addEventListener('click', () => {
    const {outcome, reason} = tabs.goTo(2);
    state.textContent = `goTo(2): ${outcome}${reason ? `, ${reason}` : ''}`;
  });
};

initialize();
