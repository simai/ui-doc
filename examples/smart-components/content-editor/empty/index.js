const element = document.getElementById('content-editor-empty');
Object.assign(element, {
  "document": {
    "schema": "simai.composition.document",
    "schema_version": 1,
    "id": "blank",
    "profile": "structured-content",
    "root": {
      "id": "root",
      "type": "content.document",
      "slots": {
        "default": [
          {
            "id": "p1",
            "type": "content.paragraph",
            "data": {
              "content": []
            }
          }
        ]
      }
    }
  }
});
