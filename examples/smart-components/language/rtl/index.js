// Arabic is written right to left: choosing it sets dir="rtl" on this frame's
// <html>, and the row below starts at the right edge. change carries the
// direction in detail.dir before anything changes.

const TEXT = {
  ru: 'Текст страницы начинается у начального края.',
  en: 'The page text starts at the start edge.',
  ar: 'يبدأ نص الصفحة من الحافة الأولى.',
};

const initialize = async () => {
  await customElements.whenDefined('sf-language');
  const picker = document.querySelector('#language-rtl');
  const text = document.querySelector('#language-rtl-text');
  if (!picker || !text || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';
  picker.addEventListener('change', (event) => {
    text.textContent = TEXT[event.detail.value] ?? TEXT.en;
    text.lang = event.detail.value;
  });
};

initialize();
