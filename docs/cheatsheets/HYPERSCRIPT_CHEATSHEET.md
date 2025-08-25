# Hyperscript Cheatsheet for Qwen CLI

## Basic Syntax
```html
<button _="feature command expression">Click Me</button>
```

## Core Features
| Feature | Description | Example |
|---------|-------------|---------|
| `on event` | Event handler | `on click toggle .active on me` |
| `def` | Function definition | `def myFunction() add .red to me end` |
| `set` | Variable assignment | `set $var to 'value'` |

## Common Commands
| Command | Description | Example |
|---------|-------------|---------|
| `add` | Add classes/attributes | `add .hidden to #element` |
| `remove` | Remove classes/attributes | `remove .hidden from me` |
| `toggle` | Toggle classes/attributes | `toggle .active on me` |
| `set` | Set property/attribute | `set @disabled to 'true'` |
| `put` | Put content into property | `put 'text' into my innerHTML` |
| `show`/`hide` | Show/hide elements | `show me` |
| `send` | Send events | `send customEvent to #target` |
| `wait` | Time delays | `wait 2s then add .visible` |
| `log` | Debug output | `log my value` |

## Element References
| Reference | Description |
|-----------|-------------|
| `me`, `my`, `I` | Current element |
| `.class` | Elements with class |
| `#id` | Element with ID |
| `<css-selector/>` | CSS selector |
| `first`, `last`, `next`, `previous` | Positional selectors |

## Variables & Scoping
| Prefix | Scope |
|--------|-------|
| `$var` | Global |
| `:var` | Element |
| `var` | Local (default) |

## Event Handling
```html
<!-- Basic -->
<button _="on click add .active to me">

<!-- With filters -->
<input _="on keyup[key is 'Enter'] submit me">

<!-- With data destructuring -->
<button _="on click(x, y) log x, y">

<!-- Queuing options -->
<button _="on click queue none send request">
```

## Control Flow
```hyperscript
-- Conditionals
if my value is empty add .error
unless my value matches /pattern/ add .invalid

-- Loops
repeat for item in [1,2,3] log item
repeat 5 times log loop.index
repeat while $count < 10 increment $count

-- Async
wait 2s then add .visible
wait for click or 5s then hide me
```

## JavaScript Integration
```hyperscript
-- Call JS functions
call alert('Hello')
call console.log(my value)

-- Inline JS
js return 'Hello' end
js(name) document.title = name end
```

## Common Patterns for HTMX + TailwindCSS

### Theme Toggling
```html
<button _="on click toggle .dark on <html/>">
```

### Loading States
```html
<button _="on click 
         add .opacity-50 
         set @disabled to 'true' 
         fetch /api/data 
         remove .opacity-50 
         remove @disabled">
```

### Form Validation
```html
<input _="on keyup 
         if my value matches /pattern/ 
           remove .error 
         else 
           add .error">
```

### Modal Management
```html
<button _="on click toggle .hidden on #modal">
<div id="modal" class="hidden">Content</div>
```

### Collapsible Sections
```html
<button _="on click toggle .hidden on the next <div/>">
<div class="hidden">Content</div>
```

## Debugging
```hyperscript
-- Log values
log my value
log $globalVar
log 'Debug message'

-- Error handling
try
  fetch /api/data
catch error
  log error
end
```

## Best Practices
1. Keep scripts short and focused
2. Use functions for reusable logic
3. Leverage CSS transitions with `settle`
4. Use natural language operators (`is`, `is not`, `matches`)
5. Combine with HTMX for powerful interactions

This cheatsheet provides a quick reference for all essential hyperscript functionality that can be used with Qwen CLI.