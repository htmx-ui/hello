# Project Structure Documentation

## Overview
This document describes the structure and organization of the HTMX + Hyperscript + TailwindCSS UI Library project.

## Directory Structure
```
hello/
├── src/
│   ├── index.html (Main entry point)
│   ├── assets/
│   │   ├── css/
│   │   ├── icons/ (SVG icon collection)
│   │   ├── img/
│   │   ├── js/ (htmx.js, hyperscript.js)
│   │   └── svg/
│   ├── pages/
│   │   ├── blocks/
│   │   ├── charts/
│   │   ├── components/ (Individual component files)
│   │   └── ... (other page categories)
│   └── partials/ (navbar.html, footer.html)
├── tailwind.config.js (Tailwind configuration)
├── main.css (Tailwind directives and custom CSS variables)
├── run.sh (Development server script)
├── commiter.sh (Auto-commit script)
└── README.md
```

## Key Directories and Files

### Root Directory
- `README.md`: Project overview and documentation
- `main.css`: Main CSS file with Tailwind directives and custom variables
- `tailwind.config.js`: Tailwind CSS configuration
- `run.sh`: Development server startup script
- `commiter.sh`: Automatic git commit and push script

### src/ Directory
The main source directory containing all HTML files and assets.

#### src/index.html
The main entry point of the application that loads:
- Navbar partial
- Home page content
- Footer partial
- HTMX and Hyperscript libraries

#### src/assets/
Contains static assets used throughout the application:
- `js/`: JavaScript libraries (htmx.js, hyperscript.js)
- `icons/`: SVG icons collection (over 200 icons)
- `css/`: Compiled CSS files
- `img/`: Image assets
- `svg/`: SVG graphics

#### src/partials/
Reusable HTML components:
- `navbar.html`: Main navigation bar with dark mode toggle
- `footer.html`: Site footer

#### src/pages/
Organized by functionality:
- `components/`: Individual UI components (alert.html, button.html, etc.)
- `blocks/`: Larger UI blocks
- `charts/`: Chart components
- `examples/`: Example implementations
- `themes/`: Theme-related pages

## Component Organization
Each component is implemented as a standalone HTML file containing:
- TailwindCSS classes for styling
- HTMX attributes for dynamic behavior
- Hyperscript for event handling
- Self-contained functionality

## Navigation System
The application uses HTMX for client-side navigation:
- Navbar links load content into the `#page` or `#component` containers
- Components are loaded dynamically without full page refreshes