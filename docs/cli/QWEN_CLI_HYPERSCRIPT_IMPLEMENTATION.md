# Hyperscript Implementation Guide for Qwen CLI

## Overview
This guide provides specific instructions for implementing hyperscript patterns in the HTMX + TailwindCSS UI Library using Qwen CLI commands.

## Qwen CLI Commands for Hyperscript Development

### 1. Finding Hyperscript Usage
```bash
# Find all hyperscript attributes in the project
qwen search_file_content --pattern "_=" --include "src/**/*.html"

# Find specific hyperscript patterns
qwen search_file_content --pattern "on click" --include "src/**/*.html"
qwen search_file_content --pattern "toggle" --include "src/**/*.html"
qwen search_file_content --pattern "add.*to" --include "src/**/*.html"
```

### 2. Creating Components with Hyperscript
```bash
# Create a new component with hyperscript
qwen write_file --path "src/pages/components/hyperscript-example.html" --content "<div _=\"on click toggle .bg-blue-500 on me\">Click me</div>"
```

### 3. Modifying Existing Hyperscript
```bash
# Replace hyperscript patterns
qwen replace --path "src/pages/components/alert.html" --old_string "old hyperscript code" --new_string "new hyperscript code"

# Add hyperscript to existing elements
qwen replace --path "src/pages/components/button.html" --old_string "<button class=\"btn\">" --new_string "<button class=\"btn\" _=\"on click add .active to me\">"
```

## Common Implementation Patterns

### 1. Event Handling Implementation
```bash
# Add click handlers to buttons
qwen search_file_content --pattern "<button" --include "src/**/*.html"
# Then modify buttons to include hyperscript event handlers
```

### 2. Theme Switching Implementation
```bash
# Find theme-related components
qwen search_file_content --pattern "dark" --include "src/**/*.html"

# Add theme switching to elements
qwen replace --path "src/partials/navbar.html" --old_string "<button" --new_string "<button _=\"on click toggle .dark on <html/>\""
```

### 3. Form Validation Implementation
```bash
# Find form elements
qwen search_file_content --pattern "<input" --include "src/**/*.html"

# Add validation hyperscript
qwen replace --path "src/pages/components/form.html" --old_string "<input type=\"email\">" --new_string "<input type=\"email\" _=\"on keyup if my value matches /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ remove .border-red-500 from me else add .border-red-500 to me\">"
```

## Advanced Qwen CLI Workflows

### 1. Batch Hyperscript Implementation
```bash
# Find all elements that could benefit from hyperscript
qwen search_file_content --pattern "<div class=\"accordion" --include "src/**/*.html"

# Create a script to add hyperscript to all accordion elements
qwen write_file --path "/tmp/accordion-hyperscript.sh" --content "#!/bin/bash
# Script to add hyperscript to accordion elements"

# Run the script
qwen run --command "bash /tmp/accordion-hyperscript.sh"
```

### 2. Hyperscript Pattern Analysis
```bash
# Analyze current hyperscript usage
qwen run --command "grep -r '_=' src/ | wc -l"  # Count hyperscript attributes
qwen run --command "grep -r '_=' src/ | cut -d'_' -f2 | sort | uniq -c"  # Common patterns
```

### 3. Component Template Generation
```bash
# Create a template for new components with hyperscript
qwen write_file --path "/tmp/component-template.html" --content "<div class=\"component-wrapper\">
  <button _=\"on click toggle .hidden on #content\">
    Toggle Content
  </button>
  <div id=\"content\" class=\"hidden\">
    <!-- Component content -->
  </div>
</div>"
```

## Hyperscript Pattern Library

### 1. Toggle Patterns
```html
<!-- Simple toggle -->
<div _="on click toggle .active on me">

<!-- Toggle with multiple classes -->
<div _="on click toggle .hidden .opacity-0 on #element">

<!-- Toggle with sibling targeting -->
<button _="on click toggle .hidden on the next <div/>">
```

### 2. State Management Patterns
```html
<!-- Loading states -->
<button _="on click 
         add .opacity-50 to me 
         set @disabled to 'true' 
         fetch /api/data 
         remove .opacity-50 from me 
         remove @disabled">

<!-- Form validation -->
<input _="on keyup 
         if my value is not empty 
           remove .border-red-500 from me 
         else 
           add .border-red-500 to me">
```

### 3. Animation Patterns
```html
<!-- Simple animation -->
<div _="on click 
       add .animate-pulse then settle 
       remove .animate-pulse">

<!-- Sequential animations -->
<div _="on click 
       add .scale-110 then settle 
       remove .scale-110 then wait 100ms 
       add .rotate-180 then settle 
       remove .rotate-180">
```

### 4. Navigation Patterns
```html
<!-- Tab navigation -->
<div _="on click from .tab 
         remove .active from .tab 
         add .active to target 
         hide .tab-content 
         show #content-{target@data-tab}">
```

## Testing Hyperscript Implementation

### 1. Validation Commands
```bash
# Check for syntax errors
qwen run --command "grep -r '_=' src/ | grep -v 'on\\|add\\|remove\\|toggle\\|set\\|put\\|show\\|hide'"

# Validate hyperscript patterns
qwen search_file_content --pattern "_=\"[^\"]*\"" --include "src/**/*.html"
```

### 2. Functionality Testing
```bash
# Create test components
qwen write_file --path "src/pages/components/test-hyperscript.html" --content "<!-- Test various hyperscript patterns -->"

# Run development server to test
qwen run --command "./run.sh"
```

## Refactoring with Qwen CLI

### 1. Identifying Refactoring Opportunities
```bash
# Find JavaScript-based interactions that could be replaced with hyperscript
qwen search_file_content --pattern "onclick|addEventListener" --include "src/**/*.html"

# Find complex CSS classes that could be managed with hyperscript
qwen search_file_content --pattern "class=\"[^\"]*{5,}" --include "src/**/*.html"
```

### 2. Automated Refactoring
```bash
# Replace JavaScript click handlers with hyperscript
qwen replace --path "src/pages/components/button.html" --old_string "onclick=\"toggleClass()\"" --new_string "_=\"on click toggle .active on me\""

# Consolidate complex class manipulations
qwen replace --path "src/pages/components/menu.html" --old_string "class=\"menu hidden opacity-0 transform translate-y-2\"" --new_string "class=\"menu\" _=\"on click toggle .hidden .opacity-0 .translate-y-2 on me\""
```

## Best Practices for Qwen CLI Implementation

### 1. Incremental Implementation
```bash
# Start with simple patterns
qwen search_file_content --pattern "toggle" --include "src/**/*.html"

# Gradually implement more complex patterns
qwen search_file_content --pattern "repeat|wait|async" --include "src/**/*.html"
```

### 2. Pattern Documentation
```bash
# Document implemented patterns
qwen write_file --path "HYPERSCRIPT_PATTERNS_USED.md" --content "# Hyperscript Patterns Implemented

1. Toggle patterns
2. State management
3. Animation sequences"
```

### 3. Code Quality Checks
```bash
# Ensure consistency
qwen search_file_content --pattern "_=\"on" --include "src/**/*.html"

# Check for proper event handling
qwen search_file_content --pattern "_=\"on click" --include "src/**/*.html"
```

This guide provides Qwen CLI with specific workflows and commands for implementing hyperscript effectively in the project.