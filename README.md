# HTMX + Hyperscript + TailwindCSS UI Library

Welcome to my HTMX, Hyperscript, and TailwindCSS UI library! This project is inspired by popular UI frameworks such as **Headless UI**, **ShadCN**, and **Skeleton UI**. Designed to be **completely free**, this library allows you to **copy and paste** every component with ease, enabling fast and efficient web development.

[Demo](https://ar-92.github.io/UI/src/index)

> **Status**: 🚧 Work in Progress - Continuously evolving

## Why This Library?

### 1. **Pure Simplicity**
   - Every UI component is crafted with simplicity in mind, utilizing **HTMX** for dynamic interactions, **Hyperscript** for event handling, and **TailwindCSS** for styling.
   - No unnecessary complexity—just **minimal code** to get you the result you want.

### 2. **Copy-Paste Friendly**
   - Our library is all about speed and convenience. Every element is **copy-pasteable** so you can integrate components directly into your projects without any hassle.
   - Forget about complex setups or configurations. Just grab what you need and start building!

### 3. **Inspired by the Best**
   - Drawing inspiration from **Headless UI**, **ShadCN**, and **Skeleton UI**, this library takes the best practices from these frameworks and offers them in a streamlined package.
   - Whether you're looking for flexibility, accessibility, or beautiful design, this library delivers a balanced blend of all three.

### 4. **Tailored for TailwindCSS**
   - TailwindCSS makes it easy to customize and theme components to fit your brand or project's design language. With this UI library, you get **pre-built components** ready to adapt to any style.
   - From buttons and forms to advanced modals and grids, everything is built with utility-first CSS in mind.

### 5. **Dynamic and Interactive by Default**
   - Powered by **HTMX** and **Hyperscript**, our components are designed to be interactive and dynamic without the need for JavaScript libraries like React or Vue.
   - You get **lightweight**, fast-loading components that deliver a **great user experience** without the overhead.

## Tech Stack

- **[HTMX](https://htmx.org/)** - High power tools for HTML
- **[Hyperscript](https://hyperscript.org/)** - Small scripting language for the web
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework (v3.4.17)
- **Pure HTML/CSS/JavaScript** - No build tools required

## Recent Improvements

### ✅ Tailwind CSS v4 to v3 Migration
We've successfully resolved critical styling issues by downgrading from Tailwind CSS v4 to v3.4.17:
- Fixed missing utility classes (rounded-lg, mr-4, border-border, etc.)
- Restored proper class generation for all components
- Improved CSS file size from 1 line to 4,271 lines with complete utilities
- Enhanced content scanning and class detection

### ✅ Design System Consistency
- Unified spacing, typography, and component styling across all pages
- Standardized layout structures for components, examples, and documentation
- Improved responsive design patterns
- Better dark/light mode implementation
- **Consistent Border Radius System** - Defined and implemented a standardized border radius scale

### ✅ Performance & Reliability
- Optimized build process with proper Tailwind CSS compilation
- Fixed missing CSS classes that were breaking component styling
- Enhanced cross-browser compatibility

## Current Progress

- 📅 **Actively Developing** - Regular updates and new components
- 🎨 **Design System** - Consistent styling and component patterns
- ⚡ **Performance** - Optimized for fast loading and interactions
- 🌙 **Dark Mode** - Full light/dark theme support

## Project Structure

```
src/
├── assets/           # CSS, JS, images, and icons
├── blocks/           # Pre-built page layouts
├── components/       # Individual UI components
├── examples/         # Complete page examples
├── pages/            # Documentation pages
└── partials/         # Header, footer, and navigation
```

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/AR-92/UI.git
   ```

2. Navigate to the project directory:
   ```bash
   cd UI
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the CSS:
   ```bash
   npm run build
   ```

5. Serve the project:
   ```bash
   python3 -m http.server 8000
   ```

6. Visit `http://localhost:8000/src/` in your browser

## Development

To watch for changes and automatically rebuild CSS:

```bash
npm run dev
```

## Design System

### Border Radius Consistency
We've implemented a consistent border radius system across all components:

| Class | Value | Usage |
|-------|-------|-------|
| `rounded-none` | 0px | Sharp edges, no rounding |
| `rounded-xs` | 2px | Very subtle rounding for small elements |
| `rounded-sm` | 4px | Small rounding for badges, tags, small buttons |
| `rounded` | 6px | **Default rounding** for most UI components |
| `rounded-md` | 8px | Medium rounding for cards, larger components |
| `rounded-lg` | 12px | Large rounding for containers and sections |
| `rounded-xl` | 16px | Extra large rounding for hero sections |
| `rounded-full` | 9999px | Circular elements |

See [DESIGN_SYSTEM_BORDER_RADIUS.md](DESIGN_SYSTEM_BORDER_RADIUS.md) for detailed usage guidelines.

## Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Areas Needing Help:
- Adding new components
- Improving documentation
- Fixing bugs
- Enhancing accessibility
- Optimizing performance

## Future Goals

- **Expand Component Library** - Add more UI components and patterns
- **Enhanced Documentation** - Comprehensive guides and examples
- **Testing Suite** - Automated tests for components
- **Community Features** - Requested components and improvements
- **Performance Optimization** - Further enhancements for speed

## License

This project is completely free and open source under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to:
- **Headless UI**, **ShadCN**, and **Skeleton UI** for inspiration
- The HTMX, Hyperscript, and TailwindCSS communities
- All contributors and supporters of this project

---

Happy coding! ✨