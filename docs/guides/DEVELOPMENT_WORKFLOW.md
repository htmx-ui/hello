# Development Workflow Documentation

## Overview
This document describes the development workflow for the Hello UI - HTMX + Hyperscript + TailwindCSS Component Library project.

## Prerequisites
- Node.js (for Tailwind CSS)
- Python 3 (for development server)
- Tailwind CSS CLI

## Development Environment Setup

### 1. Install Tailwind CSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```

### 2. Install Prettier (for HTML formatting)
```bash
npm install -D prettier
```

## Development Workflow

### Starting the Development Server
The project includes a convenient script to start the development environment:

```bash
./run.sh
```

This script:
1. Starts the auto committer in the background
2. Kills any process using port 8000
3. Starts a Python HTTP server on port 8000
4. Opens the browser to http://localhost:8000/src/
5. Runs Tailwind CSS in watch mode to compile CSS

### Manual Development Commands
If you prefer to run commands manually:

1. Start the development server:
```bash
python3 -m http.server 8000
```

2. Compile Tailwind CSS (one-time):
```bash
npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css
```

3. Compile Tailwind CSS (watch mode):
```bash
npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --watch
```

## Auto Commit System
The project includes an auto-commit script (`commiter.sh`) that:
- Checks for changes every 10 minutes
- Formats HTML files with Prettier
- Commits and pushes changes automatically

To run it manually:
```bash
./commiter.sh
```

## Code Formatting
The project uses Prettier for HTML formatting with specific settings:
- Single attribute per line
- HTML whitespace sensitivity ignored
- Bracket same line

To format files manually:
```bash
prettier --write "**/*.html" --single-attribute-per-line --html-whitespace-sensitivity ignore --bracket-same-line
```

## Building for Production
To build the project for production:

1. Compile Tailwind CSS with minification:
```bash
npx tailwindcss -i ./main.css -o ./src/assets/css/tailwindcss.css --minify
```

2. Ensure all HTMX and Hyperscript files are in place in the `src/assets/js/` directory

## Adding New Components
To add a new component to the library:

1. Create a new HTML file in `src/pages/components/`
2. Follow the existing component structure pattern
3. Add a link to the component in `src/pages/components/index.html`
4. Test the component by running the development server

## HTMX and Hyperscript Usage
The project uses HTMX for dynamic interactions and Hyperscript for event handling:

- HTMX attributes are used for AJAX requests and DOM updates
- Hyperscript is used for client-side event handling and DOM manipulation
- Components are loaded dynamically without full page refreshes

## Tailwind CSS Configuration
The project uses a custom Tailwind configuration with:

- Dark mode support using the 'class' strategy
- Custom color palette with CSS variables
- Extended spacing and animation utilities
- Container configuration with custom breakpoints

## Testing
Since this is a static HTML/CSS/JS project, testing involves:

1. Visual inspection in the browser
2. Checking responsive behavior on different screen sizes
3. Verifying HTMX interactions work correctly
4. Testing dark/light mode functionality