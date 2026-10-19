window.SF_BOOT_CONFIG = Object.assign({}, window.SF_BOOT_CONFIG, {
  effects: {catalogue: 'https://cdn.jsdelivr.net/gh/simai/ui-effects@d955c66ae024552f5e2f98c418e2923959484877/'},
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
