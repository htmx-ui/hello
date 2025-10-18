# Hello UI - HTMX + Hyperscript + TailwindCSS Component Library

Welcome to Hello UI, a comprehensive component library built with HTMX, Hyperscript, and TailwindCSS. This project draws inspiration from leading UI frameworks including **Headless UI**, **ShadCN**, and **Skeleton UI**. As a completely free and open-source solution, this library enables developers to seamlessly integrate components through simple copy-and-paste functionality, facilitating rapid and efficient web application development.

[Demo](https://htmx-ui.github.io/hello/src/index)

> **Status**: ✅ Production Ready - Comprehensive component library with automated testing

## Why Choose This Library?

### 1. **Exceptional Simplicity**
   - Every UI component is meticulously crafted with simplicity as a core principle, leveraging **HTMX** for dynamic interactions, **Hyperscript** for event handling, and **TailwindCSS** for styling.
   - Eliminates unnecessary complexity—providing **minimal, efficient code** to achieve your desired results.

### 2. **Seamless Integration**
   - Built for developer efficiency and convenience. Every element is designed for **straightforward copy-and-paste integration**, allowing you to incorporate components directly into your projects without friction.
   - Eliminates complex setups or configurations. Simply select the components you need and begin building immediately.

### 3. **Industry-Leading Inspiration**
   - Carefully curated best practices from renowned frameworks including **Headless UI**, **ShadCN**, and **Skeleton UI**, consolidated into a cohesive and streamlined package.

### 4. **Enhanced Data Visualizations**
   - All charts and data visualizations feature a harmonious color palette that complements the overall UI theme
   - Refined styling for superior readability and seamless integration with the comprehensive design system
   - Fully responsive design optimized for all device sizes and screen resolutions
   - Interactive charts enhanced with Hyperscript-powered animations and transitions
   - Consistent border styling with standardized radius and shadow effects
   - Delivers an optimal balance of flexibility, accessibility, and aesthetic excellence.

### 5. **TailwindCSS Optimized**
   - Fully optimized for TailwindCSS, enabling effortless customization and theming to align with your brand identity or project design language. This UI library provides **production-ready components** that adapt to any visual style.
   - Comprehensive coverage from fundamental buttons and forms to sophisticated modals and grid systems, all constructed with utility-first CSS principles.

### 6. **Inherently Dynamic and Interactive**
   - Engineered with **HTMX** and **Hyperscript** as the foundation, our components are inherently interactive and dynamic without requiring heavy JavaScript frameworks like React or Vue.
   - Delivers **lightweight**, high-performance components that provide an **exceptional user experience** while minimizing resource overhead.

## Tech Stack

- **[HTMX](https://htmx.org/)** - High power tools for HTML
- **[Hyperscript](https://hyperscript.org/)** - Small scripting language for the web
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework (v3.4.17)
- **Pure HTML/CSS/JavaScript** - No build tools required

## Recent Enhancements

### ✅ Tailwind CSS v4 to v3 Migration
We have successfully resolved critical styling inconsistencies through a strategic downgrade from Tailwind CSS v4 to v3.4.17:
- Resolved missing utility classes (rounded-lg, mr-4, border-border, etc.)
- Restored comprehensive class generation functionality for all components
- Optimized CSS file size from 1 line to 4,271 lines with complete utility coverage
- Enhanced content scanning mechanisms and class detection accuracy

### ✅ Design System Standardization
- Harmonized spacing, typography, and component styling across all pages and sections
- Standardized layout structures for components, examples, and documentation portals
- Refined responsive design patterns for optimal cross-device compatibility
- Enhanced dark/light mode implementation with improved transition effects
- **Consistent Border Radius System** - Established and implemented a comprehensive standardized border radius scale

### ✅ Performance Optimization & Reliability
- Streamlined build process with optimized Tailwind CSS compilation
- Resolved missing CSS classes that were compromising component styling integrity
- Enhanced cross-browser compatibility and rendering consistency

## Development Status

- ✅ **Production Ready** - All components implemented and tested
- 🎨 **Comprehensive Design System** - Unified styling and component architecture
- ⚡ **High Performance** - Optimized for rapid loading and seamless interactions
- 🌙 **Advanced Theme Support** - Complete light/dark mode functionality
- 🧪 **Automated Testing** - Jest test suite for component validation

## Project Architecture

```
src/
├── assets/           # Stylesheets, scripts, media, and iconography
├── blocks/           # Pre-constructed page templates and layouts
├── components/       # Modular UI components and elements
├── examples/         # Complete application page demonstrations
├── pages/            # Documentation and content pages
└── partials/         # Header, footer, and navigation modules
```

## Quick Start

### 🚀 One-Command Development
```bash
npm run dev
```
This starts the development server with hot CSS reloading on `http://localhost:8000/src/`

### 📦 Manual Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/htmx-ui/hello.git
   cd hello
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:8000/src/` in your browser

## Development Commands

```bash
# Start development server with CSS watching
npm run dev

# Build for production (minified CSS)
npm run build

# Build for development (unminified CSS)
npm run build:dev

# Start production server (builds first)
npm start

# Run tests
npm test

# Clean build artifacts
npm run clean
```

### 🎯 Available Ports
- Default: `8000`
- Custom port: `./dev.sh 3000` or `./start.sh 3000`

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

## Community Contributions

We enthusiastically welcome contributions from the developer community! Here's how you can contribute to the project:

1. Fork the repository
2. Create a dedicated feature branch
3. Implement your changes
4. Submit a comprehensive pull request

### Contribution Opportunities:
- Developing new UI components and elements
- Enhancing and expanding documentation
- Resolving identified bugs and issues
- Improving accessibility compliance
- Optimizing performance and efficiency

## Strategic Roadmap

- ✅ **Component Library Complete** - 50+ UI components fully implemented
- ✅ **Comprehensive Documentation** - Detailed guides and practical examples available
- ✅ **Automated Testing Framework** - Jest test suite implemented and passing
- **Community-Driven Features** - Open for enhancement requests and contributions
- **Advanced Performance Optimization** - Ongoing monitoring and improvements

## License

This project is completely free and open source under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to:
- **Headless UI**, **ShadCN**, and **Skeleton UI** for inspiration
- The HTMX, Hyperscript, and TailwindCSS communities
- All contributors and supporters of this project

---

Happy coding! ✨