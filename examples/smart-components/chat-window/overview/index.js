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

const initialize = async () => {
  await customElements.whenDefined('sf-chat-window');
  const chat = document.querySelector('#chat-window-overview');
  if (!chat || chat.dataset.exampleReady === 'true') return;
  chat.dataset.exampleReady = 'true';
  chat.connectPort({
    port: 'simai.chat-port',
    version: '1.0.0',
    capabilities: ['conversation-manage'],
    raise: () => ({answer: 'unavailable', reason: 'example'}),
  });
  chat.setData(data);
};

initialize();
