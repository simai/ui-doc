// Own assistants first, knowledge-base assistants under their own heading.
const initialize = async () => {
  await customElements.whenDefined('sf-chat-interlocutor');
  const picker = document.querySelector('#chat-interlocutor-knowledge');
  if (!picker || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';
  picker.options = [
    {id: 'personal', title: 'Мой помощник'},
    {id: 'sales', title: 'Помощник отдела продаж'},
    {id: 'shop', title: 'Поддержка магазина', kind: 'knowledge'},
    {id: 'hr', title: 'Кадровые регламенты', kind: 'knowledge'},
  ];
  picker.addEventListener('sf-chat-interlocutor-select', (event) => { picker.value = event.detail.id; });
};

initialize();
