// sf-view-properties owns no data: this page is its host. It answers
// record.load with the record below and keeps three sections, some of them rare.
const copy = (value) => JSON.parse(JSON.stringify(value));
const record = {
  "record_id": "order-1042",
  "collection": "shop.orders",
  "revision": 1,
  "label": "Заказ № 1042",
  "actions": [
    "record.edit"
  ],
  "sections": [
    {
      "key": "main",
      "label": "Общее",
      "groups": [
        {
          "key": "main",
          "label": "Заказ",
          "columns": 2,
          "fields": [
            {
              "key": "number",
              "label": "Номер",
              "propertyType": "string",
              "width": "half",
              "value": "1042",
              "readonly": true
            },
            {
              "key": "status",
              "label": "Статус",
              "propertyType": "choice",
              "width": "half",
              "value": "paid",
              "options": [
                {
                  "value": "new",
                  "label": "Новый"
                },
                {
                  "value": "paid",
                  "label": "Оплачен"
                },
                {
                  "value": "sent",
                  "label": "Отправлен"
                }
              ]
            },
            {
              "key": "customer",
              "label": "Покупатель",
              "propertyType": "string",
              "width": "half",
              "value": "Анна Петрова"
            },
            {
              "key": "phone",
              "label": "Телефон",
              "propertyType": "string",
              "width": "half",
              "value": "+7 900 123-45-67"
            },
            {
              "key": "comment",
              "label": "Комментарий",
              "propertyType": "text",
              "width": "full",
              "value": "Позвонить за час до доставки"
            }
          ]
        }
      ]
    },
    {
      "key": "delivery",
      "label": "Доставка",
      "groups": [
        {
          "key": "address",
          "label": "Адрес",
          "columns": 2,
          "fields": [
            {
              "key": "city",
              "label": "Город",
              "propertyType": "string",
              "width": "half",
              "value": "Казань"
            },
            {
              "key": "street",
              "label": "Улица и дом",
              "propertyType": "string",
              "width": "half",
              "value": "ул. Баумана, 12"
            },
            {
              "key": "apartment",
              "label": "Квартира",
              "propertyType": "string",
              "width": "half",
              "value": "34",
              "rare": true
            }
          ]
        }
      ]
    },
    {
      "key": "history",
      "label": "История",
      "groups": [
        {
          "key": "dates",
          "label": "Даты",
          "columns": 2,
          "fields": [
            {
              "key": "created",
              "label": "Создан",
              "propertyType": "date",
              "width": "half",
              "value": "2026-11-12",
              "readonly": true
            },
            {
              "key": "paid_at",
              "label": "Оплачен",
              "propertyType": "date",
              "width": "half",
              "value": "2026-11-12",
              "readonly": true
            }
          ]
        },
        {
          "key": "tech",
          "label": "Служебное",
          "columns": 2,
          "fields": [
            {
              "key": "source",
              "label": "Источник",
              "propertyType": "string",
              "width": "half",
              "value": "Сайт, корзина"
            },
            {
              "key": "utm",
              "label": "Метка кампании",
              "propertyType": "string",
              "width": "half",
              "value": "autumn-sale"
            }
          ],
          "rare": true
        }
      ]
    }
  ]
};

const initialize = async () => {
  await customElements.whenDefined('sf-view-properties');
  const view = document.querySelector('#property-view-sections');
  if (!view || view.dataset.exampleReady === 'true') return;
  view.dataset.exampleReady = 'true';
  const take = (values = {}) => {
    for (const section of record.sections) for (const group of section.groups) for (const field of group.fields) {
      if (field.key in values) field.value = values[field.key];
    }
    record.revision += 1;
    return {answer: 'applied', record: copy(record)};
  };
  view.setHostPort({
    version: '1.14.0',
    capabilities: [],
    async raise(intent, payload) {
      if (intent === 'record.load') return {answer: 'applied', record: copy(record)};
      if (intent === 'group.save' || intent === 'record.save') return take(payload?.values);
      return {answer: 'unavailable', reason: 'unknown-intent'};
    },
  });
};

initialize();
