async function start() {
  if (typeof window.SF?.loadSmartBase !== 'function') {
    await new Promise((resolve, reject) => {
      const ready = () => { clearTimeout(timeout); resolve(); };
      const timeout = setTimeout(() => { window.removeEventListener('sf-loader-init', ready); reject(new Error('Loader не запустился')); }, 15000);
      window.addEventListener('sf-loader-init', ready, { once: true });
    });
  }
  await SF.loadSmartBase();
  const { SfBaseElement, html } = SF.smart;
  class ProjectGreeting extends SfBaseElement {
    static externalTemplateBasePath = new URL('./assets', document.baseURI).href;
    static get props() { return { name: { default: 'Гость' }, templateName: { attribute: 'template', default: 'default' } }; }
    templateContext() { return this.getPropsContext(); }
    template() { return html`<p>Привет, ${this.getProp('name')}</p>`; }
  }
  ProjectGreeting.define('project-greeting');
  const element = document.querySelector('project-greeting');
  await element.whenRendered();
  document.querySelector('#template-log').textContent = element.querySelector('strong') ? 'Внешний шаблон compact подключён.' : 'Показан резервный шаблон: проверьте путь к compact.';
}
start().catch(error => { document.querySelector('#template-log').textContent = error.message; });
