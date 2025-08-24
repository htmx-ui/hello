# Qwen CLI Project Management Documentation

## Overview
This document provides instructions for managing and building the HTMX + Hyperscript + TailwindCSS UI Library project using Qwen CLI.

## Project Information
- **Name**: HTMX + Hyperscript + TailwindCSS UI Library
- **Type**: Static HTML/CSS/JS Component Library
- **Technologies**: HTMX, Hyperscript, TailwindCSS
- **Status**: Work in Progress (10% completed)

## Qwen CLI Commands and Workflows

### 1. Project Initialization
To initialize the project with Qwen CLI:

```bash
# Navigate to project directory
cd /home/rana/Documents/Projects/hello

# No specific initialization required as this is a static project
# Qwen CLI can work directly with the existing structure
```

### 2. Development Server Management

#### Start Development Environment
```bash
# Using the existing script
./run.sh

# Or using Qwen CLI to execute the commands separately
qwen run "python3 -m http.server 8000" --background
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --watch"
```

#### Stop Development Environment
```bash
# Kill processes on port 8000
qwen run "kill $(lsof -t -i:8000)"
```

### 3. File Operations

#### View Project Structure
```bash
qwen run "find . -type f -not -path './.git/*' | sort"
```

#### Check Modified Files
```bash
qwen run "git status"
```

#### Format HTML Files
```bash
# Using the existing prettier command
qwen run "prettier --write \"**/*.html\" --single-attribute-per-line --html-whitespace-sensitivity ignore --bracket-same-line"
```

### 4. Building and Compilation

#### Compile Tailwind CSS
```bash
# One-time compilation
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css"

# Watch mode
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --watch"

# Production build (minified)
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --minify"
```

### 5. Git Operations

#### Auto Commit Script
```bash
# Start the auto committer
qwen run "./commiter.sh"

# Manual commit process
qwen run "git add ."
qwen run "git commit -m \"Your commit message\""
qwen run "git push origin main"
```

#### Check Git Status
```bash
qwen run "git status"
qwen run "git log --oneline -10"
```

### 6. Component Management

#### Add New Component
```bash
# Create a new component file
qwen write_file --path "src/pages/components/new-component.html" --content "<!-- Component HTML -->"

# Add to components index
qwen replace --path "src/pages/components/index.html" --old_string "<!-- Insert new component link here -->" --new_string "<a class=\"group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground\" hx-target=\"#component\" hx-trigger=\"click\" hx-swap=\"innerHTML\" hx-get=\"./pages/components/new-component.html\">New Component</a>
<!-- Insert new component link here -->"
```

#### List All Components
```bash
qwen run "ls src/pages/components/"
```

### 7. Project Analysis

#### Find Components Using HTMX
```bash
qwen search_file_content --pattern "hx-" --include "src/**/*.html"
```

#### Find Components Using Hyperscript
```bash
qwen search_file_content --pattern "_=" --include "src/**/*.html"
```

#### Find Tailwind Classes
```bash
qwen search_file_content --pattern "class=\"[^\"]*\"" --include "src/**/*.html"
```

### 8. Testing

#### Validate HTML Files
```bash
# Check for basic HTML syntax
qwen run "find src -name '*.html' -exec xmllint --noout {} \\;"
```

#### Check Links
```bash
# Verify internal links work
qwen run "python3 -m http.server 8000" --background
# Then manually test in browser or use curl
qwen run "curl -f http://localhost:8000/src/"
```

### 9. Deployment

#### Prepare for Deployment
```bash
# Compile production CSS
qwen run "npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --minify"

# Ensure all assets are in place
qwen run "ls src/assets/js/"
qwen run "ls src/assets/icons/"
```

## Qwen CLI Project Commands

### File Management
- `qwen read_file --path <file>`: Read any file in the project
- `qwen write_file --path <file> --content <content>`: Create new files
- `qwen replace --path <file> --old_string <old> --new_string <new>`: Modify existing files
- `qwen list_directory --path <directory>`: List directory contents

### Search and Analysis
- `qwen search_file_content --pattern <regex>`: Search for patterns in files
- `qwen glob --pattern <glob>`: Find files matching patterns
- `qwen read_many_files --paths <paths>`: Read multiple files at once

### Execution
- `qwen run --command <command>`: Execute shell commands
- `qwen run --command <command> --background`: Execute background processes

## Recommended Qwen CLI Workflow

### Daily Development
1. Start development environment:
   ```bash
   qwen run "./run.sh"
   ```

2. Make code changes using file operations

3. Check status:
   ```bash
   qwen run "git status"
   ```

4. Format code:
   ```bash
   qwen run "prettier --write \"**/*.html\" --single-attribute-per-line --html-whitespace-sensitivity ignore --bracket-same-line"
   ```

5. Commit changes:
   ```bash
   qwen run "git add ."
   qwen run "git commit -m \"Description of changes\""
   qwen run "git push origin main"
   ```

### Adding New Components
1. Create component file:
   ```bash
   qwen write_file --path "src/pages/components/component-name.html" --content "<!-- Component markup -->"
   ```

2. Add to navigation:
   ```bash
   qwen replace --path "src/pages/components/index.html" --old_string "<!-- Add new components here -->" --new_string "<a class=\"...\" hx-get=\"./pages/components/component-name.html\">Component Name</a>
<!-- Add new components here -->"
   ```

3. Test component by navigating to it in the running development environment

### Project Analysis
1. Find all HTMX usage:
   ```bash
   qwen search_file_content --pattern "hx-" --include "src/**/*.html"
   ```

2. Find all Hyperscript usage:
   ```bash
   qwen search_file_content --pattern "_=" --include "src/**/*.html"
   ```

3. List all components:
   ```bash
   qwen run "ls src/pages/components/"
   ```

This documentation provides a comprehensive guide for managing and building the project using Qwen CLI commands and workflows.