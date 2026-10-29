// A conversation between people: the other person on the start side, your own
// message on the end side.
const initialize = async () => {
  await customElements.whenDefined('sf-chat-message');
  const theirs = document.querySelector('#chat-message-person');
  const own = document.querySelector('#chat-message-person-own');
  if (!theirs || !own || theirs.dataset.exampleReady === 'true') return;
  theirs.dataset.exampleReady = 'true';
  theirs.message = {
    id: 41,
    body: 'Посмотрите график, пожалуйста',
    authorName: 'Анна Смирнова',
    files: [{id: 7, name: 'График.xlsx', size: 20480, state: 'ready', downloadUrl: '/files/7'}],
  };
  theirs.display = {own: false, first: true, last: true, showName: true};
  own.message = {id: 42, body: 'Хорошо, посмотрю', authorName: 'Вы', isEdited: true};
  own.display = {own: true, first: true, last: true};
};

initialize();
