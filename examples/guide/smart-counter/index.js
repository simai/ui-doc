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
  // The component's own words: English in `en`, Russian in `ru`.
  const TEXT = {
    en: { count: 'Count', add: 'Add' },
    ru: { count: 'Количество', add: 'Добавить' },
  };
  class ProjectCounter extends SfBaseElement {
    static get props() {
      // A label prop defaults to empty: the English word lives in the dictionary.
      return { count: { type: Number, default: 0 }, addLabel: { default: '' } };
    }
    templateContext() {
      // Keeps component, rootClass, rootStyle and every declared prop.
      return this.createPropsTemplateContext({
        countText: SF.pageText(TEXT, 'count', this),
        addText: this.getProp('addLabel') || SF.pageText(TEXT, 'add', this),
      });
    }
    increment() {
      const count = this.getProp('count') + 1;
      this.setAttribute('count', String(count));
      this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: { value: count } }));
    }
    template() {
      const { count, countText, addText, rootClass } = this.templateContext();
      return html`<div class="flex gap-2 items-cross-center ${rootClass}">
        <output aria-live="polite">${countText}: ${count}</output>
        <button type="button"
                class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1/2"
                @click=${() => this.increment()}>
          <span class="sf-button-text-container">${addText}</span>
        </button>
      </div>`;
    }
  }
  ProjectCounter.define('project-counter');
  document.querySelector('project-counter').addEventListener('change', event => {
    document.querySelector('#counter-log').textContent = JSON.stringify({ value: event.detail.value });
  });
}
start().catch(error => { document.querySelector('#counter-log').textContent = error.message; });
