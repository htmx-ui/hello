# HTMX Comprehensive Guide for Qwen CLI

## Overview
HTMX is a library that extends HTML to allow modern browser features without writing JavaScript. It enables elements to issue HTTP requests, handle responses, and update parts of the page dynamically. This guide provides everything Qwen CLI needs to understand and implement HTMX effectively in the Hello UI Component Library project.

## Core Concepts

HTMX generalizes the core idea of HTML as hypertext by enabling:
1. Any element (not just anchors/forms) to issue HTTP requests
2. Any event (not just clicks/submissions) to trigger requests
3. Any HTTP verb (not just GET/POST) for requests
4. Any element (not just the entire window) as a target for updates

### Basic Example
```html
<!-- Standard HTML -->
<a href="/blog">Blog</a>

<!-- HTMX equivalent with more control -->
<button hx-post="/clicked" 
        hx-trigger="click" 
        hx-target="#parent-div" 
        hx-swap="outerHTML">
  Click Me!
</button>
```

## Key HTMX Attributes

### Request Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `hx-get` | Issue GET request | `hx-get="/api/data"` |
| `hx-post` | Issue POST request | `hx-post="/api/submit"` |
| `hx-put` | Issue PUT request | `hx-put="/api/update"` |
| `hx-patch` | Issue PATCH request | `hx-patch="/api/modify"` |
| `hx-delete` | Issue DELETE request | `hx-delete="/api/remove"` |
| `hx-trigger` | Define what event triggers request | `hx-trigger="click"` |
| `hx-target` | Specify where to place response | `hx-target="#results"` |
| `hx-swap` | Define how to swap content | `hx-swap="innerHTML"` |

### Trigger Modifiers

| Modifier | Description | Example |
|----------|-------------|---------|
| `once` | Execute request only once | `hx-trigger="click once"` |
| `changed` | Only request if element value changed | `hx-trigger="keyup changed"` |
| `delay:<time>` | Wait before issuing request | `hx-trigger="keyup delay:500ms"` |
| `throttle:<time>` | Throttle request frequency | `hx-trigger="keyup throttle:1s"` |
| `from:<selector>` | Listen for events on different elements | `hx-trigger="click from:#button"` |

### Special Events

| Event | Description | Example |
|-------|-------------|---------|
| `load` | Fires once when element loads | `hx-trigger="load"` |
| `revealed` | Fires when element scrolls into viewport | `hx-trigger="revealed"` |
| `intersect` | Fires when element intersects viewport | `hx-trigger="intersect"` |

## Request Handling

### Parameters

HTMX automatically includes:
- Element's value (for form elements)
- Form data (when element is in a form)

Additional parameter controls:
```html
<!-- Include values from other elements -->
<div hx-get="/search" hx-include="[name='q']">

<!-- Filter parameters -->
<div hx-get="/search" hx-params="q,category">

<!-- Add extra values -->
<div hx-get="/search" hx-vals='{"page": 1, "limit": 10}'>

<!-- Add computed values -->
<div hx-get="/search" hx-vars='page:1, limit:10'>
```

### File Uploads
```html
<!-- For file uploads -->
<form hx-post="/upload" hx-encoding="multipart/form-data">
  <input type="file" name="avatar">
  <button>Upload</button>
</form>
```

### Synchronization
```html
<!-- Coordinate requests between elements -->
<input hx-get="/validate" 
       hx-sync="closest form:abort">
```

### Boosting
```html
<!-- Convert links/forms to AJAX requests -->
<a href="/page" hx-boost="true">Page</a>
```

## Response Processing

### Swapping Strategies

| Strategy | Description |
|----------|-------------|
| `innerHTML` | Replace content inside target (default) |
| `outerHTML` | Replace entire target element |
| `beforebegin` | Insert before target element |
| `afterbegin` | Insert at beginning of target |
| `beforeend` | Insert at end of target |
| `afterend` | Insert after target element |
| `delete` | Remove target regardless of response |
| `none` | Don't append response content |

### Out of Band Swaps
```html
<!-- Update elements by ID directly from response -->
<div hx-get="/data" hx-swap-oob="true">

<!-- Response should include elements with IDs to update -->
```

### Content Selection
```html
<!-- Select subset of response -->
<div hx-get="/data" hx-select="#content">

<!-- Select specific elements for out-of-band swaps -->
<div hx-get="/data" hx-select-oob=".message">
```

### CSS Transitions
HTMX works through a swap/settle model:
1. Preserve attributes of matching IDs
2. Swap in new content with old attributes
3. Apply new attributes after settle delay
4. Allows CSS transitions without JavaScript

## Common HTMX Patterns

### Active Search
```html
<input type="text" name="q"
    hx-get="/search"
    hx-trigger="keyup changed delay:500ms"
    hx-target="#search-results">
<div id="search-results"></div>
```

### Polling
```html
<!-- Regular polling -->
<div hx-get="/news" hx-trigger="every 2s"></div>

<!-- Load polling -->
<div hx-get="/messages" 
     hx-trigger="load delay:1s" 
     hx-swap="outerHTML">
</div>
```

### Indicators
```html
<button hx-get="/click">
  Click Me!
  <img class="htmx-indicator" src="/spinner.gif">
</button>
```

### Confirmation
```html
<button hx-delete="/account" hx-confirm="Are you sure?">
  Delete My Account
</button>
```

### History Support
```html
<a hx-get="/blog" hx-push-url="true">Blog</a>
```

## Advanced HTMX Features

### Event Handling
Extensive event system for integration:
- `htmx:load` - Element loaded into DOM
- `htmx:configRequest` - Modify request before sending
- `htmx:beforeSwap` - Modify swapping behavior

### Extensions
Core extensions include:
- `response-targets` - Target based on response codes
- `sse` - Server Sent Events support
- `ws` - WebSocket support
- `head-support` - Merge head tag information
- `idiomorph` - Morph-style DOM updates

### Security
Key considerations:
- Always escape user content
- `hx-disable` attribute prevents htmx processing
- `hx-history="false"` prevents caching sensitive pages
- Configuration options:
  - `selfRequestsOnly` - Restrict to same domain
  - `allowScriptTags` - Process script tags in responses
  - `allowEval` - Disable eval-dependent features

### Progressive Enhancement
- HTMX degrades gracefully when JavaScript is disabled
- Use `hx-boost` for links/forms that continue working without JavaScript
- Server-side detection via `HX-Request` header

## HTMX with TailwindCSS Integration

### Responsive Targeting
```html
<div hx-get="/data" 
     hx-target="closest .card"
     class="card bg-white dark:bg-gray-800 p-4">
```

### Conditional Swapping
```html
<div hx-get="/data" 
     hx-swap="innerHTML transition:true"
     class="transition-all duration-300">
```

### Loading States
```html
<button hx-post="/action"
        hx-indicator=".spinner"
        class="relative">
  Submit
  <span class="spinner hidden absolute inset-0 flex items-center justify-center">
    <svg class="animate-spin h-5 w-5 text-white"></svg>
  </span>
</button>
```

## HTMX with Animate.css Integration

### Animating Content on Load
Use HTMX's `load` trigger with animate.css classes for entrance animations:

```html
<!-- Trigger animation on HTMX load -->
<div hx-get="/data" 
     hx-target="#content"
     class="animate__animated animate__fadeIn">
  <div id="content">Loading...</div>
</div>
```

### Animating Content After Swap
Add animations after HTMX swaps content using hyperscript event handling:

```html
<!-- Animate element after HTMX swap -->
<div _="on htmx:afterSwap add .animate__animated.animate__fadeIn to #new-content">
  <div id="new-content" hx-get="/data"></div>
</div>
```

### Combining Transitions with Animations
Use HTMX's built-in transition feature with animate.css for smooth content updates:

```html
<div hx-get="/data" 
     hx-swap="innerHTML transition:true"
     class="animate__animated animate__fadeIn transition-all duration-300">
</div>
```

This comprehensive guide provides Qwen CLI with all the necessary information to understand, implement, and work with HTMX effectively in the UI Library project.