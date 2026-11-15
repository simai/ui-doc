(async () => {
  await Promise.all(['sf-tabs', 'sf-input', 'sf-button', 'sf-segmented'].map((tag) => customElements.whenDefined(tag)));
  const $ = (selector) => document.querySelector(selector);
  const tabs = $('#record-tabs');
  const save = $('#save');
  const dirty = $('#dirty');
  const fields = ['#f-title', '#f-slug', '#f-seo-title', '#f-seo-desc', '#f-group'];
  const tabItems = [{id: 'main', label: 'Основное'}, {id: 'seo', label: 'Поиск'}, {id: 'access', label: 'Доступ'}];
  let answer = 'ok';

  const clear = () => {
    $('#summary').replaceChildren();
    fields.forEach((id) => { $(id).removeAttribute('invalid'); $(id).removeAttribute('error-message'); });
    tabs.items = tabItems.map((item) => ({...item}));
  };
  const fieldError = (id, message) => { $(id).setAttribute('invalid', ''); $(id).setAttribute('error-message', message); };
  const summary = (status, heading, text, actions) => {
    const alert = document.createElement('sf-alert');
    alert.setAttribute('status', status);
    alert.setAttribute('heading', heading);
    alert.setAttribute('supporting-text', text);
    alert.setAttribute('action-text', actions[0][0]);
    alert.setAttribute('action', actions[0][1]);
    if (actions[1]) { alert.setAttribute('secondary-action-text', actions[1][0]); alert.setAttribute('secondary-action', actions[1][1]); }
    alert.addEventListener('sf-alert-action', (event) => {
      const action = event.detail?.action;
      if (action === 'first') tabs.goToError();
      if (action === 'mine') { clear(); send('ok'); }
      if (action === 'theirs') clear();
    });
    $('#summary').replaceChildren(alert);
    // Хозяин уведомления не рисует рамку сам: фокус ставят на его рамку .sf-alert.
    const focusBox = () => {
      const box = alert.querySelector('.sf-alert');
      if (!box) return requestAnimationFrame(focusBox);
      box.tabIndex = -1;
      box.focus();
    };
    focusBox();
  };

  function send(mode = answer) {
    save.setAttribute('loading', '');
    setTimeout(() => {
      save.removeAttribute('loading');
      clear();
      if (mode === 'errors') {
        fieldError('#f-slug', 'Только латинские буквы, цифры и дефис.');
        fieldError('#f-seo-title', '84 знака — сократите до 70.');
        fieldError('#f-seo-desc', 'Заполните описание для поиска.');
        tabs.items = [{id: 'main', label: 'Основное', errors: 1}, {id: 'seo', label: 'Поиск', errors: 2}, {id: 'access', label: 'Доступ'}];
        summary('error', 'Не сохранено: 3 ошибки', 'Ошибки на вкладках «Основное» и «Поиск».', [['К первой ошибке', 'first']]);
        return;
      }
      if (mode === 'conflict') {
        summary('warning', 'Запись изменила Анна Котова в 14:32', 'Ваши правки не сохранены и остались в форме.', [['Показать её версию', 'theirs'], ['Сохранить мою', 'mine']]);
        return;
      }
      if (mode === 'offline') {
        dirty.hidden = false;
        SF.notify({status: 'error', title: 'Не сохранено: нет связи', text: 'Изменения остались в форме.', duration: 0, action: {label: 'Повторить', onSelect: () => send()}});
        return;
      }
      dirty.hidden = true;
      SF.notify({status: 'success', title: 'Сохранено', action: {label: 'Отменить', onSelect: () => {}}});
    }, 1200);
  }

  save.addEventListener('click', () => send());
  $('#cancel').addEventListener('click', () => { clear(); dirty.hidden = true; });
  tabs.addEventListener('input', () => { dirty.hidden = false; });
  $('#answer').addEventListener('sf-button-group-change', (event) => { answer = event.detail?.value ?? answer; clear(); });
})();
