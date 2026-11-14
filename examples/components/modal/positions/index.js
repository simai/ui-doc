const startModalPositions = (Modal) => {
  const variants = {
    'center': ['Удалить заказ № 418?', '<p class="m-0">Заказ и его история удалятся без возможности восстановления.</p>', {position: 'center'}],
    'inline-start': ['Фильтры', '<p class="m-0">Статус, менеджер и период заказа.</p>', {position: 'inline-start'}],
    'inline-end': ['Анна Петрова', '<p class="m-0">Клиент с 2021 года, 12 заказов на 184 500 ₽.</p>', {position: 'inline-end'}],
    'top': ['Плановые работы', '<p class="m-0">16 ноября с 02:00 до 04:00 оплата картой недоступна.</p>', {position: 'top'}],
    'bottom': ['Файлы cookie', '<p class="m-0">Сайт запоминает город доставки и товары в корзине.</p>', {position: 'bottom'}],
    'left': ['Схема зала', '<p class="m-0">Сцена всегда слева, на любом языке страницы.</p>', {position: 'left'}],
    'right': ['Громкость', '<p class="m-0">Регулятор стоит у правого края экрана.</p>', {position: 'right'}],
  };

  Object.entries(variants).forEach(([key, [title, html, options]]) => {
    const id = `modal-positions-${key}`;
    if (Modal.registry.has(id)) return;

    new Modal({
      id,
      param: {
        container: '#modal-example-box',
        title,
        html,
        ...options,
      },
    });
  });
};

if (window.SF?.Loader) {
  window.SF.Loader.ready('Modal', startModalPositions);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalPositions), {once: true});
}
