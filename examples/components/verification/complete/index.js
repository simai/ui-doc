const result = document.querySelector('#verification-complete-result');

// The page checks the code; the component only says it is complete.
const checkCode = (value) => {
  result.textContent = value === '123456'
    ? `Код ${value} подтверждён.`
    : `Код ${value} не подошёл: проверьте сообщение.`;
};

document.addEventListener('verification:complete', (event) => {
  checkCode(event.detail.value);
});
