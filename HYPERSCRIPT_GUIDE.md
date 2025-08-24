# Hyperscript Comprehensive Guide for Qwen CLI

## Overview
Hyperscript is a scripting language for front-end web development that emphasizes "Locality of Behavior" - keeping behavior close to the elements they affect. This guide provides everything Qwen CLI needs to understand and implement hyperscript effectively in the HTMX + TailwindCSS UI Library project.

## Core Concepts

### 1. Hyperscript Attributes
Hyperscript code can be placed in any of these attributes:
- `_` (primary attribute)
- `script`
- `data-script`

Example:
```html
<button _="on click toggle .red on me">Click Me</button>
```

### 2. Basic Syntax Structure
```
[feature] [command] [expression]
```

Where:
- **Feature**: Defines what triggers the behavior (e.g., `on click`)
- **Command**: What action to take (e.g., `toggle`, `add`, `remove`)
- **Expression**: What to act upon (e.g., `.class`, `#id`, `me`)

## Essential Commands

### DOM Manipulation Commands

| Command | Description | Example |
|---------|-------------|---------|
| `add` | Add classes, attributes, or properties | `add .hidden to #element` |
| `remove` | Remove classes, attributes, or properties | `remove .hidden from me` |
| `toggle` | Toggle classes or attributes | `toggle .active on me` |
| `set` | Set property values | `set @disabled to 'true'` |
| `put` | Put content into properties | `put 'Hello' into my innerHTML` |
| `show` | Show elements | `show me` |
| `hide` | Hide elements | `hide me` |

### Event Handling Commands

| Command | Description | Example |
|---------|-------------|---------|
| `on` | Event handler | `on click add .active to me` |
| `send` | Send events to elements | `send customEvent to #target` |
| `trigger` | Trigger events | `trigger click on me` |
| `wait for` | Wait for events | `wait for load from #image` |

### Control Flow Commands

| Command | Description | Example |
|---------|-------------|---------|
| `if`/`unless` | Conditional execution | `if my value is not empty remove .error from me` |
| `repeat` | Looping | `repeat 3 times put 'Hello' into me` |
| `wait` | Time delays | `wait 2s then add .visible to me` |

## Common Expressions

### Element References
| Expression | Description |
|------------|-------------|
| `me`, `my`, `I` | Current element |
| `.class` | Elements with class |
| `#id` | Element with ID |
| `<css-selector/>` | CSS selector |
| `first`, `last`, `next`, `previous` | Positional selectors |

### Value References
| Expression | Description |
|------------|-------------|
| `my property` | Property of current element |
| `@attribute` | Attribute value |
| `$global` | Global variable |
| `:local` | Element-scoped variable |

## Variables and Scoping

### Variable Declaration
```hyperscript
set $globalVar to 'value'     -- Global scope
set :elementVar to 'value'    -- Element scope
set localVar to 'value'       -- Feature scope (default)
```

### Attribute Access
```hyperscript
set @disabled to 'true'       -- Set attribute
put @value into $variable     -- Get attribute
```

## Event Handling Patterns

### Basic Event Handling
```html
<button _="on click toggle .hidden on #content">
  Toggle Content
</button>
```

### Event Filters
```html
<input _="on keyup[key is 'Escape'] hide me" />
```

### Event Data Destructuring
```html
<button _="on click(x, y) log x, y">
  Click with coordinates
</button>
```

### Queuing Options
```html
<button _="on click queue none send request">No Queue</button>
<button _="on click queue all send request">Queue All</button>
<button _="on click queue first send request">Queue First</button>
<button _="on click queue last send request">Queue Last</button>
```

## Control Flow

### Conditionals
```hyperscript
-- Natural language operators
if my value is empty add .error to me
if my value is not empty remove .error from me
unless my value matches /[0-9]+/ add .invalid to me
```

### Loops
```hyperscript
repeat for item in ['a', 'b', 'c']
  put item into me then wait 1s
end

repeat while $count < 10
  increment $count
end

repeat 5 times
  log 'Iteration: ' + loop.index
end
```

## Asynchronous Operations

### Time Delays
```hyperscript
wait 2s then add .visible to me
```

### Waiting for Events
```hyperscript
wait for load from #image then show me
wait for click or 5s then hide me
```

### Working with Promises
```hyperscript
-- Hyperscript automatically resolves promises
fetch /api/data then put it into #content

-- Explicit async (don't wait for result)
async call myFunction()
```

## JavaScript Integration

### Calling JavaScript Functions
```hyperscript
call alert('Hello World')
call console.log('Message')
```

### Inline JavaScript
```hyperscript
js
  return document.title
end

js(title)
  document.title = title
end
```

## Common Patterns for HTMX + TailwindCSS Projects

### 1. Theme Toggling
```html
<button _="on click toggle .dark on <html/>">
  Toggle Dark Mode
</button>
```

### 2. Loading States
```html
<button _="on click 
         add .opacity-50 to me 
         set @disabled to 'true' 
         fetch /api/data 
         put 'Loaded' into me 
         remove .opacity-50 from me 
         remove @disabled">
  Load Data
</button>
```

### 3. Form Validation
```html
<input type="email" 
       _="on keyup 
          if my value matches /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
            remove .border-red-500 from me 
            add .border-green-500 to me 
          else 
            remove .border-green-500 from me 
            add .border-red-500 to me">
```

### 4. Modal Management
```html
<button _="on click toggle .hidden on #modal">
  Open Modal
</button>
<div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50">
  <div class="modal-content">
    <button _="on click toggle .hidden on #modal">Close</button>
  </div>
</div>
```

### 5. Collapsible Sections
```html
<button _="on click 
         toggle .hidden on the next <div/> 
         toggle .rotate-180 on the <svg/> in me">
  Toggle Content
</button>
<div class="hidden">Content</div>
```

### 6. Tab Navigation
```html
<div _="on click from .tab 
         remove .active from .tab 
         add .active to target 
         hide .tab-content 
         show #content-{target@data-tab}">
  <button class="tab" data-tab="1">Tab 1</button>
  <button class="tab" data-tab="2">Tab 2</button>
  
  <div id="content-1" class="tab-content">Content 1</div>
  <div id="content-2" class="tab-content hidden">Content 2</div>
</div>
```

### 7. Animation Sequences
```html
<div _="on click 
       add .animate-pulse then settle 
       remove .animate-pulse then wait 100ms 
       add .animate-bounce then settle 
       remove .animate-bounce">
  Animated Element
</div>
```

## Best Practices

### 1. Keep Scripts Short and Focused
```html
<!-- Good -->
<button _="on click toggle .hidden on #menu">
  Menu
</button>

<!-- Avoid complex logic in attributes -->
<button _="on click 
         if $user is authenticated 
           send openDashboard to #app 
         else 
           send openLogin to #modal">
  Dashboard
</button>
```

### 2. Use Functions for Reusable Logic
```html
<script type="text/hyperscript">
  def toggleVisibility target
    toggle .hidden on target
  end
</script>

<button _="on click call toggleVisibility(#menu)">
  Toggle Menu
</button>
```

### 3. Leverage CSS Transitions with Settle
```html
<div _="on click 
       add .scale-110 then settle 
       remove .scale-110">
  Smooth Scale
</div>
```

## Debugging Tips

### 1. Use Log Statements
```hyperscript
<button _="on click 
         log 'Button clicked' 
         log my value 
         log $globalVar">
  Debug Button
</button>
```

### 2. Error Handling
```hyperscript
on click 
  try
    fetch /api/data then put it into #content
  catch error
    log 'Error: ' + error
    put 'Error loading data' into #content
  end
```

## Integration with HTMX

### 1. Event Coordination
```html
<button _="on click send requestData to #api"
        hx-post="/api/data"
        hx-target="#content">
  Load Data
</button>
```

### 2. Response Handling
```html
<div _="on htmx:afterRequest 
         if event.detail.successful 
           add .success to me 
         else 
           add .error to me">
  Content Area
</div>
```

This comprehensive guide provides Qwen CLI with all the necessary information to understand, implement, and work with hyperscript effectively in the HTMX + TailwindCSS UI Library project.