// Каталог закреплён коммитом в адресе; объявить его нужно до core.js.
window.SF_BOOT_CONFIG = Object.assign({}, window.SF_BOOT_CONFIG, {
  effects: {catalogue: 'https://cdn.jsdelivr.net/gh/simai/ui-effects@e3a6c512f562e214bb33cab79cfac0c8ad1ead4e/'},
});

// Состояние размещения видно в атрибутах области.
const area = document.querySelector('[data-sf-effect]');
const state = document.querySelector('#effect-state');
const show = () => {
  const value = area.getAttribute('data-sf-effect-state');
  const reason = area.getAttribute('data-sf-effect-reason');
  if (value) state.textContent = `data-sf-effect-state="${value}"${reason ? `, data-sf-effect-reason="${reason}"` : ''}`;
};
new MutationObserver(show).observe(area, {attributes: true, attributeFilter: ['data-sf-effect-state', 'data-sf-effect-reason']});
