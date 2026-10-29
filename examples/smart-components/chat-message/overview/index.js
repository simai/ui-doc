// The host hands the message in; the element draws it and reports what the
// person does. Nothing is loaded here.
const initialize = async () => {
  await customElements.whenDefined('sf-chat-message');
  const node = document.querySelector('#chat-message-overview');
  if (!node || node.dataset.exampleReady === 'true') return;
  node.dataset.exampleReady = 'true';
  node.message = {
    id: 'msg_03',
    role: 'assistant',
    status: 'completed',
    verification: 'verified',
    html: '<h2>Отпуск</h2><p>Ежегодный отпуск — <strong>28 календарных дней</strong>[1]. Перенос — по заявлению[2].</p><ul><li>Статья <code>ТК РФ 115</code></li></ul>',
    text: 'Ежегодный отпуск — 28 календарных дней[1]. Перенос — по заявлению[2].',
    sources: [
      {n: 1, kind: 'base', title: 'Положение об отпусках', excerpt: 'Работнику предоставляется ежегодный основной оплачиваемый отпуск продолжительностью 28 календарных дней.'},
      {n: 2, kind: 'web', title: 'Трудовой кодекс, статья 124'},
    ],
    summary: {text: 'Нашёл 2 источника, проверил ответ'},
  };
};

initialize();
