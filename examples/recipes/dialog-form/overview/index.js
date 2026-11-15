const ready = Promise.all(['sf-modal', 'sf-input', 'sf-button'].map((t) => customElements.whenDefined(t)));
ready.then(() => {
  const $ = (id) => document.getElementById(id);
  const dialog = $('page-dialog'), question = $('page-question'), form = $('page-form');
  const title = $('page-title'), slug = $('page-slug'), save = $('page-save'), cancel = $('page-cancel');
  const summary = $('page-summary'), failure = $('page-error'), result = $('page-result');
  let dirty = false, busy = false;
  const value = (el) => String(el.value ?? '').trim();
  const reset = () => {
    [title, slug].forEach((el) => { el.removeAttribute('invalid'); el.removeAttribute('readonly'); el.value = ''; });
    summary.hidden = true; failure.hidden = true; dirty = false; dialog.removeAttribute('unsaved');
  };
  $('page-open').addEventListener('click', () => { reset(); dialog.open(); });
  form.addEventListener('input', () => { if (!dirty) { dirty = true; dialog.setAttribute('unsaved', ''); } });
  cancel.addEventListener('click', () => dialog.close({reason: 'close'}));
  dialog.addEventListener('sf-modal-close', (event) => {
    if (busy) { event.preventDefault(); return; }
    if (dirty && event.detail?.reason !== 'api') { event.preventDefault(); setTimeout(() => question.open(), 0); }
  });
  $('page-keep').addEventListener('click', () => question.close());
  $('page-drop').addEventListener('click', () => { question.close(); dirty = false; dialog.close({reason: 'api'}); });
  summary.addEventListener('click', (event) => {
    const link = event.target.closest('a'); if (!link) return;
    event.preventDefault();
    const field = document.querySelector(link.getAttribute('href'));
    (field.querySelector('input') || field).focus();
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault(); if (busy) return;
    failure.hidden = true;
    const errors = [];
    if (!value(title)) { title.setAttribute('error-message', 'Введите название страницы'); title.setAttribute('invalid', ''); errors.push(title); } else title.removeAttribute('invalid');
    if (value(slug) && !/^[a-z0-9-]+$/.test(value(slug))) { slug.setAttribute('error-message', 'Только латинские буквы, цифры и дефис'); slug.setAttribute('invalid', ''); errors.push(slug); } else slug.removeAttribute('invalid');
    summary.hidden = errors.length < 2;
    if (errors.length > 1) { requestAnimationFrame(() => summary.focus()); docara.example.log('invalid', {fields: errors.length}); return; }
    if (errors.length === 1) { (errors[0].querySelector('input') || errors[0]).focus(); docara.example.log('invalid', {fields: 1}); return; }
    busy = true; save.setAttribute('loading', ''); cancel.setAttribute('disabled', '');
    [title, slug].forEach((el) => el.setAttribute('readonly', ''));
    setTimeout(() => {
      busy = false; save.removeAttribute('loading'); cancel.removeAttribute('disabled');
      [title, slug].forEach((el) => el.removeAttribute('readonly'));
      if ($('page-fail').checked) { failure.hidden = false; docara.example.log('save-failed', {}); return; }
      dirty = false; dialog.close({reason: 'api'});
      result.textContent = `Страница «${value(title)}» создана.`;
      docara.example.log('submit', Object.fromEntries(new FormData(form)));
    }, 1200);
  });
});
