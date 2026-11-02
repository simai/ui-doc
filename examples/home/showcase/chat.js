// A host that lives on this page: it hands the window its data and answers
// its intents. The window itself goes nowhere.
const data = {
  "me": {
    "id": 7,
    "name": "Анна"
  },
  "interlocutors": [
    {
      "id": "personal",
      "kind": "personal",
      "title": "Мой помощник",
      "greeting": "Чем помочь? Спросите о правилах компании или пришлите документ.",
      "suggestions": [
        "Сколько дней отпуска?",
        "Как оформить командировку?"
      ],
      "capabilities": {
        "attachments": true,
        "proposals": true,
        "memory": true
      }
    },
    {
      "id": "hr",
      "kind": "knowledge",
      "title": "Кадры",
      "greeting": "Вопросы об отпусках, графике и документах.",
      "suggestions": []
    }
  ],
  "conversations": [
    {
      "id": "thr_01",
      "title": "Отпуск и перенос",
      "type": "assistant",
      "interlocutor": "personal",
      "updated_at": "2026-10-22T10:15:00+03:00",
      "archived": false
    },
    {
      "id": "thr_02",
      "title": "График на ноябрь",
      "type": "assistant",
      "interlocutor": "hr",
      "updated_at": "2026-10-21T16:40:00+03:00",
      "archived": false
    }
  ],
  "history": {
    "has_older": false
  },
  "feed_state": "ready",
  "limits": {
    "body_chars": 4000,
    "files_per_message": 5
  },
  "conversation": {
    "id": "thr_01",
    "title": "Отпуск и перенос",
    "interlocutor": "personal",
    "can_send": true
  },
  "messages": [
    {
      "id": "msg_01",
      "kind": "person",
      "author": {
        "id": 7,
        "name": "Анна",
        "own": true
      },
      "body": "Сколько дней отпуска мне положено и можно ли его перенести?"
    },
    {
      "id": "msg_02",
      "kind": "assistant",
      "author": {
        "id": "personal",
        "name": "Мой помощник"
      },
      "status": "completed",
      "verification": "verified",
      "body": "Ежегодный отпуск — 28 календарных дней[1]. Перенос — по заявлению[2].",
      "html": "<p>Ежегодный отпуск — <strong>28 календарных дней</strong>[1]. Перенос — по заявлению не позднее чем за две недели[2].</p>",
      "sources": [
        {
          "n": 1,
          "kind": "base",
          "title": "Положение об отпусках"
        },
        {
          "n": 2,
          "kind": "web",
          "title": "Трудовой кодекс, статья 124"
        }
      ]
    }
  ]
};

// The second conversation and the answers are the demo's own: whatever is
// asked, the assistant says it is a demonstration.
const feeds = {
  thr_01: data.messages,
  thr_02: [
    {id: 'msg_11', kind: 'person', author: {id: 7, name: 'Анна', own: true}, body: 'Какой график работы в ноябре?'},
    {id: 'msg_12', kind: 'assistant', author: {id: 'hr', name: 'Кадры'}, status: 'completed', body: 'В ноябре 19 рабочих дней. 4 ноября — выходной, 3 ноября — сокращённый день.'},
  ],
};
let next = 100;
const demoAnswer = (interlocutor) => ({
  id: `msg_${next++}`,
  kind: 'assistant',
  author: {id: interlocutor, name: data.interlocutors.find((one) => one.id === interlocutor)?.title ?? 'Помощник'},
  status: 'completed',
  body: 'Это демонстрация: ответы здесь заготовлены. В вашем приложении их даёт ваш сервер или ИИ-сотрудник.',
});
const conversationOf = (id) => {
  const one = data.conversations.find((item) => item.id === id);
  return one && {id: one.id, title: one.title, interlocutor: one.interlocutor, can_send: true};
};
const applied = (result) => ({answer: 'applied', ...(result ? {data: result} : {})});
let chosen = 'personal';

const initialize = async () => {
  await customElements.whenDefined('sf-chat-window');
  const chat = document.querySelector('#showcase-chat');
  if (!chat || chat.dataset.exampleReady === 'true') return;
  chat.dataset.exampleReady = 'true';
  const reply = (conversationId, interlocutor) => setTimeout(() => {
    feeds[conversationId].push(demoAnswer(interlocutor));
    chat.setData({messages: [...feeds[conversationId]]});
  }, 700);
  const intents = {
    'conversation.open': ({conversation_id: id}) => {
      const conversation = conversationOf(id);
      if (!conversation) return {answer: 'refused', reason: 'not-found'};
      feeds[id] ??= [];
      return applied({conversation, messages: [...feeds[id]], history: {has_older: false}});
    },
    'conversation.create': ({interlocutor}) => {
      const id = `thr_${next++}`;
      data.conversations.unshift({id, title: 'Новый разговор', type: 'assistant', interlocutor: interlocutor ?? chosen, updated_at: new Date().toISOString(), archived: false});
      feeds[id] = [];
      return applied({conversations: [...data.conversations], conversation: conversationOf(id), messages: []});
    },
    'message.send': ({conversation_id: id, body, interlocutor}) => {
      let conversationId = id;
      let created = null;
      if (conversationId == null) {
        conversationId = `thr_${next++}`;
        data.conversations.unshift({id: conversationId, title: body.slice(0, 40), type: 'assistant', interlocutor: interlocutor ?? chosen, updated_at: new Date().toISOString(), archived: false});
        feeds[conversationId] = [];
        created = conversationOf(conversationId);
      }
      const message = {id: `msg_${next++}`, kind: 'person', author: {...data.me, own: true}, body};
      // A new conversation is named by its first question.
      const entry = data.conversations.find((item) => item.id === conversationId);
      const named = !created && entry && feeds[conversationId].length === 0 && entry.title === 'Новый разговор';
      if (named) entry.title = body.slice(0, 40);
      feeds[conversationId].push(message);
      reply(conversationId, conversationOf(conversationId).interlocutor);
      return applied(created ? {message, conversation: created, conversations: [...data.conversations]} : (named ? {message, conversations: [...data.conversations]} : {message}));
    },
    'message.rate': () => applied(),
    'interlocutor.choose': ({interlocutor}) => { chosen = interlocutor; return applied(); },
    'conversation.rename': ({conversation_id: id, title}) => {
      const one = data.conversations.find((item) => item.id === id);
      if (one) one.title = title;
      return applied({conversations: [...data.conversations]});
    },
    'conversation.archive': ({conversation_id: id, archived}) => {
      const one = data.conversations.find((item) => item.id === id);
      if (one) one.archived = archived;
      return applied({conversations: [...data.conversations]});
    },
    'proposal.decide': () => applied(),
  };
  chat.connectPort({
    port: 'simai.chat-port',
    version: '1.0.0',
    capabilities: ['assistant', 'feedback', 'proposals', 'conversation-create', 'conversation-manage', 'interlocutors'],
    raise: (intent, payload = {}) => intents[intent]?.(payload) ?? {answer: 'unavailable', reason: 'capability-not-provided'},
  });
  chat.setData(data);
};

initialize();
