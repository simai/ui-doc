// The server lists the interlocutors; the element only shows them and reports
// the choice. The host starts the conversation and then writes `value`.
const initialize = async () => {
  await customElements.whenDefined('sf-chat-interlocutor');
  const picker = document.querySelector('#chat-interlocutor-overview');
  if (!picker || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';
  picker.options = [
    {id: 'personal', title: 'Мой помощник'},
    {id: 'sales', title: 'Помощник отдела продаж'},
  ];
  picker.addEventListener('sf-chat-interlocutor-select', (event) => { picker.value = event.detail.id; });
};

initialize();
