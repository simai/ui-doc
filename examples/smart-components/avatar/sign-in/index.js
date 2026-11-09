// A guest sees one button in the same place. After sign-in the page puts the
// avatar there; the header keeps its height because both are size 1/2.
const initialize = async () => {
  const root = document.querySelector('[data-solution-user="guest"]');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  await Promise.all(['sf-button', 'sf-avatar'].map((tag) => customElements.whenDefined(tag)));
  const slot = root.querySelector('[data-user-slot]');
  const result = root.querySelector('[data-user-result]');

  const showGuest = () => {
    slot.innerHTML = '<sf-button size="1/2" appearance="outline" scheme="on-surface" text="Войти" data-user-sign-in></sf-button>';
    result.textContent = 'Гость: в шапке кнопка «Войти».';
  };
  const showPerson = () => {
    slot.innerHTML = '<sf-avatar text="АБ" tone="auto" size="1/2" aria-label="Анна Белова, меню пользователя" data-user-avatar></sf-avatar>'
      + '<sf-button size="1/2" appearance="ghost" scheme="on-surface" text="Выйти" data-user-sign-out></sf-button>';
    result.textContent = 'Вход выполнен: на месте кнопки аватар.';
  };

  root.addEventListener('click', (event) => {
    if (event.target.closest('[data-user-sign-in]')) showPerson();
    else if (event.target.closest('[data-user-sign-out]')) showGuest();
  });
};

initialize();
