# HTMX Cheatsheet for Qwen CLI

## Core Attributes

### Request Methods
| Attribute | HTTP Verb |
|-----------|-----------|
| `hx-get` | GET |
| `hx-post` | POST |
| `hx-put` | PUT |
| `hx-patch` | PATCH |
| `hx-delete` | DELETE |

### Triggering Requests
| Attribute | Description |
|-----------|-------------|
| `hx-trigger` | Event that triggers request |
| `hx-target` | Element to update with response |
| `hx-swap` | How to swap content |

## Common Trigger Modifiers

```html
<!-- Execute only once -->
<button hx-get="/api" hx-trigger="click once">

<!-- Only if value changed -->
<input hx-get="/search" hx-trigger="keyup changed">

<!-- Delay before request -->
<input hx-get="/search" hx-trigger="keyup delay:500ms">

<!-- Throttle requests -->
<input hx-get="/search" hx-trigger="keyup throttle:1s">

<!-- Listen on different element -->
<button hx-get="/api" hx-trigger="click from:#other-button">
```

## Special Events

| Event | Description |
|-------|-------------|
| `load` | Fires when element loads |
| `revealed` | Fires when scrolled into view |
| `intersect` | Fires when intersects viewport |

## Swapping Strategies

| Strategy | Description |
|----------|-------------|
| `innerHTML` | Replace inside target (default) |
| `outerHTML` | Replace entire target |
| `beforebegin` | Insert before target |
| `afterbegin` | Insert at start of target |
| `beforeend` | Insert at end of target |
| `afterend` | Insert after target |
| `delete` | Remove target |
| `none` | Don't append content |

## Parameter Handling

```html
<!-- Include other elements -->
<div hx-get="/search" hx-include="[name='q']">

<!-- Filter parameters -->
<div hx-get="/search" hx-params="q,category">

<!-- Add extra values -->
<div hx-get="/search" hx-vals='{"page": 1}'>
```

## Common Patterns

### Active Search
```html
<input hx-get="/search"
       hx-trigger="keyup changed delay:500ms"
       hx-target="#results">
<div id="results"></div>
```

### Polling
```html
<div hx-get="/updates" hx-trigger="every 2s"></div>
```

### Load on Demand
```html
<div hx-get="/content" hx-trigger="revealed"></div>
```

### Confirmation
```html
<button hx-delete="/item" hx-confirm="Are you sure?">
  Delete
</button>
```

### Loading Indicators
```html
<button hx-get="/data">
  Click Me
  <img class="htmx-indicator" src="/spinner.gif">
</button>
```

### History Support
```html
<a hx-get="/page" hx-push-url="true">Page</a>
```

## Out of Band Swaps
```html
<!-- Request that updates multiple elements -->
<div hx-get="/data" hx-swap-oob="true">

<!-- Response should include elements with IDs to update -->
<div id="messages">New messages</div>
<div id="count">5</div>
```

## Content Selection
```html
<!-- Select part of response -->
<div hx-get="/data" hx-select="#content">
```

## File Uploads
```html
<form hx-post="/upload" hx-encoding="multipart/form-data">
  <input type="file" name="file">
  <button>Upload</button>
</form>
```

## Synchronization
```html
<!-- Abort validation when form submits -->
<input hx-get="/validate" hx-sync="closest form:abort">
```

## Boosting
```html
<!-- Convert all links/forms to AJAX -->
<div hx-boost="true">
  <a href="/page1">Page 1</a>
  <a href="/page2">Page 2</a>
</div>
```

## Event Reference

| Event | Description |
|-------|-------------|
| `htmx:load` | Element loaded into DOM |
| `htmx:beforeRequest` | Before request sent |
| `htmx:afterRequest` | After request completes |
| `htmx:beforeSwap` | Before content swapped |
| `htmx:afterSwap` | After content swapped |

## CSS Integration

### Hide Indicators by Default
```css
.htmx-indicator {
  display: none;
}

.htmx-request .htmx-indicator {
  display: inline;
}

.htmx-request.htmx-indicator {
  display: inline;
}
```

## TailwindCSS Integration Patterns

### Responsive Targets
```html
<div hx-get="/data" 
     hx-target="closest .card"
     class="card bg-white dark:bg-gray-800">
```

### Smooth Transitions
```html
<div hx-get="/data" 
     hx-swap="innerHTML transition:true"
     class="transition-all duration-300">
```

This cheatsheet provides a quick reference for all essential HTMX functionality that can be used with Qwen CLI.