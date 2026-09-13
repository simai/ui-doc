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
  class ProjectQuantity extends SfBaseElement {
    static get props() { return { count: { type: Number, default: 1 } }; }
    template() {
      return html`<button type="button" @click=${() => {
        const value = this.getProp('count') + 1;
        this.setAttribute('count', String(value));
        this.emitComponentEvent('quantity-change', { value });
      }}>Количество: ${this.getProp('count')}</button>`;
    }
  }
  class ProjectProduct extends SfBaseElement {
    template() { return html`<article class="p-2 bg-surface-container radius-2"><h3>Кружка</h3><project-quantity></project-quantity></article>`; }
  }
  class ProjectOrder extends SfBaseElement {
    template() { return html`<section aria-label="Заказ"><h2>Мой заказ</h2><project-product></project-product></section>`; }
  }
  ProjectQuantity.define('project-quantity');
  ProjectProduct.define('project-product');
  ProjectOrder.define('project-order');
  document.querySelector('project-order').addEventListener('sf-quantity-change', event => {
    document.querySelector('#order-log').textContent = `Заказ получил событие от ${event.detail.tagName}: ${event.detail.value}`;
  });
}
start().catch(error => { document.querySelector('#order-log').textContent = error.message; });
