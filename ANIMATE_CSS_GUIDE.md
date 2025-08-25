# Animate.css Comprehensive Guide for Qwen CLI

## Overview
Animate.css is a library of ready-to-use, cross-browser CSS animations that can be easily integrated into web projects. It's ideal for adding emphasis, creating home pages, sliders, and guiding user attention. This guide provides everything Qwen CLI needs to understand and implement animate.css effectively in the UI Library project.

## Core Concepts

### Installation Options
- **NPM**: `npm install animate.css --save`
- **Yarn**: `yarn add animate.css`
- **CDN**: Direct link in HTML head
- **Import**: `import 'animate.css'` in JavaScript files

### Basic Usage
1. Add `animate__animated` class to any element
2. Add specific animation class (with `animate__` prefix)
3. Example: `<h1 class="animate__animated animate__bounce">An animated element</h1>`

## Key Features

### Animation Categories
- **Attention Seekers**: bounce, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat
- **Back Entrances/Exits**: backInDown, backInLeft, backInRight, backInUp, backOutDown, backOutLeft, backOutRight, backOutUp
- **Bouncing Entrances/Exits**: bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp
- **Fading Entrances/Exits**: fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeInTopLeft, fadeInTopRight, fadeInBottomLeft, fadeInBottomRight
- **Flippers**: flip, flipInX, flipInY, flipOutX, flipOutY
- **Lightspeed**: lightSpeedInRight, lightSpeedInLeft, lightSpeedOutRight, lightSpeedOutLeft
- **Rotating Entrances/Exits**: rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight
- **Specials**: hinge, jackInTheBox, rollIn, rollOut
- **Zooming Entrances/Exits**: zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp, zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp
- **Sliding Entrances/Exits**: slideInDown, slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft, slideOutRight, slideOutUp

### CSS Custom Properties (v4+)
Control animations through CSS variables:
- `--animate-duration`: Animation length (default: 1s)
- `--animate-delay`: Start delay (default: 0s)
- `--animate-repeat`: Iteration count (default: 1)

### Utility Classes
- **Delays**: `animate__delay-1s`, `animate__delay-2s`, `animate__delay-3s`, `animate__delay-4s`, `animate__delay-5s`
- **Speeds**: `animate__slow` (2s), `animate__slower` (3s), `animate__fast` (800ms), `animate__faster` (500ms)
- **Repeats**: `animate__repeat-1`, `animate__repeat-2`, `animate__repeat-3`, `animate__infinite`

## Common Usage Patterns

### Basic HTML Usage
```html
<!-- Simple bounce animation -->
<h1 class="animate__animated animate__bounce">Hello World</h1>

<!-- Fade in with delay -->
<div class="animate__animated animate__fadeIn animate__delay-2s">Fade In</div>

<!-- Infinite pulse animation -->
<div class="animate__animated animate__pulse animate__infinite">Pulse</div>

<!-- Fast shake animation -->
<div class="animate__animated animate__shakeX animate__fast">Shake</div>
```

### JavaScript Integration
```javascript
// Add animation classes
element.classList.add('animate__animated', 'animate__bounceOutLeft');

// Detect animation end
element.addEventListener('animationend', () => {
  // Do something after animation completes
  element.remove(); // For example, remove element after exit animation
});

// Change duration
element.style.setProperty('--animate-duration', '0.5s');

// Change delay
element.style.setProperty('--animate-delay', '1s');

// Change repeat count
element.style.setProperty('--animate-repeat', '3');
```

### Combining with HTMX
```html
<!-- Trigger animation on HTMX load -->
<div hx-get="/data" 
     hx-target="#content"
     class="animate__animated animate__fadeIn">
  <div id="content">Loading...</div>
</div>

<!-- Animate element after HTMX swap -->
<div _="on htmx:afterSwap add .animate__animated.animate__fadeIn to #new-content">
  <div id="new-content" hx-get="/data"></div>
</div>
```

### Combining with Hyperscript
```html
<!-- Trigger animation with hyperscript -->
<button _="on click add .animate__animated.animate__bounce to me">
  Bounce Button
</button>

<!-- Sequence animations -->
<button _="on click 
         add .animate__animated.animate__fadeOut to #content 
         wait for animationend from #content 
         add .animate__animated.animate__fadeIn to #content">
  Fade Content
</button>
```

## Custom Builds

1. Clone repository
2. Edit `./source/animate.css` imports to include only needed animations
3. Run `npm start` to generate optimized build

## Best Practices

1. **Meaningful Animations**: Use purposefully to guide attention or signal transitions
2. **Avoid Large Elements**: Animating large elements degrades performance
3. **Don't Animate Root Elements**: Wrap content instead
4. **Limit Infinite Animations**: Can distract/annoy users
5. **Respect Prefers-Reduced-Motion**: Never disable this accessibility feature

### Accessibility Considerations
```css
/* Recommended CSS to respect user preferences */
@media (prefers-reduced-motion: reduce) {
  .animate__animated {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

## Migration Notes (v3.x to v4+)
- Added `animate__` prefix to all classes
- Use `animate.compat.css` for legacy class names
- Recommended to use prefixed version for new projects

## Browser Support
Supports all major browsers that support CSS animations, with fallbacks for older browsers through CSS custom properties.

## Integration with TailwindCSS

### Using with Tailwind Classes
```html
<div class="bg-blue-500 text-white p-4 rounded-lg animate__animated animate__fadeIn animate__delay-1s">
  Animated Card
</div>
```

### Customizing with Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    }
  }
}
```

This comprehensive guide provides Qwen CLI with all the necessary information to understand, implement, and work with animate.css effectively in the UI Library project.