const element = document.getElementById('content-editor-short');
Object.assign(element, {
  "document": {
    "schema": "simai.composition.document",
    "schema_version": 1,
    "id": "note",
    "profile": "structured-content",
    "root": {
      "id": "root",
      "type": "content.document",
      "data": {
        "title": "Заметка"
      },
      "slots": {
        "default": [
          {
            "id": "p1",
            "type": "content.paragraph",
            "data": {
              "content": [
                {
                  "type": "text",
                  "value": "Первая строка"
                }
              ]
            }
          },
          {
            "id": "p2",
            "type": "content.paragraph",
            "data": {
              "content": [
                {
                  "type": "text",
                  "value": "Вторая строка"
                }
              ]
            }
          }
        ]
      }
    }
  }
});
