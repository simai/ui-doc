// External template "compact" for the library <sf-button>: the same root
// classes and attributes as the built-in template, the text without its inner
// padding. Behaviour (handlers on the tag, attribute forwarding) stays with
// the component.
export default function ({ html, nothing, context, component }) {
  const {
    size, appearance, status, scheme, text, icon, iconStart, iconEnd, iconPosition,
    loading, disabled, nativeType, ariaLabel, rootClass, rootStyle,
  } = context;
  // iconStart and iconEnd are the raw attributes: null when absent, '' when
  // emptied on purpose. Only an absent side takes `icon`, by iconPosition.
  const atEnd = ['end', 'right'].includes(iconPosition);
  const start = iconStart ?? (icon && !atEnd ? icon : '');
  const end = iconEnd ?? (icon && atEnd ? icon : '');
  const label = component.hasSlotContent('text') ? component.getSlotContent('text') : text;
  const classes = [
    'sf-button', `sf-button--size-${size}`, `sf-button--${appearance}`, `sf-button--${status || scheme}`,
    'flex', 'items-cross-center', loading ? 'loading' : '', rootClass,
  ].filter(Boolean).join(' ');
  const iconOf = (name) => (name ? html`<sf-icon icon=${name} aria-hidden="true"></sf-icon>` : nothing);
  // disabled, aria-busy, type and aria-label are the template's to render:
  // the component forwards only attributes that are not its settings.
  return html`<button type=${nativeType} class=${classes} style=${rootStyle || nothing}
      ?disabled=${disabled || loading} aria-label=${ariaLabel || nothing} aria-busy=${loading ? 'true' : nothing}>
    ${iconOf(start)}
    ${label ? html`<span class="sf-button-text-container project-button-compact-text">${label}</span>` : nothing}
    ${iconOf(end)}
  </button>`;
}
