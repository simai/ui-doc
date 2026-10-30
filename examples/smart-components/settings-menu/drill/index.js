// Always open in the page: a choice opens its options in place.
const initialize = async () => {
  await customElements.whenDefined('sf-settings-menu');
  const menu = document.querySelector('#settings-menu-drill');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  menu.items = [
    {"key": "theme", "type": "choice", "label": "Тема", "icon": "contrast", "value": "system", "default": "system", "options": [{"value": "system", "label": "Как в системе", "icon": "computer"}, {"value": "light", "label": "Светлая", "icon": "light_mode"}, {"value": "dark", "label": "Тёмная", "icon": "dark_mode"}]},
    {"key": "density", "type": "choice", "label": "Плотность", "icon": "density_medium", "value": "normal", "default": "normal", "options": [{"value": "compact", "label": "Плотно"}, {"value": "normal", "label": "Обычно"}, {"value": "loose", "label": "Свободно"}]},
    {"key": "lang", "type": "choice", "label": "Язык", "icon": "translate", "value": "ru", "options": [{"value": "ru", "label": "Русский"}, {"value": "en", "label": "English"}, {"value": "kk", "label": "Қазақша"}]},
    {"key": "tz", "type": "choice", "label": "Часовой пояс", "icon": "schedule", "value": "msk", "options": [{"value": "msk", "label": "Москва (UTC+3)"}, {"value": "ekb", "label": "Екатеринбург (UTC+5)"}, {"value": "vla", "label": "Владивосток (UTC+10)"}]},
    {"type": "divider"},
    {"key": "notify", "type": "boolean", "label": "Уведомления", "icon": "notifications", "value": true, "default": true},
    {"key": "sound", "type": "boolean", "label": "Звук", "icon": "volume_up", "value": false, "default": false}
  ];
  const status = document.querySelector('#settings-menu-drill-status');
  menu.addEventListener('sf-settings-menu-changed', ({detail}) => {
    if (status) status.textContent = `Изменено: ${detail.key} = ${detail.value}.`;
  });
};

initialize();
