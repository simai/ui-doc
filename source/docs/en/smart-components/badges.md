# Badge

`sf-badge` is a compact label for a status, version, category, counter, or short attribute. It follows the Badge variants in the SIMAI UI Kit and is loaded automatically by SIMAI Framework.

## Quick example

```html
<sf-badge type="main" scheme="primary" size="1/2" text="New version"></sf-badge>
```

## Attributes

| Attribute | Values | Default |
|---|---|---|
| `type` | `main`, `tonal`, `outline` | `main` |
| `scheme` | `neutral`, `primary`, `secondary`, `tertiary`, `on-surface` | `neutral` |
| `size` | `1/3`, `1/2`, `1` | `1/3` |
| `text` | Short text | Empty |
| `icon` | Icon name | None |
| `icon-left`, `icon-right` | Icon on an explicit side | None |
| `icon-position` | `start`, `end`, `left`, `right` | `start` |
| `aria-label` | Accessible name | None |

The three sizes are 20, 24, and 28 pixels high. Use the system names `1/3`, `1/2`, and `1` in code rather than hard-coded pixel values.

## Variant contract

The SIMAI UI Kit defines exactly 42 supported combinations:

- `neutral`, `primary`, `secondary`, and `tertiary` support all three types and sizes;
- `on-surface` supports `main` and `outline` in all three sizes;
- `tonal + on-surface` is not a designed variant and normalizes to `main + on-surface`.

Unknown values safely fall back to `main`, `neutral`, and `1/3`.

## Dark badge

There is no separate `inverse` scheme. The official dark variant is `main + on-surface`:

```html
<sf-badge type="main" scheme="on-surface" size="1/2" text="PHP 8.2"></sf-badge>
```

## Icons

```html
<sf-badge type="tonal" scheme="primary" size="1" icon="check" text="Ready"></sf-badge>
```

For an icon-only badge, provide an accessible name. The component omits the empty text container:

```html
<sf-badge type="outline" scheme="neutral" icon="info" aria-label="Information"></sf-badge>
```

## Slots

Custom markup can use the `icon-left`, `icon-right`, and `text` slots.

```html
<sf-badge type="main" scheme="primary">
    <span slot="icon-left"><i class="sf-icon">arrow_upward</i></span>
    <span slot="text">99+</span>
</sf-badge>
```

The source contract lives in `ui-loader/src/component/badges` and `ui-loader/src/smart/badges`. The `ui` and `ui-smart` repositories contain reproducibly generated output only.
