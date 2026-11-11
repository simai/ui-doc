const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// A project's own Smart component on SF.smart: a setting from an attribute, drawn by a template.
const NAMES = ['Анна', 'Борис', 'Вера'];
const start = async () => {
  await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const smart = await window.SF.loadSmartBase();
  const {SfBaseElement, html} = smart;
  class ProjectGreeting extends SfBaseElement {
    static get props() { return {name: {type: String, default: 'гость'}}; }
    template() {
      return html`<p class="m-0 p-3 radius-3 bg-surface-container">Здравствуйте, ${this.getProp('name')}!</p>`;
    }
  }
  if (!customElements.get('project-greeting')) ProjectGreeting.define('project-greeting');
  const greeting = document.querySelector('project-greeting');
  document.getElementById('smart-rename').addEventListener('click', () => {
    const next = NAMES[(NAMES.indexOf(greeting.getAttribute('name')) + 1) % NAMES.length];
    greeting.setAttribute('name', next);
    log('project-greeting', {name: next});
  });
};

start();
