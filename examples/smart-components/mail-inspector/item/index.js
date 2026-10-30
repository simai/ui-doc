const element = document.getElementById('mail-inspector-item');
Object.assign(element, {
  "head-actions": [
    "duplicate",
    "delete"
  ],
  "levels": [
    {
      "text": "Кнопка"
    },
    {
      "text": "Расширенный"
    }
  ],
  "notice": {
    "text": "Причина получения и ссылка отписки — в параметрах письма.",
    "action": "Открыть параметры письма"
  },
  "sections": [
    {
      "key": "button:items",
      "title": "Элементы",
      "fields": [
        {
          "kind": "items",
          "path": "/items",
          "label": "Элементы",
          "min": 1,
          "max": 4,
          "open": 1,
          "items": [
            {
              "label": "Базовый",
              "fields": [
                {
                  "kind": "text",
                  "path": "/items/0/title",
                  "label": "Заголовок",
                  "value": "Базовый"
                }
              ]
            },
            {
              "label": "Расширенный",
              "fields": [
                {
                  "kind": "text",
                  "path": "/items/1/title",
                  "label": "Заголовок",
                  "value": "Расширенный"
                }
              ]
            },
            {
              "label": "Команда",
              "fields": [
                {
                  "kind": "text",
                  "path": "/items/2/title",
                  "label": "Заголовок",
                  "value": "Команда"
                }
              ],
              "problem": true
            }
          ]
        }
      ]
    }
  ]
});
