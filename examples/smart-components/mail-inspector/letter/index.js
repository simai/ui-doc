const element = document.getElementById('mail-inspector-letter');
Object.assign(element, {
  "tabs": [
    {
      "id": "content",
      "label": "Основное"
    },
    {
      "id": "brand",
      "label": "Бренд",
      "slot": "brand"
    },
    {
      "id": "images",
      "label": "Картинки",
      "slot": "images"
    },
    {
      "id": "versions",
      "label": "Версии",
      "slot": "versions"
    }
  ],
  "sections": [
    {
      "key": "letter:content",
      "title": "Основное",
      "fields": [
        {
          "kind": "text",
          "path": "/subject",
          "label": "Тема письма",
          "value": "Осенняя рассылка",
          "required": true
        },
        {
          "kind": "text",
          "path": "/preheader",
          "label": "Прехедер",
          "value": ""
        },
        {
          "kind": "multiline",
          "path": "/reason",
          "label": "Причина получения",
          "value": "",
          "inheritedValue": "Вы подписаны на новости",
          "hint": "Как в бренде: Вы подписаны на новости"
        },
        {
          "kind": "link",
          "path": "/unsubscribe",
          "label": "Ссылка отписки",
          "value": "htt",
          "required": true,
          "placeholder": "https://",
          "hint": "Адрес https:// или тег системы рассылки",
          "error": "Нужен адрес https:// или тег системы рассылки"
        },
        {
          "kind": "select",
          "path": "/language",
          "label": "Язык письма",
          "value": "ru",
          "options": [
            {
              "value": "ru",
              "text": "Русский"
            },
            {
              "value": "en",
              "text": "English"
            }
          ]
        }
      ]
    }
  ]
});
