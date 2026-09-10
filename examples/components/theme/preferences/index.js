window.addEventListener('sf-loader-ready', () => {
  window.SF.Loader.themeEnabled = true;
  window.SF.Loader.checkTheme();
}, { once: true });
