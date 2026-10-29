// One interlocutor is a name, not a choice: the button is inert.
const initialize = async () => {
  await customElements.whenDefined('sf-chat-interlocutor');
  const picker = document.querySelector('#chat-interlocutor-single');
  if (!picker || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';
  picker.options = [{id: 'personal', title: 'Мой помощник'}];
};

initialize();
