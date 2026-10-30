// Long names wrap and long values end in an ellipsis: the panel keeps its width.
const initialize = async () => {
  await customElements.whenDefined('sf-settings-menu');
  const menu = document.querySelector('#settings-menu-long');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  menu.items = [
    {"key": "theme", "type": "choice", "label": "Тема", "icon": "contrast", "value": "system", "default": "system", "options": [{"value": "system", "label": "Как в системе", "icon": "computer"}, {"value": "light", "label": "Светлая", "icon": "light_mode"}, {"value": "dark", "label": "Тёмная", "icon": "dark_mode"}]},
    {"key": "notify", "type": "boolean", "label": "Показывать уведомления о новых сообщениях в обсуждениях, на которые вы подписаны", "icon": "notifications", "value": true},
    {"key": "lang", "type": "choice", "label": "Язык интерфейса", "icon": "translate", "value": "kk", "options": [{"value": "ru", "label": "Русский"}, {"value": "en", "label": "English (United Kingdom)"}, {"value": "kk", "label": "Қазақ тілі (Қазақстан Республикасы)"}]},
    {"key": "tz", "type": "choice", "label": "Часовой пояс для дат в отчётах и журналах изменений", "icon": "schedule", "value": "vla", "options": [{"value": "msk", "label": "Москва, Санкт-Петербург (UTC+3)"}, {"value": "vla", "label": "Владивосток, Хабаровск (UTC+10)"}]}
  ];
  const status = document.querySelector('#settings-menu-long-status');
  menu.addEventListener('sf-settings-menu-changed', ({detail}) => {
    if (status) status.textContent = `Изменено: ${detail.key} = ${detail.value}.`;
  });
};

initialize();
