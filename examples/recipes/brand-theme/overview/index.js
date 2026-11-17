Promise.all(['sf-input-color', 'sf-segmented', 'sf-button'].map((t) => customElements.whenDefined(t))).then(() => {
  const $ = (id) => document.getElementById(id);
  const brand = $('brand'), save = $('save'), error = $('save-error'), status = $('look-status'), sample = $('sample');
  let saved = {brand: brand.value, theme: 'system'}, theme = 'system';
  const dirty = () => (brand.value || '') !== (saved.brand || '') || theme !== saved.theme;
  const mark = () => { status.textContent = dirty() ? 'Есть несохранённые изменения: на сайте пока прежнее оформление.' : ''; };
  brand.addEventListener('sf-input-color-change', mark);
  $('site-theme').addEventListener('change', (event) => {
    theme = event.detail.value;
    sample.classList.toggle('theme-dark', theme === 'dark');
    sample.classList.toggle('theme-light', theme === 'light');
    mark();
  });
  $('reset').addEventListener('click', () => { brand.value = ''; brand.setAttribute('value', ''); mark(); });
  save.addEventListener('click', () => {
    save.setAttribute('loading', ''); error.hidden = true;
    setTimeout(() => {
      save.removeAttribute('loading');
      if ($('look-fail').checked) { error.hidden = false; docara.example.log('save-failed', {}); return; }
      saved = {brand: brand.value, theme};
      status.textContent = 'Оформление сохранено: сайт обновлён.';
      docara.example.log('save', saved);
    }, 900);
  });
});
