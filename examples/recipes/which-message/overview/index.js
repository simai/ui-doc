(async () => {
  // Скрытые части загружаются, когда их покажут: данные им отдаём после показа.
  await customElements.whenDefined('sf-button');
  const fill = {
    bar: async () => {
      await customElements.whenDefined('sf-alert-bar');
      const bar = document.querySelector('#msg-bar');
      bar.items = [{id: 'disk', level: 'error', text: 'Диск заполнен на 98 %: сайты перестанут сохранять файлы и базы.', source: 'Сервер', action: {label: 'Освободить место', href: '#disk'}}];
    },
    centre: async () => {
      await customElements.whenDefined('sf-list');
      document.querySelector('#msg-centre').items = [
        {id: 'n1', icon: 'cloud_done', text: 'Резервная копия shop.example.ru готова', supporting: 'Сервер · 03:10'},
        {id: 'n2', icon: 'person_add', text: 'Анна Котова добавлена в редакторы', supporting: 'Пользователи · 10:42'},
        {id: 'n3', icon: 'warning', text: 'Сертификат demo.example.ru истекает через 6 дней', supporting: 'Сайты · 11:05'},
        {id: 'n4', icon: 'shopping_cart', text: 'Новый заказ № 48 215 на 12 400 ₽', supporting: 'Магазин · 12:30'},
      ];
    },
  };
  // sf-button переносит data-атрибуты на свою кнопку: место читаем с неё.
  const what = document.querySelector('#what');
  const choose = (place) => {
    what.querySelectorAll('sf-button').forEach((host) => host.toggleAttribute('pressed', host.querySelector('button')?.dataset.place === place));
    document.querySelectorAll('[data-for]').forEach((part) => { part.hidden = part.dataset.for !== place; });
    fill[place]?.();
  };
  what.addEventListener('click', (event) => {
    const place = event.target.closest('button[data-place]')?.dataset.place;
    if (place) choose(place);
  });

  document.querySelector('#msg-bar').addEventListener('sf-alert-bar-navigate', (event) => event.preventDefault());

  document.querySelector('#msg-save').addEventListener('click', () => {
    SF.notify({status: 'success', title: 'Запись сохранена', text: '«Осенняя распродажа» опубликована на сайте.', action: {label: 'Отменить', onSelect: () => {}}});
  });
  document.querySelector('#msg-offline').addEventListener('click', () => {
    SF.notify({status: 'error', title: 'Не сохранено: нет связи', text: 'Изменения остались в форме.', duration: 0, action: {label: 'Повторить', onSelect: () => {}}});
  });
  document.querySelector('[data-for="form"] sf-alert').addEventListener('sf-alert-action', () => {
    document.querySelector('#msg-slug input')?.focus();
  });
})();
