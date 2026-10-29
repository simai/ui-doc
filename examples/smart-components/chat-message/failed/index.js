// The host's own words: an error that can be retried, and a spent limit.
const initialize = async () => {
  await customElements.whenDefined('sf-chat-message');
  const failed = document.querySelector('#chat-message-failed');
  const limit = document.querySelector('#chat-message-limit');
  if (!failed || !limit || failed.dataset.exampleReady === 'true') return;
  failed.dataset.exampleReady = 'true';
  failed.message = {id: 'msg_07', role: 'assistant', status: 'failed', text: 'Не удалось получить ответ.'};
  limit.message = {id: 'msg_06', role: 'assistant', status: 'limit', text: 'Лимит вопросов на месяц исчерпан.'};
};

initialize();
