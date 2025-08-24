# Qwen CLI Quick Reference for UI Library Project

## Essential Commands

### Starting Development
```bash
# Start development environment
./run.sh

# Alternative Qwen CLI approach
qwen run "python3 -m http.server 8000" --background
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --watch"
```

### Stopping Development
```bash
# Kill processes on port 8000
qwen run "kill $(lsof -t -i:8000)"
```

### Git Operations
```bash
# Check status
qwen run "git status"

# Add all changes
qwen run "git add ."

# Commit changes
qwen run "git commit -m \"Your message\""

# Push to remote
qwen run "git push origin main"

# View recent commits
qwen run "git log --oneline -10"
```

### File Operations
```bash
# Read a file
qwen read_file --path "src/pages/components/alert.html"

# Create a new component file
qwen write_file --path "src/pages/components/new-component.html" --content "<div>New Component</div>"

# List directory contents
qwen list_directory --path "src/pages/components"

# Search for content across files
qwen search_file_content --pattern "hx-" --include "src/**/*.html"
```

### Component Management
```bash
# List all components
qwen run "ls src/pages/components/"

# Format HTML files
qwen run "prettier --write \"**/*.html\" --single-attribute-per-line --html-whitespace-sensitivity ignore --bracket-same-line"

# Compile Tailwind CSS
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css"

# Compile Tailwind CSS (watch mode)
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --watch"

# Compile Tailwind CSS (production)
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --minify"
```

## Project-Specific Workflows

### Creating a New Component
1. Create the component file:
   ```bash
   qwen write_file --path "src/pages/components/component-name.html" --content "<!-- Component HTML -->"
   ```

2. Add to navigation:
   ```bash
   qwen replace --path "src/pages/components/index.html" --old_string "<!-- Add new components here -->" --new_string "<a class=\"group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground\" hx-target=\"#component\" hx-trigger=\"click\" hx-swap=\"innerHTML\" hx-get=\"./pages/components/component-name.html\">Component Name</a>\n<!-- Add new components here -->"
   ```

### Analyzing Project Usage
```bash
# Find all HTMX usage
qwen search_file_content --pattern "hx-" --include "src/**/*.html"

# Find all Hyperscript usage
qwen search_file_content --pattern "_=" --include "src/**/*.html"

# Find specific Tailwind classes
qwen search_file_content --pattern "class=\"[^\"]*background[^\"]*\"" --include "src/**/*.html"
```

### Testing and Validation
```bash
# Validate HTML syntax
qwen run "find src -name '*.html' -exec xmllint --noout {} \\;"
```

## Shortcuts for Common Tasks

### Daily Development
```bash
# Start development
qwen run "./run.sh"

# Check for changes
qwen run "git status"

# Format code
qwen run "prettier --write \"**/*.html\" --single-attribute-per-line --html-whitespace-sensitivity ignore --bracket-same-line"
```

### Component Development
```bash
# Create new component
qwen write_file --path "src/pages/components/[name].html" --content "[HTML content]"

# Add to navigation
qwen replace --path "src/pages/components/index.html" --old_string "[before closing div]" --new_string "<a class=\"...\" hx-get=\"./pages/components/[name].html\">[Name]</a>\n[before closing div]"
```

### Deployment Preparation
```bash
# Compile production CSS
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --minify"

# Verify assets
qwen list_directory --path "src/assets/js"
qwen list_directory --path "src/assets/icons"
```

This quick reference provides the most commonly used Qwen CLI commands for managing this specific project.