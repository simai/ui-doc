// The page plays the host and hands every picker the same profile list.
customElements.whenDefined('sf-profile-picker').then(() => {
  document.querySelectorAll('[data-profile-demo]').forEach((picker) => {
    picker.profiles = [
      {id: 'regular', label: 'Обычный', shared: true, builtin: true},
      {id: 'mine', label: 'Мой', shared: false},
    ];
  });
});
