const element = document.getElementById('mail-canvas-overview');
Object.assign(element, {
  "html": "<!doctype html><html lang=\"ru\"><head><meta charset=\"utf-8\"><title>Письмо</title><style>html,body{margin:0;background:transparent}.email{max-width:600px;margin:0 auto;background:#fff;color:#1a1a1a;font:16px/1.5 sans-serif}[data-block-box]{padding:8px 40px}h1{margin:0;font-size:24px}p{margin:0}</style></head><body><div class=\"email\"><div data-block=\"b1\"><div data-block-box><h1>Осенняя рассылка</h1></div></div><div data-block=\"b2\"><div data-block-box><p>Здравствуйте! Рассказываем, что нового.</p></div></div><div data-block=\"b3\"><div data-block-box><a href=\"https://example.com/\">Подробнее</a></div></div></div></body></html>",
  "widths": [
    {
      "value": "600",
      "label": "Компьютер 600",
      "icon": "desktop_windows",
      "frame": 680
    },
    {
      "value": "375",
      "label": "Телефон 375",
      "icon": "smartphone"
    },
    {
      "value": "320",
      "label": "Узкий 320",
      "icon": "phone_iphone"
    }
  ],
  "items": [
    {
      "id": "b1",
      "label": "Заголовок"
    },
    {
      "id": "b2",
      "label": "Текст"
    },
    {
      "id": "b3",
      "label": "Кнопка"
    }
  ],
  "actions": [
    {
      "id": "up",
      "label": "Выше"
    },
    {
      "id": "down",
      "label": "Ниже"
    },
    {
      "id": "remove",
      "label": "Удалить"
    }
  ]
});
