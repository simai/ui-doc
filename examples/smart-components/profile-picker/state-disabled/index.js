// The page plays the host: the disabled picker still shows its current profile.
customElements.whenDefined('sf-profile-picker').then(() => {
  document.querySelectorAll('[data-profile-demo]').forEach((picker) => {
    picker.profiles = [
      {id: 'regular', label: 'Обычный', shared: true, builtin: true},
      {id: 'mine', label: 'Мой', shared: false},
    ];
  });
});
