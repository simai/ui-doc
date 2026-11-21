// sf-view-properties owns no data: this page is its host. It answers
// record.load with the record below and leaves closing the panel to the page.
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
          "key": "delivery",
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
              "label": "Улица",
              "propertyType": "string",
              "width": "half",
              "value": "Баумана, 1"
            },
            {
              "key": "date",
              "label": "Дата доставки",
              "propertyType": "string",
              "width": "half",
              "value": "24 ноября"
            },
            {
              "key": "courier",
              "label": "Курьер",
              "propertyType": "string",
              "width": "half",
              "value": "Сергей Иванов"
            }
          ]
        }
      ]
    },
    {
      "key": "payment",
      "label": "Оплата",
      "groups": [
        {
          "key": "payment",
          "label": "Платёж",
          "columns": 2,
          "fields": [
            {
              "key": "method",
              "label": "Способ",
              "propertyType": "string",
              "width": "half",
              "value": "Картой онлайн"
            },
            {
              "key": "total",
              "label": "Сумма",
              "propertyType": "string",
              "width": "half",
              "value": "12 400 ₽"
            },
            {
              "key": "paid",
              "label": "Оплачен",
              "propertyType": "string",
              "width": "half",
              "value": "21 ноября"
            }
          ]
        }
      ]
    }
  ]
};

const initialize = async () => {
  await customElements.whenDefined('sf-view-properties');
  const view = document.querySelector('#property-view-record-panel');
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
  // The star asks; the page keeps favourites and answers by setting favourite.
  view.addEventListener('sf-property-view-favourite', (event) => {
    view.favourite = Boolean(event.detail.favourite);
  });
  view.addEventListener('sf-property-view-close', (event) => {
    if (event.detail.unsaved_fields > 0 && !window.confirm('Закрыть? Введённое не будет сохранено.')) return;
    view.hidden = true;
    document.querySelector('#property-view-record-panel-reopen').hidden = false;
  });
  document.querySelector('#property-view-record-panel-reopen').addEventListener('click', (event) => {
    view.hidden = false;
    event.currentTarget.hidden = true;
  });
};

initialize();
