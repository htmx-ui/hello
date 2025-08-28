# Border Radius System

This document defines the consistent border radius system used throughout the Hello UI library.

## Border Radius Scale

| Class | Value | Usage |
|-------|-------|-------|
| `rounded-none` | 0px | Sharp edges, no rounding |
| `rounded-xs` | 2px | Very subtle rounding for small elements |
| `rounded-sm` | 4px | Small rounding for badges, tags, small buttons |
| `rounded` | 6px | **Default rounding** for most UI components |
| `rounded-md` | 8px | Medium rounding for cards, larger components |
| `rounded-lg` | 12px | Large rounding for containers and sections |
| `rounded-xl` | 16px | Extra large rounding for hero sections |
| `rounded-full` | 9999px | Circular elements |

## Usage Guidelines

### Default Components (`rounded`)
- Buttons (primary, secondary, tertiary)
- Input fields
- Select dropdowns
- Text areas
- Badges (when not using `rounded-full`)
- Cards (when not using `rounded-md`)
- Alerts
- Modals

### Small Elements (`rounded-sm` to `rounded-xs`)
- Small badges
- Tags
- Notification indicators
- Small icons with backgrounds
- Chip components

### Medium Components (`rounded-md`)
- Card components
- Panel sections
- Dashboard widgets
- Image thumbnails
- Table rows (in some contexts)

### Large Containers (`rounded-lg` to `rounded-xl`)
- Page sections
- Hero banners
- Large modal dialogs
- Dashboard containers
- Feature sections

### Circular Elements (`rounded-full`)
- Avatar images
- Circular buttons
- Status indicators
- Profile pictures
- Icon-only buttons

## Consistency Rules

1. **Stick to the scale**: Only use the defined border radius values
2. **Default first**: Use `rounded` (6px) as the default for most components
3. **Purpose-driven**: Choose a border radius based on the component's purpose, not arbitrarily
4. **Systematic progression**: Use larger radii for larger components and smaller radii for smaller components
5. **Context awareness**: Consider the border radius of parent containers when designing child components

## Examples

### Buttons
```html
<!-- Primary button -->
<button class="rounded bg-primary text-primary-foreground px-4 py-2">
  Click me
</button>

<!-- Small button -->
<button class="rounded-sm bg-primary text-primary-foreground px-2 py-1 text-sm">
  Small
</button>
```

### Cards
```html
<!-- Standard card -->
<div class="rounded-md border border-border bg-card p-6">
  <h3 class="text-lg font-semibold">Card Title</h3>
  <p class="mt-2 text-muted-foreground">Card content</p>
</div>
```

### Avatars
```html
<!-- Circular avatar -->
<div class="rounded-full w-10 h-10 bg-muted overflow-hidden">
  <img src="avatar.jpg" alt="Avatar">
</div>
```

### Pills/Badges
```html
<!-- Small pill badge -->
<span class="rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs">
  New
</span>
```

## Implementation Notes

- All border radius values are defined in `tailwind.config.js` and `main.css` as CSS variables
- The system uses absolute pixel values for consistency across different devices and zoom levels
- Custom values like `rounded-[6px]` should be avoided in favor of the standardized scale
- When adding new components, reference this guide to select the appropriate border radius