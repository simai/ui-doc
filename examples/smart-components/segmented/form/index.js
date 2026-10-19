// Форма получает name=value выбранного варианта; отключённая группа в данные
// не входит, а сброс возвращает значение, с которым группа была написана.
document.querySelectorAll('[data-segmented-form]').forEach((form) => {
  const result = form.querySelector('[data-form-result]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = [...new FormData(form)].map(([key, value]) => `${key}=${value}`);
    result.textContent = `Отправлено: ${data.join(', ') || 'пусто'}`;
  });
  form.addEventListener('reset', () => {
    // Группа возвращает значение в своём обработчике сброса: читаем после него.
    setTimeout(() => {
      const period = form.querySelector('sf-button-group[name="period"]');
      result.textContent = `Сброшено: period=${period.value}`;
    });
  });
});
