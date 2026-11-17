Promise.all(['sf-modal', 'sf-button'].map((t) => customElements.whenDefined(t))).then(() => {
  const phone = matchMedia('(max-width: 37.5rem)');
  const create = document.getElementById('create');
  const rename = document.getElementById('rename');
  document.getElementById('rename-open').addEventListener('click', () => rename.open());
  document.getElementById('create-open').addEventListener('click', () => {
    create.toggleAttribute('fullscreen', phone.matches);
    create.open();
  });
  document.querySelectorAll('[data-sf-action="close"]').forEach((b) => b.addEventListener('click', () => b.closest('sf-modal').close({reason: 'api'})));
});
