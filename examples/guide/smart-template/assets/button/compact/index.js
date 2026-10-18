// External template "compact" for the library <sf-button>: the same root
// classes and attributes as the built-in template, the text without its inner
// padding. Behaviour (handlers on the tag, attribute forwarding) stays with
// the component.
export default function ({ html, nothing, context, component }) {
  const {
    size, appearance, status, scheme, text, icon, iconStart, iconEnd, iconPosition,
    segment, spacing, radius, textPosition,
    loading, disabled, nativeType, ariaLabel, rootClass, rootStyle,
  } = context;
  // iconStart and iconEnd are the raw attributes: null when absent, '' when
  // emptied on purpose. Only an absent side takes `icon`, by iconPosition.
  const atEnd = ['end', 'right'].includes(iconPosition);
  const start = iconStart ?? (icon && !atEnd ? icon : '');
  const end = iconEnd ?? (icon && atEnd ? icon : '');
  const label = component.hasSlotContent('text') ? component.getSlotContent('text') : text;
  // A slotted icon wins over the icon name, as in the built-in template;
  // icon-left and icon-right are the old slot names.
  const slotted = (...names) => {
    const name = names.find((slot) => component.hasSlotContent(slot));
    return name ? component.getSlotContent(name) : null;
  };
  const startContent = slotted('icon-start', 'icon-left');
  const endContent = slotted('icon-end', 'icon-right');
  const classes = [
    'sf-button', `sf-button--size-${size}`, `sf-button--${appearance}`, `sf-button--${status || scheme}`,
    'flex', 'items-cross-center',
    segment ? `segment-${segment}` : '',
    // An external template writes the density as spacing-*; normal has no class.
    spacing && spacing !== 'normal' ? `spacing-${spacing}` : '',
    radius ? `radius-${radius}` : '',
    loading ? 'loading sf-button-state-loading' : '',
    rootClass,
  ].filter(Boolean).join(' ');
  const textClasses = [
    'sf-button-text-container', `text-${textPosition || 'center'}`, 'pointer-event-none',
    start || end || startContent || endContent ? '' : 'flex-1', 'project-button-compact-text',
  ].filter(Boolean).join(' ');
  const iconOf = (name) => (name ? html`<sf-icon icon=${name} root-class="pointer-event-none" weight="400" aria-hidden="true"></sf-icon>` : nothing);
  // disabled, aria-busy, type and aria-label are the template's to render:
  // the component forwards only attributes that are not its settings.
  return html`<button type=${nativeType} class=${classes} style=${rootStyle || nothing}
      ?disabled=${disabled || loading} aria-label=${ariaLabel || nothing} aria-busy=${loading ? 'true' : nothing}>
    ${startContent ?? iconOf(start)}
    ${label ? html`<span class=${textClasses}>${label}</span>` : nothing}
    ${endContent ?? iconOf(end)}
  </button>`;
}
