// The page plays the host: it keeps the profiles and answers every request
// with a new list, as a site would after saving.
const initializeProfilePicker = async () => {
  const picker = document.querySelector('#profile-picker-demo');
  const log = document.querySelector('#profile-picker-log');
  if (!picker || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';
  await customElements.whenDefined('sf-profile-picker');
  let profiles = [
    {id: 'regular', label: 'Обычный', shared: true, builtin: true},
    {id: 'editors', label: 'Редакторы', shared: true},
    {id: 'mine', label: 'Мой', shared: false},
  ];
  let next = 1;
  const answer = (current, note) => {
    picker.profiles = profiles;
    picker.rights = {create: {personal: !profiles.some((p) => !p.shared), shared: true}};
    if (current) picker.setAttribute('current', current);
    log.textContent = note;
  };
  answer('regular', '');

  picker.addEventListener('sf-profile-select', ({detail}) => answer(detail.id, `Выбран профиль ${detail.id}`));
  picker.addEventListener('sf-profile-create', ({detail}) => {
    const id = `profile-${next++}`;
    profiles = [...profiles, {id, label: detail.label, shared: detail.shared}];
    answer(id, `Создан профиль «${detail.label}» — копия ${detail.from}`);
  });
  picker.addEventListener('sf-profile-rename', ({detail}) => {
    profiles = profiles.map((p) => (p.id === detail.id ? {...p, label: detail.label} : p));
    answer(null, `Профиль переименован в «${detail.label}»`);
  });
  picker.addEventListener('sf-profile-delete', ({detail}) => {
    profiles = profiles.filter((p) => p.id !== detail.id);
    answer('regular', 'Профиль удалён');
  });
  picker.addEventListener('sf-profile-reset', ({detail}) => answer(detail.id, 'Профиль сброшен к стандартному'));
};
initializeProfilePicker();
