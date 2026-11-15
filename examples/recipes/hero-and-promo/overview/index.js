Promise.all(['sf-button', 'sf-button-close'].map((t) => customElements.whenDefined(t))).then(() => {
  const hero = document.getElementById('hero');
  document.getElementById('hero-strict').addEventListener('change', (event) => {
    hero.dataset.sfStyle = event.target.checked ? 'strict' : 'expressive';
  });
  document.querySelector('.promo-close').addEventListener('click', (event) => {
    event.currentTarget.closest('.promo').hidden = true;
    hero.querySelector('h1').setAttribute('tabindex', '-1');
    hero.querySelector('h1').focus();
    docara.example.log('promo-hidden', {});
  });
});
