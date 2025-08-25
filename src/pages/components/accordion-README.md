# Accordion Component

A vertically stacked set of interactive headings that each reveal a section of content. Fully accessible and animated.

## Features

- ✅ Fully accessible (WAI-ARIA compliant)
- ✅ Keyboard navigation support
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Single expansion pattern
- ✅ Customizable styling

## Installation

The Accordion component requires:
- Tailwind CSS
- Hyperscript

Include the following in your project:

```html
<script src="path/to/hyperscript.js"></script>
<link href="path/to/tailwind.css" rel="stylesheet">
```

## Usage

```html
<div data-orientation="vertical">
  <div data-state="closed" data-orientation="vertical" class="border-b">
    <h3 data-orientation="vertical" data-state="closed" class="flex">
      <button
        type="button"
        aria-controls="accordion-content-1"
        aria-expanded="false"
        data-state="closed"
        data-orientation="vertical"
        id="accordion-trigger-1"
        class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
        _="on click 
             if @aria-expanded equals 'true'
               set @aria-expanded to 'false' 
               set @data-state to 'closed'
               add .hidden to #accordion-content-1
             else
               set @aria-expanded to 'true' 
               set @data-state to 'open'
               remove .hidden from #accordion-content-1
               for otherTrigger in <button:not(#accordion-trigger-1)/>
                 set otherTrigger@aria-expanded to 'false'
                 set otherTrigger@data-state to 'closed'
                 add .hidden to <div[data-state="open"] .overflow-hidden/>
               end
             end">
        Accordion Title
        <svg class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
          <!-- Chevron icon -->
        </svg>
      </button>
    </h3>
    <div
      data-state="closed"
      id="accordion-content-1"
      role="region"
      aria-labelledby="accordion-trigger-1"
      data-orientation="vertical"
      class="overflow-hidden text-sm hidden">
      <div class="pb-4 pt-0">
        Accordion content goes here.
      </div>
    </div>
  </div>
</div>
```

## Key Attributes

| Attribute | Element | Description |
|----------|---------|-------------|
| `data-state` | Accordion Item, Trigger, Content | Indicates whether the item is "open" or "closed" |
| `data-orientation` | All accordion elements | Set to "vertical" for vertical orientation |
| `aria-controls` | Trigger Button | References the ID of the content panel |
| `aria-expanded` | Trigger Button | Indicates whether the content is visible |
| `aria-labelledby` | Content Panel | References the ID of the trigger button |
| `role="region"` | Content Panel | Defines the content panel as a region |

## Accessibility

The accordion component follows the WAI-ARIA Authoring Practices Guide for accordions:

- **Keyboard Navigation**:
  - `Tab` - Moves focus between accordion headers
  - `Enter` or `Space` - Expands/collapses the focused accordion header

- **Screen Reader Support**:
  - Proper ARIA roles and attributes
  - Content visibility announced correctly
  - Focus management
  - Semantic HTML structure

## Customization

You can customize the appearance by modifying the Tailwind classes:

```html
<button class="flex flex-1 items-center justify-between py-6 text-lg font-semibold transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180">
  <!-- Custom styling -->
</button>
```

## Browser Support

- Chrome >= 60
- Firefox >= 55
- Safari >= 12
- Edge >= 79

## License

MIT