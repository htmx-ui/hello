# Project Rules - No NPM Installation

This project is designed to be as simple as possible without any build tools or package managers.
The following rules must be followed to maintain the project's simplicity:

1. DO NOT run `npm install` or any other package manager commands
2. DO NOT create package.json or package-lock.json files
3. DO NOT add node_modules directory
4. All dependencies must be included directly in the project assets
5. Use only vanilla HTML, CSS, and JavaScript with HTMX and Hyperscript
6. Tailwind CSS can be used via:
   - Global CLI installation (tailwindcss command)
   - CDN links in HTML
   - Pre-compiled CSS files in the assets directory
7. All scripts and stylesheets must be included via <script> and <link> tags

## Reasoning

This project follows the "Vanilla First" approach:
- No build step required for development
- No dependencies to manage through package managers
- Faster loading times
- Easier to understand and maintain
- Works without Node.js or any build tools
- Can be deployed by simply copying files to a web server

## What to do instead of npm

1. For CSS libraries like Tailwind:
   - Use global CLI installation (as in this project)
   - Use CDN links in HTML
   - Include pre-compiled CSS files in the assets directory

2. For JavaScript libraries like HTMX and Hyperscript:
   - Download the minified JS files and include them in the assets/js directory
   - Use CDN links in HTML

3. For any additional functionality:
   - Write vanilla JavaScript
   - Include small utility scripts directly in the project

## Global Dependencies

The following tools are expected to be installed globally:
- Python 3 (for development server)
- Tailwind CSS CLI (for CSS compilation)