# HTMX Implementation Guide for Qwen CLI

## Overview
This guide provides specific instructions for implementing HTMX patterns in the HTMX + Hyperscript + TailwindCSS UI Library using Qwen CLI commands.

## Qwen CLI Commands for HTMX Development

### 1. Finding HTMX Usage
```bash
# Find all HTMX attributes in the project
qwen search_file_content --pattern "hx-" --include "src/**/*.html"

# Find specific HTMX patterns
qwen search_file_content --pattern "hx-get" --include "src/**/*.html"
qwen search_file_content --pattern "hx-post" --include "src/**/*.html"
qwen search_file_content --pattern "hx-trigger" --include "src/**/*.html"
```

### 2. Creating Components with HTMX
```bash
# Create a new component with HTMX
qwen write_file --path "src/pages/components/htmx-example.html" --content "<div hx-get=\"/api/data\" hx-trigger=\"load\" hx-target=\"#content\"><div id=\"content\">Loading...</div></div>"
```

### 3. Modifying Existing HTMX
```bash
# Replace HTMX patterns
qwen replace --path "src/pages/components/search.html" --old_string "old htmx code" --new_string "new htmx code"

# Add HTMX to existing elements
qwen replace --path "src/pages/components/button.html" --old_string "<button>" --new_string "<button hx-post=\"/api/click\">"
```

## Common Implementation Patterns

### 1. Search Implementation
```bash
# Find search-related components
qwen search_file_content --pattern "search" --include "src/**/*.html"

# Add active search functionality
qwen replace --path "src/pages/components/search.html" --old_string "<input type=\"text\">" --new_string "<input type=\"text\" hx-get=\"/search\" hx-trigger=\"keyup changed delay:500ms\" hx-target=\"#search-results\">"
```

### 2. Form Handling Implementation
```bash
# Find form elements
qwen search_file_content --pattern "<form" --include "src/**/*.html"

# Add HTMX form handling
qwen replace --path "src/pages/components/contact-form.html" --old_string "<form>" --new_string "<form hx-post=\"/contact\" hx-target=\"#form-response\">"
```

### 3. Polling Implementation
```bash
# Add polling to status components
qwen replace --path "src/pages/components/status.html" --old_string "<div>" --new_string "<div hx-get=\"/status\" hx-trigger=\"every 30s\">"
```

## Advanced Qwen CLI Workflows

### 1. Batch HTMX Implementation
```bash
# Find all elements that could benefit from HTMX
qwen search_file_content --pattern "<button" --include "src/**/*.html"

# Create a script to add HTMX to all button elements
qwen write_file --path "/tmp/button-htmx.sh" --content "#!/bin/bash
# Script to add HTMX to button elements"

# Run the script
qwen run --command "bash /tmp/button-htmx.sh"
```

### 2. HTMX Pattern Analysis
```bash
# Analyze current HTMX usage
qwen run --command "grep -r 'hx-' src/ | wc -l"  # Count HTMX attributes
qwen run --command "grep -r 'hx-' src/ | cut -d'-' -f2 | sort | uniq -c"  # Common patterns
```

### 3. Component Template Generation
```bash
# Create a template for new components with HTMX
qwen write_file --path "/tmp/component-template.html" --content "<div class=\"component-wrapper\">
  <button hx-get=\"/api/toggle\" hx-target=\"#content\">
    Toggle Content
  </button>
  <div id=\"content\">
    <!-- Component content -->
  </div>
</div>"
```

## HTMX Pattern Library

### 1. Dynamic Content Loading
```html
<!-- Load content on page load -->
<div hx-get="/content" hx-trigger="load"></div>

<!-- Load content when revealed -->
<div hx-get="/content" hx-trigger="revealed"></div>

<!-- Load content with delay -->
<div hx-get="/content" hx-trigger="load delay:1s"></div>
```

### 2. Form Submission Patterns
```html
<!-- Basic form submission -->
<form hx-post="/submit" hx-target="#result">
  <input name="email" type="email">
  <button>Submit</button>
</form>
<div id="result"></div>

<!-- Form with validation -->
<form hx-post="/validate" hx-target="#errors" hx-swap="innerHTML">
  <input name="username" required>
  <button>Validate</button>
</form>
<div id="errors"></div>
```

### 3. Interactive Elements
```html
<!-- Click to load -->
<button hx-get="/details" hx-target="#details">Show Details</button>
<div id="details"></div>

<!-- Hover to load -->
<div hx-get="/tooltip" hx-trigger="mouseenter" hx-swap="outerHTML"></div>

<!-- Polling for updates -->
<div hx-get="/updates" hx-trigger="every 30s"></div>
```

### 4. Search and Filter Patterns
```html
<!-- Active search -->
<input hx-get="/search" 
       hx-trigger="keyup changed delay:500ms" 
       hx-target="#results"
       name="q">
<div id="results"></div>

<!-- Filter with select -->
<select hx-get="/filter" 
        hx-trigger="change" 
        hx-target="#content"
        name="category">
  <option value="all">All</option>
  <option value="tech">Tech</option>
</select>
<div id="content"></div>
```

## Testing HTMX Implementation

### 1. Validation Commands
```bash
# Check for syntax errors
qwen run --command "grep -r 'hx-' src/ | grep -v 'hx-get\\|hx-post\\|hx-put\\|hx-patch\\|hx-delete\\|hx-trigger\\|hx-target\\|hx-swap'"

# Validate HTMX patterns
qwen search_file_content --pattern "hx-\"[^\"]*\"" --include "src/**/*.html"
```

### 2. Functionality Testing
```bash
# Create test components
qwen write_file --path "src/pages/components/test-htmx.html" --content "<!-- Test various HTMX patterns -->"

# Run development server to test
qwen run --command "./run.sh"
```

## Refactoring with Qwen CLI

### 1. Identifying Refactoring Opportunities
```bash
# Find traditional links that could use boosting
qwen search_file_content --pattern "<a href=" --include "src/**/*.html"

# Find forms that could benefit from HTMX
qwen search_file_content --pattern "<form" --include "src/**/*.html"
```

### 2. Automated Refactoring
```bash
# Add boosting to navigation links
qwen replace --path "src/partials/navbar.html" --old_string "<a href=" --new_string "<a href= hx-boost=\"true\""

# Convert form submissions to HTMX
qwen replace --path "src/pages/components/contact.html" --old_string "<form action=" --new_string "<form hx-post="
```

## Best Practices for Qwen CLI Implementation

### 1. Incremental Implementation
```bash
# Start with simple patterns
qwen search_file_content --pattern "hx-get" --include "src/**/*.html"

# Gradually implement more complex patterns
qwen search_file_content --pattern "hx-sync\\|hx-include" --include "src/**/*.html"
```

### 2. Pattern Documentation
```bash
# Document implemented patterns
qwen write_file --path "HTMX_PATTERNS_USED.md" --content "# HTMX Patterns Implemented

1. Dynamic content loading
2. Form submission
3. Active search"
```

### 3. Code Quality Checks
```bash
# Ensure consistency
qwen search_file_content --pattern "hx-get=" --include "src/**/*.html"

# Check for proper targeting
qwen search_file_content --pattern "hx-target=" --include "src/**/*.html"
```

### 4. Performance Optimization
```bash
# Add throttling to high-frequency triggers
qwen replace --path "src/pages/components/search.html" --old_string "keyup" --new_string "keyup throttle:500ms"

# Implement proper loading indicators
qwen search_file_content --pattern "htmx-indicator" --include "src/**/*.html"
```

## Integration with Hyperscript

### 1. Combined HTMX + Hyperscript Patterns
```html
<!-- HTMX for data loading, Hyperscript for UI updates -->
<button hx-get="/data" 
        hx-target="#content"
        _="on htmx:afterSwap add .loaded to me">
  Load Data
</button>
<div id="content"></div>
```

### 2. Event Coordination
```html
<!-- Send HTMX events from Hyperscript -->
<button _="on click send requestData to #api"
        hx-post="/api/data"
        hx-target="#content">
  Load Data
</button>
```

This guide provides Qwen CLI with specific workflows and commands for implementing HTMX effectively in the project.