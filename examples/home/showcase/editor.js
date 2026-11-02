const element = document.getElementById('showcase-editor');
Object.assign(element, {
  "document": {
    "schema": "simai.composition.document",
    "schema_version": 1,
    "id": "home-editor",
    "profile": "structured-content",
    "root": {
      "id": "root",
      "type": "content.document",
      "data": {
        "title": "Как подготовить письмо к рассылке"
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
                  "value": "Эта страница написана в режиме содержимого. Просто печатайте: "
                },
                {
                  "type": "text",
                  "value": "Enter",
                  "marks": [
                    "strong"
                  ]
                },
                {
                  "type": "text",
                  "value": " делает новый блок, а косая черта в пустой строке открывает меню."
                }
              ]
            }
          },
          {
            "id": "h1",
            "type": "content.heading",
            "data": {
              "level": 2,
              "content": [
                {
                  "type": "text",
                  "value": "Что проверить перед отправкой"
                }
              ]
            }
          },
          {
            "id": "l1",
            "type": "content.list",
            "slots": {
              "items": [
                {
                  "id": "l1a",
                  "type": "content.list-item",
                  "data": {
                    "content": [
                      {
                        "type": "text",
                        "value": "Согласие получателей и ссылку отписки"
                      }
                    ]
                  }
                },
                {
                  "id": "l1b",
                  "type": "content.list-item",
                  "data": {
                    "content": [
                      {
                        "type": "text",
                        "value": "Тему письма и первые слова после неё"
                      }
                    ]
                  }
                },
                {
                  "id": "l1c",
                  "type": "content.list-item",
                  "data": {
                    "content": [
                      {
                        "type": "text",
                        "value": "Вид на телефоне и в тёмной теме"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "id": "a1",
            "type": "content.alert",
            "props": {
              "status": "warning"
            },
            "slots": {
              "default": [
                {
                  "id": "a1p",
                  "type": "content.paragraph",
                  "data": {
                    "content": [
                      {
                        "type": "text",
                        "value": "Щёлкните по ручке слева от блока: в её меню есть «Параметры…», а над выбранным блоком появятся быстрые настройки."
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
});
