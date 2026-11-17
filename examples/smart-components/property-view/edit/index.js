// sf-view-properties owns no data: this page is its host. It answers
// record.load with the record below and saves the whole record with record.save.
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
    }
  ]
};

const initialize = async () => {
  await customElements.whenDefined('sf-view-properties');
  const view = document.querySelector('#property-view-edit');
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
