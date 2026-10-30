// A row the person cannot change: disabled.
const initialize = async () => {
  await customElements.whenDefined('sf-settings-menu');
  const menu = document.querySelector('#settings-menu-disabled');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  menu.items = [
    {"key": "theme", "type": "choice", "label": "Тема", "icon": "contrast", "value": "system", "default": "system", "options": [{"value": "system", "label": "Как в системе", "icon": "computer"}, {"value": "light", "label": "Светлая", "icon": "light_mode"}, {"value": "dark", "label": "Тёмная", "icon": "dark_mode"}]},
    {"key": "tz", "type": "choice", "label": "Часовой пояс", "icon": "schedule", "value": "msk", "options": [{"value": "msk", "label": "Москва (UTC+3)"}, {"value": "ekb", "label": "Екатеринбург (UTC+5)"}, {"value": "vla", "label": "Владивосток (UTC+10)"}], "disabled": true, "caption": "Задаёт администратор портала"},
    {"type": "divider"},
    {"key": "notify", "type": "boolean", "label": "Уведомления", "icon": "notifications", "value": true, "default": true},
    {"key": "sound", "type": "boolean", "label": "Звук", "icon": "volume_up", "value": false, "default": false, "disabled": true}
  ];
  const status = document.querySelector('#settings-menu-disabled-status');
  menu.addEventListener('sf-settings-menu-changed', ({detail}) => {
    if (status) status.textContent = `Изменено: ${detail.key} = ${detail.value}.`;
  });
};

initialize();
