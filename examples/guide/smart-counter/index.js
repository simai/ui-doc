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
  class ProjectCounter extends SfBaseElement {
    static get props() {
      return { count: { type: Number, default: 0 } };
    }
    increment() {
      const count = this.getProp('count') + 1;
      this.setAttribute('count', String(count));
      this.emitComponentEvent('quantity-change', { value: count });
    }
    template() {
      return html`<div class="flex gap-2 items-cross-center">
        <output aria-live="polite">Количество: ${this.getProp('count')}</output>
        <button type="button" @click=${() => this.increment()}>Добавить</button>
      </div>`;
    }
  }
  ProjectCounter.define('project-counter');
  document.querySelector('project-counter').addEventListener('sf-quantity-change', event => {
    document.querySelector('#counter-log').textContent = JSON.stringify({ value: event.detail.value });
  });
}
start().catch(error => { document.querySelector('#counter-log').textContent = error.message; });
