# Component Development Guide

## Overview
This guide provides instructions for creating and managing components in the HTMX + Hyperscript + TailwindCSS UI Library.

## Component Structure

Each component should follow a consistent structure:

```html
<!-- Component wrapper with appropriate spacing -->
<div class="my-8 w-full min-w-0">
  <!-- Breadcrumb navigation -->
  <div class="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
    <div class="truncate">Docs</div>
    <!-- Arrow icon -->
    <svg>...</svg>
    <div class="text-foreground">Component Name</div>
  </div>

  <!-- Component header -->
  <div class="space-y-2">
    <h1 class="scroll-m-20 text-3xl font-bold tracking-tight">Component Name</h1>
    <p class="text-base text-muted-foreground">
      Brief description of the component.
    </p>
  </div>

  <!-- Component preview -->
  <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
    <!-- Actual component implementation -->
    <div class="relative w-full rounded-lg border px-4 py-3 ...">
      <!-- Component content -->
    </div>
  </div>
</div>
```

## HTMX Usage Patterns

### Loading Content
```html
<div hx-get="./pages/components/alert.html" 
     hx-trigger="click" 
     hx-target="#component" 
     hx-swap="innerHTML">
  Load Component
</div>
```

### Form Submission
```html
<form hx-post="/submit" 
      hx-target="#result" 
      hx-swap="outerHTML">
  <input type="text" name="data">
  <button type="submit">Submit</button>
</form>
```

### Polling
```html
<div hx-get="/updates" 
     hx-trigger="every 2s" 
     hx-swap="innerHTML">
  Live updates
</div>
```

## Hyperscript Usage Patterns

### Event Handling
```html
<button _="on click add .hidden to #element">
  Hide Element
</button>
```

### Class Manipulation
```html
<button _="on click toggle .active on me">
  Toggle Active
</button>
```

### Multiple Actions
```html
<button _="on click remove .text-primary from .nav then add .text-primary on me">
  Navigation
</button>
```

## Tailwind CSS Best Practices

### Responsive Design
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Mobile-first approach
- Consistent spacing with `space-x-*` and `space-y-*`

### Color System
- Use predefined color variables:
  - `bg-background`
  - `text-foreground`
  - `border-border`
  - `text-muted-foreground`
  - `bg-primary`, `text-primary-foreground`

### Spacing and Layout
- Use consistent padding and margin: `p-*`, `m-*`, `px-*`, `py-*`
- Flexbox for layout: `flex`, `items-center`, `justify-between`
- Grid for complex layouts: `grid`, `grid-cols-*`

## Component Examples

### Basic Button
```html
<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
  Button Text
</button>
```

### Alert Component
```html
<div role="alert" class="relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7 bg-background text-foreground">
  <svg>...</svg>
  <h5 class="mb-1 font-medium leading-none tracking-tight">Heads up!</h5>
  <div class="text-sm [&_p]:leading-relaxed">
    You can add components to your app using the cli.
  </div>
</div>
```

### Card Component
```html
<div class="rounded-lg border bg-card text-card-foreground shadow-sm">
  <div class="p-6">
    <h3 class="font-semibold leading-none tracking-tight">Card Title</h3>
    <p class="text-sm text-muted-foreground">Card description</p>
  </div>
  <div class="p-6 pt-0">
    Card content
  </div>
</div>
```

## Component Integration

### Adding to Navigation
1. Create the component HTML file in `src/pages/components/`
2. Add a link in `src/pages/components/index.html`:
```html
<a class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
   hx-target="#component"
   hx-trigger="click"
   hx-swap="innerHTML"
   hx-get="./pages/components/new-component.html">
  New Component
</a>
```

### Loading on Page Load
```html
<div hx-get="./pages/components/new-component.html"
     hx-trigger="load"
     hx-swap="innerHTML">
</div>
```

## Component Testing

### Visual Testing
1. Start development server: `./run.sh`
2. Navigate to component in browser
3. Check responsive behavior
4. Test dark/light mode
5. Verify HTMX interactions

### Code Validation
1. Check HTML syntax
2. Validate Tailwind classes
3. Test HTMX attributes
4. Verify Hyperscript logic

## Accessibility Considerations

### ARIA Roles
- Use appropriate roles: `role="alert"`, `role="navigation"`, etc.
- Add `aria-label` for icon-only buttons

### Semantic HTML
- Use proper heading hierarchy: `h1`, `h2`, `h3`, etc.
- Use semantic elements: `nav`, `main`, `section`, `article`

### Keyboard Navigation
- Ensure focusable elements are keyboard accessible
- Add focus styles with `focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`

## Performance Optimization

### Asset Loading
- Use `hx-swap="innerHTML"` for efficient DOM updates
- Lazy load non-critical components
- Optimize SVG icons

### Bundle Size
- Keep component files small and focused
- Reuse existing utility classes
- Avoid redundant CSS

## Common Patterns

### Icon Usage
```html
<div hx-swap="innerHTML"
     hx-trigger="load"
     hx-get="./assets/icons/icon-name.svg"
     class="h-4 w-4">
</div>
```

### Dark Mode Toggle
```html
<button _="on click toggle .dark on <html/>">
  <div hx-swap="innerHTML"
       hx-trigger="load"
       hx-get="./assets/icons/gen-day.svg"
       class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
  </div>
  <div hx-swap="innerHTML"
       hx-trigger="load"
       hx-get="./assets/icons/gen-night.svg"
       class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
  </div>
</button>
```

This guide provides a comprehensive overview of component development patterns in the library.