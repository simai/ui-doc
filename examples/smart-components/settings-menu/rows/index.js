// Rows: the name at the start, the control at the end.
const initialize = async () => {
  await customElements.whenDefined('sf-settings-menu');
  const menu = document.querySelector('#settings-menu-rows');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  menu.items = [
    {"key": "theme", "type": "choice", "label": "Тема", "value": "system", "default": "system", "options": [{"value": "system", "label": "Как в системе", "icon": "computer"}, {"value": "light", "label": "Светлая", "icon": "light_mode"}, {"value": "dark", "label": "Тёмная", "icon": "dark_mode"}]},
    {"key": "density", "type": "choice", "label": "Плотность", "value": "normal", "default": "normal", "options": [{"value": "compact", "label": "Плотно"}, {"value": "normal", "label": "Обычно"}, {"value": "loose", "label": "Свободно"}]},
    {"type": "divider"},
    {"key": "notify", "type": "boolean", "label": "Уведомления", "value": true, "default": true},
    {"key": "sound", "type": "boolean", "label": "Звук", "value": false, "default": false},
    {"type": "divider"},
    {"key": "lang", "type": "choice", "label": "Язык", "value": "ru", "options": [{"value": "ru", "label": "Русский"}, {"value": "en", "label": "English"}, {"value": "kk", "label": "Қазақша"}]},
    {"key": "tz", "type": "choice", "label": "Часовой пояс", "value": "msk", "options": [{"value": "msk", "label": "Москва (UTC+3)"}, {"value": "ekb", "label": "Екатеринбург (UTC+5)"}, {"value": "vla", "label": "Владивосток (UTC+10)"}]},
    {"key": "enter", "type": "choice", "label": "Отправка", "caption": "Когда Enter отправляет сообщение", "value": "enter", "options": [{"value": "enter", "label": "Enter"}, {"value": "mod-enter", "label": "Ctrl+Enter"}]}
  ];
  const status = document.querySelector('#settings-menu-rows-status');
  menu.addEventListener('sf-settings-menu-changed', ({detail}) => {
    if (status) status.textContent = `Изменено: ${detail.key} = ${detail.value}.`;
  });
};

initialize();
