// What a page could send to analytics: the sections read, in order.
const read = [];
const analytics = {track: (name, id) => read.push(id)};

const initialize = async () => {
  await customElements.whenDefined('sf-contents');
  const contents = document.querySelector('#contents-change');
  const state = document.querySelector('#contents-change-state');
  if (!contents || contents.dataset.exampleReady === 'true') return;
  contents.dataset.exampleReady = 'true';

  contents.addEventListener('sf-contents-change', ({detail}) => {
    analytics.track('section', detail.id);
    state.textContent = `Прочитанные разделы: ${read.map((id) => document.getElementById(id)?.textContent).join(' → ')}`;
  });
};

initialize();
