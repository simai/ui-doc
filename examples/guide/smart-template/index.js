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
    // createPropsTemplateContext keeps component, rootClass, rootStyle and the props.
    templateContext() { return this.createPropsTemplateContext(); }
    template() { return html`<p>Привет, ${this.getProp('name')}</p>`; }
  }
  ProjectGreeting.define('project-greeting');
  const element = document.querySelector('project-greeting');
  await element.whenRendered();
  await SF.whenDefined('button');
  const button = document.querySelector('sf-button[template="compact"]');
  await button.whenRendered();
  const greetingOk = Boolean(element.querySelector('strong'));
  const buttonOk = Boolean(button.querySelector('.project-button-compact-text'));
  document.querySelector('#template-log').textContent = greetingOk && buttonOk
    ? 'Внешние шаблоны compact подключены: приветствие и кнопка.'
    : 'Показан резервный шаблон: проверьте путь к compact.';
}
start().catch(error => { document.querySelector('#template-log').textContent = error.message; });
