window.SF_BOOT_CONFIG = Object.assign({}, window.SF_BOOT_CONFIG, {
  effects: {catalogue: 'https://cdn.jsdelivr.net/gh/simai/ui-effects@e3a6c512f562e214bb33cab79cfac0c8ad1ead4e/'},
});

// Каждая область пишет своё состояние и причину, если эффект скрыт.
for (const area of document.querySelectorAll('[data-sf-effect]')) {
  const state = area.querySelector('[data-effect-state]');
  const show = () => {
    const value = area.getAttribute('data-sf-effect-state');
    const reason = area.getAttribute('data-sf-effect-reason');
    if (value) state.textContent = reason ? `${value}: ${reason}` : value;
  };
  new MutationObserver(show).observe(area, {attributes: true, attributeFilter: ['data-sf-effect-state', 'data-sf-effect-reason']});
}
