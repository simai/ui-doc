document.querySelector('#many').addEventListener('click', () => {
  ['Письмо отправлено', 'Письмо отправлено', 'Контакт добавлен', 'Файл загружен', 'Шаблон сохранён']
    .forEach((title, index) => setTimeout(() => SF.notify({status: 'success', title}), index * 150));
});
